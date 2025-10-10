import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.57.3';
import { z } from 'https://deno.land/x/zod@v3.22.4/mod.ts';

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

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

// Create Supabase client with service role key to bypass RLS
const supabaseAdmin = createClient(
  Deno.env.get('SUPABASE_URL') ?? '',
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  }
);

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Validation schemas
const OrderItemSchema = z.object({
  name: z.string().trim().min(1, "Product name is required").max(200, "Product name too long"),
  quantity: z.number().int().positive("Quantity must be positive").max(1000, "Quantity too large"),
  price: z.number().positive("Price must be positive").max(1000000, "Price too large")
});

const OrderNotificationSchema = z.object({
  customerName: z.string().trim().min(1, "Name is required").max(100, "Name too long"),
  customerEmail: z.string().trim().email("Invalid email address").max(255, "Email too long"),
  customerPhone: z.string().trim().max(20, "Phone number too long").optional(),
  items: z.array(OrderItemSchema).min(1, "At least one item is required").max(100, "Too many items"),
  totalPrice: z.number().positive("Total price must be positive").max(1000000, "Total price too large")
});

type OrderItem = z.infer<typeof OrderItemSchema>;
type OrderNotificationRequest = z.infer<typeof OrderNotificationSchema>;

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const rawBody = await req.json();
    
    // Validate input data
    const validationResult = OrderNotificationSchema.safeParse(rawBody);
    
    if (!validationResult.success) {
      console.error("Validation error:", validationResult.error);
      return new Response(
        JSON.stringify({ 
          error: "Invalid order data", 
          details: validationResult.error.issues 
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }
    
    const { customerName, customerEmail, customerPhone, items, totalPrice } = validationResult.data;

    console.log("Processing order for:", customerEmail);

    // Step 1: Insert order into database using service role (bypasses RLS)
    const { data: orderData, error: orderError } = await supabaseAdmin
      .from('orders')
      .insert({
        customer_name: customerName,
        customer_email: customerEmail,
        customer_phone: customerPhone,
        total_price: totalPrice,
        status: 'pending'
      })
      .select()
      .single();

    if (orderError) {
      console.error('Error creating order:', orderError);
      throw new Error(`Failed to create order: ${orderError.message}`);
    }

    console.log("Order created with ID:", orderData.id);

    // Step 2: Insert order items
    const orderItems = items.map(item => ({
      order_id: orderData.id,
      product_id: item.name, // Using name as ID since we don't have product IDs
      product_name: item.name,
      product_image: '', // Frontend doesn't send image
      quantity: item.quantity,
      unit_price: item.price,
      total_price: item.price * item.quantity
    }));

    const { error: itemsError } = await supabaseAdmin
      .from('order_items')
      .insert(orderItems);

    if (itemsError) {
      console.error('Error creating order items:', itemsError);
      throw new Error(`Failed to create order items: ${itemsError.message}`);
    }

    console.log("Order items created successfully");

    // Step 3: Send notification emails

    const itemsList = items.map(item => 
      `<li>${escapeHtml(item.name)} - Quantity: ${item.quantity} - ${(item.price * item.quantity).toFixed(2)} mdl</li>`
    ).join('');

    // Send confirmation email to customer
    const customerEmailResponse = await resend.emails.send({
      from: "Embedded school <noreply@embedded.school>",
      to: [customerEmail],
      subject: "Order Confirmation - Embedded school",
      html: `
        <h1>Thank you for your order, ${escapeHtml(customerName)}!</h1>
        <p>We have received your order and will contact you shortly to confirm the details.</p>
        
        <h2>Order Details:</h2>
        <ul>
          ${itemsList}
        </ul>
        
        <p><strong>Total: ${totalPrice.toFixed(2)} mdl</strong></p>
        
        <h3>Contact Information:</h3>
        <p>Email: ${escapeHtml(customerEmail)}</p>
        ${customerPhone ? `<p>Phone: ${escapeHtml(customerPhone)}</p>` : ''}
        
        <p>We will get back to you as soon as possible to arrange delivery and payment.</p>
        
        <p>Best regards,<br>Embedded school Team</p>
      `,
    });

    console.log("Customer email sent successfully:", customerEmailResponse);

    // Send notification email to business
    const businessEmailResponse = await resend.emails.send({
      from: "Embedded school <noreply@embedded.school>",
      to: ["learn@embedded.school"],
      subject: "New Order Received - Embedded school",
      html: `
        <h1>New Order Received</h1>
        <p>A new order has been placed on the Embedded school website.</p>
        
        <h2>Customer Information:</h2>
        <ul>
          <li><strong>Name:</strong> ${escapeHtml(customerName)}</li>
          <li><strong>Email:</strong> ${escapeHtml(customerEmail)}</li>
          ${customerPhone ? `<li><strong>Phone:</strong> ${escapeHtml(customerPhone)}</li>` : ''}
        </ul>
        
        <h2>Order Details:</h2>
        <ul>
          ${itemsList}
        </ul>
        
        <p><strong>Total: ${totalPrice.toFixed(2)} mdl</strong></p>
        
        <p>Please contact the customer to arrange delivery and payment.</p>
      `,
    });

    console.log("Business notification email sent successfully:", businessEmailResponse);

    return new Response(JSON.stringify({ 
      success: true,
      orderId: orderData.id,
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
