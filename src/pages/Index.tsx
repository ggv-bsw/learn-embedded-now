import { useState, lazy, Suspense, startTransition } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/ui/navigation";
import { useLanguage } from "@/contexts/LanguageContext";
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
  Trophy,
  BookOpen,
} from "lucide-react";
import { Link } from "react-router-dom";
import juniorChessRobot from "@/assets/junior-chess-robot.jpg";
import AnimatedParticles from "@/components/animated-particles";
import { useCourses } from "@/hooks/useCourses";
import { useProfessionalPacks } from "@/hooks/useProfessionalPacks";
import { ProfessionalPackCard } from "@/components/ProfessionalPackCard";
import Footer from "@/components/footer";

const CourseInquiryForm = lazy(() => import("@/components/CourseInquiryForm"));
const JuniorProgramForm = lazy(() =>
  import("@/components/JuniorProgramForm").then((m) => ({
    default: m.JuniorProgramForm,
  })),
);
const VideoDemo = lazy(() => import("@/components/VideoDemo"));

const Index = () => {
  const { t, language } = useLanguage();
  const { courses: featuredCourses, loading: coursesLoading } = useCourses();
  const { packs, loading: packsLoading } = useProfessionalPacks();
  const [showInquiryForm, setShowInquiryForm] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);

  const handleEnrollClick = (course: string) => {
    startTransition(() => {
      setSelectedCourse(course);
      setShowInquiryForm(true);
    });
  };

  const features = [
    {
      icon: Code,
      title: t("features.handsOn", "Hands-on Projects"),
      description: t("features.handsOnDesc", "Build real embedded systems projects from day one"),
    },
    {
      icon: Cpu,
      title: t("features.industryTools", "Industry-Standard Tools"),
      description: t("features.industryToolsDesc", "Learn with the same tools used by professionals"),
    },
    {
      icon: Wifi,
      title: t("features.expertInstructors", "Expert Instructors"),
      description: t("features.expertInstructorsDesc", "Learn from experienced embedded systems engineers"),
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900 font-inter text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="4" height="4" patternUnits="userSpaceOnUse">
                <path
                  d="M 4 0 L 0 0 0 4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.1"
                  className="text-primary"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Animated Particles */}
        <AnimatedParticles />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white leading-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400">
                    {t("hero.title", "Engineers Factory - Embedded School")}
                  </span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400">
                    {t("hero.subtitle", "Build Your Future")}
                  </span>
                </h1>

                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  {t(
                    "hero.description",
                    "Join thousands of students mastering cutting-edge technology through hands-on IT courses in embedded systems, IoT, and programming.",
                  )}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <Button
                  size="lg"
                  className="bg-white text-slate-900 hover:bg-gray-100 font-semibold px-6 md:px-8 py-4 md:py-6 text-base md:text-lg transition-all duration-300 hover:scale-105"
                  onClick={() => setShowInquiryForm(true)}
                >
                  <Code className="mr-2 w-4 md:w-5 h-4 md:h-5" />
                  {t("hero.startLearning", "Start Learning Today")}
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-600 text-slate-900 hover:bg-gray-100 hover:scale-105 px-6 md:px-8 py-4 md:py-6 text-base md:text-lg"
                  onClick={() => setShowVideo(true)}
                >
                  <Play className="mr-2 w-4 md:w-5 h-4 md:h-5" />
                  {t("hero.watchDemo", "Watch Demo")}
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="flex flex-wrap gap-8 pt-4">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span className="text-white font-semibold">4.9/5</span>
                  <span className="text-gray-400">{t("hero.satisfaction", "Satisfaction Rate")}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-blue-400" />
                  {featuredCourses.reduce((acc, course) => acc + course.students, 0)}+{" "}
                  <span className="text-gray-400">{t("hero.activeStudents", "Active Students")}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Trophy className="w-5 h-5 text-purple-400" />
                  <span className="text-white font-semibold">25+</span>
                  <span className="text-gray-400">{t("hero.expertCourses", "Expert Courses")}</span>
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
                      <div className="text-gray-400">// IoT Temperature Monitoring System</div>
                      <div>
                        <span className="text-purple-400">#include</span>{" "}
                        <span className="text-green-400">&lt;WiFi.h&gt;</span>
                      </div>
                      <div>
                        <span className="text-purple-400">#include</span>{" "}
                        <span className="text-green-400">&lt;DHT.h&gt;</span>
                      </div>
                      <div className="text-gray-400">// ...</div>
                      <div className="pt-2">
                        <span className="text-blue-400">void</span> <span className="text-yellow-400">setup</span>
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
                        <span className="text-gray-400">Ready to compile...</span>
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
                    <span className="text-slate-900 font-semibold text-sm block">{t("index.embeddedC", "Embedded C")}</span>
                    <p className="text-gray-400 text-xs">{t("index.lowLevel", "Low-level programming")}</p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-green-500/10 to-blue-500/10 border-green-500/20 backdrop-blur-sm hover-scale">
                  <CardContent className="p-4 text-center">
                    <Wifi className="w-8 h-8 text-green-400 mx-auto mb-2" />
                    <span className="text-slate-900 font-semibold text-sm block">{t("index.iotSystems", "IoT Systems")}</span>
                    <p className="text-gray-400 text-xs">{t("index.connectedDevices", "Connected devices")}</p>
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
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-blue-500/10 text-blue-400 border-blue-500/20 font-mono">
              <Code className="w-4 h-4 mr-2" />
              {t("courses.mostPopular", "Most Popular Courses")}
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
              {t("courses.featured", "Featured Courses")}
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              {t("courses.description", "Discover our most popular courses designed by industry experts")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {coursesLoading
              ? // Loading skeleton
                Array.from({ length: 3 }).map((_, idx) => (
                  <Card key={idx} className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                    <div className="relative overflow-hidden">
                      <div className="w-full h-48 bg-slate-700 animate-pulse"></div>
                    </div>
                    <CardContent className="p-6">
                      <div className="h-6 bg-slate-700 animate-pulse rounded mb-3"></div>
                      <div className="h-4 bg-slate-700 animate-pulse rounded mb-4"></div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="h-4 w-20 bg-slate-700 animate-pulse rounded"></div>
                        <div className="h-4 w-20 bg-slate-700 animate-pulse rounded"></div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="h-8 w-24 bg-slate-700 animate-pulse rounded"></div>
                        <div className="h-10 w-32 bg-slate-700 animate-pulse rounded"></div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              : featuredCourses.slice(0, 3).map((course) => (
                  <Card
                    key={course.id}
                    className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 group"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                        width="400"
                        height="192"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                      <Badge
                        className={`absolute top-3 right-3 ${
                          course.level === "Beginner"
                            ? "bg-green-500/20 text-green-400 border-green-500/30"
                            : course.level === "Intermediate"
                              ? "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                              : "bg-red-500/20 text-red-400 border-red-500/30"
                        }`}
                      >
                        {t(
                          `level.${course.level.toLowerCase() as "beginner" | "intermediate" | "advanced"}`,
                          course.level,
                        )}
                      </Badge>
                    </div>

                    <CardContent className="p-6">
                      <Link key={course.id} className="block" to={`/courses/${course.id}`}>
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                          {course.title}
                        </h3>
                      </Link>
                      <p className="text-gray-400 mb-4 line-clamp-2">{course.subtitle}</p>

                      <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
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
                          <span className="text-2xl font-bold text-white">€{course.price}</span>
                        </div>
                        <Button
                          className="bg-blue-600 hover:bg-blue-700 text-white"
                          onClick={() => handleEnrollClick(course.id)}
                        >
                          {t("courses.enrollNow", "Enroll Now")}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
          </div>

          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="border-slate-600 text-slate-900 hover:bg-gray-100 hover:scale-105"
              asChild
            >
              <Link to={"/courses"} className="flex items-center">
                {t("courses.viewAll", "View All Courses")}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Professional Pack Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-purple-500/10 text-purple-400 border-purple-500/20 font-mono">
              <Star className="w-4 h-4 mr-2" />
              {t("index.professionalPack", "Professional Pack")}
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
              {t("index.careerPaths", "Complete Career Paths")}
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              {t(
                "index.careerPathsDesc",
                "Comprehensive learning tracks designed for specific engineering roles. Master multiple technologies in focused career paths.",
              )}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packsLoading ? (
              <div className="col-span-3 text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
                <p className="text-gray-300">{t("common.loading") || "Loading packs..."}</p>
              </div>
            ) : (
              packs.map((pack, index) => (
                <ProfessionalPackCard key={pack.id} {...pack} index={index} onEnroll={handleEnrollClick} />
              ))
            )}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-6 bg-purple-500/10 text-purple-400 border-purple-500/20 font-mono">
                <CheckCircle className="w-4 h-4 mr-2" />
                {t("features.whyChoose", "Why Choose Us?")}
              </Badge>

              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
                {t("features.title", "Industry-Standard Learning Platform")}
              </h2>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                {t(
                  "features.description",
                  "Master embedded systems with our comprehensive, hands-on curriculum designed by industry professionals. From basic concepts to advanced real-world applications.",
                )}
              </p>

              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-lg flex items-center justify-center group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                      <feature.icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2 text-white group-hover:text-blue-400 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-6">
              <Card className="bg-slate-800/90 border-green-500/30 backdrop-blur-sm hover:bg-slate-800 hover:border-green-500/50 transition-all duration-300 shadow-lg hover:shadow-green-500/20">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center space-x-3 text-white">
                    <div className="w-12 h-12 bg-green-500/30 border border-green-500/50 rounded-lg flex items-center justify-center shadow-lg shadow-green-500/20">
                      <CheckCircle className="w-6 h-6 text-green-300" />
                    </div>
                    <span className="text-lg font-bold">{t("features.certification", "Industry Certification")}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-200 text-base leading-relaxed mb-4">
                    {t(
                      "features.certificationDesc",
                      "Get recognized certificates that employers value. All courses align with industry standards and best practices.",
                    )}
                  </p>
                  <div className="mt-4 flex items-center space-x-3 p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 bg-blue-500 rounded-full border-2 border-slate-700 shadow-md"></div>
                      <div className="w-8 h-8 bg-purple-500 rounded-full border-2 border-slate-700 shadow-md"></div>
                      <div className="w-8 h-8 bg-green-500 rounded-full border-2 border-slate-700 shadow-md"></div>
                    </div>
                    <span className="text-sm text-green-300 font-semibold">
                      50+ {t("index.certifiedThisMonth", "certified this month")}
                    </span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/90 border-blue-500/30 backdrop-blur-sm hover:bg-slate-800 hover:border-blue-500/50 transition-all duration-300 shadow-lg hover:shadow-blue-500/20">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center space-x-3 text-white">
                    <div className="w-12 h-12 bg-blue-500/30 border border-blue-500/50 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/20">
                      <Users className="w-6 h-6 text-blue-300" />
                    </div>
                    <span className="text-lg font-bold">{t("index.activeCommunity", "Active Community")}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-200 text-base leading-relaxed mb-4">
                    {t(
                      "index.communityDesc",
                      "Join a vibrant community of developers, mentors, and industry experts. Get help, share projects, and network.",
                    )}
                  </p>
                  <div className="mt-4 flex items-center justify-between p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
                    <span className="text-sm text-blue-300 font-semibold">{t("index.onlineNow", "Online now:")}</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-sm text-green-300 font-mono font-bold">
                        95 {t("index.members", "members")}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Junior Program Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <Badge className="mb-6 bg-yellow-500/10 text-yellow-400 border-yellow-500/20 font-mono">
                <Star className="w-4 h-4 mr-2" />
                {t("index.juniorProgram", "Junior Program")}
              </Badge>

              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
                {t("index.weekendSchool", "Weekend School for Juniors")}
              </h2>
              <h3 className="text-xl lg:text-2xl font-semibold mb-6 text-yellow-400">
                {t("index.buildRockets", "Build Rockets of the Future")}
              </h3>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                {t(
                  "index.juniorDescription",
                  "Designed for young innovators aged 12-18 years old. Our weekend program introduces teenagers to embedded systems, robotics, and space technology through hands-on projects and interactive learning experiences.",
                )}
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-lg flex items-center justify-center group-hover:from-yellow-500/30 group-hover:to-orange-500/30 transition-all duration-300">
                    <Code className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-white group-hover:text-yellow-400 transition-colors">
                      {t("index.interactiveLearning", "Interactive Learning")}
                    </h3>
                    <p className="text-gray-400">
                      {t(
                        "index.interactiveLearningDesc",
                        "Learn programming and electronics through games, robots, and real projects",
                      )}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-lg flex items-center justify-center group-hover:from-yellow-500/30 group-hover:to-orange-500/30 transition-all duration-300">
                    <Cpu className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-white group-hover:text-yellow-400 transition-colors">
                      {t("index.futureSkills", "Future Skills")}
                    </h3>
                    <p className="text-gray-400">
                      {t(
                        "index.futureSkillsDesc",
                        "Develop problem-solving, creativity, and technical skills for tomorrow's careers",
                      )}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-lg flex items-center justify-center group-hover:from-yellow-500/30 group-hover:to-orange-500/30 transition-all duration-300">
                    <Trophy className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-white group-hover:text-yellow-400 transition-colors">
                      {t("index.weekendSchedule", "Weekend Schedule")}
                    </h3>
                    <p className="text-gray-400">
                      {t(
                        "index.weekendScheduleDesc",
                        "Flexible weekend classes that don't interfere with school commitments",
                      )}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Suspense fallback={null}>
                  <JuniorProgramForm>
                    <Button size="lg" className="bg-yellow-700 hover:bg-yellow-800 text-white font-semibold px-8 py-6">
                      <Zap className="mr-2 w-5 h-5" />
                      {t("index.joinJuniorProgram", "Join Junior Program")}
                    </Button>
                  </JuniorProgramForm>
                </Suspense>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-600 text-slate-900 hover:bg-slate-800 hover:bg-gray-100 px-8 py-6 hover:scale-105"
                  asChild
                >
                  <Link to={"/junior"} className="flex items-center">
                    {t("index.learnMoreJunior", "Learn More About Junior Program")}
                  </Link>
                </Button>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative">
                <img
                  src={juniorChessRobot}
                  alt="Junior student playing chess with a robot in a modern tech classroom"
                  className="rounded-lg shadow-2xl shadow-yellow-500/20 border border-yellow-500/20 hover:shadow-yellow-500/30 transition-all duration-300"
                  width="600"
                  height="400"
                  loading="lazy"
                />
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                  <Star className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="cta-grid" width="8" height="8" patternUnits="userSpaceOnUse">
                <path
                  d="M 8 0 L 0 0 0 8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.2"
                  className="text-blue-400"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#cta-grid)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <Badge className="mb-6 bg-green-500/10 text-green-400 border-green-500/20 font-mono">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
            {t("index.startJourney", "Start Your Journey")}
          </Badge>

          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
            {t("index.readyToBuild", "Ready to Build the Future?")}
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            {t(
              "index.ctaDescription",
              "Join thousands of developers mastering embedded systems. Start with our free course preview and see why professionals choose Embedded School.",
            )}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => setShowInquiryForm(true)}
              className="bg-white text-slate-900 hover:bg-gray-100 font-semibold px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
            >
              <Play className="mr-2 w-5 h-5" />
              Start Free Preview
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-slate-600 text-slate-900 hover:bg-gray-100 hover:border-slate-500 px-8 py-6 text-lg hover:scale-105"
              asChild
            >
              <a href="https://t.me/embeddedschool" target="_blank" rel="noopener noreferrer">
                <Users className="mr-2 w-5 h-5" />
                Join Community
              </a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 grid grid-cols-3 gap-8 max-w-lg mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">250+</div>
              <div className="text-sm text-gray-400">Active Students</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">4.9★</div>
              <div className="text-sm text-gray-400">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">98%</div>
              <div className="text-sm text-gray-400">Completion Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Video Demo */}
      {showVideo && (
        <Suspense fallback={null}>
          <VideoDemo
            open={showVideo}
            onOpenChange={setShowVideo}
            videoUrl="https://www.youtube.com/embed/9J-0EGmsc1E?autoplay=1&mute=1&rel=0&modestbranding=1"
          />
        </Suspense>
      )}

      {/* Course Inquiry Form */}
      {showInquiryForm && (
        <Suspense fallback={null}>
          <CourseInquiryForm
            open={showInquiryForm}
            selectedCourseId={selectedCourse}
            onOpenChange={setShowInquiryForm}
          />
        </Suspense>
      )}
    </div>
  );
};

export default Index;
