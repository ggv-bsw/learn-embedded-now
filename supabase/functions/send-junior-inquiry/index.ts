import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.57.3';
import { z } from 'https://deno.land/x/zod@v3.22.4/mod.ts';

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

// HTML escape helper to prevent email injection
const escapeHtml = (text: string): string => {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
};

// Validation schema
const JuniorInquirySchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  surname: z.string().trim().min(1, "Surname is required").max(100, "Surname must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().max(20, "Phone must be less than 20 characters").optional(),
});

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface JuniorInquiryRequest {
  name: string;
  surname: string;
  email: string;
  phone?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response("Method not allowed", { 
      status: 405, 
      headers: corsHeaders 
    });
  }

  try {
    // Initialize Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const requestData = await req.json();

    // Validate input with Zod
    const validationResult = JuniorInquirySchema.safeParse(requestData);
    
    if (!validationResult.success) {
      console.error("Validation error:", validationResult.error);
      return new Response(
        JSON.stringify({ error: "Invalid input", details: validationResult.error.errors }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const { name, surname, email, phone } = validationResult.data;

    console.log("Received junior program inquiry:", { name, surname, email });

    // Store in database
    const { data, error: dbError } = await supabase
      .from('junior_program_applications')
      .insert({
        name,
        surname,
        email,
        phone: phone || null,
      })
      .select()
      .single();

    if (dbError) {
      console.error("Database error:", dbError);
      return new Response(
        JSON.stringify({ error: "Failed to save inquiry" }),
        { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    console.log("Saved to database:", data);

    // Send email notification via Resend API
    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Engineers Factory <onboarding@resend.dev>",
        to: ["hr@bsw-tech.com"],
        subject: `New Junior Program Application - ${name} ${surname}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #1a202c; border-bottom: 2px solid #3182ce; padding-bottom: 10px;">
              New Junior Program Application
            </h2>
            
            <div style="background: #f7fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #3182ce; margin-top: 0;">Student Information</h3>
              <p><strong>Name:</strong> ${escapeHtml(name)} ${escapeHtml(surname)}</p>
              <p><strong>Email:</strong> ${escapeHtml(email)}</p>
              ${phone ? `<p><strong>Phone:</strong> ${escapeHtml(phone)}</p>` : ''}
            </div>

            <div style="background: #e6fffa; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #38b2ac;">
              <h3 style="color: #2d3748; margin-top: 0;">Program Details</h3>
              <p style="color: #4a5568; margin: 0;">
                <strong>Weekend School for Juniors (Ages 12-18)</strong><br>
                Build Rockets of the Future Program
              </p>
            </div>

            <div style="background: #1a202c; color: white; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <p style="margin: 0; font-size: 14px;">
                This application was submitted through the Engineers Factory website on ${new Date().toLocaleString()}.
              </p>
            </div>
          </div>
        `,
      }),
    });

    const emailData = await emailResponse.json();
    console.log("Email sent successfully:", emailData);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Junior program inquiry submitted successfully"
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );

  } catch (error: any) {
    console.error("Error in send-junior-inquiry function:", error);
    return new Response(
      JSON.stringify({ error: error.message || "Internal server error" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);