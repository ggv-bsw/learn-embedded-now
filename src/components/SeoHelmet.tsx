import { Helmet } from "react-helmet-async";
import { SEO_BY_LANG } from "@/seo";
import { useLocation } from "react-router-dom";

interface SeoHelmetProps {
  lang: "en" | "ro" | "ru";
  pageKey?: string;
  title?: string;
  description?: string;
  canonical?: string;
  ogUrl?: string;
  image?: string;
}

export default function SeoHelmet({
  lang,
  pageKey,
  title,
  description,
  canonical,
  ogUrl,
  image,
}: SeoHelmetProps) {
  const L = SEO_BY_LANG[lang] ?? SEO_BY_LANG.en;
  const { pathname } = useLocation();

  const site = "https://embeddedschool.md";
  const computedCanonical =
    canonical ?? `${site}${pathname.endsWith("/") ? pathname : pathname + "/"}`;

  const finalTitle = title ?? L.title;
  const finalDesc = description ?? L.description;
  const finalOgUrl = ogUrl ?? computedCanonical;
  const finalImage = image ?? L.image;

  return (
    <Helmet>
      <html lang={lang} />
      <title>{finalTitle}</title>
      <meta name="description" content={finalDesc} />

      <link rel="canonical" href={computedCanonical} />

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
