import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface OrderItem {
  name: string;
  quantity: number;
  price: number;
}

interface OrderNotificationRequest {
  customerName: string;
  customerEmail: string;
  customerPhone?: string;
  items: OrderItem[];
  totalPrice: number;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { customerName, customerEmail, customerPhone, items, totalPrice }: OrderNotificationRequest = await req.json();

    console.log("Processing order notification for:", customerEmail);

    const itemsList = items.map(item => 
      `<li>${item.name} - Quantity: ${item.quantity} - $${(item.price * item.quantity).toFixed(2)}</li>`
    ).join('');

    // Send confirmation email to customer
    const customerEmailResponse = await resend.emails.send({
      from: "The Automation Network <onboarding@resend.dev>",
      to: [customerEmail],
      subject: "Order Confirmation - The Automation Network",
      html: `
        <h1>Thank you for your order, ${customerName}!</h1>
        <p>We have received your order and will contact you shortly to confirm the details.</p>
        
        <h2>Order Details:</h2>
        <ul>
          ${itemsList}
        </ul>
        
        <p><strong>Total: $${totalPrice.toFixed(2)}</strong></p>
        
        <h3>Contact Information:</h3>
        <p>Email: ${customerEmail}</p>
        ${customerPhone ? `<p>Phone: ${customerPhone}</p>` : ''}
        
        <p>We will get back to you as soon as possible to arrange delivery and payment.</p>
        
        <p>Best regards,<br>The Automation Network Team</p>
      `,
    });

    console.log("Customer email sent successfully:", customerEmailResponse);

    // Send notification email to business
    const businessEmailResponse = await resend.emails.send({
      from: "The Automation Network <onboarding@resend.dev>",
      to: ["hr@bsw-tech.com"],
      subject: "New Order Received - The Automation Network",
      html: `
        <h1>New Order Received</h1>
        <p>A new order has been placed on The Automation Network website.</p>
        
        <h2>Customer Information:</h2>
        <ul>
          <li><strong>Name:</strong> ${customerName}</li>
          <li><strong>Email:</strong> ${customerEmail}</li>
          ${customerPhone ? `<li><strong>Phone:</strong> ${customerPhone}</li>` : ''}
        </ul>
        
        <h2>Order Details:</h2>
        <ul>
          ${itemsList}
        </ul>
        
        <p><strong>Total: $${totalPrice.toFixed(2)}</strong></p>
        
        <p>Please contact the customer to arrange delivery and payment.</p>
      `,
    });

    console.log("Business notification email sent successfully:", businessEmailResponse);

    return new Response(JSON.stringify({ 
      customer: customerEmailResponse, 
      business: businessEmailResponse 
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error sending order notification:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
