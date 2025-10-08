import React, { useState, useEffect } from "react";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLanguage } from "@/contexts/LanguageContext";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Send } from "lucide-react";
import { featuredCourses } from "@/testData/featuredCourses";

interface CourseInquiryFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  selectedCourseId?: string;
  subscriptionType?: string;
}

const getCoursesBySubscription = (subscriptionType?: string) => {
  switch (subscriptionType) {
    case "career-path-embedded-professional":
      return featuredCourses.filter(
        (course) =>
          course.id === "cpp-bsw-beginner-to-advanced" ||
          course.id === "software-testing-automotive-qa" ||
          course.id === "pcb-design-fundamentals"
      );

    case "career-path-software-developer":
      return featuredCourses.filter(
        (course) =>
          course.id === "python-junior-beginner" ||
          course.id === "cpp-bsw-beginner-to-advanced"
      );

    case "career-path-complete-bundle":
      return featuredCourses;

    case "individual":
    default:
      return featuredCourses.filter(
        (course) => !course.id.includes("career-path")
      );
  }
};

interface FormData {
  name: string;
  surname: string;
  courseId: string;
  email: string;
  phone: string;
  message: string;
  subscriptionType: string;
}

const CourseInquiryForm: React.FC<CourseInquiryFormProps> = ({
  open,
  onOpenChange,
  selectedCourseId,
  subscriptionType = "individual",
}) => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    surname: "",
    courseId: "",
    email: "",
    phone: "",
    message: "",
    subscriptionType: subscriptionType,
  });

  const availableCourses = getCoursesBySubscription(selectedCourseId);

  useEffect(() => {
    if (open) {
      if (selectedCourseId) {
        setFormData((prev) => ({
          ...prev,
          courseId: selectedCourseId,
          subscriptionType: selectedCourseId.includes("career-path")
            ? selectedCourseId
            : "individual",
        }));
      } else {
        setFormData({
          name: "",
          surname: "",
          courseId: "",
          email: "",
          phone: "",
          message: "",
          subscriptionType: subscriptionType,
        });
      }
    }
  }, [open, selectedCourseId, subscriptionType]);

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.surname || !formData.courseId) {
      toast({
        title: "Missing Information",
        description:
          "Please fill in all required fields (Name, Surname, and Course selection).",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke(
        "send-course-inquiry",
        {
          body: formData,
        }
      );

      if (error) {
        console.error("Function error:", error);
        throw new Error(error.message || "Failed to submit inquiry");
      }

      toast({
        title: "Inquiry Submitted!",
        description:
          "Thank you for your interest! We'll contact you soon with more information.",
      });

      setFormData({
        name: "",
        surname: "",
        courseId: "",
        email: "",
        phone: "",
        message: "",
        subscriptionType: subscriptionType,
      });
      onOpenChange(false);
    } catch (error: any) {
      console.error("Submit error:", error);
      toast({
        title: "Submission Failed",
        description:
          error.message ||
          "There was an error submitting your inquiry. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const getSelectedCourseTitle = () => {
    if (formData.courseId.includes("career-path")) {
      switch (formData.courseId) {
        case "career-path-embedded-professional":
          return "Embedded Systems Professional Career Path";
        case "career-path-software-developer":
          return "Software Developer Career Path";
        case "career-path-complete-bundle":
          return "Complete Engineering Bundle";
        default:
          return "Career Path";
      }
    }

    const course = availableCourses.find((c) => c.id === formData.courseId);
    return course?.title || "";
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">
            {t("form.title", "Start Your Learning Journey")}
          </DialogTitle>
          <DialogDescription>
            {selectedCourseId && selectedCourseId.includes("career-path") ? (
              <div>
                <p className="font-semibold text-blue-400 mb-2">
                  {getSelectedCourseTitle()}
                </p>
                <p>
                  {t(
                    "form.careerPathDescription",
                    "You're applying for a complete career path. We'll contact you with detailed information about all included courses."
                  )}
                </p>
              </div>
            ) : (
              t(
                "form.description",
                "Fill out this form and we'll get back to you with course details and enrollment information."
              )
            )}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium">
                {t("form.name", "First Name")} *
              </Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                placeholder={t("form.namePlaceholder", "Enter your first name")}
                disabled={loading}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="surname" className="text-sm font-medium">
                {t("form.surname", "Last Name")} *
              </Label>
              <Input
                id="surname"
                value={formData.surname}
                onChange={(e) => handleInputChange("surname", e.target.value)}
                placeholder={t(
                  "form.surnamePlaceholder",
                  "Enter your last name"
                )}
                disabled={loading}
                required
              />
            </div>
          </div>

          {!selectedCourseId?.includes("career-path") && (
            <div className="space-y-2">
              <Label htmlFor="course" className="text-sm font-medium">
                {t("form.course", "Course of Interest")} *
              </Label>
              <Select
                value={formData.courseId}
                onValueChange={(value) => handleInputChange("courseId", value)}
                disabled={loading}
                required
              >
                <SelectTrigger>
                  <SelectValue
                    placeholder={t(
                      "form.coursePlaceholder",
                      "Select a course you're interested in"
                    )}
                  />
                </SelectTrigger>
                <SelectContent>
                  {availableCourses.map((course) => (
                    <SelectItem key={course.id} value={course.id}>
                      {course.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}

          {selectedCourseId?.includes("career-path") && (
            <div className="space-y-2 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <Label className="text-sm font-medium text-blue-700 dark:text-blue-300">
                Selected Career Path
              </Label>
              <div className="text-sm text-blue-600 dark:text-blue-400">
                <p className="font-semibold">{getSelectedCourseTitle()}</p>
                <p className="text-xs mt-1">
                  Includes {availableCourses.length} course
                  {availableCourses.length !== 1 ? "s" : ""}
                </p>
              </div>
              <input
                type="hidden"
                value={selectedCourseId}
                onChange={(e) => handleInputChange("courseId", e.target.value)}
              />
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium">
              {t("form.email", "Email Address")}
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              placeholder={t(
                "form.emailPlaceholder",
                "Enter your email address"
              )}
              disabled={loading}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-sm font-medium">
              {t("form.phone", "Phone Number")}
            </Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              placeholder={t(
                "form.phonePlaceholder",
                "Enter your phone number"
              )}
              disabled={loading}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-sm font-medium">
              {t("form.message", "Additional Message")}
            </Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              placeholder={t(
                "form.messagePlaceholder",
                "Tell us about your goals or any specific questions..."
              )}
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
              {t("form.cancel", "Cancel")}
            </Button>
            <Button
              type="submit"
              disabled={
                loading ||
                !formData.name ||
                !formData.surname ||
                !formData.courseId
              }
              className="flex-1"
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  {t("form.submitting", "Submitting...")}
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  {selectedCourseId?.includes("career-path")
                    ? t("form.submitCareerPath", "Apply for Career Path")
                    : t("form.submit", "Submit Inquiry")}
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
