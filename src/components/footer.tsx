import { Badge } from "@/components/ui/badge";
import { Code, Cpu, Wifi, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { featuredCourses } from "@/testData/featuredCourses";

const Footer = () => {
  const { t } = useLanguage();
  
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
            <p className="text-gray-400 mb-4">
              {t('footer.description')}
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-white">{t('footer.courses')}</h4>
            <ul className="space-y-2 text-gray-400">
              {featuredCourses.map((course) => (
                <li key={course.id}>
                  <Link
                    to={`/courses/${course.id}`}
                    className="hover:text-blue-400 transition-colors flex items-center"
                  >
                    {course.category === "Python" && <Code className="w-3 h-3 mr-2" />}
                    {course.category === "C++" && <Cpu className="w-3 h-3 mr-2" />}
                    {course.category === "Hardware" && <Wifi className="w-3 h-3 mr-2" />}
                    {course.category === "Testing" && <Zap className="w-3 h-3 mr-2" />}
                    {course.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-white">{t('footer.company')}</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link
                  to="/about"
                  className="hover:text-blue-400 transition-colors"
                >
                  {t('footer.aboutUs')}
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-blue-400 transition-colors"
                >
                  {t('footer.contact')}
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="hover:text-blue-400 transition-colors"
                >
                  {t('footer.blog')}
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="hover:text-blue-400 transition-colors"
                >
                  {t('footer.careers')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-white">
              {t('footer.resources')}
            </h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link
                  to="/docs"
                  className="hover:text-blue-400 transition-colors"
                >
                  {t('footer.docs')}
                </Link>
              </li>
              <li>
                <Link
                  to="/api"
                  className="hover:text-blue-400 transition-colors"
                >
                  {t('footer.api')}
                </Link>
              </li>
              <li>
                <Link
                  to="/community"
                  className="hover:text-blue-400 transition-colors"
                >
                  {t('footer.community')}
                </Link>
              </li>
              <li>
                <Link
                  to="/support"
                  className="hover:text-blue-400 transition-colors"
                >
                  {t('footer.support')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © {t('footer.copyright')}
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <div className="flex items-center space-x-1 text-gray-400">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-xs">{t('footer.operational')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
