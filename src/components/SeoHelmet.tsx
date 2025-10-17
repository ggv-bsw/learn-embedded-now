import { Helmet } from "react-helmet-async";
import { SEO_BY_LANG } from "@/seo";

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

  const finalTitle = title ?? L.title;
  const finalDesc = description ?? L.description;
  const finalCanonical = canonical ?? L.canonical;
  const finalOgUrl = ogUrl ?? L.url;
  const finalImage = image ?? L.image;

  return (
    <Helmet>
      <html lang={lang} />
      <title>{finalTitle}</title>
      <meta name="description" content={finalDesc} />

      <link rel="canonical" href={finalCanonical} />

      {L.hreflangs.map((h) => (
        <link key={h.lang} rel="alternate" href={h.href} hreflang={h.lang} />
      ))}

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
