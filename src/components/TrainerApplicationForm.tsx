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
import { useLanguage } from "@/contexts/LanguageContext";
import { useFormRateLimit } from "@/utils/rateLimit";
import { trainerApplicationFormSchema, validateFormData, getValidationErrorMessage } from "@/utils/formValidation";

interface TrainerApplicationFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const TrainerApplicationForm: React.FC<TrainerApplicationFormProps> = ({
  open,
  onOpenChange,
}) => {
  const { toast } = useToast();
  const { t } = useLanguage();
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

    const { checkLimit } = useFormRateLimit("trainer-app-form");
    const { allowed, message: rateLimitMessage } = checkLimit();

    if (!allowed) {
      toast({
        title: t('trainerForm.rateLimited'),
        description: rateLimitMessage,
        variant: "destructive",
      });
      return;
    }

    const experienceYearsNum = parseInt(formData.experienceYears);
    if (isNaN(experienceYearsNum) || experienceYearsNum < 0) {
      toast({
        title: t('trainerForm.invalidExperience'),
        description: t('trainerForm.validYears'),
        variant: "destructive",
      });
      return;
    }

    // Validate form data using schema
    const validation = await validateFormData(trainerApplicationFormSchema, {
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      experience: experienceYearsNum,
      specialization: formData.expertise.trim(),
      certifications: formData.bio.trim(),
      portfolio: formData.portfolioUrl || undefined,
      motivation: formData.whyTeach.trim(),
    });

    if (!validation.success) {
      const errorMessage = getValidationErrorMessage(validation.errors || {});
      toast({
        title: t('trainerForm.validationError'),
        description: errorMessage,
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke('send-trainer-application', {
        body: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone || undefined,
          expertise: formData.expertise,
          experienceYears: experienceYearsNum,
          linkedinUrl: formData.linkedinUrl || undefined,
          portfolioUrl: formData.portfolioUrl || undefined,
          bio: formData.bio,
          whyTeach: formData.whyTeach,
        }
      });

      if (error) {
        console.error("Submit error:", error);
        throw new Error(error.message || "Failed to submit application");
      }

      toast({
        title: t('trainerForm.success'),
        description: t('trainerForm.successMessage'),
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
        title: t('trainerForm.error'),
        description: error.message || t('trainerForm.errorMessage'),
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
            {t('trainerForm.title')}
          </DialogTitle>
          <DialogDescription>
            {t('trainerForm.description')}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium">
              {t('trainerForm.fullName')} *
            </Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              placeholder={t('trainerForm.namePlaceholder')}
              disabled={loading}
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">
                {t('trainerForm.email')} *
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder={t('trainerForm.emailPlaceholder')}
                disabled={loading}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm font-medium">
                {t('trainerForm.phone')}
              </Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                placeholder={t('trainerForm.phonePlaceholder')}
                disabled={loading}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="expertise" className="text-sm font-medium">
                {t('trainerForm.expertise')} *
              </Label>
              <Input
                id="expertise"
                value={formData.expertise}
                onChange={(e) => handleInputChange("expertise", e.target.value)}
                placeholder={t('trainerForm.expertisePlaceholder')}
                disabled={loading}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="experienceYears" className="text-sm font-medium">
                {t('trainerForm.experienceYears')} *
              </Label>
              <Input
                id="experienceYears"
                type="number"
                min="0"
                value={formData.experienceYears}
                onChange={(e) =>
                  handleInputChange("experienceYears", e.target.value)
                }
                placeholder={t('trainerForm.experienceYearsPlaceholder')}
                disabled={loading}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="linkedinUrl" className="text-sm font-medium">
                {t('trainerForm.linkedinUrl')}
              </Label>
              <Input
                id="linkedinUrl"
                type="url"
                value={formData.linkedinUrl}
                onChange={(e) =>
                  handleInputChange("linkedinUrl", e.target.value)
                }
                placeholder={t('trainerForm.linkedinPlaceholder')}
                disabled={loading}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="portfolioUrl" className="text-sm font-medium">
                {t('trainerForm.portfolioUrl')}
              </Label>
              <Input
                id="portfolioUrl"
                type="url"
                value={formData.portfolioUrl}
                onChange={(e) =>
                  handleInputChange("portfolioUrl", e.target.value)
                }
                placeholder={t('trainerForm.portfolioPlaceholder')}
                disabled={loading}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="bio" className="text-sm font-medium">
              {t('trainerForm.bio')} *
            </Label>
            <Textarea
              id="bio"
              value={formData.bio}
              onChange={(e) => handleInputChange("bio", e.target.value)}
              placeholder={t('trainerForm.bioPlaceholder')}
              rows={4}
              disabled={loading}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="whyTeach" className="text-sm font-medium">
              {t('trainerForm.whyTeach')} *
            </Label>
            <Textarea
              id="whyTeach"
              value={formData.whyTeach}
              onChange={(e) => handleInputChange("whyTeach", e.target.value)}
              placeholder={t('trainerForm.whyTeachPlaceholder')}
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
              {t('trainerForm.cancel')}
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
                  {t('trainerForm.submitting')}
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  {t('trainerForm.submit')}
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
