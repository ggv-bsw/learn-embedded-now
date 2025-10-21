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

const PAGE_META: Record<
  string,
  Partial<Record<"en" | "ro" | "ru", { title?: string; description?: string }>>
> = {
  courses: {
    en: {
      title: "Embedded & IoT Courses — Catalog | Embedded School",
      description:
        "Browse embedded systems, IoT and programming courses. Hands-on, mentor-led. Chisinau & online.",
    },
    ro: {
      title: "Cursuri Embedded & IoT — Catalog | Embedded School",
      description:
        "Vezi cursurile Embedded, IoT și programare. Practic, cu mentori. Chișinău & online.",
    },
    ru: {
      title: "Курсы по Embedded и IoT — каталог | Embedded School",
      description:
        "Смотрите каталог курсов по Embedded, IoT и программированию. Практика, наставники. Кишинёв и онлайн.",
    },
  },
  contact: {
    en: { title: "Contact | Embedded School" },
    ro: { title: "Contacte | Embedded School" },
    ru: { title: "Контакты | Embedded School" },
  },
  home: {
    ru: {
      title: "Курсы по Embedded и IoT в Кишинёве и онлайн — Embedded School",
    },
  },
};

export default function SeoLayout() {
  useAutoLanguage();
  useSyncUrlWithLanguage();

  const { language } = useLanguage();
  const { pathname } = useLocation();

  const key = stripLeadingLangOnly(pathname || "/");
  const { pageKey } = SEO_BY_ROUTE[key] ?? SEO_BY_ROUTE["/"];
  const perPage = PAGE_META[pageKey]?.[language];
  return (
    <>
      <SeoHelmet
        lang={language}
        title={perPage?.title}
        description={perPage?.description}
      />
      <Outlet />
    </>
  );
}
