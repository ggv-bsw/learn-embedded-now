-- Get curriculum IDs and insert lessons for Python course
WITH python_week1 AS (
  SELECT id FROM public.course_curriculum 
  WHERE course_id = 'python-junior-beginner' AND title = 'Week 1 – Intro to Programming and Python'
)
INSERT INTO public.curriculum_lessons (curriculum_id, title, duration, type, order_index)
SELECT id, 'Lesson 1: What is programming? Install Python, editors (VS Code, PyCharm), first steps in terminal; Hello World & running a script', '60 min', 'video', 1 FROM python_week1
UNION ALL
SELECT id, 'Lesson 2: Fundamental data types (int, float, string, bool), variables, type conversions; mini-exercises', '60 min', 'video', 2 FROM python_week1;

WITH python_week2 AS (
  SELECT id FROM public.course_curriculum 
  WHERE course_id = 'python-junior-beginner' AND title = 'Week 2 – Control Flow'
)
INSERT INTO public.curriculum_lessons (curriculum_id, title, duration, type, order_index)
SELECT id, 'Lesson 3: Conditionals (if/elif/else), logical & relational operators; password check program', '60 min', 'video', 1 FROM python_week2
UNION ALL
SELECT id, 'Lesson 4: Loops (while, for) and range(); number guessing game', '60 min', 'video', 2 FROM python_week2;

WITH python_week3 AS (
  SELECT id FROM public.course_curriculum 
  WHERE course_id = 'python-junior-beginner' AND title = 'Week 3 – Core Data Structures'
)
INSERT INTO public.curriculum_lessons (curriculum_id, title, duration, type, order_index)
SELECT id, 'Lesson 5: Lists — indexing, slicing, common methods; shopping list manager', '60 min', 'video', 1 FROM python_week3
UNION ALL
SELECT id, 'Lesson 6: Tuples & sets — differences and use cases; remove duplicates', '60 min', 'video', 2 FROM python_week3;

WITH python_week4 AS (
  SELECT id FROM public.course_curriculum 
  WHERE course_id = 'python-junior-beginner' AND title = 'Week 4 – Dictionaries and Functions'
)
INSERT INTO public.curriculum_lessons (curriculum_id, title, duration, type, order_index)
SELECT id, 'Lesson 7: Dictionaries — iterating keys/values, useful methods; student gradebook', '60 min', 'video', 1 FROM python_week4
UNION ALL
SELECT id, 'Lesson 8: Functions — def, parameters, return, scope; math utilities', '60 min', 'video', 2 FROM python_week4;

WITH python_week5 AS (
  SELECT id FROM public.course_curriculum 
  WHERE course_id = 'python-junior-beginner' AND title = 'Week 5 – Modular Programming & Errors'
)
INSERT INTO public.curriculum_lessons (curriculum_id, title, duration, type, order_index)
SELECT id, 'Lesson 9: Modules & packages, imports; standard libraries (math, random, datetime); random password generator', '60 min', 'video', 1 FROM python_week5
UNION ALL
SELECT id, 'Lesson 10: Error handling with try/except/finally; robust numeric input', '60 min', 'video', 2 FROM python_week5;

WITH python_week6 AS (
  SELECT id FROM public.course_curriculum 
  WHERE course_id = 'python-junior-beginner' AND title = 'Week 6 – OOP in Python'
)
INSERT INTO public.curriculum_lessons (curriculum_id, title, duration, type, order_index)
SELECT id, 'Lesson 11: OOP intro — classes, objects, attributes, methods; Car class start/stop', '60 min', 'video', 1 FROM python_week6
UNION ALL
SELECT id, 'Lesson 12: Constructors, inheritance, polymorphism, __str__; animal hierarchy', '60 min', 'video', 2 FROM python_week6;

WITH python_week7 AS (
  SELECT id FROM public.course_curriculum 
  WHERE course_id = 'python-junior-beginner' AND title = 'Week 7 – Files and Working with Data'
)
INSERT INTO public.curriculum_lessons (curriculum_id, title, duration, type, order_index)
SELECT id, 'Lesson 13: Reading & writing text files; journal app that saves notes', '60 min', 'video', 1 FROM python_week7
UNION ALL
SELECT id, 'Lesson 14: JSON & CSV — data manipulation; product CSV report', '60 min', 'video', 2 FROM python_week7;

WITH python_week8 AS (
  SELECT id FROM public.course_curriculum 
  WHERE course_id = 'python-junior-beginner' AND title = 'Week 8 – External Libraries with uv'
)
INSERT INTO public.curriculum_lessons (curriculum_id, title, duration, type, order_index)
SELECT id, 'Lesson 15: uv — setup & usage (virtual envs, install packages, version pinning); isolated env + requests', '60 min', 'video', 1 FROM python_week8
UNION ALL
SELECT id, 'Lesson 16: Intro to pandas for tabular data (basics); simple CSV analysis (installed via uv)', '60 min', 'video', 2 FROM python_week8;

WITH python_week9 AS (
  SELECT id FROM public.course_curriculum 
  WHERE course_id = 'python-junior-beginner' AND title = 'Week 9 – Testing and Best Practices'
)
INSERT INTO public.curriculum_lessons (curriculum_id, title, duration, type, order_index)
SELECT id, 'Lesson 17: Unit testing (unittest/pytest) and debugging principles; tests for math functions', '60 min', 'video', 1 FROM python_week9
UNION ALL
SELECT id, 'Lesson 18: PEP 8 style guide, docstrings, Git & GitHub (intro); create a small repo', '60 min', 'video', 2 FROM python_week9;

WITH python_week10 AS (
  SELECT id FROM public.course_curriculum 
  WHERE course_id = 'python-junior-beginner' AND title = 'Week 10 – Final Mini-Projects'
)
INSERT INTO public.curriculum_lessons (curriculum_id, title, duration, type, order_index)
SELECT id, 'Lesson 19: Project 1 — To-Do List with files (CLI app)', '90 min', 'project', 1 FROM python_week10
UNION ALL
SELECT id, 'Lesson 20: Project 2 — Small Flask web app (CRUD for notes) — installed & run with uv', '120 min', 'capstone', 2 FROM python_week10;

-- Insert C++ course lessons
WITH cpp_phase1 AS (
  SELECT id FROM public.course_curriculum 
  WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND title = 'Phase 1: Fundamentals (Lessons 1–8)'
)
INSERT INTO public.curriculum_lessons (curriculum_id, title, duration, type, order_index)
SELECT id, 'Intro to C++ & CMake + Hello World', '35 min', 'video', 1 FROM cpp_phase1
UNION ALL
SELECT id, 'Lab: Build Hello & Greet by Name (CMake single target)', '45 min', 'hands-on', 2 FROM cpp_phase1
UNION ALL
SELECT id, 'Basic Syntax, Variables, and Types', '40 min', 'video', 3 FROM cpp_phase1
UNION ALL
SELECT id, 'Exercise: Rectangle & Circle Area (I/O + menu)', '50 min', 'project', 4 FROM cpp_phase1
UNION ALL
SELECT id, 'Control Flow: if/switch and loops (for/while/do-while)', '40 min', 'video', 5 FROM cpp_phase1
UNION ALL
SELECT id, 'Challenge: Sum 1..n & Prime Checker', '45 min', 'hands-on', 6 FROM cpp_phase1
UNION ALL
SELECT id, 'Functions, Overloading, Defaults & Recursion', '40 min', 'video', 7 FROM cpp_phase1
UNION ALL
SELECT id, 'Lab: Areas API + Recursive Factorial', '50 min', 'hands-on', 8 FROM cpp_phase1;

-- Insert PCB Design lessons
WITH pcb_week1 AS (
  SELECT id FROM public.course_curriculum 
  WHERE course_id = 'pcb-design-fundamentals' AND title = 'Week 1-2: Schematic Design Fundamentals'
)
INSERT INTO public.curriculum_lessons (curriculum_id, title, duration, type, order_index)
SELECT id, 'Introduction to PCB design workflow and tools (KiCad/Altium)', '90 min', 'video', 1 FROM pcb_week1
UNION ALL
SELECT id, 'Component selection and schematic symbol creation', '120 min', 'hands-on', 2 FROM pcb_week1
UNION ALL
SELECT id, 'Schematic capture best practices and design rules', '90 min', 'video', 3 FROM pcb_week1
UNION ALL
SELECT id, 'Project: Design a basic power supply schematic', '180 min', 'project', 4 FROM pcb_week1;

-- Insert Software Testing lessons
WITH test_week1 AS (
  SELECT id FROM public.course_curriculum 
  WHERE course_id = 'software-testing-automotive-qa' AND title = 'Week 1-2: Fundamentals of Automotive Software Testing'
)
INSERT INTO public.curriculum_lessons (curriculum_id, title, duration, type, order_index)
SELECT id, 'Automotive software architecture and V-model', '90 min', 'video', 1 FROM test_week1
UNION ALL
SELECT id, 'Introduction to ISO 26262 functional safety', '120 min', 'video', 2 FROM test_week1
UNION ALL
SELECT id, 'Test planning and requirement-based testing', '90 min', 'video', 3 FROM test_week1
UNION ALL
SELECT id, 'Lab: Create test plans for an ECU module', '180 min', 'hands-on', 4 FROM test_week1;