import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

type Lang = "en" | "ro" | "ru";
const isLang = (v: any): v is Lang => v === "en" || v === "ro" || v === "ru";

export function useAutoLanguage() {
  const { setLanguage } = useLanguage();
  const { search } = useLocation();

  useEffect(() => {
    const saved = localStorage.getItem("language");
    if (isLang(saved)) return;

    const params = new URLSearchParams(search);
    const urlLang = params.get("lang");
    if (isLang(urlLang)) {
      setLanguage(urlLang);
      localStorage.setItem("language", urlLang);
      return;
    }

    if (document.referrer) {
      try {
        const u = new URL(document.referrer);
        const host = u.hostname;
        const q = u.search || "";
        const googleRu =
          /(^|\.)google\./i.test(host) && /(hl=ru|lr=lang_ru)/i.test(q);
        const yandex = /(^|\.)yandex\./i.test(host);
        if (googleRu || yandex) {
          setLanguage("ru");
          localStorage.setItem("language", "ru");
          return;
        }
      } catch { /* ignore */ }
    }

    const langs = (navigator.languages?.length
      ? navigator.languages
      : [navigator.language]
    ).map((l) => l?.toLowerCase() ?? "");

    if (langs.find((l) => l.startsWith("ru"))) {
      setLanguage("ru");
      localStorage.setItem("language", "ru");
    } else if (langs.find((l) => l.startsWith("ro"))) {
      setLanguage("ro");
      localStorage.setItem("language", "ro");
    } else {
      setLanguage("en");
      localStorage.setItem("language", "en");
    }
  }, [search, setLanguage]);
}
