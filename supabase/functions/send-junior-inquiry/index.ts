import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

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
    const { name, surname, email, phone }: JuniorInquiryRequest = await req.json();

    console.log("Received junior program inquiry:", { name, surname, email });

    // Validate required fields
    if (!name || !surname || !email) {
      return new Response(
        JSON.stringify({ error: "Name, surname, and email are required" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Send email notification
    const emailResponse = await resend.emails.send({
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
            <p><strong>Name:</strong> ${name} ${surname}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
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
    });

    console.log("Email sent successfully:", emailResponse);

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