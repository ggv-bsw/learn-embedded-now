import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import type { Language } from "@/contexts/LanguageContext";

const isLang = (v: any): v is Language =>
  v === "en" || v === "ro" || v === "ru";

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
      const newUrl = `${pathname}${
        cleanSearch ? `?${cleanSearch}` : ""
      }${hash}`;
      if (newUrl !== `${pathname}${search}${hash}`) {
        navigate(newUrl, { replace: true });
      }
      return;
    }

    const m = pathname.match(/^\/en(\b|\/)/);
    if (m) {
      const cleaned = pathname.replace(/^\/en(\b|\/)/, "/");
      navigate(`${cleaned}${search}${hash}`, { replace: true });
    }
  }, [pathname, search, hash, navigate, setLanguage]);

  return null;
}
