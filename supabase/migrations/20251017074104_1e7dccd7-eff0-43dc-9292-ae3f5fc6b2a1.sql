-- Add Romanian translations for C++ course
UPDATE courses SET 
  title_ro = 'Curs C++: De la Începător BSW la Avansat BSW',
  subtitle_ro = 'Stăpânește C++ de la fundamente până la concepte avansate cu aplicații practice în dezvoltarea software automotive',
  description_ro = 'Acest curs cuprinzător te va ghida prin întreaga călătorie de învățare a C++, de la sintaxa de bază până la subiecte avansate precum programarea multithread, șabloane și modele de design. Perfect pentru aspiranții dezvoltatori de software automotive și inginerii embedded.',
  category_ro = 'Programare'
WHERE id = 'cpp-bsw-beginner-to-advanced';

-- Add Russian translations for C++ course
UPDATE courses SET 
  title_ru = 'Курс C++: От Начинающего BSW до Продвинутого BSW',
  subtitle_ru = 'Освойте C++ от основ до продвинутых концепций с практическим применением в автомобильной разработке ПО',
  description_ru = 'Этот всеобъемлющий курс проведет вас через весь путь изучения C++, от базового синтаксиса до продвинутых тем, таких как многопоточность, шаблоны и паттерны проектирования. Идеально подходит для будущих разработчиков автомобильного ПО и встраиваемых систем.',
  category_ru = 'Программирование'
WHERE id = 'cpp-bsw-beginner-to-advanced';

-- Romanian translations for week titles
UPDATE course_curriculum SET title_ro = 'Săptămâna 1: Primii Pași cu C++' WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND order_index = 1;
UPDATE course_curriculum SET title_ro = 'Săptămâna 2: Flux de Control și Funcții' WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND order_index = 2;
UPDATE course_curriculum SET title_ro = 'Săptămâna 3: Structuri de Date și Memorie' WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND order_index = 3;
UPDATE course_curriculum SET title_ro = 'Săptămâna 4: Programare Orientată pe Obiecte' WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND order_index = 4;
UPDATE course_curriculum SET title_ro = 'Săptămâna 5: Caracteristici Avansate C++' WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND order_index = 5;
UPDATE course_curriculum SET title_ro = 'Săptămâna 6: Gestionarea Erorilor și I/O' WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND order_index = 6;
UPDATE course_curriculum SET title_ro = 'Săptămâna 7: Biblioteca Standard și Pointeri Inteligenți' WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND order_index = 7;
UPDATE course_curriculum SET title_ro = 'Săptămâna 8: Concurență și Organizarea Proiectelor' WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND order_index = 8;
UPDATE course_curriculum SET title_ro = 'Săptămâna 9: Modele de Design și STL' WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND order_index = 9;
UPDATE course_curriculum SET title_ro = 'Săptămâna 10: Gestionare Avansată a Erorilor și Sisteme de Build' WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND order_index = 10;
UPDATE course_curriculum SET title_ro = 'Săptămâna 11: Caracteristici Moderne C++' WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND order_index = 11;
UPDATE course_curriculum SET title_ro = 'Săptămâna 12: Practici de Dezvoltare Profesională' WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND order_index = 12;
UPDATE course_curriculum SET title_ro = 'Săptămâna 13: Proiect Final' WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND order_index = 13;

-- Russian translations for week titles
UPDATE course_curriculum SET title_ru = 'Неделя 1: Начало работы с C++' WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND order_index = 1;
UPDATE course_curriculum SET title_ru = 'Неделя 2: Управление потоком и Функции' WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND order_index = 2;
UPDATE course_curriculum SET title_ru = 'Неделя 3: Структуры данных и Память' WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND order_index = 3;
UPDATE course_curriculum SET title_ru = 'Неделя 4: Объектно-ориентированное программирование' WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND order_index = 4;
UPDATE course_curriculum SET title_ru = 'Неделя 5: Продвинутые возможности C++' WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND order_index = 5;
UPDATE course_curriculum SET title_ru = 'Неделя 6: Обработка ошибок и Ввод/Вывод' WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND order_index = 6;
UPDATE course_curriculum SET title_ru = 'Неделя 7: Стандартная библиотека и Умные указатели' WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND order_index = 7;
UPDATE course_curriculum SET title_ru = 'Неделя 8: Многопоточность и Организация проекта' WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND order_index = 8;
UPDATE course_curriculum SET title_ru = 'Неделя 9: Паттерны проектирования и STL' WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND order_index = 9;
UPDATE course_curriculum SET title_ru = 'Неделя 10: Расширенная обработка ошибок и Системы сборки' WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND order_index = 10;
UPDATE course_curriculum SET title_ru = 'Неделя 11: Современные возможности C++' WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND order_index = 11;
UPDATE course_curriculum SET title_ru = 'Неделя 12: Профессиональные практики разработки' WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND order_index = 12;
UPDATE course_curriculum SET title_ru = 'Неделя 13: Финальный проект' WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND order_index = 13;