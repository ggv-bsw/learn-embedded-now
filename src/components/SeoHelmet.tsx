
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { SEO_BY_LANG, type SiteLang } from "@/seo";

interface SeoHelmetProps {
  lang: SiteLang;
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

  const tail = ensureSlash(stripLeadingLang(pathname || "/"));
  const localePrefix = lang === "en" ? "" : `/${lang}`;
  const computedCanonical = `${site}${localePrefix}${tail}`;
  const canonicalHref = ensureSlash(canonical || computedCanonical);

  const altEn = `${site}${ensureSlash(stripLeadingLang(pathname || "/"))}`; // x-default + en
  const altRo = `${site}/ro${tail}`;
  const altRu = `${site}/ru${tail}`;

  const finalTitle = title || L.title;
  const finalDesc = description || L.description;
  const finalOgUrl = ogUrl || canonicalHref;
  const finalImage = image || L.image;

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Embedded School",
    url: `${site}/`,
    inLanguage: lang,
    potentialAction: {
      "@type": "SearchAction",
      target: `${site}/${lang === "en" ? "" : lang + "/"}search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  } as const;

  const segments = tail.split("/").filter(Boolean);
  const breadcrumbJsonLd = segments.length
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: segments.map((seg, idx) => ({
          "@type": "ListItem",
          position: idx + 1,
          name: seg,
          item: `${site}${localePrefix}/${segments.slice(0, idx + 1).join("/")}/`,
        })),
      }
    : null;

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
      {lang !== "en" && <meta property="og:locale:alternate" content="en_US" />}
      {lang !== "ro" && <meta property="og:locale:alternate" content="ro_RO" />}
      {lang !== "ru" && <meta property="og:locale:alternate" content="ru_RU" />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={L.twitterSite} />
      <meta name="twitter:image" content={finalImage} />

      <script type="application/ld+json">{JSON.stringify(websiteJsonLd)}</script>
      {breadcrumbJsonLd && (
        <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd)}</script>
      )}
    </Helmet>
  );
}
