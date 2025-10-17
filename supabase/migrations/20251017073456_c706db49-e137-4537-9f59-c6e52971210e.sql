-- Delete existing curriculum and lessons for C++ course
DELETE FROM curriculum_lessons WHERE curriculum_id IN (
  SELECT id FROM course_curriculum WHERE course_id = 'cpp-bsw-beginner-to-advanced'
);
DELETE FROM course_curriculum WHERE course_id = 'cpp-bsw-beginner-to-advanced';

-- Create Week 1
INSERT INTO course_curriculum (course_id, title, order_index) 
VALUES ('cpp-bsw-beginner-to-advanced', 'Week 1', 1)
RETURNING id AS week1_id;

WITH week1 AS (
  SELECT id FROM course_curriculum WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND order_index = 1
)
INSERT INTO curriculum_lessons (curriculum_id, title, duration, type, order_index) 
SELECT id, 'Introduction to C++ and CMake', '90 min', 'video', 1 FROM week1
UNION ALL
SELECT id, 'Basic Syntax and Data Types', '90 min', 'video', 2 FROM week1;

-- Create Week 2
INSERT INTO course_curriculum (course_id, title, order_index) 
VALUES ('cpp-bsw-beginner-to-advanced', 'Week 2', 2);

WITH week2 AS (
  SELECT id FROM course_curriculum WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND order_index = 2
)
INSERT INTO curriculum_lessons (curriculum_id, title, duration, type, order_index) 
SELECT id, 'Control Structures', '90 min', 'video', 1 FROM week2
UNION ALL
SELECT id, 'Functions', '90 min', 'video', 2 FROM week2;

-- Create Week 3
INSERT INTO course_curriculum (course_id, title, order_index) 
VALUES ('cpp-bsw-beginner-to-advanced', 'Week 3', 3);

WITH week3 AS (
  SELECT id FROM course_curriculum WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND order_index = 3
)
INSERT INTO curriculum_lessons (curriculum_id, title, duration, type, order_index) 
SELECT id, 'Arrays and Strings', '90 min', 'video', 1 FROM week3
UNION ALL
SELECT id, 'Pointers and Memory Management', '90 min', 'video', 2 FROM week3;

-- Create Week 4
INSERT INTO course_curriculum (course_id, title, order_index) 
VALUES ('cpp-bsw-beginner-to-advanced', 'Week 4', 4);

WITH week4 AS (
  SELECT id FROM course_curriculum WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND order_index = 4
)
INSERT INTO curriculum_lessons (curriculum_id, title, duration, type, order_index) 
SELECT id, 'Classes and Objects', '90 min', 'video', 1 FROM week4
UNION ALL
SELECT id, 'Inheritance and Polymorphism', '90 min', 'video', 2 FROM week4;

-- Create Week 5
INSERT INTO course_curriculum (course_id, title, order_index) 
VALUES ('cpp-bsw-beginner-to-advanced', 'Week 5', 5);

WITH week5 AS (
  SELECT id FROM course_curriculum WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND order_index = 5
)
INSERT INTO curriculum_lessons (curriculum_id, title, duration, type, order_index) 
SELECT id, 'Operator Overloading', '90 min', 'video', 1 FROM week5
UNION ALL
SELECT id, 'Templates', '90 min', 'video', 2 FROM week5;

-- Create Week 6
INSERT INTO course_curriculum (course_id, title, order_index) 
VALUES ('cpp-bsw-beginner-to-advanced', 'Week 6', 6);

WITH week6 AS (
  SELECT id FROM course_curriculum WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND order_index = 6
)
INSERT INTO curriculum_lessons (curriculum_id, title, duration, type, order_index) 
SELECT id, 'Exception Handling', '90 min', 'video', 1 FROM week6
UNION ALL
SELECT id, 'File Handling', '90 min', 'video', 2 FROM week6;

-- Create Week 7
INSERT INTO course_curriculum (course_id, title, order_index) 
VALUES ('cpp-bsw-beginner-to-advanced', 'Week 7', 7);

WITH week7 AS (
  SELECT id FROM course_curriculum WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND order_index = 7
)
INSERT INTO curriculum_lessons (curriculum_id, title, duration, type, order_index) 
SELECT id, 'Introduction to STL', '90 min', 'video', 1 FROM week7
UNION ALL
SELECT id, 'Memory Management and Smart Pointers', '90 min', 'video', 2 FROM week7;

-- Create Week 8
INSERT INTO course_curriculum (course_id, title, order_index) 
VALUES ('cpp-bsw-beginner-to-advanced', 'Week 8', 8);

WITH week8 AS (
  SELECT id FROM course_curriculum WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND order_index = 8
)
INSERT INTO curriculum_lessons (curriculum_id, title, duration, type, order_index) 
SELECT id, 'Multithreading Basics', '90 min', 'video', 1 FROM week8
UNION ALL
SELECT id, 'CMake for Multi-File Projects', '90 min', 'video', 2 FROM week8;

-- Create Week 9
INSERT INTO course_curriculum (course_id, title, order_index) 
VALUES ('cpp-bsw-beginner-to-advanced', 'Week 9', 9);

WITH week9 AS (
  SELECT id FROM course_curriculum WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND order_index = 9
)
INSERT INTO curriculum_lessons (curriculum_id, title, duration, type, order_index) 
SELECT id, 'Introduction to Design Patterns', '90 min', 'video', 1 FROM week9
UNION ALL
SELECT id, 'Advanced STL Usage', '90 min', 'video', 2 FROM week9;

-- Create Week 10
INSERT INTO course_curriculum (course_id, title, order_index) 
VALUES ('cpp-bsw-beginner-to-advanced', 'Week 10', 10);

WITH week10 AS (
  SELECT id FROM course_curriculum WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND order_index = 10
)
INSERT INTO curriculum_lessons (curriculum_id, title, duration, type, order_index) 
SELECT id, 'Advanced Exception Handling', '90 min', 'video', 1 FROM week10
UNION ALL
SELECT id, 'Advanced CMake Features', '90 min', 'video', 2 FROM week10;

-- Create Week 11
INSERT INTO course_curriculum (course_id, title, order_index) 
VALUES ('cpp-bsw-beginner-to-advanced', 'Week 11', 11);

WITH week11 AS (
  SELECT id FROM course_curriculum WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND order_index = 11
)
INSERT INTO curriculum_lessons (curriculum_id, title, duration, type, order_index) 
SELECT id, 'Preprocessor and Compilation', '90 min', 'video', 1 FROM week11
UNION ALL
SELECT id, 'Lambda Expressions', '90 min', 'video', 2 FROM week11;

-- Create Week 12
INSERT INTO course_curriculum (course_id, title, order_index) 
VALUES ('cpp-bsw-beginner-to-advanced', 'Week 12', 12);

WITH week12 AS (
  SELECT id FROM course_curriculum WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND order_index = 12
)
INSERT INTO curriculum_lessons (curriculum_id, title, duration, type, order_index) 
SELECT id, 'Advanced Design Patterns', '90 min', 'video', 1 FROM week12
UNION ALL
SELECT id, 'Debugging and Optimization', '90 min', 'video', 2 FROM week12;

-- Create Week 13
INSERT INTO course_curriculum (course_id, title, order_index) 
VALUES ('cpp-bsw-beginner-to-advanced', 'Week 13', 13);

WITH week13 AS (
  SELECT id FROM course_curriculum WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND order_index = 13
)
INSERT INTO curriculum_lessons (curriculum_id, title, duration, type, order_index) 
SELECT id, 'Capstone Project', '180 min', 'project', 1 FROM week13;