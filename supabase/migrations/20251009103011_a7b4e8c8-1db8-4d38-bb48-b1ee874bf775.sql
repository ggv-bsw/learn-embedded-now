-- Add Romanian and Russian translations for C++ course lessons

-- Phase 1: Fundamentals (already has translations from previous migrations)

-- Phase 1 Add-Ons
UPDATE curriculum_lessons SET 
  title_ro = 'Esențialele Array-urilor și std::string',
  title_ru = 'Основы массивов и std::string'
WHERE title = 'Arrays & std::string Essentials';

UPDATE curriculum_lessons SET 
  title_ro = 'Laborator: Max în Array, Inversare și Palindrom',
  title_ru = 'Лаборатория: Максимум в массиве, реверс и палиндром'
WHERE title = 'Lab: Max in Array, Reverse & Palindrome';

UPDATE curriculum_lessons SET 
  title_ro = 'Pointeri, new/delete și bazele RAII',
  title_ru = 'Указатели, new/delete и основы RAII'
WHERE title = 'Pointers, new/delete & RAII basics';

UPDATE curriculum_lessons SET 
  title_ro = 'Laborator: Medie Array Dinamic și Swap cu Pointeri',
  title_ru = 'Лаборатория: Среднее динамического массива и обмен указателями'
WHERE title = 'Lab: Dynamic Array Average & Pointer Swap';

UPDATE curriculum_lessons SET 
  title_ro = 'Clase, Constructori/Destructori, Membri Statici',
  title_ru = 'Классы, конструкторы/деструкторы, статические члены'
WHERE title = 'Classes, Ctors/Dtors, Static Members';

UPDATE curriculum_lessons SET 
  title_ro = 'Proiect: Clasa Car cu contoare și metode',
  title_ru = 'Проект: Класс Car со счетчиками и методами'
WHERE title = 'Project: Car class with counters & methods';

UPDATE curriculum_lessons SET 
  title_ro = 'Moștenire și Polimorfism cu virtual',
  title_ru = 'Наследование и полиморфизм с virtual'
WHERE title = 'Inheritance & Polymorphism with virtual';

UPDATE curriculum_lessons SET 
  title_ro = 'Laborator: Shape → Circle/Rectangle (arie și perimetru)',
  title_ru = 'Лаборатория: Shape → Circle/Rectangle (площадь и периметр)'
WHERE title = 'Lab: Shape → Circle/Rectangle (area & perimeter)';

-- Phase 2: Intermediate Topics
UPDATE curriculum_lessons SET 
  title_ro = 'Supraîncărcare Operatori (aritmetici/relaționale/stream)',
  title_ru = 'Перегрузка операторов (арифметические/реляционные/поток)'
WHERE title = 'Operator Overloading (arithmetic/relational/stream)';

UPDATE curriculum_lessons SET 
  title_ro = 'Laborator: Complex + și supraîncărcări <<',
  title_ru = 'Лаборатория: Комплексные + и перегрузки <<'
WHERE title = 'Lab: Complex + and << overloads';

UPDATE curriculum_lessons SET 
  title_ro = 'Template-uri: funcții și clase; specializare',
  title_ru = 'Шаблоны: функции и классы; специализация'
WHERE title = 'Templates: function & class; specialization';

UPDATE curriculum_lessons SET 
  title_ro = 'Proiect: Stack cu Template + specializare char',
  title_ru = 'Проект: Стек с шаблоном + специализация char'
WHERE title = 'Project: Template Stack + char specialization';

UPDATE curriculum_lessons SET 
  title_ro = 'Excepții: throw/try/catch și siguranța erorilor',
  title_ru = 'Исключения: throw/try/catch и безопасность ошибок'
WHERE title = 'Exceptions: throw/try/catch & error safety';

UPDATE curriculum_lessons SET 
  title_ro = 'Laborator: Împărțire la zero și gestionare erori multiple',
  title_ru = 'Лаборатория: Деление на ноль и обработка множественных ошибок'
WHERE title = 'Lab: Division by zero & multi-error handling';

UPDATE curriculum_lessons SET 
  title_ro = 'I/O Fișiere: stream-uri, formate, gestionare erori',
  title_ru = 'Файловый ввод-вывод: потоки, форматы, обработка ошибок'
WHERE title = 'File I/O: streams, formats, error handling';

UPDATE curriculum_lessons SET 
  title_ro = 'Proiect: Înregistrări studenți (salvare/încărcare + erori)',
  title_ru = 'Проект: Записи студентов (сохранение/загрузка + ошибки)'
WHERE title = 'Project: Student records (save/load + errors)';

UPDATE curriculum_lessons SET 
  title_ro = 'Introducere în STL: vector/map și algoritmi (sort/find)',
  title_ru = 'Введение в STL: vector/map и алгоритмы (sort/find)'
WHERE title = 'Intro to STL: vector/map & algorithms (sort/find)';

-- Phase 2 Add-Ons
UPDATE curriculum_lessons SET 
  title_ro = 'Gestionare Memorie: unique_ptr/shared_ptr și ownership',
  title_ru = 'Управление памятью: unique_ptr/shared_ptr и владение'
WHERE title = 'Memory Mgmt: unique_ptr/shared_ptr & ownership';

UPDATE curriculum_lessons SET 
  title_ro = 'Laborator: Refactorizare la unique_ptr; colecție cu shared_ptr',
  title_ru = 'Лаборатория: Рефакторинг в unique_ptr; коллекция с shared_ptr'
WHERE title = 'Lab: Refactor to unique_ptr; collection with shared_ptr';

UPDATE curriculum_lessons SET 
  title_ro = 'Multithreading: std::thread și bazele mutex',
  title_ru = 'Многопоточность: std::thread и основы mutex'
WHERE title = 'Multithreading: std::thread & mutex basics';

UPDATE curriculum_lessons SET 
  title_ro = 'Laborator: Sumă array paralelă cu sincronizare',
  title_ru = 'Лаборатория: Параллельная сумма массива с синхронизацией'
WHERE title = 'Lab: Parallel array sum with synchronization';

UPDATE curriculum_lessons SET 
  title_ro = 'CMake pentru proiecte multi-fișier și multi-țintă',
  title_ru = 'CMake для многофайловых и многоцелевых проектов'
WHERE title = 'CMake for multi-file & multi-target projects';

UPDATE curriculum_lessons SET 
  title_ro = 'Laborator: Împărțire în libs/executabile + option()',
  title_ru = 'Лаборатория: Разделение на библиотеки/исполняемые + option()'
WHERE title = 'Lab: Split into libs/executables + option()';

UPDATE curriculum_lessons SET 
  title_ro = 'Pattern-uri de Design I: Singleton și Factory',
  title_ru = 'Шаблоны проектирования I: Singleton и Factory'
WHERE title = 'Design Patterns I: Singleton & Factory';

UPDATE curriculum_lessons SET 
  title_ro = 'Proiect: Config Singleton + Shape Factory',
  title_ru = 'Проект: Config Singleton + Shape Factory'
WHERE title = 'Project: Config Singleton + Shape Factory';

-- Phase 3: Advanced Topics
UPDATE curriculum_lessons SET 
  title_ro = 'STL Avansat: iteratori și comparatori personalizați',
  title_ru = 'Продвинутая STL: итераторы и пользовательские компараторы'
WHERE title = 'Advanced STL: iterators & custom comparators';

UPDATE curriculum_lessons SET 
  title_ro = 'Laborator: Sortare listă Person personalizată după vârstă',
  title_ru = 'Лаборатория: Сортировка пользовательского списка Person по возрасту'
WHERE title = 'Lab: Sort custom Person list by age';

UPDATE curriculum_lessons SET 
  title_ro = 'Excepții Avansate: tipuri personalizate și ierarhii',
  title_ru = 'Продвинутые исключения: пользовательские типы и иерархии'
WHERE title = 'Advanced Exceptions: custom types & hierarchies';

UPDATE curriculum_lessons SET 
  title_ro = 'Laborator: Validare input-uri cu excepții personalizate',
  title_ru = 'Лаборатория: Валидация входных данных с пользовательскими исключениями'
WHERE title = 'Lab: Validate inputs with custom exceptions';

UPDATE curriculum_lessons SET 
  title_ro = 'CMake Avansat: biblioteci externe, configurări, tipuri build',
  title_ru = 'Продвинутый CMake: внешние библиотеки, конфигурации, типы сборки'
WHERE title = 'Advanced CMake: external libs, configs, build types';

UPDATE curriculum_lessons SET 
  title_ro = 'Laborator: Link bibliotecă externă + target_compile_definitions',
  title_ru = 'Лаборатория: Подключение внешней библиотеки + target_compile_definitions'
WHERE title = 'Lab: Link external lib + target_compile_definitions';

UPDATE curriculum_lessons SET 
  title_ro = 'Preprocesorul, compilare și workflow linking',
  title_ru = 'Препроцессор, компиляция и процесс линковки'
WHERE title = 'Preprocessor, compilation & linking workflow';

UPDATE curriculum_lessons SET 
  title_ro = 'Laborator: Macro-uri, bibliotecă multi-fișier și aplicație consumatoare',
  title_ru = 'Лаборатория: Макросы, многофайловая библиотека и потребительское приложение'
WHERE title = 'Lab: Macros, multi-file lib & consumer app';

-- Phase 3 Add-Ons
UPDATE curriculum_lessons SET 
  title_ro = 'Lambdas cu STL (capture și predicate)',
  title_ru = 'Лямбда-функции с STL (захват и предикаты)'
WHERE title = 'Lambdas with STL (capture & predicates)';

UPDATE curriculum_lessons SET 
  title_ro = 'Laborator: Filtrare și sortare cu lambdas',
  title_ru = 'Лаборатория: Фильтрация и сортировка с лямбдами'
WHERE title = 'Lab: Filter & sort with lambdas';

UPDATE curriculum_lessons SET 
  title_ro = 'Pattern-uri de Design II: Observer și Strategy',
  title_ru = 'Шаблоны проектирования II: Observer и Strategy'
WHERE title = 'Design Patterns II: Observer & Strategy';

UPDATE curriculum_lessons SET 
  title_ro = 'Proiect: Tracker acțiuni (Observer) + sortare pluggable (Strategy)',
  title_ru = 'Проект: Трекер акций (Observer) + подключаемая сортировка (Strategy)'
WHERE title = 'Project: Stock tracker (Observer) + pluggable sort (Strategy)';

UPDATE curriculum_lessons SET 
  title_ro = 'Debugging și Profiling; flag-uri O2/O3 și sanitizer',
  title_ru = 'Отладка и профилирование; флаги O2/O3 и санитайзер'
WHERE title = 'Debugging & Profiling; O2/O3 & sanitizer flags';

UPDATE curriculum_lessons SET 
  title_ro = 'Laborator: Optimizare sortare lentă; opțiuni CMake pentru build-uri',
  title_ru = 'Лаборатория: Оптимизация медленной сортировки; опции CMake для сборок'
WHERE title = 'Lab: Optimize slow sort; CMake options for builds';

UPDATE curriculum_lessons SET 
  title_ro = 'Planificare Capstone: domeniu și arhitectură',
  title_ru = 'Планирование дипломного проекта: область и архитектура'
WHERE title = 'Capstone Planning: scope & architecture';

UPDATE curriculum_lessons SET 
  title_ro = 'Build Capstone: Joc text sau Sistem bibliotecă',
  title_ru = 'Дипломный проект: Текстовая игра или библиотечная система'
WHERE title = 'Capstone Build: Text game or Library system';

-- PCB Design course translations
UPDATE curriculum_lessons SET 
  title_ro = 'Configurare stackup PCB și layere',
  title_ru = 'Конфигурация стека PCB и слои'
WHERE title = 'PCB stackup and layer configuration';

UPDATE curriculum_lessons SET 
  title_ro = 'Strategii plasare componente și design pentru producție',
  title_ru = 'Стратегии размещения компонентов и проектирование для производства'
WHERE title = 'Component placement strategies and design for manufacturing';

UPDATE curriculum_lessons SET 
  title_ro = 'Tehnici rutare și calcule lățime trasee',
  title_ru = 'Методы трассировки и расчет ширины дорожек'
WHERE title = 'Routing techniques and trace width calculations';

UPDATE curriculum_lessons SET 
  title_ro = 'Laborator: Layout shield Arduino cu 2 straturi',
  title_ru = 'Лаборатория: Компоновка 2-слойного Arduino shield'
WHERE title = 'Lab: Layout a 2-layer Arduino shield';

UPDATE curriculum_lessons SET 
  title_ro = 'Integritate semnal și considerații design de viteză mare',
  title_ru = 'Целостность сигнала и соображения высокоскоростного проектирования'
WHERE title = 'Signal integrity and high-speed design considerations';

UPDATE curriculum_lessons SET 
  title_ro = 'Rețele distribuție putere și plane de masă',
  title_ru = 'Сети распределения питания и земляные плоскости'
WHERE title = 'Power distribution networks and ground planes';

UPDATE curriculum_lessons SET 
  title_ro = 'Ghiduri design EMC/EMI',
  title_ru = 'Руководства по проектированию EMC/EMI'
WHERE title = 'EMC/EMI design guidelines';

UPDATE curriculum_lessons SET 
  title_ro = 'Proiect: Design placă senzor IoT multi-strat',
  title_ru = 'Проект: Проектирование многослойной платы IoT-сенсора'
WHERE title = 'Project: Design a multi-layer IoT sensor board';

UPDATE curriculum_lessons SET 
  title_ro = 'Design pentru producție (DFM) și asamblare (DFA)',
  title_ru = 'Проектирование для производства (DFM) и сборки (DFA)'
WHERE title = 'Design for manufacturing (DFM) and assembly (DFA)';

UPDATE curriculum_lessons SET 
  title_ro = 'Generare fișiere fabricație și BOM',
  title_ru = 'Генерация файлов для производства и BOM'
WHERE title = 'Generating fabrication files and BOM';

UPDATE curriculum_lessons SET 
  title_ro = 'Tehnici testare și debugging PCB',
  title_ru = 'Методы тестирования и отладки PCB'
WHERE title = 'PCB testing and debugging techniques';

UPDATE curriculum_lessons SET 
  title_ro = 'Capstone: PCB complet sistem embedded cu 4 straturi',
  title_ru = 'Дипломный проект: Полная 4-слойная плата встроенной системы'
WHERE title = 'Capstone: Complete 4-layer embedded system PCB';

-- Software Testing course translations
UPDATE curriculum_lessons SET 
  title_ro = 'Framework-uri automatizare testare (pytest, Robot Framework)',
  title_ru = 'Фреймворки автоматизации тестирования (pytest, Robot Framework)'
WHERE title = 'Test automation frameworks (pytest, Robot Framework)';

UPDATE curriculum_lessons SET 
  title_ro = 'CANoe/CANalyzer pentru testare rețele vehicule',
  title_ru = 'CANoe/CANalyzer для тестирования автомобильных сетей'
WHERE title = 'CANoe/CANalyzer for vehicle network testing';

UPDATE curriculum_lessons SET 
  title_ro = 'Pipeline-uri CI/CD pentru software auto',
  title_ru = 'CI/CD-конвейеры для автомобильного ПО'
WHERE title = 'CI/CD pipelines for automotive software';

UPDATE curriculum_lessons SET 
  title_ro = 'Proiect: Suite testare automată magistrală CAN',
  title_ru = 'Проект: Автоматизированный набор тестов CAN-шины'
WHERE title = 'Project: Automated CAN bus testing suite';

UPDATE curriculum_lessons SET 
  title_ro = 'Principii testare Hardware-in-the-Loop (HIL)',
  title_ru = 'Принципы тестирования Hardware-in-the-Loop (HIL)'
WHERE title = 'Hardware-in-the-Loop (HIL) testing principles';

UPDATE curriculum_lessons SET 
  title_ro = 'Software-in-the-Loop (SIL) și Model-in-the-Loop (MIL)',
  title_ru = 'Software-in-the-Loop (SIL) и Model-in-the-Loop (MIL)'
WHERE title = 'Software-in-the-Loop (SIL) and Model-in-the-Loop (MIL)';

UPDATE curriculum_lessons SET 
  title_ro = 'Sisteme HIL dSPACE și Vector',
  title_ru = 'HIL-системы dSPACE и Vector'
WHERE title = 'dSPACE and Vector HIL systems';

UPDATE curriculum_lessons SET 
  title_ro = 'Laborator: Configurare și execuție scenarii test HIL',
  title_ru = 'Лаборатория: Настройка и выполнение HIL-тестовых сценариев'
WHERE title = 'Lab: Set up and execute HIL test scenarios';

UPDATE curriculum_lessons SET 
  title_ro = 'Arhitectură AUTOSAR și testare componente',
  title_ru = 'Архитектура AUTOSAR и тестирование компонентов'
WHERE title = 'AUTOSAR architecture and component testing';

UPDATE curriculum_lessons SET 
  title_ro = 'Strategii testare module BSW',
  title_ru = 'Стратегии тестирования BSW-модулей'
WHERE title = 'BSW module testing strategies';

UPDATE curriculum_lessons SET 
  title_ro = 'Testare integrare RTE și SWC',
  title_ru = 'Интеграционное тестирование RTE и SWC'
WHERE title = 'RTE and SWC integration testing';

UPDATE curriculum_lessons SET 
  title_ro = 'Proiect: Suite validare stack AUTOSAR',
  title_ru = 'Проект: Набор валидации стека AUTOSAR'
WHERE title = 'Project: AUTOSAR stack validation suite';

UPDATE curriculum_lessons SET 
  title_ro = 'Testare securitate cibernetică pentru sisteme auto',
  title_ru = 'Тестирование кибербезопасности для автомобильных систем'
WHERE title = 'Cybersecurity testing for automotive systems';

UPDATE curriculum_lessons SET 
  title_ro = 'Validare și testare actualizări OTA',
  title_ru = 'Валидация и тестирование OTA-обновлений'
WHERE title = 'OTA update validation and testing';

UPDATE curriculum_lessons SET 
  title_ro = 'Testare performanță și stress pentru ECU-uri',
  title_ru = 'Тестирование производительности и стресс-тестирование для ECU'
WHERE title = 'Performance and stress testing for ECUs';

UPDATE curriculum_lessons SET 
  title_ro = 'Capstone: Suite completă testare pentru funcție ADAS',
  title_ru = 'Дипломный проект: Полный набор тестов для функции ADAS'
WHERE title = 'Capstone: Complete test suite for ADAS feature';