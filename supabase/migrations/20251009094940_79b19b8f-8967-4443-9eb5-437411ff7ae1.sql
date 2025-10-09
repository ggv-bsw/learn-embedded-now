-- Python course lessons translations
UPDATE curriculum_lessons SET 
  title_ro = 'Lecția 1: Ce este programarea? Instalare Python, editori (VS Code, PyCharm), primii pași în terminal; Hello World & rulare script',
  title_ru = 'Урок 1: Что такое программирование? Установка Python, редакторы (VS Code, PyCharm), первые шаги в терминале; Hello World и запуск скрипта'
WHERE title LIKE 'Lesson 1: What is programming%';

UPDATE curriculum_lessons SET 
  title_ro = 'Lecția 2: Tipuri fundamentale de date (int, float, string, bool), variabile, conversii de tip; mini-exerciții',
  title_ru = 'Урок 2: Основные типы данных (int, float, string, bool), переменные, преобразование типов; мини-упражнения'
WHERE title LIKE 'Lesson 2: Fundamental data types%';

UPDATE curriculum_lessons SET 
  title_ro = 'Lecția 3: Condiții (if/elif/else), operatori logici & relaționali; program de verificare parolă',
  title_ru = 'Урок 3: Условия (if/elif/else), логические и реляционные операторы; программа проверки пароля'
WHERE title LIKE 'Lesson 3: Conditionals%';

UPDATE curriculum_lessons SET 
  title_ro = 'Lecția 4: Bucle (while, for) și range(); joc de ghicire numere',
  title_ru = 'Урок 4: Циклы (while, for) и range(); игра угадай число'
WHERE title LIKE 'Lesson 4: Loops%';

-- PCB Design lessons translations
UPDATE curriculum_lessons SET 
  title_ro = 'Introducere în fluxul de lucru și instrumentele de proiectare PCB (KiCad/Altium)',
  title_ru = 'Введение в рабочий процесс проектирования PCB и инструменты (KiCad/Altium)'
WHERE title LIKE 'Introduction to PCB design workflow%';

UPDATE curriculum_lessons SET 
  title_ro = 'Selecția componentelor și crearea simbolurilor schematice',
  title_ru = 'Выбор компонентов и создание схемных символов'
WHERE title LIKE 'Component selection and schematic%';

UPDATE curriculum_lessons SET 
  title_ro = 'Cele mai bune practici de captare schematică și reguli de design',
  title_ru = 'Лучшие практики создания схем и правила проектирования'
WHERE title LIKE 'Schematic capture best practices%';

UPDATE curriculum_lessons SET 
  title_ro = 'Proiect: Proiectarea unei scheme de alimentare de bază',
  title_ru = 'Проект: Разработка базовой схемы блока питания'
WHERE title LIKE 'Project: Design a basic power supply%';

-- C++ BSW lessons translations
UPDATE curriculum_lessons SET 
  title_ro = 'Intro în C++ & CMake + Hello World',
  title_ru = 'Введение в C++ и CMake + Hello World'
WHERE title LIKE 'Intro to C++ & CMake%';

UPDATE curriculum_lessons SET 
  title_ro = 'Lab: Build Hello & Greet by Name (CMake țintă unică)',
  title_ru = 'Лаб: Build Hello & Greet by Name (CMake одна цель)'
WHERE title LIKE 'Lab: Build Hello & Greet%';

UPDATE curriculum_lessons SET 
  title_ro = 'Sintaxă de bază, variabile și tipuri',
  title_ru = 'Базовый синтаксис, переменные и типы'
WHERE title LIKE 'Basic Syntax, Variables%';

UPDATE curriculum_lessons SET 
  title_ro = 'Exercițiu: Arie dreptunghi & cerc (I/O + meniu)',
  title_ru = 'Упражнение: Площадь прямоугольника и круга (I/O + меню)'
WHERE title LIKE 'Exercise: Rectangle & Circle%';

UPDATE curriculum_lessons SET 
  title_ro = 'Flux de control: if/switch și bucle (for/while/do-while)',
  title_ru = 'Поток управления: if/switch и циклы (for/while/do-while)'
WHERE title LIKE 'Control Flow: if/switch%';

UPDATE curriculum_lessons SET 
  title_ro = 'Provocare: Suma 1..n & Verificator numere prime',
  title_ru = 'Задание: Сумма 1..n и проверка простых чисел'
WHERE title LIKE 'Challenge: Sum 1..n%';

UPDATE curriculum_lessons SET 
  title_ro = 'Funcții, Supraîncărcare, Valori implicite & Recursie',
  title_ru = 'Функции, перегрузка, значения по умолчанию и рекурсия'
WHERE title LIKE 'Functions, Overloading, Defaults%';

UPDATE curriculum_lessons SET 
  title_ro = 'Lab: API Arii + Factorial recursiv',
  title_ru = 'Лаб: API площадей + рекурсивный факториал'
WHERE title LIKE 'Lab: Areas API%';