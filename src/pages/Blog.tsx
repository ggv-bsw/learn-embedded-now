import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/ui/navigation";
import ScrollReveal from "@/components/scroll-reveal";
import { Calendar, Clock, User, ArrowRight, Zap, Shield, Sword, Star, Loader2 } from "lucide-react";
import { toast } from "sonner";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  author: string;
  created_at: string;
  read_time: string;
  category: string;
  featured: boolean;
}

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "IoT", "Arduino", "Embedded C", "Debugging", "Architecture", "Security"];

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  const fetchBlogPosts = async () => {
    try {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("published", true)
        .order("created_at", { ascending: false });

      if (error) throw error;
      setBlogPosts(data || []);
    } catch (error) {
      console.error("Error fetching blog posts:", error);
      toast.error("Failed to load blog posts");
    } finally {
      setLoading(false);
    }
  };

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

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
            
            <Button size="lg" className="bg-white text-slate-900 hover:bg-gray-100 font-semibold px-6 md:px-8 py-4 md:py-6 text-base md:text-lg transition-all duration-300 hover:scale-105">
              <Zap className="mr-2 w-4 md:w-5 h-4 md:h-5" />
              Begin Your Journey
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Post */}
      {loading ? (
        <section className="py-20 bg-slate-900">
          <div className="container mx-auto px-4 flex justify-center">
            <Loader2 className="w-8 h-8 text-blue-400 animate-spin" />
          </div>
        </section>
      ) : featuredPost ? (
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
              
              <Link to={`/blog/${featuredPost.slug}`}>
                <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 group max-w-4xl mx-auto hover:scale-105">
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
                          {featuredPost.category}
                        </Badge>
                        <span className="text-sm text-gray-400">Featured</span>
                      </div>
                      
                      <CardTitle className="text-2xl lg:text-3xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors">
                        {featuredPost.title}
                      </CardTitle>
                      
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {featuredPost.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                        <div className="flex items-center gap-4 flex-wrap">
                          <div className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            <span>{featuredPost.author}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{new Date(featuredPost.created_at).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{featuredPost.read_time}</span>
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
              </Link>
            </ScrollReveal>
          </div>
        </section>
      ) : null}

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
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category 
                    ? "bg-blue-600 hover:bg-blue-700 text-white" 
                    : "border-slate-600 text-gray-300 hover:bg-slate-700 hover:border-slate-500"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
          
          {loading ? (
            <div className="flex justify-center py-12">
              <Loader2 className="w-8 h-8 text-blue-400 animate-spin" />
            </div>
          ) : regularPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No posts found in this category.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, index) => (
                <ScrollReveal key={post.id} delay={index * 100}>
                  <Link to={`/blog/${post.slug}`}>
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
                        
                        <div className="flex items-center justify-between text-xs text-gray-500 mb-4 flex-wrap gap-2">
                          <div className="flex items-center gap-1">
                            <User className="w-3 h-3" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span>{new Date(post.created_at).toLocaleDateString()}</span>
                            <span>•</span>
                            <span>{post.read_time}</span>
                          </div>
                        </div>
                        
                        <Button size="sm" variant="outline" className="border-slate-600 text-gray-300 hover:bg-slate-700 hover:border-slate-500 w-full">
                          Read More
                          <ArrowRight className="ml-2 w-3 h-3" />
                        </Button>
                      </CardContent>
                    </Card>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          )}
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