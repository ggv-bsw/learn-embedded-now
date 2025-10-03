import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Navigation from "@/components/ui/navigation";
import AnimatedParticles from "@/components/animated-particles";
import ScrollReveal from "@/components/scroll-reveal";
import {
  Star,
  MapPin,
  Clock,
  Users,
  Award,
  Code,
  Cpu,
  CheckCircle,
  Trophy,
} from "lucide-react";
import { team } from "@/testData/teamData";
import { Link } from "react-router-dom";

const Trainers = () => {
  return (
    <div className="min-h-screen bg-slate-900 font-inter text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center overflow-hidden">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              <pattern
                id="grid"
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
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <AnimatedParticles />

        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <div className="text-center max-w-4xl mx-auto">
              <Badge className="mb-6 bg-blue-500/10 text-blue-400 border-blue-500/20 font-mono">
                <Award className="w-4 h-4 mr-2" />
                Expert Instructors
              </Badge>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
                Meet Our
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400">
                  Expert Trainers
                </span>
              </h1>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Learn from industry professionals with years of real-world
                experience in embedded systems, IoT development, and
                cutting-edge technology solutions.
              </p>

              <div className="flex flex-wrap justify-center gap-8 pt-4">
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-blue-400" />
                  <span className="text-white font-semibold">4,530+</span>
                  <span className="text-gray-400">Students Taught</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span className="text-white font-semibold">4.9</span>
                  <span className="text-gray-400">Average Rating</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Trophy className="w-5 h-5 text-purple-400" />
                  <span className="text-white font-semibold">15,000+</span>
                  <span className="text-gray-400">Hours Experience</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Trainers Grid */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-purple-500/10 text-purple-400 border-purple-500/20 font-mono">
              <Code className="w-4 h-4 mr-2" />
              Industry Professionals
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
              Your Learning Mentors
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Expert embedded systems engineers ready to guide your journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {team.map((trainer, index) => (
              <ScrollReveal key={trainer.id} delay={index * 100}>
                <Card className="group hover:shadow-2xl transition-all duration-300 bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 hover:scale-105">
                  <CardHeader className="pb-4">
                    <div className="flex items-start gap-4">
                      <div className="relative">
                        <Avatar className="w-20 h-20 border-2 border-blue-500/30">
                          <AvatarImage src={trainer.image} alt={trainer.name} />
                          <AvatarFallback className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 text-blue-400 text-xl font-bold">
                            {trainer.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-slate-800 flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                      </div>

                      <div className="flex-1">
                        <CardTitle className="text-xl font-bold mb-1 text-white group-hover:text-blue-400 transition-colors">
                          {trainer.name}
                        </CardTitle>
                        <CardDescription className="text-blue-400 font-medium mb-2">
                          {trainer.title}
                        </CardDescription>

                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="text-white">{trainer.rating}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            <span className="text-white">
                              {trainer.students}
                            </span>{" "}
                            students
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span className="text-white">
                              {trainer.experience}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-1 text-sm text-gray-400">
                          <MapPin className="w-4 h-4" />
                          <span>{trainer.location}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {trainer.bio}
                    </p>

                    <div>
                      <h4 className="font-semibold mb-2 text-sm text-white">
                        Expertise
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {trainer.expertise.map((skill) => (
                          <Badge
                            key={skill}
                            className="bg-blue-500/10 text-blue-400 border-blue-500/20"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2 text-sm text-white">
                        Specialties
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {trainer.specialties.map((specialty) => (
                          <Badge
                            key={specialty}
                            variant="outline"
                            className="text-xs border-slate-600 text-gray-300 hover:bg-slate-800 hover:border-slate-500"
                          >
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-2 pt-2">
                      <Button
                        size="sm"
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
                      >
                        <Link
                          to={trainer.linkedin}
                          className="hover:text-blue-400 transition-colors"
                        >
                          View Profile
                        </Link>
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 border-slate-600 text-gray-300 text-slate-900 hover:border-slate-500"
                      >
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
      <section className="py-16 bg-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <AnimatedParticles />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-blue-400">
                  25+
                </div>
                <div className="text-sm text-gray-400">
                  Years Combined Experience
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-blue-400">
                  4.9
                </div>
                <div className="text-sm text-gray-400">Average Rating</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-blue-400">
                  4.5K+
                </div>
                <div className="text-sm text-gray-400">Students Mentored</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-blue-400">
                  50+
                </div>
                <div className="text-sm text-gray-400">Industry Projects</div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Ready to Learn from the Best?
              </h2>
              <p className="text-lg text-gray-400">
                Join thousands of students who have advanced their careers with
                our expert trainers. Get personalized mentorship and hands-on
                guidance.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-slate-900 hover:bg-gray-100 font-semibold px-6 md:px-8 py-4 md:py-6 text-base md:text-lg transition-all duration-300 hover:scale-105"
                >
                  <Link to="/courses" className="flex items-center">
                    <Code className="mr-2 w-4 md:w-5 h-4 md:h-5" />
                    Browse All Courses
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-600 text-slate-900 hover:border-gray-500 px-6 md:px-8 py-4 md:py-6 text-base md:text-lg"
                >
                  Schedule Consultation
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Become a Trainer Section */}
      <section className="py-20 bg-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <AnimatedParticles />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <Badge className="mb-6 bg-green-500/10 text-green-400 border-green-500/20 font-mono">
                <Trophy className="w-4 h-4 mr-2" />
                Join Our Team
              </Badge>

              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Become a
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-green-400">
                  Trainer at Engineers Factory
                </span>
              </h2>

              <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-8">
                Are you an experienced embedded systems engineer or IoT
                specialist? Join our team of expert trainers and help shape the
                next generation of engineers. Share your knowledge and make a
                meaningful impact.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="p-6 bg-slate-900/50 rounded-lg border border-slate-700">
                  <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <Users className="w-6 h-6 text-green-400" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">
                    Flexible Teaching
                  </h3>
                  <p className="text-sm text-gray-400">
                    Set your own schedule and teach from anywhere
                  </p>
                </div>

                <div className="p-6 bg-slate-900/50 rounded-lg border border-slate-700">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <Award className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">
                    Expert Recognition
                  </h3>
                  <p className="text-sm text-gray-400">
                    Build your reputation in the embedded systems community
                  </p>
                </div>

                <div className="p-6 bg-slate-900/50 rounded-lg border border-slate-700">
                  <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <Cpu className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">
                    Competitive Pay
                  </h3>
                  <p className="text-sm text-gray-400">
                    Earn competitive rates for sharing your expertise
                  </p>
                </div>
              </div>

              <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-8">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Requirements
                </h3>
                <div className="grid md:grid-cols-2 gap-4 text-left">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">
                      5+ years of industry experience
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">
                      Strong communication skills
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">
                      Expertise in embedded systems or IoT
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">
                      Passion for teaching and mentoring
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
                >
                  <Award className="mr-2 w-5 h-5" />
                  Apply to Teach
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-600 text-slate-900 hover:bg-gray-800 hover:border-gray-500 px-8 py-6 text-lg"
                >
                  Learn More
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
