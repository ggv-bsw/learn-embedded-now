import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.57.3';
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

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

    const { name, surname, courseId, email, phone, message }: CourseInquiryRequest = await req.json();

    console.log("Received course inquiry:", { name, surname, courseId, email });

    // Validate required fields
    if (!name || !surname || !courseId) {
      return new Response(
        JSON.stringify({ error: "Name, surname, and course selection are required" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

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

    // Send email notification
    const emailResponse = await resend.emails.send({
      from: "Engineers Factory <onboarding@resend.dev>",
      to: ["contact@engineersfactory.com"], // Replace with your actual email
      subject: `New Course Inquiry - ${courseName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e293b; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
            New Course Inquiry
          </h2>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #3b82f6; margin-top: 0;">Student Information</h3>
            <p><strong>Name:</strong> ${name} ${surname}</p>
            <p><strong>Course of Interest:</strong> ${courseName}</p>
            ${email ? `<p><strong>Email:</strong> ${email}</p>` : ''}
            ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
          </div>

          ${message ? `
          <div style="background: #f1f5f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #475569; margin-top: 0;">Additional Message</h3>
            <p style="color: #475569;">${message}</p>
          </div>
          ` : ''}

          <div style="background: #0f172a; color: white; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0; font-size: 14px;">
              This inquiry was submitted through the Engineers Factory website on ${new Date().toLocaleString()}.
            </p>
          </div>
        </div>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

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