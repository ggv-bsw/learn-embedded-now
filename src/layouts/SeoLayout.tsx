import { Outlet, useLocation } from "react-router-dom";
import SeoHelmet from "@/components/SeoHelmet";
import { useLanguage } from "@/contexts/LanguageContext";
import { useAutoLanguage } from "@/hooks/useAutoLanguage";

const SEO_BY_ROUTE: Record<string, { pageKey: string }> = {
  "/": { pageKey: "home" },
  "/about": { pageKey: "about" },
  "/trainers": { pageKey: "trainers" },
  "/courses": { pageKey: "courses" },
  "/contact": { pageKey: "contact" },
  "/hardware": { pageKey: "hardware" },
  "/junior": { pageKey: "junior" },
  "/documentation": { pageKey: "docs" },
  "/checkout": { pageKey: "checkout" },
  "/blog": { pageKey: "blog" },
};

export default function SeoLayout() {
  const { pathname } = useLocation();
  const { language } = useLanguage();
  useAutoLanguage();   

  const seoProps = SEO_BY_ROUTE[pathname] ?? SEO_BY_ROUTE["/"];

  return (
    <>
      <SeoHelmet lang={language} {...seoProps} />
      <Outlet />
    </>
  );
}
