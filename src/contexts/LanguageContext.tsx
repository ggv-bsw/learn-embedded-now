import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "en" | "ro" | "ru";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, defaultValue?: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

// Translation data
const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    "nav.courses": "Courses",
    "nav.about": "About",
    "nav.trainers": "Trainers",
    "nav.blog": "Blog",
    "nav.hardware": "Hardware",
    "nav.contact": "Contact",
    "nav.login": "Login",
    "nav.getStarted": "Get Started",

    // Hero Section
    "hero.title": "Engineers Factory - Embedded School",
    "hero.subtitle": "Build Your Future",
    "hero.description":
      "Join thousands of students mastering cutting-edge technology through hands-on courses in IoT, embedded systems, and more.",
    "hero.startLearning": "Start Learning Today",
    "hero.watchDemo": "Watch Demo",
    "hero.satisfaction": "Satisfaction Rate",
    "hero.activeStudents": "Active Students",
    "hero.expertCourses": "Expert Courses",

    // Featured Courses
    "courses.featured": "Featured Courses",
    "courses.mostPopular": "Most Popular Courses",
    "courses.description":
      "Discover our most popular courses designed by industry experts",
    "courses.enrollNow": "Enroll Now",
    "courses.viewAll": "View All Courses",
    "courses.allAvailable": "All Courses Available",
    "courses.masterEmbedded": "Master Embedded",
    "courses.systemsIoT": "Systems & IoT",
    "courses.discover":
      "Discover comprehensive courses in embedded systems, IoT, and programming. Start your journey from beginner to professional level.",
    "courses.searchPlaceholder": "Search courses...",
    "courses.category": "Category:",
    "courses.level": "Level:",
    "courses.found": "Found",
    "courses.course": "Course",
    "courses.courses": "Courses",
    "courses.clearFilters": "Clear Filters",
    "courses.noCourses": "No courses found",
    "courses.adjustSearch":
      "Try adjusting your search criteria or browse all courses",
    "courses.viewAllCourses": "View All Courses",

    // Features
    "features.whyChoose": "Why Choose Us?",
    "features.title": "Industry-Standard Learning Platform",
    "features.description":
      "Master embedded systems with our comprehensive, hands-on curriculum designed by industry professionals. From basic concepts to advanced real-world applications.",
    "features.handsOn": "Hands-on Projects",
    "features.handsOnDesc": "Build real embedded systems projects from day one",
    "features.industryTools": "Industry-Standard Tools",
    "features.industryToolsDesc":
      "Learn with the same tools used by professionals",
    "features.expertInstructors": "Expert Instructors",
    "features.expertInstructorsDesc":
      "Learn from experienced embedded systems engineers",
    "features.certification": "Industry Certification",
    "features.certificationDesc":
      "Get recognized certificates that employers value. All courses align with industry standards and best practices.",

    // Stats
    "stats.activeStudents": "Active Students",
    "stats.coursesAvailable": "Courses Available",
    "stats.averageRating": "Average Rating",
    "stats.successRate": "Success Rate",

    // Course Categories
    "category.embeddedC": "Embedded C",
    "category.arduino": "Arduino",
    "category.iot": "IoT Systems",
    "category.automotive": "Automotive",
    "category.all": "All",

    // Course Levels
    "level.beginner": "Beginner",
    "level.intermediate": "Intermediate",
    "level.advanced": "Advanced",
    "level.all": "All",

    // Common
    "common.students": "students",
    "common.weeks": "weeks",
    "common.readMore": "Read More",
    "common.learnMore": "Learn More",
    "common.home": "Home",
    "common.addToCart": "Add to Cart",
    "common.enrollNow": "Enroll Now",
    "common.inStock": "In Stock",
    "common.outOfStock": "Out of Stock",
    "common.reviews": "reviews",
    "common.loading": "Loading...",

    // Professional Pack
    "pack.title": "Professional Pack",
    "pack.careerPaths": "Complete Career Paths",
    "pack.description":
      "Comprehensive learning tracks designed for specific engineering roles. Master multiple technologies in focused career paths.",

    // Footer
    "footer.description":
      "Empowering the next generation of embedded systems developers with practical, industry-focused education.",
    "footer.courses": "Courses",
    "footer.company": "Company",
    "footer.resources": "Developer Resources",
    "footer.aboutUs": "About Us",
    "footer.contact": "Contact",
    "footer.blog": "Blog",
    "footer.careers": "Careers",
    "footer.docs": "Documentation",
    "footer.api": "API Reference",
    "footer.community": "Community",
    "footer.support": "Support",
    "footer.copyright": "2024 Embedded School. Open source education platform.",
    "footer.operational": "All systems operational",
    "footer.arduinoProgramming": "Arduino Programming",
    "footer.embeddedC": "Embedded C",
    "footer.iotSystems": "IoT Systems",
    "footer.automotiveElectronics": "Automotive Electronics",

    // About Page
    "about.badge": "About Embedded School",
    "about.title": "Empowering the Next Generation of",
    "about.titleHighlight": "Embedded Engineers",
    "about.description":
      "Founded in Moldova with a vision to democratize embedded systems education across Eastern Europe. We bridge the gap between academic theory and industry practice.",

    // Stats
    "about.studentsTaught": "Students Taught",
    "about.courseCompletions": "Course Completions",
    "about.industryPartners": "Industry Partners",
    "about.countriesReached": "Countries Reached",

    // Mission Section
    "about.missionBadge": "Our Mission",
    "about.missionTitle": "Building the Future of Embedded Education",
    "about.missionText1":
      "To provide world-class embedded systems education that prepares students for successful careers in the rapidly evolving technology landscape. We believe that quality education should be accessible to everyone, regardless of their background.",
    "about.missionText2":
      "Since our founding in 2019, we've been committed to creating practical, industry-relevant courses that give our students the skills they need to excel in embedded systems development, IoT, and automotive electronics.",
    "about.joinMission": "Join Our Mission",
    "about.imageAlt": "Team collaboration",

    // Values Section
    "about.valuesBadge": "Our Values",
    "about.valuesTitle": "What Drives Us Forward",
    "about.valuesSubtitle":
      "The principles that guide everything we do at Embedded School",
    "about.excellenceTitle": "Excellence in Education",
    "about.excellenceDesc":
      "We are committed to providing the highest quality embedded systems education through practical, hands-on learning experiences.",
    "about.studentCenteredTitle": "Student-Centered Approach",
    "about.studentCenteredDesc":
      "Every decision we make is guided by what's best for our students' learning journey and career success.",
    "about.innovationTitle": "Continuous Innovation",
    "about.innovationDesc":
      "We constantly update our curriculum to reflect the latest industry trends and technological advancements.",
    "about.communityTitle": "Community Building",
    "about.communityDesc":
      "We foster a supportive community where students, instructors, and industry professionals collaborate and grow together.",

    // Team Section
    "about.teamBadge": "Meet The Team",
    "about.teamTitle": "Expert Developers & Educators",
    "about.teamSubtitle":
      "Industry professionals with decades of combined experience in embedded systems",
    "about.specialization": "Specialization:",
    "about.experience": "Experience:",
    "about.connect": "Connect",

    // Partners Section
    "about.partnersBadge": "Industry Partners",
    "about.partnersTitle": "Trusted by Leading Companies",
    "about.partnersSubtitle":
      "Collaborating with leading technology companies to provide real-world experience",

    // CTA Section
    "about.ctaBadge": "Join Our Community",
    "about.ctaTitle": "Ready to Join Our Community?",
    "about.ctaSubtitle":
      "Become part of a growing network of embedded systems professionals and enthusiasts.",
    "about.startLearning": "Start Learning Today",
    "about.contactTeam": "Contact Our Team",

    // Contact Page
    "contact.title": "We're Here to",
    "contact.titleHighlight": "Help You Succeed",
    "contact.description":
      "Have questions about our courses? Need guidance on your embedded systems journey? Our team of experts is ready to assist you every step of the way.",
    "contact.mainOffice": "Main Office",
    "contact.phoneNumbers": "Phone Numbers",
    "contact.emailSupport": "Email Support",
    "contact.officeHours": "Office Hours",
    "contact.sendMessage": "Send us a Message",
    "contact.fullName": "Full Name",
    "contact.emailAddress": "Email Address",
    "contact.subject": "Subject",
    "contact.message": "Message",
    "contact.sendButton": "Send Message",
    "contact.sending": "Sending...",
    "contact.needHelp": "Need Immediate Help?",
    "contact.callUs": "Call us directly",
    "contact.emailUs": "Email support",
    "contact.browseCourses": "Browse courses",
    "contact.findPerfectCourse": "Find the perfect course for you",
    "contact.faqTitle": "Frequently Asked Questions",
    "contact.faqSubtitle":
      "Quick answers to common questions about our courses and services",

    // Documentation
    "docs.badge": "Documentation",
    "docs.hero.title": "Everything You Need to",
    "docs.hero.titleHighlight": "Succeed",
    "docs.hero.description":
      "Comprehensive guides, tutorials, and technical documentation to help you master embedded systems development.",
    "docs.search.placeholder": "Search documentation...",
    "docs.quickLinks.community": "Community Forum",
    "docs.quickLinks.communityDesc": "Join discussions with other students",
    "docs.quickLinks.resources": "Technical Resources",
    "docs.quickLinks.resourcesDesc": "Hardware and tools documentation",
    "docs.category.all": "All",
    "docs.category.gettingStarted": "Getting Started",
    "docs.category.courseGuides": "Course Guides",
    "docs.category.technicalRef": "Technical Reference",
    "docs.category.toolsSetup": "Tools & Setup",
    "docs.category.faqs": "FAQs",
    "docs.section.gettingStarted.title": "Getting Started with Embedded School",
    "docs.section.gettingStarted.desc":
      "Learn how to begin your journey with our platform and courses",
    "docs.section.gettingStarted.enroll": "How to Enroll in a Course",
    "docs.section.gettingStarted.overview": "Platform Overview",
    "docs.section.gettingStarted.payment": "Payment Methods & Pricing",
    "docs.section.gettingStarted.certificate": "Certificate Programs",
    "docs.section.courseGuides.title": "Course-Specific Guides",
    "docs.section.courseGuides.desc":
      "Detailed guides for each course including setup and requirements",
    "docs.section.courseGuides.python": "Python Course Prerequisites",
    "docs.section.courseGuides.cpp": "C++ Development Environment Setup",
    "docs.section.courseGuides.pcb": "PCB Design Software Installation",
    "docs.section.courseGuides.testing": "Testing Tools Configuration",
    "docs.section.technicalRef.title": "Technical Documentation",
    "docs.section.technicalRef.desc":
      "In-depth technical references and API documentation",
    "docs.section.technicalRef.arduino": "Arduino Programming Reference",
    "docs.section.technicalRef.embeddedC": "Embedded C Best Practices",
    "docs.section.technicalRef.autosar": "AUTOSAR Architecture Guide",
    "docs.section.technicalRef.cmake": "CMake Build System Tutorial",
    "docs.section.toolsSetup.title": "Development Tools & Setup",
    "docs.section.toolsSetup.desc":
      "Setup guides for development environments and tools",
    "docs.section.toolsSetup.vscode": "VS Code Setup for Embedded Development",
    "docs.section.toolsSetup.git": "Git & GitHub for Beginners",
    "docs.section.toolsSetup.virtualEnv": "Virtual Environment with uv",
    "docs.section.toolsSetup.debugging": "Hardware Debugging Tools",
    "docs.section.faqs.title": "Frequently Asked Questions",
    "docs.section.faqs.desc":
      "Common questions and answers about our courses and platform",
    "docs.section.faqs.access": "Course Access & Duration",
    "docs.section.faqs.refund": "Refund Policy",
    "docs.section.faqs.support": "Technical Support",
    "docs.section.faqs.career": "Career Guidance & Job Placement",
    "docs.noResults.title": "No results found",
    "docs.noResults.message": "Try adjusting your search or filters",
    "docs.noResults.clear": "Clear Filters",
    "docs.cta.title": "Still Have Questions?",
    "docs.cta.description":
      "Our support team is here to help. Get in touch and we'll respond as quickly as possible.",
    "docs.cta.contact": "Contact Support",
    "docs.cta.community": "Join Community",
    "docs.duration.minRead": "min read",

    // Trainers Page
    "trainers.title": "Meet Our",
    "trainers.titleHighlight": "Expert Trainers",
    "trainers.description":
      "Learn from industry professionals with years of real-world experience in embedded systems, IoT development, and cutting-edge technology solutions.",
    "trainers.studentsTaught": "Students Taught",
    "trainers.averageRating": "Average Rating",
    "trainers.hoursExperience": "Hours Experience",
    "trainers.yourMentors": "Your Learning Mentors",
    "trainers.mentorsDescription":
      "Expert embedded systems engineers ready to guide your journey",
    "trainers.viewProfile": "View Profile",
    "trainers.requestOneToOne": "Request One-to-One",
    "trainers.expertise": "Expertise",
    "trainers.specialties": "Specialties",
    "trainers.students": "students",
    "trainers.yearsCombinedExp": "Years Combined Experience",
    "trainers.industryProjects": "Industry Projects",
    "trainers.studentsMentored": "Students Mentored",
    "trainers.readyToLearn": "Ready to Learn from the Best?",
    "trainers.readyDescription":
      "Join thousands of students who have advanced their careers with our expert trainers. Get personalized mentorship and hands-on guidance.",
    "trainers.browseAllCourses": "Browse All Courses",
    "trainers.scheduleConsultation": "Schedule Consultation",
    "trainers.becomeTrainer": "Become a",
    "trainers.becomeTrainerHighlight": "Trainer at Engineers Factory",
    "trainers.becomeTrainerDescription":
      "Are you an experienced embedded systems engineer or IoT specialist? Join our team of expert trainers and help shape the next generation of engineers. Share your knowledge and make a meaningful impact.",
    "trainers.flexibleTeaching": "Flexible Teaching",
    "trainers.flexibleDescription":
      "Set your own schedule and teach from anywhere",
    "trainers.expertRecognition": "Expert Recognition",
    "trainers.recognitionDescription":
      "Build your reputation in the embedded systems community",
    "trainers.competitivePay": "Competitive Pay",
    "trainers.payDescription":
      "Earn competitive rates for sharing your expertise",
    "trainers.requirements": "Requirements",
    "trainers.yearsExperience": "years of industry experience",
    "trainers.communicationSkills": "Strong communication skills",
    "trainers.embeddedExpertise": "Expertise in embedded systems or IoT",
    "trainers.passionTeaching": "Passion for teaching and mentoring",
    "trainers.applyToTeach": "Apply to Teach",
    "trainers.learnMore": "Learn More",
    "trainers.joinTeam": "Join Our Team",

    // Blog Page
    "blog.hero.badge": "A long time ago in a galaxy far, far away...",
    "blog.hero.title1": "THE EMBEDDED",
    "blog.hero.title2": "CHRONICLES",
    "blog.hero.subtitle":
      "Join the Rebellion against complex code. Learn the ways of the Force in embedded systems, Arduino mastery, and IoT wisdom from Jedi Masters across the galaxy.",
    "blog.hero.cta": "Begin Your Journey",
    "blog.featured.badge": "Featured Transmission",
    "blog.featured.title": "Latest from the Jedi Archives",
    "blog.featured.label": "Featured",
    "blog.featured.cta": "Read the Holocron",
    "blog.posts.title": "Chronicles from the Galaxy",
    "blog.category.all": "All",
    "blog.category.iot": "IoT",
    "blog.category.arduino": "Arduino",
    "blog.category.embeddedC": "Embedded C",
    "blog.category.debugging": "Debugging",
    "blog.category.architecture": "Architecture",
    "blog.category.security": "Security",
    "blog.empty": "No posts found in this category.",
    "blog.readMore": "Read More",
    "blog.newsletter.title": "Join the Rebel Alliance",
    "blog.newsletter.subtitle":
      "Receive transmissions from across the galaxy. Get the latest embedded systems wisdom delivered directly to your hologram projector.",
    "blog.newsletter.placeholder": "your.email@rebellion.com",
    "blog.newsletter.cta": "Join the Force",
    "blog.detail.backToBlog": "Back to Blog",
    "blog.detail.notFound": "Post Not Found",
    "blog.detail.notFoundMessage":
      "The blog post you're looking for doesn't exist.",
    "blog.detail.shareArticle": "Share this article",
    "blog.detail.copyLink": "Copy Link",
    "blog.detail.linkCopied":
      "Article link and description copied to clipboard!",
    "blog.detail.linkCopyFailed": "Failed to copy link",

    // Hardware Page
    "hardware.hero.badge": "Hardware Store",
    "hardware.hero.title": "Premium Development",
    "hardware.hero.subtitle": "Hardware & Boards",
    "hardware.hero.description":
      "Professional-grade development boards and microcontrollers for your embedded projects.",
    "hardware.hero.shopNow": "Shop Now",
    "hardware.hero.browseCategories": "Browse Categories",
    "hardware.category.allBoards": "All Boards",
    "hardware.category.arduino": "Arduino",
    "hardware.category.stm": "STM",
    "hardware.featured.badge": "Featured Products",
    "hardware.featured.title": "Professional Development Boards",
    "hardware.featured.description":
      "Hand-picked selection of the best microcontrollers and development platforms",
    "hardware.inStock": "In Stock",
    "hardware.outOfStock": "Out of Stock",
    "hardware.reviews": "reviews",
    "hardware.keySpecs": "Key Specifications:",
    "hardware.addToCart": "Add to Cart",
    "hardware.addedToCart": "Added to cart",
    "hardware.addedDescription": "has been added to your cart.",
    "hardware.features.badge": "Why Buy From Us?",
    "hardware.features.title": "Trusted by Developers Worldwide",
    "hardware.features.description":
      "Professional service and support for all your embedded development needs",
    "hardware.feature.quality.title": "Quality Guaranteed",
    "hardware.feature.quality.description":
      "All boards tested and verified before shipping",
    "hardware.feature.shipping.title": "Fast Shipping",
    "hardware.feature.shipping.description":
      "Same-day processing with 2-3 day delivery",
    "hardware.feature.support.title": "Technical Support",
    "hardware.feature.support.description":
      "Expert help with setup and troubleshooting",

    // Contact Page
    "contact.hero.badge": "Get In Touch",
    "contact.hero.title": "We're Here to",
    "contact.hero.titleHighlight": "Help You Succeed",
    "contact.hero.description":
      "Have questions about our courses? Need guidance on your embedded systems journey? Our team of experts is ready to assist you every step of the way.",
    "contact.info.mainOffice": "Main Office",
    "contact.info.phoneNumbers": "Phone Numbers",
    "contact.info.emailSupport": "Email Support",
    "contact.info.officeHours": "Office Hours",
    "contact.info.responseTime": "Response within 24hrs",
    "contact.info.hours.weekday": "Monday - Friday: 9:00 - 18:00",
    "contact.info.hours.saturday": "Saturday: 10:00 - 16:00",
    "contact.info.hours.sunday": "Sunday: Closed",
    "contact.form.title": "Send us a Message",
    "contact.form.fullName": "Full Name",
    "contact.form.fullNamePlaceholder": "Your full name",
    "contact.form.email": "Email Address",
    "contact.form.emailPlaceholder": "your.email@example.com",
    "contact.form.subject": "Subject",
    "contact.form.subjectPlaceholder": "What can we help you with?",
    "contact.form.message": "Message",
    "contact.form.messagePlaceholder": "Tell us more about your inquiry...",
    "contact.form.sending": "Sending...",
    "contact.form.send": "Send Message",
    "contact.form.success":
      "Message sent successfully! We'll get back to you within 24 hours.",
    "contact.form.error": "Failed to send message. Please try again.",
    "contact.map.title": "Our Main Office",
    "contact.quick.title": "Need Immediate Help?",
    "contact.quick.call": "Call us directly",
    "contact.quick.email": "Email support",
    "contact.quick.browse": "Browse courses",
    "contact.quick.browseDescription": "Find the perfect course for you",
    "contact.faq.badge": "FAQ",
    "contact.faq.title": "Frequently Asked Questions",
    "contact.faq.description":
      "Quick answers to common questions about our courses and services",
    "contact.faq.q1": "Do you offer courses in Romanian and Russian?",
    "contact.faq.a1":
      "Yes! All our courses are available in Romanian, Russian, and English. You can switch between languages anytime in your student dashboard.",
    "contact.faq.q2":
      "What equipment do I need for the embedded systems courses?",
    "contact.faq.a2":
      "We provide starter kits for most courses, including Arduino boards, sensors, and components. For advanced courses, we'll provide a detailed equipment list.",
    "contact.faq.q3": "Are there any prerequisites for your courses?",
    "contact.faq.a3":
      "Basic programming knowledge is helpful but not required for beginner courses. Each course page lists specific prerequisites if any.",
    "contact.faq.q4": "Do you offer certificates upon completion?",
    "contact.faq.a4":
      "Yes, all students receive industry-recognized certificates upon successful course completion. These are valued by employers across Moldova and Romania.",
    "contact.faq.q5": "Can I get help if I'm stuck during a course?",
    "contact.faq.a5":
      "Absolutely! We offer 24/7 community support, weekly live Q&A sessions, and one-on-one mentoring for premium students.",
    "contact.faq.notFound": "Can't find what you're looking for?",
    "contact.faq.askQuestion": "Ask a Question",
    "contact.cta.badge": "Ready to Start?",
    "contact.cta.title": "Ready to Start Your Journey?",
    "contact.cta.description":
      "Join thousands of students mastering embedded systems. Get started today with our beginner-friendly courses.",
    "contact.cta.browseCourses": "Browse Courses",
    "contact.cta.joinCommunity": "Join Community",

    // Documentation Page
    "docs.title": "Everything You Need to",
    "docs.titleHighlight": "Succeed",
    "docs.description":
      "Comprehensive guides, tutorials, and technical documentation to help you master embedded systems development.",
    "docs.searchPlaceholder": "Search documentation...",
    "docs.communityForum": "Community Forum",
    "docs.communityDescription": "Join discussions with other students",
    "docs.technicalResources": "Technical Resources",
    "docs.resourcesDescription": "Hardware and tools documentation",
    "docs.gettingStarted": "Getting Started",
    "docs.courseGuides": "Course Guides",
    "docs.technicalReference": "Technical Reference",
    "docs.toolsSetup": "Tools & Setup",
    "docs.faqs": "FAQs",
    "docs.noResults": "No results found",
    "docs.adjustSearch": "Try adjusting your search or filters",
    "docs.clearFilters": "Clear Filters",
    "docs.stillQuestions": "Still Have Questions?",
    "docs.supportDescription":
      "Our support team is here to help. Get in touch and we'll respond as quickly as possible.",
    "docs.contactSupport": "Contact Support",
    "docs.joinCommunity": "Join Community",

    // Junior Program Page
    "junior.weekend": "Weekend School for Juniors",
    "junior.title": "Build",
    "junior.titleHighlight": "Rockets of the Future",
    "junior.subtitle":
      "For Young Innovators Aged 12-18 • Weekend Classes • Hands-On Tech Projects • Future Career Skills",
    "junior.enrollNow": "Enroll Now - Limited Spots!",
    "junior.viewCurriculum": "View Curriculum",
    "junior.studentsTrained": "Students Trained",
    "junior.completionRate": "Completion Rate",
    "junior.realProjects": "Real Projects",
    "junior.parentRating": "Parent Rating",
    "junior.whyChoose": "Why Choose Our Junior Program?",
    "junior.whyDescription":
      "We transform young minds into tech innovators through project-based learning, industry mentorship, and cutting-edge technology exposure.",
    "junior.spacetech": "Space Technology",
    "junior.spacetechDesc":
      "Learn about satellites, rockets, and space exploration systems",
    "junior.aiRobotics": "AI & Robotics",
    "junior.aiDesc":
      "Build and program intelligent robots with machine learning",
    "junior.gameDev": "Game Development",
    "junior.gameDevDesc":
      "Create your own video games and interactive experiences",
    "junior.mobileApps": "Mobile Apps",
    "junior.mobileDesc": "Develop apps that control robots and IoT devices",

    // Index Page - Professional Packs
    "index.embeddedC": "Embedded C",
    "index.lowLevel": "Low-level programming",
    "index.iotSystems": "IoT Systems",
    "index.connectedDevices": "Connected devices",
    "index.professionalPack": "Professional Pack",
    "index.careerPaths": "Complete Career Paths",
    "index.careerPathsDesc":
      "Comprehensive learning tracks designed for specific engineering roles. Master multiple technologies in focused career paths.",
    "index.embeddedProfessional": "Embedded Systems Professional",
    "index.advanced": "Advanced",
    "index.embeddedProfDesc":
      "Complete path from C++ fundamentals to hardware design. Includes Software Testing & Automotive QA and PCB Design courses.",
    "index.duration": "Duration:",
    "index.level": "Level:",
    "index.coursesIncluded": "Courses Included:",
    "index.weeks": "weeks",
    "index.courses": "Courses",
    "index.save": "Save",
    "index.startCareerPath": "Start Career Path",
    "index.softwareDeveloper": "Software Developer Track",
    "index.beginnerIntermediate": "Beginner to Intermediate",
    "index.softwareDevDesc":
      "Master both Python and C++ from basics to advanced concepts. Perfect foundation for software development careers.",
    "index.completeBundle": "Complete Engineering Bundle",
    "index.allLevels": "All Levels",
    "index.completeBundleDesc":
      "Full access to all available courses. From Python basics to automotive QA and PCB design. Complete engineering education.",
    "index.activeCommunity": "Active Community",
    "index.communityDesc":
      "Join a vibrant community of developers, mentors, and industry experts. Get help, share projects, and network.",
    "index.onlineNow": "Online now:",
    "index.members": "members",
    "index.certifiedThisMonth": "certified this month",

    // Forms - Common
    "form.title": "Start Your Learning Journey",
    "form.description":
      "Fill out this form and we'll get back to you with course details and enrollment information.",
    "form.careerPathDescription":
      "You're applying for a complete career path. We'll contact you with detailed information about all included courses.",
    "form.name": "First Name",
    "form.surname": "Last Name",
    "form.namePlaceholder": "Enter your first name",
    "form.surnamePlaceholder": "Enter your last name",
    "form.email": "Email Address",
    "form.emailPlaceholder": "Enter your email address",
    "form.phone": "Phone Number",
    "form.phonePlaceholder": "Enter your phone number",
    "form.message": "Additional Message",
    "form.messagePlaceholder":
      "Tell us about your goals or any specific questions...",
    "form.course": "Course of Interest",
    "form.coursePlaceholder": "Select a course you're interested in",
    "form.cancel": "Cancel",
    "form.submit": "Submit Inquiry",
    "form.submitting": "Submitting...",
    "form.submitCareerPath": "Apply for Career Path",
    "form.selectedCareerPath": "Selected Career Path",
    "form.includesCourses": "Includes",
    "form.courses": "courses",
    "form.courseSingular": "course",
    "form.missingInfo": "Missing Information",
    "form.fillRequired":
      "Please fill in all required fields (Name, Surname, and Course selection).",
    "form.inquirySubmitted": "Inquiry Submitted!",
    "form.thankYou":
      "Thank you for your interest! We'll contact you soon with more information.",
    "form.submissionFailed": "Submission Failed",
    "form.errorMessage":
      "There was an error submitting your inquiry. Please try again.",

    // Junior Program Form
    "juniorForm.title": "Join Junior Program",
    "juniorForm.description":
      "Sign up for our weekend school program for juniors aged 12-18. Let's build the rockets of the future together!",
    "juniorForm.name": "Name",
    "juniorForm.surname": "Surname",
    "juniorForm.namePlaceholder": "Enter your name",
    "juniorForm.surnamePlaceholder": "Enter your surname",
    "juniorForm.email": "Email",
    "juniorForm.emailPlaceholder": "Enter your email",
    "juniorForm.phone": "Phone Number",
    "juniorForm.phonePlaceholder": "Enter your phone number",
    "juniorForm.cancel": "Cancel",
    "juniorForm.joinProgram": "Join Program",
    "juniorForm.submitting": "Submitting...",
    "juniorForm.missingInfo": "Missing Information",
    "juniorForm.fillRequired":
      "Please fill in all required fields (name, surname, and email).",
    "juniorForm.success": "Success!",
    "juniorForm.successMessage":
      "Your junior program inquiry has been submitted successfully. We'll contact you soon!",
    "juniorForm.error": "Error",
    "juniorForm.errorMessage":
      "Failed to submit your inquiry. Please try again.",

    // One-to-One Meeting Form
    "meetingForm.title": "Request One-to-One Session",
    "meetingForm.description":
      "Fill in your details to schedule a one-to-one meeting with",
    "meetingForm.name": "Name",
    "meetingForm.email": "Email",
    "meetingForm.phone": "Phone Number",
    "meetingForm.preferredDate": "Preferred Date/Time",
    "meetingForm.message": "Message",
    "meetingForm.namePlaceholder": "Your full name",
    "meetingForm.emailPlaceholder": "your.email@example.com",
    "meetingForm.phonePlaceholder": "+1 234 567 8900",
    "meetingForm.datePlaceholder": "e.g., Next Monday afternoon",
    "meetingForm.messagePlaceholder":
      "Tell us about your learning goals or any specific topics you'd like to discuss...",
    "meetingForm.cancel": "Cancel",
    "meetingForm.requestButton": "Request One-to-One",
    "meetingForm.submitting": "Submitting...",
    "meetingForm.missingInfo": "Missing Information",
    "meetingForm.fillRequired":
      "Please fill in all required fields (Name and Email).",
    "meetingForm.success": "Request Submitted!",
    "meetingForm.successMessage":
      "Your one-to-one meeting request with {trainer} has been received. We'll contact you soon.",
    "meetingForm.error": "Submission Failed",
    "meetingForm.errorMessage":
      "There was an error submitting your request. Please try again.",

    // Trainer Application Form
    "trainerForm.title": "Apply to Become a Trainer",
    "trainerForm.description":
      "Join our team of expert trainers and help shape the next generation of embedded systems engineers. Fill out the form below and we'll be in touch soon.",
    "trainerForm.fullName": "Full Name",
    "trainerForm.namePlaceholder": "Enter your full name",
    "trainerForm.email": "Email Address",
    "trainerForm.emailPlaceholder": "your.email@example.com",
    "trainerForm.phone": "Phone Number",
    "trainerForm.phonePlaceholder": "+373 ________",
    "trainerForm.expertise": "Primary Expertise Area",
    "trainerForm.expertisePlaceholder": "e.g., Embedded Systems, IoT",
    "trainerForm.experienceYears": "Years of Experience",
    "trainerForm.experienceYearsPlaceholder": "5",
    "trainerForm.linkedinUrl": "LinkedIn Profile URL",
    "trainerForm.linkedinPlaceholder": "https://linkedin.com/in/...",
    "trainerForm.portfolioUrl": "Portfolio/Website URL",
    "trainerForm.portfolioPlaceholder": "https://yourwebsite.com",
    "trainerForm.bio": "Professional Bio",
    "trainerForm.bioPlaceholder":
      "Tell us about your professional background, achievements, and expertise...",
    "trainerForm.whyTeach": "Why Do You Want to Teach?",
    "trainerForm.whyTeachPlaceholder":
      "Share your motivation for becoming a trainer and what you hope to bring to our students...",
    "trainerForm.cancel": "Cancel",
    "trainerForm.submit": "Submit Application",
    "trainerForm.submitting": "Submitting...",
    "trainerForm.missingInfo": "Missing Information",
    "trainerForm.fillRequired": "Please fill in all required fields.",
    "trainerForm.invalidExperience": "Invalid Experience",
    "trainerForm.validYears":
      "Please enter a valid number of years of experience.",
    "trainerForm.success": "Application Submitted!",
    "trainerForm.successMessage":
      "Thank you for your interest in becoming a trainer! We'll review your application and get back to you soon.",
    "trainerForm.error": "Submission Failed",
    "trainerForm.errorMessage":
      "There was an error submitting your application. Please try again.",

    // Courses Page - Detailed
    "coursesPage.allAvailable": "All Courses Available",
    "coursesPage.masterEmbedded": "Master Embedded",
    "coursesPage.systemsIot": "Systems & IoT",
    "coursesPage.discover":
      "Explore comprehensive IT courses at Embedded School. Master embedded systems, IoT, and programming through hands-on training. Start your journey from beginner to professional level.",
    "coursesPage.coursesLabel": "Courses",
    "coursesPage.studentsLabel": "Students",
    "coursesPage.avgRating": "Avg Rating",
    "coursesPage.searchPlaceholder":
      "Search courses by title, description, or keywords...",
    "coursesPage.category": "Category:",
    "coursesPage.level": "Level:",
    "coursesPage.found": "Found",
    "coursesPage.coursesFound": "Courses Found",
    "coursesPage.courseFound": "Course Found",
    "coursesPage.professionalEducation":
      "Professional embedded systems education",
    "coursesPage.clearFilters": "Clear Filters",
    "coursesPage.noCoursesFound": "No courses found",
    "coursesPage.adjustSearch":
      "Try adjusting your search criteria or browse all courses",
    "coursesPage.viewAllCourses": "View All Courses",
    "coursesPage.enrollNow": "Enroll Now",
    "coursesPage.professionalPack": "Professional Pack",
    "coursesPage.completeCareerPaths": "Complete Career Paths",
    "coursesPage.careerPathsDescription":
      "Comprehensive learning tracks designed for specific engineering roles. Master multiple technologies in focused career paths.",
    "coursesPage.embeddedProfessional": "Embedded Systems Professional",
    "coursesPage.advanced": "Advanced",
    "coursesPage.embeddedProfDesc":
      "Complete path from C++ fundamentals to hardware design. Includes Software Testing & Automotive QA and PCB Design courses.",
    "coursesPage.duration": "Duration:",
    "coursesPage.levelLabel": "Level:",
    "coursesPage.coursesIncluded": "Courses Included:",
    "coursesPage.weeks": "weeks",
    "coursesPage.save": "Save",
    "coursesPage.startCareerPath": "Start Career Path",
    "coursesPage.softwareDeveloper": "Software Developer Track",
    "coursesPage.beginnerIntermediate": "Beginner to Intermediate",
    "coursesPage.softwareDevDesc":
      "Master both Python and C++ from basics to advanced concepts. Perfect foundation for software development careers.",
    "coursesPage.completeBundle": "Complete Engineering Bundle",
    "coursesPage.allLevels": "All Levels",
    "coursesPage.completeBundleDesc":
      "Full access to all available courses. From Python basics to automotive QA and PCB design. Complete engineering education.",

    // Courses Page - CTA Section
    "coursesPage.needSpecific": "Need Something Specific?",
    "coursesPage.cantFind": "Can't Find What You're Looking For?",
    "coursesPage.cantFindDesc":
      "We're constantly adding new courses. Contact us to suggest a topic or get notified about upcoming releases.",
    "coursesPage.customCurriculum": "Custom Curriculum",
    "coursesPage.customCurriculumDesc":
      "Tailored courses for your specific needs",
    "coursesPage.expertInstructors": "Expert Instructors",
    "coursesPage.expertInstructorsDesc": "Learn from industry professionals",
    "coursesPage.earlyAccess": "Early Access",
    "coursesPage.earlyAccessDesc": "Get notified about new releases first",
    "coursesPage.contactUs": "Contact Us",
    "coursesPage.subscribeUpdates": "Subscribe to Updates",

    // Course Detail Page
    "courseDetail.home": "Home",
    "courseDetail.courses": "Courses",
    "courseDetail.reviews": "reviews",
    "courseDetail.students": "students",
    "courseDetail.updated": "Updated",
    "courseDetail.certificateIncluded": "Certificate included",
    "courseDetail.previewCourse": "Preview Course",
    "courseDetail.overview": "Overview",
    "courseDetail.curriculum": "Curriculum",
    "courseDetail.instructor": "Instructor",
    "courseDetail.reviewsTab": "Reviews",
    "courseDetail.courseDescription": "Course Description",
    "courseDetail.whatYouLearn": "What You'll Learn",
    "courseDetail.requirements": "Requirements",
    "courseDetail.courseCurriculum": "Course Curriculum",
    "courseDetail.modules": "modules",
    "courseDetail.lessons": "lessons",
    "courseDetail.rating": "Rating",
    "courseDetail.studentsLabel": "Students",
    "courseDetail.experience": "Experience",
    "courseDetail.coursesLabel": "Courses",
    "courseDetail.studentReviews": "Student Reviews",
    "courseDetail.reviewsDisplay": "Reviews will be displayed here",
    "courseDetail.enrollNow": "Enroll Now",
    "courseDetail.addToCart": "Add to Cart",
    "courseDetail.share": "Share",
    "courseDetail.moneyBack": "30-day money-back guarantee",
    "courseDetail.courseInformation": "Course Information",
    "courseDetail.level": "Level",
    "courseDetail.duration": "Duration",
    "courseDetail.lessonsLabel": "Lessons",
    "courseDetail.language": "Language",
    "courseDetail.certificate": "Certificate",
    "courseDetail.yes": "Yes",
    "courseDetail.limitedOffer": "50% OFF - Limited Time",
    "courseDetail.notFound": "Course not found",
    "courseDetail.addedToCart": "Course added to cart!",
    "courseDetail.sharedSuccess": "Course shared successfully!",
    "courseDetail.shareFailed": "Failed to share course",
    "courseDetail.linkCopied": "Link copied to clipboard!",
    "courseDetail.copyFailed": "Failed to copy link",

    // Junior Section on Index Page
    "index.juniorProgram": "Junior Program",
    "index.weekendSchool": "Weekend School for Juniors",
    "index.buildRockets": "Build Rockets of the Future",
    "index.juniorDescription":
      "Designed for young innovators aged 12-18 years old. Our weekend program introduces teenagers to embedded systems, robotics, and space technology through hands-on projects and interactive learning experiences.",
    "index.interactiveLearning": "Interactive Learning",
    "index.interactiveLearningDesc":
      "Learn programming and electronics through games, robots, and real projects",
    "index.futureSkills": "Future Skills",
    "index.futureSkillsDesc":
      "Develop problem-solving, creativity, and technical skills for tomorrow's careers",
    "index.weekendSchedule": "Weekend Schedule",
    "index.weekendScheduleDesc":
      "Flexible weekend classes that don't interfere with school commitments",
    "index.joinJuniorProgram": "Join Junior Program",
    "index.learnMore": "Learn More",
    "index.learnMoreJunior": "Learn More About Junior Program",

    // CTA Section
    "index.startJourney": "Start Your Journey",
    "index.readyToBuild": "Ready to Build the Future?",
    "index.ctaDescription":
      "Join thousands of developers mastering embedded systems. Start with our free course preview and see why professionals choose Embedded School.",
    "index.browseCoursesBtn": "Browse All Courses",
    "index.contactUsBtn": "Contact Us",

    // Junior Program Page - More translations
    "junior.ageGroups": "Programs by Age Group",
    "junior.yearRange": "years",
    "junior.explorer": "Explorer",
    "junior.innovator": "Innovator",
    "junior.creator": "Creator",
    "junior.basicRobots": "Basic robots",
    "junior.simpleGames": "Simple games",
    "junior.ledCircuits": "LED circuits",
    "junior.smartDevices": "Smart devices",
    "junior.sensorNetworks": "Sensor networks",
    "junior.aiSystems": "AI systems",
    "junior.advancedRobotics": "Advanced robotics",
    "junior.industryProjects": "Industry projects",
    "junior.foundationalProgramming": "Foundational programming & electronics",
    "junior.advancedSystems": "Advanced systems & IoT",
    "junior.realWorldProjects": "Real-world projects & specializations",
  },
  ro: {
    // Navigation
    "nav.courses": "Cursuri",
    "nav.about": "Despre",
    "nav.trainers": "Instructori",
    "nav.blog": "Blog",
    "nav.hardware": "Hardware",
    "nav.contact": "Contact",
    "nav.login": "Conectare",
    "nav.getStarted": "Începe Acum",

    // Hero Section
    "hero.title": "Fabrica de Ingineri - Embedded School",
    "hero.subtitle": "Construiește-ți Viitorul",
    "hero.description":
      "Alătură-te miilor de studenți care stăpânesc tehnologia de vârf prin cursuri practice în IoT, sisteme înglobate și multe altele.",
    "hero.startLearning": "Începe să Înveți Astăzi",
    "hero.watchDemo": "Vizionează Demo",
    "hero.satisfaction": "Rata de Satisfacție",
    "hero.activeStudents": "Studenți Activi",
    "hero.expertCourses": "Cursuri de Expert",

    // Featured Courses
    "courses.featured": "Cursuri Recomandate",
    "courses.mostPopular": "Cele Mai Populare Cursuri",
    "courses.description":
      "Descoperă cele mai populare cursuri create de experți din industrie",
    "courses.enrollNow": "Înscrie-te Acum",
    "courses.viewAll": "Vezi Toate Cursurile",
    "courses.allAvailable": "Toate Cursurile Disponibile",
    "courses.masterEmbedded": "Stăpânește Sistemele",
    "courses.systemsIoT": "Înglobate & IoT",
    "courses.discover":
      "Descoperă cursuri complete de sisteme înglobate, IoT și programare. Începe călătoria ta de la nivel începător la nivel profesional.",
    "courses.searchPlaceholder": "Caută cursuri...",
    "courses.category": "Categorie:",
    "courses.level": "Nivel:",
    "courses.found": "Găsite",
    "courses.course": "Curs",
    "courses.courses": "Cursuri",
    "courses.clearFilters": "Șterge Filtrele",
    "courses.noCourses": "Niciun curs găsit",
    "courses.adjustSearch":
      "Încearcă să ajustezi criteriile de căutare sau vezi toate cursurile",
    "courses.viewAllCourses": "Vezi Toate Cursurile",

    // Features
    "features.whyChoose": "De Ce Să Ne Alegi?",
    "features.title": "Platformă de Învățare Conform Standardelor Industriei",
    "features.description":
      "Stăpânește sistemele înglobate cu curriculum-ul nostru cuprinzător și practic, conceput de profesioniști din industrie. De la concepte de bază la aplicații avansate din lumea reală.",
    "features.handsOn": "Proiecte Practice",
    "features.handsOnDesc":
      "Construiește proiecte reale de sisteme înglobate din prima zi",
    "features.industryTools": "Instrumente Standard din Industrie",
    "features.industryToolsDesc":
      "Învață cu aceleași instrumente folosite de profesioniști",
    "features.expertInstructors": "Instructori Experți",
    "features.expertInstructorsDesc":
      "Învață de la ingineri experimentați în sisteme înglobate",
    "features.certification": "Certificare din Industrie",
    "features.certificationDesc":
      "Obține certificate recunoscute care sunt apreciate de angajatori. Toate cursurile se aliniază cu standardele și practicile din industrie.",

    // Stats
    "stats.activeStudents": "Studenți Activi",
    "stats.coursesAvailable": "Cursuri Disponibile",
    "stats.averageRating": "Rating Mediu",
    "stats.successRate": "Rata de Succes",

    // Course Categories
    "category.embeddedC": "C Înglobat",
    "category.arduino": "Arduino",
    "category.iot": "Sisteme IoT",
    "category.automotive": "Automotive",
    "category.all": "Toate",

    // Course Levels
    "level.beginner": "Începător",
    "level.intermediate": "Intermediar",
    "level.advanced": "Avansat",
    "level.all": "Toate",

    // Common
    "common.students": "studenți",
    "common.weeks": "săptămâni",
    "common.readMore": "Citește Mai Mult",
    "common.learnMore": "Află Mai Mult",
    "common.home": "Acasă",
    "common.addToCart": "Adaugă în Coș",
    "common.enrollNow": "Înscrie-te Acum",
    "common.inStock": "În Stoc",
    "common.outOfStock": "Stoc Epuizat",
    "common.reviews": "recenzii",
    "common.loading": "Se încarcă...",

    // Professional Pack
    "pack.title": "Pachet Profesional",
    "pack.careerPaths": "Trasee de Carieră Complete",
    "pack.description":
      "Trasee de învățare cuprinzătoare concepute pentru roluri specifice de inginerie. Stăpânește tehnologii multiple în trasee de carieră focalizate.",

    // Footer
    "footer.description":
      "Împuternicim noua generație de dezvoltatori de sisteme înglobate cu educație practică, orientată către industrie.",
    "footer.courses": "Cursuri",
    "footer.company": "Companie",
    "footer.resources": "Resurse pentru Dezvoltatori",
    "footer.aboutUs": "Despre Noi",
    "footer.contact": "Contact",
    "footer.blog": "Blog",
    "footer.careers": "Cariere",
    "footer.docs": "Documentație",
    "footer.api": "Referință API",
    "footer.community": "Comunitate",
    "footer.support": "Suport",
    "footer.copyright":
      "2024 Embedded School. Platformă de educație open source.",
    "footer.operational": "Toate sistemele operaționale",
    "footer.arduinoProgramming": "Programare Arduino",
    "footer.embeddedC": "C Înglobat",
    "footer.iotSystems": "Sisteme IoT",
    "footer.automotiveElectronics": "Electronică Auto",

    // About Page
    "about.badge": "Despre Embedded School",
    "about.title": "Împuternicim Noua Generație de",
    "about.titleHighlight": "Ingineri Înglobați",
    "about.description":
      "Fondată în Moldova cu viziunea de a democratiza educația sistemelor înglobate în Europa de Est. Comblăm diferența între teoria academică și practica industrială.",

    // Stats
    "about.studentsTaught": "Studenți Predați",
    "about.courseCompletions": "Cursuri Finalizate",
    "about.industryPartners": "Parteneri din Industrie",
    "about.countriesReached": "Țări Atinse",

    // Mission Section
    "about.missionBadge": "Misiunea Noastră",
    "about.missionTitle": "Construim Viitorul Educației Înglobate",
    "about.missionText1":
      "Să oferim educație de clasă mondială în sisteme înglobate care pregătește studenții pentru cariere de succes în peisajul tehnologic în rapidă evoluție. Credem că educația de calitate ar trebui să fie accesibilă tuturor, indiferent de background.",
    "about.missionText2":
      "Din 2019, ne-am angajat să creăm cursuri practice, relevante pentru industrie, care le oferă studenților noștri abilitățile necesare pentru a excela în dezvoltarea sistemelor înglobate, IoT și electronică auto.",
    "about.joinMission": "Alătură-te Misiunii Noastre",
    "about.imageAlt": "Colaborare în echipă",

    // Values Section
    "about.valuesBadge": "Valorile Noastre",
    "about.valuesTitle": "Ce Ne Conduce Înainte",
    "about.valuesSubtitle":
      "Principiile care ghidează tot ceea ce facem la Embedded School",
    "about.excellenceTitle": "Excelență în Educație",
    "about.excellenceDesc":
      "Ne angajăm să oferim educație de cea mai înaltă calitate în sisteme înglobate prin experiențe practice de învățare.",
    "about.studentCenteredTitle": "Abordare Centrată pe Student",
    "about.studentCenteredDesc":
      "Fiecare decizie pe care o luăm este ghidată de ceea ce este mai bun pentru călătoria de învățare și succesul în carieră al studenților noștri.",
    "about.innovationTitle": "Inovație Continuă",
    "about.innovationDesc":
      "Actualizăm constant curriculum-ul nostru pentru a reflecta cele mai recente tendințe din industrie și progrese tehnologice.",
    "about.communityTitle": "Construirea Comunității",
    "about.communityDesc":
      "Promovăm o comunitate de susținere unde studenții, instructorii și profesioniștii din industrie colaborează și cresc împreună.",

    // Team Section
    "about.teamBadge": "Cunoaște Echipa",
    "about.teamTitle": "Dezvoltatori și Educatori Experți",
    "about.teamSubtitle":
      "Profesioniști din industrie cu decenii de experiență combinată în sisteme înglobate",
    "about.specialization": "Specializare:",
    "about.experience": "Experiență:",
    "about.connect": "Conectează-te",

    // Partners Section
    "about.partnersBadge": "Parteneri din Industrie",
    "about.partnersTitle": "De Încredere pentru Companii de Top",
    "about.partnersSubtitle":
      "Colaborăm cu companii tehnologice de top pentru a oferi experiență din lumea reală",

    // CTA Section
    "about.ctaBadge": "Alătură-te Comunității",
    "about.ctaTitle": "Gata să Te Alături Comunității Noastre?",
    "about.ctaSubtitle":
      "Devino parte dintr-o rețea în creștere de profesioniști și entuziaști ai sistemelor înglobate.",
    "about.startLearning": "Începe să Înveți Astăzi",
    "about.contactTeam": "Contactează Echipa Noastră",

    // Contact Page
    "contact.title": "Suntem Aici să",
    "contact.titleHighlight": "Te Ajutăm să Reușești",
    "contact.description":
      "Ai întrebări despre cursurile noastre? Ai nevoie de îndrumare în călătoria ta cu sisteme înglobate? Echipa noastră de experți este gata să te asiste la fiecare pas.",
    "contact.mainOffice": "Biroul Principal",
    "contact.phoneNumbers": "Numere de Telefon",
    "contact.emailSupport": "Suport Email",
    "contact.officeHours": "Orele de Birou",
    "contact.sendMessage": "Trimite-ne un Mesaj",
    "contact.fullName": "Nume Complet",
    "contact.emailAddress": "Adresa de Email",
    "contact.subject": "Subiect",
    "contact.message": "Mesaj",
    "contact.sendButton": "Trimite Mesaj",
    "contact.sending": "Se trimite...",
    "contact.needHelp": "Ai Nevoie de Ajutor Imediat?",
    "contact.callUs": "Sună-ne direct",
    "contact.emailUs": "Suport email",
    "contact.browseCourses": "Răsfoiește cursurile",
    "contact.findPerfectCourse": "Găsește cursul perfect pentru tine",
    "contact.faqTitle": "Întrebări Frecvente",
    "contact.faqSubtitle":
      "Răspunsuri rapide la întrebări comune despre cursurile și serviciile noastre",

    // Documentation
    "docs.badge": "Documentație",
    "docs.hero.title": "Tot Ce Ai Nevoie Pentru a",
    "docs.hero.titleHighlight": "Reuși",
    "docs.hero.description":
      "Ghiduri complete, tutoriale și documentație tehnică pentru a-ți stăpâni dezvoltarea sistemelor embedded.",
    "docs.search.placeholder": "Caută în documentație...",
    "docs.quickLinks.community": "Forum Comunitate",
    "docs.quickLinks.communityDesc": "Alătură-te discuțiilor cu alți studenți",
    "docs.quickLinks.resources": "Resurse Tehnice",
    "docs.quickLinks.resourcesDesc": "Documentație hardware și instrumente",
    "docs.category.all": "Toate",
    "docs.category.gettingStarted": "Primii Pași",
    "docs.category.courseGuides": "Ghiduri Cursuri",
    "docs.category.technicalRef": "Referință Tehnică",
    "docs.category.toolsSetup": "Instrumente & Configurare",
    "docs.category.faqs": "Întrebări Frecvente",
    "docs.section.gettingStarted.title": "Primii Pași cu Embedded School",
    "docs.section.gettingStarted.desc":
      "Învață cum să începi călătoria cu platforma și cursurile noastre",
    "docs.section.gettingStarted.enroll": "Cum să te Înscrii la un Curs",
    "docs.section.gettingStarted.overview": "Prezentare Platformă",
    "docs.section.gettingStarted.payment": "Metode de Plată & Prețuri",
    "docs.section.gettingStarted.certificate": "Programe de Certificare",
    "docs.section.courseGuides.title": "Ghiduri Specifice Cursurilor",
    "docs.section.courseGuides.desc":
      "Ghiduri detaliate pentru fiecare curs incluzând configurare și cerințe",
    "docs.section.courseGuides.python": "Prerequisite Curs Python",
    "docs.section.courseGuides.cpp": "Configurare Mediu Dezvoltare C++",
    "docs.section.courseGuides.pcb": "Instalare Software Design PCB",
    "docs.section.courseGuides.testing": "Configurare Instrumente Testare",
    "docs.section.technicalRef.title": "Documentație Tehnică",
    "docs.section.technicalRef.desc":
      "Referințe tehnice aprofundate și documentație API",
    "docs.section.technicalRef.arduino": "Referință Programare Arduino",
    "docs.section.technicalRef.embeddedC": "Bune Practici Embedded C",
    "docs.section.technicalRef.autosar": "Ghid Arhitectură AUTOSAR",
    "docs.section.technicalRef.cmake": "Tutorial Sistem Build CMake",
    "docs.section.toolsSetup.title": "Instrumente Dezvoltare & Configurare",
    "docs.section.toolsSetup.desc":
      "Ghiduri de configurare pentru medii de dezvoltare și instrumente",
    "docs.section.toolsSetup.vscode":
      "Configurare VS Code pentru Dezvoltare Embedded",
    "docs.section.toolsSetup.git": "Git & GitHub pentru Începători",
    "docs.section.toolsSetup.virtualEnv": "Mediu Virtual cu uv",
    "docs.section.toolsSetup.debugging": "Instrumente Debugging Hardware",
    "docs.section.faqs.title": "Întrebări Frecvente",
    "docs.section.faqs.desc":
      "Întrebări și răspunsuri comune despre cursurile și platforma noastră",
    "docs.section.faqs.access": "Acces Curs & Durată",
    "docs.section.faqs.refund": "Politica de Rambursare",
    "docs.section.faqs.support": "Suport Tehnic",
    "docs.section.faqs.career": "Orientare Carieră & Plasament Joburi",
    "docs.noResults.title": "Nu s-au găsit rezultate",
    "docs.noResults.message": "Încearcă să ajustezi căutarea sau filtrele",
    "docs.noResults.clear": "Șterge Filtrele",
    "docs.cta.title": "Mai Ai Întrebări?",
    "docs.cta.description":
      "Echipa noastră de suport este aici să te ajute. Contactează-ne și vom răspunde cât mai rapid posibil.",
    "docs.cta.contact": "Contactează Suport",
    "docs.cta.community": "Alătură-te Comunității",
    "docs.duration.minRead": "min citire",

    // Trainers Page
    "trainers.title": "Cunoaște",
    "trainers.titleHighlight": "Instructorii Noștri Experți",
    "trainers.description":
      "Învață de la profesioniști din industrie cu ani de experiență reală în sisteme înglobate, dezvoltare IoT și soluții tehnologice de ultimă oră.",
    "trainers.studentsTaught": "Studenți Predați",
    "trainers.averageRating": "Rating Mediu",
    "trainers.hoursExperience": "Ore de Experiență",
    "trainers.yourMentors": "Mentorii Tăi de Învățare",
    "trainers.mentorsDescription":
      "Ingineri experți în sisteme înglobate gata să-ți ghideze călătoria",
    "trainers.viewProfile": "Vezi Profilul",
    "trainers.requestOneToOne": "Solicită Întâlnire Individuală",
    "trainers.expertise": "Expertiză",
    "trainers.specialties": "Specializări",
    "trainers.students": "studenți",
    "trainers.yearsCombinedExp": "Ani de Experiență Combinată",
    "trainers.industryProjects": "Proiecte din Industrie",
    "trainers.studentsMentored": "Studenți Mentorați",
    "trainers.readyToLearn": "Gata să Înveți de la Cei Mai Buni?",
    "trainers.readyDescription":
      "Alătură-te miilor de studenți care și-au avansat carierele cu instructorii noștri experți. Obține mentorat personalizat și îndrumare practică.",
    "trainers.browseAllCourses": "Răsfoiește Toate Cursurile",
    "trainers.scheduleConsultation": "Programează Consultație",
    "trainers.becomeTrainer": "Devino",
    "trainers.becomeTrainerHighlight": "Instructor la Fabrica de Ingineri",
    "trainers.becomeTrainerDescription":
      "Ești un inginer experimentat în sisteme înglobate sau specialist IoT? Alătură-te echipei noastre de instructori experți și ajută-ne să modelăm următoarea generație de ingineri. Împărtășește-ți cunoștințele și fă un impact semnificativ.",
    "trainers.flexibleTeaching": "Predare Flexibilă",
    "trainers.flexibleDescription":
      "Stabilește-ți propriul program și predă de oriunde",
    "trainers.expertRecognition": "Recunoaștere Expert",
    "trainers.recognitionDescription":
      "Construiește-ți reputația în comunitatea sistemelor înglobate",
    "trainers.competitivePay": "Salarizare Competitivă",
    "trainers.payDescription":
      "Câștigă rate competitive pentru împărtășirea expertizei tale",
    "trainers.requirements": "Cerințe",
    "trainers.yearsExperience": "ani de experiență în industrie",
    "trainers.communicationSkills": "Abilități puternice de comunicare",
    "trainers.embeddedExpertise": "Expertiză în sisteme înglobate sau IoT",
    "trainers.passionTeaching": "Pasiune pentru predare și mentorat",
    "trainers.applyToTeach": "Aplică pentru Predare",
    "trainers.learnMore": "Află Mai Mult",
    "trainers.joinTeam": "Alătură-te Echipei Noastre",

    // Blog Page
    "blog.hero.badge": "Cu mult timp în urmă, într-o galaxie îndepărtată...",
    "blog.hero.title1": "CRONICILE",
    "blog.hero.title2": "EMBEDDED",
    "blog.hero.subtitle":
      "Alătură-te Rebeliunii împotriva codului complex. Învață căile Forței în sisteme embedded, măiestria Arduino și înțelepciunea IoT de la Maeștrii Jedi din întreaga galaxie.",
    "blog.hero.cta": "Începe Călătoria Ta",
    "blog.featured.badge": "Transmisie Principală",
    "blog.featured.title": "Ultimele din Arhivele Jedi",
    "blog.featured.label": "Recomandat",
    "blog.featured.cta": "Citește Holocronul",
    "blog.posts.title": "Cronici din Galaxie",
    "blog.category.all": "Toate",
    "blog.category.iot": "IoT",
    "blog.category.arduino": "Arduino",
    "blog.category.embeddedC": "Embedded C",
    "blog.category.debugging": "Debugging",
    "blog.category.architecture": "Arhitectură",
    "blog.category.security": "Securitate",
    "blog.empty": "Nu au fost găsite postări în această categorie.",
    "blog.readMore": "Citește Mai Mult",
    "blog.newsletter.title": "Alătură-te Alianței Rebele",
    "blog.newsletter.subtitle":
      "Primește transmisii din întreaga galaxie. Obține cele mai recente cunoștințe despre sisteme embedded livrate direct la proiectorul tău holografic.",
    "blog.newsletter.placeholder": "email.tau@rebeliune.ro",
    "blog.newsletter.cta": "Alătură-te Forței",
    "blog.detail.backToBlog": "Înapoi la Blog",
    "blog.detail.notFound": "Postare Negăsită",
    "blog.detail.notFoundMessage":
      "Postarea de blog pe care o cauți nu există.",
    "blog.detail.shareArticle": "Distribuie acest articol",
    "blog.detail.copyLink": "Copiază Link",
    "blog.detail.linkCopied":
      "Linkul și descrierea articolului au fost copiate în clipboard!",
    "blog.detail.linkCopyFailed": "Linkul nu a putut fi copiat",

    // Hardware Page
    "hardware.hero.badge": "Magazin Hardware",
    "hardware.hero.title": "Hardware de Dezvoltare",
    "hardware.hero.subtitle": "Premium & Plăci",
    "hardware.hero.description":
      "Plăci de dezvoltare și microcontrolere profesionale pentru proiectele tale embedded.",
    "hardware.hero.shopNow": "Cumpără Acum",
    "hardware.hero.browseCategories": "Răsfoiește Categorii",
    "hardware.category.allBoards": "Toate Plăcile",
    "hardware.category.arduino": "Arduino",
    "hardware.category.stm": "STM",
    "hardware.featured.badge": "Produse Recomandate",
    "hardware.featured.title": "Plăci de Dezvoltare Profesionale",
    "hardware.featured.description":
      "Selecție manuală a celor mai bune microcontrolere și platforme de dezvoltare",
    "hardware.inStock": "În Stoc",
    "hardware.outOfStock": "Stoc Epuizat",
    "hardware.reviews": "recenzii",
    "hardware.keySpecs": "Specificații Cheie:",
    "hardware.addToCart": "Adaugă în Coș",
    "hardware.addedToCart": "Adăugat în coș",
    "hardware.addedDescription": "a fost adăugat în coșul tău.",
    "hardware.features.badge": "De Ce Să Cumpărați De La Noi?",
    "hardware.features.title": "Apreciat de Dezvoltatori din Întreaga Lume",
    "hardware.features.description":
      "Servicii și asistență profesională pentru toate nevoile tale de dezvoltare embedded",
    "hardware.feature.quality.title": "Calitate Garantată",
    "hardware.feature.quality.description":
      "Toate plăcile sunt testate și verificate înainte de expediție",
    "hardware.feature.shipping.title": "Livrare Rapidă",
    "hardware.feature.shipping.description":
      "Procesare în aceeași zi cu livrare în 2-3 zile",
    "hardware.feature.support.title": "Suport Tehnic",
    "hardware.feature.support.description":
      "Ajutor expert cu instalarea și depanarea",

    // Contact Page
    "contact.hero.badge": "Intră în Legătură",
    "contact.hero.title": "Suntem Aici pentru",
    "contact.hero.titleHighlight": "A Te Ajuta să Reușești",
    "contact.hero.description":
      "Ai întrebări despre cursurile noastre? Ai nevoie de ghidare în călătoria ta în sistemele embedded? Echipa noastră de experți este pregătită să te asiste la fiecare pas.",
    "contact.info.mainOffice": "Biroul Principal",
    "contact.info.phoneNumbers": "Numere de Telefon",
    "contact.info.emailSupport": "Suport Email",
    "contact.info.officeHours": "Program de Lucru",
    "contact.info.responseTime": "Răspuns în 24 ore",
    "contact.info.hours.weekday": "Luni - Vineri: 9:00 - 18:00",
    "contact.info.hours.saturday": "Sâmbătă: 10:00 - 16:00",
    "contact.info.hours.sunday": "Duminică: Închis",
    "contact.form.title": "Trimite-ne un Mesaj",
    "contact.form.fullName": "Nume Complet",
    "contact.form.fullNamePlaceholder": "Numele tău complet",
    "contact.form.email": "Adresa de Email",
    "contact.form.emailPlaceholder": "email.tau@exemplu.ro",
    "contact.form.subject": "Subiect",
    "contact.form.subjectPlaceholder": "Cu ce te putem ajuta?",
    "contact.form.message": "Mesaj",
    "contact.form.messagePlaceholder":
      "Spune-ne mai multe despre întrebarea ta...",
    "contact.form.sending": "Se trimite...",
    "contact.form.send": "Trimite Mesajul",
    "contact.form.success":
      "Mesaj trimis cu succes! Îți vom răspunde în 24 de ore.",
    "contact.form.error":
      "Nu s-a putut trimite mesajul. Te rugăm să încerci din nou.",
    "contact.map.title": "Biroul Nostru Principal",
    "contact.quick.title": "Ai Nevoie de Ajutor Imediat?",
    "contact.quick.call": "Sună-ne direct",
    "contact.quick.email": "Suport email",
    "contact.quick.browse": "Răsfoiește cursurile",
    "contact.quick.browseDescription": "Găsește cursul perfect pentru tine",
    "contact.faq.badge": "Întrebări Frecvente",
    "contact.faq.title": "Întrebări Frecvente",
    "contact.faq.description":
      "Răspunsuri rapide la întrebări comune despre cursurile și serviciile noastre",
    "contact.faq.q1": "Oferiți cursuri în română și rusă?",
    "contact.faq.a1":
      "Da! Toate cursurile noastre sunt disponibile în română, rusă și engleză. Poți schimba limba oricând în panoul tău de student.",
    "contact.faq.q2":
      "Ce echipament am nevoie pentru cursurile de sisteme embedded?",
    "contact.faq.a2":
      "Oferim kituri de început pentru majoritatea cursurilor, incluzând plăci Arduino, senzori și componente. Pentru cursurile avansate, vom oferi o listă detaliată de echipamente.",
    "contact.faq.q3": "Există prerechizite pentru cursurile dvs.?",
    "contact.faq.a3":
      "Cunoștințe de bază de programare sunt utile, dar nu sunt necesare pentru cursurile de început. Fiecare pagină de curs listează prerechizitele specifice, dacă există.",
    "contact.faq.q4": "Oferiți certificate la absolvire?",
    "contact.faq.a4":
      "Da, toți studenții primesc certificate recunoscute în industrie la finalizarea cu succes a cursului. Acestea sunt apreciate de angajatori în Moldova și România.",
    "contact.faq.q5": "Pot primi ajutor dacă rămân blocat în timpul unui curs?",
    "contact.faq.a5":
      "Absolut! Oferim suport comunitar 24/7, sesiuni live Q&A săptămânale și mentorat individual pentru studenții premium.",
    "contact.faq.notFound": "Nu găsești ce cauți?",
    "contact.faq.askQuestion": "Pune o Întrebare",
    "contact.cta.badge": "Pregătit să Începi?",
    "contact.cta.title": "Pregătit să Începi Călătoria Ta?",
    "contact.cta.description":
      "Alătură-te miilor de studenți care stăpânesc sistemele embedded. Începe astăzi cu cursurile noastre pentru începători.",
    "contact.cta.browseCourses": "Răsfoiește Cursurile",
    "contact.cta.joinCommunity": "Alătură-te Comunității",

    // Hardware Page
    "hardware.title": "Hardware de Dezvoltare",
    "hardware.titleHighlight": "Premium & Plăci",
    "hardware.description":
      "Plăci de dezvoltare și microcontrolere de calitate profesională pentru proiectele tale înglobate.",
    "hardware.shopNow": "Cumpără Acum",
    "hardware.browseCategories": "Răsfoiește Categorii",
    "hardware.featuredProducts": "Produse Recomandate",
    "hardware.professionalBoards": "Plăci de Dezvoltare Profesionale",
    "hardware.boardsDescription":
      "Selecție aleasă a celor mai bune microcontrolere și platforme de dezvoltare",
    "hardware.whyBuyFromUs": "De Ce Să Cumperi de la Noi?",
    "hardware.trustedWorldwide":
      "De Încredere pentru Dezvoltatori din Întreaga Lume",
    "hardware.serviceDescription":
      "Servicii și suport profesional pentru toate nevoile tale de dezvoltare înglobată",
    "hardware.qualityGuaranteed": "Calitate Garantată",
    "hardware.qualityDescription":
      "Toate plăcile sunt testate și verificate înainte de expediere",
    "hardware.fastShipping": "Livrare Rapidă",
    "hardware.shippingDescription":
      "Procesare în aceeași zi cu livrare în 2-3 zile",
    "hardware.technicalSupport": "Suport Tehnic",
    "hardware.supportDescription":
      "Ajutor expert pentru configurare și depanare",
    "hardware.allBoards": "Toate Plăcile",

    // Documentation Page
    "docs.title": "Tot Ce Ai Nevoie Pentru a",
    "docs.titleHighlight": "Reuși",
    "docs.description":
      "Ghiduri cuprinzătoare, tutoriale și documentație tehnică pentru a te ajuta să stăpânești dezvoltarea sistemelor înglobate.",
    "docs.searchPlaceholder": "Caută în documentație...",
    "docs.communityForum": "Forum Comunitate",
    "docs.communityDescription": "Alătură-te discuțiilor cu alți studenți",
    "docs.technicalResources": "Resurse Tehnice",
    "docs.resourcesDescription": "Documentație hardware și instrumente",
    "docs.gettingStarted": "Început",
    "docs.courseGuides": "Ghiduri Cursuri",
    "docs.technicalReference": "Referință Tehnică",
    "docs.toolsSetup": "Instalare Instrumente",
    "docs.faqs": "Întrebări Frecvente",
    "docs.noResults": "Niciun rezultat găsit",
    "docs.adjustSearch": "Încearcă să ajustezi căutarea sau filtrele",
    "docs.clearFilters": "Șterge Filtrele",
    "docs.stillQuestions": "Mai Ai Întrebări?",
    "docs.supportDescription":
      "Echipa noastră de suport este aici să te ajute. Contactează-ne și vom răspunde cât mai repede posibil.",
    "docs.contactSupport": "Contactează Suportul",
    "docs.joinCommunity": "Alătură-te Comunității",

    // Junior Program Page
    "junior.weekend": "Școală de Weekend pentru Juniori",
    "junior.title": "Construiește",
    "junior.titleHighlight": "Rachetele Viitorului",
    "junior.subtitle":
      "Pentru Tineri Inovatori cu Vârste 12-18 • Cursuri de Weekend • Proiecte Tech Hands-On • Abilități pentru Cariera Viitoare",
    "junior.enrollNow": "Înscrie-te Acum - Locuri Limitate!",
    "junior.viewCurriculum": "Vezi Curriculum",
    "junior.studentsTrained": "Studenți Instruiți",
    "junior.completionRate": "Rata de Finalizare",
    "junior.realProjects": "Proiecte Reale",
    "junior.parentRating": "Rating Părinți",
    "junior.whyChoose": "De Ce Să Alegi Programul Nostru Junior?",
    "junior.whyDescription":
      "Transformăm minți tinere în inovatori tech prin învățare bazată pe proiecte, mentorat din industrie și expunere la tehnologie de ultimă oră.",
    "junior.spacetech": "Tehnologie Spațială",
    "junior.spacetechDesc":
      "Învață despre sateliți, rachete și sisteme de explorare spațială",
    "junior.aiRobotics": "AI & Robotică",
    "junior.aiDesc":
      "Construiește și programează roboți inteligenți cu învățare automată",
    "junior.gameDev": "Dezvoltare Jocuri",
    "junior.gameDevDesc":
      "Creează propriile tale jocuri video și experiențe interactive",
    "junior.mobileApps": "Aplicații Mobile",
    "junior.mobileDesc":
      "Dezvoltă aplicații care controlează roboți și dispozitive IoT",

    // Junior Section on Index Page
    "index.juniorProgram": "Program Junior",
    "index.weekendSchool": "Școală de Weekend pentru Juniori",
    "index.buildRockets": "Construiește Rachetele Viitorului",
    "index.juniorDescription":
      "Conceput pentru tineri inovatori cu vârste între 12-18 ani. Programul nostru de weekend introduce adolescenții în sistemele înglobate, robotică și tehnologie spațială prin proiecte practice și experiențe de învățare interactive.",
    "index.interactiveLearning": "Învățare Interactivă",
    "index.interactiveLearningDesc":
      "Învață programare și electronică prin jocuri, roboți și proiecte reale",
    "index.futureSkills": "Abilități pentru Viitor",
    "index.futureSkillsDesc":
      "Dezvoltă rezolvarea problemelor, creativitatea și abilitățile tehnice pentru carierele de mâine",
    "index.weekendSchedule": "Program Weekend",
    "index.weekendScheduleDesc":
      "Cursuri flexibile de weekend care nu interferează cu angajamentele școlare",
    "index.joinJuniorProgram": "Alătură-te Programului Junior",
    "index.learnMore": "Află Mai Mult",
    "index.learnMoreJunior": "Află Mai Mult Despre Programul Junior",

    // CTA Section
    "index.startJourney": "Începe Călătoria",
    "index.readyToBuild": "Gata să Construiești Viitorul?",
    "index.ctaDescription":
      "Alătură-te miilor de dezvoltatori care stăpânesc sistemele înglobate. Începe cu previzualizarea gratuită a cursului și vezi de ce profesioniștii aleg Embedded School.",
    "index.browseCoursesBtn": "Răsfoiește Toate Cursurile",
    "index.contactUsBtn": "Contactează-ne",

    // Junior Program Page - More translations
    "junior.ageGroups": "Programe pe Grupe de Vârstă",
    "junior.yearRange": "ani",
    "junior.explorer": "Explorator",
    "junior.innovator": "Inovator",
    "junior.creator": "Creator",
    "junior.basicRobots": "Roboți de bază",
    "junior.simpleGames": "Jocuri simple",
    "junior.ledCircuits": "Circuite LED",
    "junior.smartDevices": "Dispozitive inteligente",
    "junior.sensorNetworks": "Rețele de senzori",
    "junior.aiSystems": "Sisteme AI",
    "junior.advancedRobotics": "Robotică avansată",
    "junior.industryProjects": "Proiecte din industrie",
    "junior.foundationalProgramming": "Programare fundamentală & electronică",
    "junior.advancedSystems": "Sisteme avansate & IoT",
    "junior.realWorldProjects": "Proiecte din lumea reală & specializări",

    // Index Page - Professional Packs
    "index.embeddedC": "C Înglobat",
    "index.lowLevel": "Programare de nivel jos",
    "index.iotSystems": "Sisteme IoT",
    "index.connectedDevices": "Dispozitive conectate",
    "index.professionalPack": "Pachet Profesional",
    "index.careerPaths": "Trasee Complete de Carieră",
    "index.careerPathsDesc":
      "Trasee de învățare cuprinzătoare concepute pentru roluri specifice de inginerie. Stăpânește tehnologii multiple în trasee de carieră focalizate.",
    "index.embeddedProfessional": "Profesional Sisteme Înglobate",
    "index.advanced": "Avansat",
    "index.embeddedProfDesc":
      "Traseu complet de la fundamentele C++ la design hardware. Include cursuri de Testare Software & QA Automotive și Design PCB.",
    "index.duration": "Durată:",
    "index.level": "Nivel:",
    "index.coursesIncluded": "Cursuri Incluse:",
    "index.weeks": "săptămâni",
    "index.courses": "Cursuri",
    "index.save": "Economisește",
    "index.startCareerPath": "Începe Traseul de Carieră",
    "index.softwareDeveloper": "Traseu Dezvoltator Software",
    "index.beginnerIntermediate": "Începător până la Intermediar",
    "index.softwareDevDesc":
      "Stăpânește atât Python cât și C++ de la bază la concepte avansate. Fundație perfectă pentru cariere în dezvoltare software.",
    "index.completeBundle": "Pachet Complet de Inginerie",
    "index.allLevels": "Toate Nivelurile",
    "index.completeBundleDesc":
      "Acces complet la toate cursurile disponibile. De la bazele Python la QA automotive și design PCB. Educație completă de inginerie.",
    "index.activeCommunity": "Comunitate Activă",
    "index.communityDesc":
      "Alătură-te unei comunități vibrante de dezvoltatori, mentori și experți din industrie. Primește ajutor, împărtășește proiecte și creează rețele.",
    "index.onlineNow": "Online acum:",
    "index.members": "membri",
    "index.certifiedThisMonth": "certificați luna aceasta",

    // Courses Page - Detailed
    "coursesPage.allAvailable": "Toate Cursurile Disponibile",
    "coursesPage.masterEmbedded": "Stăpânește Sistemele",
    "coursesPage.systemsIot": "Înglobate & IoT",
    "coursesPage.discover":
      "Explorează cursuri IT cuprinzătoare la Embedded School. Stăpânește sisteme embedded, IoT și programare prin instruire practică. Începe-ți călătoria de la nivel începător la profesional.",
    "coursesPage.coursesLabel": "Cursuri",
    "coursesPage.studentsLabel": "Studenți",
    "coursesPage.avgRating": "Rating Mediu",
    "coursesPage.searchPlaceholder":
      "Caută cursuri după titlu, descriere sau cuvinte cheie...",
    "coursesPage.category": "Categorie:",
    "coursesPage.level": "Nivel:",
    "coursesPage.found": "Găsite",
    "coursesPage.coursesFound": "Cursuri Găsite",
    "coursesPage.courseFound": "Curs Găsit",
    "coursesPage.professionalEducation":
      "Educație profesională în sisteme înglobate",
    "coursesPage.clearFilters": "Șterge Filtrele",
    "coursesPage.noCoursesFound": "Niciun curs găsit",
    "coursesPage.adjustSearch":
      "Încearcă să ajustezi criteriile de căutare sau vezi toate cursurile",
    "coursesPage.viewAllCourses": "Vezi Toate Cursurile",
    "coursesPage.enrollNow": "Înscrie-te Acum",
    "coursesPage.professionalPack": "Pachet Profesional",
    "coursesPage.completeCareerPaths": "Trasee Complete de Carieră",
    "coursesPage.careerPathsDescription":
      "Trasee de învățare cuprinzătoare concepute pentru roluri specifice de inginerie. Stăpânește tehnologii multiple în trasee de carieră focalizate.",
    "coursesPage.embeddedProfessional": "Profesional Sisteme Înglobate",
    "coursesPage.advanced": "Avansat",
    "coursesPage.embeddedProfDesc":
      "Traseu complet de la fundamentele C++ la design hardware. Include cursuri de Testare Software & QA Automotive și Design PCB.",
    "coursesPage.duration": "Durată:",
    "coursesPage.levelLabel": "Nivel:",
    "coursesPage.coursesIncluded": "Cursuri Incluse:",
    "coursesPage.weeks": "săptămâni",
    "coursesPage.save": "Economisește",
    "coursesPage.startCareerPath": "Începe Traseul de Carieră",
    "coursesPage.softwareDeveloper": "Traseu Dezvoltator Software",
    "coursesPage.beginnerIntermediate": "Începător până la Intermediar",
    "coursesPage.softwareDevDesc":
      "Stăpânește atât Python cât și C++ de la bază la concepte avansate. Fundație perfectă pentru cariere în dezvoltare software.",
    "coursesPage.completeBundle": "Pachet Complet de Inginerie",
    "coursesPage.allLevels": "Toate Nivelurile",
    "coursesPage.completeBundleDesc":
      "Acces complet la toate cursurile disponibile. De la bazele Python la QA automotive și design PCB. Educație completă de inginerie.",
    "coursesPage.needSpecific": "Ai Nevoie de Ceva Specific?",
    "coursesPage.cantFind": "Nu Găsești Ce Cauți?",
    "coursesPage.cantFindDesc":
      "Adăugăm constant cursuri noi. Contactează-ne pentru a sugera un subiect sau pentru a fi notificat despre lansările viitoare.",
    "coursesPage.customCurriculum": "Curriculum Personalizat",
    "coursesPage.customCurriculumDesc":
      "Cursuri adaptate nevoilor tale specifice",
    "coursesPage.expertInstructors": "Instructori Experți",
    "coursesPage.expertInstructorsDesc":
      "Învață de la profesioniști din industrie",
    "coursesPage.earlyAccess": "Acces Timpuriu",
    "coursesPage.earlyAccessDesc": "Fii notificat primul despre lansările noi",
    "coursesPage.contactUs": "Contactează-ne",
    "coursesPage.subscribeUpdates": "Abonează-te la Actualizări",

    // Course Detail Page
    "courseDetail.home": "Acasă",
    "courseDetail.courses": "Cursuri",
    "courseDetail.reviews": "recenzii",
    "courseDetail.students": "studenți",
    "courseDetail.updated": "Actualizat",
    "courseDetail.certificateIncluded": "Certificat inclus",
    "courseDetail.previewCourse": "Previzualizează Cursul",
    "courseDetail.overview": "Prezentare",
    "courseDetail.curriculum": "Program",
    "courseDetail.instructor": "Instructor",
    "courseDetail.reviewsTab": "Recenzii",
    "courseDetail.courseDescription": "Descrierea Cursului",
    "courseDetail.whatYouLearn": "Ce Vei Învăța",
    "courseDetail.requirements": "Cerințe",
    "courseDetail.courseCurriculum": "Programul Cursului",
    "courseDetail.modules": "module",
    "courseDetail.lessons": "lecții",
    "courseDetail.rating": "Rating",
    "courseDetail.studentsLabel": "Studenți",
    "courseDetail.experience": "Experiență",
    "courseDetail.coursesLabel": "Cursuri",
    "courseDetail.studentReviews": "Recenzii Studenți",
    "courseDetail.reviewsDisplay": "Recenziile vor fi afișate aici",
    "courseDetail.enrollNow": "Înscrie-te Acum",
    "courseDetail.addToCart": "Adaugă în Coș",
    "courseDetail.share": "Distribuie",
    "courseDetail.moneyBack": "Garanție de rambursare în 30 de zile",
    "courseDetail.courseInformation": "Informații Curs",
    "courseDetail.level": "Nivel",
    "courseDetail.duration": "Durată",
    "courseDetail.lessonsLabel": "Lecții",
    "courseDetail.language": "Limbă",
    "courseDetail.certificate": "Certificat",
    "courseDetail.yes": "Da",
    "courseDetail.limitedOffer": "50% REDUCERE - Timp Limitat",
    "courseDetail.notFound": "Curs negăsit",
    "courseDetail.addedToCart": "Curs adăugat în coș!",
    "courseDetail.sharedSuccess": "Curs distribuit cu succes!",
    "courseDetail.shareFailed": "Nu s-a putut distribui cursul",
    "courseDetail.linkCopied": "Link copiat în clipboard!",
    "courseDetail.copyFailed": "Nu s-a putut copia linkul",

    // Forms - Common
    "form.title": "Începe Călătoria ta de Învățare",
    "form.description":
      "Completează acest formular și te vom contacta cu detalii despre curs și informații de înrolare.",
    "form.careerPathDescription":
      "Aplici pentru un traseu complet de carieră. Te vom contacta cu informații detaliate despre toate cursurile incluse.",
    "form.name": "Prenume",
    "form.surname": "Nume de Familie",
    "form.namePlaceholder": "Introdu prenumele tău",
    "form.surnamePlaceholder": "Introdu numele de familie",
    "form.email": "Adresa de Email",
    "form.emailPlaceholder": "Introdu adresa de email",
    "form.phone": "Număr de Telefon",
    "form.phonePlaceholder": "Introdu numărul de telefon",
    "form.message": "Mesaj Adițional",
    "form.messagePlaceholder":
      "Spune-ne despre obiectivele tale sau întrebări specifice...",
    "form.course": "Curs de Interes",
    "form.coursePlaceholder": "Selectează un curs care te interesează",
    "form.cancel": "Anulează",
    "form.submit": "Trimite Cererea",
    "form.submitting": "Se trimite...",
    "form.submitCareerPath": "Aplică pentru Traseul de Carieră",
    "form.selectedCareerPath": "Traseu de Carieră Selectat",
    "form.includesCourses": "Include",
    "form.courses": "cursuri",
    "form.courseSingular": "curs",
    "form.missingInfo": "Informații Lipsă",
    "form.fillRequired":
      "Te rugăm să completezi toate câmpurile obligatorii (Prenume, Nume și Selecția cursului).",
    "form.inquirySubmitted": "Cerere Trimisă!",
    "form.thankYou":
      "Mulțumim pentru interesul tău! Te vom contacta în curând cu mai multe informații.",
    "form.submissionFailed": "Trimitere Eșuată",
    "form.errorMessage":
      "A apărut o eroare la trimiterea cererii. Te rugăm să încerci din nou.",

    // Junior Program Form
    "juniorForm.title": "Alătură-te Programului Junior",
    "juniorForm.description":
      "Înscrie-te la programul nostru de școală de weekend pentru juniori cu vârste între 12-18 ani. Hai să construim rachetele viitorului împreună!",
    "juniorForm.name": "Nume",
    "juniorForm.surname": "Prenume",
    "juniorForm.namePlaceholder": "Introdu numele tău",
    "juniorForm.surnamePlaceholder": "Introdu prenumele tău",
    "juniorForm.email": "Email",
    "juniorForm.emailPlaceholder": "Introdu email-ul tău",
    "juniorForm.phone": "Număr de Telefon",
    "juniorForm.phonePlaceholder": "Introdu numărul de telefon",
    "juniorForm.cancel": "Anulează",
    "juniorForm.joinProgram": "Alătură-te Programului",
    "juniorForm.submitting": "Se trimite...",
    "juniorForm.missingInfo": "Informații Lipsă",
    "juniorForm.fillRequired":
      "Te rugăm să completezi toate câmpurile obligatorii (nume, prenume și email).",
    "juniorForm.success": "Succes!",
    "juniorForm.successMessage":
      "Cererea ta pentru programul junior a fost trimisă cu succes. Te vom contacta în curând!",
    "juniorForm.error": "Eroare",
    "juniorForm.errorMessage":
      "Nu am reușit să trimitem cererea ta. Te rugăm să încerci din nou.",

    // One-to-One Meeting Form
    "meetingForm.title": "Solicită Sesiune Unu-la-Unu",
    "meetingForm.description":
      "Completează detaliile pentru a programa o întâlnire unu-la-unu cu",
    "meetingForm.name": "Nume",
    "meetingForm.email": "Email",
    "meetingForm.phone": "Număr de Telefon",
    "meetingForm.preferredDate": "Data/Ora Preferată",
    "meetingForm.message": "Mesaj",
    "meetingForm.namePlaceholder": "Numele tău complet",
    "meetingForm.emailPlaceholder": "email.tau@exemplu.com",
    "meetingForm.phonePlaceholder": "+373 ________",
    "meetingForm.datePlaceholder": "de ex., Luni viitoare după-amiază",
    "meetingForm.messagePlaceholder":
      "Spune-ne despre obiectivele tale de învățare sau subiecte specifice pe care ai dori să le discuți...",
    "meetingForm.cancel": "Anulează",
    "meetingForm.requestButton": "Solicită Unu-la-Unu",
    "meetingForm.submitting": "Se trimite...",
    "meetingForm.missingInfo": "Informații Lipsă",
    "meetingForm.fillRequired":
      "Te rugăm să completezi toate câmpurile obligatorii (Nume și Email).",
    "meetingForm.success": "Cerere Trimisă!",
    "meetingForm.successMessage":
      "Cererea ta pentru întâlnire unu-la-unu cu {trainer} a fost primită. Te vom contacta în curând.",
    "meetingForm.error": "Trimitere Eșuată",
    "meetingForm.errorMessage":
      "A apărut o eroare la trimiterea cererii. Te rugăm să încerci din nou.",

    // Trainer Application Form
    "trainerForm.title": "Aplică pentru a Deveni Instructor",
    "trainerForm.description":
      "Alătură-te echipei noastre de instructori experți și ajută la formarea următoarei generații de ingineri de sisteme înglobate. Completează formularul de mai jos și te vom contacta în curând.",
    "trainerForm.fullName": "Nume Complet",
    "trainerForm.namePlaceholder": "Introdu numele complet",
    "trainerForm.email": "Adresa de Email",
    "trainerForm.emailPlaceholder": "email.tau@exemplu.com",
    "trainerForm.phone": "Număr de Telefon",
    "trainerForm.phonePlaceholder": "+373 ________",
    "trainerForm.expertise": "Domeniu Principal de Expertiză",
    "trainerForm.expertisePlaceholder": "de ex., Sisteme Înglobate, IoT",
    "trainerForm.experienceYears": "Ani de Experiență",
    "trainerForm.experienceYearsPlaceholder": "5",
    "trainerForm.linkedinUrl": "URL Profil LinkedIn",
    "trainerForm.linkedinPlaceholder": "https://linkedin.com/in/...",
    "trainerForm.portfolioUrl": "URL Portofoliu/Site Web",
    "trainerForm.portfolioPlaceholder": "https://siteultau.com",
    "trainerForm.bio": "Bio Profesional",
    "trainerForm.bioPlaceholder":
      "Spune-ne despre background-ul tău profesional, realizări și expertiză...",
    "trainerForm.whyTeach": "De Ce Vrei să Predai?",
    "trainerForm.whyTeachPlaceholder":
      "Împărtășește-ne motivația ta de a deveni instructor și ce speri să aduci studenților noștri...",
    "trainerForm.cancel": "Anulează",
    "trainerForm.submit": "Trimite Aplicația",
    "trainerForm.submitting": "Se trimite...",
    "trainerForm.missingInfo": "Informații Lipsă",
    "trainerForm.fillRequired":
      "Te rugăm să completezi toate câmpurile obligatorii.",
    "trainerForm.invalidExperience": "Experiență Invalidă",
    "trainerForm.validYears":
      "Te rugăm să introduci un număr valid de ani de experiență.",
    "trainerForm.success": "Aplicație Trimisă!",
    "trainerForm.successMessage":
      "Mulțumim pentru interesul tău de a deveni instructor! Vom revizui aplicația ta și te vom contacta în curând.",
    "trainerForm.error": "Trimitere Eșuată",
    "trainerForm.errorMessage":
      "A apărut o eroare la trimiterea aplicației. Te rugăm să încerci din nou.",
  },
  ru: {
    // Navigation
    "nav.courses": "Курсы",
    "nav.about": "О нас",
    "nav.trainers": "Инструкторы",
    "nav.blog": "Блог",
    "nav.hardware": "Оборудование",
    "nav.contact": "Контакты",
    "nav.login": "Войти",
    "nav.getStarted": "Начать",

    // Hero Section
    "hero.title": "Фабрика Инженеров - Embedded School",
    "hero.subtitle": "Построй Свое Будущее",
    "hero.description":
      "Присоединяйтесь к тысячам студентов, осваивающих передовые технологии через практические курсы по IoT, встраиваемым системам и многому другому.",
    "hero.startLearning": "Начать Обучение Сегодня",
    "hero.watchDemo": "Смотреть Демо",
    "hero.satisfaction": "Уровень Удовлетворенности",
    "hero.activeStudents": "Активные Студенты",
    "hero.expertCourses": "Экспертные Курсы",

    // Featured Courses
    "courses.featured": "Рекомендуемые Курсы",
    "courses.mostPopular": "Самые Популярные Курсы",
    "courses.description":
      "Откройте для себя наши самые популярные курсы, созданные отраслевыми экспертами",
    "courses.enrollNow": "Записаться Сейчас",
    "courses.viewAll": "Посмотреть Все Курсы",
    "courses.allAvailable": "Все Доступные Курсы",
    "courses.masterEmbedded": "Освойте Встраиваемые",
    "courses.systemsIoT": "Системы и IoT",
    "courses.discover":
      "Откройте для себя полные курсы по встраиваемым системам, IoT и программированию. Начните свой путь от новичка до профессионального уровня.",
    "courses.searchPlaceholder": "Поиск курсов...",
    "courses.category": "Категория:",
    "courses.level": "Уровень:",
    "courses.found": "Найдено",
    "courses.course": "Курс",
    "courses.courses": "Курсы",
    "courses.clearFilters": "Очистить Фильтры",
    "courses.noCourses": "Курсы не найдены",
    "courses.adjustSearch":
      "Попробуйте изменить критерии поиска или просмотрите все курсы",
    "courses.viewAllCourses": "Посмотреть Все Курсы",

    // Features
    "features.whyChoose": "Почему Мы?",
    "features.title": "Платформа Обучения Промышленных Стандартов",
    "features.description":
      "Овладейте встраиваемыми системами с нашей всесторонней практической программой, разработанной профессионалами отрасли. От базовых концепций до продвинутых реальных приложений.",
    "features.handsOn": "Практические Проекты",
    "features.handsOnDesc":
      "Создавайте реальные проекты встраиваемых систем с первого дня",
    "features.industryTools": "Промышленные Инструменты",
    "features.industryToolsDesc":
      "Учитесь с теми же инструментами, которые используют профессионалы",
    "features.expertInstructors": "Экспертные Инструкторы",
    "features.expertInstructorsDesc":
      "Учитесь у опытных инженеров встраиваемых систем",
    "features.certification": "Промышленная Сертификация",
    "features.certificationDesc":
      "Получите признанные сертификаты, которые ценят работодатели. Все курсы соответствуют отраслевым стандартам и лучшим практикам.",

    // Stats
    "stats.activeStudents": "Активные Студенты",
    "stats.coursesAvailable": "Доступные Курсы",
    "stats.averageRating": "Средний Рейтинг",
    "stats.successRate": "Уровень Успеха",

    // Course Categories
    "category.embeddedC": "Встраиваемый C",
    "category.arduino": "Arduino",
    "category.iot": "IoT Системы",
    "category.automotive": "Автомобильные",
    "category.all": "Все",

    // Course Levels
    "level.beginner": "Начинающий",
    "level.intermediate": "Средний",
    "level.advanced": "Продвинутый",
    "level.all": "Все",

    // Common
    "common.students": "студенты",
    "common.weeks": "недели",
    "common.readMore": "Читать Далее",
    "common.learnMore": "Узнать Больше",
    "common.home": "Главная",
    "common.addToCart": "Добавить в Корзину",
    "common.enrollNow": "Записаться Сейчас",
    "common.inStock": "В Наличии",
    "common.outOfStock": "Нет в Наличии",
    "common.reviews": "отзывы",
    "common.loading": "Загрузка...",

    // Professional Pack
    "pack.title": "Профессиональный Пакет",
    "pack.careerPaths": "Полные Карьерные Пути",
    "pack.description":
      "Всеобъемлющие учебные треки, разработанные для конкретных инженерных ролей. Освойте несколько технологий в целенаправленных карьерных путях.",

    // Footer
    "footer.description":
      "Расширяем возможности следующего поколения разработчиков встраиваемых систем с практическим, ориентированным на отрасль образованием.",
    "footer.courses": "Курсы",
    "footer.company": "Компания",
    "footer.resources": "Ресурсы для Разработчиков",
    "footer.aboutUs": "О Нас",
    "footer.contact": "Контакты",
    "footer.blog": "Блог",
    "footer.careers": "Карьера",
    "footer.docs": "Документация",
    "footer.api": "Справочник API",
    "footer.community": "Сообщество",
    "footer.support": "Поддержка",
    "footer.copyright":
      "2024 Embedded School. Образовательная платформа с открытым исходным кодом.",
    "footer.operational": "Все системы работают",
    "footer.arduinoProgramming": "Программирование Arduino",
    "footer.embeddedC": "Встраиваемый C",
    "footer.iotSystems": "IoT Системы",
    "footer.automotiveElectronics": "Автомобильная Электроника",

    // About Page
    "about.badge": "О Embedded School",
    "about.title": "Расширяем Возможности Следующего Поколения",
    "about.titleHighlight": "Встраиваемых Инженеров",
    "about.description":
      "Основана в Молдове с видением демократизировать образование встраиваемых систем в Восточной Европе. Мы соединяем академическую теорию с промышленной практикой.",

    // Stats
    "about.studentsTaught": "Обученных Студентов",
    "about.courseCompletions": "Завершённых Курсов",
    "about.industryPartners": "Отраслевых Партнёров",
    "about.countriesReached": "Охваченных Стран",

    // Mission Section
    "about.missionBadge": "Наша Миссия",
    "about.missionTitle": "Строим Будущее Встраиваемого Образования",
    "about.missionText1":
      "Предоставлять образование мирового уровня по встраиваемым системам, которое готовит студентов к успешной карьере в быстро развивающемся технологическом ландшафте. Мы верим, что качественное образование должно быть доступно всем, независимо от их происхождения.",
    "about.missionText2":
      "С момента нашего основания в 2019 году мы стремились создавать практические, актуальные для индустрии курсы, которые дают нашим студентам навыки, необходимые для успеха в разработке встраиваемых систем, IoT и автомобильной электронике.",
    "about.joinMission": "Присоединитесь к Нашей Миссии",
    "about.imageAlt": "Командная работа",

    // Values Section
    "about.valuesBadge": "Наши Ценности",
    "about.valuesTitle": "Что Движет Нас Вперед",
    "about.valuesSubtitle":
      "Принципы, которые направляют все, что мы делаем в Embedded School",
    "about.excellenceTitle": "Превосходство в Образовании",
    "about.excellenceDesc":
      "Мы стремимся предоставлять высочайшее качество образования по встраиваемым системам через практический опыт обучения.",
    "about.studentCenteredTitle": "Студентоцентрированный Подход",
    "about.studentCenteredDesc":
      "Каждое наше решение направлено на то, что лучше всего для учебного пути и карьерного успеха наших студентов.",
    "about.innovationTitle": "Постоянные Инновации",
    "about.innovationDesc":
      "Мы постоянно обновляем нашу учебную программу, чтобы отражать последние отраслевые тренды и технологические достижения.",
    "about.communityTitle": "Построение Сообщества",
    "about.communityDesc":
      "Мы развиваем поддерживающее сообщество, где студенты, преподаватели и профессионалы индустрии сотрудничают и растут вместе.",

    // Team Section
    "about.teamBadge": "Познакомьтесь с Командой",
    "about.teamTitle": "Эксперты-Разработчики и Преподаватели",
    "about.teamSubtitle":
      "Профессионалы индустрии с десятилетиями общего опыта во встраиваемых системах",
    "about.specialization": "Специализация:",
    "about.experience": "Опыт:",
    "about.connect": "Связаться",

    // Partners Section
    "about.partnersBadge": "Отраслевые Партнёры",
    "about.partnersTitle": "Доверяют Ведущие Компании",
    "about.partnersSubtitle":
      "Сотрудничаем с ведущими технологическими компаниями для предоставления реального опыта",

    // CTA Section
    "about.ctaBadge": "Присоединитесь к Сообществу",
    "about.ctaTitle": "Готовы Присоединиться к Нашему Сообществу?",
    "about.ctaSubtitle":
      "Станьте частью растущей сети профессионалов и энтузиастов встраиваемых систем.",
    "about.startLearning": "Начать Обучение Сегодня",
    "about.contactTeam": "Связаться с Командой",

    // Contact Page
    "contact.title": "Мы Здесь, Чтобы",
    "contact.titleHighlight": "Помочь Вам Преуспеть",
    "contact.description":
      "Есть вопросы о наших курсах? Нужны советы по вашему пути во встраиваемых системах? Наша команда экспертов готова помочь вам на каждом шагу.",
    "contact.mainOffice": "Главный Офис",
    "contact.phoneNumbers": "Телефонные Номера",
    "contact.emailSupport": "Поддержка Email",
    "contact.officeHours": "Часы Работы Офиса",
    "contact.sendMessage": "Отправьте нам Сообщение",
    "contact.fullName": "Полное Имя",
    "contact.emailAddress": "Адрес Электронной Почты",
    "contact.subject": "Тема",
    "contact.message": "Сообщение",
    "contact.sendButton": "Отправить Сообщение",
    "contact.sending": "Отправка...",
    "contact.needHelp": "Нужна Немедленная Помощь?",
    "contact.callUs": "Позвоните нам напрямую",
    "contact.emailUs": "Поддержка по email",
    "contact.browseCourses": "Просмотреть курсы",
    "contact.findPerfectCourse": "Найдите идеальный курс для себя",
    "contact.faqTitle": "Часто Задаваемые Вопросы",
    "contact.faqSubtitle":
      "Быстрые ответы на распространенные вопросы о наших курсах и услугах",

    // Documentation
    "docs.badge": "Документация",
    "docs.hero.title": "Всё, Что Нужно Для",
    "docs.hero.titleHighlight": "Успеха",
    "docs.hero.description":
      "Полные руководства, учебные материалы и техническая документация для освоения разработки встраиваемых систем.",
    "docs.search.placeholder": "Поиск в документации...",
    "docs.quickLinks.community": "Форум Сообщества",
    "docs.quickLinks.communityDesc":
      "Присоединяйтесь к обсуждениям с другими студентами",
    "docs.quickLinks.resources": "Технические Ресурсы",
    "docs.quickLinks.resourcesDesc":
      "Документация по оборудованию и инструментам",
    "docs.category.all": "Все",
    "docs.category.gettingStarted": "Начало Работы",
    "docs.category.courseGuides": "Руководства Курсов",
    "docs.category.technicalRef": "Технический Справочник",
    "docs.category.toolsSetup": "Инструменты и Настройка",
    "docs.category.faqs": "Часто Задаваемые Вопросы",
    "docs.section.gettingStarted.title": "Начало Работы с Embedded School",
    "docs.section.gettingStarted.desc":
      "Узнайте, как начать свой путь с нашей платформой и курсами",
    "docs.section.gettingStarted.enroll": "Как Записаться на Курс",
    "docs.section.gettingStarted.overview": "Обзор Платформы",
    "docs.section.gettingStarted.payment": "Способы Оплаты и Цены",
    "docs.section.gettingStarted.certificate": "Программы Сертификации",
    "docs.section.courseGuides.title": "Руководства по Курсам",
    "docs.section.courseGuides.desc":
      "Подробные руководства для каждого курса, включая настройку и требования",
    "docs.section.courseGuides.python":
      "Предварительные Требования Курса Python",
    "docs.section.courseGuides.cpp": "Настройка Среды Разработки C++",
    "docs.section.courseGuides.pcb": "Установка ПО для Проектирования PCB",
    "docs.section.courseGuides.testing": "Настройка Инструментов Тестирования",
    "docs.section.technicalRef.title": "Техническая Документация",
    "docs.section.technicalRef.desc":
      "Подробные технические справочники и документация API",
    "docs.section.technicalRef.arduino":
      "Справочник по Программированию Arduino",
    "docs.section.technicalRef.embeddedC": "Лучшие Практики Embedded C",
    "docs.section.technicalRef.autosar": "Руководство по Архитектуре AUTOSAR",
    "docs.section.technicalRef.cmake": "Учебник по Системе Сборки CMake",
    "docs.section.toolsSetup.title": "Инструменты Разработки и Настройка",
    "docs.section.toolsSetup.desc":
      "Руководства по настройке сред разработки и инструментов",
    "docs.section.toolsSetup.vscode":
      "Настройка VS Code для Встраиваемой Разработки",
    "docs.section.toolsSetup.git": "Git и GitHub для Начинающих",
    "docs.section.toolsSetup.virtualEnv": "Виртуальная Среда с uv",
    "docs.section.toolsSetup.debugging": "Инструменты Отладки Оборудования",
    "docs.section.faqs.title": "Часто Задаваемые Вопросы",
    "docs.section.faqs.desc":
      "Общие вопросы и ответы о наших курсах и платформе",
    "docs.section.faqs.access": "Доступ к Курсу и Длительность",
    "docs.section.faqs.refund": "Политика Возврата Средств",
    "docs.section.faqs.support": "Техническая Поддержка",
    "docs.section.faqs.career": "Карьерное Консультирование и Трудоустройство",
    "docs.noResults.title": "Результаты не найдены",
    "docs.noResults.message":
      "Попробуйте изменить поисковый запрос или фильтры",
    "docs.noResults.clear": "Очистить Фильтры",
    "docs.cta.title": "Остались Вопросы?",
    "docs.cta.description":
      "Наша команда поддержки готова помочь. Свяжитесь с нами, и мы ответим как можно быстрее.",
    "docs.cta.contact": "Связаться с Поддержкой",
    "docs.cta.community": "Присоединиться к Сообществу",
    "docs.duration.minRead": "мин чтения",

    // Trainers Page
    "trainers.title": "Познакомьтесь с",
    "trainers.titleHighlight": "Нашими Экспертными Инструкторами",
    "trainers.description":
      "Учитесь у профессионалов индустрии с многолетним реальным опытом во встраиваемых системах, разработке IoT и передовых технологических решениях.",
    "trainers.studentsTaught": "Обученных Студентов",
    "trainers.averageRating": "Средний Рейтинг",
    "trainers.hoursExperience": "Часов Опыта",
    "trainers.yourMentors": "Ваши Учебные Наставники",
    "trainers.mentorsDescription":
      "Эксперты-инженеры встраиваемых систем готовы направить ваш путь",
    "trainers.viewProfile": "Посмотреть Профиль",
    "trainers.requestOneToOne": "Запросить Индивидуальную Встречу",
    "trainers.expertise": "Опыт",
    "trainers.specialties": "Специализации",
    "trainers.students": "студенты",
    "trainers.yearsCombinedExp": "Лет Общего Опыта",
    "trainers.industryProjects": "Промышленных Проектов",
    "trainers.studentsMentored": "Менторских Студентов",
    "trainers.readyToLearn": "Готовы Учиться у Лучших?",
    "trainers.readyDescription":
      "Присоединяйтесь к тысячам студентов, которые продвинули свою карьеру с нашими экспертными инструкторами. Получите персонализированное наставничество и практическое руководство.",
    "trainers.browseAllCourses": "Просмотреть Все Курсы",
    "trainers.scheduleConsultation": "Запланировать Консультацию",
    "trainers.becomeTrainer": "Станьте",
    "trainers.becomeTrainerHighlight": "Инструктором в Фабрике Инженеров",
    "trainers.becomeTrainerDescription":
      "Вы опытный инженер встраиваемых систем или специалист IoT? Присоединяйтесь к нашей команде экспертных инструкторов и помогите сформировать следующее поколение инженеров. Делитесь своими знаниями и оказывайте значимое влияние.",
    "trainers.flexibleTeaching": "Гибкое Преподавание",
    "trainers.flexibleDescription":
      "Установите свой собственный график и преподавайте откуда угодно",
    "trainers.expertRecognition": "Экспертное Признание",
    "trainers.recognitionDescription":
      "Создайте свою репутацию в сообществе встраиваемых систем",
    "trainers.competitivePay": "Конкурентная Оплата",
    "trainers.payDescription":
      "Зарабатывайте конкурентные ставки за обмен опытом",
    "trainers.requirements": "Требования",
    "trainers.yearsExperience": "лет отраслевого опыта",
    "trainers.communicationSkills": "Сильные коммуникативные навыки",
    "trainers.embeddedExpertise": "Опыт во встраиваемых системах или IoT",
    "trainers.passionTeaching": "Страсть к преподаванию и наставничеству",
    "trainers.applyToTeach": "Подать Заявку на Преподавание",
    "trainers.learnMore": "Узнать Больше",
    "trainers.joinTeam": "Присоединитесь к Нашей Команде",

    // Blog Page
    "blog.hero.badge": "Давным-давно в далекой-далекой галактике...",
    "blog.hero.title1": "ВСТРАИВАЕМЫЕ",
    "blog.hero.title2": "ХРОНИКИ",
    "blog.hero.subtitle":
      "Присоединяйтесь к Восстанию против сложного кода. Изучайте пути Силы во встраиваемых системах, мастерстве Arduino и мудрости IoT от Мастеров Джедаев со всей галактики.",
    "blog.hero.cta": "Начните Свой Путь",
    "blog.featured.badge": "Главная Передача",
    "blog.featured.title": "Последнее из Архивов Джедаев",
    "blog.featured.label": "Рекомендуемое",
    "blog.featured.cta": "Читать Голокрон",
    "blog.posts.title": "Хроники из Галактики",
    "blog.category.all": "Все",
    "blog.category.iot": "IoT",
    "blog.category.arduino": "Arduino",
    "blog.category.embeddedC": "Embedded C",
    "blog.category.debugging": "Отладка",
    "blog.category.architecture": "Архитектура",
    "blog.category.security": "Безопасность",
    "blog.empty": "Посты в этой категории не найдены.",
    "blog.readMore": "Читать Далее",
    "blog.newsletter.title": "Присоединитесь к Альянсу Повстанцев",
    "blog.newsletter.subtitle":
      "Получайте передачи со всей галактики. Получайте последние знания о встраиваемых системах прямо на свой голографический проектор.",
    "blog.newsletter.placeholder": "ваш.email@восстание.ru",
    "blog.newsletter.cta": "Присоединиться к Силе",
    "blog.detail.backToBlog": "Назад к Блогу",
    "blog.detail.notFound": "Пост Не Найден",
    "blog.detail.notFoundMessage":
      "Пост в блоге, который вы ищете, не существует.",
    "blog.detail.shareArticle": "Поделиться этой статьей",
    "blog.detail.copyLink": "Копировать Ссылку",
    "blog.detail.linkCopied":
      "Ссылка на статью и описание скопированы в буфер обмена!",
    "blog.detail.linkCopyFailed": "Не удалось скопировать ссылку",

    // Hardware Page
    "hardware.hero.badge": "Магазин Оборудования",
    "hardware.hero.title": "Премиальное Оборудование",
    "hardware.hero.subtitle": "Для Разработки",
    "hardware.hero.description":
      "Профессиональные платы для разработки и микроконтроллеры для ваших встраиваемых проектов.",
    "hardware.hero.shopNow": "Купить Сейчас",
    "hardware.hero.browseCategories": "Просмотреть Категории",
    "hardware.category.allBoards": "Все Платы",
    "hardware.category.arduino": "Arduino",
    "hardware.category.stm": "STM",
    "hardware.featured.badge": "Рекомендуемые Продукты",
    "hardware.featured.title": "Профессиональные Платы для Разработки",
    "hardware.featured.description":
      "Тщательно отобранные лучшие микроконтроллеры и платформы для разработки",
    "hardware.inStock": "В Наличии",
    "hardware.outOfStock": "Нет в Наличии",
    "hardware.reviews": "отзывов",
    "hardware.keySpecs": "Ключевые Характеристики:",
    "hardware.addToCart": "Добавить в Корзину",
    "hardware.addedToCart": "Добавлено в корзину",
    "hardware.addedDescription": "добавлен в вашу корзину.",
    "hardware.features.badge": "Почему Покупать у Нас?",
    "hardware.features.title": "Доверие Разработчиков по Всему Миру",
    "hardware.features.description":
      "Профессиональное обслуживание и поддержка для всех ваших потребностей во встраиваемой разработке",
    "hardware.feature.quality.title": "Гарантия Качества",
    "hardware.feature.quality.description":
      "Все платы тестируются и проверяются перед отправкой",
    "hardware.feature.shipping.title": "Быстрая Доставка",
    "hardware.feature.shipping.description":
      "Обработка в тот же день с доставкой за 2-3 дня",
    "hardware.feature.support.title": "Техническая Поддержка",
    "hardware.feature.support.description":
      "Экспертная помощь с настройкой и устранением неполадок",

    // Contact Page
    "contact.hero.badge": "Свяжитесь с Нами",
    "contact.hero.title": "Мы Здесь, Чтобы",
    "contact.hero.titleHighlight": "Помочь Вам Добиться Успеха",
    "contact.hero.description":
      "Есть вопросы о наших курсах? Нужна помощь в вашем путешествии по встраиваемым системам? Наша команда экспертов готова помочь вам на каждом шагу.",
    "contact.info.mainOffice": "Главный Офис",
    "contact.info.phoneNumbers": "Номера Телефонов",
    "contact.info.emailSupport": "Поддержка по Email",
    "contact.info.officeHours": "Часы Работы",
    "contact.info.responseTime": "Ответ в течение 24 часов",
    "contact.info.hours.weekday": "Понедельник - Пятница: 9:00 - 18:00",
    "contact.info.hours.saturday": "Суббота: 10:00 - 16:00",
    "contact.info.hours.sunday": "Воскресенье: Выходной",
    "contact.form.title": "Отправьте Нам Сообщение",
    "contact.form.fullName": "Полное Имя",
    "contact.form.fullNamePlaceholder": "Ваше полное имя",
    "contact.form.email": "Email Адрес",
    "contact.form.emailPlaceholder": "ваш.email@пример.ru",
    "contact.form.subject": "Тема",
    "contact.form.subjectPlaceholder": "Чем мы можем вам помочь?",
    "contact.form.message": "Сообщение",
    "contact.form.messagePlaceholder":
      "Расскажите нам больше о вашем запросе...",
    "contact.form.sending": "Отправка...",
    "contact.form.send": "Отправить Сообщение",
    "contact.form.success":
      "Сообщение успешно отправлено! Мы свяжемся с вами в течение 24 часов.",
    "contact.form.error":
      "Не удалось отправить сообщение. Пожалуйста, попробуйте снова.",
    "contact.map.title": "Наш Главный Офис",
    "contact.quick.title": "Нужна Немедленная Помощь?",
    "contact.quick.call": "Позвоните нам напрямую",
    "contact.quick.email": "Поддержка по email",
    "contact.quick.browse": "Просмотреть курсы",
    "contact.quick.browseDescription": "Найдите идеальный курс для себя",
    "contact.faq.badge": "Часто Задаваемые Вопросы",
    "contact.faq.title": "Часто Задаваемые Вопросы",
    "contact.faq.description":
      "Быстрые ответы на распространенные вопросы о наших курсах и услугах",
    "contact.faq.q1": "Предлагаете ли вы курсы на румынском и русском языках?",
    "contact.faq.a1":
      "Да! Все наши курсы доступны на румынском, русском и английском языках. Вы можете переключаться между языками в любое время в панели студента.",
    "contact.faq.q2":
      "Какое оборудование мне нужно для курсов по встраиваемым системам?",
    "contact.faq.a2":
      "Мы предоставляем стартовые комплекты для большинства курсов, включая платы Arduino, датчики и компоненты. Для продвинутых курсов мы предоставим подробный список оборудования.",
    "contact.faq.q3":
      "Есть ли какие-либо предварительные требования для ваших курсов?",
    "contact.faq.a3":
      "Базовые знания программирования полезны, но не требуются для начальных курсов. Каждая страница курса содержит список конкретных предварительных требований, если они есть.",
    "contact.faq.q4": "Выдаете ли вы сертификаты по окончании?",
    "contact.faq.a4":
      "Да, все студенты получают признанные в отрасли сертификаты после успешного завершения курса. Они ценятся работодателями в Молдове и Румынии.",
    "contact.faq.q5": "Могу ли я получить помощь, если застрял во время курса?",
    "contact.faq.a5":
      "Абсолютно! Мы предлагаем круглосуточную поддержку сообщества, еженедельные сессии вопросов и ответов и индивидуальное наставничество для премиум-студентов.",
    "contact.faq.notFound": "Не можете найти то, что ищете?",
    "contact.faq.askQuestion": "Задать Вопрос",
    "contact.cta.badge": "Готовы Начать?",
    "contact.cta.title": "Готовы Начать Свой Путь?",
    "contact.cta.description":
      "Присоединяйтесь к тысячам студентов, осваивающих встраиваемые системы. Начните сегодня с наших курсов для начинающих.",
    "contact.cta.browseCourses": "Просмотреть Курсы",
    "contact.cta.joinCommunity": "Присоединиться к Сообществу",

    // Hardware Page
    "hardware.title": "Премиальное Оборудование",
    "hardware.titleHighlight": "для Разработки и Платы",
    "hardware.description":
      "Профессиональные платы разработки и микроконтроллеры для ваших встраиваемых проектов.",
    "hardware.shopNow": "Купить Сейчас",
    "hardware.browseCategories": "Просмотреть Категории",
    "hardware.featuredProducts": "Рекомендуемые Продукты",
    "hardware.professionalBoards": "Профессиональные Платы Разработки",
    "hardware.boardsDescription":
      "Тщательно отобранный выбор лучших микроконтроллеров и платформ разработки",
    "hardware.whyBuyFromUs": "Почему Покупать у Нас?",
    "hardware.trustedWorldwide": "Доверяют Разработчики по Всему Миру",
    "hardware.serviceDescription":
      "Профессиональные услуги и поддержка для всех ваших потребностей в разработке встраиваемых систем",
    "hardware.qualityGuaranteed": "Гарантия Качества",
    "hardware.qualityDescription":
      "Все платы тестируются и проверяются перед отправкой",
    "hardware.fastShipping": "Быстрая Доставка",
    "hardware.shippingDescription":
      "Обработка в тот же день с доставкой 2-3 дня",
    "hardware.technicalSupport": "Техническая Поддержка",
    "hardware.supportDescription":
      "Экспертная помощь в настройке и устранении неполадок",
    "hardware.allBoards": "Все Платы",

    // Documentation Page
    "docs.title": "Все, Что Вам Нужно для",
    "docs.titleHighlight": "Успеха",
    "docs.description":
      "Всеобъемлющие руководства, учебные пособия и техническая документация, которые помогут вам освоить разработку встраиваемых систем.",
    "docs.searchPlaceholder": "Поиск в документации...",
    "docs.communityForum": "Форум Сообщества",
    "docs.communityDescription":
      "Присоединяйтесь к обсуждениям с другими студентами",
    "docs.technicalResources": "Технические Ресурсы",
    "docs.resourcesDescription": "Документация по оборудованию и инструментам",
    "docs.gettingStarted": "Начало Работы",
    "docs.courseGuides": "Руководства по Курсам",
    "docs.technicalReference": "Технический Справочник",
    "docs.toolsSetup": "Настройка Инструментов",
    "docs.faqs": "Часто Задаваемые Вопросы",
    "docs.noResults": "Результаты не найдены",
    "docs.adjustSearch": "Попробуйте изменить поиск или фильтры",
    "docs.clearFilters": "Очистить Фильтры",
    "docs.stillQuestions": "Остались Вопросы?",
    "docs.supportDescription":
      "Наша команда поддержки здесь, чтобы помочь. Свяжитесь с нами, и мы ответим как можно быстрее.",
    "docs.contactSupport": "Связаться с Поддержкой",
    "docs.joinCommunity": "Присоединиться к Сообществу",

    // Courses Page - Detailed
    "coursesPage.allAvailable": "Все Доступные Курсы",
    "coursesPage.masterEmbedded": "Освойте Встраиваемые",
    "coursesPage.systemsIot": "Системы и IoT",
    "coursesPage.discover":
      "Изучайте комплексные IT-курсы в Embedded School. Освойте embedded-системы, IoT и программирование через практическое обучение. Начните свой путь от новичка до профессионального уровня.",
    "coursesPage.coursesLabel": "Курсы",
    "coursesPage.studentsLabel": "Студенты",
    "coursesPage.avgRating": "Средний Рейтинг",
    "coursesPage.searchPlaceholder":
      "Поиск курсов по названию, описанию или ключевым словам...",
    "coursesPage.category": "Категория:",
    "coursesPage.level": "Уровень:",
    "coursesPage.found": "Найдено",
    "coursesPage.coursesFound": "Курсов Найдено",
    "coursesPage.courseFound": "Курс Найден",
    "coursesPage.professionalEducation":
      "Профессиональное образование по встраиваемым системам",
    "coursesPage.clearFilters": "Очистить Фильтры",
    "coursesPage.noCoursesFound": "Курсы не найдены",
    "coursesPage.adjustSearch":
      "Попробуйте изменить критерии поиска или просмотрите все курсы",
    "coursesPage.viewAllCourses": "Посмотреть Все Курсы",
    "coursesPage.enrollNow": "Записаться Сейчас",
    "coursesPage.professionalPack": "Профессиональный Пакет",
    "coursesPage.completeCareerPaths": "Полные Карьерные Пути",
    "coursesPage.careerPathsDescription":
      "Всеобъемлющие учебные треки, разработанные для конкретных инженерных ролей. Освойте несколько технологий в целенаправленных карьерных путях.",
    "coursesPage.embeddedProfessional": "Профессионал Встраиваемых Систем",
    "coursesPage.advanced": "Продвинутый",
    "coursesPage.embeddedProfDesc":
      "Полный путь от основ C++ до проектирования оборудования. Включает курсы по Тестированию ПО и Автомобильному QA и Проектированию PCB.",
    "coursesPage.duration": "Длительность:",
    "coursesPage.levelLabel": "Уровень:",
    "coursesPage.coursesIncluded": "Включенные Курсы:",
    "coursesPage.weeks": "недели",
    "coursesPage.save": "Сэкономьте",
    "coursesPage.startCareerPath": "Начать Карьерный Путь",
    "coursesPage.softwareDeveloper": "Трек Разработчика ПО",
    "coursesPage.beginnerIntermediate": "Начинающий до Среднего",
    "coursesPage.softwareDevDesc":
      "Освойте как Python, так и C++ от основ до продвинутых концепций. Идеальный фундамент для карьеры в разработке программного обеспечения.",
    "coursesPage.completeBundle": "Полный Инженерный Пакет",
    "coursesPage.allLevels": "Все Уровни",
    "coursesPage.completeBundleDesc":
      "Полный доступ ко всем доступным курсам. От основ Python до автомобильного QA и проектирования PCB. Полное инженерное образование.",
    "coursesPage.needSpecific": "Нужно Что-то Конкретное?",
    "coursesPage.cantFind": "Не Можете Найти То, Что Ищете?",
    "coursesPage.cantFindDesc":
      "Мы постоянно добавляем новые курсы. Свяжитесь с нами, чтобы предложить тему или получить уведомление о предстоящих выпусках.",
    "coursesPage.customCurriculum": "Индивидуальная Программа",
    "coursesPage.customCurriculumDesc":
      "Курсы, адаптированные под ваши конкретные потребности",
    "coursesPage.expertInstructors": "Экспертные Инструкторы",
    "coursesPage.expertInstructorsDesc": "Учитесь у профессионалов отрасли",
    "coursesPage.earlyAccess": "Ранний Доступ",
    "coursesPage.earlyAccessDesc":
      "Получайте уведомления о новых выпусках первыми",
    "coursesPage.contactUs": "Связаться с Нами",
    "coursesPage.subscribeUpdates": "Подписаться на Обновления",

    // Course Detail Page
    "courseDetail.home": "Главная",
    "courseDetail.courses": "Курсы",
    "courseDetail.reviews": "отзывов",
    "courseDetail.students": "студентов",
    "courseDetail.updated": "Обновлено",
    "courseDetail.certificateIncluded": "Сертификат включен",
    "courseDetail.previewCourse": "Предпросмотр Курса",
    "courseDetail.overview": "Обзор",
    "courseDetail.curriculum": "Программа",
    "courseDetail.instructor": "Инструктор",
    "courseDetail.reviewsTab": "Отзывы",
    "courseDetail.courseDescription": "Описание Курса",
    "courseDetail.whatYouLearn": "Что Вы Изучите",
    "courseDetail.requirements": "Требования",
    "courseDetail.courseCurriculum": "Программа Курса",
    "courseDetail.modules": "модулей",
    "courseDetail.lessons": "уроков",
    "courseDetail.rating": "Рейтинг",
    "courseDetail.studentsLabel": "Студенты",
    "courseDetail.experience": "Опыт",
    "courseDetail.coursesLabel": "Курсы",
    "courseDetail.studentReviews": "Отзывы Студентов",
    "courseDetail.reviewsDisplay": "Отзывы будут отображены здесь",
    "courseDetail.enrollNow": "Записаться Сейчас",
    "courseDetail.addToCart": "Добавить в Корзину",
    "courseDetail.share": "Поделиться",
    "courseDetail.moneyBack": "30-дневная гарантия возврата денег",
    "courseDetail.courseInformation": "Информация о Курсе",
    "courseDetail.level": "Уровень",
    "courseDetail.duration": "Длительность",
    "courseDetail.lessonsLabel": "Уроки",
    "courseDetail.language": "Язык",
    "courseDetail.certificate": "Сертификат",
    "courseDetail.yes": "Да",
    "courseDetail.limitedOffer": "СКИДКА 50% - Ограниченное Время",
    "courseDetail.notFound": "Курс не найден",
    "courseDetail.addedToCart": "Курс добавлен в корзину!",
    "courseDetail.sharedSuccess": "Курс успешно опубликован!",
    "courseDetail.shareFailed": "Не удалось поделиться курсом",
    "courseDetail.linkCopied": "Ссылка скопирована в буфер обмена!",
    "courseDetail.copyFailed": "Не удалось скопировать ссылку",

    // Junior Program Page
    "junior.weekend": "Выходная Школа для Юниоров",
    "junior.title": "Стройте",
    "junior.titleHighlight": "Ракеты Будущего",
    "junior.subtitle":
      "Для Юных Инноваторов 12-18 Лет • Занятия по Выходным • Практические Технические Проекты • Навыки для Будущей Карьеры",
    "junior.enrollNow": "Записаться Сейчас - Ограниченные Места!",
    "junior.viewCurriculum": "Посмотреть Программу",
    "junior.studentsTrained": "Обученных Студентов",
    "junior.completionRate": "Уровень Завершения",
    "junior.realProjects": "Реальных Проектов",
    "junior.parentRating": "Рейтинг Родителей",
    "junior.whyChoose": "Почему Выбрать Нашу Юниорскую Программу?",
    "junior.whyDescription":
      "Мы превращаем молодые умы в технологических инноваторов через проектное обучение, наставничество из индустрии и знакомство с передовыми технологиями.",
    "junior.spacetech": "Космические Технологии",
    "junior.spacetechDesc":
      "Узнайте о спутниках, ракетах и системах исследования космоса",
    "junior.aiRobotics": "ИИ и Робототехника",
    "junior.aiDesc":
      "Создавайте и программируйте умных роботов с машинным обучением",
    "junior.gameDev": "Разработка Игр",
    "junior.gameDevDesc":
      "Создавайте свои собственные видеоигры и интерактивные опыты",
    "junior.mobileApps": "Мобильные Приложения",
    "junior.mobileDesc":
      "Разрабатывайте приложения, которые управляют роботами и IoT устройствами",

    // Junior Section on Index Page
    "index.juniorProgram": "Юниорская Программа",
    "index.weekendSchool": "Выходная Школа для Юниоров",
    "index.buildRockets": "Стройте Ракеты Будущего",
    "index.juniorDescription":
      "Разработана для юных инноваторов в возрасте 12-18 лет. Наша программа выходного дня знакомит подростков с встраиваемыми системами, робототехникой и космическими технологиями через практические проекты и интерактивное обучение.",
    "index.interactiveLearning": "Интерактивное Обучение",
    "index.interactiveLearningDesc":
      "Изучайте программирование и электронику через игры, роботов и реальные проекты",
    "index.futureSkills": "Навыки Будущего",
    "index.futureSkillsDesc":
      "Развивайте решение проблем, креативность и технические навыки для завтрашних карьер",
    "index.weekendSchedule": "Выходное Расписание",
    "index.weekendScheduleDesc":
      "Гибкие занятия по выходным, которые не мешают школьным обязательствам",
    "index.joinJuniorProgram": "Присоединиться к Юниорской Программе",
    "index.learnMore": "Узнать Больше",
    "index.learnMoreJunior": "Узнать Больше О Юниорской Программе",

    // CTA Section
    "index.startJourney": "Начать Путешествие",
    "index.readyToBuild": "Готовы Строить Будущее?",
    "index.ctaDescription":
      "Присоединяйтесь к тысячам разработчиков, осваивающих встраиваемые системы. Начните с бесплатного предпросмотра курса и узнайте, почему профессионалы выбирают Embedded School.",
    "index.browseCoursesBtn": "Просмотреть Все Курсы",
    "index.contactUsBtn": "Связаться с Нами",

    // Junior Program Page - More translations
    "junior.ageGroups": "Программы по Возрастным Группам",
    "junior.yearRange": "лет",
    "junior.explorer": "Исследователь",
    "junior.innovator": "Инноватор",
    "junior.creator": "Создатель",
    "junior.basicRobots": "Базовые роботы",
    "junior.simpleGames": "Простые игры",
    "junior.ledCircuits": "LED схемы",
    "junior.smartDevices": "Умные устройства",
    "junior.sensorNetworks": "Сенсорные сети",
    "junior.aiSystems": "AI системы",
    "junior.advancedRobotics": "Продвинутая робототехника",
    "junior.industryProjects": "Промышленные проекты",
    "junior.foundationalProgramming": "Основы программирования и электроники",
    "junior.advancedSystems": "Продвинутые системы и IoT",
    "junior.realWorldProjects": "Реальные проекты и специализации",

    // Index Page - Professional Packs
    "index.embeddedC": "Встраиваемый C",
    "index.lowLevel": "Низкоуровневое программирование",
    "index.iotSystems": "IoT Системы",
    "index.connectedDevices": "Подключенные устройства",
    "index.professionalPack": "Профессиональный Пакет",
    "index.careerPaths": "Полные Карьерные Пути",
    "index.careerPathsDesc":
      "Всеобъемлющие учебные треки, разработанные для конкретных инженерных ролей. Освойте несколько технологий в целенаправленных карьерных путях.",
    "index.embeddedProfessional": "Профессионал Встраиваемых Систем",
    "index.advanced": "Продвинутый",
    "index.embeddedProfDesc":
      "Полный путь от основ C++ до проектирования оборудования. Включает курсы по Тестированию ПО и Автомобильному QA и Проектированию PCB.",
    "index.duration": "Длительность:",
    "index.level": "Уровень:",
    "index.coursesIncluded": "Включенные Курсы:",
    "index.weeks": "недели",
    "index.courses": "Курсы",
    "index.save": "Сэкономьте",
    "index.startCareerPath": "Начать Карьерный Путь",
    "index.softwareDeveloper": "Трек Разработчика ПО",
    "index.beginnerIntermediate": "Начинающий до Среднего",
    "index.softwareDevDesc":
      "Освойте как Python, так и C++ от основ до продвинутых концепций. Идеальный фундамент для карьеры в разработке программного обеспечения.",
    "index.completeBundle": "Полный Инженерный Пакет",
    "index.allLevels": "Все Уровни",
    "index.completeBundleDesc":
      "Полный доступ ко всем доступным курсам. От основ Python до автомобильного QA и проектирования PCB. Полное инженерное образование.",
    "index.activeCommunity": "Активное Сообщество",
    "index.communityDesc":
      "Присоединяйтесь к яркому сообществу разработчиков, наставников и отраслевых экспертов. Получайте помощь, делитесь проектами и общайтесь.",
    "index.onlineNow": "Сейчас онлайн:",
    "index.members": "участники",
    "index.certifiedThisMonth": "сертифицировано в этом месяце",

    // Forms - Common
    "form.title": "Начните Ваше Учебное Путешествие",
    "form.description":
      "Заполните эту форму, и мы свяжемся с вами с деталями курса и информацией о зачислении.",
    "form.careerPathDescription":
      "Вы подаете заявку на полный карьерный путь. Мы свяжемся с вами с подробной информацией обо всех включенных курсах.",
    "form.name": "Имя",
    "form.surname": "Фамилия",
    "form.namePlaceholder": "Введите ваше имя",
    "form.surnamePlaceholder": "Введите вашу фамилию",
    "form.email": "Адрес Электронной Почты",
    "form.emailPlaceholder": "Введите ваш email",
    "form.phone": "Номер Телефона",
    "form.phonePlaceholder": "Введите номер телефона",
    "form.message": "Дополнительное Сообщение",
    "form.messagePlaceholder":
      "Расскажите нам о ваших целях или любых конкретных вопросах...",
    "form.course": "Интересующий Курс",
    "form.coursePlaceholder": "Выберите курс, который вас интересует",
    "form.cancel": "Отмена",
    "form.submit": "Отправить Запрос",
    "form.submitting": "Отправка...",
    "form.submitCareerPath": "Подать Заявку на Карьерный Путь",
    "form.selectedCareerPath": "Выбранный Карьерный Путь",
    "form.includesCourses": "Включает",
    "form.courses": "курсов",
    "form.courseSingular": "курс",
    "form.missingInfo": "Отсутствующая Информация",
    "form.fillRequired":
      "Пожалуйста, заполните все обязательные поля (Имя, Фамилия и выбор курса).",
    "form.inquirySubmitted": "Запрос Отправлен!",
    "form.thankYou":
      "Спасибо за ваш интерес! Мы свяжемся с вами в ближайшее время с дополнительной информацией.",
    "form.submissionFailed": "Не Удалось Отправить",
    "form.errorMessage":
      "Произошла ошибка при отправке вашего запроса. Пожалуйста, попробуйте снова.",

    // Junior Program Form
    "juniorForm.title": "Присоединиться к Юниорской Программе",
    "juniorForm.description":
      "Запишитесь на нашу программу выходного дня для юниоров в возрасте 12-18 лет. Давайте вместе строить ракеты будущего!",
    "juniorForm.name": "Имя",
    "juniorForm.surname": "Фамилия",
    "juniorForm.namePlaceholder": "Введите ваше имя",
    "juniorForm.surnamePlaceholder": "Введите вашу фамилию",
    "juniorForm.email": "Email",
    "juniorForm.emailPlaceholder": "Введите ваш email",
    "juniorForm.phone": "Номер Телефона",
    "juniorForm.phonePlaceholder": "Введите номер телефона",
    "juniorForm.cancel": "Отмена",
    "juniorForm.joinProgram": "Присоединиться к Программе",
    "juniorForm.submitting": "Отправка...",
    "juniorForm.missingInfo": "Отсутствующая Информация",
    "juniorForm.fillRequired":
      "Пожалуйста, заполните все обязательные поля (имя, фамилия и email).",
    "juniorForm.success": "Успех!",
    "juniorForm.successMessage":
      "Ваш запрос на юниорскую программу успешно отправлен. Мы свяжемся с вами в ближайшее время!",
    "juniorForm.error": "Ошибка",
    "juniorForm.errorMessage":
      "Не удалось отправить ваш запрос. Пожалуйста, попробуйте снова.",

    // One-to-One Meeting Form
    "meetingForm.title": "Запросить Индивидуальную Сессию",
    "meetingForm.description":
      "Заполните данные, чтобы запланировать индивидуальную встречу с",
    "meetingForm.name": "Имя",
    "meetingForm.email": "Email",
    "meetingForm.phone": "Номер Телефона",
    "meetingForm.preferredDate": "Предпочтительная Дата/Время",
    "meetingForm.message": "Сообщение",
    "meetingForm.namePlaceholder": "Ваше полное имя",
    "meetingForm.emailPlaceholder": "ваш.email@пример.com",
    "meetingForm.phonePlaceholder": "+373 ________",
    "meetingForm.datePlaceholder":
      "например, Следующий понедельник после обеда",
    "meetingForm.messagePlaceholder":
      "Расскажите нам о ваших учебных целях или любых конкретных темах, которые вы хотели бы обсудить...",
    "meetingForm.cancel": "Отмена",
    "meetingForm.requestButton": "Запросить Индивидуальную Встречу",
    "meetingForm.submitting": "Отправка...",
    "meetingForm.missingInfo": "Отсутствующая Информация",
    "meetingForm.fillRequired":
      "Пожалуйста, заполните все обязательные поля (Имя и Email).",
    "meetingForm.success": "Запрос Отправлен!",
    "meetingForm.successMessage":
      "Ваш запрос на индивидуальную встречу с {trainer} получен. Мы свяжемся с вами в ближайшее время.",
    "meetingForm.error": "Не Удалось Отправить",
    "meetingForm.errorMessage":
      "Произошла ошибка при отправке вашего запроса. Пожалуйста, попробуйте снова.",

    // Trainer Application Form
    "trainerForm.title": "Подать Заявку на Роль Инструктора",
    "trainerForm.description":
      "Присоединяйтесь к нашей команде экспертных инструкторов и помогайте формировать следующее поколение инженеров встраиваемых систем. Заполните форму ниже, и мы свяжемся с вами в ближайшее время.",
    "trainerForm.fullName": "Полное Имя",
    "trainerForm.namePlaceholder": "Введите ваше полное имя",
    "trainerForm.email": "Адрес Электронной Почты",
    "trainerForm.emailPlaceholder": "ваш.email@пример.com",
    "trainerForm.phone": "Номер Телефона",
    "trainerForm.phonePlaceholder": "+373 ________",
    "trainerForm.expertise": "Основная Область Экспертизы",
    "trainerForm.expertisePlaceholder": "например, Встраиваемые Системы, IoT",
    "trainerForm.experienceYears": "Лет Опыта",
    "trainerForm.experienceYearsPlaceholder": "5",
    "trainerForm.linkedinUrl": "URL Профиля LinkedIn",
    "trainerForm.linkedinPlaceholder": "https://linkedin.com/in/...",
    "trainerForm.portfolioUrl": "URL Портфолио/Веб-сайта",
    "trainerForm.portfolioPlaceholder": "https://вашсайт.com",
    "trainerForm.bio": "Профессиональная Биография",
    "trainerForm.bioPlaceholder":
      "Расскажите нам о вашем профессиональном опыте, достижениях и экспертизе...",
    "trainerForm.whyTeach": "Почему Вы Хотите Преподавать?",
    "trainerForm.whyTeachPlaceholder":
      "Поделитесь своей мотивацией стать инструктором и что вы надеетесь принести нашим студентам...",
    "trainerForm.cancel": "Отмена",
    "trainerForm.submit": "Отправить Заявку",
    "trainerForm.submitting": "Отправка...",
    "trainerForm.missingInfo": "Отсутствующая Информация",
    "trainerForm.fillRequired": "Пожалуйста, заполните все обязательные поля.",
    "trainerForm.invalidExperience": "Неверный Опыт",
    "trainerForm.validYears":
      "Пожалуйста, введите корректное количество лет опыта.",
    "trainerForm.success": "Заявка Отправлена!",
    "trainerForm.successMessage":
      "Спасибо за ваш интерес стать инструктором! Мы рассмотрим вашу заявку и свяжемся с вами в ближайшее время.",
    "trainerForm.error": "Не Удалось Отправить",
    "trainerForm.errorMessage":
      "Произошла ошибка при отправке вашей заявки. Пожалуйста, попробуйте снова.",
  },
};

const isLang = (v: any): v is Language =>
  v === "en" || v === "ro" || v === "ru";

const getInitialLang = (): Language => {
  const saved = localStorage.getItem("language");
  if (isLang(saved)) return saved as Language;

  const prefs = (
    navigator.languages?.length ? navigator.languages : [navigator.language]
  ).map((l) => (l || "").toLowerCase());

  const supported: Language[] = ["ro", "ru", "en"];
  for (const p of prefs) {
    const base = p.split("-")[0] as Language;
    if ((supported as string[]).includes(base)) return base;
  }
  return "ro";
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>(getInitialLang);

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language;
    if (
      savedLanguage &&
      (savedLanguage === "en" ||
        savedLanguage === "ro" ||
        savedLanguage === "ru")
    ) {
      setLanguage(savedLanguage);
    }
  }, []);

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: string, defaultValue?: string): string => {
    return translations[language][key] || defaultValue || key;
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage: changeLanguage, t }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
