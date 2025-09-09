import React, { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLanguage } from "@/contexts/LanguageContext";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Send } from "lucide-react";

interface CourseInquiryFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CourseInquiryForm: React.FC<CourseInquiryFormProps> = ({ open, onOpenChange }) => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    courseId: "",
    email: "",
    phone: "",
    message: ""
  });

  const courses = [
    { id: "embedded-c-arduino", name: "Intro to Embedded C with Arduino" },
    { id: "iot-systems", name: "Complete IoT Systems Development" },
    { id: "advanced-embedded-c", name: "Advanced Embedded C Programming" }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.surname || !formData.courseId) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields (Name, Surname, and Course selection).",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke('send-course-inquiry', {
        body: formData
      });

      if (error) {
        console.error('Function error:', error);
        throw new Error(error.message || 'Failed to submit inquiry');
      }

      toast({
        title: "Inquiry Submitted!",
        description: "Thank you for your interest! We'll contact you soon with more information.",
      });

      // Reset form and close dialog
      setFormData({
        name: "",
        surname: "",
        courseId: "",
        email: "",
        phone: "",
        message: ""
      });
      onOpenChange(false);

    } catch (error: any) {
      console.error('Submit error:', error);
      toast({
        title: "Submission Failed",
        description: error.message || "There was an error submitting your inquiry. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">
            {t('form.title', 'Start Your Learning Journey')}
          </DialogTitle>
          <DialogDescription>
            {t('form.description', 'Fill out this form and we\'ll get back to you with course details and enrollment information.')}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium">
                {t('form.name', 'First Name')} *
              </Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder={t('form.namePlaceholder', 'Enter your first name')}
                disabled={loading}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="surname" className="text-sm font-medium">
                {t('form.surname', 'Last Name')} *
              </Label>
              <Input
                id="surname"
                value={formData.surname}
                onChange={(e) => handleInputChange('surname', e.target.value)}
                placeholder={t('form.surnamePlaceholder', 'Enter your last name')}
                disabled={loading}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="course" className="text-sm font-medium">
              {t('form.course', 'Course of Interest')} *
            </Label>
            <Select 
              value={formData.courseId} 
              onValueChange={(value) => handleInputChange('courseId', value)}
              disabled={loading}
              required
            >
              <SelectTrigger>
                <SelectValue placeholder={t('form.coursePlaceholder', 'Select a course you\'re interested in')} />
              </SelectTrigger>
              <SelectContent>
                {courses.map((course) => (
                  <SelectItem key={course.id} value={course.id}>
                    {course.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium">
              {t('form.email', 'Email Address')}
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              placeholder={t('form.emailPlaceholder', 'Enter your email address')}
              disabled={loading}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-sm font-medium">
              {t('form.phone', 'Phone Number')}
            </Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              placeholder={t('form.phonePlaceholder', 'Enter your phone number')}
              disabled={loading}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-sm font-medium">
              {t('form.message', 'Additional Message')}
            </Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              placeholder={t('form.messagePlaceholder', 'Tell us about your goals or any specific questions...')}
              rows={3}
              disabled={loading}
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
              {t('form.cancel', 'Cancel')}
            </Button>
            <Button
              type="submit"
              disabled={loading || !formData.name || !formData.surname || !formData.courseId}
              className="flex-1"
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  {t('form.submitting', 'Submitting...')}
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  {t('form.submit', 'Submit Inquiry')}
                </>
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CourseInquiryForm;