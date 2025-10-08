import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import Navigation from "@/components/ui/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  Loader2,
  Share2,
} from "lucide-react";
import { toast } from "sonner";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  category: string;
  read_time: string;
  created_at: string;
  featured: boolean;
}

const BlogPostDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) return;

      try {
        const { data, error } = await supabase
          .from("blog_posts")
          .select("*")
          .eq("slug", slug)
          .eq("published", true)
          .single();

        if (error) throw error;
        setPost(data);
      } catch (error) {
        console.error("Error fetching blog post:", error);
        toast.error("Failed to load blog post");
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  const copyToClipboard = async () => {
    if (!post) return;

    const shareText = `${post.title}\n\n${post.excerpt}\n\nRead more: ${window.location.href}`;

    try {
      await navigator.clipboard.writeText(shareText);
      toast.success("Article link and description copied to clipboard!");
    } catch (error) {
      console.error("Failed to copy link:", error);
      toast.error("Failed to copy link");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-blue-400 animate-spin" />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-slate-900 text-white">
        <Navigation />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Post Not Found
          </h1>
          <p className="text-gray-400 mb-8">
            The blog post you're looking for doesn't exist.
          </p>
          <Link to="/blog">
            <Button>
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 font-inter text-white">
      <Navigation />

      {/* Back Button */}
      <section className="bg-slate-800 py-6">
        <div className="container mx-auto px-4">
          <Link to="/blog">
            <Button
              variant="ghost"
              className="text-gray-300 hover:text-slate-900"
            >
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </section>

      {/* Article Header */}
      <article className="py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-8">
            <Badge className="mb-4 bg-blue-500/10 text-blue-400 border-blue-500/20">
              {post.category}
            </Badge>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              {post.excerpt}
            </p>

            <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm text-gray-400 pb-8 border-b border-slate-700">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>
                  {new Date(post.created_at).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.read_time}</span>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div
            className="prose prose-invert prose-lg max-w-none
              prose-headings:text-white prose-headings:font-bold
              prose-h2:text-2xl md:prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
              prose-h3:text-xl md:prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
              prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-4
              prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline
              prose-strong:text-white prose-strong:font-semibold
              prose-code:text-blue-400 prose-code:bg-slate-800 prose-code:px-2 prose-code:py-1 prose-code:rounded
              prose-pre:bg-slate-800 prose-pre:border prose-pre:border-slate-700
              prose-ul:text-gray-300 prose-ol:text-gray-300
              prose-li:mb-2"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Share Section */}
          <div className="mt-12 pt-8 border-t border-slate-700">
            <h3 className="text-xl font-bold mb-4">Share this article</h3>
            <div className="flex flex-wrap gap-3">
              <Button
                onClick={copyToClipboard}
                variant="outline"
                className="border-slate-600 text-slate-900 hover:bg-green-500 hover:text-white hover:border-green-500"
              >
                <Share2 className="w-4 h-4 mr-2" />
                Copy Link
              </Button>
            </div>
          </div>
        </div>
      </article>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              Join the Rebel Alliance
            </h2>
            <p className="text-base md:text-lg text-gray-300 mb-8">
              Receive transmissions from across the galaxy. Get the latest
              embedded systems wisdom delivered directly to your hologram
              projector.
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
        </div>
      </section>
    </div>
  );
};

export default BlogPostDetail;
