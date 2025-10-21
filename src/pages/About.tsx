import React from "react";
import { Button } from "@/components/ui/button";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/ui/navigation";
import ScrollReveal from "@/components/scroll-reveal";
import AnimatedCounter from "@/components/animated-counter";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Users,
  Award,
  Target,
  Heart,
  Code,
  BookOpen,
  Trophy,
  Globe,
  ArrowRight,
  Linkedin,
  Mail,
  GraduationCap,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "@/components/footer";
import CourseInquiryForm from "@/components/CourseInquiryForm";
import { supabase } from "@/integrations/supabase/client";

import bswTech from "@/assets/bswTech.png";
import capgemini from "@/assets/capgemini.png";
import gefeetech from "@/assets/gefeetech.png";
import moldStud from "@/assets/moldStud.png";
import procesio from "@/assets/procesio.png";
import theAutomationNetwork from "@/assets/theAutomationNetwork.svg";
import { langPath } from "@/hooks/useAutoLanguage";

const About = () => {
  const navigate = useNavigate();
  const { t, language } = useLanguage();
  const [showInquiryForm, setShowInquiryForm] = React.useState(false);
  const [team, setTeam] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchTeam = async () => {
      const { data, error } = await supabase
        .from("team_members")
        .select("*")
        .order("id");

      if (!error && data) {
        setTeam(data);
      }
      setLoading(false);
    };

    fetchTeam();
  }, []);

  const getTranslatedField = (item: any, field: string) => {
    if (language === "ro" && item[`${field}_ro`]) {
      return item[`${field}_ro`];
    }
    if (language === "ru" && item[`${field}_ru`]) {
      return item[`${field}_ru`];
    }
    return item[field];
  };

  const stats = [
    { icon: Users, label: t("about.studentsTaught"), value: 250, suffix: "+" },
    {
      icon: Award,
      label: t("about.courseCompletions"),
      value: 50,
      suffix: "+",
    },
    {
      icon: Trophy,
      label: t("about.industryPartners"),
      value: 30,
      suffix: "+",
    },
    { icon: Globe, label: t("about.countriesReached"), value: 15, suffix: "" },
  ];

  const values = [
    {
      icon: Target,
      title: t("about.excellenceTitle"),
      description: t("about.excellenceDesc"),
    },
    {
      icon: Heart,
      title: t("about.studentCenteredTitle"),
      description: t("about.studentCenteredDesc"),
    },
    {
      icon: BookOpen,
      title: t("about.innovationTitle"),
      description: t("about.innovationDesc"),
    },
    {
      icon: Users,
      title: t("about.communityTitle"),
      description: t("about.communityDesc"),
    },
  ];

  const partners = [
    {
      name: "BSW TECH",
      logo: bswTech,
    },
    {
      name: "Procesio",
      logo: procesio,
    },
    {
      name: "GeFee",
      logo: gefeetech,
    },
    {
      name: "TheAutomationNetwork",
      logo: theAutomationNetwork,
    },
    {
      name: "MoldStud",
      logo: moldStud,
    },
    {
      name: "Capgemini",
      logo: capgemini,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900 font-inter text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              <pattern
                id="about-grid"
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
            <rect width="100%" height="100%" fill="url(#about-grid)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 bg-blue-500/10 text-blue-400 border-blue-500/20 font-mono">
                <Target className="w-4 h-4 mr-2" />
                {t("about.badge")}
              </Badge>

              <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white">
                {t("about.title")}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400">
                  {t("about.titleHighlight")}
                </span>
              </h1>

              <p className="text-xl lg:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
                {t("about.description")}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-800">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className="bg-slate-900/50 border-slate-700 text-center backdrop-blur-sm"
                >
                  <CardContent className="p-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/20 border border-blue-500/30 rounded-lg mb-4">
                      <stat.icon className="w-8 h-8 text-blue-400" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-1">
                      <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <Badge className="mb-6 bg-purple-500/10 text-purple-400 border-purple-500/20 font-mono">
                  <Code className="w-4 h-4 mr-2" />
                  {t("about.missionBadge")}
                </Badge>

                <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
                  {t("about.missionTitle")}
                </h2>
                <p className="text-lg text-gray-400 mb-6 leading-relaxed">
                  {t("about.missionText1")}
                </p>
                <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                  {t("about.missionText2")}
                </p>
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all duration-300 hover:scale-105 px-6 md:px-8 py-4 md:py-6 text-base md:text-lg"
                  onClick={() =>
                    window.open("https://t.me/embeddedschool", "_blank")
                  }
                >
                  <ArrowRight className="mr-2 w-4 md:w-5 h-4 md:h-5" />
                  {t("about.joinMission")}
                </Button>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                  alt={t("about.imageAlt")}
                  className="rounded-lg shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-lg"></div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <Badge className="mb-6 bg-green-500/10 text-green-400 border-green-500/20 font-mono">
                <Heart className="w-4 h-4 mr-2" />
                {t("about.valuesBadge")}
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
                {t("about.valuesTitle")}
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                {t("about.valuesSubtitle")}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <Card className="bg-slate-900/50 border-slate-700 backdrop-blur-sm h-full hover:bg-slate-900/70 transition-all duration-300 hover:scale-105 group">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3 text-white">
                      <div className="w-12 h-12 bg-blue-500/20 border border-blue-500/30 rounded-lg flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                        <value.icon className="w-6 h-6 text-blue-400" />
                      </div>
                      <span>{value.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col justify-between">
                    <p className="text-gray-400">{value.description}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <Badge className="mb-6 bg-yellow-500/10 text-yellow-400 border-yellow-500/20 font-mono">
                <Users className="w-4 h-4 mr-2" />
                {t("about.teamBadge")}
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
                {t("about.teamTitle")}
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                {t("about.teamSubtitle")}
              </p>
            </div>
          </ScrollReveal>

          {loading ? (
            <div className="text-center py-12">
              <p className="text-gray-400">{t("loading", "Loading...")}</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {team.map((member, index) => (
                <ScrollReveal key={member.id} delay={index * 100}>
                  <Card className="h-full flex flex-col bg-slate-800/50 border-slate-700 backdrop-blur-sm text-center hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 group">
                    <CardHeader className="pb-4 flex-shrink-0">
                      <div className="relative mx-auto mb-4">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-24 h-24 rounded-full mx-auto object-cover shadow-2xl"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-full"></div>
                      </div>
                      <CardTitle className="text-lg text-white">
                        {member.name}
                      </CardTitle>
                      <Badge className="mx-auto bg-blue-500/20 text-blue-400 border-blue-500/30">
                        {getTranslatedField(member, "role")}
                      </Badge>
                    </CardHeader>
                    <CardContent className="flex-grow flex flex-col justify-between">
                      <div>
                        <p className="text-sm text-gray-400 mb-2">
                          <strong className="text-gray-300">
                            {t("about.specialization")}
                          </strong>{" "}
                          {getTranslatedField(member, "specialization")}
                        </p>
                        <p className="text-sm text-gray-400 mb-4">
                          <strong className="text-gray-300">
                            {t("about.experience")}
                          </strong>{" "}
                          {member.experience}
                        </p>
                      </div>
                      <Link
                        to={member.linkedin}
                        className="hover:text-blue-400 transition-colors"
                      >
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full border-slate-600 text-slate-900 hover:bg-slate-700 hover:border-slate-500"
                        >
                          <Linkedin className="w-4 h-4 mr-2" />
                          {t("about.connect")}
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-slate-800">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <Badge className="mb-6 bg-orange-500/10 text-orange-400 border-orange-500/20 font-mono">
                <Globe className="w-4 h-4 mr-2" />
                {t("about.partnersBadge")}
              </Badge>
              <h3 className="text-2xl font-bold mb-4 text-white">
                {t("about.partnersTitle")}
              </h3>
              <p className="text-gray-400">{t("about.partnersSubtitle")}</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="flex flex-wrap justify-center items-center gap-6 max-w-6xl mx-auto">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 text-center opacity-60 hover:opacity-100 transition-opacity duration-300 p-4 rounded-lg hover:bg-slate-700/50"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-10 md:h-12 mx-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              <pattern
                id="cta-about-grid"
                width="8"
                height="8"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 8 0 L 0 0 0 8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.2"
                  className="text-blue-400"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#cta-about-grid)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <ScrollReveal>
            <Badge className="mb-6 bg-green-500/10 text-green-400 border-green-500/20 font-mono">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              {t("about.ctaBadge")}
            </Badge>

            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
              {t("about.ctaTitle")}
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              {t("about.ctaSubtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => setShowInquiryForm(true)}
                className="bg-white text-slate-900 hover:bg-gray-100 font-semibold px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
              >
                <GraduationCap className="mr-2 w-5 h-5" />
                {t("about.startLearning")}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-600 text-slate-900 hover:border-slate-500 px-8 py-6 text-lg hover:scale-105"
                // onClick={() => navigate("/contact")}
                onClick={() => navigate(langPath("/contact", language))}
              >
                <Mail className="mr-2 w-5 h-5" />
                {t("about.contactTeam")}
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      <CourseInquiryForm
        open={showInquiryForm}
        onOpenChange={setShowInquiryForm}
      />
    </div>
  );
};

export default About;
