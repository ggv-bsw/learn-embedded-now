import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/ui/navigation";
import ScrollReveal from "@/components/scroll-reveal";
import { Calendar, Clock, User, ArrowRight, Zap, Shield, Sword, Star } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "The Force of Embedded Systems: A New Hope for IoT",
    excerpt: "Discover how embedded systems are bringing balance to the IoT galaxy, connecting devices across the universe with unprecedented power.",
    author: "Master Yoda",
    date: "May 4, 2024",
    readTime: "5 min read",
    category: "IoT",
    image: "/api/placeholder/400/250",
    featured: true
  },
  {
    id: 2,
    title: "The Arduino Strikes Back: Advanced Programming Techniques",
    excerpt: "Unleash the power of the dark side with advanced Arduino programming techniques that would make even Darth Vader proud.",
    author: "Anakin Skywalker",
    date: "May 1, 2024",
    readTime: "8 min read",
    category: "Arduino",
    image: "/api/placeholder/400/250",
    featured: false
  },
  {
    id: 3,
    title: "Return of the C: Mastering Low-Level Programming",
    excerpt: "Join Luke Skywalker's journey from padawan to Jedi Master as he conquers the ancient art of embedded C programming.",
    author: "Luke Skywalker",
    date: "Apr 28, 2024",
    readTime: "12 min read",
    category: "Embedded C",
    image: "/api/placeholder/400/250",
    featured: false
  },
  {
    id: 4,
    title: "The Phantom Menace: Debugging Embedded Systems",
    excerpt: "Learn to sense disturbances in the code and eliminate bugs before they strike. Your debugging skills will become legendary.",
    author: "Obi-Wan Kenobi",
    date: "Apr 25, 2024",
    readTime: "6 min read",
    category: "Debugging",
    image: "/api/placeholder/400/250",
    featured: false
  },
  {
    id: 5,
    title: "Attack of the Clones: Scalable IoT Architecture",
    excerpt: "Build an army of connected devices with scalable IoT architectures that can handle galactic-scale deployments.",
    author: "Padmé Amidala",
    date: "Apr 22, 2024",
    readTime: "10 min read",
    category: "Architecture",
    image: "/api/placeholder/400/250",
    featured: false
  },
  {
    id: 6,
    title: "Revenge of the Sith: Security in Embedded Systems",
    excerpt: "Protect your systems from the dark side with advanced security techniques. Don't let your code fall to the Sith.",
    author: "Mace Windu",
    date: "Apr 19, 2024",
    readTime: "7 min read",
    category: "Security",
    image: "/api/placeholder/400/250",
    featured: false
  }
];

const categories = ["All", "IoT", "Arduino", "Embedded C", "Debugging", "Architecture", "Security"];

const Blog = () => {
  return (
    <div className="min-h-screen bg-slate-900 font-inter text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[80vh] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center overflow-hidden">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="4" height="4" patternUnits="userSpaceOnUse">
                <path d="M 4 0 L 0 0 0 4" fill="none" stroke="currentColor" strokeWidth="0.1" className="text-blue-400"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)"/>
          </svg>
        </div>

        {/* Stars Background */}
        <div className="absolute inset-0 opacity-30">
          <div className="stars absolute inset-0"></div>
          <div className="stars2 absolute inset-0"></div>
          <div className="stars3 absolute inset-0"></div>
        </div>

        {/* Death Star */}
        <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-gradient-to-br from-slate-600 via-slate-700 to-slate-800 opacity-30 animate-pulse border border-blue-400/20">
          <div className="absolute top-4 left-4 w-6 h-6 rounded-full bg-blue-400 opacity-60"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <ScrollReveal>
            <Badge className="mb-6 bg-blue-500/10 text-blue-400 border-blue-500/20 font-mono">
              <Star className="w-4 h-4 mr-2" />
              A long time ago in a galaxy far, far away...
            </Badge>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-white leading-tight">
              THE EMBEDDED
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400">
                CHRONICLES
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join the Rebellion against complex code. Learn the ways of the Force in embedded systems, 
              Arduino mastery, and IoT wisdom from Jedi Masters across the galaxy.
            </p>
            
            <Button size="lg" className="bg-white text-slate-900 hover:bg-gray-100 font-semibold px-8 py-6 text-lg transition-all duration-300 hover:scale-105">
              <Zap className="mr-2 w-5 h-5" />
              Begin Your Journey
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <Badge className="mb-6 bg-purple-500/10 text-purple-400 border-purple-500/20 font-mono">
                <Shield className="w-4 h-4 mr-2" />
                Featured Transmission
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
                Latest from the Jedi Archives
              </h2>
            </div>
            
            {blogPosts.filter(post => post.featured).map((post) => (
              <Card key={post.id} className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 group max-w-4xl mx-auto hover:scale-105">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative overflow-hidden">
                    <div className="w-full h-64 lg:h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                      <Sword className="w-16 h-16 text-blue-400 opacity-60" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                  </div>
                  
                  <CardContent className="p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20">
                        {post.category}
                      </Badge>
                      <span className="text-sm text-gray-400">Featured</span>
                    </div>
                    
                    <CardTitle className="text-2xl lg:text-3xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors">
                      {post.title}
                    </CardTitle>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                    
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white w-fit">
                      Read the Holocron
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </div>
              </Card>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-white">
              Chronicles from the Galaxy
            </h2>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === "All" ? "default" : "outline"}
                  size="sm"
                  className={category === "All" 
                    ? "bg-blue-600 hover:bg-blue-700 text-white" 
                    : "border-slate-600 text-gray-300 hover:bg-slate-700 hover:border-slate-500"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => !post.featured).map((post, index) => (
              <ScrollReveal key={post.id} delay={index * 100}>
                <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 group h-full hover:scale-105">
                  <div className="relative overflow-hidden">
                    <div className="w-full h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                      <Star className="w-12 h-12 text-blue-400 opacity-60" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                    <Badge className={`absolute top-3 right-3 ${
                      post.category === 'IoT' ? 'bg-blue-500/20 text-blue-400 border-blue-500/30' :
                      post.category === 'Arduino' ? 'bg-green-500/20 text-green-400 border-green-500/30' :
                      post.category === 'Embedded C' ? 'bg-red-500/20 text-red-400 border-red-500/30' :
                      post.category === 'Debugging' ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' :
                      post.category === 'Architecture' ? 'bg-purple-500/20 text-purple-400 border-purple-500/30' :
                      'bg-orange-500/20 text-orange-400 border-orange-500/30'
                    }`}>
                      {post.category}
                    </Badge>
                  </div>
                  
                  <CardContent className="p-6 flex flex-col flex-grow">
                    <CardTitle className="text-lg font-bold mb-3 text-white group-hover:text-blue-400 transition-colors line-clamp-2">
                      {post.title}
                    </CardTitle>
                    
                    <p className="text-gray-400 mb-4 text-sm leading-relaxed flex-grow line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <Button size="sm" variant="outline" className="border-slate-600 text-gray-300 hover:bg-slate-700 hover:border-slate-500 w-full">
                      Read More
                      <ArrowRight className="ml-2 w-3 h-3" />
                    </Button>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Join the Rebel Alliance
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Receive transmissions from across the galaxy. Get the latest embedded systems wisdom 
                delivered directly to your hologram projector.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="your.email@rebellion.com"
                  className="flex-1 px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
                />
                <Button className="bg-white text-slate-900 hover:bg-gray-100 px-6 font-semibold">
                  Join the Force
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Blog;