import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.57.3";
import { Resend } from "npm:resend@2.0.0";
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";

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

const TrainerApplicationSchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().max(20).optional(),
  expertise: z.string().trim().min(1).max(200),
  experienceYears: z.number().int().min(0).max(100),
  linkedinUrl: z.string().trim().url().max(500).optional(),
  portfolioUrl: z.string().trim().url().max(500).optional(),
  bio: z.string().trim().min(1).max(2000),
  whyTeach: z.string().trim().min(1).max(2000),
  website: z.string().max(0).optional(), // Honeypot field
});

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface TrainerApplicationRequest {
  name: string;
  email: string;
  phone?: string;
  expertise: string;
  experienceYears: number;
  linkedinUrl?: string;
  portfolioUrl?: string;
  bio: string;
  whyTeach: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });
  }

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    // Rate limiting: Get client IP
    const clientIp = req.headers.get('x-forwarded-for')?.split(',')[0] || 
                     req.headers.get('x-real-ip') || 
                     'unknown';
    
    // Check rate limit with exponential backoff
    const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000).toISOString();
    const { data: rateLimitData, error: rateLimitError } = await supabase
      .from('rate_limit_log')
      .select('*')
      .eq('ip_address', clientIp)
      .eq('endpoint', 'send-trainer-application')
      .gte('request_time', oneHourAgo)
      .order('request_time', { ascending: false });

    if (rateLimitError) {
      console.error('Rate limit check error:', rateLimitError);
    } else if (rateLimitData && rateLimitData.length >= 5) {
      const violationCount = rateLimitData.length - 4;
      const minutesToWait = Math.min(Math.pow(2, violationCount), 60);
      console.warn(`Rate limit exceeded for ${clientIp}. Violations: ${violationCount}, Wait: ${minutesToWait}min`);
      
      return new Response(
        JSON.stringify({ 
          error: `Too many requests. Please try again in ${minutesToWait} minutes.` 
        }),
        {
          status: 429,
          headers: { 'Content-Type': 'application/json', ...corsHeaders },
        }
      );
    }

    // Log this request
    await supabase.from('rate_limit_log').insert({
      ip_address: clientIp,
      endpoint: 'send-trainer-application',
      request_time: new Date().toISOString()
    });

    const body: TrainerApplicationRequest = await req.json();
    console.log('Received trainer application from:', body.email);

    const validationResult = TrainerApplicationSchema.safeParse(body);
    if (!validationResult.success) {
      console.error('Validation error:', validationResult.error);
      return new Response(
        JSON.stringify({ 
          error: 'Validation failed',
          details: validationResult.error.issues 
        }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json', ...corsHeaders },
        }
      );
    }

    const validData = validationResult.data;

    // Honeypot check
    if (validData.website) {
      console.warn('Honeypot triggered for IP:', clientIp);
      return new Response(
        JSON.stringify({ error: 'Invalid submission' }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json', ...corsHeaders },
        }
      );
    }

    const { data: dbData, error: dbError } = await supabase
      .from('trainer_applications')
      .insert({
        name: validData.name,
        email: validData.email,
        phone: validData.phone || null,
        expertise: validData.expertise,
        experience_years: validData.experienceYears,
        linkedin_url: validData.linkedinUrl || null,
        portfolio_url: validData.portfolioUrl || null,
        bio: validData.bio,
        why_teach: validData.whyTeach,
      })
      .select()
      .single();

    if (dbError) {
      console.error('Database error:', dbError);
      throw new Error('Failed to save trainer application');
    }

    console.log('Saved to database:', dbData);

    const resend = new Resend(Deno.env.get('RESEND_API_KEY'));

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1e40af;">New Trainer Application Received</h2>
        
        <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0;">Applicant Information:</h3>
          <p><strong>Name:</strong> ${escapeHtml(validData.name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(validData.email)}</p>
          ${validData.phone ? `<p><strong>Phone:</strong> ${escapeHtml(validData.phone)}</p>` : ''}
          <p><strong>Expertise:</strong> ${escapeHtml(validData.expertise)}</p>
          <p><strong>Years of Experience:</strong> ${validData.experienceYears}</p>
          ${validData.linkedinUrl ? `<p><strong>LinkedIn:</strong> <a href="${escapeHtml(validData.linkedinUrl)}">${escapeHtml(validData.linkedinUrl)}</a></p>` : ''}
          ${validData.portfolioUrl ? `<p><strong>Portfolio:</strong> <a href="${escapeHtml(validData.portfolioUrl)}">${escapeHtml(validData.portfolioUrl)}</a></p>` : ''}
        </div>
        
        <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px; margin-bottom: 20px;">
          <h3 style="margin-top: 0;">Bio:</h3>
          <p style="white-space: pre-wrap;">${escapeHtml(validData.bio)}</p>
        </div>
        
        <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
          <h3 style="margin-top: 0;">Why They Want to Teach:</h3>
          <p style="white-space: pre-wrap;">${escapeHtml(validData.whyTeach)}</p>
        </div>
        
        <p style="color: #6b7280; font-size: 12px; margin-top: 20px;">
          This application was submitted through the "Apply to Teach" form.
        </p>
      </div>
    `;

    const { data: emailData, error: emailError } = await resend.emails.send({
      from: 'Embedded school <onboarding@resend.dev>',
      to: ['learn@embedded.school'],
      subject: `New Trainer Application from ${validData.name}`,
      html: emailHtml,
    });

    if (emailError) {
      console.error('Email sending error:', emailError);
      throw emailError;
    }

    console.log('Email sent successfully:', emailData);

    return new Response(
      JSON.stringify({ success: true, id: dbData.id }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error('Error in send-trainer-application function:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      }
    );
  }
};

serve(handler);
