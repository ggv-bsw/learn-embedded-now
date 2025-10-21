import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/footer";
import ScrollReveal from "@/components/scroll-reveal";
import {
  BookOpen,
  Code,
  FileText,
  GraduationCap,
  HelpCircle,
  Layers,
  Search,
  Zap,
  ChevronRight,
  ExternalLink,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { langPath } from "@/hooks/useAutoLanguage";

const Documentation = () => {
  const { t, language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(
    t("docs.category.all")
  );

  const categories = [
    t("docs.category.all"),
    t("docs.category.gettingStarted"),
    t("docs.category.courseGuides"),
    t("docs.category.technicalRef"),
    t("docs.category.toolsSetup"),
    t("docs.category.faqs"),
  ];

  const docSections = [
    {
      id: "getting-started",
      category: t("docs.category.gettingStarted"),
      title: t("docs.section.gettingStarted.title"),
      description: t("docs.section.gettingStarted.desc"),
      icon: GraduationCap,
      articles: [
        {
          title: t("docs.section.gettingStarted.enroll"),
          link: "/courses",
          duration: `5 ${t("docs.duration.minRead")}`,
        },
        {
          title: t("docs.section.gettingStarted.overview"),
          link: "/about",
          duration: `8 ${t("docs.duration.minRead")}`,
        },
        {
          title: t("docs.section.gettingStarted.payment"),
          link: "/courses",
          duration: `4 ${t("docs.duration.minRead")}`,
        },
        {
          title: t("docs.section.gettingStarted.certificate"),
          link: "/courses",
          duration: `6 ${t("docs.duration.minRead")}`,
        },
      ],
    },
    {
      id: "course-guides",
      category: t("docs.category.courseGuides"),
      title: t("docs.section.courseGuides.title"),
      description: t("docs.section.courseGuides.desc"),
      icon: BookOpen,
      articles: [
        {
          title: t("docs.section.courseGuides.python"),
          link: "/courses/python-junior-beginner",
          duration: `7 ${t("docs.duration.minRead")}`,
        },
        {
          title: t("docs.section.courseGuides.cpp"),
          link: "/courses/cpp-bsw-beginner-to-advanced",
          duration: `10 ${t("docs.duration.minRead")}`,
        },
        {
          title: t("docs.section.courseGuides.pcb"),
          link: "/courses/pcb-design-fundamentals",
          duration: `12 ${t("docs.duration.minRead")}`,
        },
        {
          title: t("docs.section.courseGuides.testing"),
          link: "/courses/software-testing-automotive-qa",
          duration: `9 ${t("docs.duration.minRead")}`,
        },
      ],
    },
    {
      id: "technical-reference",
      category: t("docs.category.technicalRef"),
      title: t("docs.section.technicalRef.title"),
      description: t("docs.section.technicalRef.desc"),
      icon: Code,
      articles: [
        {
          title: t("docs.section.technicalRef.arduino"),
          link: "/hardware",
          duration: `15 ${t("docs.duration.minRead")}`,
        },
        {
          title: t("docs.section.technicalRef.embeddedC"),
          link: "/blog",
          duration: `12 ${t("docs.duration.minRead")}`,
        },
        {
          title: t("docs.section.technicalRef.autosar"),
          link: "/courses/software-testing-automotive-qa",
          duration: `20 ${t("docs.duration.minRead")}`,
        },
        {
          title: t("docs.section.technicalRef.cmake"),
          link: "/courses/cpp-bsw-beginner-to-advanced",
          duration: `18 ${t("docs.duration.minRead")}`,
        },
      ],
    },
    {
      id: "tools-setup",
      category: t("docs.category.toolsSetup"),
      title: t("docs.section.toolsSetup.title"),
      description: t("docs.section.toolsSetup.desc"),
      icon: Layers,
      articles: [
        {
          title: t("docs.section.toolsSetup.vscode"),
          link: "/blog",
          duration: `10 ${t("docs.duration.minRead")}`,
        },
        {
          title: t("docs.section.toolsSetup.git"),
          link: "/courses/python-junior-beginner",
          duration: `14 ${t("docs.duration.minRead")}`,
        },
        {
          title: t("docs.section.toolsSetup.virtualEnv"),
          link: "/courses/python-junior-beginner",
          duration: `8 ${t("docs.duration.minRead")}`,
        },
        {
          title: t("docs.section.toolsSetup.debugging"),
          link: "/hardware",
          duration: `16 ${t("docs.duration.minRead")}`,
        },
      ],
    },
    {
      id: "faqs",
      category: t("docs.category.faqs"),
      title: t("docs.section.faqs.title"),
      description: t("docs.section.faqs.desc"),
      icon: HelpCircle,
      articles: [
        {
          title: t("docs.section.faqs.access"),
          link: "/courses",
          duration: `3 ${t("docs.duration.minRead")}`,
        },
        {
          title: t("docs.section.faqs.refund"),
          link: "/contact",
          duration: `4 ${t("docs.duration.minRead")}`,
        },
        {
          title: t("docs.section.faqs.support"),
          link: "/contact",
          duration: `5 ${t("docs.duration.minRead")}`,
        },
        {
          title: t("docs.section.faqs.career"),
          link: "/trainers",
          duration: `7 ${t("docs.duration.minRead")}`,
        },
      ],
    },
  ];

  const quickLinks = [
    {
      title: t("docs.quickLinks.community"),
      icon: ExternalLink,
      link: "https://t.me/embeddedschool",
      description: t("docs.quickLinks.communityDesc"),
      external: true,
    },
    {
      title: t("docs.quickLinks.resources"),
      icon: FileText,
      link: "/hardware",
      description: t("docs.quickLinks.resourcesDesc"),
    },
  ];

  const filteredSections = docSections.filter((section) => {
    const matchesCategory =
      selectedCategory === t("docs.category.all") ||
      section.category === selectedCategory;
    const matchesSearch =
      section.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      section.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      section.articles.some((article) =>
        article.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-900 font-inter text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              <pattern
                id="docs-grid"
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
            <rect width="100%" height="100%" fill="url(#docs-grid)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 bg-blue-500/10 text-blue-400 border-blue-500/20 font-mono">
                <FileText className="w-4 h-4 mr-2" />
                {t("docs.badge")}
              </Badge>

              <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white">
                {t("docs.hero.title")}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400">
                  {t("docs.hero.titleHighlight")}
                </span>
              </h1>

              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                {t("docs.hero.description")}
              </p>

              {/* Search Bar */}
              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm max-w-2xl mx-auto">
                <CardContent className="pt-6">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      placeholder={t("docs.search.placeholder")}
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 bg-slate-900/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-blue-500"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 bg-slate-800">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {quickLinks.map((link, index) => (
                <Card
                  key={index}
                  className="bg-slate-900/50 border-slate-700 hover:bg-slate-900/70 transition-all duration-300 hover:scale-105 cursor-pointer group"
                >
                  <CardContent className="p-6">
                    {link.external ? (
                      <a
                        href={langPath(link.link, language)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <div className="flex items-start space-x-3">
                          <div className="w-12 h-12 bg-blue-500/20 border border-blue-500/30 rounded-lg flex items-center justify-center group-hover:bg-blue-500/30 transition-colors flex-shrink-0">
                            <link.icon className="w-6 h-6 text-blue-400" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-white mb-1 group-hover:text-blue-400 transition-colors">
                              {link.title}
                            </h3>
                            <p className="text-sm text-gray-400">
                              {link.description}
                            </p>
                          </div>
                        </div>
                      </a>
                    ) : (
                      <Link
                        to={langPath(link.link, language)}
                        className="block"
                      >
                        <div className="flex items-start space-x-3">
                          <div className="w-12 h-12 bg-blue-500/20 border border-blue-500/30 rounded-lg flex items-center justify-center group-hover:bg-blue-500/30 transition-colors flex-shrink-0">
                            <link.icon className="w-6 h-6 text-blue-400" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-white mb-1 group-hover:text-blue-400 transition-colors">
                              {link.title}
                            </h3>
                            <p className="text-sm text-gray-400">
                              {link.description}
                            </p>
                          </div>
                        </div>
                      </Link>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-slate-900 border-b border-slate-800">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={
                    selectedCategory === category ? "default" : "outline"
                  }
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
          </ScrollReveal>
        </div>
      </section>

      {/* Documentation Sections */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredSections.map((section, index) => (
              <ScrollReveal key={section.id} delay={index * 100}>
                <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 h-full">
                  <CardHeader>
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-lg flex items-center justify-center flex-shrink-0">
                        <section.icon className="w-7 h-7 text-blue-400" />
                      </div>
                      <div className="flex-1">
                        <Badge className="mb-2 bg-purple-500/20 text-purple-400 border-purple-500/30">
                          {section.category}
                        </Badge>
                        <CardTitle className="text-xl text-white mb-2">
                          {section.title}
                        </CardTitle>
                        <p className="text-gray-400 text-sm">
                          {section.description}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {section.articles.map((article, idx) => (
                        <Link
                          key={idx}
                          to={article.link}
                          className="flex items-center justify-between p-3 rounded-lg bg-slate-900/50 hover:bg-slate-900 transition-colors group"
                        >
                          <div className="flex items-center space-x-3">
                            <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-blue-400 transition-colors" />
                            <div>
                              <p className="text-white font-medium group-hover:text-blue-400 transition-colors">
                                {article.title}
                              </p>
                              <p className="text-xs text-gray-500">
                                {article.duration}
                              </p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>

          {filteredSections.length === 0 && (
            <ScrollReveal>
              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm max-w-md mx-auto">
                <CardContent className="pt-8 pb-8 text-center">
                  <div className="w-16 h-16 bg-slate-700/50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white">
                    {t("docs.noResults.title")}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {t("docs.noResults.message")}
                  </p>
                  <Button
                    variant="outline"
                    className="border-slate-600 text-gray-300 hover:bg-slate-700 hover:border-slate-500"
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedCategory(t("docs.category.all"));
                    }}
                  >
                    {t("docs.noResults.clear")}
                  </Button>
                </CardContent>
              </Card>
            </ScrollReveal>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <Card className="bg-slate-800/90 border-blue-500/30 backdrop-blur-sm max-w-4xl mx-auto">
              <CardContent className="pt-12 pb-12 text-center">
                <Zap className="w-16 h-16 text-blue-400 mx-auto mb-6" />
                <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
                  {t("docs.cta.title")}
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  {t("docs.cta.description")}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to={langPath("/contact", language)}>
                    <Button
                      size="lg"
                      className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-6"
                    >
                      {t("docs.cta.contact")}
                    </Button>
                  </Link>
                  <a
                    href="https://t.me/embeddedschool"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-blue-500/30 text-blue-400 hover:bg-blue-500/10 font-semibold px-8 py-6"
                    >
                      {t("docs.cta.community")}
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Documentation;
