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
  Globe,
  Users,
  BookOpen,
  ArrowRight
} from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: MapPin,
      title: "Main Office",
      details: ["Chișinău, Moldova", "Strada București 67", "MD-2012"],
      link: "#"
    },
    {
      icon: Phone,
      title: "Phone Numbers", 
      details: ["+373 22 123 456", "+40 21 234 567", "Mon-Fri 9AM-6PM"],
      link: "tel:+37322123456"
    },
    {
      icon: Mail,
      title: "Email Support",
      details: ["info@embeddedschool.com", "support@embeddedschool.com", "Response within 24hrs"],
      link: "mailto:info@embeddedschool.com"
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Monday - Friday: 9:00 - 18:00", "Saturday: 10:00 - 16:00", "Sunday: Closed"],
      link: "#"
    }
  ];

  const faq = [
    {
      question: "Do you offer courses in Romanian and Russian?",
      answer: "Yes! All our courses are available in Romanian, Russian, and English. You can switch between languages anytime in your student dashboard."
    },
    {
      question: "What equipment do I need for the embedded systems courses?",
      answer: "We provide starter kits for most courses, including Arduino boards, sensors, and components. For advanced courses, we'll provide a detailed equipment list."
    },
    {
      question: "Are there any prerequisites for your courses?",
      answer: "Basic programming knowledge is helpful but not required for beginner courses. Each course page lists specific prerequisites if any."
    },
    {
      question: "Do you offer certificates upon completion?",
      answer: "Yes, all students receive industry-recognized certificates upon successful course completion. These are valued by employers across Moldova and Romania."
    },
    {
      question: "Can I get help if I'm stuck during a course?",
      answer: "Absolutely! We offer 24/7 community support, weekly live Q&A sessions, and one-on-one mentoring for premium students."
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast("Message sent successfully! We'll get back to you within 24 hours.", {
      icon: <CheckCircle className="w-5 h-5 text-green-500" />
    });
    
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-background font-inter">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-background via-accent/30 to-background">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
                💬 Get In Touch
              </Badge>
              
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
                We're Here to Help You Succeed
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Have questions about our courses? Need guidance on your embedded systems journey? 
                Our team of experts is ready to assist you every step of the way.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-gradient-to-b from-background to-accent/10">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {contactInfo.map((info, index) => (
                <Card key={index} className="bg-gradient-card shadow-card-hover border-0 text-center hover-scale">
                  <CardHeader className="pb-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mx-auto mb-4">
                      <info.icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{info.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-1">
                      {info.details.map((detail, i) => (
                        <p key={i} className={`text-sm ${i === 2 ? 'text-muted-foreground' : 'text-foreground'}`}>
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
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <ScrollReveal>
              <Card className="bg-gradient-card shadow-card-hover border-0">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-2xl">
                    <MessageCircle className="w-6 h-6 text-primary" />
                    <span>Send us a Message</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input 
                          id="name"
                          name="name"
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required 
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input 
                          id="email"
                          name="email"
                          type="email"
                          placeholder="your.email@example.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          required 
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input 
                        id="subject"
                        name="subject"
                        placeholder="What can we help you with?"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea 
                        id="message"
                        name="message"
                        placeholder="Tell us more about your inquiry..."
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        required 
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-gradient-hero shadow-tech hover:shadow-glow transition-all duration-300"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>Sending...</>
                      ) : (
                        <>
                          <Send className="mr-2 w-5 h-5" />
                          Send Message
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
                <Card className="bg-gradient-card shadow-card-hover border-0 overflow-hidden">
                  <div className="h-64 bg-gradient-to-br from-primary/10 to-accent/20 relative">
                    <img 
                      src="https://images.unsplash.com/photo-1577401239170-897942555fb3?w=600&h=300&fit=crop" 
                      alt="Chișinău office location"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 text-center">
                        <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
                        <p className="font-semibold">Our Main Office</p>
                        <p className="text-sm text-muted-foreground">Chișinău, Moldova</p>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Quick Contact Options */}
                <Card className="bg-gradient-card shadow-card-hover border-0">
                  <CardHeader>
                    <CardTitle className="text-xl">Need Immediate Help?</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-3 p-3 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors cursor-pointer">
                      <Phone className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-semibold text-sm">Call us directly</p>
                        <p className="text-xs text-muted-foreground">+373 22 123 456</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3 p-3 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors cursor-pointer">
                      <Mail className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-semibold text-sm">Email support</p>
                        <p className="text-xs text-muted-foreground">support@embeddedschool.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3 p-3 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors cursor-pointer">
                      <BookOpen className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-semibold text-sm">Browse courses</p>
                        <p className="text-xs text-muted-foreground">Find the perfect course for you</p>
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
      <section className="py-20 bg-gradient-to-b from-background to-accent/20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Quick answers to common questions about our courses and services
              </p>
            </div>
          </ScrollReveal>
          
          <div className="max-w-4xl mx-auto space-y-4">
            {faq.map((item, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <Card className="bg-gradient-card shadow-card-hover border-0 hover-scale">
                  <CardHeader>
                    <CardTitle className="text-lg text-left">{item.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.answer}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
          
          <ScrollReveal delay={600}>
            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-4">
                Can't find what you're looking for?
              </p>
              <Button variant="outline" size="lg">
                <MessageCircle className="mr-2 w-5 h-5" />
                Ask a Question
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-primary-glow to-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Join thousands of students mastering embedded systems. Get started today with our beginner-friendly courses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100 px-8 py-6 text-lg shadow-glow">
                <BookOpen className="mr-2 w-5 h-5" />
                Browse Courses
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg">
                <Users className="mr-2 w-5 h-5" />
                Join Community
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">ES</span>
                </div>
                <span className="font-bold text-lg">Embedded School</span>
              </div>
              <p className="text-secondary-foreground/80">
                Empowering the next generation of embedded systems developers.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Courses</h4>
              <ul className="space-y-2 text-secondary-foreground/80">
                <li><a href="/courses/arduino" className="hover:text-secondary-foreground">Arduino</a></li>
                <li><a href="/courses/embedded-c" className="hover:text-secondary-foreground">Embedded C</a></li>
                <li><a href="/courses/iot" className="hover:text-secondary-foreground">IoT Systems</a></li>
                <li><a href="/courses/automotive" className="hover:text-secondary-foreground">Automotive</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Company</h4>
              <ul className="space-y-2 text-secondary-foreground/80">
                <li><a href="/about" className="hover:text-secondary-foreground">About Us</a></li>
                <li><a href="/contact" className="hover:text-secondary-foreground">Contact</a></li>
                <li><a href="/blog" className="hover:text-secondary-foreground">Blog</a></li>
                <li><a href="/careers" className="hover:text-secondary-foreground">Careers</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Support</h4>
              <ul className="space-y-2 text-secondary-foreground/80">
                <li><a href="/help" className="hover:text-secondary-foreground">Help Center</a></li>
                <li><a href="/terms" className="hover:text-secondary-foreground">Terms</a></li>
                <li><a href="/privacy" className="hover:text-secondary-foreground">Privacy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center">
            <p className="text-secondary-foreground/60">
              © 2024 Embedded School. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;