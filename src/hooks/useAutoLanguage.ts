import { useEffect } from "react";
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { useLanguage, type Language } from "@/contexts/LanguageContext";

const isLang = (v: any): v is Language =>
  v === "en" || v === "ro" || v === "ru";

export function useAutoLanguage() {
  const params = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    const fromParam = params.lang as string | undefined;
    const fromQuery = searchParams.get("lang") || undefined;

    let next: Language | undefined;
    if (isLang(fromParam)) next = fromParam;
    else if (isLang(fromQuery)) next = fromQuery;

    if (next && next !== language) setLanguage(next);

    if (isLang(fromQuery)) {
      searchParams.delete("lang");
      setSearchParams(searchParams, { replace: true });
    }

    if (fromParam === "en") {
      const cleaned = pathname.replace(/^\/en(\b|\/)/, "/");
      if (cleaned !== pathname) navigate(cleaned, { replace: true });
    }
  }, [
    language,
    navigate,
    params.lang,
    pathname,
    searchParams,
    setLanguage,
    setSearchParams,
  ]);
}

export const langPath = (path: string, language?: string) => {
  const lang = language || "ro";
  const clean = path?.startsWith("/") ? path : `/${path || ""}`;

  if (clean === "/") return `/${lang}/`;

  return `/${lang}${clean}`.replace(/\/{2,}/g, "/");
};
