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
    <div className="min-h-screen bg-slate-900 font-inter text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="contact-grid" width="4" height="4" patternUnits="userSpaceOnUse">
                <path d="M 4 0 L 0 0 0 4" fill="none" stroke="currentColor" strokeWidth="0.1" className="text-blue-400"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#contact-grid)"/>
          </svg>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 bg-purple-500/10 text-purple-400 border-purple-500/20 font-mono">
                <MessageCircle className="w-4 h-4 mr-2" />
                Get In Touch
              </Badge>
              
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white">
                We're Here to{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400">
                  Help You Succeed
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
                Have questions about our courses? Need guidance on your embedded systems journey? 
                Our team of experts is ready to assist you every step of the way.
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
                <Card key={index} className="bg-slate-900/50 border-slate-700 text-center backdrop-blur-sm hover:bg-slate-900/70 transition-all duration-300 hover:scale-105 group">
                  <CardHeader className="pb-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/20 border border-blue-500/30 rounded-lg mx-auto mb-4 group-hover:bg-blue-500/30 transition-colors">
                      <info.icon className="w-8 h-8 text-blue-400" />
                    </div>
                    <CardTitle className="text-lg text-white">{info.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-1">
                      {info.details.map((detail, i) => (
                        <p key={i} className={`text-sm ${i === 2 ? 'text-gray-400' : 'text-gray-300'}`}>
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
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <ScrollReveal>
              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-2xl text-white">
                    <MessageCircle className="w-6 h-6 text-blue-400" />
                    <span>Send us a Message</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-gray-300">Full Name</Label>
                        <Input 
                          id="name"
                          name="name"
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="bg-slate-900/50 border-slate-600 text-white placeholder:text-gray-400"
                          required 
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-gray-300">Email Address</Label>
                        <Input 
                          id="email"
                          name="email"
                          type="email"
                          placeholder="your.email@example.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="bg-slate-900/50 border-slate-600 text-white placeholder:text-gray-400"
                          required 
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-gray-300">Subject</Label>
                      <Input 
                        id="subject"
                        name="subject"
                        placeholder="What can we help you with?"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="bg-slate-900/50 border-slate-600 text-white placeholder:text-gray-400"
                        required 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-gray-300">Message</Label>
                      <Textarea 
                        id="message"
                        name="message"
                        placeholder="Tell us more about your inquiry..."
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
                <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm overflow-hidden">
                  <div className="h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 relative">
                    <img 
                      src="https://images.unsplash.com/photo-1577401239170-897942555fb3?w=600&h=300&fit=crop" 
                      alt="Chișinău office location"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-slate-900/90 backdrop-blur-sm rounded-lg p-4 text-center border border-slate-700">
                        <MapPin className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                        <p className="font-semibold text-white">Our Main Office</p>
                        <p className="text-sm text-gray-400">Chișinău, Moldova</p>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Quick Contact Options */}
                <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-xl text-white">Need Immediate Help?</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-3 p-3 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 transition-colors cursor-pointer group">
                      <Phone className="w-5 h-5 text-blue-400 group-hover:text-blue-300" />
                      <div>
                        <p className="font-semibold text-sm text-white">Call us directly</p>
                        <p className="text-xs text-gray-400">+373 22 123 456</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3 p-3 rounded-lg bg-green-500/10 hover:bg-green-500/20 transition-colors cursor-pointer group">
                      <Mail className="w-5 h-5 text-green-400 group-hover:text-green-300" />
                      <div>
                        <p className="font-semibold text-sm text-white">Email support</p>
                        <p className="text-xs text-gray-400">support@embeddedschool.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3 p-3 rounded-lg bg-purple-500/10 hover:bg-purple-500/20 transition-colors cursor-pointer group">
                      <BookOpen className="w-5 h-5 text-purple-400 group-hover:text-purple-300" />
                      <div>
                        <p className="font-semibold text-sm text-white">Browse courses</p>
                        <p className="text-xs text-gray-400">Find the perfect course for you</p>
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
                FAQ
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Quick answers to common questions about our courses and services
              </p>
            </div>
          </ScrollReveal>
          
          <div className="max-w-4xl mx-auto space-y-4">
            {faq.map((item, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <Card className="bg-slate-900/50 border-slate-700 backdrop-blur-sm hover:bg-slate-900/70 transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="text-lg text-left text-white">{item.question}</CardTitle>
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
                Can't find what you're looking for?
              </p>
              <Button variant="outline" size="lg" className="border-slate-600 text-gray-300 hover:bg-slate-700 hover:border-slate-500">
                <MessageCircle className="mr-2 w-5 h-5" />
                Ask a Question
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="cta-contact-grid" width="8" height="8" patternUnits="userSpaceOnUse">
                <path d="M 8 0 L 0 0 0 8" fill="none" stroke="currentColor" strokeWidth="0.2" className="text-blue-400"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#cta-contact-grid)"/>
          </svg>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <ScrollReveal>
            <Badge className="mb-6 bg-green-500/10 text-green-400 border-green-500/20 font-mono">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              Ready to Start?
            </Badge>
            
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Join thousands of students mastering embedded systems. Get started today with our beginner-friendly courses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-slate-900 hover:bg-gray-100 font-semibold px-8 py-6 text-lg transition-all duration-300 hover:scale-105">
                <BookOpen className="mr-2 w-5 h-5" />
                Browse Courses
              </Button>
              <Button size="lg" variant="outline" className="border-slate-600 text-gray-300 hover:bg-slate-800 hover:border-slate-500 px-8 py-6 text-lg">
                <Users className="mr-2 w-5 h-5" />
                Join Community
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-950 border-t border-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">ES</span>
                </div>
                <span className="font-bold text-lg text-white">Embedded School</span>
              </div>
              <p className="text-gray-400 mb-4">
                Empowering the next generation of embedded systems developers with practical, industry-focused education.
              </p>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-400">Currently online: 1,247 students</span>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3 text-white">Courses</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/courses/arduino" className="hover:text-blue-400 transition-colors">Arduino Programming</a></li>
                <li><a href="/courses/embedded-c" className="hover:text-blue-400 transition-colors">Embedded C</a></li>
                <li><a href="/courses/iot" className="hover:text-blue-400 transition-colors">IoT Systems</a></li>
                <li><a href="/courses/automotive" className="hover:text-blue-400 transition-colors">Automotive Electronics</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3 text-white">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/about" className="hover:text-blue-400 transition-colors">About Us</a></li>
                <li><a href="/contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
                <li><a href="/blog" className="hover:text-blue-400 transition-colors">Blog</a></li>
                <li><a href="/careers" className="hover:text-blue-400 transition-colors">Careers</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3 text-white">Developer Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/docs" className="hover:text-blue-400 transition-colors">Documentation</a></li>
                <li><a href="/api" className="hover:text-blue-400 transition-colors">API Reference</a></li>
                <li><a href="/community" className="hover:text-blue-400 transition-colors">Community</a></li>
                <li><a href="/support" className="hover:text-blue-400 transition-colors">Support</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-500 text-sm">
                © 2024 Embedded School. Open source education platform.
              </p>
              <div className="flex items-center space-x-4 mt-4 md:mt-0">
                <Badge variant="outline" className="border-slate-700 text-gray-400">
                  Built with ❤️ in Moldova
                </Badge>
                <div className="flex items-center space-x-1 text-gray-400">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-xs">All systems operational</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;