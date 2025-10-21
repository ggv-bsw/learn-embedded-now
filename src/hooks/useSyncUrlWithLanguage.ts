import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

export function useSyncUrlWithLanguage() {
  const { language } = useLanguage();
  const { pathname, search, hash } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const tail = pathname.replace(/^\/(ro|ru)(?=\/|$)/, "") || "/";
    const target =
      language === "en" ? tail : `/${language}${tail === "/" ? "/" : tail}`;

    if (target !== pathname) {
      navigate(`${target}${search}${hash}`, { replace: false });
    }
  }, [language, pathname, search, hash, navigate]);
}
