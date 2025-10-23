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
      title: "Embedded Systems & IoT Courses — IT Training | Embedded School",
      description:
        "Discover IT courses in embedded systems, IoT and programming at Embedded School. Learn from expert instructors with hands-on training in Chisinau & online.",
    },
    ro: {
      title: "Cursuri IT Sisteme Embedded & IoT — Catalog | Embedded School",
      description:
        "Descoperă cursuri IT în sisteme embedded, IoT și programare la Embedded School. Învață cu mentori experți, practică hands-on. Chișinău & online.",
    },
    ru: {
      title: "IT-курсы по Embedded-системам и IoT — каталог | Embedded School",
      description:
        "Найдите IT-курсы по embedded-системам, IoT и программированию в Embedded School. Обучение с практикой под руководством экспертов. Кишинёв и онлайн.",
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
