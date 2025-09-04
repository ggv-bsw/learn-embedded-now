import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/ui/navigation";
import ScrollReveal from "@/components/scroll-reveal";
import AnimatedCounter from "@/components/animated-counter";
import { 
  Users, 
  Award, 
  Target, 
  Heart,
  Code,
  Cpu,
  Wifi,
  BookOpen,
  Trophy,
  Globe,
  ArrowRight,
  Linkedin,
  Mail,
  GraduationCap
} from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, label: "Students Taught", value: 5000, suffix: "+" },
    { icon: Award, label: "Course Completions", value: 12000, suffix: "+" },
    { icon: Trophy, label: "Industry Partners", value: 50, suffix: "+" },
    { icon: Globe, label: "Countries Reached", value: 15, suffix: "" }
  ];

  const team = [
    {
      name: "Dr. Alexandru Popescu",
      role: "Founder & CEO", 
      specialization: "Embedded Systems Architecture",
      experience: "15+ years",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      linkedin: "#"
    },
    {
      name: "Elena Ionescu",
      role: "Head of Curriculum",
      specialization: "IoT & Automotive Systems", 
      experience: "12+ years",
      image: "https://images.unsplash.com/photo-1494790108755-2616b332c5cd?w=400&h=400&fit=crop&crop=face",
      linkedin: "#"
    },
    {
      name: "Mihai Constantinescu",
      role: "Senior Instructor",
      specialization: "Real-time Systems & RTOS",
      experience: "10+ years", 
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      linkedin: "#"
    },
    {
      name: "Dr. Maria Vladescu",
      role: "Research Director",
      specialization: "AI in Embedded Systems",
      experience: "8+ years",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face", 
      linkedin: "#"
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Excellence in Education",
      description: "We are committed to providing the highest quality embedded systems education through practical, hands-on learning experiences."
    },
    {
      icon: Heart,
      title: "Student-Centered Approach", 
      description: "Every decision we make is guided by what's best for our students' learning journey and career success."
    },
    {
      icon: BookOpen,
      title: "Continuous Innovation",
      description: "We constantly update our curriculum to reflect the latest industry trends and technological advancements."
    },
    {
      icon: Users,
      title: "Community Building",
      description: "We foster a supportive community where students, instructors, and industry professionals collaborate and grow together."
    }
  ];

  const partners = [
    { name: "Intel", logo: "https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=200&h=100&fit=crop" },
    { name: "ARM", logo: "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=200&h=100&fit=crop" },
    { name: "STMicroelectronics", logo: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=200&h=100&fit=crop" },
    { name: "Microchip", logo: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=200&h=100&fit=crop" }
  ];

  return (
    <div className="min-h-screen bg-background font-inter">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-background via-accent/30 to-background">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
                🎯 About Embedded School
              </Badge>
              
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
                Empowering the Next Generation of Embedded Engineers
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Founded in Moldova with a vision to democratize embedded systems education across Eastern Europe. 
                We bridge the gap between academic theory and industry practice.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-primary/5 via-accent/10 to-primary/5">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-4">
                    <stat.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-1">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  To provide world-class embedded systems education that prepares students for successful careers 
                  in the rapidly evolving technology landscape. We believe that quality education should be 
                  accessible to everyone, regardless of their background.
                </p>
                <p className="text-lg text-muted-foreground mb-8">
                  Since our founding in 2019, we've been committed to creating practical, industry-relevant 
                  courses that give our students the skills they need to excel in embedded systems development, 
                  IoT, and automotive electronics.
                </p>
                <Button size="lg" className="bg-gradient-hero shadow-tech hover:shadow-glow transition-all duration-300">
                  Join Our Mission
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop" 
                  alt="Team collaboration"
                  className="rounded-lg shadow-tech"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-lg"></div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-b from-background to-accent/20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Our Values
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do at Embedded School
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <Card className="bg-gradient-card shadow-card-hover border-0 h-full hover-scale">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <value.icon className="w-6 h-6 text-primary" />
                      </div>
                      <span>{value.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Meet Our Expert Team
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Industry professionals with decades of combined experience in embedded systems
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <Card className="bg-gradient-card shadow-card-hover border-0 text-center hover-scale">
                  <CardHeader className="pb-4">
                    <div className="relative mx-auto mb-4">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-24 h-24 rounded-full mx-auto object-cover shadow-tech"
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-full"></div>
                    </div>
                    <CardTitle className="text-lg">{member.name}</CardTitle>
                    <Badge variant="secondary" className="mx-auto">{member.role}</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-2">
                      <strong>Specialization:</strong> {member.specialization}
                    </p>
                    <p className="text-sm text-muted-foreground mb-4">
                      <strong>Experience:</strong> {member.experience}
                    </p>
                    <Button variant="ghost" size="sm" className="w-full">
                      <Linkedin className="w-4 h-4 mr-2" />
                      Connect
                    </Button>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-gradient-to-r from-accent/10 via-primary/5 to-accent/10">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold mb-4">Industry Partners</h3>
              <p className="text-muted-foreground">
                Collaborating with leading technology companies to provide real-world experience
              </p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 items-center max-w-4xl mx-auto">
              {partners.map((partner, index) => (
                <div key={index} className="text-center opacity-60 hover:opacity-100 transition-opacity duration-300">
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="h-12 mx-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-primary-glow to-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Join Our Community?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Become part of a growing network of embedded systems professionals and enthusiasts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100 px-8 py-6 text-lg shadow-glow">
                <GraduationCap className="mr-2 w-5 h-5" />
                Start Learning Today
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg">
                <Mail className="mr-2 w-5 h-5" />
                Contact Our Team
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

export default About;