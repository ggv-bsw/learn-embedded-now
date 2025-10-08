import coursePython from "@/assets/course-python.jpg";
import courseCpp from "@/assets/course-cpp.jpg";
import coursePcbDesign from "@/assets/course-pcb-design.jpg";
import courseSoftwareTesting from "@/assets/course-software-testing-automotive.jpg";

export const getFeaturedCourses = (t: (key: string) => string) => [
  {
    id: "python-junior-beginner",
    title: "Python for Beginners – Junior Level",
    subtitle:
      "20 lessons over 10 weeks: solid Python foundations, data handling, OOP, testing, and mini-projects (CLI & Flask) with package management via uv",
    description:
      "A hands-on beginner curriculum. You’ll learn core programming concepts in Python, data structures, OOP, working with files and data (JSON/CSV), using external libraries with uv, unit testing, and best practices. By the end, you’ll build two mini-projects: a CLI To-Do app and a small Flask web app.",
    image: coursePython,
    price: 169,
    originalPrice: 229,
    duration: "10 weeks",
    link: "https://www.youtube.com/shorts/AoeWnfn-kGU",
    students: 14,
    rating: 4.8,
    totalRatings: 260,
    level: t("courses.python.level"),
    category: t("courses.python.category"),
    language: t("courses.python.language"),
    lastUpdated: "October 2025",
    instructor: {
      name: "Daniel Vrabii",
      title: "Lead Data Engineer",
      experience: "6+ years",
      students: 85,
      rating: 4.8,
      image:
        "https://media.licdn.com/dms/image/v2/D4D03AQGUSWvS2qP-uQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1683970542550?e=1760572800&v=beta&t=moGAvhHQ2niXRAQbN6HexdK_f88-usja1e0j3FZ_moI",
      bio: t("courses.python.instructor.bio"),
    },
    curriculum: [
      {
        title: t("courses.python.curriculum.week1.title"),
        lessons: [
          {
            title: t("courses.python.curriculum.week1.lesson1"),
            duration: "60 min",
            type: "video",
          },
          {
            title: t("courses.python.curriculum.week1.lesson2"),
            duration: "60 min",
            type: "video",
          },
        ],
      },
      {
        title: t("courses.python.curriculum.week2.title"),
        lessons: [
          {
            title: t("courses.python.curriculum.week2.lesson3"),
            duration: "60 min",
            type: "video",
          },
          {
            title: t("courses.python.curriculum.week2.lesson4"),
            duration: "60 min",
            type: "video",
          },
        ],
      },
      {
        title: "Week 3 – Core Data Structures",
        lessons: [
          {
            title:
              "Lesson 5: Lists — indexing, slicing, common methods; shopping list manager",
            duration: "60 min",
            type: "video",
          },
          {
            title:
              "Lesson 6: Tuples & sets — differences and use cases; remove duplicates",
            duration: "60 min",
            type: "video",
          },
        ],
      },
      {
        title: "Week 4 – Dictionaries and Functions",
        lessons: [
          {
            title:
              "Lesson 7: Dictionaries — iterating keys/values, useful methods; student gradebook",
            duration: "60 min",
            type: "video",
          },
          {
            title:
              "Lesson 8: Functions — def, parameters, return, scope; math utilities",
            duration: "60 min",
            type: "video",
          },
        ],
      },
      {
        title: "Week 5 – Modular Programming & Errors",
        lessons: [
          {
            title:
              "Lesson 9: Modules & packages, imports; standard libraries (math, random, datetime); random password generator",
            duration: "60 min",
            type: "video",
          },
          {
            title:
              "Lesson 10: Error handling with try/except/finally; robust numeric input",
            duration: "60 min",
            type: "video",
          },
        ],
      },
      {
        title: "Week 6 – OOP in Python",
        lessons: [
          {
            title:
              "Lesson 11: OOP intro — classes, objects, attributes, methods; Car class start/stop",
            duration: "60 min",
            type: "video",
          },
          {
            title:
              "Lesson 12: Constructors, inheritance, polymorphism, __str__; animal hierarchy",
            duration: "60 min",
            type: "video",
          },
        ],
      },
      {
        title: "Week 7 – Files and Working with Data",
        lessons: [
          {
            title:
              "Lesson 13: Reading & writing text files; journal app that saves notes",
            duration: "60 min",
            type: "video",
          },
          {
            title:
              "Lesson 14: JSON & CSV — data manipulation; product CSV report",
            duration: "60 min",
            type: "video",
          },
        ],
      },
      {
        title: "Week 8 – External Libraries with uv",
        lessons: [
          {
            title:
              "Lesson 15: uv — setup & usage (virtual envs, install packages, version pinning); isolated env + requests",
            duration: "60 min",
            type: "video",
          },
          {
            title:
              "Lesson 16: Intro to pandas for tabular data (basics); simple CSV analysis (installed via uv)",
            duration: "60 min",
            type: "video",
          },
        ],
      },
      {
        title: "Week 9 – Testing and Best Practices",
        lessons: [
          {
            title:
              "Lesson 17: Unit testing (unittest/pytest) and debugging principles; tests for math functions",
            duration: "60 min",
            type: "video",
          },
          {
            title:
              "Lesson 18: PEP 8 style guide, docstrings, Git & GitHub (intro); create a small repo",
            duration: "60 min",
            type: "video",
          },
        ],
      },
      {
        title: "Week 10 – Final Mini-Projects",
        lessons: [
          {
            title: "Lesson 19: Project 1 — To-Do List with files (CLI app)",
            duration: "90 min",
            type: "project",
          },
          {
            title:
              "Lesson 20: Project 2 — Small Flask web app (CRUD for notes) — installed & run with uv",
            duration: "120 min",
            type: "capstone",
          },
        ],
      },
    ],
    features: [
      t("courses.python.features.0"),
      t("courses.python.features.1"),
      t("courses.python.features.2"),
      t("courses.python.features.3"),
      t("courses.python.features.4"),
      t("courses.python.features.5"),
      t("courses.python.features.6"),
    ],
    requirements: [
      t("courses.python.requirements.0"),
      t("courses.python.requirements.1"),
      t("courses.python.requirements.2"),
      t("courses.python.requirements.3"),
    ],
    outcomes: [
      t("courses.python.outcomes.0"),
      t("courses.python.outcomes.1"),
      t("courses.python.outcomes.2"),
      t("courses.python.outcomes.3"),
      t("courses.python.outcomes.4"),
      t("courses.python.outcomes.5"),
    ],
  },
  {
    id: "cpp-bsw-beginner-to-advanced",
    title: "C++ Course: From BSW Beginner to BSW Advanced",
    subtitle:
      "Learn modern C++ step by step — from syntax and memory to STL, concurrency, patterns, and production CMake",
    description:
      "A 25-lesson journey that takes you from zero to advanced C++ at BSW. You’ll build confidence with core language features, master memory and the STL, write multi-file and multi-threaded programs, and structure real projects with modern CMake. Every lesson pairs theory with hands-on labs and progressive challenges.",
    image: courseCpp,
    price: 279,
    originalPrice: 399,
    duration: "12 weeks",
    students: 11,
    rating: 4.8,
    totalRatings: 180,
    level: t("courses.cpp.level"),
    category: t("courses.cpp.category"),
    language: t("courses.cpp.language"),
    lastUpdated: "October 2025",
    instructor: {
      name: "Grigore Ciobanu",
      title: "Senior Software Engineer",
      experience: "8+ years",
      students: 75,
      rating: 4.8,
      image:
        "https://media.licdn.com/dms/image/v2/D4D03AQEi63NbK8JmZQ/profile-displayphoto-scale_400_400/B4DZfk_n5PGYAs-/0/1751893574038?e=1762387200&v=beta&t=eh1mbV9h0ydwq7toFdLv00x3PFkAIGyKDrnh-rQHiGI",
      bio: t("courses.cpp.instructor.bio"),
    },
    curriculum: [
      {
        title: "Phase 1: Fundamentals (Lessons 1–8)",
        lessons: [
          {
            title: "Intro to C++ & CMake + Hello World",
            duration: "35 min",
            type: "video",
          },
          {
            title: "Lab: Build Hello & Greet by Name (CMake single target)",
            duration: "45 min",
            type: "hands-on",
          },
          {
            title: "Basic Syntax, Variables, and Types",
            duration: "40 min",
            type: "video",
          },
          {
            title: "Exercise: Rectangle & Circle Area (I/O + menu)",
            duration: "50 min",
            type: "project",
          },
          {
            title: "Control Flow: if/switch and loops (for/while/do-while)",
            duration: "40 min",
            type: "video",
          },
          {
            title: "Challenge: Sum 1..n & Prime Checker",
            duration: "45 min",
            type: "hands-on",
          },
          {
            title: "Functions, Overloading, Defaults & Recursion",
            duration: "40 min",
            type: "video",
          },
          {
            title: "Lab: Areas API + Recursive Factorial",
            duration: "50 min",
            type: "hands-on",
          },
        ],
      },
      {
        title:
          "Phase 1 Add-Ons: Arrays & Strings; Pointers & Memory; Classes & OOP",
        lessons: [
          {
            title: "Arrays & std::string Essentials",
            duration: "35 min",
            type: "video",
          },
          {
            title: "Lab: Max in Array, Reverse & Palindrome",
            duration: "45 min",
            type: "hands-on",
          },
          {
            title: "Pointers, new/delete & RAII basics",
            duration: "40 min",
            type: "video",
          },
          {
            title: "Lab: Dynamic Array Average & Pointer Swap",
            duration: "45 min",
            type: "hands-on",
          },
          {
            title: "Classes, Ctors/Dtors, Static Members",
            duration: "40 min",
            type: "video",
          },
          {
            title: "Project: Car class with counters & methods",
            duration: "60 min",
            type: "project",
          },
          {
            title: "Inheritance & Polymorphism with virtual",
            duration: "40 min",
            type: "video",
          },
          {
            title: "Lab: Shape → Circle/Rectangle (area & perimeter)",
            duration: "55 min",
            type: "hands-on",
          },
        ],
      },
      {
        title: "Phase 2: Intermediate Topics (Lessons 9–17)",
        lessons: [
          {
            title: "Operator Overloading (arithmetic/relational/stream)",
            duration: "45 min",
            type: "video",
          },
          {
            title: "Lab: Complex + and << overloads",
            duration: "50 min",
            type: "hands-on",
          },
          {
            title: "Templates: function & class; specialization",
            duration: "45 min",
            type: "video",
          },
          {
            title: "Project: Template Stack + char specialization",
            duration: "60 min",
            type: "project",
          },
          {
            title: "Exceptions: throw/try/catch & error safety",
            duration: "40 min",
            type: "video",
          },
          {
            title: "Lab: Division by zero & multi-error handling",
            duration: "45 min",
            type: "hands-on",
          },
          {
            title: "File I/O: streams, formats, error handling",
            duration: "40 min",
            type: "video",
          },
          {
            title: "Project: Student records (save/load + errors)",
            duration: "60 min",
            type: "project",
          },
          {
            title: "Intro to STL: vector/map & algorithms (sort/find)",
            duration: "50 min",
            type: "video",
          },
        ],
      },
      {
        title:
          "Phase 2 Add-Ons: Smart Pointers, Threads, CMake (multi-file), Patterns",
        lessons: [
          {
            title: "Memory Mgmt: unique_ptr/shared_ptr & ownership",
            duration: "40 min",
            type: "video",
          },
          {
            title: "Lab: Refactor to unique_ptr; collection with shared_ptr",
            duration: "50 min",
            type: "hands-on",
          },
          {
            title: "Multithreading: std::thread & mutex basics",
            duration: "45 min",
            type: "video",
          },
          {
            title: "Lab: Parallel array sum with synchronization",
            duration: "55 min",
            type: "hands-on",
          },
          {
            title: "CMake for multi-file & multi-target projects",
            duration: "40 min",
            type: "video",
          },
          {
            title: "Lab: Split into libs/executables + option()",
            duration: "55 min",
            type: "hands-on",
          },
          {
            title: "Design Patterns I: Singleton & Factory",
            duration: "45 min",
            type: "video",
          },
          {
            title: "Project: Config Singleton + Shape Factory",
            duration: "60 min",
            type: "project",
          },
        ],
      },
      {
        title: "Phase 3: Advanced Topics (Lessons 18–25)",
        lessons: [
          {
            title: "Advanced STL: iterators & custom comparators",
            duration: "45 min",
            type: "video",
          },
          {
            title: "Lab: Sort custom Person list by age",
            duration: "45 min",
            type: "hands-on",
          },
          {
            title: "Advanced Exceptions: custom types & hierarchies",
            duration: "40 min",
            type: "video",
          },
          {
            title: "Lab: Validate inputs with custom exceptions",
            duration: "45 min",
            type: "hands-on",
          },
          {
            title: "Advanced CMake: external libs, configs, build types",
            duration: "45 min",
            type: "video",
          },
          {
            title: "Lab: Link external lib + target_compile_definitions",
            duration: "55 min",
            type: "hands-on",
          },
          {
            title: "Preprocessor, compilation & linking workflow",
            duration: "40 min",
            type: "video",
          },
          {
            title: "Lab: Macros, multi-file lib & consumer app",
            duration: "55 min",
            type: "hands-on",
          },
        ],
      },
      {
        title:
          "Phase 3 Add-Ons: Lambdas, Patterns II, Debugging/Optimization, Capstone",
        lessons: [
          {
            title: "Lambdas with STL (capture & predicates)",
            duration: "40 min",
            type: "video",
          },
          {
            title: "Lab: Filter & sort with lambdas",
            duration: "45 min",
            type: "hands-on",
          },
          {
            title: "Design Patterns II: Observer & Strategy",
            duration: "45 min",
            type: "video",
          },
          {
            title:
              "Project: Stock tracker (Observer) + pluggable sort (Strategy)",
            duration: "60 min",
            type: "project",
          },
          {
            title: "Debugging & Profiling; O2/O3 & sanitizer flags",
            duration: "45 min",
            type: "video",
          },
          {
            title: "Lab: Optimize slow sort; CMake options for builds",
            duration: "55 min",
            type: "hands-on",
          },
          {
            title: "Capstone Planning: scope & architecture",
            duration: "30 min",
            type: "video",
          },
          {
            title: "Capstone Build: Text game or Library system",
            duration: "120 min",
            type: "capstone",
          },
        ],
      },
    ],
    features: [
      t("courses.cpp.features.0"),
      t("courses.cpp.features.1"),
      t("courses.cpp.features.2"),
      t("courses.cpp.features.3"),
      t("courses.cpp.features.4"),
      t("courses.cpp.features.5"),
      t("courses.cpp.features.6"),
      t("courses.cpp.features.7"),
    ],
    requirements: [
      t("courses.cpp.requirements.0"),
      t("courses.cpp.requirements.1"),
      t("courses.cpp.requirements.2"),
      t("courses.cpp.requirements.3"),
    ],
  },
  {
    id: "pcb-design-fundamentals",
    title: t("courses.pcb.title"),
    subtitle: t("courses.pcb.subtitle"),
    description: t("courses.pcb.description"),
    image: coursePcbDesign,
    price: 249,
    originalPrice: 349,
    duration: "8 weeks",
    students: 18,
    rating: 4.9,
    totalRatings: 145,
    level: t("courses.pcb.level"),
    category: t("courses.pcb.category"),
    language: t("courses.pcb.language"),
    lastUpdated: "October 2025",
    instructor: {
      name: "Elena Popescu",
      title: "Hardware Design Engineer",
      experience: "10+ years",
      students: 92,
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
      bio: t("courses.pcb.instructor.bio"),
    },
    curriculum: [
      {
        title: "Week 1-2: Schematic Design Fundamentals",
        lessons: [
          {
            title:
              "Introduction to PCB design workflow and tools (KiCad/Altium)",
            duration: "90 min",
            type: "video",
          },
          {
            title: "Component selection and schematic symbol creation",
            duration: "120 min",
            type: "hands-on",
          },
          {
            title: "Schematic capture best practices and design rules",
            duration: "90 min",
            type: "video",
          },
          {
            title: "Project: Design a basic power supply schematic",
            duration: "180 min",
            type: "project",
          },
        ],
      },
      {
        title: "Week 3-4: PCB Layout Basics",
        lessons: [
          {
            title: "PCB stackup and layer configuration",
            duration: "90 min",
            type: "video",
          },
          {
            title:
              "Component placement strategies and design for manufacturing",
            duration: "120 min",
            type: "hands-on",
          },
          {
            title: "Routing techniques and trace width calculations",
            duration: "90 min",
            type: "video",
          },
          {
            title: "Lab: Layout a 2-layer Arduino shield",
            duration: "180 min",
            type: "hands-on",
          },
        ],
      },
      {
        title: "Week 5-6: Advanced PCB Techniques",
        lessons: [
          {
            title: "Signal integrity and high-speed design considerations",
            duration: "120 min",
            type: "video",
          },
          {
            title: "Power distribution networks and ground planes",
            duration: "90 min",
            type: "video",
          },
          {
            title: "EMC/EMI design guidelines",
            duration: "90 min",
            type: "video",
          },
          {
            title: "Project: Design a multi-layer IoT sensor board",
            duration: "240 min",
            type: "project",
          },
        ],
      },
      {
        title: "Week 7-8: Manufacturing and Final Project",
        lessons: [
          {
            title: "Design for manufacturing (DFM) and assembly (DFA)",
            duration: "90 min",
            type: "video",
          },
          {
            title: "Generating fabrication files and BOM",
            duration: "90 min",
            type: "hands-on",
          },
          {
            title: "PCB testing and debugging techniques",
            duration: "90 min",
            type: "video",
          },
          {
            title: "Capstone: Complete 4-layer embedded system PCB",
            duration: "360 min",
            type: "capstone",
          },
        ],
      },
    ],
    features: [
      t("courses.pcb.features.0"),
      t("courses.pcb.features.1"),
      t("courses.pcb.features.2"),
      t("courses.pcb.features.3"),
      t("courses.pcb.features.4"),
      t("courses.pcb.features.5"),
      t("courses.pcb.features.6"),
    ],
    requirements: [
      t("courses.pcb.requirements.0"),
      t("courses.pcb.requirements.1"),
      t("courses.pcb.requirements.2"),
      t("courses.pcb.requirements.3"),
    ],
    outcomes: [
      t("courses.pcb.outcomes.0"),
      t("courses.pcb.outcomes.1"),
      t("courses.pcb.outcomes.2"),
      t("courses.pcb.outcomes.3"),
      t("courses.pcb.outcomes.4"),
      t("courses.pcb.outcomes.5"),
    ],
  },
  {
    id: "software-testing-automotive-qa",
    title: t("courses.testing.title"),
    subtitle: t("courses.testing.subtitle"),
    description: t("courses.testing.description"),
    image: courseSoftwareTesting,
    price: 299,
    originalPrice: 429,
    duration: "10 weeks",
    students: 22,
    rating: 4.9,
    totalRatings: 168,
    level: t("courses.testing.level"),
    category: t("courses.testing.category"),
    language: t("courses.testing.language"),
    lastUpdated: "October 2025",
    instructor: {
      name: "Michael Schmidt",
      title: "Automotive QA Lead",
      experience: "12+ years",
      students: 115,
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      bio: t("courses.testing.instructor.bio"),
    },
    curriculum: [
      {
        title: "Week 1-2: Fundamentals of Automotive Software Testing",
        lessons: [
          {
            title: "Automotive software architecture and V-model",
            duration: "90 min",
            type: "video",
          },
          {
            title: "Introduction to ISO 26262 functional safety",
            duration: "120 min",
            type: "video",
          },
          {
            title: "Test planning and requirement-based testing",
            duration: "90 min",
            type: "video",
          },
          {
            title: "Lab: Create test plans for an ECU module",
            duration: "180 min",
            type: "hands-on",
          },
        ],
      },
      {
        title: "Week 3-4: Test Automation & Tools",
        lessons: [
          {
            title: "Test automation frameworks (pytest, Robot Framework)",
            duration: "120 min",
            type: "video",
          },
          {
            title: "CANoe/CANalyzer for vehicle network testing",
            duration: "120 min",
            type: "hands-on",
          },
          {
            title: "CI/CD pipelines for automotive software",
            duration: "90 min",
            type: "video",
          },
          {
            title: "Project: Automated CAN bus testing suite",
            duration: "240 min",
            type: "project",
          },
        ],
      },
      {
        title: "Week 5-6: HIL/SIL Testing",
        lessons: [
          {
            title: "Hardware-in-the-Loop (HIL) testing principles",
            duration: "120 min",
            type: "video",
          },
          {
            title: "Software-in-the-Loop (SIL) and Model-in-the-Loop (MIL)",
            duration: "90 min",
            type: "video",
          },
          {
            title: "dSPACE and Vector HIL systems",
            duration: "120 min",
            type: "hands-on",
          },
          {
            title: "Lab: Set up and execute HIL test scenarios",
            duration: "240 min",
            type: "hands-on",
          },
        ],
      },
      {
        title: "Week 7-8: AUTOSAR Testing & Integration",
        lessons: [
          {
            title: "AUTOSAR architecture and component testing",
            duration: "120 min",
            type: "video",
          },
          {
            title: "BSW module testing strategies",
            duration: "90 min",
            type: "video",
          },
          {
            title: "RTE and SWC integration testing",
            duration: "120 min",
            type: "video",
          },
          {
            title: "Project: AUTOSAR stack validation suite",
            duration: "300 min",
            type: "project",
          },
        ],
      },
      {
        title: "Week 9-10: Advanced Topics & Capstone",
        lessons: [
          {
            title: "Cybersecurity testing for automotive systems",
            duration: "120 min",
            type: "video",
          },
          {
            title: "OTA update validation and testing",
            duration: "90 min",
            type: "video",
          },
          {
            title: "Performance and stress testing for ECUs",
            duration: "90 min",
            type: "video",
          },
          {
            title: "Capstone: Complete test suite for ADAS feature",
            duration: "480 min",
            type: "capstone",
          },
        ],
      },
    ],
    features: [
      t("courses.testing.features.0"),
      t("courses.testing.features.1"),
      t("courses.testing.features.2"),
      t("courses.testing.features.3"),
      t("courses.testing.features.4"),
      t("courses.testing.features.5"),
      t("courses.testing.features.6"),
    ],
    requirements: [
      t("courses.testing.requirements.0"),
      t("courses.testing.requirements.1"),
      t("courses.testing.requirements.2"),
      t("courses.testing.requirements.3"),
      t("courses.testing.requirements.4"),
    ],
    outcomes: [
      t("courses.testing.outcomes.0"),
      t("courses.testing.outcomes.1"),
      t("courses.testing.outcomes.2"),
      t("courses.testing.outcomes.3"),
      t("courses.testing.outcomes.4"),
      t("courses.testing.outcomes.5"),
    ],
  },
];

export const featuredCourses = getFeaturedCourses((key: string) => key);
