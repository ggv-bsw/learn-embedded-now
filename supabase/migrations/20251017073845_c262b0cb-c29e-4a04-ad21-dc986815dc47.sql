-- Add description column to curriculum_lessons
ALTER TABLE curriculum_lessons ADD COLUMN IF NOT EXISTS description text;
ALTER TABLE curriculum_lessons ADD COLUMN IF NOT EXISTS description_ro text;
ALTER TABLE curriculum_lessons ADD COLUMN IF NOT EXISTS description_ru text;

-- Update Week 1 lessons
UPDATE curriculum_lessons SET description = 
'Setting up a C++ environment • Writing a "Hello, World!" program • Basics of CMakeLists.txt for single-file projects

Practical Task: Write a "Hello, World!" program and build it using CMake.
Advanced Task: Modify the program to accept a name as input and greet the user'
WHERE title = 'Introduction to C++ and CMake' 
AND curriculum_id IN (SELECT id FROM course_curriculum WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND order_index = 1);

UPDATE curriculum_lessons SET description = 
'Variables and constants • Primitive data types (int, float, char, bool) • Input/Output streams

Practical Task: Write a program to calculate the area of a rectangle using variables.
Advanced Task: Extend the program to handle both rectangles and circles, using a menu for shape selection.'
WHERE title = 'Basic Syntax and Data Types' 
AND curriculum_id IN (SELECT id FROM course_curriculum WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND order_index = 1);

-- Update Week 2 lessons
UPDATE curriculum_lessons SET description = 
'Conditional statements: if, else, switch • Loops: for, while, do-while

Practical Task: Write a program to calculate the sum of all numbers from 1 to n.
Advanced Task: Write a program to check if a number is prime.'
WHERE title = 'Control Structures' 
AND curriculum_id IN (SELECT id FROM course_curriculum WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND order_index = 2);

UPDATE curriculum_lessons SET description = 
'Function declaration and definition • Default arguments and overloading

Practical Task: Create functions to calculate the area of a circle and rectangle.
Advanced Task: Write a recursive function to calculate the factorial of a number.'
WHERE title = 'Functions' 
AND curriculum_id IN (SELECT id FROM course_curriculum WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND order_index = 2);

-- Update Week 3 lessons
UPDATE curriculum_lessons SET description = 
'Array declaration and initialization • Working with strings (std::string)

Practical Task: Write a program to find the largest number in an array.
Advanced Task: Create a program that reverses a string and checks if it''s a palindrome.'
WHERE title = 'Arrays and Strings' 
AND curriculum_id IN (SELECT id FROM course_curriculum WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND order_index = 3);

UPDATE curriculum_lessons SET description = 
'Basics of pointers • Dynamic memory allocation (new, delete)

Practical Task: Dynamically allocate an array and calculate its average.
Advanced Task: Use pointers to swap two variables without using a temporary variable.'
WHERE title = 'Pointers and Memory Management' 
AND curriculum_id IN (SELECT id FROM course_curriculum WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND order_index = 3);

-- Update Week 4 lessons
UPDATE curriculum_lessons SET description = 
'Introduction to classes • Constructors and destructors

Practical Task: Create a Car class with attributes like make and speed, and methods to accelerate and display details.
Advanced Task: Add a static variable to count the number of cars created.'
WHERE title = 'Classes and Objects' 
AND curriculum_id IN (SELECT id FROM course_curriculum WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND order_index = 4);

UPDATE curriculum_lessons SET description = 
'Basic inheritance • Virtual functions and overriding

Practical Task: Implement a Shape class with derived classes Circle and Rectangle.
Advanced Task: Add virtual methods for calculating the perimeter in the derived classes.'
WHERE title = 'Inheritance and Polymorphism' 
AND curriculum_id IN (SELECT id FROM course_curriculum WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND order_index = 4);

-- Update Week 5 lessons
UPDATE curriculum_lessons SET description = 
'Overloading arithmetic and relational operators

Practical Task: Overload the + operator to add two complex numbers.
Advanced Task: Overload the << operator to display complex numbers.'
WHERE title = 'Operator Overloading' 
AND curriculum_id IN (SELECT id FROM course_curriculum WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND order_index = 5);

UPDATE curriculum_lessons SET description = 
'Function templates and class templates

Practical Task: Create a template class Stack with basic operations (push, pop, display).
Advanced Task: Specialize the template for char to manage strings as stacks of characters.'
WHERE title = 'Templates' 
AND curriculum_id IN (SELECT id FROM course_curriculum WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND order_index = 5);

-- Update Week 6 lessons
UPDATE curriculum_lessons SET description = 
'Try-catch blocks and throwing exceptions

Practical Task: Write a program that handles division by zero.
Advanced Task: Extend the program to handle multiple exceptions (e.g., invalid inputs).'
WHERE title = 'Exception Handling' 
AND curriculum_id IN (SELECT id FROM course_curriculum WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND order_index = 6);

UPDATE curriculum_lessons SET description = 
'Reading and writing to text files

Practical Task: Write a program to save and read student records from a file.
Advanced Task: Add error handling for file operations (e.g., file not found).'
WHERE title = 'File Handling' 
AND curriculum_id IN (SELECT id FROM course_curriculum WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND order_index = 6);

-- Update Week 7 lessons
UPDATE curriculum_lessons SET description = 
'Using vector and map • Basic STL algorithms (sort, find)

Practical Task: Use a vector to store and display a list of numbers.
Advanced Task: Use a map to store and display the frequency of characters in a string.'
WHERE title = 'Introduction to STL' 
AND curriculum_id IN (SELECT id FROM course_curriculum WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND order_index = 7);

UPDATE curriculum_lessons SET description = 
'Using std::unique_ptr and std::shared_ptr

Practical Task: Refactor a program to use std::unique_ptr for dynamic memory management.
Advanced Task: Use std::shared_ptr to manage a collection of dynamically created objects.'
WHERE title = 'Memory Management and Smart Pointers' 
AND curriculum_id IN (SELECT id FROM course_curriculum WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND order_index = 7);

-- Update Week 8 lessons
UPDATE curriculum_lessons SET description = 
'Threads and basic synchronization

Practical Task: Write a program to calculate the sum of an array using multiple threads.
Advanced Task: Add thread synchronization using std::mutex.'
WHERE title = 'Multithreading Basics' 
AND curriculum_id IN (SELECT id FROM course_curriculum WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND order_index = 8);

UPDATE curriculum_lessons SET description = 
'Organizing projects into multiple files • Adding multiple executables in CMakeLists.txt

Practical Task: Split a project into multiple files and build it using CMake.
Advanced Task: Add an optional feature in CMake using option().'
WHERE title = 'CMake for Multi-File Projects' 
AND curriculum_id IN (SELECT id FROM course_curriculum WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND order_index = 8);

-- Update Week 9 lessons
UPDATE curriculum_lessons SET description = 
'Overview of design patterns • Singleton and Factory patterns

Practical Task: Implement a Singleton class for configuration management.
Advanced Task: Create a Factory pattern to create different types of shapes.'
WHERE title = 'Introduction to Design Patterns' 
AND curriculum_id IN (SELECT id FROM course_curriculum WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND order_index = 9);

UPDATE curriculum_lessons SET description = 
'Iterators and custom sorting with STL algorithms

Practical Task: Sort a list of custom objects (e.g., Person) by age.
Advanced Task: Implement custom iterators for a container class.'
WHERE title = 'Advanced STL Usage' 
AND curriculum_id IN (SELECT id FROM course_curriculum WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND order_index = 9);

-- Update Week 10 lessons
UPDATE curriculum_lessons SET description = 
'Creating custom exception classes

Practical Task: Write a custom exception for invalid input in a program.
Advanced Task: Extend the program to handle multiple custom exceptions.'
WHERE title = 'Advanced Exception Handling' 
AND curriculum_id IN (SELECT id FROM course_curriculum WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND order_index = 10);

UPDATE curriculum_lessons SET description = 
'Adding external libraries in CMake • Debug and Release builds

Practical Task: Configure a project to link with an external library using CMake.
Advanced Task: Use target_compile_definitions in CMake to enable optional logging.'
WHERE title = 'Advanced CMake Features' 
AND curriculum_id IN (SELECT id FROM course_curriculum WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND order_index = 10);

-- Update Week 11 lessons
UPDATE curriculum_lessons SET description = 
'Preprocessor directives and macros • Compilation and linking overview

Practical Task: Write macros for constants and reusable functions.
Advanced Task: Write a program split across files and create a library.'
WHERE title = 'Preprocessor and Compilation' 
AND curriculum_id IN (SELECT id FROM course_curriculum WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND order_index = 11);

UPDATE curriculum_lessons SET description = 
'Introduction and use with STL

Practical Task: Use a lambda expression to filter a list of integers.
Advanced Task: Use lambdas with std::sort to sort custom objects.'
WHERE title = 'Lambda Expressions' 
AND curriculum_id IN (SELECT id FROM course_curriculum WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND order_index = 11);

-- Update Week 12 lessons
UPDATE curriculum_lessons SET description = 
'Observer and Strategy patterns

Practical Task: Implement an Observer pattern for a stock price tracker.
Advanced Task: Use the Strategy pattern to switch between sorting algorithms.'
WHERE title = 'Advanced Design Patterns' 
AND curriculum_id IN (SELECT id FROM course_curriculum WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND order_index = 12);

UPDATE curriculum_lessons SET description = 
'Using debugging tools • Profiling and optimizing code

Practical Task: Profile and optimize a slow sorting algorithm.
Advanced Task: Use compile-time options in CMake to enable optimizations.'
WHERE title = 'Debugging and Optimization' 
AND curriculum_id IN (SELECT id FROM course_curriculum WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND order_index = 12);

-- Update Week 13 lesson
UPDATE curriculum_lessons SET description = 
'Build a project integrating concepts from the course (e.g., a simple text-based game or library system)

Practical Task: Implement the core functionality of the project during class.
Advanced Task: Add extra features, such as file storage or multithreading.'
WHERE title = 'Capstone Project' 
AND curriculum_id IN (SELECT id FROM course_curriculum WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND order_index = 13);