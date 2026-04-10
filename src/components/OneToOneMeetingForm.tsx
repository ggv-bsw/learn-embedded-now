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
import { useLanguage } from "@/contexts/LanguageContext";
import { useFormRateLimit } from "@/utils/rateLimit";
import { meetingFormSchema, validateFormData, getValidationErrorMessage } from "@/utils/formValidation";

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
  const { t } = useLanguage();
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

    const { checkLimit } = useFormRateLimit("meeting-form");
    const { allowed, message: rateLimitMessage } = checkLimit();

    if (!allowed) {
      toast({
        title: t('meetingForm.rateLimited'),
        description: rateLimitMessage,
        variant: "destructive",
      });
      return;
    }

    // Validate form data using schema
    const validation = await validateFormData(meetingFormSchema, {
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      topic: trainerName || 'Meeting request',
      message: formData.message.trim(),
      preferredDate: formData.preferred_date || undefined,
      timeSlot: undefined,
    });

    if (!validation.success) {
      const errorMessage = getValidationErrorMessage(validation.errors || {});
      toast({
        title: t('meetingForm.validationError'),
        description: errorMessage,
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('send-meeting-request', {
        body: {
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim() || undefined,
          trainerName: trainerName,
          preferredDate: formData.preferred_date || undefined,
          message: formData.message.trim() || undefined,
        }
      });

      if (error) {
        console.error('Error submitting meeting request:', error);
        throw new Error(error.message || 'Failed to submit request');
      }

      toast({
        title: t('meetingForm.success'),
        description: t('meetingForm.successMessage').replace('{trainer}', trainerName),
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        preferred_date: "",
        message: "",
      });
      onOpenChange(false);
    } catch (error: any) {
      console.error("Error submitting meeting request:", error);
      toast({
        title: t('meetingForm.error'),
        description: error.message || t('meetingForm.errorMessage'),
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
            {t('meetingForm.title')}
          </DialogTitle>
          <DialogDescription className="text-gray-400">
            {t('meetingForm.description')} {trainerName}.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-white">
              {t('meetingForm.name')} <span className="text-red-400">*</span>
            </Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder={t('meetingForm.namePlaceholder')}
              required
              className="bg-slate-900 border-slate-700 text-white placeholder:text-gray-500"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-white">
              {t('meetingForm.email')} <span className="text-red-400">*</span>
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder={t('meetingForm.emailPlaceholder')}
              required
              className="bg-slate-900 border-slate-700 text-white placeholder:text-gray-500"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-white">
              {t('meetingForm.phone')}
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder={t('meetingForm.phonePlaceholder')}
              className="bg-slate-900 border-slate-700 text-white placeholder:text-gray-500"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="preferred_date" className="text-white">
              {t('meetingForm.preferredDate')}
            </Label>
            <Input
              id="preferred_date"
              name="preferred_date"
              value={formData.preferred_date}
              onChange={handleInputChange}
              placeholder={t('meetingForm.datePlaceholder')}
              className="bg-slate-900 border-slate-700 text-white placeholder:text-gray-500"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-white">
              {t('meetingForm.message')}
            </Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder={t('meetingForm.messagePlaceholder')}
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
              {t('meetingForm.cancel')}
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
              disabled={isSubmitting || !formData.name.trim() || !formData.email.trim()}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  {t('meetingForm.submitting')}
                </>
              ) : (
                t('meetingForm.requestButton')
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default OneToOneMeetingForm;
