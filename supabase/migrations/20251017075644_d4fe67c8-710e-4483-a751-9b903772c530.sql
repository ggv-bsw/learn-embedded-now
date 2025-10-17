-- Complete restructure of Software Testing & Automotive QA course curriculum
-- Delete existing curriculum for this course
DELETE FROM curriculum_lessons WHERE curriculum_id IN (
  SELECT id FROM course_curriculum WHERE course_id = 'software-testing-automotive-qa'
);
DELETE FROM course_curriculum WHERE course_id = 'software-testing-automotive-qa';

-- Module 1: Fundamentele testării software (40h)
WITH mod1 AS (
  INSERT INTO course_curriculum (course_id, title, title_ro, title_ru, order_index) 
  VALUES ('software-testing-automotive-qa', 'Module 1 – Software Testing Fundamentals', 'Modul 1 – Fundamentele testării software', 'Модуль 1 – Основы тестирования ПО', 1)
  RETURNING id
)
INSERT INTO curriculum_lessons (curriculum_id, title, title_ro, title_ru, duration, type, order_index) 
SELECT 
  mod1.id,
  unnest(ARRAY['Testing theory and fundamental concepts', 'Testing principles, levels and types', 'Test case design techniques and requirements traceability']),
  unnest(ARRAY['Teoria testării, concepte fundamentale', 'Principii, nivele și tipuri de testare', 'Tehnici de proiectare test cases și trasabilitate cerințe']),
  unnest(ARRAY['Теория тестирования, фундаментальные концепции', 'Принципы, уровни и типы тестирования', 'Техники проектирования тест-кейсов и прослеживаемость требований']),
  unnest(ARRAY['10h', '15h', '15h']),
  unnest(ARRAY['video', 'video', 'hands-on']),
  unnest(ARRAY[1, 2, 3])
FROM mod1;

-- Module 2: Testare web (30h)
WITH mod2 AS (
  INSERT INTO course_curriculum (course_id, title, title_ro, title_ru, order_index) 
  VALUES ('software-testing-automotive-qa', 'Module 2 – Web Testing', 'Modul 2 – Testare web', 'Модуль 2 – Веб-тестирование', 2)
  RETURNING id
)
INSERT INTO curriculum_lessons (curriculum_id, title, title_ro, title_ru, duration, type, order_index) 
SELECT 
  mod2.id,
  unnest(ARRAY['Web application basics: HTML, CSS, JS, APIs', 'Manual web & API testing', 'Introduction to automation with Selenium/Python']),
  unnest(ARRAY['Bazele aplicațiilor web: HTML, CSS, JS, API-uri', 'Testare manuală web & API', 'Introducere în automatizare cu Selenium/Python']),
  unnest(ARRAY['Основы веб-приложений: HTML, CSS, JS, API', 'Ручное тестирование веб и API', 'Введение в автоматизацию с Selenium/Python']),
  unnest(ARRAY['10h', '10h', '10h']),
  unnest(ARRAY['video', 'hands-on', 'hands-on']),
  unnest(ARRAY[1, 2, 3])
FROM mod2;

-- Module 3: Testare Embedded și Automotive (110h)
WITH mod3 AS (
  INSERT INTO course_curriculum (course_id, title, title_ro, title_ru, order_index) 
  VALUES ('software-testing-automotive-qa', 'Module 3 – Embedded and Automotive Testing', 'Modul 3 – Testare Embedded și Automotive', 'Модуль 3 – Встроенное и автомобильное тестирование', 3)
  RETURNING id
)
INSERT INTO curriculum_lessons (curriculum_id, title, title_ro, title_ru, duration, type, description, description_ro, description_ru, order_index) 
SELECT 
  mod3.id,
  unnest(ARRAY[
    'Introduction to Embedded and Automotive Systems', 
    'V-Model in Automotive',
    'Testing Types and Techniques',
    'Automated and Manual Testing',
    'Automotive Testing Environments',
    'Quality, Safety and Standardization',
    'Practical Examples / Workshops'
  ]),
  unnest(ARRAY[
    'Introducere în Sisteme Embedded și Automotive',
    'V-Model în Automotive',
    'Tipuri și Tehnici de Testare',
    'Testare Automată și Manuală',
    'Medii de Testare în Automotive',
    'Calitate, Siguranță și Standardizare',
    'Exemple Practice / Workshop-uri'
  ]),
  unnest(ARRAY[
    'Введение в встроенные и автомобильные системы',
    'V-Model в автомобильной промышленности',
    'Типы и техники тестирования',
    'Автоматизированное и ручное тестирование',
    'Среды тестирования в автомобильной промышленности',
    'Качество, безопасность и стандартизация',
    'Практические примеры / Воркшопы'
  ]),
  unnest(ARRAY['15h', '20h', '15h', '15h', '20h', '15h', '10h']),
  unnest(ARRAY['video', 'video', 'video', 'hands-on', 'hands-on', 'video', 'project']),
  unnest(ARRAY[
    'ECU architecture, real-time systems, embedded constraints, role of testing in automotive lifecycle',
    'V-Model presentation, testing levels: Unit, Integration, System, Acceptance, Requirements Traceability',
    'Static vs dynamic testing, Black-box, White-box, Gray-box, BVA, Equivalence Partitioning, MC/DC Coverage, TDD',
    'Advantages and limitations, Frameworks: GoogleTest, Tessy, CANoe, VectorCAST, CI/CD integration, scripting (Python, CAPL)',
    'SIL (Software-in-the-Loop), MIL (Model-in-the-Loop), HIL (Hardware-in-the-Loop), HIL benches (dSPACE, ETAS, NI), real testing setups',
    'Introduction to ISO 26262 – Functional Safety, ASIL levels, Safety Goals and Requirements, verification and validation process, documentation',
    'Writing and executing test cases for ECU functionality (e.g. light control, ABS), testing on simulators (CAPL + CANoe), automated testing integration in Jenkins, code coverage analysis'
  ]),
  unnest(ARRAY[
    'Arhitectura ECU, sisteme real-time, constrângeri embedded, rolul testării în ciclul de viață automotive',
    'Prezentarea V-Model, niveluri de testare: Unit, Integration, System, Acceptance, trasabilitate cerințe',
    'Testare statică vs. dinamică, Black-box, White-box, Gray-box, Boundary Value Analysis, Equivalence Partitioning, MC/DC Coverage, TDD',
    'Avantaje și limitări, Framework-uri: GoogleTest, Tessy, CANoe, VectorCAST, integrare CI/CD (Jenkins, GitLab CI), scripting (Python, CAPL)',
    'SIL (Software-in-the-Loop), MIL (Model-in-the-Loop), HIL (Hardware-in-the-Loop), testare pe bancuri HIL (dSPACE, ETAS, NI), exemple de setup-uri reale',
    'Introducere în ISO 26262 – Functional Safety, ASIL (Automotive Safety Integrity Level), Safety Goals și Safety Requirements, proces de verificare și validare, documentație',
    'Scriere și execuție test cases pentru o funcționalitate ECU (ex. control lumini, ABS), testare pe simulatoare (CAPL + CANoe), integrare testare automată în Jenkins, analiză code coverage pentru un modul embedded'
  ]),
  unnest(ARRAY[
    'Архитектура ECU, системы реального времени, ограничения встроенных систем, роль тестирования в жизненном цикле автомобиля',
    'Представление V-Model, уровни тестирования: Unit, Integration, System, Acceptance, прослеживаемость требований',
    'Статическое и динамическое тестирование, Black-box, White-box, Gray-box, BVA, разбиение по эквивалентности, MC/DC Coverage, TDD',
    'Преимущества и ограничения, Фреймворки: GoogleTest, Tessy, CANoe, VectorCAST, интеграция CI/CD, скриптинг (Python, CAPL)',
    'SIL (Software-in-the-Loop), MIL (Model-in-the-Loop), HIL (Hardware-in-the-Loop), стенды HIL (dSPACE, ETAS, NI), реальные настройки тестирования',
    'Введение в ISO 26262 – функциональная безопасность, уровни ASIL, цели и требования безопасности, процесс верификации и валидации, документация',
    'Написание и выполнение тест-кейсов для функциональности ECU (напр. управление светом, ABS), тестирование на симуляторах (CAPL + CANoe), интеграция автоматизированного тестирования в Jenkins, анализ покрытия кода'
  ]),
  unnest(ARRAY[1, 2, 3, 4, 5, 6, 7])
FROM mod3;