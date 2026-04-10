import React, { Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import SeoLayout from "@/layouts/SeoLayout";

// Only Index is eagerly loaded (landing page)
import Index from "./pages/Index";

// Lazy-load all other pages to reduce initial JS bundle
const Courses = React.lazy(() => import("./pages/Courses"));
const CourseDetail = React.lazy(() => import("./pages/CourseDetail"));
const About = React.lazy(() => import("./pages/About"));
const Trainers = React.lazy(() => import("./pages/Trainers"));
const Blog = React.lazy(() => import("./pages/Blog"));
const BlogPostDetail = React.lazy(() => import("./pages/BlogPostDetail"));
const Contact = React.lazy(() => import("./pages/Contact"));
const Hardware = React.lazy(() => import("./pages/Hardware"));
const HardwareDetail = React.lazy(() => import("./pages/HardwareDetail"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const JuniorProgram = React.lazy(() => import("./pages/JuniorProgram"));
const Checkout = React.lazy(() => import("./pages/Checkout"));
const Documentation = React.lazy(() => import("./pages/Documentation"));

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const PageFallback = () => (
  <div className="min-h-screen bg-slate-950 flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
  </div>
);

const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <Suspense fallback={<PageFallback />}>
              <Routes>
              <Route path="/" element={<SeoLayout />}>
                <Route index element={<Index />} />
                <Route path="courses" element={<Courses />} />
                <Route path="courses/:courseId" element={<CourseDetail />} />
                <Route path="about" element={<About />} />
                <Route path="trainers" element={<Trainers />} />
                <Route path="blog" element={<Blog />} />
                <Route path="blog/:slug" element={<BlogPostDetail />} />
                <Route path="contact" element={<Contact />} />
                <Route path="hardware" element={<Hardware />} />
                <Route path="hardware/:productId" element={<HardwareDetail />} />
                <Route path="junior" element={<JuniorProgram />} />
                <Route path="checkout" element={<Checkout />} />
                <Route path="documentation" element={<Documentation />} />
              </Route>

              <Route path="/ro" element={<SeoLayout />}>
                <Route index element={<Index />} />
                <Route path="courses" element={<Courses />} />
                <Route path="courses/:courseId" element={<CourseDetail />} />
                <Route path="about" element={<About />} />
                <Route path="trainers" element={<Trainers />} />
                <Route path="blog" element={<Blog />} />
                <Route path="blog/:slug" element={<BlogPostDetail />} />
                <Route path="contact" element={<Contact />} />
                <Route path="hardware" element={<Hardware />} />
                <Route path="hardware/:productId" element={<HardwareDetail />} />
                <Route path="junior" element={<JuniorProgram />} />
                <Route path="checkout" element={<Checkout />} />
                <Route path="documentation" element={<Documentation />} />
              </Route>

              <Route path="/ru" element={<SeoLayout />}>
                <Route index element={<Index />} />
                <Route path="courses" element={<Courses />} />
                <Route path="courses/:courseId" element={<CourseDetail />} />
                <Route path="about" element={<About />} />
                <Route path="trainers" element={<Trainers />} />
                <Route path="blog" element={<Blog />} />
                <Route path="blog/:slug" element={<BlogPostDetail />} />
                <Route path="contact" element={<Contact />} />
                <Route path="hardware" element={<Hardware />} />
                <Route path="hardware/:productId" element={<HardwareDetail />} />
                <Route path="junior" element={<JuniorProgram />} />
                <Route path="checkout" element={<Checkout />} />
                <Route path="documentation" element={<Documentation />} />
              </Route>
              
              <Route path="*" element={<NotFound />} />
            </Routes>
            </Suspense>
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;
