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
import { Loader2, Send, ChevronDown, ChevronUp } from "lucide-react";
import { featuredCourses } from "@/testData/featuredCourses";
import { useFormRateLimit } from "@/utils/rateLimit";
import { courseInquiryFormSchema } from "@/utils/formValidation";

interface CourseInquiryFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  selectedCourseId?: string;
  subscriptionType?: string;
}

// Moved inside component to access translations

interface FormData {
  name: string;
  surname: string;
  courseId: string;
  courseName?: string;
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
  const [showCourseList, setShowCourseList] = useState(false);

  // Rate limiting: 5 attempts per 60 seconds for course inquiries
  const { checkLimit } = useFormRateLimit("course-inquiry-form");

  const getCoursesBySubscription = (subscriptionType?: string) => {
    switch (subscriptionType) {
      case "career-path-embedded-professional":
        return {
          packageName: t("careerPath.iotAutomotive.title", "IoT, Automotive & Biomedical Career"),
          courseCount: 4,
          courses: [
            t("careerPath.iotAutomotive.course1", "C Programming"),
            t("careerPath.iotAutomotive.course2", "Embedded Arduino"),
            t("careerPath.iotAutomotive.course3", "Embedded Advanced"),
            t("careerPath.iotAutomotive.course4", "C++ BSW Beginner to Advanced"),
          ],
          description: t("careerPath.iotAutomotive.description", "Career package for Embedded systems: IoT, Automotive, Biomedical"),
        };

      case "career-path-complete-bundle":
        return {
          packageName: t("careerPath.dataEngineer.title", "Data Engineer"),
          courseCount: 4,
          courses: [
            t("careerPath.dataEngineer.course1", "Python Level 1"),
            t("careerPath.dataEngineer.course2", "Python Level 2"),
            t("careerPath.dataEngineer.course3", "SQL, Database"),
            t("careerPath.dataEngineer.course4", "Cloud Services"),
          ],
          description: t("careerPath.dataEngineer.description", "Specialization in Data Engineering and cloud technologies"),
        };

      case "career-path-software-developer":
        return {
          packageName: t("careerPath.mobileEngineer.title", "Mobile Engineer"),
          courseCount: 4,
          courses: [
            t("careerPath.mobileEngineer.course1", "React Native"),
            t("careerPath.mobileEngineer.course2", "TypeScript"),
            t("careerPath.mobileEngineer.course3", "JavaScript"),
            t("careerPath.mobileEngineer.course4", "Node.js"),
          ],
          description: t("careerPath.mobileEngineer.description", "Full stack mobile application development"),
        };

      case "individual":
      default:
        return {
          packageName: t("careerPath.individual.title", "Individual Courses"),
          courseCount: t("careerPath.individual.availability", "Available separately"),
          courses: [t("careerPath.individual.allCourses", "All courses except Career Path packages")],
          description: t("careerPath.individual.description", "Purchase individual courses of your choice"),
        };
    }
  };
  const [formData, setFormData] = useState<FormData>({
    name: "",
    surname: "",
    courseId: "",
    email: "",
    phone: "",
    message: "",
    subscriptionType: subscriptionType,
  });

  const packageInfo = selectedCourseId?.includes("career-path")
    ? getCoursesBySubscription(selectedCourseId)
    : null;

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

    // Check rate limit BEFORE any validation
    const { allowed, message } = checkLimit();
    if (!allowed) {
      toast({
        title: t("form.rateLimited", "Too Many Submissions"),
        description: message || t("form.tryAgainLater", "Please wait before submitting again."),
        variant: "destructive",
      });
      return;
    }

    if (!formData.name || !formData.surname || !formData.courseId) {
      toast({
        title: t("form.missingInfo"),
        description: t("form.fillRequired"),
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    try {
      const courseName = getSelectedCourseTitle();
      const { data, error } = await supabase.functions.invoke(
        "send-course-inquiry",
        {
          body: {
            ...formData,
            courseName,
          },
        }
      );

      if (error) {
        console.error("Function error:", error);
        throw new Error(error.message || "Failed to submit inquiry");
      }

      toast({
        title: t("form.inquirySubmitted"),
        description: t("form.thankYou"),
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
        title: t("form.submissionFailed"),
        description: error.message || t("form.errorMessage"),
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const getSelectedCourseTitle = () => {
    if (formData.courseId.includes("career-path")) {
      const packageInfo = getCoursesBySubscription(formData.courseId);
      return packageInfo.packageName;
    }

    const course = featuredCourses.find((c) => c.id === formData.courseId);
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
                <p className="font-semibold text-blue-600 dark:text-blue-400 mb-2">
                  {packageInfo?.packageName}
                </p>
                <p className="text-sm">{packageInfo?.description}</p>
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
                  {featuredCourses
                    .filter((course) => !course.id.includes("career-path"))
                    .map((course) => (
                      <SelectItem key={course.id} value={course.id}>
                        {course.title}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
            </div>
          )}

          {selectedCourseId?.includes("career-path") && packageInfo && (
            <div className="space-y-3 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <div className="flex items-center justify-between">
                <Label className="text-sm font-medium text-blue-700 dark:text-blue-300">
                  {t("form.selectedCareerPath", "Selected Career Path")}
                </Label>
                <span className="text-xs bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-300 px-2 py-1 rounded-full">
                  {packageInfo.courseCount}{" "}
                  {typeof packageInfo.courseCount === "number"
                    ? packageInfo.courseCount === 1
                      ? t("form.courseSingular", "course")
                      : t("form.courses", "courses")
                    : packageInfo.courseCount}
                </span>
              </div>

              <div className="text-sm">
                <p className="font-semibold text-blue-800 dark:text-blue-200">
                  {packageInfo.packageName}
                </p>
                <p className="text-blue-600 dark:text-blue-400 text-xs mt-1">
                  {packageInfo.description}
                </p>
              </div>

              <div className="space-y-2">
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="w-full flex items-center justify-between text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                  onClick={() => setShowCourseList(!showCourseList)}
                >
                  <span className="text-xs">
                    {showCourseList
                      ? t("form.hideCourses", "Hide included courses")
                      : t("form.showCourses", "Show included courses")}
                  </span>
                  {showCourseList ? (
                    <ChevronUp size={16} />
                  ) : (
                    <ChevronDown size={16} />
                  )}
                </Button>

                {showCourseList && (
                  <div className="bg-white dark:bg-gray-900 rounded-md border border-blue-100 dark:border-blue-800 p-3">
                    <p className="text-xs font-medium text-blue-700 dark:text-blue-300 mb-2">
                      {t(
                        "form.includedCourses",
                        "Courses included in this package:"
                      )}
                    </p>
                    <ul className="space-y-1 text-xs text-blue-600 dark:text-blue-400">
                      {packageInfo.courses.map((course, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          {course}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
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
