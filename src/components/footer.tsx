import { Badge } from "@/components/ui/badge";
import { Code, Cpu, Wifi, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { featuredCourses } from "@/testData/featuredCourses";

const Footer = () => {
  const { t, language } = useLanguage();

  return (
    <footer className="py-12 bg-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">ES</span>
              </div>
              <span className="font-bold text-lg text-white">
                Embedded School
              </span>
            </div>
            <p className="text-gray-400 mb-4">{t("footer.description")}</p>
          </div>

          <div>
            <h3 className="font-semibold mb-3 text-white">
              {t("footer.courses")}
            </h3>
            <ul className="space-y-2 text-gray-400">
              {featuredCourses.map((course) => (
                <li key={course.id}>
                  <Link
                    // to={`/courses/${course.id}`}
                    to={`/courses/${course.id}`}
                    className="hover:text-blue-400 transition-colors flex items-center"
                  >
                    {course.category === "Python" && (
                      <Code className="w-3 h-3 mr-2" />
                    )}
                    {course.category === "C++" && (
                      <Cpu className="w-3 h-3 mr-2" />
                    )}
                    {course.category === "Hardware" && (
                      <Wifi className="w-3 h-3 mr-2" />
                    )}
                    {course.category === "Testing" && (
                      <Zap className="w-3 h-3 mr-2" />
                    )}
                    {course.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3 text-white">
              {t("footer.company")}
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link
                  // to="/about"
                  to={"/about"}
                  className="hover:text-blue-400 transition-colors"
                >
                  {t("footer.aboutUs")}
                </Link>
              </li>
              <li>
                <Link
                  // to="/contact"
                  to={"/contact"}
                  className="hover:text-blue-400 transition-colors"
                >
                  {t("footer.contact")}
                </Link>
              </li>
              <li>
                <Link
                  // to="/blog"
                  to={"/blog"}
                  className="hover:text-blue-400 transition-colors"
                >
                  {t("footer.blog")}
                </Link>
              </li>
              <li>
                <Link
                  // to="/trainers#become-a-trainer"
                  to={"/trainers#become-a-trainer"}
                  className="hover:text-blue-400 transition-colors"
                >
                  {t("footer.careers")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3 text-white">
              {t("footer.resources")}
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link
                  // to="/documentation"
                  to={"/documentation"}
                  className="hover:text-blue-400 transition-colors"
                >
                  {t("footer.docs")}
                </Link>
              </li>
              <li>
                <a
                  href="https://t.me/embeddedschool"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  {t("footer.community")}
                </a>
              </li>
              <li>
                <Link
                  // to="/hardware"
                  to={"/hardware"}
                  className="hover:text-blue-400 transition-colors"
                >
                  Hardware Store
                </Link>
              </li>
              <li>
                <Link
                  // to="/contact"
                  to={"/contact"}
                  className="hover:text-blue-400 transition-colors"
                >
                  {t("footer.support")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© {t("footer.copyright")}</p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <div className="flex items-center space-x-1 text-gray-400">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-xs">{t("footer.operational")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
