import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Navigation from "@/components/ui/navigation";
import CourseCard from "@/components/course-card";
import { Search, Filter, SlidersHorizontal } from "lucide-react";
import courseArduino from "@/assets/course-arduino.jpg";
import courseIot from "@/assets/course-iot.jpg";
import courseEmbeddedC from "@/assets/course-embedded-c.jpg";

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
    <div className="min-h-screen bg-background font-inter">
      <Navigation />
      
      {/* Header */}
      <section className="py-16 bg-gradient-to-r from-background via-accent/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Our Courses
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Discover comprehensive courses in embedded systems, IoT, and programming. 
              Start your journey from beginner to professional level.
            </p>
            
            {/* Search and Filters */}
            <div className="bg-card rounded-lg p-6 shadow-card-hover border-0 max-w-2xl mx-auto">
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder="Search courses..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center space-x-2">
                  <Filter className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-medium">Category:</span>
                  {categories.map(category => (
                    <Badge
                      key={category}
                      variant={selectedCategory === category ? "default" : "outline"}
                      className="cursor-pointer"
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex items-center space-x-2">
                  <SlidersHorizontal className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-medium">Level:</span>
                  {levels.map(level => (
                    <Badge
                      key={level}
                      variant={selectedLevel === level ? "default" : "outline"}
                      className="cursor-pointer"
                      onClick={() => setSelectedLevel(level)}
                    >
                      {level}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-semibold">
              {filteredCourses.length} Course{filteredCourses.length !== 1 ? 's' : ''} Found
            </h2>
            
            {(selectedCategory !== "All" || selectedLevel !== "All" || searchQuery) && (
              <Button 
                variant="outline" 
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
                <CourseCard key={course.id} {...course} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">No courses found</h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your search criteria or browse all courses
              </p>
              <Button 
                variant="outline"
                onClick={() => {
                  setSelectedCategory("All");
                  setSelectedLevel("All");
                  setSearchQuery("");
                }}
              >
                View All Courses
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary via-primary-glow to-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-xl opacity-90 mb-6 max-w-2xl mx-auto">
            We're constantly adding new courses. Contact us to suggest a topic or get notified about upcoming releases.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
              Contact Us
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Subscribe to Updates
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;