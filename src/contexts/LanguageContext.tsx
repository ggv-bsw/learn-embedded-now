import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ro';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, defaultValue?: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation data
const translations = {
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
    
    // Course Levels
    'level.beginner': 'Beginner',
    'level.intermediate': 'Intermediate',
    'level.advanced': 'Advanced',
    
    // Common
    'common.students': 'students',
    'common.weeks': 'weeks',
    'common.readMore': 'Read More',
    'common.learnMore': 'Learn More',
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
    
    // Course Levels
    'level.beginner': 'Începător',
    'level.intermediate': 'Intermediar',
    'level.advanced': 'Avansat',
    
    // Common
    'common.students': 'studenți',
    'common.weeks': 'săptămâni',
    'common.readMore': 'Citește Mai Mult',
    'common.learnMore': 'Află Mai Mult',
  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'ro')) {
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