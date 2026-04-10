import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/ui/navigation";
import ScrollReveal from "@/components/scroll-reveal";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Send,
  CheckCircle,
  Users,
  BookOpen,
} from "lucide-react";
import { toast } from "sonner";
import Footer from "@/components/footer";
import { supabase } from "@/integrations/supabase/client";
import { useLanguage } from "@/contexts/LanguageContext";
import { useFormRateLimit } from "@/utils/rateLimit";
import { contactFormSchema, validateFormData, getValidationErrorMessage } from "@/utils/formValidation";

const Contact = () => {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: MapPin,
      title: t("contact.info.mainOffice", "Main Office"),
      details: ["Chișinău, Moldova", "Strada Aleco Ruso 15", "MD-2068"],
      link: "#",
    },
    {
      icon: Phone,
      title: t("contact.info.phoneNumbers", "Phone Numbers"),
      details: ["+373 69 117 686", "Mon-Fri 9AM-6PM"],
      link: "tel:+37369117686",
    },
    {
      icon: Mail,
      title: t("contact.info.emailSupport", "Email Support"),
      details: [
        "learn@embedded.school",
        t("contact.info.responseTime", "Response within 24hrs"),
      ],
      link: "mailto:learn@embedded.school",
    },
    {
      icon: Clock,
      title: t("contact.info.officeHours", "Office Hours"),
      details: [
        t("contact.info.hours.weekday", "Monday - Friday: 9:00 - 18:00"),
        t("contact.info.hours.saturday", "Saturday: 10:00 - 16:00"),
        t("contact.info.hours.sunday", "Sunday: Closed"),
      ],
      link: "#",
    },
  ];

  const faq = [
    {
      question: t(
        "contact.faq.q1",
        "Do you offer courses in Romanian and Russian?"
      ),
      answer: t(
        "contact.faq.a1",
        "Yes! All our courses are available in Romanian, Russian, and English. You can switch between languages anytime in your student dashboard."
      ),
    },
    {
      question: t(
        "contact.faq.q2",
        "What equipment do I need for the embedded systems courses?"
      ),
      answer: t(
        "contact.faq.a2",
        "We provide starter kits for most courses, including Arduino boards, sensors, and components. For advanced courses, we'll provide a detailed equipment list."
      ),
    },
    {
      question: t(
        "contact.faq.q3",
        "Are there any prerequisites for your courses?"
      ),
      answer: t(
        "contact.faq.a3",
        "Basic programming knowledge is helpful but not required for beginner courses. Each course page lists specific prerequisites if any."
      ),
    },
    {
      question: t(
        "contact.faq.q4",
        "Do you offer certificates upon completion?"
      ),
      answer: t(
        "contact.faq.a4",
        "Yes, all students receive industry-recognized certificates upon successful course completion. These are valued by employers across Moldova and Romania."
      ),
    },
    {
      question: t(
        "contact.faq.q5",
        "Can I get help if I'm stuck during a course?"
      ),
      answer: t(
        "contact.faq.a5",
        "Absolutely! We offer 24/7 community support, weekly live Q&A sessions, and one-on-one mentoring for premium students."
      ),
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { checkLimit } = useFormRateLimit("contact-form");
    const { allowed, message: rateLimitMessage } = checkLimit();

    if (!allowed) {
      toast.error(rateLimitMessage);
      return;
    }

    // Validate form data using schema
    const validation = await validateFormData(contactFormSchema, {
      name: formData.name.trim(),
      email: formData.email.trim(),
      subject: formData.subject.trim(),
      message: formData.message.trim(),
    });

    if (!validation.success) {
      const errorMessage = getValidationErrorMessage(validation.errors || {});
      toast.error(errorMessage);
      return;
    }

    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke(
        "send-contact-message",
        {
          body: formData,
        }
      );

      if (error) {
        console.error("Error submitting contact form:", error);
        throw new Error(error.message || "Failed to send message");
      }

      toast(
        t(
          "contact.form.success",
          "Message sent successfully! We'll get back to you within 24 hours."
        ),
        {
          icon: <CheckCircle className="w-5 h-5 text-green-500" />,
        }
      );

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error: any) {
      console.error("Error submitting contact form:", error);
      toast.error(
        t("contact.form.error", "Failed to send message. Please try again.")
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen bg-slate-900 font-inter text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              <pattern
                id="contact-grid"
                width="4"
                height="4"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 4 0 L 0 0 0 4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.1"
                  className="text-blue-400"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#contact-grid)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 bg-purple-500/10 text-purple-400 border-purple-500/20 font-mono">
                <MessageCircle className="w-4 h-4 mr-2" />
                {t("contact.hero.badge", "Get In Touch")}
              </Badge>

              <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white">
                {t("contact.hero.title", "We're Here to")}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400">
                  {t("contact.hero.titleHighlight", "Help You Succeed")}
                </span>
              </h1>

              <p className="text-xl lg:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
                {t(
                  "contact.hero.description",
                  "Have questions about our courses? Need guidance on your embedded systems journey? Our team of experts is ready to assist you every step of the way."
                )}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-slate-800">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="bg-slate-900/50 border-slate-700 text-center backdrop-blur-sm hover:bg-slate-900/70 transition-all duration-300 hover:scale-105 group"
                >
                  <CardHeader className="pb-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/20 border border-blue-500/30 rounded-lg mx-auto mb-4 group-hover:bg-blue-500/30 transition-colors">
                      <info.icon className="w-8 h-8 text-blue-400" />
                    </div>
                    <CardTitle className="text-lg text-white">
                      {info.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-1">
                      {info.details.map((detail, i) => (
                        <p
                          key={i}
                          className={`text-sm ${
                            i === 2 ? "text-gray-400" : "text-gray-300"
                          }`}
                        >
                          {detail}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section id="contact-form" className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <ScrollReveal>
              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-2xl text-white">
                    <MessageCircle className="w-6 h-6 text-blue-400" />
                    <span>{t("contact.form.title", "Send us a Message")}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-gray-300">
                          {t("contact.form.fullName", "Full Name")}
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder={t(
                            "contact.form.fullNamePlaceholder",
                            "Your full name"
                          )}
                          value={formData.name}
                          onChange={handleInputChange}
                          className="bg-slate-900/50 border-slate-600 text-white placeholder:text-gray-400"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-gray-300">
                          {t("contact.form.email", "Email Address")}
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder={t(
                            "contact.form.emailPlaceholder",
                            "your.email@example.com"
                          )}
                          value={formData.email}
                          onChange={handleInputChange}
                          className="bg-slate-900/50 border-slate-600 text-white placeholder:text-gray-400"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-gray-300">
                        {t("contact.form.subject", "Subject")}
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder={t(
                          "contact.form.subjectPlaceholder",
                          "What can we help you with?"
                        )}
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="bg-slate-900/50 border-slate-600 text-white placeholder:text-gray-400"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-gray-300">
                        {t("contact.form.message", "Message")}
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder={t(
                          "contact.form.messagePlaceholder",
                          "Tell us more about your inquiry..."
                        )}
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="bg-slate-900/50 border-slate-600 text-white placeholder:text-gray-400"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all duration-300 hover:scale-105"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>{t("contact.form.sending", "Sending...")}</>
                      ) : (
                        <>
                          <Send className="mr-2 w-5 h-5" />
                          {t("contact.form.send", "Send Message")}
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* Map & Additional Info */}
            <ScrollReveal delay={200}>
              <div className="space-y-8">
                {/* Map Placeholder */}
                <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm overflow-hidden">
                  <div className="h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 relative">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2720.49667575059!2d28.827259976598!3d47.024902971149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97c3628b769a1%3A0x260efc7c5e0c5e1!2sStrada%20Alecu%20Russo%2015%2C%20Chi%C8%99in%C4%83u%2C%20Moldova!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s&q=Strada+Alecu+Russo+15,+Chișinău,+Moldova&z=16&iwloc=near"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full h-full"
                    ></iframe>
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent pointer-events-none"></div>
                    <div className="absolute top-2 left-2">
                      <div className="bg-slate-900/90 backdrop-blur-sm rounded-lg p-2 text-center border border-slate-700 shadow-lg min-w-[300px]">
                        <MapPin className="w-5 h-5 text-blue-400 mx-auto" />
                        <p className="font-bold text-white text-sm mb-1">
                          {t("contact.map.title", "Our Main Office")}
                        </p>
                        <p className="text-xs text-gray-300 font-medium">
                          Strada Aleco Ruso 15, Chișinău, Moldova
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Quick Contact Options */}
                <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-xl text-white">
                      {t("contact.quick.title", "Need Immediate Help?")}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-3 p-3 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 transition-colors cursor-pointer group">
                      <Phone className="w-5 h-5 text-blue-400 group-hover:text-blue-300" />
                      <div>
                        <p className="font-semibold text-sm text-white">
                          {t("contact.quick.call", "Call us directly")}
                        </p>
                        <p className="text-xs text-gray-400">+373 69 117 686</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 p-3 rounded-lg bg-green-500/10 hover:bg-green-500/20 transition-colors cursor-pointer group">
                      <Mail className="w-5 h-5 text-green-400 group-hover:text-green-300" />
                      <div>
                        <p className="font-semibold text-sm text-white">
                          {t("contact.quick.email", "Email support")}
                        </p>
                        <p className="text-xs text-gray-400">
                          learn@embedded.school
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 p-3 rounded-lg bg-purple-500/10 hover:bg-purple-500/20 transition-colors cursor-pointer group">
                      <BookOpen className="w-5 h-5 text-purple-400 group-hover:text-purple-300" />
                      <div>
                        <p className="font-semibold text-sm text-white">
                          {t("contact.quick.browse", "Browse courses")}
                        </p>
                        <p className="text-xs text-gray-400">
                          {t(
                            "contact.quick.browseDescription",
                            "Find the perfect course for you"
                          )}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <Badge className="mb-6 bg-orange-500/10 text-orange-400 border-orange-500/20 font-mono">
                <CheckCircle className="w-4 h-4 mr-2" />
                {t("contact.faq.badge", "FAQ")}
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
                {t("contact.faq.title", "Frequently Asked Questions")}
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                {t(
                  "contact.faq.description",
                  "Quick answers to common questions about our courses and services"
                )}
              </p>
            </div>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto space-y-4">
            {faq.map((item, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <Card className="bg-slate-900/50 border-slate-700 backdrop-blur-sm hover:bg-slate-900/70 transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="text-lg text-left text-white">
                      {item.question}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400">{item.answer}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={600}>
            <div className="text-center mt-12">
              <p className="text-gray-400 mb-4">
                {t(
                  "contact.faq.notFound",
                  "Can't find what you're looking for?"
                )}
              </p>
              <Button
                variant="outline"
                size="lg"
                className="border-slate-600 text-slate-900 hover:bg-slate-700 hover:border-slate-500"
                onClick={() => {
                  document.getElementById("contact-form")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
              >
                <MessageCircle className="mr-2 w-5 h-5" />
                {t("contact.faq.askQuestion", "Ask a Question")}
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              <pattern
                id="cta-contact-grid"
                width="8"
                height="8"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 8 0 L 0 0 0 8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.2"
                  className="text-blue-400"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#cta-contact-grid)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <ScrollReveal>
            <Badge className="mb-6 bg-green-500/10 text-green-400 border-green-500/20 font-mono">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              {t("contact.cta.badge", "Ready to Start?")}
            </Badge>

            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
              {t("contact.cta.title", "Ready to Start Your Journey?")}
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              {t(
                "contact.cta.description",
                "Join thousands of students mastering embedded systems. Get started today with our beginner-friendly courses."
              )}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() =>
                  (window.location.href = "/courses")
                }
                className="bg-white text-slate-900 hover:bg-gray-100 font-semibold px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
              >
                <BookOpen className="mr-2 w-5 h-5" />
                {t("contact.cta.browseCourses", "Browse Courses")}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-600 text-slate-900 hover:border-slate-500 px-8 py-6 text-lg"
                asChild
              >
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://t.me/embeddedschool"
                >
                  <Users className="mr-2 w-5 h-5" />
                  {t("contact.cta.joinCommunity", "Join Community")}
                </a>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Contact;
