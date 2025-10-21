import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSelector from "@/components/LanguageSelector";
import { ShoppingCartSheet } from "@/components/ShoppingCart";
import { langPath } from "@/hooks/useAutoLanguage";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();
  const { language } = useLanguage();

  return (
    <nav className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            // to="/"
            to={langPath("/", language)}
            className="flex items-center space-x-2 font-bold text-xl text-white"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">ES</span>
            </div>
            <span>Embedded School</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              // to="/courses"
              to={langPath("/courses", language)}
              className="text-gray-300 hover:text-blue-400 transition-colors font-medium"
            >
              {t("nav.courses", "Courses")}
            </Link>
            <Link
              // to="/about"
              to={langPath("/about", language)}
              className="text-gray-300 hover:text-blue-400 transition-colors font-medium"
            >
              {t("nav.about", "About")}
            </Link>
            <Link
              // to="/trainers"
              to={langPath("/trainers", language)}
              className="text-gray-300 hover:text-blue-400 transition-colors font-medium"
            >
              {t("nav.trainers", "Trainers")}
            </Link>
            <Link
              // to="/blog"
              to={langPath("/blog", language)}
              className="text-gray-300 hover:text-blue-400 transition-colors font-medium"
            >
              {t("nav.blog", "Blog")}
            </Link>
            <Link
              // to="/hardware"
              to={langPath("/hardware", language)}
              className="text-gray-300 hover:text-blue-400 transition-colors font-medium"
            >
              {t("nav.hardware", "Hardware")}
            </Link>
            <Link
              // to="/contact"
              to={langPath("/contact", language)}
              className="text-gray-300 hover:text-blue-400 transition-colors font-medium"
            >
              {t("nav.contact", "Contact")}
            </Link>
          </div>

          {/* Language Selector & Cart */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSelector />
            <ShoppingCartSheet />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-slate-800 bg-slate-900">
            <div className="flex flex-col space-y-4">
              <Link
                // to="/courses"
                to={langPath("/courses", language)}
                className="block px-4 py-2 text-gray-300 hover:text-blue-400 transition-colors"
              >
                {t("nav.courses", "Courses")}
              </Link>

              <Link
                // to="/about"
                to={langPath("/about", language)}
                className="block px-4 py-2 text-gray-300 hover:text-blue-400 transition-colors"
              >
                {t("nav.about", "About")}
              </Link>
              <Link
                // to="/trainers"
                to={langPath("/trainers", language)}
                className="block px-4 py-2 text-gray-300 hover:text-blue-400 transition-colors"
              >
                {t("nav.trainers", "Trainers")}
              </Link>
              <Link
                // to="/blog"
                to={langPath("/blog", language)}
                className="block px-4 py-2 text-gray-300 hover:text-blue-400 transition-colors"
              >
                {t("nav.blog", "Blog")}
              </Link>
              <Link
                // to="/hardware"
                to={langPath("/hardware", language)}
                className="block px-4 py-2 text-gray-300 hover:text-blue-400 transition-colors"
              >
                {t("nav.hardware", "Hardware")}
              </Link>
              <Link
                // to="/contact"
                to={langPath("/contact", language)}
                className="block px-4 py-2 text-gray-300 hover:text-blue-400 transition-colors"
              >
                {t("nav.contact", "Contact")}
              </Link>

              <div className="px-4 pt-4 flex items-center justify-between">
                <LanguageSelector />
                <ShoppingCartSheet />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
