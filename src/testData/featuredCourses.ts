import courseArduino from "@/assets/course-arduino.jpg";
import courseIot from "@/assets/course-iot.jpg";
import courseEmbeddedC from "@/assets/course-embedded-c.jpg";
import coursePython from "@/assets/course-python.jpg";
import courseCpp from "@/assets/course-cpp.jpg";

export const featuredCourses = [
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
    level: "Beginner" as const,
    category: "Python",
    language: "English",
    lastUpdated: "October 2025",
    instructor: {
      name: "Daniel Vrabii",
      title: "Lead Data Engineer",
      experience: "6+ years",
      students: 85,
      rating: 4.8,
      image:
        "https://media.licdn.com/dms/image/v2/D4D03AQGUSWvS2qP-uQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1683970542550?e=1760572800&v=beta&t=moGAvhHQ2niXRAQbN6HexdK_f88-usja1e0j3FZ_moI",
      bio: "Data engineering expert with strong background in machine learning and distributed systems. Has built scalable data pipelines for multiple Fortune 500 companies. Enjoys transforming complex data concepts into practical learning experiences.",
    },
    curriculum: [
      {
        title: "Week 1 – Intro to Programming and Python",
        lessons: [
          {
            title:
              "Lesson 1: What is programming? Install Python, editors (VS Code, PyCharm), first steps in terminal; Hello World & running a script",
            duration: "60 min",
            type: "video",
          },
          {
            title:
              "Lesson 2: Fundamental data types (int, float, string, bool), variables, type conversions; mini-exercises",
            duration: "60 min",
            type: "video",
          },
        ],
      },
      {
        title: "Week 2 – Control Flow",
        lessons: [
          {
            title:
              "Lesson 3: Conditionals (if/elif/else), logical & relational operators; password check program",
            duration: "60 min",
            type: "video",
          },
          {
            title:
              "Lesson 4: Loops (while, for) and range(); number guessing game",
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
      "Clear structure: 2 lessons/week for 10 weeks",
      "Practice embedded in every lesson",
      "Package & environment management with uv",
      "CLI and web (Flask) mini-projects",
      "Best practices: PEP 8, docstrings, Git",
      "Access to community and resources",
      "Certificate of completion",
    ],
    requirements: [
      "Laptop with internet connection",
      "Willingness to learn by doing",
      "GitHub account (recommended for projects)",
      "Code editor (VS Code or PyCharm) — set up in Week 1",
    ],
    outcomes: [
      "Write clean, well-structured Python code",
      "Work effectively with lists, sets, dictionaries, and OOP",
      "Handle files and data (JSON/CSV)",
      "Use uv to install and manage external libraries",
      "Write unit tests and use Git",
      "Build complete mini-apps (CLI and web)",
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
    level: "Intermediate" as const,
    category: "C++",
    language: "English",
    lastUpdated: "October 2025",
    instructor: {
      name: "Grigore Ciobanu",
      title: "Senior Software Engineer",
      experience: "8+ years",
      students: 75,
      rating: 4.8,
      image:
        "https://media.licdn.com/dms/image/v2/D4D03AQEi63NbK8JmZQ/profile-displayphoto-scale_400_400/B4DZfk_n5PGYAs-/0/1751893574038?e=1762387200&v=beta&t=eh1mbV9h0ydwq7toFdLv00x3PFkAIGyKDrnh-rQHiGI",
      bio: "Linux and IoT specialist with deep expertise in network programming and embedded Linux systems. Has contributed to numerous open-source projects and enjoys mentoring developers in system-level programming.",
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
      "Modern C++ (C++17/20) with real projects",
      "Hands-on labs every module",
      "Production-grade CMake setups",
      "Multithreading & STL best practices",
      "Design patterns with practical use",
      "Code reviews and feedback",
      "Certificate of completion",
      "Discord community & resources",
    ],
    requirements: [
      "Basic programming familiarity helpful (not mandatory)",
      "Laptop with a modern C++ compiler (GCC/Clang/MSVC)",
      "CMake 3.20+ and a code editor (VS Code/CLion)",
      "Willingness to practice and iterate",
    ],
  },
  {
    id: "pcb-design-fundamentals",
    title: "PCB Design Fundamentals",
    subtitle:
      "Complete course on printed circuit board development - from basic concepts to professional design in KiCAD",
    description:
      "Comprehensive course for beginners, students and university graduates. Covers basic principles of PCB development, tools and design skills. Students will learn the entire process from concept to manufacturing preparation.",
    image: courseArduino,
    price: 189,
    originalPrice: 279,
    duration: "8 weeks",
    students: 8,
    rating: 4.7,
    totalRatings: 45,
    level: "Beginner" as const,
    category: "Electronics",
    language: "English",
    lastUpdated: "January 2025",
    instructor: {
      name: "Alexandr Cernii",
      title: "Senior Electronics Engineer",
      experience: "9+ years",
      students: 62,
      rating: 4.8,
      image:
        "https://media.licdn.com/dms/image/v2/D4E03AQF_ABCDEFGHIJ/profile-displayphoto-shrink_400_400/0/1234567890123?e=1762387200&v=beta&t=xyz123",
      bio: "Electronics design expert with extensive experience in PCB development and hardware prototyping. Specialized in high-speed digital design and signal integrity. Passionate about teaching practical electronics design skills.",
    },
    curriculum: [
      {
        title: "Introduction to Electronics Development",
        lessons: [
          {
            title: "About electronics development and PCB's role in it",
            duration: "25 min",
            type: "video",
          },
          {
            title: "Practical tips for electronics development",
            duration: "30 min",
            type: "video",
          },
          {
            title: "What are printed circuit boards? Types and variations",
            duration: "35 min",
            type: "video",
          },
          {
            title: "Lab: PCB types identification",
            duration: "45 min",
            type: "hands-on",
          },
        ],
      },
      {
        title: "PCB Fundamentals",
        lessons: [
          {
            title: "Basic board elements and structure",
            duration: "40 min",
            type: "video",
          },
          {
            title: "Materials for manufacturing",
            duration: "35 min",
            type: "video",
          },
          {
            title: "Manufacturer technological capabilities",
            duration: "30 min",
            type: "video",
          },
          {
            title: "Project: Material selection exercise",
            duration: "60 min",
            type: "project",
          },
        ],
      },
      {
        title: "Electronic Components",
        lessons: [
          {
            title: "What are electronic components",
            duration: "25 min",
            type: "video",
          },
          {
            title: "Types of components and packages",
            duration: "40 min",
            type: "video",
          },
          {
            title: "Most common component packages",
            duration: "35 min",
            type: "video",
          },
          {
            title: "Where to find components and selection criteria",
            duration: "30 min",
            type: "video",
          },
          {
            title: "Lab: Component identification",
            duration: "75 min",
            type: "hands-on",
          },
        ],
      },
      {
        title: "Ideal vs Real Connections",
        lessons: [
          {
            title: "Difference between ideal and real connections",
            duration: "35 min",
            type: "video",
          },
          {
            title: "Equivalent circuit of components",
            duration: "40 min",
            type: "video",
          },
          {
            title: "Project: Real vs ideal analysis",
            duration: "90 min",
            type: "project",
          },
        ],
      },
      {
        title: "Introduction to KiCAD",
        lessons: [
          {
            title: "What is ECAD? KiCAD concept and structure",
            duration: "30 min",
            type: "video",
          },
          {
            title: "Library and component creation",
            duration: "45 min",
            type: "video",
          },
          {
            title: "Installing and connecting libraries",
            duration: "35 min",
            type: "video",
          },
          {
            title: "Creating schematic symbols",
            duration: "50 min",
            type: "video",
          },
          {
            title: "Creating component footprints",
            duration: "55 min",
            type: "video",
          },
          {
            title: "Lab: First component creation",
            duration: "120 min",
            type: "hands-on",
          },
        ],
      },
      {
        title: "Project Creation",
        lessons: [
          {
            title: "Creating schematics",
            duration: "40 min",
            type: "video",
          },
          {
            title: "Creating PCB layout",
            duration: "45 min",
            type: "video",
          },
          {
            title: "Feature overview",
            duration: "35 min",
            type: "video",
          },
          {
            title: "Project: Simple circuit design",
            duration: "150 min",
            type: "project",
          },
        ],
      },
      {
        title: "PCB Routing",
        lessons: [
          {
            title: "Dimension definition",
            duration: "25 min",
            type: "video",
          },
          {
            title: "Stack-up definition",
            duration: "30 min",
            type: "video",
          },
          {
            title: "Design rules definition",
            duration: "35 min",
            type: "video",
          },
          {
            title: "Component placement planning",
            duration: "40 min",
            type: "video",
          },
          {
            title: "Vias and holes",
            duration: "30 min",
            type: "video",
          },
          {
            title: "Keep-out areas",
            duration: "25 min",
            type: "video",
          },
          {
            title: "Component placement priorities",
            duration: "35 min",
            type: "video",
          },
          {
            title: "Conductor routing",
            duration: "45 min",
            type: "video",
          },
          {
            title: "Practical routing tips",
            duration: "40 min",
            type: "video",
          },
          {
            title: "Copper pours",
            duration: "35 min",
            type: "video",
          },
          {
            title: "Test points",
            duration: "25 min",
            type: "video",
          },
          {
            title: "Silkscreen design",
            duration: "30 min",
            type: "video",
          },
          {
            title: "Design rule checking",
            duration: "40 min",
            type: "video",
          },
          {
            title: "Lab: Complete PCB routing",
            duration: "180 min",
            type: "hands-on",
          },
        ],
      },
      {
        title: "Manufacturing Preparation",
        lessons: [
          {
            title: "Gerber file generation",
            duration: "35 min",
            type: "video",
          },
          {
            title: "Placing manufacturing orders",
            duration: "30 min",
            type: "video",
          },
          {
            title: "Documentation preparation",
            duration: "40 min",
            type: "video",
          },
          {
            title: "Component ordering",
            duration: "35 min",
            type: "video",
          },
          {
            title: "Project: Manufacturing package",
            duration: "120 min",
            type: "project",
          },
        ],
      },
      {
        title: "Advanced Design Considerations",
        lessons: [
          {
            title: "High-speed signals",
            duration: "45 min",
            type: "video",
          },
          {
            title: "Thermal management",
            duration: "40 min",
            type: "video",
          },
          {
            title: "High voltage design",
            duration: "35 min",
            type: "video",
          },
          {
            title: "Final Project: Complete PCB Design",
            duration: "240 min",
            type: "capstone",
          },
        ],
      },
    ],
    features: [
      "Complete KiCAD mastery",
      "From schematic to manufacturing",
      "Real-world design techniques",
      "Component library creation",
      "Design rule optimization",
      "Manufacturing preparation",
      "Professional documentation",
      "Lifetime course access",
    ],
    requirements: [
      "Basic knowledge of physics and electronics",
      "Understanding of Ohm's law",
      "Familiarity with basic electronic components",
      "Computer with KiCAD software",
      "Willingness to learn design principles",
    ],
    outcomes: [
      "Design complete PCBs from concept to production",
      "Create custom component libraries",
      "Apply design rules and constraints",
      "Generate manufacturing files",
      "Understand high-speed and thermal considerations",
      "Work with PCB manufacturers effectively",
    ],
  },
  {
    id: "software-testing-automotive",
    title: "Software Testing & Automotive QA",
    subtitle:
      "Complete 200-hour course covering software testing fundamentals, web testing, and embedded automotive systems testing",
    description:
      "Comprehensive software testing course following ISTQB principles with specialized focus on automotive embedded systems. Learn manual testing, automation, V-Model, SIL/HIL testing, and functional safety standards (ISO 26262).",
    image: courseArduino,
    price: 399,
    originalPrice: 599,
    duration: "12 weeks",
    students: 6,
    rating: 4.9,
    totalRatings: 38,
    level: "Intermediate" as const,
    category: "Software Testing",
    language: "English",
    lastUpdated: "January 2025",
    instructor: {
      name: "Ion Caruta",
      title: "Senior QA Engineer",
      experience: "6+ years",
      students: 70,
      rating: 4.7,
      image:
        "https://media.licdn.com/dms/image/v2/C4D03AQHdK61fz_ef5g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1653324813413?e=1762387200&v=beta&t=vRirkPDgVaJSt83gi9yxVWJNEgDTcMcQnAHyMrTGkZQ",
      bio: "Quality assurance specialist with extensive experience in industrial automation and system testing. Expert in PLC programming and test automation frameworks. Dedicated to teaching robust testing methodologies for embedded systems.",
    },
    curriculum: [
      {
        title: "Module 1: Testing Fundamentals (40h)",
        lessons: [
          {
            title: "Testing theory and fundamental concepts",
            duration: "10h",
            type: "video",
          },
          {
            title: "Testing principles, levels and types",
            duration: "15h",
            type: "video",
          },
          {
            title: "Test case design techniques and requirements traceability",
            duration: "15h",
            type: "hands-on",
          },
        ],
      },
      {
        title: "Module 2: Web Testing (30h)",
        lessons: [
          {
            title: "Web applications architecture: HTML, CSS, JS, APIs",
            duration: "10h",
            type: "video",
          },
          {
            title: "Manual web & API testing",
            duration: "10h",
            type: "video",
          },
          {
            title: "Introduction to automation with Selenium/Python",
            duration: "10h",
            type: "hands-on",
          },
        ],
      },
      {
        title: "Module 3: Embedded & Automotive Testing (110h)",
        lessons: [
          {
            title: "Introduction to Embedded Systems and Automotive",
            duration: "15h",
            type: "video",
          },
          {
            title: "V-Model in Automotive",
            duration: "20h",
            type: "video",
          },
          {
            title: "Testing types and techniques",
            duration: "15h",
            type: "video",
          },
          {
            title: "Automated and Manual Testing",
            duration: "15h",
            type: "video",
          },
          {
            title: "Testing Environments in Automotive",
            duration: "20h",
            type: "video",
          },
          {
            title: "Quality, Safety and Standardization",
            duration: "15h",
            type: "video",
          },
          {
            title: "Practical Workshops",
            duration: "10h",
            type: "hands-on",
          },
        ],
      },
    ],
    detailedCurriculum: [
      {
        title:
          "Submodule 3.1: Introduction to Embedded and Automotive Systems (15h)",
        topics: [
          "ECU (Electronic Control Unit) Architecture",
          "Real-time systems and embedded constraints",
          "Testing role in automotive lifecycle",
          "Differences from generic software testing",
        ],
      },
      {
        title: "Submodule 3.2: V-Model in Automotive (20h)",
        topics: [
          "V-Model (V-Cycle) presentation",
          "Testing levels: Unit, Integration, System, Acceptance",
          "Requirements traceability → testing",
        ],
      },
      {
        title: "Submodule 3.3: Testing Types and Techniques (15h)",
        topics: [
          "Static vs Dynamic testing",
          "Black-box, White-box, Gray-box",
          "Boundary Value Analysis, Equivalence Partitioning",
          "MC/DC Coverage",
          "Requirements-based vs exploratory testing",
          "TDD (Test Driven Development)",
        ],
      },
      {
        title: "Submodule 3.4: Automated and Manual Testing (15h)",
        topics: [
          "Advantages and limitations",
          "Frameworks: GoogleTest, Tessy, CANoe, VectorCAST",
          "Testing integration in CI/CD (Jenkins, GitLab CI)",
          "Scripting introduction for automated testing (Python, CAPL)",
        ],
      },
      {
        title: "Submodule 3.5: Testing Environments in Automotive (20h)",
        topics: [
          "SIL (Software-in-the-Loop)",
          "MIL (Model-in-the-Loop)",
          "HIL (Hardware-in-the-Loop)",
          "HIL bench testing (dSPACE, ETAS, NI)",
          "Real testing setup examples",
        ],
      },
      {
        title: "Submodule 3.6: Quality, Safety and Standardization (15h)",
        topics: [
          "Introduction to ISO 26262 – Functional Safety",
          "ASIL (Automotive Safety Integrity Level)",
          "Safety Goals and Safety Requirements",
          "Verification and validation process",
          "Documentation (test plan, test case, test report)",
        ],
      },
      {
        title: "Submodule 3.7: Practical Workshops (10h)",
        topics: [
          "Writing and executing test cases for ECU functionality (e.g., light control, ABS)",
          "Testing on simulators (CAPL + CANoe)",
          "Automated testing integration in Jenkins",
          "Code coverage analysis for embedded module",
        ],
      },
    ],
    features: [
      "ISTQB-aligned curriculum",
      "200 hours comprehensive training",
      "Automotive embedded systems focus",
      "SIL/HIL testing practical experience",
      "ISO 26262 functional safety",
      "Real-world automotive projects",
      "Industry-standard tools (CANoe, dSPACE, Jenkins)",
      "Career placement support",
    ],
    requirements: [
      "Basic programming knowledge",
      "Understanding of software development",
      "Computer with 8GB+ RAM",
      "Familiarity with electronics basics",
      "Analytical thinking skills",
    ],
    outcomes: [
      "Master ISTQB testing principles",
      "Design comprehensive test strategies",
      "Perform web and API testing",
      "Implement automotive V-Model testing",
      "Work with SIL/HIL environments",
      "Apply ISO 26262 safety standards",
      "Use industry testing tools effectively",
      "Automate testing processes",
    ],
    toolsCovered: [
      "Selenium",
      "Python",
      "Jenkins",
      "GitLab CI",
      "GoogleTest",
      "Tessy",
      "CANoe",
      "VectorCAST",
      "dSPACE",
      "ETAS",
      "NI TestStand",
      "CAPL",
    ],
  },
  {
    id: "embedded-c-arduino",
    title: "Intro to Embedded C with Arduino",
    subtitle:
      "Master the fundamentals of embedded programming with hands-on Arduino projects",
    description:
      "This comprehensive course introduces you to embedded systems programming using C language and Arduino platform. You'll learn from basic concepts to advanced techniques, building real projects that demonstrate practical applications in IoT, automation, and electronics.",
    image: courseArduino,
    price: 149,
    originalPrice: 299,
    duration: "8 weeks",
    students: 15,
    rating: 4.8,
    totalRatings: 340,
    level: "Beginner" as const,
    category: "Arduino",
    language: "English",
    lastUpdated: "November 2024",
    instructor: {
      name: "Gheorghe Ghirjev",
      title: "Senior Embedded Systems Engineer",
      experience: "11+ years",
      students: 73,
      rating: 4.9,
      image:
        "https://media.licdn.com/dms/image/v2/D4D03AQE24yuQ44-tyg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1710442325881?e=1760572800&v=beta&t=Pa3Q0lZMhfd4UcAVVVly92_0E8xkJ4LlR3IG3u5zOsI",
      bio: "Senior embedded systems engineer with extensive experience in automotive and IoT industries. Specialized in real-time operating systems and low-level programming. Passionate about teaching complex embedded concepts in an accessible way.",
    },
    curriculum: [
      {
        title: "Introduction to Embedded Systems",
        lessons: [
          {
            title: "What are Embedded Systems?",
            duration: "15 min",
            type: "video",
          },
          {
            title: "Arduino Platform Overview",
            duration: "20 min",
            type: "video",
          },
          {
            title: "Setting up Development Environment",
            duration: "25 min",
            type: "video",
          },
          {
            title: "Your First Arduino Program",
            duration: "30 min",
            type: "hands-on",
          },
        ],
      },
      {
        title: "C Programming Fundamentals",
        lessons: [
          {
            title: "C Language Basics for Embedded",
            duration: "35 min",
            type: "video",
          },
          {
            title: "Data Types and Memory Management",
            duration: "40 min",
            type: "video",
          },
          {
            title: "Control Structures and Functions",
            duration: "45 min",
            type: "video",
          },
          {
            title: "Programming Exercise: Calculator",
            duration: "60 min",
            type: "project",
          },
        ],
      },
      {
        title: "Digital I/O and Sensors",
        lessons: [
          {
            title: "Digital Input/Output Programming",
            duration: "30 min",
            type: "video",
          },
          {
            title: "Reading Sensors and Switches",
            duration: "35 min",
            type: "video",
          },
          {
            title: "PWM and Analog Signals",
            duration: "40 min",
            type: "video",
          },
          {
            title: "Project: LED Control System",
            duration: "90 min",
            type: "project",
          },
        ],
      },
      {
        title: "Communication Protocols",
        lessons: [
          {
            title: "Serial Communication (UART)",
            duration: "25 min",
            type: "video",
          },
          {
            title: "I2C Protocol Implementation",
            duration: "30 min",
            type: "video",
          },
          { title: "SPI Communication", duration: "35 min", type: "video" },
          {
            title: "Project: Multi-Sensor Data Logger",
            duration: "120 min",
            type: "project",
          },
        ],
      },
      {
        title: "Advanced Topics",
        lessons: [
          { title: "Interrupts and Timing", duration: "40 min", type: "video" },
          {
            title: "Memory Optimization Techniques",
            duration: "35 min",
            type: "video",
          },
          {
            title: "Debugging Embedded Code",
            duration: "30 min",
            type: "video",
          },
          {
            title: "Final Project: IoT Weather Station",
            duration: "180 min",
            type: "project",
          },
        ],
      },
    ],
    features: [
      "Lifetime access to course materials",
      "Certificate of completion",
      "Access to private Discord community",
      "Downloadable resources and code samples",
      "30-day money-back guarantee",
      "Mobile and desktop access",
    ],
    requirements: [
      "No prior programming experience required",
      "Arduino Uno board (recommended but not required)",
      "Computer with USB port",
      "Willingness to learn and experiment",
    ],
  },
  {
    id: "iot-systems",
    title: "Complete IoT Systems Development",
    subtitle:
      "Build real-world IoT applications from sensors to cloud. Learn connectivity, data processing, and system architecture.",
    description:
      "This comprehensive course introduces you to embedded systems programming using C language and Arduino platform. You'll learn from basic concepts to advanced techniques, building real projects that demonstrate practical applications in IoT, automation, and electronics.",
    image: courseIot,
    price: 199,
    originalPrice: 299,
    duration: "12 weeks",
    students: 9,
    rating: 4.9,
    level: "Intermediate" as const,
    category: "IoT",
    totalRatings: 340,
    language: "English",
    lastUpdated: "November 2024",
    instructor: {
      name: "Gheorghe Ghirjev",
      title: "Senior Embedded Systems Engineer",
      experience: "11+ years",
      students: 73,
      rating: 4.9,
      image:
        "https://media.licdn.com/dms/image/v2/D4D03AQE24yuQ44-tyg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1710442325881?e=1760572800&v=beta&t=Pa3Q0lZMhfd4UcAVVVly92_0E8xkJ4LlR3IG3u5zOsI",
      bio: "Senior embedded systems engineer with extensive experience in automotive and IoT industries. Specialized in real-time operating systems and low-level programming. Passionate about teaching complex embedded concepts in an accessible way.",
    },
    curriculum: [
      {
        title: "Introduction to Embedded Systems",
        lessons: [
          {
            title: "What are Embedded Systems?",
            duration: "15 min",
            type: "video",
          },
          {
            title: "Arduino Platform Overview",
            duration: "20 min",
            type: "video",
          },
          {
            title: "Setting up Development Environment",
            duration: "25 min",
            type: "video",
          },
          {
            title: "Your First Arduino Program",
            duration: "30 min",
            type: "hands-on",
          },
        ],
      },
      {
        title: "C Programming Fundamentals",
        lessons: [
          {
            title: "C Language Basics for Embedded",
            duration: "35 min",
            type: "video",
          },
          {
            title: "Data Types and Memory Management",
            duration: "40 min",
            type: "video",
          },
          {
            title: "Control Structures and Functions",
            duration: "45 min",
            type: "video",
          },
          {
            title: "Programming Exercise: Calculator",
            duration: "60 min",
            type: "project",
          },
        ],
      },
      {
        title: "Digital I/O and Sensors",
        lessons: [
          {
            title: "Digital Input/Output Programming",
            duration: "30 min",
            type: "video",
          },
          {
            title: "Reading Sensors and Switches",
            duration: "35 min",
            type: "video",
          },
          {
            title: "PWM and Analog Signals",
            duration: "40 min",
            type: "video",
          },
          {
            title: "Project: LED Control System",
            duration: "90 min",
            type: "project",
          },
        ],
      },
      {
        title: "Communication Protocols",
        lessons: [
          {
            title: "Serial Communication (UART)",
            duration: "25 min",
            type: "video",
          },
          {
            title: "I2C Protocol Implementation",
            duration: "30 min",
            type: "video",
          },
          { title: "SPI Communication", duration: "35 min", type: "video" },
          {
            title: "Project: Multi-Sensor Data Logger",
            duration: "120 min",
            type: "project",
          },
        ],
      },
      {
        title: "Advanced Topics",
        lessons: [
          { title: "Interrupts and Timing", duration: "40 min", type: "video" },
          {
            title: "Memory Optimization Techniques",
            duration: "35 min",
            type: "video",
          },
          {
            title: "Debugging Embedded Code",
            duration: "30 min",
            type: "video",
          },
          {
            title: "Final Project: IoT Weather Station",
            duration: "180 min",
            type: "project",
          },
        ],
      },
    ],
    features: [
      "Lifetime access to course materials",
      "Certificate of completion",
      "Access to private Discord community",
      "Downloadable resources and code samples",
      "30-day money-back guarantee",
      "Mobile and desktop access",
    ],
    requirements: [
      "No prior programming experience required",
      "Arduino Uno board (recommended but not required)",
      "Computer with USB port",
      "Willingness to learn and experiment",
    ],
  },
  {
    id: "advanced-embedded-c",
    title: "Advanced Embedded C Programming",
    subtitle:
      "Deep dive into embedded C optimization, real-time systems, and hardware-level programming for professional developers.",
    description:
      "This comprehensive course introduces you to embedded systems programming using C language and Arduino platform. You'll learn from basic concepts to advanced techniques, building real projects that demonstrate practical applications in IoT, automation, and electronics.",
    image: courseEmbeddedC,
    price: 249,
    originalPrice: 299,
    duration: "10 weeks",
    students: 13,
    rating: 4.7,
    level: "Advanced" as const,
    category: "Embedded C",
    totalRatings: 340,
    language: "English",
    lastUpdated: "November 2024",
    instructor: {
      name: "Gheorghe Ghirjev",
      title: "Senior Embedded Systems Engineer",
      experience: "11+ years",
      students: 73,
      rating: 4.9,
      image:
        "https://media.licdn.com/dms/image/v2/D4D03AQE24yuQ44-tyg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1710442325881?e=1760572800&v=beta&t=Pa3Q0lZMhfd4UcAVVVly92_0E8xkJ4LlR3IG3u5zOsI",
      bio: "Senior embedded systems engineer with extensive experience in automotive and IoT industries. Specialized in real-time operating systems and low-level programming. Passionate about teaching complex embedded concepts in an accessible way.",
    },
    curriculum: [
      {
        title: "Introduction to Embedded Systems",
        lessons: [
          {
            title: "What are Embedded Systems?",
            duration: "15 min",
            type: "video",
          },
          {
            title: "Arduino Platform Overview",
            duration: "20 min",
            type: "video",
          },
          {
            title: "Setting up Development Environment",
            duration: "25 min",
            type: "video",
          },
          {
            title: "Your First Arduino Program",
            duration: "30 min",
            type: "hands-on",
          },
        ],
      },
      {
        title: "C Programming Fundamentals",
        lessons: [
          {
            title: "C Language Basics for Embedded",
            duration: "35 min",
            type: "video",
          },
          {
            title: "Data Types and Memory Management",
            duration: "40 min",
            type: "video",
          },
          {
            title: "Control Structures and Functions",
            duration: "45 min",
            type: "video",
          },
          {
            title: "Programming Exercise: Calculator",
            duration: "60 min",
            type: "project",
          },
        ],
      },
      {
        title: "Digital I/O and Sensors",
        lessons: [
          {
            title: "Digital Input/Output Programming",
            duration: "30 min",
            type: "video",
          },
          {
            title: "Reading Sensors and Switches",
            duration: "35 min",
            type: "video",
          },
          {
            title: "PWM and Analog Signals",
            duration: "40 min",
            type: "video",
          },
          {
            title: "Project: LED Control System",
            duration: "90 min",
            type: "project",
          },
        ],
      },
      {
        title: "Communication Protocols",
        lessons: [
          {
            title: "Serial Communication (UART)",
            duration: "25 min",
            type: "video",
          },
          {
            title: "I2C Protocol Implementation",
            duration: "30 min",
            type: "video",
          },
          { title: "SPI Communication", duration: "35 min", type: "video" },
          {
            title: "Project: Multi-Sensor Data Logger",
            duration: "120 min",
            type: "project",
          },
        ],
      },
      {
        title: "Advanced Topics",
        lessons: [
          { title: "Interrupts and Timing", duration: "40 min", type: "video" },
          {
            title: "Memory Optimization Techniques",
            duration: "35 min",
            type: "video",
          },
          {
            title: "Debugging Embedded Code",
            duration: "30 min",
            type: "video",
          },
          {
            title: "Final Project: IoT Weather Station",
            duration: "180 min",
            type: "project",
          },
        ],
      },
    ],
    features: [
      "Lifetime access to course materials",
      "Certificate of completion",
      "Access to private Discord community",
      "Downloadable resources and code samples",
      "30-day money-back guarantee",
      "Mobile and desktop access",
    ],
    requirements: [
      "No prior programming experience required",
      "Arduino Uno board (recommended but not required)",
      "Computer with USB port",
      "Willingness to learn and experiment",
    ],
  },
  {
    id: "automotive",
    title: "Automotive Electronics for Beginners",
    subtitle:
      "Start your journey in automotive embedded systems with hands-on vehicle projects",
    description:
      "Perfect for engineers transitioning to automotive industry. Learn the fundamentals of vehicle electronics, basic ECUs, and automotive protocols through practical projects that simulate real automotive systems.",
    image: courseEmbeddedC,
    price: 199,
    originalPrice: 299,
    duration: "10 weeks",
    students: 5,
    rating: 4.7,
    totalRatings: 230,
    level: "Intermediate" as const,
    category: "Automotive",
    language: "English",
    lastUpdated: "November 2024",
    instructor: {
      name: "Gheorghe Ghirjev",
      title: "Senior Embedded Systems Engineer",
      experience: "11+ years",
      students: 73,
      rating: 4.9,
      image:
        "https://media.licdn.com/dms/image/v2/D4D03AQE24yuQ44-tyg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1710442325881?e=1760572800&v=beta&t=Pa3Q0lZMhfd4UcAVVVly92_0E8xkJ4LlR3IG3u5zOsI",
      bio: "Senior embedded systems engineer with extensive experience in automotive and IoT industries. Specialized in real-time operating systems and low-level programming. Passionate about teaching complex embedded concepts in an accessible way.",
    },
    curriculum: [
      {
        title: "Vehicle Electrical Systems",
        lessons: [
          {
            title: "Automotive Electrical Fundamentals",
            duration: "25 min",
            type: "video",
          },
          {
            title: "Battery Systems and Power Management",
            duration: "30 min",
            type: "video",
          },
          {
            title: "Wiring Harnesses and Connectors",
            duration: "35 min",
            type: "video",
          },
          {
            title: "Lab: Basic Circuit Analysis",
            duration: "45 min",
            type: "hands-on",
          },
        ],
      },
      {
        title: "Introduction to ECUs",
        lessons: [
          {
            title: "What are Electronic Control Units?",
            duration: "30 min",
            type: "video",
          },
          {
            title: "Common ECU Types in Vehicles",
            duration: "35 min",
            type: "video",
          },
          {
            title: "ECU Inputs and Outputs",
            duration: "40 min",
            type: "video",
          },
          {
            title: "Project: Simple LED Control Module",
            duration: "90 min",
            type: "project",
          },
        ],
      },
      {
        title: "Automotive Communication Basics",
        lessons: [
          {
            title: "Introduction to CAN Bus",
            duration: "35 min",
            type: "video",
          },
          {
            title: "LIN Bus for Simple Systems",
            duration: "30 min",
            type: "video",
          },
          { title: "Reading OBD-II Data", duration: "40 min", type: "video" },
          {
            title: "Project: Vehicle Data Monitor",
            duration: "120 min",
            type: "project",
          },
        ],
      },
      {
        title: "Sensors and Actuators",
        lessons: [
          {
            title: "Common Automotive Sensors",
            duration: "35 min",
            type: "video",
          },
          {
            title: "Actuators and Motor Control",
            duration: "40 min",
            type: "video",
          },
          { title: "Signal Conditioning", duration: "45 min", type: "video" },
          {
            title: "Project: Temperature Monitoring System",
            duration: "100 min",
            type: "project",
          },
        ],
      },
      {
        title: "Final Automotive Project",
        lessons: [
          {
            title: "Designing a Complete Subsystem",
            duration: "50 min",
            type: "video",
          },
          {
            title: "Integration and Testing",
            duration: "45 min",
            type: "video",
          },
          {
            title: "Troubleshooting Automotive Systems",
            duration: "55 min",
            type: "video",
          },
          {
            title: "Final Project: Smart Lighting Control",
            duration: "180 min",
            type: "capstone",
          },
        ],
      },
    ],
    features: [
      "No prior automotive experience required",
      "Step-by-step vehicle electronics guide",
      "Real OBD-II data analysis",
      "Certificate of completion",
      "Beginner-friendly community support",
      "Mobile learning app access",
      "Career path guidance",
    ],
    requirements: [
      "Basic programming knowledge (any language)",
      "Understanding of fundamental electronics",
      "Computer with internet access",
      "Arduino board (optional, can be provided)",
      "Curiosity about vehicle technology",
    ],
  },
  {
    id: "mobile-developer",
    title: "Mobile Developer Software Engineer",
    subtitle:
      "Master iOS & Android development with React Native, Flutter, and native technologies. Build production-ready mobile applications.",
    description:
      "Become a professional mobile developer by learning both cross-platform and native development approaches. This comprehensive course covers everything from UI/UX design principles to backend integration, state management, and app store deployment.",
    image: courseEmbeddedC,
    price: 299,
    originalPrice: 399,
    duration: "14 weeks",
    students: 15,
    rating: 4.8,
    totalRatings: 520,
    level: "Intermediate" as const,
    category: "Mobile Development",
    language: "English",
    lastUpdated: "December 2024",
    instructor: {
      name: "Ion Caruta",
      title: "Senior QA Engineer",
      experience: "6+ years",
      students: 70,
      rating: 4.7,
      image:
        "https://media.licdn.com/dms/image/v2/C4D03AQHdK61fz_ef5g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1653324813413?e=1762387200&v=beta&t=vRirkPDgVaJSt83gi9yxVWJNEgDTcMcQnAHyMrTGkZQ",
      bio: "Quality assurance specialist with extensive experience in industrial automation and system testing. Expert in PLC programming and test automation frameworks. Dedicated to teaching robust testing methodologies for embedded systems.",
    },
    curriculum: [
      {
        title: "Mobile Development Fundamentals",
        lessons: [
          {
            title: "Introduction to Mobile Platforms",
            duration: "20 min",
            type: "video",
          },
          {
            title: "Setting up Development Environment",
            duration: "30 min",
            type: "video",
          },
          {
            title: "Mobile UI/UX Design Principles",
            duration: "45 min",
            type: "video",
          },
          {
            title: "Your First Mobile App",
            duration: "60 min",
            type: "hands-on",
          },
        ],
      },
      {
        title: "React Native Development",
        lessons: [
          {
            title: "React Native Fundamentals",
            duration: "50 min",
            type: "video",
          },
          {
            title: "Components and Navigation",
            duration: "55 min",
            type: "video",
          },
          {
            title: "State Management with Redux",
            duration: "60 min",
            type: "video",
          },
          {
            title: "Project: Social Media App",
            duration: "120 min",
            type: "project",
          },
        ],
      },
      {
        title: "Flutter Development",
        lessons: [
          {
            title: "Dart Programming Language",
            duration: "40 min",
            type: "video",
          },
          {
            title: "Flutter Widgets and Layouts",
            duration: "50 min",
            type: "video",
          },
          {
            title: "State Management in Flutter",
            duration: "55 min",
            type: "video",
          },
          {
            title: "Project: E-commerce App",
            duration: "150 min",
            type: "project",
          },
        ],
      },
      {
        title: "Native Development",
        lessons: [
          {
            title: "Swift for iOS Development",
            duration: "45 min",
            type: "video",
          },
          {
            title: "Kotlin for Android Development",
            duration: "50 min",
            type: "video",
          },
          {
            title: "Platform-Specific APIs",
            duration: "60 min",
            type: "video",
          },
          {
            title: "Project: Native Feature Integration",
            duration: "180 min",
            type: "project",
          },
        ],
      },
      {
        title: "Advanced Mobile Topics",
        lessons: [
          {
            title: "Backend Integration and APIs",
            duration: "55 min",
            type: "video",
          },
          {
            title: "Performance Optimization",
            duration: "50 min",
            type: "video",
          },
          {
            title: "App Store Deployment",
            duration: "45 min",
            type: "video",
          },
          {
            title: "Final Project: Complete Mobile Solution",
            duration: "240 min",
            type: "capstone",
          },
        ],
      },
    ],
    features: [
      "Learn both React Native and Flutter",
      "Real-world project portfolio",
      "App store deployment guidance",
      "Career support and interview prep",
      "Lifetime access to updates",
      "Private mobile developer community",
      "Code reviews and mentorship",
    ],
    requirements: [
      "Basic JavaScript knowledge",
      "Understanding of programming concepts",
      "Computer with 8GB+ RAM",
      "Smartphone for testing (optional)",
      "Dedication to build complete apps",
    ],
  },
  {
    id: "data-engineer",
    title: "Data Engineering Professional",
    subtitle:
      "Master data pipelines, ETL processes, and big data technologies. Build scalable data infrastructure and become a data engineering expert.",
    description:
      "This intensive course transforms you into a professional data engineer. Learn to design, build, and maintain robust data systems using modern tools like Apache Spark, Airflow, Kafka, and cloud platforms. Work with real datasets and build production-ready data pipelines.",
    image: courseEmbeddedC,
    price: 349,
    originalPrice: 499,
    duration: "16 weeks",
    students: 7,
    rating: 4.9,
    totalRatings: 430,
    level: "Advanced" as const,
    category: "Data Engineering",
    language: "English",
    lastUpdated: "December 2024",
    instructor: {
      name: "Daniel Vrabii",
      title: "Lead Data Engineer",
      experience: "6+ years",
      students: 85,
      rating: 4.8,
      image:
        "https://media.licdn.com/dms/image/v2/D4D03AQGUSWvS2qP-uQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1683970542550?e=1760572800&v=beta&t=moGAvhHQ2niXRAQbN6HexdK_f88-usja1e0j3FZ_moI",
      bio: "Data engineering expert with strong background in machine learning and distributed systems. Has built scalable data pipelines for multiple Fortune 500 companies. Enjoys transforming complex data concepts into practical learning experiences.",
    },
    curriculum: [
      {
        title: "Data Engineering Fundamentals",
        lessons: [
          {
            title: "Introduction to Data Engineering",
            duration: "25 min",
            type: "video",
          },
          {
            title: "Data Modeling and Architecture",
            duration: "40 min",
            type: "video",
          },
          {
            title: "SQL for Data Engineers",
            duration: "55 min",
            type: "video",
          },
          {
            title: "Lab: Database Design",
            duration: "90 min",
            type: "hands-on",
          },
        ],
      },
      {
        title: "Big Data Technologies",
        lessons: [
          {
            title: "Apache Spark Fundamentals",
            duration: "60 min",
            type: "video",
          },
          {
            title: "Distributed Computing Concepts",
            duration: "50 min",
            type: "video",
          },
          {
            title: "Spark SQL and DataFrames",
            duration: "65 min",
            type: "video",
          },
          {
            title: "Project: Large-Scale Data Processing",
            duration: "180 min",
            type: "project",
          },
        ],
      },
      {
        title: "Data Pipeline Development",
        lessons: [
          {
            title: "ETL/ELT Processes",
            duration: "45 min",
            type: "video",
          },
          {
            title: "Apache Airflow for Workflows",
            duration: "70 min",
            type: "video",
          },
          {
            title: "Real-time Data Streaming with Kafka",
            duration: "80 min",
            type: "video",
          },
          {
            title: "Project: End-to-End Data Pipeline",
            duration: "240 min",
            type: "project",
          },
        ],
      },
      {
        title: "Cloud Data Platforms",
        lessons: [
          {
            title: "AWS Data Services (Redshift, Glue)",
            duration: "65 min",
            type: "video",
          },
          {
            title: "Google Cloud Data Solutions",
            duration: "60 min",
            type: "video",
          },
          {
            title: "Azure Data Factory and Synapse",
            duration: "70 min",
            type: "video",
          },
          {
            title: "Project: Cloud Data Warehouse",
            duration: "200 min",
            type: "project",
          },
        ],
      },
      {
        title: "Advanced Data Systems",
        lessons: [
          {
            title: "Data Quality and Governance",
            duration: "50 min",
            type: "video",
          },
          {
            title: "Performance Tuning and Optimization",
            duration: "55 min",
            type: "video",
          },
          {
            title: "Data Security and Compliance",
            duration: "45 min",
            type: "video",
          },
          {
            title: "Capstone: Enterprise Data Platform",
            duration: "300 min",
            type: "capstone",
          },
        ],
      },
    ],
    features: [
      "Hands-on with Apache Spark, Airflow, Kafka",
      "Multi-cloud platform experience",
      "Real-world data pipeline projects",
      "Career coaching and interview prep",
      "Industry-recognized certification",
      "Access to large datasets for practice",
      "Mentorship from senior data engineers",
    ],
    requirements: [
      "Intermediate Python programming",
      "Basic SQL knowledge",
      "Understanding of databases",
      "Computer with 16GB+ RAM recommended",
      "Familiarity with command line",
      "Strong problem-solving skills",
    ],
  },
];
