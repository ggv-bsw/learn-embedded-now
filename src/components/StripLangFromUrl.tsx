// src/components/StripLangFromUrl.tsx
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import type { Language } from "@/contexts/LanguageContext";

const isLang = (v: any): v is Language => v === "en" || v === "ro" || v === "ru";

export function StripLangFromUrl() {
  const { pathname, search, hash } = useLocation();
  const navigate = useNavigate();
  const { setLanguage } = useLanguage();

  useEffect(() => {
    const params = new URLSearchParams(search);
    const urlLang = params.get("lang");

    if (isLang(urlLang)) {
      setLanguage(urlLang);
      params.delete("lang");
      const cleanSearch = params.toString();
      const newUrl = `${pathname}${cleanSearch ? `?${cleanSearch}` : ""}${hash}`;
      if (newUrl !== `${pathname}${search}${hash}`) {
        navigate(newUrl, { replace: true });
      }
      return;
    }

    const m = pathname.match(/^\/(en|ro|ru)(?=\/|$)/);
    if (m) {
      const lang = m[1] as Language;
      setLanguage(lang);
      const cleaned = pathname.replace(/^\/(en|ro|ru)(?=\/|$)/, "") || "/";
      navigate(`${cleaned}${search}${hash}`, { replace: true });
      return;
    }

    const saved = localStorage.getItem("language");
    if (!isLang(saved) && document.referrer) {
      try {
        const u = new URL(document.referrer);
        const q = u.search || "";
        const host = u.hostname;
        const googleRu = /(^|\.)google\./i.test(host) && /(hl=ru|lr=lang_ru)/i.test(q);
        const yandex = /(^|\.)yandex\./i.test(host);
        if (googleRu || yandex) {
          setLanguage("ru");
        }
      } catch { /* ignore */ }
    }
  }, [pathname, search, hash, navigate, setLanguage]);

  return null;
}
