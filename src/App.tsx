import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import Index from "./pages/Index";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import About from "./pages/About";
import Trainers from "./pages/Trainers";
import Blog from "./pages/Blog";
import BlogPostDetail from "./pages/BlogPostDetail";
import Contact from "./pages/Contact";
import Hardware from "./pages/Hardware";
import HardwareDetail from "./pages/HardwareDetail";
import NotFound from "./pages/NotFound";
import JuniorProgram from "./pages/JuniorProgram";
import Checkout from "./pages/Checkout";
import Documentation from "./pages/Documentation";
import SeoLayout from "@/layouts/SeoLayout";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
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

            {/* RU — явная ветка */}
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
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
  </ErrorBoundary>
);

export default App;
