import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ro' | 'ru';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, defaultValue?: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation data
const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.courses': 'Courses',
    'nav.about': 'About',
    'nav.trainers': 'Trainers',
    'nav.blog': 'Blog',
    'nav.hardware': 'Hardware',
    'nav.contact': 'Contact',
    'nav.login': 'Login',
    'nav.getStarted': 'Get Started',
    
    // Hero Section
    'hero.title': 'Engineers Factory - Embedded School',
    'hero.subtitle': 'Build Your Future',
    'hero.description': 'Join thousands of students mastering cutting-edge technology through hands-on courses in IoT, embedded systems, and more.',
    'hero.startLearning': 'Start Learning Today',
    'hero.watchDemo': 'Watch Demo',
    'hero.satisfaction': 'Satisfaction Rate',
    'hero.activeStudents': 'Active Students',
    'hero.expertCourses': 'Expert Courses',
    
    // Featured Courses
    'courses.featured': 'Featured Courses',
    'courses.mostPopular': 'Most Popular Courses',
    'courses.description': 'Discover our most popular courses designed by industry experts',
    'courses.enrollNow': 'Enroll Now',
    'courses.viewAll': 'View All Courses',
    'courses.allAvailable': 'All Courses Available',
    'courses.masterEmbedded': 'Master Embedded',
    'courses.systemsIoT': 'Systems & IoT',
    'courses.discover': 'Discover comprehensive courses in embedded systems, IoT, and programming. Start your journey from beginner to professional level.',
    'courses.searchPlaceholder': 'Search courses...',
    'courses.category': 'Category:',
    'courses.level': 'Level:',
    'courses.found': 'Found',
    'courses.course': 'Course',
    'courses.courses': 'Courses',
    'courses.clearFilters': 'Clear Filters',
    'courses.noCourses': 'No courses found',
    'courses.adjustSearch': 'Try adjusting your search criteria or browse all courses',
    'courses.viewAllCourses': 'View All Courses',
    
    // Features
    'features.whyChoose': 'Why Choose Us?',
    'features.title': 'Industry-Standard Learning Platform',
    'features.description': 'Master embedded systems with our comprehensive, hands-on curriculum designed by industry professionals. From basic concepts to advanced real-world applications.',
    'features.handsOn': 'Hands-on Projects',
    'features.handsOnDesc': 'Build real embedded systems projects from day one',
    'features.industryTools': 'Industry-Standard Tools',
    'features.industryToolsDesc': 'Learn with the same tools used by professionals',
    'features.expertInstructors': 'Expert Instructors',
    'features.expertInstructorsDesc': 'Learn from experienced embedded systems engineers',
    'features.certification': 'Industry Certification',
    'features.certificationDesc': 'Get recognized certificates that employers value. All courses align with industry standards and best practices.',
    
    // Stats
    'stats.activeStudents': 'Active Students',
    'stats.coursesAvailable': 'Courses Available',
    'stats.averageRating': 'Average Rating',
    'stats.successRate': 'Success Rate',
    
    // Course Categories
    'category.embeddedC': 'Embedded C',
    'category.arduino': 'Arduino',
    'category.iot': 'IoT Systems',
    'category.automotive': 'Automotive',
    'category.all': 'All',
    
    // Course Levels
    'level.beginner': 'Beginner',
    'level.intermediate': 'Intermediate',
    'level.advanced': 'Advanced',
    'level.all': 'All',
    
    // Common
    'common.students': 'students',
    'common.weeks': 'weeks',
    'common.readMore': 'Read More',
    'common.learnMore': 'Learn More',
    'common.home': 'Home',
    'common.addToCart': 'Add to Cart',
    'common.enrollNow': 'Enroll Now',
    'common.inStock': 'In Stock',
    'common.outOfStock': 'Out of Stock',
    'common.reviews': 'reviews',
    
    // Professional Pack
    'pack.title': 'Professional Pack',
    'pack.careerPaths': 'Complete Career Paths',
    'pack.description': 'Comprehensive learning tracks designed for specific engineering roles. Master multiple technologies in focused career paths.',
    
    // Footer
    'footer.description': 'Empowering the next generation of embedded systems developers with practical, industry-focused education.',
    'footer.courses': 'Courses',
    'footer.company': 'Company',
    'footer.resources': 'Developer Resources',
    'footer.aboutUs': 'About Us',
    'footer.contact': 'Contact',
    'footer.blog': 'Blog',
    'footer.careers': 'Careers',
    'footer.docs': 'Documentation',
    'footer.api': 'API Reference',
    'footer.community': 'Community',
    'footer.support': 'Support',
    'footer.copyright': '2024 Embedded School. Open source education platform.',
    'footer.operational': 'All systems operational',
    'footer.arduinoProgramming': 'Arduino Programming',
    'footer.embeddedC': 'Embedded C',
    'footer.iotSystems': 'IoT Systems',
    'footer.automotiveElectronics': 'Automotive Electronics',
  },
  ro: {
    // Navigation
    'nav.courses': 'Cursuri',
    'nav.about': 'Despre',
    'nav.trainers': 'Instructori',
    'nav.blog': 'Blog',
    'nav.hardware': 'Hardware',
    'nav.contact': 'Contact',
    'nav.login': 'Conectare',
    'nav.getStarted': 'Începe Acum',
    
    // Hero Section
    'hero.title': 'Fabrica de Ingineri - Școala de Sisteme Înglobate',
    'hero.subtitle': 'Construiește-ți Viitorul',
    'hero.description': 'Alătură-te miilor de studenți care stăpânesc tehnologia de vârf prin cursuri practice în IoT, sisteme înglobate și multe altele.',
    'hero.startLearning': 'Începe să Înveți Astăzi',
    'hero.watchDemo': 'Vizionează Demo',
    'hero.satisfaction': 'Rata de Satisfacție',
    'hero.activeStudents': 'Studenți Activi',
    'hero.expertCourses': 'Cursuri de Expert',
    
    // Featured Courses
    'courses.featured': 'Cursuri Recomandate',
    'courses.mostPopular': 'Cele Mai Populare Cursuri',
    'courses.description': 'Descoperă cele mai populare cursuri create de experți din industrie',
    'courses.enrollNow': 'Înscrie-te Acum',
    'courses.viewAll': 'Vezi Toate Cursurile',
    'courses.allAvailable': 'Toate Cursurile Disponibile',
    'courses.masterEmbedded': 'Stăpânește Sistemele',
    'courses.systemsIoT': 'Înglobate & IoT',
    'courses.discover': 'Descoperă cursuri complete de sisteme înglobate, IoT și programare. Începe călătoria ta de la nivel începător la nivel profesional.',
    'courses.searchPlaceholder': 'Caută cursuri...',
    'courses.category': 'Categorie:',
    'courses.level': 'Nivel:',
    'courses.found': 'Găsite',
    'courses.course': 'Curs',
    'courses.courses': 'Cursuri',
    'courses.clearFilters': 'Șterge Filtrele',
    'courses.noCourses': 'Niciun curs găsit',
    'courses.adjustSearch': 'Încearcă să ajustezi criteriile de căutare sau vezi toate cursurile',
    'courses.viewAllCourses': 'Vezi Toate Cursurile',
    
    // Features
    'features.whyChoose': 'De Ce Să Ne Alegi?',
    'features.title': 'Platformă de Învățare Conform Standardelor Industriei',
    'features.description': 'Stăpânește sistemele înglobate cu curriculum-ul nostru cuprinzător și practic, conceput de profesioniști din industrie. De la concepte de bază la aplicații avansate din lumea reală.',
    'features.handsOn': 'Proiecte Practice',
    'features.handsOnDesc': 'Construiește proiecte reale de sisteme înglobate din prima zi',
    'features.industryTools': 'Instrumente Standard din Industrie',
    'features.industryToolsDesc': 'Învață cu aceleași instrumente folosite de profesioniști',
    'features.expertInstructors': 'Instructori Experți',
    'features.expertInstructorsDesc': 'Învață de la ingineri experimentați în sisteme înglobate',
    'features.certification': 'Certificare din Industrie',
    'features.certificationDesc': 'Obține certificate recunoscute care sunt apreciate de angajatori. Toate cursurile se aliniază cu standardele și practicile din industrie.',
    
    // Stats
    'stats.activeStudents': 'Studenți Activi',
    'stats.coursesAvailable': 'Cursuri Disponibile',
    'stats.averageRating': 'Rating Mediu',
    'stats.successRate': 'Rata de Succes',
    
    // Course Categories
    'category.embeddedC': 'C Înglobat',
    'category.arduino': 'Arduino',
    'category.iot': 'Sisteme IoT',
    'category.automotive': 'Automotive',
    'category.all': 'Toate',
    
    // Course Levels
    'level.beginner': 'Începător',
    'level.intermediate': 'Intermediar',
    'level.advanced': 'Avansat',
    'level.all': 'Toate',
    
    // Common
    'common.students': 'studenți',
    'common.weeks': 'săptămâni',
    'common.readMore': 'Citește Mai Mult',
    'common.learnMore': 'Află Mai Mult',
    'common.home': 'Acasă',
    'common.addToCart': 'Adaugă în Coș',
    'common.enrollNow': 'Înscrie-te Acum',
    'common.inStock': 'În Stoc',
    'common.outOfStock': 'Stoc Epuizat',
    'common.reviews': 'recenzii',
    
    // Professional Pack
    'pack.title': 'Pachet Profesional',
    'pack.careerPaths': 'Trasee de Carieră Complete',
    'pack.description': 'Trasee de învățare cuprinzătoare concepute pentru roluri specifice de inginerie. Stăpânește tehnologii multiple în trasee de carieră focalizate.',
    
    // Footer
    'footer.description': 'Împuternicim noua generație de dezvoltatori de sisteme înglobate cu educație practică, orientată către industrie.',
    'footer.courses': 'Cursuri',
    'footer.company': 'Companie',
    'footer.resources': 'Resurse pentru Dezvoltatori',
    'footer.aboutUs': 'Despre Noi',
    'footer.contact': 'Contact',
    'footer.blog': 'Blog',
    'footer.careers': 'Cariere',
    'footer.docs': 'Documentație',
    'footer.api': 'Referință API',
    'footer.community': 'Comunitate',
    'footer.support': 'Suport',
    'footer.copyright': '2024 Embedded School. Platformă de educație open source.',
    'footer.operational': 'Toate sistemele operaționale',
    'footer.arduinoProgramming': 'Programare Arduino',
    'footer.embeddedC': 'C Înglobat',
    'footer.iotSystems': 'Sisteme IoT',
    'footer.automotiveElectronics': 'Electronică Auto',
  },
  ru: {
    // Navigation
    'nav.courses': 'Курсы',
    'nav.about': 'О нас',
    'nav.trainers': 'Инструкторы',
    'nav.blog': 'Блог',
    'nav.hardware': 'Оборудование',
    'nav.contact': 'Контакты',
    'nav.login': 'Войти',
    'nav.getStarted': 'Начать',
    
    // Hero Section
    'hero.title': 'Фабрика Инженеров - Школа Встраиваемых Систем',
    'hero.subtitle': 'Построй Свое Будущее',
    'hero.description': 'Присоединяйтесь к тысячам студентов, осваивающих передовые технологии через практические курсы по IoT, встраиваемым системам и многому другому.',
    'hero.startLearning': 'Начать Обучение Сегодня',
    'hero.watchDemo': 'Смотреть Демо',
    'hero.satisfaction': 'Уровень Удовлетворенности',
    'hero.activeStudents': 'Активные Студенты',
    'hero.expertCourses': 'Экспертные Курсы',
    
    // Featured Courses
    'courses.featured': 'Рекомендуемые Курсы',
    'courses.mostPopular': 'Самые Популярные Курсы',
    'courses.description': 'Откройте для себя наши самые популярные курсы, созданные отраслевыми экспертами',
    'courses.enrollNow': 'Записаться Сейчас',
    'courses.viewAll': 'Посмотреть Все Курсы',
    'courses.allAvailable': 'Все Доступные Курсы',
    'courses.masterEmbedded': 'Освойте Встраиваемые',
    'courses.systemsIoT': 'Системы и IoT',
    'courses.discover': 'Откройте для себя полные курсы по встраиваемым системам, IoT и программированию. Начните свой путь от новичка до профессионального уровня.',
    'courses.searchPlaceholder': 'Поиск курсов...',
    'courses.category': 'Категория:',
    'courses.level': 'Уровень:',
    'courses.found': 'Найдено',
    'courses.course': 'Курс',
    'courses.courses': 'Курсы',
    'courses.clearFilters': 'Очистить Фильтры',
    'courses.noCourses': 'Курсы не найдены',
    'courses.adjustSearch': 'Попробуйте изменить критерии поиска или просмотрите все курсы',
    'courses.viewAllCourses': 'Посмотреть Все Курсы',
    
    // Features
    'features.whyChoose': 'Почему Мы?',
    'features.title': 'Платформа Обучения Промышленных Стандартов',
    'features.description': 'Овладейте встраиваемыми системами с нашей всесторонней практической программой, разработанной профессионалами отрасли. От базовых концепций до продвинутых реальных приложений.',
    'features.handsOn': 'Практические Проекты',
    'features.handsOnDesc': 'Создавайте реальные проекты встраиваемых систем с первого дня',
    'features.industryTools': 'Промышленные Инструменты',
    'features.industryToolsDesc': 'Учитесь с теми же инструментами, которые используют профессионалы',
    'features.expertInstructors': 'Экспертные Инструкторы',
    'features.expertInstructorsDesc': 'Учитесь у опытных инженеров встраиваемых систем',
    'features.certification': 'Промышленная Сертификация',
    'features.certificationDesc': 'Получите признанные сертификаты, которые ценят работодатели. Все курсы соответствуют отраслевым стандартам и лучшим практикам.',
    
    // Stats
    'stats.activeStudents': 'Активные Студенты',
    'stats.coursesAvailable': 'Доступные Курсы',
    'stats.averageRating': 'Средний Рейтинг',
    'stats.successRate': 'Уровень Успеха',
    
    // Course Categories
    'category.embeddedC': 'Встраиваемый C',
    'category.arduino': 'Arduino',
    'category.iot': 'IoT Системы',
    'category.automotive': 'Автомобильные',
    'category.all': 'Все',
    
    // Course Levels
    'level.beginner': 'Начинающий',
    'level.intermediate': 'Средний',
    'level.advanced': 'Продвинутый',
    'level.all': 'Все',
    
    // Common
    'common.students': 'студенты',
    'common.weeks': 'недели',
    'common.readMore': 'Читать Далее',
    'common.learnMore': 'Узнать Больше',
    'common.home': 'Главная',
    'common.addToCart': 'Добавить в Корзину',
    'common.enrollNow': 'Записаться Сейчас',
    'common.inStock': 'В Наличии',
    'common.outOfStock': 'Нет в Наличии',
    'common.reviews': 'отзывы',
    
    // Professional Pack
    'pack.title': 'Профессиональный Пакет',
    'pack.careerPaths': 'Полные Карьерные Пути',
    'pack.description': 'Всеобъемлющие учебные треки, разработанные для конкретных инженерных ролей. Освойте несколько технологий в целенаправленных карьерных путях.',
    
    // Footer
    'footer.description': 'Расширяем возможности следующего поколения разработчиков встраиваемых систем с практическим, ориентированным на отрасль образованием.',
    'footer.courses': 'Курсы',
    'footer.company': 'Компания',
    'footer.resources': 'Ресурсы для Разработчиков',
    'footer.aboutUs': 'О Нас',
    'footer.contact': 'Контакты',
    'footer.blog': 'Блог',
    'footer.careers': 'Карьера',
    'footer.docs': 'Документация',
    'footer.api': 'Справочник API',
    'footer.community': 'Сообщество',
    'footer.support': 'Поддержка',
    'footer.copyright': '2024 Embedded School. Образовательная платформа с открытым исходным кодом.',
    'footer.operational': 'Все системы работают',
    'footer.arduinoProgramming': 'Программирование Arduino',
    'footer.embeddedC': 'Встраиваемый C',
    'footer.iotSystems': 'IoT Системы',
    'footer.automotiveElectronics': 'Автомобильная Электроника',
  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'ro' || savedLanguage === 'ru')) {
      setLanguage(savedLanguage);
    }
  }, []);

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string, defaultValue?: string): string => {
    return translations[language][key] || defaultValue || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
