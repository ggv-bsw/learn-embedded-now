import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/ui/navigation";
import { JuniorProgramForm } from "@/components/JuniorProgramForm";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Zap,
  Users,
  Award,
  Calendar,
  MapPin,
  CheckCircle,
  Cpu,
  Rocket,
  GamepadIcon,
  Smartphone,
  Brain,
  Microscope,
  BookOpen,
  GraduationCap,
  Trophy,
  Phone,
} from "lucide-react";
import Footer from "@/components/footer";
import AnimatedParticles from "@/components/animated-particles";

const JuniorProgram = () => {
  const { t } = useLanguage();

  const programHighlights = [
    {
      icon: Rocket,
      title: "Space Technology",
      description:
        "Learn about satellites, rockets, and space exploration systems",
    },
    {
      icon: Brain,
      title: "AI & Robotics",
      description: "Build and program intelligent robots with machine learning",
    },
    {
      icon: GamepadIcon,
      title: "Game Development",
      description: "Create your own video games and interactive experiences",
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Develop apps that control robots and IoT devices",
    },
  ];

  const ageGroups = [
    {
      range: "12-14 years",
      level: "Explorer",
      focus: "Foundational programming & electronics",
      projects: ["Basic robots", "Simple games", "LED circuits"],
      color: "from-green-500/20 to-blue-500/20 border-green-500/30",
    },
    {
      range: "15-16 years",
      level: "Innovator",
      focus: "Advanced systems & IoT",
      projects: ["Smart devices", "Mobile apps", "Sensor networks"],
      color: "from-yellow-500/20 to-orange-500/20 border-yellow-500/30",
    },
    {
      range: "17-18 years",
      level: "Creator",
      focus: "Real-world projects & specializations",
      projects: ["AI systems", "Advanced robotics", "Industry projects"],
      color: "from-red-500/20 to-purple-500/20 border-red-500/30",
    },
  ];

  const curriculumModules = [
    {
      term: "Term 1",
      title: "Digital Foundations",
      duration: "12 weeks",
      topics: [
        "Introduction to Programming (Scratch/Python)",
        "Basic Electronics & Circuits",
        "Computer Science Concepts",
        "Problem Solving Skills",
      ],
      project: "Interactive LED Board Game",
    },
    {
      term: "Term 2",
      title: "Robotics & Automation",
      duration: "12 weeks",
      topics: [
        "Robot Mechanics & Design",
        "Sensor Integration",
        "Automation Systems",
        "Team Collaboration",
      ],
      project: "Autonomous Line-Following Robot",
    },
    {
      term: "Term 3",
      title: "Smart Systems & IoT",
      duration: "12 weeks",
      topics: [
        "Internet of Things",
        "Mobile App Development",
        "Cloud Connectivity",
        "Data Analysis",
      ],
      project: "Smart Home Control System",
    },
    {
      term: "Term 4",
      title: "Advanced Specializations",
      duration: "12 weeks",
      topics: [
        "AI & Machine Learning",
        "Advanced Robotics",
        "Space Technology",
        "Career Preparation",
      ],
      project: "Capstone Innovation Project",
    },
  ];

  const successStories = [
    {
      name: "Alex Chen",
      age: 16,
      achievement: "Won National Robotics Competition",
      story:
        "Started with basic programming and built an award-winning environmental monitoring robot",
      project: "AI-Powered Pollution Detection System",
    },
    {
      name: "Sophia Rodriguez",
      age: 15,
      achievement: "Published App on Play Store",
      story:
        "Created a mental health app that helps teens track mood and stress levels",
      project: "Mindful Teens Mobile Application",
    },
    {
      name: "Maxim Ivanov",
      age: 17,
      achievement: "Internship at Tech Company",
      story:
        "Developed smart factory simulation that impressed local manufacturing company",
      project: "Industrial Automation Simulator",
    },
  ];

  const facilities = [
    {
      name: "Advanced Robotics Lab",
      description:
        "State-of-the-art robots and equipment for hands-on learning",
      icon: Cpu,
    },
    {
      name: "Electronics Workshop",
      description:
        "Complete electronics lab with oscilloscopes, soldering stations, and components",
      icon: Microscope,
    },
    {
      name: "Innovation Studio",
      description:
        "Creative space with 3D printers, laser cutters, and prototyping tools",
      icon: Rocket,
    },
    {
      name: "Collaboration Zones",
      description: "Modern spaces for team projects and peer learning",
      icon: Users,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900 font-inter text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-yellow-500/10 via-slate-900 to-orange-500/10 overflow-hidden">
        <AnimatedParticles />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-yellow-500/20 text-yellow-400 border-yellow-500/30 font-mono text-lg py-2 px-4">
              <Rocket className="w-5 h-5 mr-2" />
              {t('junior.weekend', 'Weekend School for Juniors')}
            </Badge>

            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white">
              {t('junior.title', 'Build')}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400">
                {t('junior.titleHighlight', 'Rockets of the Future')}
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              {t('junior.subtitle', 'For Young Innovators Aged 12-18 • Weekend Classes • Hands-On Tech Projects • Future Career Skills')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <JuniorProgramForm>
                <Button
                  size="lg"
                  className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
                >
                  <Zap className="mr-2 w-6 h-6" />
                  {t('junior.enrollNow', 'Enroll Now - Limited Spots!')}
                </Button>
              </JuniorProgramForm>

              <Button
                variant="outline"
                size="lg"
                className="border-yellow-500 text-yellow-400 px-8 py-6 text-lg hover:scale-105"
                onClick={() =>
                  document
                    .getElementById("curriculum")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                <BookOpen className="mr-2 w-6 h-6" />
                {t('junior.viewCurriculum', 'View Curriculum')}
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">500+</div>
                <div className="text-gray-400 text-sm">{t('junior.studentsTrained', 'Students Trained')}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">96%</div>
                <div className="text-gray-400 text-sm">{t('junior.completionRate', 'Completion Rate')}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">25+</div>
                <div className="text-gray-400 text-sm">{t('junior.realProjects', 'Real Projects')}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">4.9★</div>
                <div className="text-gray-400 text-sm">{t('junior.parentRating', 'Parent Rating')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
              {t('junior.whyChoose', 'Why Choose Our Junior Program?')}
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              {t('junior.whyDescription', 'We transform young minds into tech innovators through project-based learning, industry mentorship, and cutting-edge technology exposure.')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {programHighlights.map((highlight, index) => (
              <Card
                key={index}
                className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 group"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <highlight.icon className="w-8 h-8 text-yellow-400" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-white group-hover:text-yellow-400 transition-colors">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Age Groups */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-8 text-white">
              {t('junior.ageGroups', 'Programs by Age Group')}
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {ageGroups.map((group, index) => (
                <Card
                  key={index}
                  className={`bg-gradient-to-br ${group.color} backdrop-blur-sm border transition-all duration-300 hover:scale-105`}
                >
                  <CardContent className="p-6 text-center">
                    <div className="text-lg font-bold text-slate-900 mb-2">
                      {group.range}
                    </div>
                    <Badge className="bg-white text-slate-900 border-white/30 mb-4">
                      {group.level}
                    </Badge>
                    <p className="text-gray-400 text-sm mb-4">{group.focus}</p>
                    <div className="space-y-2">
                      {group.projects.map((project, idx) => (
                        <div
                          key={idx}
                          className="flex items-center text-sm text-slate-900"
                        >
                          <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                          {project}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section id="curriculum" className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-blue-500/20 text-blue-400 border-blue-500/30 font-mono">
              <BookOpen className="w-4 h-4 mr-2" />
              Learning Path
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
              4-Term Comprehensive Curriculum
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Progressive learning journey from fundamentals to advanced
              specializations
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {curriculumModules.map((module, index) => (
              <Card
                key={index}
                className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30 mb-2">
                        {module.term}
                      </Badge>
                      <h3 className="text-xl font-bold text-white">
                        {module.title}
                      </h3>
                      <p className="text-gray-400">{module.duration}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-400">Final Project</div>
                      <div className="text-yellow-400 font-semibold">
                        {module.project}
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-white mb-2">
                        Key Topics:
                      </h4>
                      <ul className="space-y-1">
                        {module.topics.map((topic, idx) => (
                          <li
                            key={idx}
                            className="flex items-center text-sm text-gray-400"
                          >
                            <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-slate-900/50 rounded-lg p-4">
                      <h4 className="font-semibold text-white mb-2">
                        Skills Gained:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {module.topics.slice(0, 3).map((topic, idx) => (
                          <Badge
                            key={idx}
                            variant="outline"
                            className="text-xs bg-slate-800 text-gray-300"
                          >
                            {topic.split(" ")[0]}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule & Pricing */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Schedule */}
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <Calendar className="w-6 h-6 mr-2 text-yellow-400" />
                  Program Schedule
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-slate-900/50 rounded-lg p-4">
                  <h4 className="font-semibold text-yellow-400 mb-3">
                    Weekend Sessions
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Saturdays</span>
                      <span className="text-white font-semibold">
                        10:00 AM - 2:00 PM
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Sundays</span>
                      <span className="text-white font-semibold">
                        10:00 AM - 2:00 PM
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-900/50 rounded-lg p-4">
                  <h4 className="font-semibold text-yellow-400 mb-3">
                    Program Duration
                  </h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Each Term:</span>
                      <span className="text-white">12 weeks</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Total Program:</span>
                      <span className="text-white">48 weeks (1 year)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Start Dates:</span>
                      <span className="text-white">Monthly intakes</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-lg p-4">
                  <h4 className="font-semibold text-yellow-400 mb-2">
                    Location
                  </h4>
                  <div className="flex items-center text-white">
                    <MapPin className="w-4 h-4 mr-2 text-yellow-400" />
                    Our Tech Campus - Central Location
                  </div>
                  <p className="text-gray-400 text-sm mt-2">
                    Easy access by public transport • Safe and secure
                    environment • Modern facilities
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Pricing */}
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <Trophy className="w-6 h-6 mr-2 text-yellow-400" />
                  Pricing & Value
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-400 mb-2">
                    $299
                  </div>
                  <div className="text-gray-400">per 12-week term</div>
                  <div className="text-green-400 text-sm">
                    All materials and equipment included
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-yellow-400">
                    What's Included:
                  </h4>
                  <div className="space-y-2">
                    {[
                      "All electronic components and kits",
                      "Robotics equipment and tools",
                      "Software licenses and platforms",
                      "Project materials and 3D printing",
                      "Expert mentorship and guidance",
                      "Certificate of completion",
                      "Portfolio development support",
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center text-sm text-gray-300"
                      >
                        <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-lg p-4">
                  <h4 className="font-semibold text-green-400 mb-2">
                    Early Bird Discount
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Enroll 2 weeks before term start and get{" "}
                    <strong>15% off</strong> + free starter kit!
                  </p>
                </div>

                <JuniorProgramForm>
                  <Button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-6 text-lg">
                    <Zap className="mr-2 w-5 h-5" />
                    Secure Your Spot Now
                  </Button>
                </JuniorProgramForm>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-green-500/20 text-green-400 border-green-500/30 font-mono">
              <GraduationCap className="w-4 h-4 mr-2" />
              Student Success
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
              Young Innovators Making Impact
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {successStories.map((story, index) => (
              <Card
                key={index}
                className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 group"
              >
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                      <Award className="w-8 h-8 text-yellow-400" />
                    </div>
                    <h3 className="font-bold text-lg text-white">
                      {story.name}
                    </h3>
                    <p className="text-yellow-400 text-sm">
                      {story.age} years old
                    </p>
                  </div>

                  <div className="space-y-3">
                    <Badge className="bg-green-500/20 text-green-400 border-green-500/30 w-full justify-center">
                      {story.achievement}
                    </Badge>

                    <p className="text-gray-300 text-sm leading-relaxed">
                      {story.story}
                    </p>

                    <div className="bg-slate-900/50 rounded-lg p-3">
                      <div className="text-xs text-gray-400">
                        Featured Project:
                      </div>
                      <div className="text-yellow-400 font-semibold text-sm">
                        {story.project}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-yellow-500/10 via-slate-900 to-orange-500/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
            Ready to Launch Your Child's Tech Journey?
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Limited spots available for next term. Give your child the skills to
            build the future.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <JuniorProgramForm>
              <Button
                size="lg"
                className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
              >
                <Rocket className="mr-2 w-6 h-6" />
                Enroll Now - Start in 2 Weeks!
              </Button>
            </JuniorProgramForm>

            <Button
              variant="outline"
              size="lg"
              className="border-yellow-500 text-yellow-400 px-8 py-6 text-lg hover:scale-105"
              asChild
            >
              <a href="tel:+37369117686">
                <Phone className="mr-2 w-6 h-6" />
                Call to Learn More
              </a>
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-8 max-w-lg mx-auto text-sm text-gray-400">
            <div>✓ Free Trial Class</div>
            <div>✓ No Commitment</div>
            <div>✓ Flexible Payments</div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default JuniorProgram;
