-- Week 6 Lesson Translations
UPDATE curriculum_lessons SET 
  title_ro = 'Gestionarea Excepțiilor',
  description_ro = 'Blocuri try-catch și aruncarea excepțiilor

Sarcină Practică: Scrieți un program care gestionează împărțirea la zero.
Sarcină Avansată: Extindeți programul pentru a gestiona multiple excepții (ex. input-uri invalide).',
  title_ru = 'Обработка исключений',
  description_ru = 'Блоки try-catch и выброс исключений

Практическая задача: Напишите программу, которая обрабатывает деление на ноль.
Продвинутая задача: Расширьте программу для обработки нескольких исключений (например, неверного ввода).'
WHERE title = 'Exception Handling';

UPDATE curriculum_lessons SET 
  title_ro = 'Gestionarea Fișierelor',
  description_ro = 'Citirea și scrierea în fișiere text

Sarcină Practică: Scrieți un program pentru a salva și citi înregistrările studenților dintr-un fișier.
Sarcină Avansată: Adăugați gestionarea erorilor pentru operațiunile cu fișiere (ex. fișier negăsit).',
  title_ru = 'Работа с файлами',
  description_ru = 'Чтение и запись в текстовые файлы

Практическая задача: Напишите программу для сохранения и чтения записей студентов из файла.
Продвинутая задача: Добавьте обработку ошибок для файловых операций (например, файл не найден).'
WHERE title = 'File Handling';

-- Week 7 Lesson Translations
UPDATE curriculum_lessons SET 
  title_ro = 'Introducere în STL',
  description_ro = 'Folosirea vector și map • Algoritmi STL de bază (sort, find)

Sarcină Practică: Folosiți un vector pentru a stoca și afișa o listă de numere.
Sarcină Avansată: Folosiți un map pentru a stoca și afișa frecvența caracterelor dintr-un șir.',
  title_ru = 'Введение в STL',
  description_ru = 'Использование vector и map • Базовые алгоритмы STL (sort, find)

Практическая задача: Используйте vector для хранения и отображения списка чисел.
Продвинутая задача: Используйте map для хранения и отображения частоты символов в строке.'
WHERE title = 'Introduction to STL';

UPDATE curriculum_lessons SET 
  title_ro = 'Gestionarea Memoriei și Pointeri Inteligenți',
  description_ro = 'Folosirea std::unique_ptr și std::shared_ptr

Sarcină Practică: Refactorizați un program pentru a folosi std::unique_ptr pentru gestionarea memoriei dinamice.
Sarcină Avansată: Folosiți std::shared_ptr pentru a gestiona o colecție de obiecte create dinamic.',
  title_ru = 'Управление памятью и умные указатели',
  description_ru = 'Использование std::unique_ptr и std::shared_ptr

Практическая задача: Рефакторинг программы для использования std::unique_ptr для динамического управления памятью.
Продвинутая задача: Используйте std::shared_ptr для управления коллекцией динамически созданных объектов.'
WHERE title = 'Memory Management and Smart Pointers';

-- Week 8 Lesson Translations
UPDATE curriculum_lessons SET 
  title_ro = 'Noțiuni de Bază despre Multithreading',
  description_ro = 'Fire de execuție și sincronizarea de bază

Sarcină Practică: Scrieți un program pentru a calcula suma unui array folosind mai multe fire de execuție.
Sarcină Avansată: Adăugați sincronizarea firelor folosind std::mutex.',
  title_ru = 'Основы многопоточности',
  description_ru = 'Потоки и базовая синхронизация

Практическая задача: Напишите программу для расчета суммы массива с использованием нескольких потоков.
Продвинутая задача: Добавьте синхронизацию потоков с использованием std::mutex.'
WHERE title = 'Multithreading Basics';

UPDATE curriculum_lessons SET 
  title_ro = 'CMake pentru Proiecte Multi-Fișier',
  description_ro = 'Organizarea proiectelor în mai multe fișiere • Adăugarea mai multor executabile în CMakeLists.txt

Sarcină Practică: Împărțiți un proiect în mai multe fișiere și construiți-l folosind CMake.
Sarcină Avansată: Adăugați o caracteristică opțională în CMake folosind option().',
  title_ru = 'CMake для многофайловых проектов',
  description_ru = 'Организация проектов в нескольких файлах • Добавление нескольких исполняемых файлов в CMakeLists.txt

Практическая задача: Разделите проект на несколько файлов и соберите его с помощью CMake.
Продвинутая задача: Добавьте дополнительную функцию в CMake с помощью option().'
WHERE title = 'CMake for Multi-File Projects';

-- Week 9 Lesson Translations
UPDATE curriculum_lessons SET 
  title_ro = 'Introducere în Modele de Design',
  description_ro = 'Prezentare generală a modelelor de design • Modelele Singleton și Factory

Sarcină Practică: Implementați o clasă Singleton pentru gestionarea configurației.
Sarcină Avansată: Creați un model Factory pentru a crea diferite tipuri de forme.',
  title_ru = 'Введение в паттерны проектирования',
  description_ru = 'Обзор паттернов проектирования • Паттерны Singleton и Factory

Практическая задача: Реализуйте класс Singleton для управления конфигурацией.
Продвинутая задача: Создайте паттерн Factory для создания различных типов фигур.'
WHERE title = 'Introduction to Design Patterns';

UPDATE curriculum_lessons SET 
  title_ro = 'Utilizare Avansată a STL',
  description_ro = 'Iteratori și sortare personalizată cu algoritmi STL

Sarcină Practică: Sortați o listă de obiecte personalizate (ex. Person) după vârstă.
Sarcină Avansată: Implementați iteratori personalizați pentru o clasă container.',
  title_ru = 'Продвинутое использование STL',
  description_ru = 'Итераторы и пользовательская сортировка с алгоритмами STL

Практическая задача: Отсортируйте список пользовательских объектов (например, Person) по возрасту.
Продвинутая задача: Реализуйте пользовательские итераторы для класса-контейнера.'
WHERE title = 'Advanced STL Usage';

-- Week 10 Lesson Translations
UPDATE curriculum_lessons SET 
  title_ro = 'Gestionare Avansată a Excepțiilor',
  description_ro = 'Crearea claselor de excepții personalizate

Sarcină Practică: Scrieți o excepție personalizată pentru input invalid într-un program.
Sarcină Avansată: Extindeți programul pentru a gestiona multiple excepții personalizate.',
  title_ru = 'Расширенная обработка исключений',
  description_ru = 'Создание пользовательских классов исключений

Практическая задача: Напишите пользовательское исключение для неверного ввода в программе.
Продвинутая задача: Расширьте программу для обработки нескольких пользовательских исключений.'
WHERE title = 'Advanced Exception Handling';

UPDATE curriculum_lessons SET 
  title_ro = 'Caracteristici Avansate CMake',
  description_ro = 'Adăugarea bibliotecilor externe în CMake • Build-uri Debug și Release

Sarcină Practică: Configurați un proiect pentru a se conecta cu o bibliotecă externă folosind CMake.
Sarcină Avansată: Folosiți target_compile_definitions în CMake pentru a activa logarea opțională.',
  title_ru = 'Продвинутые возможности CMake',
  description_ru = 'Добавление внешних библиотек в CMake • Сборки Debug и Release

Практическая задача: Настройте проект для подключения внешней библиотеки с помощью CMake.
Продвинутая задача: Используйте target_compile_definitions в CMake для включения опционального логирования.'
WHERE title = 'Advanced CMake Features';

-- Week 11 Lesson Translations
UPDATE curriculum_lessons SET 
  title_ro = 'Preprocesorul și Compilarea',
  description_ro = 'Directive de preprocesor și macro-uri • Prezentare generală a compilării și link-ării

Sarcină Practică: Scrieți macro-uri pentru constante și funcții reutilizabile.
Sarcină Avansată: Scrieți un program împărțit pe mai multe fișiere și creați o bibliotecă.',
  title_ru = 'Препроцессор и компиляция',
  description_ru = 'Директивы препроцессора и макросы • Обзор компиляции и линковки

Практическая задача: Напишите макросы для констант и переиспользуемых функций.
Продвинутая задача: Напишите программу, разделенную на несколько файлов, и создайте библиотеку.'
WHERE title = 'Preprocessor and Compilation';

UPDATE curriculum_lessons SET 
  title_ro = 'Expresii Lambda',
  description_ro = 'Introducere și utilizare cu STL

Sarcină Practică: Folosiți o expresie lambda pentru a filtra o listă de numere întregi.
Sarcină Avansată: Folosiți lambda-uri cu std::sort pentru a sorta obiecte personalizate.',
  title_ru = 'Лямбда-выражения',
  description_ru = 'Введение и использование с STL

Практическая задача: Используйте лямбда-выражение для фильтрации списка целых чисел.
Продвинутая задача: Используйте лямбды с std::sort для сортировки пользовательских объектов.'
WHERE title = 'Lambda Expressions';

-- Week 12 Lesson Translations
UPDATE curriculum_lessons SET 
  title_ro = 'Modele de Design Avansate',
  description_ro = 'Modelele Observer și Strategy

Sarcină Practică: Implementați un model Observer pentru un tracker de prețuri la acțiuni.
Sarcină Avansată: Folosiți modelul Strategy pentru a comuta între algoritmi de sortare.',
  title_ru = 'Продвинутые паттерны проектирования',
  description_ru = 'Паттерны Observer и Strategy

Практическая задача: Реализуйте паттерн Observer для трекера цен на акции.
Продвинутая задача: Используйте паттерн Strategy для переключения между алгоритмами сортировки.'
WHERE title = 'Advanced Design Patterns';

UPDATE curriculum_lessons SET 
  title_ro = 'Debugging și Optimizare',
  description_ro = 'Folosirea instrumentelor de debugging • Profilarea și optimizarea codului

Sarcină Practică: Profilați și optimizați un algoritm de sortare lent.
Sarcină Avansată: Folosiți opțiuni de compilare în CMake pentru a activa optimizările.',
  title_ru = 'Отладка и оптимизация',
  description_ru = 'Использование инструментов отладки • Профилирование и оптимизация кода

Практическая задача: Профилируйте и оптимизируйте медленный алгоритм сортировки.
Продвинутая задача: Используйте опции времени компиляции в CMake для включения оптимизаций.'
WHERE title = 'Debugging and Optimization';

-- Week 13 Lesson Translation
UPDATE curriculum_lessons SET 
  title_ro = 'Proiect Final',
  description_ro = 'Construiți un proiect care integrează conceptele din curs (ex. un joc text sau sistem de bibliotecă)

Sarcină Practică: Implementați funcționalitatea de bază a proiectului în timpul clasei.
Sarcină Avansată: Adăugați caracteristici extra, precum stocarea în fișiere sau multithreading.',
  title_ru = 'Итоговый проект',
  description_ru = 'Создайте проект, интегрирующий концепции из курса (например, текстовую игру или библиотечную систему)

Практическая задача: Реализуйте основную функциональность проекта во время занятия.
Продвинутая задача: Добавьте дополнительные возможности, такие как хранение файлов или многопоточность.'
WHERE title = 'Capstone Project';