type Lang = "en" | "ro" | "ru";

export const SEO_BY_LANG: Record<
  Lang,
  {
    title: string;
    description: string;
    canonical: string;
    ogLocale: string;
    url: string;
    twitterSite: string;
    image: string;
    hreflangs: Array<{ href: string; lang: string }>;
  }
> = {
  en: {
    title:
      "Embedded School - IT Courses in Embedded Systems, IoT & Programming",
    description:
      "Learn embedded systems, IoT, and programming with expert-led courses. Perfect for students and professionals in Moldova & Romania. Start your tech career today!",
    canonical: "https://embeddedschool.md/en/",
    ogLocale: "en_US",
    url: "https://embeddedschool.md/en/",
    twitterSite: "@embeddedschool",
    image: "https://embeddedschool.md/og/embedded-school-1200x630.jpg",
    hreflangs: [
      { href: "https://embeddedschool.md/en/", lang: "en" },
      { href: "https://embeddedschool.md/ro/", lang: "ro" },
      { href: "https://embeddedschool.md/ru/", lang: "ru" },
      { href: "https://embeddedschool.md/", lang: "x-default" },
    ],
  },
  ro: {
    title: "Embedded School - Cursuri IT în Sisteme Embedded și IoT",
    description:
      "Învață sisteme embedded, IoT și programare cu mentori experți. Perfect pentru studenți și profesioniști din Moldova & România.",
    canonical: "https://embeddedschool.md/ro/",
    ogLocale: "ro_RO",
    url: "https://embeddedschool.md/ro/",
    twitterSite: "@embeddedschool",
    image: "https://embeddedschool.md/og/embedded-school-1200x630.jpg",
    hreflangs: [
      { href: "https://embeddedschool.md/en/", lang: "en" },
      { href: "https://embeddedschool.md/ro/", lang: "ro" },
      { href: "https://embeddedschool.md/ru/", lang: "ru" },
      { href: "https://embeddedschool.md/", lang: "x-default" },
    ],
  },
  ru: {
    title: "Embedded School — курсы по Embedded-системам и IoT",
    description:
      "Изучи embedded-системы, IoT и программирование с наставниками-практиками. Подходит студентам и профессионалам в Молдове и Румынии.",
    canonical: "https://embeddedschool.md/ru/",
    ogLocale: "ru_RU",
    url: "https://embeddedschool.md/ru/",
    twitterSite: "@embeddedschool",
    image: "https://embeddedschool.md/og/embedded-school-1200x630.jpg",
    hreflangs: [
      { href: "https://embeddedschool.md/en/", lang: "en" },
      { href: "https://embeddedschool.md/ro/", lang: "ro" },
      { href: "https://embeddedschool.md/ru/", lang: "ru" },
      { href: "https://embeddedschool.md/", lang: "x-default" },
    ],
  },
};
