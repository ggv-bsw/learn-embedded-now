import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

interface OneToOneMeetingFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  trainerName: string;
}

const OneToOneMeetingForm = ({
  open,
  onOpenChange,
  trainerName,
}: OneToOneMeetingFormProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    preferred_date: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim()) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields (Name and Email).",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("one_to_one_requests").insert({
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim() || null,
        trainer_name: trainerName,
        preferred_date: formData.preferred_date || null,
        message: formData.message.trim() || null,
      });

      if (error) throw error;

      toast({
        title: "Request Submitted!",
        description: `Your one-to-one meeting request with ${trainerName} has been received. We'll contact you soon.`,
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        preferred_date: "",
        message: "",
      });
      onOpenChange(false);
    } catch (error) {
      console.error("Error submitting meeting request:", error);
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] bg-slate-800 border-slate-700">
        <DialogHeader>
          <DialogTitle className="text-white">
            Request One-to-One Session
          </DialogTitle>
          <DialogDescription className="text-gray-400">
            Fill in your details to schedule a one-to-one meeting with {trainerName}.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-white">
              Name <span className="text-red-400">*</span>
            </Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your full name"
              required
              className="bg-slate-900 border-slate-700 text-white placeholder:text-gray-500"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-white">
              Email <span className="text-red-400">*</span>
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="your.email@example.com"
              required
              className="bg-slate-900 border-slate-700 text-white placeholder:text-gray-500"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-white">
              Phone Number
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="+1 234 567 8900"
              className="bg-slate-900 border-slate-700 text-white placeholder:text-gray-500"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="preferred_date" className="text-white">
              Preferred Date/Time
            </Label>
            <Input
              id="preferred_date"
              name="preferred_date"
              value={formData.preferred_date}
              onChange={handleInputChange}
              placeholder="e.g., Next Monday afternoon"
              className="bg-slate-900 border-slate-700 text-white placeholder:text-gray-500"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-white">
              Message
            </Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Tell us about your learning goals or any specific topics you'd like to discuss..."
              className="bg-slate-900 border-slate-700 text-white placeholder:text-gray-500 min-h-[100px]"
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="flex-1 border-slate-600 text-slate-900 hover:bg-slate-700"
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
              disabled={isSubmitting || !formData.name.trim() || !formData.email.trim()}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Request One-to-One"
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default OneToOneMeetingForm;
