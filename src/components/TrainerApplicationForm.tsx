import React, { useState } from "react";
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
import { Loader2, Send } from "lucide-react";

interface TrainerApplicationFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const TrainerApplicationForm: React.FC<TrainerApplicationFormProps> = ({
  open,
  onOpenChange,
}) => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    expertise: "",
    experienceYears: "",
    linkedinUrl: "",
    portfolioUrl: "",
    bio: "",
    whyTeach: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.expertise ||
      !formData.experienceYears ||
      !formData.bio ||
      !formData.whyTeach
    ) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    const experienceYearsNum = parseInt(formData.experienceYears);
    if (isNaN(experienceYearsNum) || experienceYearsNum < 0) {
      toast({
        title: "Invalid Experience",
        description: "Please enter a valid number of years of experience.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    try {
      const { error } = await supabase.from("trainer_applications").insert({
        name: formData.name,
        email: formData.email,
        phone: formData.phone || null,
        expertise: formData.expertise,
        experience_years: experienceYearsNum,
        linkedin_url: formData.linkedinUrl || null,
        portfolio_url: formData.portfolioUrl || null,
        bio: formData.bio,
        why_teach: formData.whyTeach,
      });

      if (error) {
        console.error("Submit error:", error);
        throw new Error(error.message || "Failed to submit application");
      }

      toast({
        title: "Application Submitted!",
        description:
          "Thank you for your interest in becoming a trainer! We'll review your application and get back to you soon.",
      });

      // Reset form and close dialog
      setFormData({
        name: "",
        email: "",
        phone: "",
        expertise: "",
        experienceYears: "",
        linkedinUrl: "",
        portfolioUrl: "",
        bio: "",
        whyTeach: "",
      });
      onOpenChange(false);
    } catch (error: any) {
      console.error("Submit error:", error);
      toast({
        title: "Submission Failed",
        description:
          error.message ||
          "There was an error submitting your application. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">
            Apply to Become a Trainer
          </DialogTitle>
          <DialogDescription>
            Join our team of expert trainers and help shape the next generation
            of embedded systems engineers. Fill out the form below and we'll be
            in touch soon.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium">
              Full Name *
            </Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              placeholder="Enter your full name"
              disabled={loading}
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">
                Email Address *
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder="your.email@example.com"
                disabled={loading}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm font-medium">
                Phone Number
              </Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                placeholder="+373 ________"
                disabled={loading}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="expertise" className="text-sm font-medium">
                Primary Expertise Area *
              </Label>
              <Input
                id="expertise"
                value={formData.expertise}
                onChange={(e) => handleInputChange("expertise", e.target.value)}
                placeholder="e.g., Embedded Systems, IoT"
                disabled={loading}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="experienceYears" className="text-sm font-medium">
                Years of Experience *
              </Label>
              <Input
                id="experienceYears"
                type="number"
                min="0"
                value={formData.experienceYears}
                onChange={(e) =>
                  handleInputChange("experienceYears", e.target.value)
                }
                placeholder="5"
                disabled={loading}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="linkedinUrl" className="text-sm font-medium">
                LinkedIn Profile URL
              </Label>
              <Input
                id="linkedinUrl"
                type="url"
                value={formData.linkedinUrl}
                onChange={(e) =>
                  handleInputChange("linkedinUrl", e.target.value)
                }
                placeholder="https://linkedin.com/in/..."
                disabled={loading}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="portfolioUrl" className="text-sm font-medium">
                Portfolio/Website URL
              </Label>
              <Input
                id="portfolioUrl"
                type="url"
                value={formData.portfolioUrl}
                onChange={(e) =>
                  handleInputChange("portfolioUrl", e.target.value)
                }
                placeholder="https://yourwebsite.com"
                disabled={loading}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="bio" className="text-sm font-medium">
              Professional Bio *
            </Label>
            <Textarea
              id="bio"
              value={formData.bio}
              onChange={(e) => handleInputChange("bio", e.target.value)}
              placeholder="Tell us about your professional background, achievements, and expertise..."
              rows={4}
              disabled={loading}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="whyTeach" className="text-sm font-medium">
              Why Do You Want to Teach? *
            </Label>
            <Textarea
              id="whyTeach"
              value={formData.whyTeach}
              onChange={(e) => handleInputChange("whyTeach", e.target.value)}
              placeholder="Share your motivation for becoming a trainer and what you hope to bring to our students..."
              rows={4}
              disabled={loading}
              required
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={loading}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={
                loading ||
                !formData.name ||
                !formData.email ||
                !formData.expertise ||
                !formData.experienceYears ||
                !formData.bio ||
                !formData.whyTeach
              }
              className="flex-1"
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Submit Application
                </>
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default TrainerApplicationForm;
