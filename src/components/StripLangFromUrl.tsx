import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export function StripLangFromUrl() {
  const { pathname, search, hash } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const hasLang = /^\/(en|ro|ru)(?=\/|$)/.test(pathname);
    if (hasLang) {
      const cleaned = pathname.replace(/^\/(en|ro|ru)(?=\/|$)/, "") || "/";
      navigate(`${cleaned}${search}${hash}`, { replace: true });
    }
  }, [pathname, search, hash, navigate]);

  return null;
}
