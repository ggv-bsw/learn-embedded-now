-- Add missing lessons for C++ course (Phase 1 Add-Ons)
INSERT INTO curriculum_lessons (curriculum_id, title, duration, type, order_index) VALUES
-- Phase 1 Add-Ons module
((SELECT id FROM course_curriculum WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND title = 'Phase 1 Add-Ons: Arrays & Strings; Pointers & Memory; Classes & OOP'), 
 'Arrays & std::string Essentials', '35 min', 'video', 0),
((SELECT id FROM course_curriculum WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND title = 'Phase 1 Add-Ons: Arrays & Strings; Pointers & Memory; Classes & OOP'), 
 'Lab: Max in Array, Reverse & Palindrome', '45 min', 'hands-on', 1),
((SELECT id FROM course_curriculum WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND title = 'Phase 1 Add-Ons: Arrays & Strings; Pointers & Memory; Classes & OOP'), 
 'Pointers, new/delete & RAII basics', '40 min', 'video', 2),
((SELECT id FROM course_curriculum WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND title = 'Phase 1 Add-Ons: Arrays & Strings; Pointers & Memory; Classes & OOP'), 
 'Lab: Dynamic Array Average & Pointer Swap', '45 min', 'hands-on', 3),
((SELECT id FROM course_curriculum WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND title = 'Phase 1 Add-Ons: Arrays & Strings; Pointers & Memory; Classes & OOP'), 
 'Classes, Ctors/Dtors, Static Members', '40 min', 'video', 4),
((SELECT id FROM course_curriculum WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND title = 'Phase 1 Add-Ons: Arrays & Strings; Pointers & Memory; Classes & OOP'), 
 'Project: Car class with counters & methods', '60 min', 'project', 5),
((SELECT id FROM course_curriculum WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND title = 'Phase 1 Add-Ons: Arrays & Strings; Pointers & Memory; Classes & OOP'), 
 'Inheritance & Polymorphism with virtual', '40 min', 'video', 6),
((SELECT id FROM course_curriculum WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND title = 'Phase 1 Add-Ons: Arrays & Strings; Pointers & Memory; Classes & OOP'), 
 'Lab: Shape → Circle/Rectangle (area & perimeter)', '55 min', 'hands-on', 7);

-- Phase 2: Intermediate Topics
INSERT INTO curriculum_lessons (curriculum_id, title, duration, type, order_index) VALUES
((SELECT id FROM course_curriculum WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND title = 'Phase 2: Intermediate Topics (Lessons 9–17)'), 
 'Operator Overloading (arithmetic/relational/stream)', '45 min', 'video', 0),
((SELECT id FROM course_curriculum WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND title = 'Phase 2: Intermediate Topics (Lessons 9–17)'), 
 'Lab: Complex + and << overloads', '50 min', 'hands-on', 1),
((SELECT id FROM course_curriculum WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND title = 'Phase 2: Intermediate Topics (Lessons 9–17)'), 
 'Templates: function & class; specialization', '45 min', 'video', 2),
((SELECT id FROM course_curriculum WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND title = 'Phase 2: Intermediate Topics (Lessons 9–17)'), 
 'Project: Template Stack + char specialization', '60 min', 'project', 3),
((SELECT id FROM course_curriculum WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND title = 'Phase 2: Intermediate Topics (Lessons 9–17)'), 
 'Exceptions: throw/try/catch & error safety', '40 min', 'video', 4),
((SELECT id FROM course_curriculum WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND title = 'Phase 2: Intermediate Topics (Lessons 9–17)'), 
 'Lab: Division by zero & multi-error handling', '45 min', 'hands-on', 5),
((SELECT id FROM course_curriculum WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND title = 'Phase 2: Intermediate Topics (Lessons 9–17)'), 
 'File I/O: streams, formats, error handling', '40 min', 'video', 6),
((SELECT id FROM course_curriculum WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND title = 'Phase 2: Intermediate Topics (Lessons 9–17)'), 
 'Project: Student records (save/load + errors)', '60 min', 'project', 7),
((SELECT id FROM course_curriculum WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND title = 'Phase 2: Intermediate Topics (Lessons 9–17)'), 
 'Intro to STL: vector/map & algorithms (sort/find)', '50 min', 'video', 8);

-- Phase 2 Add-Ons
INSERT INTO curriculum_lessons (curriculum_id, title, duration, type, order_index) VALUES
((SELECT id FROM course_curriculum WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND title = 'Phase 2 Add-Ons: Smart Pointers, Threads, CMake (multi-file), Patterns'), 
 'Memory Mgmt: unique_ptr/shared_ptr & ownership', '40 min', 'video', 0),
((SELECT id FROM course_curriculum WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND title = 'Phase 2 Add-Ons: Smart Pointers, Threads, CMake (multi-file), Patterns'), 
 'Lab: Refactor to unique_ptr; collection with shared_ptr', '50 min', 'hands-on', 1),
((SELECT id FROM course_curriculum WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND title = 'Phase 2 Add-Ons: Smart Pointers, Threads, CMake (multi-file), Patterns'), 
 'Multithreading: std::thread & mutex basics', '45 min', 'video', 2),
((SELECT id FROM course_curriculum WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND title = 'Phase 2 Add-Ons: Smart Pointers, Threads, CMake (multi-file), Patterns'), 
 'Lab: Parallel array sum with synchronization', '55 min', 'hands-on', 3),
((SELECT id FROM course_curriculum WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND title = 'Phase 2 Add-Ons: Smart Pointers, Threads, CMake (multi-file), Patterns'), 
 'CMake for multi-file & multi-target projects', '40 min', 'video', 4),
((SELECT id FROM course_curriculum WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND title = 'Phase 2 Add-Ons: Smart Pointers, Threads, CMake (multi-file), Patterns'), 
 'Lab: Split into libs/executables + option()', '55 min', 'hands-on', 5),
((SELECT id FROM course_curriculum WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND title = 'Phase 2 Add-Ons: Smart Pointers, Threads, CMake (multi-file), Patterns'), 
 'Design Patterns I: Singleton & Factory', '45 min', 'video', 6),
((SELECT id FROM course_curriculum WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND title = 'Phase 2 Add-Ons: Smart Pointers, Threads, CMake (multi-file), Patterns'), 
 'Project: Config Singleton + Shape Factory', '60 min', 'project', 7);

-- Phase 3: Advanced Topics
INSERT INTO curriculum_lessons (curriculum_id, title, duration, type, order_index) VALUES
((SELECT id FROM course_curriculum WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND title = 'Phase 3: Advanced Topics (Lessons 18–25)'), 
 'Advanced STL: iterators & custom comparators', '45 min', 'video', 0),
((SELECT id FROM course_curriculum WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND title = 'Phase 3: Advanced Topics (Lessons 18–25)'), 
 'Lab: Sort custom Person list by age', '45 min', 'hands-on', 1),
((SELECT id FROM course_curriculum WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND title = 'Phase 3: Advanced Topics (Lessons 18–25)'), 
 'Advanced Exceptions: custom types & hierarchies', '40 min', 'video', 2),
((SELECT id FROM course_curriculum WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND title = 'Phase 3: Advanced Topics (Lessons 18–25)'), 
 'Lab: Validate inputs with custom exceptions', '45 min', 'hands-on', 3),
((SELECT id FROM course_curriculum WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND title = 'Phase 3: Advanced Topics (Lessons 18–25)'), 
 'Advanced CMake: external libs, configs, build types', '45 min', 'video', 4),
((SELECT id FROM course_curriculum WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND title = 'Phase 3: Advanced Topics (Lessons 18–25)'), 
 'Lab: Link external lib + target_compile_definitions', '55 min', 'hands-on', 5),
((SELECT id FROM course_curriculum WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND title = 'Phase 3: Advanced Topics (Lessons 18–25)'), 
 'Preprocessor, compilation & linking workflow', '40 min', 'video', 6),
((SELECT id FROM course_curriculum WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND title = 'Phase 3: Advanced Topics (Lessons 18–25)'), 
 'Lab: Macros, multi-file lib & consumer app', '55 min', 'hands-on', 7);

-- Phase 3 Add-Ons
INSERT INTO curriculum_lessons (curriculum_id, title, duration, type, order_index) VALUES
((SELECT id FROM course_curriculum WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND title = 'Phase 3 Add-Ons: Lambdas, Patterns II, Debugging/Optimization, Capstone'), 
 'Lambdas with STL (capture & predicates)', '40 min', 'video', 0),
((SELECT id FROM course_curriculum WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND title = 'Phase 3 Add-Ons: Lambdas, Patterns II, Debugging/Optimization, Capstone'), 
 'Lab: Filter & sort with lambdas', '45 min', 'hands-on', 1),
((SELECT id FROM course_curriculum WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND title = 'Phase 3 Add-Ons: Lambdas, Patterns II, Debugging/Optimization, Capstone'), 
 'Design Patterns II: Observer & Strategy', '45 min', 'video', 2),
((SELECT id FROM course_curriculum WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND title = 'Phase 3 Add-Ons: Lambdas, Patterns II, Debugging/Optimization, Capstone'), 
 'Project: Stock tracker (Observer) + pluggable sort (Strategy)', '60 min', 'project', 3),
((SELECT id FROM course_curriculum WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND title = 'Phase 3 Add-Ons: Lambdas, Patterns II, Debugging/Optimization, Capstone'), 
 'Debugging & Profiling; O2/O3 & sanitizer flags', '45 min', 'video', 4),
((SELECT id FROM course_curriculum WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND title = 'Phase 3 Add-Ons: Lambdas, Patterns II, Debugging/Optimization, Capstone'), 
 'Lab: Optimize slow sort; CMake options for builds', '55 min', 'hands-on', 5),
((SELECT id FROM course_curriculum WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND title = 'Phase 3 Add-Ons: Lambdas, Patterns II, Debugging/Optimization, Capstone'), 
 'Capstone Planning: scope & architecture', '30 min', 'video', 6),
((SELECT id FROM course_curriculum WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND title = 'Phase 3 Add-Ons: Lambdas, Patterns II, Debugging/Optimization, Capstone'), 
 'Capstone Build: Text game or Library system', '120 min', 'capstone', 7);

-- Add missing lessons for PCB Design course
INSERT INTO curriculum_lessons (curriculum_id, title, duration, type, order_index) VALUES
-- Week 3-4
((SELECT id FROM course_curriculum WHERE course_id = 'pcb-design-fundamentals' AND title = 'Week 3-4: PCB Layout Basics'), 
 'PCB stackup and layer configuration', '90 min', 'video', 0),
((SELECT id FROM course_curriculum WHERE course_id = 'pcb-design-fundamentals' AND title = 'Week 3-4: PCB Layout Basics'), 
 'Component placement strategies and design for manufacturing', '120 min', 'hands-on', 1),
((SELECT id FROM course_curriculum WHERE course_id = 'pcb-design-fundamentals' AND title = 'Week 3-4: PCB Layout Basics'), 
 'Routing techniques and trace width calculations', '90 min', 'video', 2),
((SELECT id FROM course_curriculum WHERE course_id = 'pcb-design-fundamentals' AND title = 'Week 3-4: PCB Layout Basics'), 
 'Lab: Layout a 2-layer Arduino shield', '180 min', 'hands-on', 3);

-- Week 5-6
INSERT INTO curriculum_lessons (curriculum_id, title, duration, type, order_index) VALUES
((SELECT id FROM course_curriculum WHERE course_id = 'pcb-design-fundamentals' AND title = 'Week 5-6: Advanced PCB Techniques'), 
 'Signal integrity and high-speed design considerations', '120 min', 'video', 0),
((SELECT id FROM course_curriculum WHERE course_id = 'pcb-design-fundamentals' AND title = 'Week 5-6: Advanced PCB Techniques'), 
 'Power distribution networks and ground planes', '90 min', 'video', 1),
((SELECT id FROM course_curriculum WHERE course_id = 'pcb-design-fundamentals' AND title = 'Week 5-6: Advanced PCB Techniques'), 
 'EMC/EMI design guidelines', '90 min', 'video', 2),
((SELECT id FROM course_curriculum WHERE course_id = 'pcb-design-fundamentals' AND title = 'Week 5-6: Advanced PCB Techniques'), 
 'Project: Design a multi-layer IoT sensor board', '240 min', 'project', 3);

-- Week 7-8
INSERT INTO curriculum_lessons (curriculum_id, title, duration, type, order_index) VALUES
((SELECT id FROM course_curriculum WHERE course_id = 'pcb-design-fundamentals' AND title = 'Week 7-8: Manufacturing and Final Project'), 
 'Design for manufacturing (DFM) and assembly (DFA)', '90 min', 'video', 0),
((SELECT id FROM course_curriculum WHERE course_id = 'pcb-design-fundamentals' AND title = 'Week 7-8: Manufacturing and Final Project'), 
 'Generating fabrication files and BOM', '90 min', 'hands-on', 1),
((SELECT id FROM course_curriculum WHERE course_id = 'pcb-design-fundamentals' AND title = 'Week 7-8: Manufacturing and Final Project'), 
 'PCB testing and debugging techniques', '90 min', 'video', 2),
((SELECT id FROM course_curriculum WHERE course_id = 'pcb-design-fundamentals' AND title = 'Week 7-8: Manufacturing and Final Project'), 
 'Capstone: Complete 4-layer embedded system PCB', '360 min', 'capstone', 3);

-- Add missing lessons for Software Testing course
INSERT INTO curriculum_lessons (curriculum_id, title, duration, type, order_index) VALUES
-- Week 3-4
((SELECT id FROM course_curriculum WHERE course_id = 'software-testing-automotive-qa' AND title = 'Week 3-4: Test Automation & Tools'), 
 'Test automation frameworks (pytest, Robot Framework)', '120 min', 'video', 0),
((SELECT id FROM course_curriculum WHERE course_id = 'software-testing-automotive-qa' AND title = 'Week 3-4: Test Automation & Tools'), 
 'CANoe/CANalyzer for vehicle network testing', '120 min', 'hands-on', 1),
((SELECT id FROM course_curriculum WHERE course_id = 'software-testing-automotive-qa' AND title = 'Week 3-4: Test Automation & Tools'), 
 'CI/CD pipelines for automotive software', '90 min', 'video', 2),
((SELECT id FROM course_curriculum WHERE course_id = 'software-testing-automotive-qa' AND title = 'Week 3-4: Test Automation & Tools'), 
 'Project: Automated CAN bus testing suite', '240 min', 'project', 3);

-- Week 5-6
INSERT INTO curriculum_lessons (curriculum_id, title, duration, type, order_index) VALUES
((SELECT id FROM course_curriculum WHERE course_id = 'software-testing-automotive-qa' AND title = 'Week 5-6: HIL/SIL Testing'), 
 'Hardware-in-the-Loop (HIL) testing principles', '120 min', 'video', 0),
((SELECT id FROM course_curriculum WHERE course_id = 'software-testing-automotive-qa' AND title = 'Week 5-6: HIL/SIL Testing'), 
 'Software-in-the-Loop (SIL) and Model-in-the-Loop (MIL)', '90 min', 'video', 1),
((SELECT id FROM course_curriculum WHERE course_id = 'software-testing-automotive-qa' AND title = 'Week 5-6: HIL/SIL Testing'), 
 'dSPACE and Vector HIL systems', '120 min', 'hands-on', 2),
((SELECT id FROM course_curriculum WHERE course_id = 'software-testing-automotive-qa' AND title = 'Week 5-6: HIL/SIL Testing'), 
 'Lab: Set up and execute HIL test scenarios', '240 min', 'hands-on', 3);

-- Week 7-8
INSERT INTO curriculum_lessons (curriculum_id, title, duration, type, order_index) VALUES
((SELECT id FROM course_curriculum WHERE course_id = 'software-testing-automotive-qa' AND title = 'Week 7-8: AUTOSAR Testing & Integration'), 
 'AUTOSAR architecture and component testing', '120 min', 'video', 0),
((SELECT id FROM course_curriculum WHERE course_id = 'software-testing-automotive-qa' AND title = 'Week 7-8: AUTOSAR Testing & Integration'), 
 'BSW module testing strategies', '90 min', 'video', 1),
((SELECT id FROM course_curriculum WHERE course_id = 'software-testing-automotive-qa' AND title = 'Week 7-8: AUTOSAR Testing & Integration'), 
 'RTE and SWC integration testing', '120 min', 'video', 2),
((SELECT id FROM course_curriculum WHERE course_id = 'software-testing-automotive-qa' AND title = 'Week 7-8: AUTOSAR Testing & Integration'), 
 'Project: AUTOSAR stack validation suite', '300 min', 'project', 3);

-- Week 9-10
INSERT INTO curriculum_lessons (curriculum_id, title, duration, type, order_index) VALUES
((SELECT id FROM course_curriculum WHERE course_id = 'software-testing-automotive-qa' AND title = 'Week 9-10: Advanced Topics & Capstone'), 
 'Cybersecurity testing for automotive systems', '120 min', 'video', 0),
((SELECT id FROM course_curriculum WHERE course_id = 'software-testing-automotive-qa' AND title = 'Week 9-10: Advanced Topics & Capstone'), 
 'OTA update validation and testing', '90 min', 'video', 1),
((SELECT id FROM course_curriculum WHERE course_id = 'software-testing-automotive-qa' AND title = 'Week 9-10: Advanced Topics & Capstone'), 
 'Performance and stress testing for ECUs', '90 min', 'video', 2),
((SELECT id FROM course_curriculum WHERE course_id = 'software-testing-automotive-qa' AND title = 'Week 9-10: Advanced Topics & Capstone'), 
 'Capstone: Complete test suite for ADAS feature', '480 min', 'capstone', 3);