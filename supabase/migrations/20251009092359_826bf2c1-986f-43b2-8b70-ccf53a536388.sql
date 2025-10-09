-- Insert instructors for all courses
INSERT INTO public.instructors (course_id, name, title, experience, students, rating, image, bio)
VALUES 
  ('python-junior-beginner', 'Daniel Vrabii', 'Lead Data Engineer', '6+ years', 85, 4.8, 
   'https://media.licdn.com/dms/image/v2/D4D03AQGUSWvS2qP-uQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1683970542550?e=1760572800&v=beta&t=moGAvhHQ2niXRAQbN6HexdK_f88-usja1e0j3FZ_moI',
   'Data engineering expert with strong background in machine learning and distributed systems. Has built scalable data pipelines for multiple Fortune 500 companies. Enjoys transforming complex data concepts into practical learning experiences.'),
  
  ('cpp-bsw-beginner-to-advanced', 'Grigore Ciobanu', 'Senior Software Engineer', '8+ years', 75, 4.8,
   'https://media.licdn.com/dms/image/v2/D4D03AQEi63NbK8JmZQ/profile-displayphoto-scale_400_400/B4DZfk_n5PGYAs-/0/1751893574038?e=1762387200&v=beta&t=eh1mbV9h0ydwq7toFdLv00x3PFkAIGyKDrnh-rQHiGI',
   'Linux and IoT specialist with deep expertise in network programming and embedded Linux systems. Has contributed to numerous open-source projects and enjoys mentoring developers in system-level programming.'),
  
  ('pcb-design-fundamentals', 'Elena Popescu', 'Hardware Design Engineer', '10+ years', 92, 4.9,
   'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
   'Hardware design specialist with extensive experience in PCB design for consumer electronics and industrial applications. Has designed over 200 successful products and enjoys teaching practical PCB design techniques.'),
  
  ('software-testing-automotive-qa', 'Michael Schmidt', 'Automotive QA Lead', '12+ years', 115, 4.9,
   'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
   'Automotive software testing expert with extensive experience at leading automotive OEMs. Specialized in functional safety, AUTOSAR, and automated testing frameworks. Has led QA teams for multiple production vehicle programs.');

-- Insert Python course curriculum and lessons
INSERT INTO public.course_curriculum (course_id, title, order_index) VALUES
  ('python-junior-beginner', 'Week 1 – Intro to Programming and Python', 1),
  ('python-junior-beginner', 'Week 2 – Control Flow', 2),
  ('python-junior-beginner', 'Week 3 – Core Data Structures', 3),
  ('python-junior-beginner', 'Week 4 – Dictionaries and Functions', 4),
  ('python-junior-beginner', 'Week 5 – Modular Programming & Errors', 5),
  ('python-junior-beginner', 'Week 6 – OOP in Python', 6),
  ('python-junior-beginner', 'Week 7 – Files and Working with Data', 7),
  ('python-junior-beginner', 'Week 8 – External Libraries with uv', 8),
  ('python-junior-beginner', 'Week 9 – Testing and Best Practices', 9),
  ('python-junior-beginner', 'Week 10 – Final Mini-Projects', 10);

-- Insert Python course features
INSERT INTO public.course_features (course_id, feature, order_index) VALUES
  ('python-junior-beginner', 'Clear structure: 2 lessons/week for 10 weeks', 1),
  ('python-junior-beginner', 'Practice embedded in every lesson', 2),
  ('python-junior-beginner', 'Package & environment management with uv', 3),
  ('python-junior-beginner', 'CLI and web (Flask) mini-projects', 4),
  ('python-junior-beginner', 'Best practices: PEP 8, docstrings, Git', 5),
  ('python-junior-beginner', 'Access to community and resources', 6),
  ('python-junior-beginner', 'Certificate of completion', 7);

-- Insert Python course requirements
INSERT INTO public.course_requirements (course_id, requirement, order_index) VALUES
  ('python-junior-beginner', 'Laptop with internet connection', 1),
  ('python-junior-beginner', 'Willingness to learn by doing', 2),
  ('python-junior-beginner', 'GitHub account (recommended for projects)', 3),
  ('python-junior-beginner', 'Code editor (VS Code or PyCharm) — set up in Week 1', 4);

-- Insert Python course outcomes
INSERT INTO public.course_outcomes (course_id, outcome, order_index) VALUES
  ('python-junior-beginner', 'Write clean, well-structured Python code', 1),
  ('python-junior-beginner', 'Work effectively with lists, sets, dictionaries, and OOP', 2),
  ('python-junior-beginner', 'Handle files and data (JSON/CSV)', 3),
  ('python-junior-beginner', 'Use uv to install and manage external libraries', 4),
  ('python-junior-beginner', 'Write unit tests and use Git', 5),
  ('python-junior-beginner', 'Build complete mini-apps (CLI and web)', 6);

-- Insert C++ course curriculum
INSERT INTO public.course_curriculum (course_id, title, order_index) VALUES
  ('cpp-bsw-beginner-to-advanced', 'Phase 1: Fundamentals (Lessons 1–8)', 1),
  ('cpp-bsw-beginner-to-advanced', 'Phase 1 Add-Ons: Arrays & Strings; Pointers & Memory; Classes & OOP', 2),
  ('cpp-bsw-beginner-to-advanced', 'Phase 2: Intermediate Topics (Lessons 9–17)', 3),
  ('cpp-bsw-beginner-to-advanced', 'Phase 2 Add-Ons: Smart Pointers, Threads, CMake (multi-file), Patterns', 4),
  ('cpp-bsw-beginner-to-advanced', 'Phase 3: Advanced Topics (Lessons 18–25)', 5),
  ('cpp-bsw-beginner-to-advanced', 'Phase 3 Add-Ons: Lambdas, Patterns II, Debugging/Optimization, Capstone', 6);

-- Insert C++ course features
INSERT INTO public.course_features (course_id, feature, order_index) VALUES
  ('cpp-bsw-beginner-to-advanced', 'Modern C++ (C++17/20) with real projects', 1),
  ('cpp-bsw-beginner-to-advanced', 'Hands-on labs every module', 2),
  ('cpp-bsw-beginner-to-advanced', 'Production-grade CMake setups', 3),
  ('cpp-bsw-beginner-to-advanced', 'Multithreading & STL best practices', 4),
  ('cpp-bsw-beginner-to-advanced', 'Design patterns with practical use', 5),
  ('cpp-bsw-beginner-to-advanced', 'Code reviews and feedback', 6),
  ('cpp-bsw-beginner-to-advanced', 'Certificate of completion', 7),
  ('cpp-bsw-beginner-to-advanced', 'Discord community & resources', 8);

-- Insert C++ course requirements
INSERT INTO public.course_requirements (course_id, requirement, order_index) VALUES
  ('cpp-bsw-beginner-to-advanced', 'Basic programming familiarity helpful (not mandatory)', 1),
  ('cpp-bsw-beginner-to-advanced', 'Laptop with a modern C++ compiler (GCC/Clang/MSVC)', 2),
  ('cpp-bsw-beginner-to-advanced', 'CMake 3.20+ and a code editor (VS Code/CLion)', 3),
  ('cpp-bsw-beginner-to-advanced', 'Willingness to practice and iterate', 4);

-- Insert PCB Design course curriculum
INSERT INTO public.course_curriculum (course_id, title, order_index) VALUES
  ('pcb-design-fundamentals', 'Week 1-2: Schematic Design Fundamentals', 1),
  ('pcb-design-fundamentals', 'Week 3-4: PCB Layout Basics', 2),
  ('pcb-design-fundamentals', 'Week 5-6: Advanced PCB Techniques', 3),
  ('pcb-design-fundamentals', 'Week 7-8: Manufacturing and Final Project', 4);

-- Insert PCB Design course features
INSERT INTO public.course_features (course_id, feature, order_index) VALUES
  ('pcb-design-fundamentals', 'Industry-standard PCB design tools', 1),
  ('pcb-design-fundamentals', 'Real hardware projects and prototypes', 2),
  ('pcb-design-fundamentals', 'Design rule checking and validation', 3),
  ('pcb-design-fundamentals', 'Manufacturing file generation', 4),
  ('pcb-design-fundamentals', 'Signal integrity analysis', 5),
  ('pcb-design-fundamentals', 'Professional PCB portfolio pieces', 6),
  ('pcb-design-fundamentals', 'Certificate of completion', 7);

-- Insert PCB Design course requirements
INSERT INTO public.course_requirements (course_id, requirement, order_index) VALUES
  ('pcb-design-fundamentals', 'Basic electronics knowledge', 1),
  ('pcb-design-fundamentals', 'Understanding of circuit theory', 2),
  ('pcb-design-fundamentals', 'Computer capable of running PCB design software', 3),
  ('pcb-design-fundamentals', 'Multimeter and basic testing equipment (recommended)', 4);

-- Insert PCB Design course outcomes
INSERT INTO public.course_outcomes (course_id, outcome, order_index) VALUES
  ('pcb-design-fundamentals', 'Design professional multi-layer PCBs', 1),
  ('pcb-design-fundamentals', 'Master schematic capture and component selection', 2),
  ('pcb-design-fundamentals', 'Understand signal integrity and EMI considerations', 3),
  ('pcb-design-fundamentals', 'Generate manufacturing-ready design files', 4),
  ('pcb-design-fundamentals', 'Apply DFM and DFA principles', 5),
  ('pcb-design-fundamentals', 'Build a portfolio of real PCB designs', 6);

-- Insert Software Testing course curriculum
INSERT INTO public.course_curriculum (course_id, title, order_index) VALUES
  ('software-testing-automotive-qa', 'Week 1-2: Fundamentals of Automotive Software Testing', 1),
  ('software-testing-automotive-qa', 'Week 3-4: Test Automation & Tools', 2),
  ('software-testing-automotive-qa', 'Week 5-6: HIL/SIL Testing', 3),
  ('software-testing-automotive-qa', 'Week 7-8: AUTOSAR Testing & Integration', 4),
  ('software-testing-automotive-qa', 'Week 9-10: Advanced Topics & Capstone', 5);

-- Insert Software Testing course features
INSERT INTO public.course_features (course_id, feature, order_index) VALUES
  ('software-testing-automotive-qa', 'Industry-standard testing tools and frameworks', 1),
  ('software-testing-automotive-qa', 'ISO 26262 functional safety coverage', 2),
  ('software-testing-automotive-qa', 'Real automotive ECU test scenarios', 3),
  ('software-testing-automotive-qa', 'HIL/SIL simulation environment access', 4),
  ('software-testing-automotive-qa', 'AUTOSAR testing methodology', 5),
  ('software-testing-automotive-qa', 'Test automation and CI/CD integration', 6),
  ('software-testing-automotive-qa', 'Professional certification preparation', 7);

-- Insert Software Testing course requirements
INSERT INTO public.course_requirements (course_id, requirement, order_index) VALUES
  ('software-testing-automotive-qa', 'Strong software development background', 1),
  ('software-testing-automotive-qa', 'Basic understanding of automotive systems', 2),
  ('software-testing-automotive-qa', 'Familiarity with C/C++ programming', 3),
  ('software-testing-automotive-qa', 'Knowledge of embedded systems (recommended)', 4),
  ('software-testing-automotive-qa', 'Experience with testing concepts', 5);

-- Insert Software Testing course outcomes
INSERT INTO public.course_outcomes (course_id, outcome, order_index) VALUES
  ('software-testing-automotive-qa', 'Design comprehensive automotive test strategies', 1),
  ('software-testing-automotive-qa', 'Implement automated testing frameworks', 2),
  ('software-testing-automotive-qa', 'Execute HIL/SIL testing scenarios', 3),
  ('software-testing-automotive-qa', 'Apply ISO 26262 safety testing principles', 4),
  ('software-testing-automotive-qa', 'Validate AUTOSAR-based software components', 5),
  ('software-testing-automotive-qa', 'Lead automotive QA projects and teams', 6);