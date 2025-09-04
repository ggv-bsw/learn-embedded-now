import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import AnimatedParticles from "@/components/animated-particles";
import ScrollReveal from "@/components/scroll-reveal";
import { Star, MapPin, Clock, Users, Award, Code, Database, Cpu } from "lucide-react";

const trainers = [
  {
    id: 1,
    name: "Alex Rodriguez",
    title: "Senior Arduino Specialist",
    expertise: ["Arduino", "Embedded Systems", "IoT Hardware"],
    experience: "8+ years",
    rating: 4.9,
    students: 1250,
    location: "San Francisco, CA",
    image: "/api/placeholder/150/150",
    bio: "Former Tesla engineer specializing in embedded systems and Arduino development. Expert in hardware-software integration.",
    specialties: ["Hardware Design", "Sensor Integration", "Real-time Systems"]
  },
  {
    id: 2,
    name: "Sarah Chen",
    title: "IoT Solutions Architect",
    expertise: ["IoT Development", "Cloud Integration", "Wireless Protocols"],
    experience: "6+ years",
    rating: 4.8,
    students: 980,
    location: "Seattle, WA",
    image: "/api/placeholder/150/150",
    bio: "Microsoft Azure IoT expert with extensive experience in industrial IoT solutions and smart city projects.",
    specialties: ["Cloud Connectivity", "Protocol Design", "Edge Computing"]
  },
  {
    id: 3,
    name: "Marcus Johnson",
    title: "Embedded C Programming Expert",
    expertise: ["Embedded C", "Microcontrollers", "RTOS"],
    experience: "10+ years",
    rating: 4.9,
    students: 1500,
    location: "Austin, TX",
    image: "/api/placeholder/150/150",
    bio: "Automotive industry veteran with expertise in safety-critical embedded systems and real-time operating systems.",
    specialties: ["Memory Management", "Performance Optimization", "System Architecture"]
  },
  {
    id: 4,
    name: "Dr. Emily Watson",
    title: "Research & Development Lead",
    expertise: ["Advanced Programming", "AI Integration", "Research"],
    experience: "12+ years",
    rating: 5.0,
    students: 800,
    location: "Boston, MA",
    image: "/api/placeholder/150/150",
    bio: "MIT PhD with focus on AI-powered embedded systems. Published researcher in IEEE journals on intelligent IoT devices.",
    specialties: ["Machine Learning", "Algorithm Design", "Academic Research"]
  }
];

const Trainers = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] bg-gradient-to-br from-background via-background to-primary/5 flex items-center justify-center overflow-hidden">
        <AnimatedParticles />
        
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full border border-primary/20 mb-6">
                <Award className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Expert Instructors</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                Meet Our <span className="text-primary">Expert Trainers</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                Learn from industry professionals with years of real-world experience in embedded systems, 
                IoT development, and cutting-edge technology solutions.
              </p>
              
              <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-primary" />
                  <span>4,530+ Students Taught</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-primary" />
                  <span>4.9 Average Rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>15,000+ Hours Experience</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Trainers Grid */}
      <section className="py-20 bg-gradient-to-b from-transparent to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {trainers.map((trainer, index) => (
              <ScrollReveal key={trainer.id} delay={index * 100}>
                <Card className="group hover:shadow-xl transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30">
                  <CardHeader className="pb-4">
                    <div className="flex items-start gap-4">
                      <div className="relative">
                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary/20 flex items-center justify-center">
                          <Code className="w-8 h-8 text-primary" />
                        </div>
                        <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-background flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <CardTitle className="text-xl font-bold mb-1">{trainer.name}</CardTitle>
                        <CardDescription className="text-primary font-medium mb-2">
                          {trainer.title}
                        </CardDescription>
                        
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-500 fill-current" />
                            <span>{trainer.rating}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            <span>{trainer.students} students</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{trainer.experience}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          <span>{trainer.location}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {trainer.bio}
                    </p>
                    
                    <div>
                      <h4 className="font-semibold mb-2 text-sm">Expertise</h4>
                      <div className="flex flex-wrap gap-2">
                        {trainer.expertise.map((skill) => (
                          <Badge key={skill} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2 text-sm">Specialties</h4>
                      <div className="flex flex-wrap gap-2">
                        {trainer.specialties.map((specialty) => (
                          <Badge key={specialty} variant="outline" className="text-xs">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-2 pt-2">
                      <Button size="sm" className="flex-1">
                        View Profile
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        Message
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-secondary/10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <AnimatedParticles />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-primary">25+</div>
                <div className="text-sm text-muted-foreground">Years Combined Experience</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-primary">4.9</div>
                <div className="text-sm text-muted-foreground">Average Rating</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-primary">4.5K+</div>
                <div className="text-sm text-muted-foreground">Students Mentored</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Industry Projects</div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-background to-primary/5">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Ready to Learn from the Best?
              </h2>
              <p className="text-lg text-muted-foreground">
                Join thousands of students who have advanced their careers with our expert trainers.
                Get personalized mentorship and hands-on guidance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-primary to-primary/80">
                  Browse All Courses
                </Button>
                <Button size="lg" variant="outline">
                  Schedule Consultation
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Trainers;