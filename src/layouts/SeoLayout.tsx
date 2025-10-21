import { Outlet, useLocation } from "react-router-dom";
import SeoHelmet from "@/components/SeoHelmet";
import { useLanguage } from "@/contexts/LanguageContext";
import { useAutoLanguage } from "@/hooks/useAutoLanguage";
import { useSyncUrlWithLanguage } from "@/hooks/useSyncUrlWithLanguage";

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

function stripLeadingLangOnly(p: string) {
  return p.replace(/^\/(en|ro|ru)(?=\/|$)/, "");
}

export default function SeoLayout() {
  useAutoLanguage();
  useSyncUrlWithLanguage();
  
  const { language } = useLanguage();
  const { pathname } = useLocation();

  const key = stripLeadingLangOnly(pathname || "/");
  const seoProps = SEO_BY_ROUTE[key] ?? SEO_BY_ROUTE["/"];

  return (
    <>
      <SeoHelmet lang={language} {...seoProps} />
      <Outlet />
    </>
  );
}
