export const SEO_BY_LANG = {
  en: {
    title:
      "Embedded School - IT Courses in Embedded Systems, IoT & Programming",
    description:
      "Learn embedded systems, IoT, and programming with expert-led courses. Perfect for students and professionals in Moldova & Romania. Start your tech career today!",
    // canonical: "https://embeddedschool.md/",
    ogLocale: "en_US",
    url: "https://embeddedschool.md/",
    twitterSite: "@embeddedschool",
    image: "https://embeddedschool.md/og/embedded-school-1200x630.jpg",
  },
  ro: {
    title: "Embedded School - Cursuri IT în Sisteme Embedded și IoT",
    description:
      "Învață sisteme embedded, IoT și programare cu mentori experți. Perfect pentru studenți și profesioniști din Moldova & România.",
    // canonical: "https://embeddedschool.md/ro/",
    ogLocale: "ro_RO",
    url: "https://embeddedschool.md/ro/",
    twitterSite: "@embeddedschool",
    image: "https://embeddedschool.md/og/embedded-school-1200x630.jpg",
  },
  ru: {
    title: "Embedded School — курсы по Embedded-системам и IoT",
    description:
      "Изучи embedded-системы, IoT и программирование с наставниками-практиками. Подходит студентам и профессионалам в Молдове и Румынии.",
    // canonical: "https://embeddedschool.md/ru/",
    ogLocale: "ru_RU",
    url: "https://embeddedschool.md/ru/",
    twitterSite: "@embeddedschool",
    image: "https://embeddedschool.md/og/embedded-school-1200x630.jpg",
  },
} as const;

export type SiteLang = keyof typeof SEO_BY_LANG;