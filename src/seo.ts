export const SEO_BY_LANG = {
  en: {
    title:
      "Embedded School - IT Courses in Embedded Systems, IoT & Programming",
    description:
      "Learn embedded systems, IoT, and programming with expert-led courses. Perfect for students and professionals in Moldova & Romania. Start your tech career today!",
    ogLocale: "en_US",
    url: "https://embeddedschool.md/",
  },
  ro: {
    title: "Embedded School - Cursuri IT în Sisteme Embedded și IoT",
    description:
      "Învață sisteme embedded, IoT și programare cu mentori experți. Perfect pentru studenți și profesioniști din Moldova & România.",
    ogLocale: "ro_RO",
    url: "https://embeddedschool.md/ro/",
  },
  ru: {
    title: "Embedded School — курсы по Embedded-системам и IoT",
    description:
      "Изучи embedded-системы, IoT и программирование с наставниками-практиками. Подходит студентам и профессионалам в Молдове и Румынии.",
    ogLocale: "ru_RU",
    url: "https://embeddedschool.md/ru/",
  },
} as const;

export type SiteLang = keyof typeof SEO_BY_LANG;
