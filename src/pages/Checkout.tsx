import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "sonner";
import { ArrowLeft, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const Checkout = () => {
  const { items, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Call edge function to create order and send notifications
      // The edge function uses service role credentials to securely handle database operations
      const { data, error } = await supabase.functions.invoke(
        "send-order-notification",
        {
          body: {
            customerName: formData.name,
            customerEmail: formData.email,
            customerPhone: formData.phone,
            items: items.map((item) => ({
              name: item.name,
              quantity: item.quantity,
              price: item.price,
            })),
            totalPrice: totalPrice,
          },
        }
      );

      if (error) throw error;

      console.log("Order created successfully:", data);
      toast.success(
        "Order placed successfully! Check your email for confirmation."
      );
      clearCart();
      navigate("/");
    } catch (error: any) {
      console.error("Error placing order:", error);
      toast.error("Failed to place order. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <Card className="p-8 bg-slate-900 border-slate-800 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Your cart is empty
          </h2>
          <Button onClick={() => navigate("/hardware")}>Browse Hardware</Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-4 text-white hover:text-white/80"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        <h1 className="text-4xl font-bold text-white mb-8">Checkout</h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Order Summary */}
          <div>
            <Card className="p-6 bg-slate-900 border-slate-800">
              <h2 className="text-2xl font-bold text-white mb-4">
                Order Summary
              </h2>
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-contain bg-white rounded"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-white">{item.name}</h3>
                      <p className="text-gray-400">Quantity: {item.quantity}</p>
                      <p className="text-gray-400">
                        ${item.price} × {item.quantity}
                      </p>
                    </div>
                    <div className="text-white font-bold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>
              <Separator className="my-4 bg-slate-700" />
              <div className="flex justify-between text-xl font-bold text-white">
                <span>Total:</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="p-6 bg-slate-900 border-slate-800">
              <h2 className="text-2xl font-bold text-white mb-4">
                Contact Information
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-white">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="bg-slate-800 border-slate-700 text-white"
                    disabled={isLoading}
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-white">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="bg-slate-800 border-slate-700 text-white"
                    disabled={isLoading}
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-white">
                    Phone
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="bg-slate-800 border-slate-700 text-white"
                    disabled={isLoading}
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Processing Order...
                    </>
                  ) : (
                    "Place Order"
                  )}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
