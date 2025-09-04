import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/ui/navigation";
import CourseCard from "@/components/course-card";
import { Search, Filter, SlidersHorizontal, Code, BookOpen, Users, Star } from "lucide-react";
import courseArduino from "@/assets/course-arduino.jpg";
import courseIot from "@/assets/course-iot.jpg";
import courseEmbeddedC from "@/assets/course-embedded-c.jpg";
import AnimatedParticles from "@/components/animated-particles";

const Courses = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All");

  const categories = ["All", "Arduino", "Embedded C", "IoT", "Automotive"];
  const levels = ["All", "Beginner", "Intermediate", "Advanced"];

  const allCourses = [
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
    },
    {
      id: "arduino-projects",
      title: "Arduino Project Masterclass",
      description: "Build 20+ Arduino projects including robotics, sensors, and automation systems. Hands-on learning approach.",
      image: courseArduino,
      price: 179,
      duration: "6 weeks",
      students: 920,
      rating: 4.6,
      level: "Intermediate" as const,
      category: "Arduino"
    },
    {
      id: "automotive-embedded",
      title: "Automotive Embedded Systems",
      description: "Learn automotive electronics, CAN bus, and embedded systems for vehicle applications. Industry-focused curriculum.",
      image: courseEmbeddedC,
      price: 299,
      duration: "14 weeks",
      students: 420,
      rating: 4.9,
      level: "Advanced" as const,
      category: "Automotive"
    },
    {
      id: "iot-protocols",
      title: "IoT Communication Protocols",
      description: "Master WiFi, Bluetooth, LoRa, and cellular communication for IoT devices. Protocol deep-dive course.",
      image: courseIot,
      price: 199,
      duration: "8 weeks",
      students: 750,
      rating: 4.5,
      level: "Intermediate" as const,
      category: "IoT"
    }
  ];

  const filteredCourses = allCourses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || course.category === selectedCategory;
    const matchesLevel = selectedLevel === "All" || course.level === selectedLevel;
    
    return matchesSearch && matchesCategory && matchesLevel;
  });

  return (
    <div className="min-h-screen bg-slate-900 font-inter text-white">
      <Navigation />
      
      {/* Hero Header */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
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
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-blue-500/10 text-blue-400 border-blue-500/20 font-mono">
              <BookOpen className="w-4 h-4 mr-2" />
              All Courses Available
            </Badge>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Master Embedded
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400">
                Systems & IoT
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
              Discover comprehensive courses in embedded systems, IoT, and programming. 
              Start your journey from beginner to professional level.
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-8 mb-12">
              <div className="flex items-center space-x-2">
                <BookOpen className="w-5 h-5 text-blue-400" />
                <span className="text-white font-semibold">{allCourses.length}</span>
                <span className="text-gray-400">Courses</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-green-400" />
                <span className="text-white font-semibold">5,000+</span>
                <span className="text-gray-400">Students</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-yellow-400" />
                <span className="text-white font-semibold">4.8</span>
                <span className="text-gray-400">Avg Rating</span>
              </div>
            </div>
            
            {/* Search and Filters */}
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm shadow-2xl max-w-3xl mx-auto">
              <CardContent className="pt-6">
                <div className="relative mb-6">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    placeholder="Search courses..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 bg-slate-900/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-blue-500"
                  />
                </div>
                
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="flex items-center space-x-2">
                      <Filter className="w-4 h-4 text-gray-400" />
                      <span className="text-sm font-medium text-gray-300">Category:</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {categories.map(category => (
                        <Badge
                          key={category}
                          variant={selectedCategory === category ? "default" : "outline"}
                          className={`cursor-pointer transition-all duration-200 ${
                            selectedCategory === category 
                              ? "bg-blue-600 hover:bg-blue-700 text-white border-blue-600" 
                              : "border-slate-600 text-gray-300 hover:bg-slate-700 hover:border-slate-500"
                          }`}
                          onClick={() => setSelectedCategory(category)}
                        >
                          {category}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="flex items-center space-x-2">
                      <SlidersHorizontal className="w-4 h-4 text-gray-400" />
                      <span className="text-sm font-medium text-gray-300">Level:</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {levels.map(level => (
                        <Badge
                          key={level}
                          variant={selectedLevel === level ? "default" : "outline"}
                          className={`cursor-pointer transition-all duration-200 ${
                            selectedLevel === level 
                              ? "bg-blue-600 hover:bg-blue-700 text-white border-blue-600" 
                              : "border-slate-600 text-gray-300 hover:bg-slate-700 hover:border-slate-500"
                          }`}
                          onClick={() => setSelectedLevel(level)}
                        >
                          {level}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">
                {filteredCourses.length} Course{filteredCourses.length !== 1 ? 's' : ''} Found
              </h2>
              <p className="text-gray-400">
                {selectedCategory !== "All" && `${selectedCategory} • `}
                {selectedLevel !== "All" && `${selectedLevel} Level • `}
                Professional embedded systems education
              </p>
            </div>
            
            {(selectedCategory !== "All" || selectedLevel !== "All" || searchQuery) && (
              <Button 
                variant="outline"
                className="border-slate-600 text-gray-300 hover:bg-slate-800 hover:border-slate-500"
                onClick={() => {
                  setSelectedCategory("All");
                  setSelectedLevel("All");
                  setSearchQuery("");
                }}
              >
                Clear Filters
              </Button>
            )}
          </div>
          
          {filteredCourses.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course) => (
                <Card key={course.id} className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 group">
                  <div className="relative overflow-hidden">
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                    <Badge className={`absolute top-3 right-3 ${
                      course.level === 'Beginner' ? 'bg-green-500/20 text-green-400 border-green-500/30' :
                      course.level === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' :
                      'bg-red-500/20 text-red-400 border-red-500/30'
                    }`}>
                      {course.level}
                    </Badge>
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-gray-400 mb-4 line-clamp-2">
                      {course.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-4">
                        <span className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {course.students.toLocaleString()}
                        </span>
                        <span className="flex items-center">
                          <Star className="w-4 h-4 mr-1 text-yellow-400" />
                          {course.rating}
                        </span>
                      </div>
                      <span>{course.duration}</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold text-white">${course.price}</span>
                      </div>
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                        Enroll Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm max-w-md mx-auto">
                <CardContent className="pt-8 pb-8">
                  <div className="w-16 h-16 bg-slate-700/50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white">No courses found</h3>
                  <p className="text-gray-400 mb-4">
                    Try adjusting your search criteria or browse all courses
                  </p>
                  <Button 
                    variant="outline"
                    className="border-slate-600 text-gray-300 hover:bg-slate-700 hover:border-slate-500"
                    onClick={() => {
                      setSelectedCategory("All");
                      setSelectedLevel("All");
                      setSearchQuery("");
                    }}
                  >
                    View All Courses
                  </Button>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <Card className="bg-slate-800/90 border-blue-500/30 backdrop-blur-sm max-w-4xl mx-auto shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 transition-all duration-300">
            <CardContent className="pt-12 pb-12 text-center">
              <Badge className="mb-6 bg-purple-500/30 text-purple-300 border-purple-500/50 font-mono shadow-lg">
                <Code className="w-4 h-4 mr-2" />
                Need Something Specific?
              </Badge>
              
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
                Can't Find What You're Looking For?
              </h2>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
                We're constantly adding new courses. Contact us to suggest a topic or get notified about upcoming releases.
              </p>
              
              {/* Feature highlights */}
              <div className="grid md:grid-cols-3 gap-6 mb-8 max-w-3xl mx-auto">
                <div className="bg-slate-700/50 rounded-lg p-4 border border-slate-600">
                  <h3 className="font-semibold text-white mb-2">Custom Curriculum</h3>
                  <p className="text-gray-300 text-sm">Tailored courses for your specific needs</p>
                </div>
                <div className="bg-slate-700/50 rounded-lg p-4 border border-slate-600">
                  <h3 className="font-semibold text-white mb-2">Expert Instructors</h3>
                  <p className="text-gray-300 text-sm">Learn from industry professionals</p>
                </div>
                <div className="bg-slate-700/50 rounded-lg p-4 border border-slate-600">
                  <h3 className="font-semibold text-white mb-2">Early Access</h3>
                  <p className="text-gray-300 text-sm">Get notified about new releases first</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-6 shadow-lg">
                  Contact Us
                </Button>
                <Button size="lg" variant="outline" className="border-slate-500 text-gray-200 hover:bg-slate-700 hover:border-slate-400 px-8 py-6">
                  Subscribe to Updates
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Courses;