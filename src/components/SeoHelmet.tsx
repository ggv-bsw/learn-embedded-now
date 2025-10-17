import { useLanguage } from "@/contexts/LanguageContext";
import { SEO_BY_LANG } from "@/seo";
import { Helmet } from "react-helmet-async";

interface SeoHelmetProps {
  lang: string;
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
  const { language } = useLanguage();
  const s = SEO_BY_LANG[language];

  return (
    <Helmet>
      <html lang={lang} />
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {canonical && <link rel="canonical" href={canonical} />}
      {ogUrl && <meta property="og:url" content={ogUrl} />}
      {image && <meta property="og:image" content={image} />}
    </Helmet>
  );
}
