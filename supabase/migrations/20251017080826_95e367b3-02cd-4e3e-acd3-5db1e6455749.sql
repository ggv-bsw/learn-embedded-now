-- Update PCB Design Fundamentals course with new Russian content
UPDATE courses 
SET 
  description_ru = 'Курс рассчитан на начинающих специалистов, студентов и выпускников университета. Подразумевается, что слушатель имеет базовые представления, знания и навыки о физике, электронике и схемотехнике. Знает закон Ома, базовые электронные компоненты и их свойства. Из курса слушатель узнает базовые принципы разработки печатных плат, освоит инструменты и навыки для их проектирования.',
  title_ru = 'Курс по разработке печатных плат'
WHERE id = 'pcb-design-fundamentals';

-- Delete existing curriculum for PCB Design Fundamentals
DELETE FROM curriculum_lessons WHERE curriculum_id IN (
  SELECT id FROM course_curriculum WHERE course_id = 'pcb-design-fundamentals'
);
DELETE FROM course_curriculum WHERE course_id = 'pcb-design-fundamentals';

-- Insert new curriculum structure
-- Module 1: Introduction
INSERT INTO course_curriculum (id, course_id, title, title_ro, title_ru, order_index) VALUES
(gen_random_uuid(), 'pcb-design-fundamentals', 'Introduction', 'Introducere', 'Введение', 1);

INSERT INTO curriculum_lessons (curriculum_id, title, title_ro, title_ru, description, description_ro, description_ru, duration, type, order_index)
SELECT 
  cc.id,
  'Electronics Development and PCB Role',
  'Dezvoltarea electronicii și rolul PCB',
  'О разработке электроники и места печатной платы в нем',
  'Understanding the role of PCB in electronics development',
  'Înțelegerea rolului PCB în dezvoltarea electronicii',
  'Понимание роли печатной платы в разработке электроники',
  '45 min',
  'video',
  1
FROM course_curriculum cc WHERE cc.course_id = 'pcb-design-fundamentals' AND cc.order_index = 1;

INSERT INTO curriculum_lessons (curriculum_id, title, title_ro, title_ru, description, description_ro, description_ru, duration, type, order_index)
SELECT 
  cc.id,
  'Practical Tips for Electronics Development',
  'Sfaturi practice pentru dezvoltarea electronicii',
  'Практические советы по разработке электроники',
  'Essential practical advice for PCB development',
  'Sfaturi practice esențiale pentru dezvoltarea PCB',
  'Важные практические советы по разработке печатных плат',
  '45 min',
  'video',
  2
FROM course_curriculum cc WHERE cc.course_id = 'pcb-design-fundamentals' AND cc.order_index = 1;

-- Module 2: What is a PCB?
INSERT INTO course_curriculum (id, course_id, title, title_ro, title_ru, order_index) VALUES
(gen_random_uuid(), 'pcb-design-fundamentals', 'What is a PCB?', 'Ce este un PCB?', 'Что такое печатная плата?', 2);

INSERT INTO curriculum_lessons (curriculum_id, title, title_ro, title_ru, description, description_ro, description_ru, duration, type, order_index)
SELECT 
  cc.id,
  'PCB Types and Varieties',
  'Tipuri și varietăți de PCB',
  'Что такое плата и какими они бывают',
  'Understanding different types of PCBs',
  'Înțelegerea diferitelor tipuri de PCB',
  'Понимание различных типов печатных плат',
  '60 min',
  'video',
  1
FROM course_curriculum cc WHERE cc.course_id = 'pcb-design-fundamentals' AND cc.order_index = 2;

INSERT INTO curriculum_lessons (curriculum_id, title, title_ro, title_ru, description, description_ro, description_ru, duration, type, order_index)
SELECT 
  cc.id,
  'PCB Basic Elements',
  'Elementele de bază ale PCB',
  'Основные элементы плат',
  'Core components and structure of PCBs',
  'Componentele de bază și structura PCB',
  'Основные компоненты и структура печатных плат',
  '60 min',
  'video',
  2
FROM course_curriculum cc WHERE cc.course_id = 'pcb-design-fundamentals' AND cc.order_index = 2;

INSERT INTO curriculum_lessons (curriculum_id, title, title_ro, title_ru, description, description_ro, description_ru, duration, type, order_index)
SELECT 
  cc.id,
  'Manufacturing Materials',
  'Materiale de fabricație',
  'Материалы для производства',
  'PCB manufacturing materials and substrates',
  'Materiale și substrate de fabricație PCB',
  'Материалы и подложки для производства печатных плат',
  '60 min',
  'video',
  3
FROM course_curriculum cc WHERE cc.course_id = 'pcb-design-fundamentals' AND cc.order_index = 2;

INSERT INTO curriculum_lessons (curriculum_id, title, title_ro, title_ru, description, description_ro, description_ru, duration, type, order_index)
SELECT 
  cc.id,
  'Manufacturer Capabilities',
  'Capacitățile producătorilor',
  'Технологические возможности производителей',
  'Understanding PCB manufacturer technical capabilities',
  'Înțelegerea capacităților tehnice ale producătorilor PCB',
  'Понимание технологических возможностей производителей',
  '45 min',
  'video',
  4
FROM course_curriculum cc WHERE cc.course_id = 'pcb-design-fundamentals' AND cc.order_index = 2;

-- Module 3: Electronic Components
INSERT INTO course_curriculum (id, course_id, title, title_ro, title_ru, order_index) VALUES
(gen_random_uuid(), 'pcb-design-fundamentals', 'Electronic Components', 'Componente electronice', 'Электронные компоненты', 3);

INSERT INTO curriculum_lessons (curriculum_id, title, title_ro, title_ru, description, description_ro, description_ru, duration, type, order_index)
SELECT 
  cc.id,
  'What is an Electronic Component',
  'Ce este o componentă electronică',
  'Что такое электронный компонент',
  'Understanding electronic components fundamentals',
  'Înțelegerea fundamentelor componentelor electronice',
  'Понимание основ электронных компонентов',
  '45 min',
  'video',
  1
FROM course_curriculum cc WHERE cc.course_id = 'pcb-design-fundamentals' AND cc.order_index = 3;

INSERT INTO curriculum_lessons (curriculum_id, title, title_ro, title_ru, description, description_ro, description_ru, duration, type, order_index)
SELECT 
  cc.id,
  'Component Types',
  'Tipuri de componente',
  'Виды компонентов',
  'Overview of different component types',
  'Prezentare generală a diferitelor tipuri de componente',
  'Обзор различных типов компонентов',
  '60 min',
  'video',
  2
FROM course_curriculum cc WHERE cc.course_id = 'pcb-design-fundamentals' AND cc.order_index = 3;

INSERT INTO curriculum_lessons (curriculum_id, title, title_ro, title_ru, description, description_ro, description_ru, duration, type, order_index)
SELECT 
  cc.id,
  'Common Packages',
  'Pachete comune',
  'Наиболее распространенные корпуса',
  'Most common component packages and footprints',
  'Cele mai comune pachete și amprente de componente',
  'Наиболее распространенные корпуса и посадочные места',
  '60 min',
  'video',
  3
FROM course_curriculum cc WHERE cc.course_id = 'pcb-design-fundamentals' AND cc.order_index = 3;

INSERT INTO curriculum_lessons (curriculum_id, title, title_ro, title_ru, description, description_ro, description_ru, duration, type, order_index)
SELECT 
  cc.id,
  'Finding and Selecting Components',
  'Găsirea și selectarea componentelor',
  'Где их найти, как выбирать',
  'How to source and select the right components',
  'Cum să găsiți și să selectați componentele potrivite',
  'Как найти и выбрать правильные компоненты',
  '60 min',
  'hands-on',
  4
FROM course_curriculum cc WHERE cc.course_id = 'pcb-design-fundamentals' AND cc.order_index = 3;

-- Module 4: Ideal and Real Connections
INSERT INTO course_curriculum (id, course_id, title, title_ro, title_ru, order_index) VALUES
(gen_random_uuid(), 'pcb-design-fundamentals', 'Ideal and Real Connections', 'Conexiuni ideale și reale', 'Идеальные и реальные соединения', 4);

INSERT INTO curriculum_lessons (curriculum_id, title, title_ro, title_ru, description, description_ro, description_ru, duration, type, order_index)
SELECT 
  cc.id,
  'Difference Between Ideal and Real Connections',
  'Diferența între conexiunile ideale și cele reale',
  'Отличие идеальных и реальных соединений',
  'Understanding practical vs. theoretical connections',
  'Înțelegerea conexiunilor practice vs. teoretice',
  'Понимание практических и теоретических соединений',
  '60 min',
  'video',
  1
FROM course_curriculum cc WHERE cc.course_id = 'pcb-design-fundamentals' AND cc.order_index = 4;

INSERT INTO curriculum_lessons (curriculum_id, title, title_ro, title_ru, description, description_ro, description_ru, duration, type, order_index)
SELECT 
  cc.id,
  'Component Equivalent Circuits',
  'Circuite echivalente ale componentelor',
  'Эквивалентная схема компонентов',
  'Modeling real component behavior',
  'Modelarea comportamentului real al componentelor',
  'Моделирование реального поведения компонентов',
  '60 min',
  'video',
  2
FROM course_curriculum cc WHERE cc.course_id = 'pcb-design-fundamentals' AND cc.order_index = 4;

-- Module 5: Introduction to KiCAD
INSERT INTO course_curriculum (id, course_id, title, title_ro, title_ru, order_index) VALUES
(gen_random_uuid(), 'pcb-design-fundamentals', 'Introduction to KiCAD', 'Introducere în KiCAD', 'Введение в KiCAD', 5);

INSERT INTO curriculum_lessons (curriculum_id, title, title_ro, title_ru, description, description_ro, description_ru, duration, type, order_index)
SELECT 
  cc.id,
  'What is ECAD?',
  'Ce este ECAD?',
  'Что такое ECAD?',
  'Introduction to Electronic Computer-Aided Design',
  'Introducere în proiectarea electronică asistată de calculator',
  'Введение в системы автоматизированного проектирования электроники',
  '45 min',
  'video',
  1
FROM course_curriculum cc WHERE cc.course_id = 'pcb-design-fundamentals' AND cc.order_index = 5;

INSERT INTO curriculum_lessons (curriculum_id, title, title_ro, title_ru, description, description_ro, description_ru, duration, type, order_index)
SELECT 
  cc.id,
  'KiCAD Concept and Structure',
  'Conceptul și structura KiCAD',
  'Концепция и устройство KiCAD',
  'Understanding KiCAD architecture and workflow',
  'Înțelegerea arhitecturii și fluxului de lucru KiCAD',
  'Понимание архитектуры и рабочего процесса KiCAD',
  '90 min',
  'hands-on',
  2
FROM course_curriculum cc WHERE cc.course_id = 'pcb-design-fundamentals' AND cc.order_index = 5;

-- Module 6: Creating Libraries and Components
INSERT INTO course_curriculum (id, course_id, title, title_ro, title_ru, order_index) VALUES
(gen_random_uuid(), 'pcb-design-fundamentals', 'Creating Libraries and Components', 'Crearea bibliotecilor și componentelor', 'Создание библиотеки и компонентов', 6);

INSERT INTO curriculum_lessons (curriculum_id, title, title_ro, title_ru, description, description_ro, description_ru, duration, type, order_index)
SELECT 
  cc.id,
  'Installing and Connecting Libraries',
  'Instalarea și conectarea bibliotecilor',
  'Установка и подключение библиотек',
  'Managing KiCAD component libraries',
  'Gestionarea bibliotecilor de componente KiCAD',
  'Управление библиотеками компонентов KiCAD',
  '60 min',
  'hands-on',
  1
FROM course_curriculum cc WHERE cc.course_id = 'pcb-design-fundamentals' AND cc.order_index = 6;

INSERT INTO curriculum_lessons (curriculum_id, title, title_ro, title_ru, description, description_ro, description_ru, duration, type, order_index)
SELECT 
  cc.id,
  'Creating Component Symbols',
  'Crearea simbolurilor componentelor',
  'Создание УГО компонента',
  'Designing schematic symbols',
  'Proiectarea simbolurilor schematice',
  'Проектирование условных графических обозначений',
  '90 min',
  'hands-on',
  2
FROM course_curriculum cc WHERE cc.course_id = 'pcb-design-fundamentals' AND cc.order_index = 6;

INSERT INTO curriculum_lessons (curriculum_id, title, title_ro, title_ru, description, description_ro, description_ru, duration, type, order_index)
SELECT 
  cc.id,
  'Creating Component Footprints',
  'Crearea amprentelor componentelor',
  'Создание посадочного места компонента',
  'Designing PCB footprints',
  'Proiectarea amprentelor PCB',
  'Проектирование посадочных мест для печатных плат',
  '90 min',
  'hands-on',
  3
FROM course_curriculum cc WHERE cc.course_id = 'pcb-design-fundamentals' AND cc.order_index = 6;

-- Module 7: Creating a Project
INSERT INTO course_curriculum (id, course_id, title, title_ro, title_ru, order_index) VALUES
(gen_random_uuid(), 'pcb-design-fundamentals', 'Creating a Project', 'Crearea unui proiect', 'Создание проекта', 7);

INSERT INTO curriculum_lessons (curriculum_id, title, title_ro, title_ru, description, description_ro, description_ru, duration, type, order_index)
SELECT 
  cc.id,
  'Creating Schematics',
  'Crearea schemelor',
  'Создание схемы',
  'Schematic design in KiCAD',
  'Proiectarea schematică în KiCAD',
  'Создание принципиальных схем в KiCAD',
  '120 min',
  'hands-on',
  1
FROM course_curriculum cc WHERE cc.course_id = 'pcb-design-fundamentals' AND cc.order_index = 7;

INSERT INTO curriculum_lessons (curriculum_id, title, title_ro, title_ru, description, description_ro, description_ru, duration, type, order_index)
SELECT 
  cc.id,
  'Creating PCB Layout',
  'Crearea aspectului PCB',
  'Создание печатной платы',
  'Starting PCB layout from schematic',
  'Începerea aspectului PCB din schemă',
  'Начало разводки печатной платы из схемы',
  '90 min',
  'hands-on',
  2
FROM course_curriculum cc WHERE cc.course_id = 'pcb-design-fundamentals' AND cc.order_index = 7;

INSERT INTO curriculum_lessons (curriculum_id, title, title_ro, title_ru, description, description_ro, description_ru, duration, type, order_index)
SELECT 
  cc.id,
  'Features Overview',
  'Prezentarea caracteristicilor',
  'Обзор возможностей',
  'Overview of KiCAD PCB design features',
  'Prezentare generală a caracteristicilor de proiectare PCB KiCAD',
  'Обзор возможностей проектирования печатных плат в KiCAD',
  '60 min',
  'video',
  3
FROM course_curriculum cc WHERE cc.course_id = 'pcb-design-fundamentals' AND cc.order_index = 7;

-- Module 8: PCB Routing
INSERT INTO course_curriculum (id, course_id, title, title_ro, title_ru, order_index) VALUES
(gen_random_uuid(), 'pcb-design-fundamentals', 'PCB Routing', 'Rutarea PCB', 'Трассировка печатной платы', 8);

INSERT INTO curriculum_lessons (curriculum_id, title, title_ro, title_ru, description, description_ro, description_ru, duration, type, order_index)
SELECT 
  cc.id,
  'Defining Dimensions',
  'Definirea dimensiunilor',
  'Определение размеров',
  'Setting up PCB board dimensions',
  'Configurarea dimensiunilor plăcii PCB',
  'Настройка размеров печатной платы',
  '45 min',
  'video',
  1
FROM course_curriculum cc WHERE cc.course_id = 'pcb-design-fundamentals' AND cc.order_index = 8;

INSERT INTO curriculum_lessons (curriculum_id, title, title_ro, title_ru, description, description_ro, description_ru, duration, type, order_index)
SELECT 
  cc.id,
  'Defining Stack-up',
  'Definirea stratificării',
  'Определение стека',
  'PCB layer stack-up configuration',
  'Configurarea stratificării straturilor PCB',
  'Конфигурация слоёв печатной платы',
  '60 min',
  'video',
  2
FROM course_curriculum cc WHERE cc.course_id = 'pcb-design-fundamentals' AND cc.order_index = 8;

INSERT INTO curriculum_lessons (curriculum_id, title, title_ro, title_ru, description, description_ro, description_ru, duration, type, order_index)
SELECT 
  cc.id,
  'Defining Design Rules',
  'Definirea regulilor de proiectare',
  'Определение правил',
  'Setting up design rule constraints',
  'Configurarea constrângerilor regulilor de proiectare',
  'Настройка правил проектирования',
  '60 min',
  'hands-on',
  3
FROM course_curriculum cc WHERE cc.course_id = 'pcb-design-fundamentals' AND cc.order_index = 8;

INSERT INTO curriculum_lessons (curriculum_id, title, title_ro, title_ru, description, description_ro, description_ru, duration, type, order_index)
SELECT 
  cc.id,
  'Component Placement Planning',
  'Planificarea plasării componentelor',
  'Планирование положения компонентов',
  'Strategic component placement',
  'Plasarea strategică a componentelor',
  'Стратегическое размещение компонентов',
  '90 min',
  'hands-on',
  4
FROM course_curriculum cc WHERE cc.course_id = 'pcb-design-fundamentals' AND cc.order_index = 8;

INSERT INTO curriculum_lessons (curriculum_id, title, title_ro, title_ru, description, description_ro, description_ru, duration, type, order_index)
SELECT 
  cc.id,
  'Vias and Holes',
  'Vias și găuri',
  'Отверстия',
  'Working with vias and mounting holes',
  'Lucrul cu vias și găuri de montare',
  'Работа с переходными отверстиями',
  '60 min',
  'video',
  5
FROM course_curriculum cc WHERE cc.course_id = 'pcb-design-fundamentals' AND cc.order_index = 8;

INSERT INTO curriculum_lessons (curriculum_id, title, title_ro, title_ru, description, description_ro, description_ru, duration, type, order_index)
SELECT 
  cc.id,
  'Keep-out Areas',
  'Zone interzise',
  'Keep-out areas',
  'Defining restricted design areas',
  'Definirea zonelor de proiectare restricționate',
  'Определение запрещенных зон',
  '45 min',
  'video',
  6
FROM course_curriculum cc WHERE cc.course_id = 'pcb-design-fundamentals' AND cc.order_index = 8;

INSERT INTO curriculum_lessons (curriculum_id, title, title_ro, title_ru, description, description_ro, description_ru, duration, type, order_index)
SELECT 
  cc.id,
  'Component Placement and Priorities',
  'Plasarea componentelor și priorități',
  'Расстановка компонентов (и приоритеты)',
  'Optimizing component arrangement',
  'Optimizarea aranjamentului componentelor',
  'Оптимизация размещения компонентов',
  '90 min',
  'hands-on',
  7
FROM course_curriculum cc WHERE cc.course_id = 'pcb-design-fundamentals' AND cc.order_index = 8;

INSERT INTO curriculum_lessons (curriculum_id, title, title_ro, title_ru, description, description_ro, description_ru, duration, type, order_index)
SELECT 
  cc.id,
  'Traces',
  'Trasee',
  'Проводники',
  'PCB trace routing techniques',
  'Tehnici de rutare a traseelor PCB',
  'Техники трассировки проводников',
  '120 min',
  'hands-on',
  8
FROM course_curriculum cc WHERE cc.course_id = 'pcb-design-fundamentals' AND cc.order_index = 8;

INSERT INTO curriculum_lessons (curriculum_id, title, title_ro, title_ru, description, description_ro, description_ru, duration, type, order_index)
SELECT 
  cc.id,
  'Practical Routing Tips',
  'Sfaturi practice de rutare',
  'Практические советы по трассировке',
  'Best practices for PCB routing',
  'Cele mai bune practici pentru rutarea PCB',
  'Лучшие практики трассировки печатных плат',
  '60 min',
  'video',
  9
FROM course_curriculum cc WHERE cc.course_id = 'pcb-design-fundamentals' AND cc.order_index = 8;

INSERT INTO curriculum_lessons (curriculum_id, title, title_ro, title_ru, description, description_ro, description_ru, duration, type, order_index)
SELECT 
  cc.id,
  'Copper Pours',
  'Poligoane de cupru',
  'Полигоны',
  'Creating and managing copper pours',
  'Crearea și gestionarea poligoanelor de cupru',
  'Создание и управление полигонами',
  '60 min',
  'hands-on',
  10
FROM course_curriculum cc WHERE cc.course_id = 'pcb-design-fundamentals' AND cc.order_index = 8;

INSERT INTO curriculum_lessons (curriculum_id, title, title_ro, title_ru, description, description_ro, description_ru, duration, type, order_index)
SELECT 
  cc.id,
  'Test Points',
  'Puncte de testare',
  'Тестовые точки',
  'Adding test points for debugging',
  'Adăugarea punctelor de testare pentru depanare',
  'Добавление тестовых точек для отладки',
  '45 min',
  'video',
  11
FROM course_curriculum cc WHERE cc.course_id = 'pcb-design-fundamentals' AND cc.order_index = 8;

INSERT INTO curriculum_lessons (curriculum_id, title, title_ro, title_ru, description, description_ro, description_ru, duration, type, order_index)
SELECT 
  cc.id,
  'Silkscreen',
  'Serigrafie',
  'Шелкография',
  'Designing silkscreen labels and markings',
  'Proiectarea etichetelor și marcajelor serigrafice',
  'Проектирование маркировки и надписей',
  '45 min',
  'video',
  12
FROM course_curriculum cc WHERE cc.course_id = 'pcb-design-fundamentals' AND cc.order_index = 8;

INSERT INTO curriculum_lessons (curriculum_id, title, title_ro, title_ru, description, description_ro, description_ru, duration, type, order_index)
SELECT 
  cc.id,
  'Design Rule Check',
  'Verificarea regulilor de proiectare',
  'Проверка правил',
  'Running DRC and fixing errors',
  'Rularea DRC și remedierea erorilor',
  'Запуск проверки и исправление ошибок',
  '60 min',
  'hands-on',
  13
FROM course_curriculum cc WHERE cc.course_id = 'pcb-design-fundamentals' AND cc.order_index = 8;

-- Module 9: Preparing for Production
INSERT INTO course_curriculum (id, course_id, title, title_ro, title_ru, order_index) VALUES
(gen_random_uuid(), 'pcb-design-fundamentals', 'Preparing for Production', 'Pregătirea pentru producție', 'Подготовка платы к производству', 9);

INSERT INTO curriculum_lessons (curriculum_id, title, title_ro, title_ru, description, description_ro, description_ru, duration, type, order_index)
SELECT 
  cc.id,
  'Creating Gerber Files',
  'Crearea fișierelor Gerber',
  'Создание гербер файлов',
  'Generating manufacturing files',
  'Generarea fișierelor de fabricație',
  'Создание файлов для производства',
  '60 min',
  'hands-on',
  1
FROM course_curriculum cc WHERE cc.course_id = 'pcb-design-fundamentals' AND cc.order_index = 9;

INSERT INTO curriculum_lessons (curriculum_id, title, title_ro, title_ru, description, description_ro, description_ru, duration, type, order_index)
SELECT 
  cc.id,
  'Placing Orders',
  'Plasarea comenzilor',
  'Размещение заказа',
  'Ordering PCBs from manufacturers',
  'Comandarea PCB-urilor de la producători',
  'Заказ печатных плат у производителей',
  '45 min',
  'video',
  2
FROM course_curriculum cc WHERE cc.course_id = 'pcb-design-fundamentals' AND cc.order_index = 9;

INSERT INTO curriculum_lessons (curriculum_id, title, title_ro, title_ru, description, description_ro, description_ru, duration, type, order_index)
SELECT 
  cc.id,
  'Documentation',
  'Documentație',
  'Документация',
  'Creating technical documentation',
  'Crearea documentației tehnice',
  'Создание технической документации',
  '60 min',
  'video',
  3
FROM course_curriculum cc WHERE cc.course_id = 'pcb-design-fundamentals' AND cc.order_index = 9;

INSERT INTO curriculum_lessons (curriculum_id, title, title_ro, title_ru, description, description_ro, description_ru, duration, type, order_index)
SELECT 
  cc.id,
  'Component Ordering',
  'Comandarea componentelor',
  'Заказ компонентов',
  'Sourcing and ordering components',
  'Sursa și comandarea componentelor',
  'Поиск и заказ компонентов',
  '45 min',
  'video',
  4
FROM course_curriculum cc WHERE cc.course_id = 'pcb-design-fundamentals' AND cc.order_index = 9;

-- Module 10: Additional Design Topics
INSERT INTO course_curriculum (id, course_id, title, title_ro, title_ru, order_index) VALUES
(gen_random_uuid(), 'pcb-design-fundamentals', 'Additional Design Topics', 'Subiecte suplimentare de proiectare', 'Дополнительные вопросы проектирования', 10);

INSERT INTO curriculum_lessons (curriculum_id, title, title_ro, title_ru, description, description_ro, description_ru, duration, type, order_index)
SELECT 
  cc.id,
  'High-Speed Signals',
  'Semnale de mare viteză',
  'Высокоскоростные сигналы',
  'Signal integrity for high-speed designs',
  'Integritatea semnalului pentru proiectări de mare viteză',
  'Целостность сигнала для высокоскоростных проектов',
  '90 min',
  'video',
  1
FROM course_curriculum cc WHERE cc.course_id = 'pcb-design-fundamentals' AND cc.order_index = 10;

INSERT INTO curriculum_lessons (curriculum_id, title, title_ro, title_ru, description, description_ro, description_ru, duration, type, order_index)
SELECT 
  cc.id,
  'Thermal Management',
  'Gestionarea termică',
  'Рассеивание тепла',
  'Heat dissipation techniques',
  'Tehnici de disipare a căldurii',
  'Техники рассеивания тепла',
  '90 min',
  'video',
  2
FROM course_curriculum cc WHERE cc.course_id = 'pcb-design-fundamentals' AND cc.order_index = 10;

INSERT INTO curriculum_lessons (curriculum_id, title, title_ro, title_ru, description, description_ro, description_ru, duration, type, order_index)
SELECT 
  cc.id,
  'High Voltage Design',
  'Proiectarea pentru tensiune înaltă',
  'Высокие напряжения',
  'Safety considerations for high voltage',
  'Considerații de siguranță pentru tensiune înaltă',
  'Соображения безопасности для высоких напряжений',
  '90 min',
  'video',
  3
FROM course_curriculum cc WHERE cc.course_id = 'pcb-design-fundamentals' AND cc.order_index = 10;