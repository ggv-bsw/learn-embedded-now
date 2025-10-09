-- Add Romanian and Russian translations for Python course curriculum
UPDATE course_curriculum SET 
  title_ro = 'Săptămâna 1 – Introducere în programare și Python',
  title_ru = 'Неделя 1 – Введение в программирование и Python'
WHERE course_id = 'python-junior-beginner' AND order_index = 1;

UPDATE course_curriculum SET 
  title_ro = 'Săptămâna 2 – Flux de control',
  title_ru = 'Неделя 2 – Поток управления'
WHERE course_id = 'python-junior-beginner' AND order_index = 2;

UPDATE course_curriculum SET 
  title_ro = 'Săptămâna 3 – Funcții și module',
  title_ru = 'Неделя 3 – Функции и модули'
WHERE course_id = 'python-junior-beginner' AND order_index = 3;

UPDATE course_curriculum SET 
  title_ro = 'Săptămâna 4 – Structuri de date',
  title_ru = 'Неделя 4 – Структуры данных'
WHERE course_id = 'python-junior-beginner' AND order_index = 4;

UPDATE course_curriculum SET 
  title_ro = 'Săptămâna 5-6 – Proiect practic',
  title_ru = 'Неделя 5-6 – Практический проект'
WHERE course_id = 'python-junior-beginner' AND order_index = 5;

-- PCB Design curriculum
UPDATE course_curriculum SET 
  title_ro = 'Săptămâna 1-2: Fundamentele proiectării schematice',
  title_ru = 'Неделя 1-2: Основы схемотехнического проектирования'
WHERE course_id = 'pcb-design-fundamentals' AND order_index = 1;

UPDATE course_curriculum SET 
  title_ro = 'Săptămâna 3-4: Bazele layout-ului PCB',
  title_ru = 'Неделя 3-4: Основы разводки печатных плат'
WHERE course_id = 'pcb-design-fundamentals' AND order_index = 2;

UPDATE course_curriculum SET 
  title_ro = 'Săptămâna 5-6: Tehnici avansate PCB',
  title_ru = 'Неделя 5-6: Продвинутые техники PCB'
WHERE course_id = 'pcb-design-fundamentals' AND order_index = 3;

UPDATE course_curriculum SET 
  title_ro = 'Săptămâna 7-8: Producție și proiect final',
  title_ru = 'Неделя 7-8: Производство и финальный проект'
WHERE course_id = 'pcb-design-fundamentals' AND order_index = 4;

-- C++ BSW curriculum
UPDATE course_curriculum SET 
  title_ro = 'Faza 1: Fundamente (Lecțiile 1–8)',
  title_ru = 'Фаза 1: Основы (Уроки 1–8)'
WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND order_index = 1;

UPDATE course_curriculum SET 
  title_ro = 'Faza 1 Suplimente: Array-uri & String-uri; Pointeri & Memorie; Clase & OOP',
  title_ru = 'Фаза 1 Дополнения: Массивы и строки; Указатели и память; Классы и ООП'
WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND order_index = 2;

UPDATE course_curriculum SET 
  title_ro = 'Faza 2: Subiecte intermediare (Lecțiile 9–17)',
  title_ru = 'Фаза 2: Промежуточные темы (Уроки 9–17)'
WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND order_index = 3;

UPDATE course_curriculum SET 
  title_ro = 'Faza 2 Suplimente: Smart Pointers, Thread-uri, CMake (multi-fișier), Modele',
  title_ru = 'Фаза 2 Дополнения: Умные указатели, потоки, CMake (многофайловый), шаблоны'
WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND order_index = 4;

UPDATE course_curriculum SET 
  title_ro = 'Faza 3: Subiecte avansate (Lecțiile 18–25)',
  title_ru = 'Фаза 3: Продвинутые темы (Уроки 18–25)'
WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND order_index = 5;

UPDATE course_curriculum SET 
  title_ro = 'Faza 3 Suplimente: Lambda, Modele II, Debugging/Optimizare, Proiect final',
  title_ru = 'Фаза 3 Дополнения: Лямбды, шаблоны II, отладка/оптимизация, итоговый проект'
WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND order_index = 6;

-- Software Testing curriculum
UPDATE course_curriculum SET 
  title_ro = 'Săptămâna 1-2: Fundamentele testării software',
  title_ru = 'Неделя 1-2: Основы тестирования ПО'
WHERE course_id = 'software-testing-automotive-qa' AND order_index = 1;

UPDATE course_curriculum SET 
  title_ro = 'Săptămâna 3-4: Standardele automotive',
  title_ru = 'Неделя 3-4: Автомобильные стандарты'
WHERE course_id = 'software-testing-automotive-qa' AND order_index = 2;

UPDATE course_curriculum SET 
  title_ro = 'Săptămâna 5-6: Automatizarea testelor',
  title_ru = 'Неделя 5-6: Автоматизация тестирования'
WHERE course_id = 'software-testing-automotive-qa' AND order_index = 3;

UPDATE course_curriculum SET 
  title_ro = 'Săptămâna 7-8: Proiect practic',
  title_ru = 'Неделя 7-8: Практический проект'
WHERE course_id = 'software-testing-automotive-qa' AND order_index = 4;