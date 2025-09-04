import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/ui/navigation";
import CourseCard from "@/components/course-card";
import { 
  Zap, 
  Users, 
  Award, 
  CheckCircle, 
  Star,
  Play,
  ArrowRight,
  Code,
  Cpu,
  Wifi,
  Trophy
} from "lucide-react";
import { Link } from "react-router-dom";
import heroTechBg from "@/assets/hero-tech-bg-new.jpg";
import courseArduino from "@/assets/course-arduino.jpg";
import courseIot from "@/assets/course-iot.jpg";
import courseEmbeddedC from "@/assets/course-embedded-c.jpg";
import AnimatedParticles from "@/components/animated-particles";

const Index = () => {
  const featuredCourses = [
    {
      id: "embedded-c-arduino",
      title: "Intro to Embedded C with Arduino",
      description: "Master the fundamentals of embedded programming with C and Arduino. Perfect for beginners starting their embedded systems journey.",
      image: courseArduino,
      price: 149,
      duration: "8 weeks",
      students: 1250,
      rating: 4.8,
      level: "Beginner" as const,
      category: "Arduino"
    },
    {
      id: "iot-systems",
      title: "Complete IoT Systems Development", 
      description: "Build real-world IoT applications from sensors to cloud. Learn connectivity, data processing, and system architecture.",
      image: courseIot,
      price: 199,
      duration: "12 weeks",
      students: 890,
      rating: 4.9,
      level: "Intermediate" as const,
      category: "IoT"
    },
    {
      id: "advanced-embedded-c",
      title: "Advanced Embedded C Programming",
      description: "Deep dive into embedded C optimization, real-time systems, and hardware-level programming for professional developers.",
      image: courseEmbeddedC,
      price: 249,
      duration: "10 weeks", 
      students: 645,
      rating: 4.7,
      level: "Advanced" as const,
      category: "Embedded C"
    }
  ];

  const stats = [
    { icon: Users, label: "Active Students", value: "5,000+" },
    { icon: Award, label: "Courses Available", value: "25+" },
    { icon: Star, label: "Average Rating", value: "4.8" },
    { icon: Zap, label: "Success Rate", value: "92%" }
  ];

  const features = [
    {
      icon: Code,
      title: "Hands-on Projects",
      description: "Build real embedded systems projects from day one"
    },
    {
      icon: Cpu, 
      title: "Industry-Standard Tools",
      description: "Learn with the same tools used by professionals"
    },
    {
      icon: Wifi,
      title: "Expert Instructors", 
      description: "Learn from experienced embedded systems engineers"
    }
  ];

  return (
    <div className="min-h-screen bg-background font-inter">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="4" height="4" patternUnits="userSpaceOnUse">
                <path d="M 4 0 L 0 0 0 4" fill="none" stroke="currentColor" strokeWidth="0.1" className="text-primary"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)"/>
          </svg>
        </div>

        {/* Animated Particles */}
        <AnimatedParticles />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <Badge className="mb-6 bg-green-500/10 text-green-400 border-green-500/20 font-mono">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                  v2.1.0 - Latest Release
                </Badge>
                
                <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white leading-tight">
                  Code Your Way to
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400">
                    Embedded Mastery
                  </span>
                </h1>
                
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Learn embedded systems development with hands-on projects, real hardware, and industry best practices. 
                  From Arduino basics to advanced IoT systems.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-slate-900 hover:bg-gray-100 font-semibold px-8 py-6 text-lg transition-all duration-300 hover:scale-105">
                  <Code className="mr-2 w-5 h-5" />
                  Start Coding Now
                </Button>
                
                <Button size="lg" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-gray-500 px-8 py-6 text-lg">
                  <Play className="mr-2 w-5 h-5" />
                  View Demo
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="flex flex-wrap gap-8 pt-4">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span className="text-white font-semibold">4.9/5</span>
                  <span className="text-gray-400">Rating</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-blue-400" />
                  <span className="text-white font-semibold">5,000+</span>
                  <span className="text-gray-400">Students</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Trophy className="w-5 h-5 text-purple-400" />
                  <span className="text-white font-semibold">25+</span>
                  <span className="text-gray-400">Courses</span>
                </div>
              </div>
            </div>

            {/* Right Content - Code Terminal */}
            <div className="space-y-6">
              {/* Terminal Window */}
              <Card className="bg-slate-900/50 border-gray-700 shadow-2xl backdrop-blur-sm">
                <CardHeader className="pb-0">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <span className="text-gray-400 text-sm font-mono ml-4">embedded-project.ino</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="bg-slate-950 rounded-lg p-4 font-mono text-sm overflow-hidden">
                    <div className="space-y-2">
                      <div className="text-gray-500">// IoT Temperature Monitoring System</div>
                      <div>
                        <span className="text-purple-400">#include</span>{' '}
                        <span className="text-green-400">&lt;WiFi.h&gt;</span>
                      </div>
                      <div>
                        <span className="text-purple-400">#include</span>{' '}
                        <span className="text-green-400">&lt;DHT.h&gt;</span>
                      </div>
                      <div className="text-gray-600">// ...</div>
                      <div className="pt-2">
                        <span className="text-blue-400">void</span>{' '}
                        <span className="text-yellow-400">setup</span>
                        <span className="text-white">() {"{"}</span>
                      </div>
                      <div className="pl-4">
                        <span className="text-white">Serial.</span>
                        <span className="text-yellow-400">begin</span>
                        <span className="text-white">(</span>
                        <span className="text-orange-400">115200</span>
                        <span className="text-white">);</span>
                      </div>
                      <div className="pl-4">
                        <span className="text-white">WiFi.</span>
                        <span className="text-yellow-400">begin</span>
                        <span className="text-white">(ssid, password);</span>
                      </div>
                      <div className="text-white">{"}"}</div>
                      <div className="pt-2 flex items-center">
                        <div className="w-2 h-4 bg-white animate-pulse mr-1"></div>
                        <span className="text-gray-500">Ready to compile...</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Course Preview Cards */}
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-blue-500/20 backdrop-blur-sm hover-scale">
                  <CardContent className="p-4 text-center">
                    <Cpu className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                    <h3 className="text-white font-semibold text-sm">Embedded C</h3>
                    <p className="text-gray-400 text-xs">Low-level programming</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-to-br from-green-500/10 to-blue-500/10 border-green-500/20 backdrop-blur-sm hover-scale">
                  <CardContent className="p-4 text-center">
                    <Wifi className="w-8 h-8 text-green-400 mx-auto mb-2" />
                    <h3 className="text-white font-semibold text-sm">IoT Systems</h3>
                    <p className="text-gray-400 text-xs">Connected devices</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20 bg-gradient-to-b from-background to-accent/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Featured Courses
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Start with our most popular courses designed for beginners and professionals
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/courses">
                View All Courses
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Why Choose Embedded School?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We provide comprehensive, practical education in embedded systems and IoT development 
                with a focus on real-world applications and industry standards.
              </p>
              
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid gap-6">
              <Card className="bg-gradient-card shadow-card-hover border-0">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                    <span>Certification Ready</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    All courses prepare you for industry certifications and real-world employment.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-card shadow-card-hover border-0">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="w-6 h-6 text-blue-500" />
                    <span>Community Support</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Join a vibrant community of embedded systems enthusiasts and professionals.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-primary-glow to-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Start Your Embedded Journey?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of students mastering embedded systems. Get instant access to our beginner-friendly courses.
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100 px-8 py-6 text-lg shadow-glow">
            Get Started Free Trial
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
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
                <li><Link to="/courses/arduino" className="hover:text-secondary-foreground">Arduino</Link></li>
                <li><Link to="/courses/embedded-c" className="hover:text-secondary-foreground">Embedded C</Link></li>
                <li><Link to="/courses/iot" className="hover:text-secondary-foreground">IoT Systems</Link></li>
                <li><Link to="/courses/automotive" className="hover:text-secondary-foreground">Automotive</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Company</h4>
              <ul className="space-y-2 text-secondary-foreground/80">
                <li><Link to="/about" className="hover:text-secondary-foreground">About Us</Link></li>
                <li><Link to="/contact" className="hover:text-secondary-foreground">Contact</Link></li>
                <li><Link to="/blog" className="hover:text-secondary-foreground">Blog</Link></li>
                <li><Link to="/careers" className="hover:text-secondary-foreground">Careers</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Support</h4>
              <ul className="space-y-2 text-secondary-foreground/80">
                <li><Link to="/help" className="hover:text-secondary-foreground">Help Center</Link></li>
                <li><Link to="/terms" className="hover:text-secondary-foreground">Terms</Link></li>
                <li><Link to="/privacy" className="hover:text-secondary-foreground">Privacy</Link></li>
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

export default Index;