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
const CourseInquirySchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  surname: z.string().trim().min(1, "Surname is required").max(100, "Surname must be less than 100 characters"),
  courseId: z.string().trim().min(1, "Course selection is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters").optional(),
  phone: z.string().trim().max(20, "Phone must be less than 20 characters").optional(),
  message: z.string().trim().max(2000, "Message must be less than 2000 characters").optional(),
});

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface CourseInquiryRequest {
  name: string;
  surname: string;
  courseId: string;
  email?: string;
  phone?: string;
  message?: string;
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
    const validationResult = CourseInquirySchema.safeParse(requestData);
    
    if (!validationResult.success) {
      console.error("Validation error:", validationResult.error);
      return new Response(
        JSON.stringify({ error: "Invalid input", details: validationResult.error.errors }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const { name, surname, courseId, email, phone, message } = validationResult.data;

    console.log("Received course inquiry:", { name, surname, courseId, email });

    // Store in database
    const { data, error: dbError } = await supabase
      .from('course_inquiries')
      .insert({
        name,
        surname,
        course_id: courseId,
        email: email || null,
        phone: phone || null,
        message: message || null,
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

    // Course mapping for email
    const courseNames: Record<string, string> = {
      "embedded-c-arduino": "Intro to Embedded C with Arduino",
      "iot-systems": "Complete IoT Systems Development",
      "advanced-embedded-c": "Advanced Embedded C Programming"
    };

    const courseName = courseNames[courseId] || courseId;

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
        subject: `New Course Inquiry - ${courseName}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #1e293b; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
              New Course Inquiry
            </h2>
            
            <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #3b82f6; margin-top: 0;">Student Information</h3>
              <p><strong>Name:</strong> ${escapeHtml(name)} ${escapeHtml(surname)}</p>
              <p><strong>Course of Interest:</strong> ${escapeHtml(courseName)}</p>
              ${email ? `<p><strong>Email:</strong> ${escapeHtml(email)}</p>` : ''}
              ${phone ? `<p><strong>Phone:</strong> ${escapeHtml(phone)}</p>` : ''}
            </div>

            ${message ? `
            <div style="background: #f1f5f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #475569; margin-top: 0;">Additional Message</h3>
              <p style="color: #475569;">${escapeHtml(message)}</p>
            </div>
            ` : ''}

            <div style="background: #0f172a; color: white; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <p style="margin: 0; font-size: 14px;">
                This inquiry was submitted through the Engineers Factory website on ${new Date().toLocaleString()}.
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
        message: "Inquiry submitted successfully",
        id: data.id 
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
    console.error("Error in send-course-inquiry function:", error);
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