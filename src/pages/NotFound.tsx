import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/contexts/LanguageContext";
import { langPath } from "@/hooks/useAutoLanguage";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  const { language } = useLanguage();
  const titleByLang = {
    en: "Page not found | Embedded School",
    ro: "Pagina nu a fost găsită | Embedded School",
    ru: "Страница не найдена | Embedded School",
  } as const;

  return (
    <>
      <Helmet>
        <title>{titleByLang[language]}</title>
        <meta name="robots" content="noindex,follow" />
      </Helmet>

      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <div className="text-center max-w-md mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">404</h1>
          <p className="text-lg md:text-xl text-gray-600 mb-4">
            Oops! Page not found
          </p>
          <a
            href={langPath("/", language)}
            className="text-blue-500 hover:text-blue-700 underline text-sm md:text-base"
          >
            Return to Home
          </a>
        </div>
      </div>
    </>
  );
};

export default NotFound;
