import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { SEO_BY_LANG } from "@/seo";
import type { Language } from "@/contexts/LanguageContext";

interface SeoHelmetProps {
  lang: Language;
  title?: string;
  description?: string;
  canonical?: string;
  ogUrl?: string;
  image?: string;
}

function ensureSlash(p: string) {
  return p.endsWith("/") ? p : p + "/";
}
function stripLeadingLang(p: string) {
  return p.replace(/^\/(en|ro|ru)(?=\/|$)/, "");
}

export default function SeoHelmet({
  lang,
  title,
  description,
  canonical,
  ogUrl,
  image,
}: SeoHelmetProps) {
  const { pathname } = useLocation();
  const site = "https://embeddedschool.md";
  const L = SEO_BY_LANG[lang] ?? SEO_BY_LANG.en;

  const canonicalHref = canonical ?? site + ensureSlash(pathname || "/");

  const tail = ensureSlash(stripLeadingLang(pathname || "/")) || "/";
  const altEn = site + tail; // x-default + en
  const altRo = site + "/ro" + tail;
  const altRu = site + "/ru" + tail;

  const finalTitle = title ?? L.title;
  const finalDesc = description ?? L.description;
  const finalOgUrl = ogUrl ?? canonicalHref;
  const finalImage = image ?? L.image;

  return (
    <Helmet>
      <html lang={lang} />

      <title>{finalTitle}</title>
      <meta name="description" content={finalDesc} />
      <link rel="canonical" href={canonicalHref} />

      <link rel="alternate" hrefLang="en" href={altEn} />
      <link rel="alternate" hrefLang="ro" href={altRo} />
      <link rel="alternate" hrefLang="ru" href={altRu} />
      <link rel="alternate" hrefLang="x-default" href={altEn} />

      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDesc} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={finalOgUrl} />
      <meta property="og:image" content={finalImage} />
      <meta property="og:locale" content={L.ogLocale} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={L.twitterSite} />
      <meta name="twitter:image" content={finalImage} />
    </Helmet>
  );
}
