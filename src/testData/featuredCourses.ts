import courseArduino from "@/assets/course-arduino.jpg";
import courseIot from "@/assets/course-iot.jpg";
import courseEmbeddedC from "@/assets/course-embedded-c.jpg";

export const featuredCourses = [
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
    students: 1250,
    rating: 4.8,
    totalRatings: 340,
    level: "Beginner" as const,
    category: "Arduino",
    language: "English",
    lastUpdated: "November 2024",
    instructor: {
      name: "Dr. Alex Popescu",
      title: "Senior Embedded Systems Engineer",
      experience: "15+ years",
      students: 5000,
      rating: 4.9,
      bio: "Dr. Alex Popescu is a senior embedded systems engineer with over 15 years of experience in automotive and IoT industries. He has worked on projects ranging from automotive ECUs to smart city infrastructure.",
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
    students: 890,
    rating: 4.9,
    level: "Intermediate" as const,
    category: "IoT",
    totalRatings: 340,
    language: "English",
    lastUpdated: "November 2024",
    instructor: {
      name: "Dr. Alex Popescu",
      title: "Senior Embedded Systems Engineer",
      experience: "15+ years",
      students: 5000,
      rating: 4.9,
      bio: "Dr. Alex Popescu is a senior embedded systems engineer with over 15 years of experience in automotive and IoT industries. He has worked on projects ranging from automotive ECUs to smart city infrastructure.",
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
    students: 645,
    rating: 4.7,
    level: "Advanced" as const,
    category: "Embedded C",
    totalRatings: 340,
    language: "English",
    lastUpdated: "November 2024",
    instructor: {
      name: "Dr. Alex Popescu",
      title: "Senior Embedded Systems Engineer",
      experience: "15+ years",
      students: 5000,
      rating: 4.9,
      bio: "Dr. Alex Popescu is a senior embedded systems engineer with over 15 years of experience in automotive and IoT industries. He has worked on projects ranging from automotive ECUs to smart city infrastructure.",
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
    students: 890,
    rating: 4.7,
    totalRatings: 230,
    level: "Intermediate" as const,
    category: "Automotive",
    language: "English",
    lastUpdated: "November 2024",
    instructor: {
      name: "Mike Rodriguez",
      title: "Automotive Training Specialist",
      experience: "8+ years",
      students: 3500,
      rating: 4.8,
      bio: "Mike Rodriguez specializes in automotive electronics training and has developed curriculum for several technical institutes. His passion is making complex automotive concepts accessible to newcomers in the field.",
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
];
