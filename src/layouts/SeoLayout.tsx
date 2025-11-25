import { Outlet, useLocation } from "react-router-dom";
import SeoHelmet from "@/components/SeoHelmet";
import { useLanguage } from "@/contexts/LanguageContext";
import { useAutoLanguage } from "@/hooks/useAutoLanguage";
import { useSyncUrlWithLanguage } from "@/hooks/useSyncUrlWithLanguage";

const SEO_BY_ROUTE: Record<string, { pageKey: string }> = {
  "/": { pageKey: "home" },
  "/about": { pageKey: "about" },
  "/trainers": { pageKey: "trainers" },
  "/courses": { pageKey: "courses" },
  "/contact": { pageKey: "contact" },
  "/hardware": { pageKey: "hardware" },
  "/junior": { pageKey: "junior" },
  "/documentation": { pageKey: "docs" },
  "/checkout": { pageKey: "checkout" },
  "/blog": { pageKey: "blog" },
};

function stripLeadingLangOnly(p: string) {
  return p.replace(/^\/(en|ro|ru)(?=\/|$)/, "");
}

const PAGE_META: Record<
  string,
  Partial<Record<"en" | "ro" | "ru", { title?: string; description?: string }>>
> = {
  home: {
    en: {
      title:
        "Embedded School — Embedded Systems & IoT Courses in Chișinău & Online",
      description:
        "Embedded School is an IT school and advanced learning educational company focused on embedded system training, embedded programming courses, Python for embedded systems and STM32. Learn electronics hardware design and IoT development in Chișinău and online.",
    },
    ro: {
      title:
        "Embedded School — Cursuri Embedded Systems & IoT în Chișinău și online",
      description:
        "Embedded School este o IT school și advanced learning educational company specializată în embedded system training, embedded programming course, Python pentru embedded systems, STM32 și electronics hardware design. Cursuri practice în Chișinău și online.",
    },
    ru: {
      title: "Курсы по Embedded и IoT в Кишинёве и онлайн — Embedded School",
      description:
        "Embedded School — IT-школа и advanced learning educational company по embedded system training, embedded programming course, Python for embedded systems course, STM32 и electronics hardware design. Обучение в Кишинёве и онлайн.",
    },
  },
  courses: {
    en: {
      title:
        "Embedded Systems & IoT Courses — IT Training Catalog | Embedded School",
      description:
        "Discover embedded courses in embedded systems, IoT and programming at Embedded School. Learn Python for embedded systems, STM32 and embedded C with hands-on embedded system training in Chișinău & online.",
    },
    ro: {
      title: "Cursuri IT Sisteme Embedded & IoT — Catalog | Embedded School",
      description:
        "Descoperă embedded courses în sisteme embedded, IoT și programare la Embedded School. Învață Python pentru embedded systems, STM32 și C embedded prin embedded system training practic în Chișinău și online.",
    },
    ru: {
      title:
        "IT-курсы по Embedded-системам и IoT — каталог курсов | Embedded School",
      description:
        "Найдите embedded courses по embedded-системам, IoT, Python for embedded systems și C-программированию в Embedded School. Практический embedded system training в Кишинёве и онлайн.",
    },
  },

  courseDetail: {
    en: {
      title:
        "Embedded Programming & Python for Embedded Systems Course | Embedded School",
      description:
        "Hands-on embedded programming course with Python for embedded systems, STM32 microcontrollers and electronics hardware design. Professional embedded system training in Chișinău & online at Embedded School.",
    },
    ro: {
      title:
        "Embedded programming course & Python pentru embedded systems | Embedded School",
      description:
        "Curs practic de embedded programming cu Python pentru embedded systems, microcontrolere STM32 și electronics hardware design. Embedded system training profesionist în Chișinău și online la Embedded School.",
    },
    ru: {
      title:
        "Embedded programming course și Python for embedded systems — Embedded School",
      description:
        "Практический embedded programming course с Python for embedded systems, STM32 и electronics hardware design. Профессиональный embedded system training в Кишинёве и онлайн в Embedded School.",
    },
  },

  about: {
    en: {
      title:
        "About Embedded School — IT School for Embedded Systems & IoT in Moldova",
      description:
        "Embedded School is an advanced learning educational company and IT school from Moldova, focused on embedded system training, IoT and electronics hardware design. We connect academic theory with real industry projects in Eastern Europe.",
    },
    ro: {
      title: "Despre Embedded School — IT school pentru Embedded Systems & IoT",
      description:
        "Embedded School este o advanced learning educational company și IT school din Moldova, specializată în embedded system training, IoT și electronics hardware design. Conectăm teoria academică cu proiecte reale din industrie în Europa de Est.",
    },
    ru: {
      title:
        "О нас — Embedded School, IT-школа по Embedded-системам și IoT în Moldova",
      description:
        "Embedded School — IT-школа și advanced learning educational company, основанная в Молдове. Мы развиваем обучение embedded-системам și IoT în Восточной Европе, соединяя академическую теорию с промышленной практикой, embedded system training și hardware design.",
    },
  },

  trainers: {
    en: {
      title:
        "Embedded Systems Instructors & IoT Mentors — Trainers | Embedded School",
      description:
        "Learn from embedded systems engineers, STM32 experts and IoT mentors. Our instructors deliver practical embedded programming courses, Python for embedded systems training and real electronics hardware design projects.",
    },
    ro: {
      title:
        "Instructori Embedded Systems & mentori IoT — Trainers | Embedded School",
      description:
        "Învață cu ingineri embedded, experți STM32 și mentori IoT. Instructorii noștri oferă embedded programming courses, Python pentru embedded systems course și proiecte reale de electronics hardware design.",
    },
    ru: {
      title:
        "Инструкторы по Embedded-системам și IoT-наставники — команда | Embedded School",
      description:
        "Учитесь у инженеров embedded-систем, экспертов STM32 и IoT-наставников. Преподаватели ведут embedded programming courses, Python for embedded systems course și проекты по electronics hardware design.",
    },
  },

  blog: {
    en: {
      title:
        "Embedded Systems & IoT Blog — Arduino, STM32, Debugging | Embedded School",
      description:
        "Read articles about embedded programming, Python for embedded systems, STM32, IoT architecture, debugging and security. Insights from Embedded School trainers and engineers.",
    },
    ro: {
      title:
        "Blog Embedded Systems & IoT — Arduino, STM32, Debugging | Embedded School",
      description:
        "Citește articole despre embedded programming, Python pentru embedded systems, STM32, arhitectură IoT, debugging și security, scrise de instructorii Embedded School.",
    },
    ru: {
      title:
        "Блог про Embedded-системы, IoT, Arduino și STM32 | Embedded School",
      description:
        "Статьи про embedded programming, Python for embedded systems, STM32, архитектуру IoT, debugging și security от инженеров și тренеров Embedded School.",
    },
  },

  blogPost: {
    en: {
      title: "Embedded Systems & IoT Article — Blog | Embedded School",
      description:
        "In-depth article from the Embedded School blog about embedded systems, IoT, STM32, embedded programming and real engineering practice.",
    },
    ro: {
      title: "Articol Embedded Systems & IoT — Blog | Embedded School",
      description:
        "Articol detaliat pe blogul Embedded School despre embedded systems, IoT, STM32, embedded programming și practică reală de inginerie.",
    },
    ru: {
      title: "Статья про Embedded-системы și IoT — блог | Embedded School",
      description:
        "Подробная статья на блоге Embedded School про embedded-системы, IoT, STM32, embedded programming și реальные инженерные проекты.",
    },
  },

  contact: {
    en: {
      title: "Contact — Embedded Systems & IoT IT School | Embedded School",
      description:
        "Contact Embedded School to ask about embedded courses, Python for embedded systems, STM32 training and electronics hardware design classes in Chișinău & online.",
    },
    ro: {
      title: "Contacte — Embedded Systems & IoT IT School | Embedded School",
      description:
        "Contactează Embedded School pentru informații despre embedded courses, Python pentru embedded systems, training STM32 și cursuri de electronics hardware design în Chișinău și online.",
    },
    ru: {
      title: "Контакты — Embedded School, IT-школа по Embedded și IoT",
      description:
        "Свяжитесь с Embedded School по вопросам embedded courses, Python for embedded systems course, STM32-обучения și курсов по electronics hardware design в Кишинёве и онлайн.",
    },
  },

  hardware: {
    en: {
      title:
        "STM32 & Arduino Development Boards — Hardware Store | Embedded School",
      description:
        "Shop STM32 and Arduino development boards, sensors and electronics hardware for embedded system training and student projects at Embedded School.",
    },
    ro: {
      title:
        "Plăci STM32 & Arduino pentru dezvoltare — Hardware Store | Embedded School",
      description:
        "Cumpără plăci STM32, Arduino și componente electronice pentru embedded system training, proiecte de curs și electronics hardware design la Embedded School.",
    },
    ru: {
      title:
        "Платы STM32 și Arduino pentru dezvoltare — магазин hardware | Embedded School",
      description:
        "Купите STM32 și Arduino development boards, сенсоры și компоненты для embedded system training, учебных проектов și electronics hardware design в Embedded School.",
    },
  },

  hardwareDetail: {
    en: {
      title:
        "Embedded Development Board — STM32 / Arduino Hardware | Embedded School",
      description:
        "Professional embedded development boards for STM32, Arduino and other MCUs. Ideal for embedded programming courses, STM32 labs and electronics hardware design practice.",
    },
    ro: {
      title:
        "Placă de dezvoltare embedded — STM32 / Arduino Hardware | Embedded School",
      description:
        "Plăci de dezvoltare profesionale STM32 și Arduino, ideale pentru embedded programming courses, laboratoare STM32 și practică de electronics hardware design.",
    },
    ru: {
      title:
        "Плата для embedded-разработки — STM32 / Arduino hardware | Embedded School",
      description:
        "Профессиональные платы STM32 și Arduino pentru embedded programming course, лабораторные работы și практику по electronics hardware design.",
    },
  },

  junior: {
    en: {
      title:
        "Junior Weekend School — Robotics, Space & IoT for Ages 12–18 | Embedded School",
      description:
        "Weekend school in Chișinău for juniors aged 12–18. Project-based learning in robotics, space technology, IoT and programming. Perfect first step before advanced embedded courses.",
    },
    ro: {
      title:
        "Școală de weekend pentru juniori — robotică, spațiu & IoT (12–18 ani) | Embedded School",
      description:
        "Program de weekend în Chișinău pentru tineri de 12–18 ani. Învățare prin proiecte în robotică, tehnologie spațială, IoT și programare — pregătire ideală pentru viitoare embedded courses.",
    },
    ru: {
      title:
        "Выходная школа для подростков (12–18) — робототехника, космос și IoT | Embedded School",
      description:
        "Юниорская программа выходного дня в Кишинёве для подростков 12–18 лет. Проектное обучение робототехнике, космическим технологиям, IoT и программированию — первый шаг к embedded-курсам.",
    },
  },

  documentation: {
    en: {
      title:
        "Documentation — Embedded Courses, STM32 & Arduino Guides | Embedded School",
      description:
        "Technical documentation, course guides and setup instructions for embedded programming courses, STM32 labs, Arduino projects and electronics hardware design at Embedded School.",
    },
    ro: {
      title:
        "Documentație — ghiduri pentru embedded courses, STM32 & Arduino | Embedded School",
      description:
        "Documentație tehnică, course guides și setup pentru embedded programming courses, laboratoare STM32, proiecte Arduino și electronics hardware design la Embedded School.",
    },
    ru: {
      title:
        "Документация — embedded courses, STM32 și Arduino ghiduri | Embedded School",
      description:
        "Техническая документация și course guides pentru embedded programming courses, лаборатории STM32, proiecte Arduino și electronics hardware design в Embedded School.",
    },
  },
};

export default function SeoLayout() {
  useAutoLanguage();
  useSyncUrlWithLanguage();

  const { language } = useLanguage();
  const { pathname } = useLocation();

  const key = stripLeadingLangOnly(pathname || "/");
  const { pageKey } = SEO_BY_ROUTE[key] ?? SEO_BY_ROUTE["/"];
  const perPage = PAGE_META[pageKey]?.[language];
  return (
    <>
      <SeoHelmet
        lang={language}
        title={perPage?.title}
        description={perPage?.description}
      />
      <Outlet />
    </>
  );
}
