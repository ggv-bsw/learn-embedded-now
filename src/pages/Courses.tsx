import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/ui/navigation";
import {
  Search,
  Filter,
  SlidersHorizontal,
  Code,
  BookOpen,
  Users,
  Star,
  Cpu,
} from "lucide-react";
import AnimatedParticles from "@/components/animated-particles";
import { featuredCourses } from "@/testData/featuredCourses";
import CourseInquiryForm from "@/components/CourseInquiryForm";
import { Link, useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Courses = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All");

  const [showInquiryForm, setShowInquiryForm] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);

  const handleEnrollClick = (course: string) => {
    setSelectedCourse(course);
    setShowInquiryForm(true);
  };

  const categories = [
    "All",
    "Python",
    "C++",
    "Hardware",
    "Testing",
    "Embedded Systems",
    "IoT",
    "Automotive",
  ];

  const levels = ["All", "Beginner", "Intermediate", "Advanced"];

  const filteredCourses = featuredCourses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.subtitle.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      course.category === selectedCategory ||
      (selectedCategory === "Embedded Systems" &&
        ["C++", "Hardware"].includes(course.category)) ||
      (selectedCategory === "IoT" &&
        ["Python", "Hardware"].includes(course.category)) ||
      (selectedCategory === "Automotive" && course.category === "Testing");

    const matchesLevel =
      selectedLevel === "All" || course.level === selectedLevel;

    return matchesSearch && matchesCategory && matchesLevel;
  });

  const getCategoryColor = (category: string) => {
    const colors = {
      Python: "bg-green-500/20 text-green-400 border-green-500/30",
      "C++": "bg-blue-500/20 text-blue-400 border-blue-500/30",
      Hardware: "bg-orange-500/20 text-orange-400 border-orange-500/30",
      Testing: "bg-purple-500/20 text-purple-400 border-purple-500/30",
      "Embedded Systems": "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
      IoT: "bg-pink-500/20 text-pink-400 border-pink-500/30",
      Automotive: "bg-red-500/20 text-red-400 border-red-500/30",
    };
    return (
      colors[category as keyof typeof colors] ||
      "bg-gray-500/20 text-gray-400 border-gray-500/30"
    );
  };

  return (
    <div className="min-h-screen bg-slate-900 font-inter text-white">
      <Navigation />

      {/* Hero Header */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
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
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-blue-500/10 text-blue-400 border-blue-500/20 font-mono">
              <BookOpen className="w-4 h-4 mr-2" />
              {t('coursesPage.allAvailable')}
            </Badge>

            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              {t('coursesPage.masterEmbedded')}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400">
                {t('coursesPage.systemsIot')}
              </span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
              {t('coursesPage.discover')}
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-8 mb-12">
              <div className="flex items-center space-x-2">
                <BookOpen className="w-5 h-5 text-blue-400" />
                <span className="text-white font-semibold">
                  {featuredCourses.length}
                </span>
                <span className="text-gray-400">{t('coursesPage.coursesLabel')}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-green-400" />
                <span className="text-white font-semibold">
                  {featuredCourses.reduce(
                    (acc, course) => acc + course.students,
                    0
                  )}
                  +
                </span>
                <span className="text-gray-400">{t('coursesPage.studentsLabel')}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-yellow-400" />
                <span className="text-white font-semibold">4.8</span>
                <span className="text-gray-400">{t('coursesPage.avgRating')}</span>
              </div>
            </div>

            {/* Search and Filters */}
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm shadow-2xl max-w-3xl mx-auto">
              <CardContent className="pt-6">
                <div className="relative mb-6">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    placeholder={t('coursesPage.searchPlaceholder')}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 bg-slate-900/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-blue-500"
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="flex items-center space-x-2">
                      <Filter className="w-4 h-4 text-gray-400" />
                      <span className="text-sm font-medium text-gray-300">
                        {t('coursesPage.category')}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {categories.map((category) => (
                        <Badge
                          key={category}
                          variant={
                            selectedCategory === category
                              ? "default"
                              : "outline"
                          }
                          className={`cursor-pointer transition-all duration-200 ${
                            selectedCategory === category
                              ? "bg-blue-600 hover:bg-blue-700 text-white border-blue-600"
                              : `${getCategoryColor(category)} hover:opacity-80`
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
                      <span className="text-sm font-medium text-gray-300">
                        {t('coursesPage.level')}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {levels.map((level) => (
                        <Badge
                          key={level}
                          variant={
                            selectedLevel === level ? "default" : "outline"
                          }
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
                {filteredCourses.length} {filteredCourses.length === 1 ? t('coursesPage.courseFound') : t('coursesPage.coursesFound')}
              </h2>
              <p className="text-gray-400">
                {selectedCategory !== "All" && `${selectedCategory} • `}
                {selectedLevel !== "All" && `${selectedLevel} Level • `}
                {t('coursesPage.professionalEducation')}
              </p>
            </div>

            {(selectedCategory !== "All" ||
              selectedLevel !== "All" ||
              searchQuery) && (
              <Button
                variant="outline"
                className="border-slate-600 text-slate-900 hover:border-slate-500"
                onClick={() => {
                  setSelectedCategory("All");
                  setSelectedLevel("All");
                  setSearchQuery("");
                }}
              >
                {t('coursesPage.clearFilters')}
              </Button>
            )}
          </div>

          {filteredCourses.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course) => (
                <Card
                  key={course.id}
                  className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
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
                      {course.level}
                    </Badge>
                    <Badge
                      className={`absolute top-3 left-3 ${getCategoryColor(
                        course.category
                      )}`}
                    >
                      {course.category}
                    </Badge>
                  </div>

                  <CardContent className="p-6">
                    <Link to={`/courses/${course.id}`} className="block">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                        {course.title}
                      </h3>
                    </Link>
                    <p className="text-gray-400 mb-2 text-sm">
                      {course.subtitle}
                    </p>
                    <p className="text-gray-400 mb-4 line-clamp-2">
                      {course.description}
                    </p>

                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-4">
                        <span className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {course.students}
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
                        <span className="text-2xl font-bold text-white">
                          ${course.price}
                        </span>
                        {course.originalPrice && (
                          <span className="text-gray-400 line-through text-sm ml-2">
                            ${course.originalPrice}
                          </span>
                        )}
                      </div>
                      <Button
                        className="bg-blue-600 hover:bg-blue-700 text-white"
                        onClick={() => handleEnrollClick(course.id)}
                      >
                        {t('coursesPage.enrollNow')}
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
                  <h3 className="text-lg font-semibold mb-2 text-white">
                    {t('coursesPage.noCoursesFound')}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {t('coursesPage.adjustSearch')}
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
                    {t('coursesPage.viewAllCourses')}
                  </Button>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </section>

      {/* Professional Pack Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-purple-500/10 text-purple-400 border-purple-500/20 font-mono">
              <Star className="w-4 h-4 mr-2" />
              {t('coursesPage.professionalPack')}
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
              {t('coursesPage.completeCareerPaths')}
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              {t('coursesPage.careerPathsDescription')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Embedded Systems Professional */}
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 group">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-blue-500/20 border border-green-500/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Cpu className="w-8 h-8 text-green-400" />
                </div>
                <CardTitle className="text-xl font-bold text-white text-center mb-2 group-hover:text-green-400 transition-colors">
                  {t('coursesPage.embeddedProfessional')}
                </CardTitle>
                <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30 mx-auto">
                  {t('coursesPage.advanced')}
                </Badge>
              </CardHeader>

              <CardContent className="pt-0">
                <p className="text-gray-400 mb-6 text-center leading-relaxed">
                  {t('coursesPage.embeddedProfDesc')}
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">{t('coursesPage.duration')}</span>
                    <span className="text-white font-semibold">30 {t('coursesPage.weeks')}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">{t('coursesPage.levelLabel')}</span>
                    <span className="text-orange-400 font-semibold">
                      {t('coursesPage.advanced')}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">{t('coursesPage.coursesIncluded')}</span>
                    <span className="text-white font-semibold">3 {t('coursesPage.coursesLabel')}</span>
                  </div>
                </div>

                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-white mb-1">$699</div>
                  <div className="text-gray-400 text-sm line-through">$927</div>
                  <div className="text-green-400 text-sm font-semibold">
                    {t('coursesPage.save')} 25%
                  </div>
                </div>

                <Button
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold"
                  onClick={() =>
                    handleEnrollClick("career-path-embedded-professional")
                  }
                >
                  {t('coursesPage.startCareerPath')}
                </Button>
              </CardContent>
            </Card>

            {/* Software Developer Track */}
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 group">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Code className="w-8 h-8 text-blue-400" />
                </div>
                <CardTitle className="text-xl font-bold text-white text-center mb-2 group-hover:text-blue-400 transition-colors">
                  {t('coursesPage.softwareDeveloper')}
                </CardTitle>
                <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30 mx-auto">
                  {t('coursesPage.beginnerIntermediate')}
                </Badge>
              </CardHeader>

              <CardContent className="pt-0">
                <p className="text-gray-400 mb-6 text-center leading-relaxed">
                  {t('coursesPage.softwareDevDesc')}
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">{t('coursesPage.duration')}</span>
                    <span className="text-white font-semibold">22 {t('coursesPage.weeks')}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">{t('coursesPage.levelLabel')}</span>
                    <span className="text-yellow-400 font-semibold">
                      {t('coursesPage.beginnerIntermediate')}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">{t('coursesPage.coursesIncluded')}</span>
                    <span className="text-white font-semibold">2 {t('coursesPage.coursesLabel')}</span>
                  </div>
                </div>

                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-white mb-1">$379</div>
                  <div className="text-gray-400 text-sm line-through">$448</div>
                  <div className="text-green-400 text-sm font-semibold">
                    {t('coursesPage.save')} 15%
                  </div>
                </div>

                <Button
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold"
                  onClick={() =>
                    handleEnrollClick("career-path-software-developer")
                  }
                >
                  {t('coursesPage.startCareerPath')}
                </Button>
              </CardContent>
            </Card>

            {/* Complete Engineering Bundle */}
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 group">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-purple-400" />
                </div>
                <CardTitle className="text-xl font-bold text-white text-center mb-2 group-hover:text-purple-400 transition-colors">
                  {t('coursesPage.completeBundle')}
                </CardTitle>
                <Badge className="bg-green-500/20 text-green-400 border-green-500/30 mx-auto">
                  {t('coursesPage.allLevels')}
                </Badge>
              </CardHeader>

              <CardContent className="pt-0">
                <p className="text-gray-400 mb-6 text-center leading-relaxed">
                  {t('coursesPage.completeBundleDesc')}
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">{t('coursesPage.duration')}</span>
                    <span className="text-white font-semibold">40 {t('coursesPage.weeks')}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">{t('coursesPage.levelLabel')}</span>
                    <span className="text-green-400 font-semibold">
                      {t('coursesPage.allLevels')}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">{t('coursesPage.coursesIncluded')}</span>
                    <span className="text-white font-semibold">4 {t('coursesPage.coursesLabel')}</span>
                  </div>
                </div>

                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-white mb-1">$799</div>
                  <div className="text-gray-400 text-sm line-through">
                    $1,096
                  </div>
                  <div className="text-green-400 text-sm font-semibold">
                    {t('coursesPage.save')} 27%
                  </div>
                </div>

                <Button
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold"
                  onClick={() =>
                    handleEnrollClick("career-path-complete-bundle")
                  }
                >
                  {t('coursesPage.startCareerPath')}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <Card className="bg-slate-800/90 border-blue-500/30 backdrop-blur-sm max-w-4xl mx-auto shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 transition-all duration-300">
            <CardContent className="pt-12 pb-12 text-center">
              <Badge className="mb-6 bg-purple-500/30 text-purple-300 border-purple-500/50 font-mono shadow-lg">
                <Code className="w-4 h-4 mr-2" />
                {t('coursesPage.needSpecific')}
              </Badge>

              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
                {t('coursesPage.cantFind')}
              </h2>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
                {t('coursesPage.cantFindDesc')}
              </p>

              {/* Feature highlights */}
              <div className="grid md:grid-cols-3 gap-6 mb-8 max-w-3xl mx-auto">
                <div className="bg-slate-700/50 rounded-lg p-4 border border-slate-600">
                  <h3 className="font-semibold text-white mb-2">
                    {t('coursesPage.customCurriculum')}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {t('coursesPage.customCurriculumDesc')}
                  </p>
                </div>
                <div className="bg-slate-700/50 rounded-lg p-4 border border-slate-600">
                  <h3 className="font-semibold text-white mb-2">
                    {t('coursesPage.expertInstructors')}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {t('coursesPage.expertInstructorsDesc')}
                  </p>
                </div>
                <div className="bg-slate-700/50 rounded-lg p-4 border border-slate-600">
                  <h3 className="font-semibold text-white mb-2">
                    {t('coursesPage.earlyAccess')}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {t('coursesPage.earlyAccessDesc')}
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-6 shadow-lg"
                  onClick={() => navigate("/contact")}
                >
                  {t('coursesPage.contactUs')}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-500 text-slate-900  px-8 py-6 hover:scale-105"
                >
                  <a
                    target="_blank"
                    href="https://t.me/embeddedschool"
                    rel="noopener noreferrer"
                  >
                    {t('coursesPage.subscribeUpdates')}
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <CourseInquiryForm
        open={showInquiryForm}
        selectedCourseId={selectedCourse}
        onOpenChange={setShowInquiryForm}
      />
    </div>
  );
};

export default Courses;
