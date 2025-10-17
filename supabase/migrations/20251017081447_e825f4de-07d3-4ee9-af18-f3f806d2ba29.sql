-- Restructure PCB Design Fundamentals to 10 weeks with 2 lessons per week

-- Delete existing curriculum
DELETE FROM curriculum_lessons WHERE curriculum_id IN (
  SELECT id FROM course_curriculum WHERE course_id = 'pcb-design-fundamentals'
);
DELETE FROM course_curriculum WHERE course_id = 'pcb-design-fundamentals';

-- Week 1: Introduction to PCB Design
INSERT INTO course_curriculum (id, course_id, title, title_ro, title_ru, order_index) VALUES
(gen_random_uuid(), 'pcb-design-fundamentals', 'Week 1: Introduction to PCB Design', 'Săptămâna 1: Introducere în proiectarea PCB', 'Неделя 1: Введение в проектирование печатных плат', 1);

INSERT INTO curriculum_lessons (curriculum_id, title, title_ro, title_ru, description, description_ro, description_ru, duration, type, order_index)
SELECT 
  cc.id,
  'Electronics Development and PCB Fundamentals',
  'Dezvoltarea electronicii și fundamentele PCB',
  'О разработке электроники и основы печатных плат',
  'Understanding PCB role in electronics and practical development tips',
  'Înțelegerea rolului PCB în electronică și sfaturi practice',
  'Понимание роли печатных плат и практические советы',
  '2 hours',
  'video',
  1
FROM course_curriculum cc WHERE cc.course_id = 'pcb-design-fundamentals' AND cc.order_index = 1;

INSERT INTO curriculum_lessons (curriculum_id, title, title_ro, title_ru, description, description_ro, description_ru, duration, type, order_index)
SELECT 
  cc.id,
  'PCB Types, Elements and Materials',
  'Tipuri de PCB, elemente și materiale',
  'Типы печатных плат, элементы и материалы',
  'Different types of PCBs, basic elements, and manufacturing materials',
  'Diferite tipuri de PCB, elemente de bază și materiale de fabricație',
  'Различные типы печатных плат, базовые элементы и материалы',
  '2 hours',
  'video',
  2
FROM course_curriculum cc WHERE cc.course_id = 'pcb-design-fundamentals' AND cc.order_index = 1;

-- Week 2: Components and Connections
INSERT INTO course_curriculum (id, course_id, title, title_ro, title_ru, order_index) VALUES
(gen_random_uuid(), 'pcb-design-fundamentals', 'Week 2: Components and Connections', 'Săptămâna 2: Componente și conexiuni', 'Неделя 2: Компоненты и соединения', 2);

INSERT INTO curriculum_lessons (curriculum_id, title, title_ro, title_ru, description, description_ro, description_ru, duration, type, order_index)
SELECT 
  cc.id,
  'Electronic Components Overview',
  'Prezentarea componentelor electronice',
  'Обзор электронных компонентов',
  'Component types, common packages, and how to select them',
  'Tipuri de componente, pachete comune și cum să le selectați',
  'Типы компонентов, корпуса и как их выбирать',
  '2 hours',
  'video',
  1
FROM course_curriculum cc WHERE cc.course_id = 'pcb-design-fundamentals' AND cc.order_index = 2;

INSERT INTO curriculum_lessons (curriculum_id, title, title_ro, title_ru, description, description_ro, description_ru, duration, type, order_index)
SELECT 
  cc.id,
  'Ideal vs Real Connections',
  'Conexiuni ideale vs reale',
  'Идеальные и реальные соединения',
  'Understanding practical connections and component equivalent circuits',
  'Înțelegerea conexiunilor practice și circuitelor echivalente',
  'Понимание практических соединений и эквивалентных схем',
  '2 hours',
  'video',
  2
FROM course_curriculum cc WHERE cc.course_id = 'pcb-design-fundamentals' AND cc.order_index = 2;

-- Week 3: Introduction to KiCAD
INSERT INTO course_curriculum (id, course_id, title, title_ro, title_ru, order_index) VALUES
(gen_random_uuid(), 'pcb-design-fundamentals', 'Week 3: Introduction to KiCAD', 'Săptămâna 3: Introducere în KiCAD', 'Неделя 3: Введение в KiCAD', 3);

INSERT INTO curriculum_lessons (curriculum_id, title, title_ro, title_ru, description, description_ro, description_ru, duration, type, order_index)
SELECT 
  cc.id,
  'ECAD Concepts and KiCAD Setup',
  'Concepte ECAD și configurarea KiCAD',
  'Концепции ECAD и настройка KiCAD',
  'Introduction to ECAD, KiCAD architecture and workflow',
  'Introducere în ECAD, arhitectura și fluxul de lucru KiCAD',
  'Введение в ECAD, архитектура и рабочий процесс KiCAD',
  '2 hours',
  'hands-on',
  1
FROM course_curriculum cc WHERE cc.course_id = 'pcb-design-fundamentals' AND cc.order_index = 3;

INSERT INTO curriculum_lessons (curriculum_id, title, title_ro, title_ru, description, description_ro, description_ru, duration, type, order_index)
SELECT 
  cc.id,
  'Working with Libraries',
  'Lucrul cu biblioteci',
  'Работа с библиотеками',
  'Installing, connecting, and managing component libraries',
  'Instalarea, conectarea și gestionarea bibliotecilor de componente',
  'Установка, подключение и управление библиотеками компонентов',
  '2 hours',
  'hands-on',
  2
FROM course_curriculum cc WHERE cc.course_id = 'pcb-design-fundamentals' AND cc.order_index = 3;

-- Week 4: Creating Components
INSERT INTO course_curriculum (id, course_id, title, title_ro, title_ru, order_index) VALUES
(gen_random_uuid(), 'pcb-design-fundamentals', 'Week 4: Creating Components', 'Săptămâna 4: Crearea componentelor', 'Неделя 4: Создание компонентов', 4);

INSERT INTO curriculum_lessons (curriculum_id, title, title_ro, title_ru, description, description_ro, description_ru, duration, type, order_index)
SELECT 
  cc.id,
  'Creating Schematic Symbols',
  'Crearea simbolurilor schematice',
  'Создание УГО компонентов',
  'Designing schematic symbols (УГО) for components',
  'Proiectarea simbolurilor schematice pentru componente',
  'Проектирование условных графических обозначений',
  '2 hours',
  'hands-on',
  1
FROM course_curriculum cc WHERE cc.course_id = 'pcb-design-fundamentals' AND cc.order_index = 4;

INSERT INTO curriculum_lessons (curriculum_id, title, title_ro, title_ru, description, description_ro, description_ru, duration, type, order_index)
SELECT 
  cc.id,
  'Creating Component Footprints',
  'Crearea amprentelor componentelor',
  'Создание посадочных мест',
  'Designing PCB footprints for components',
  'Proiectarea amprentelor PCB pentru componente',
  'Проектирование посадочных мест для компонентов',
  '2 hours',
  'hands-on',
  2
FROM course_curriculum cc WHERE cc.course_id = 'pcb-design-fundamentals' AND cc.order_index = 4;

-- Week 5: Schematic Design
INSERT INTO course_curriculum (id, course_id, title, title_ro, title_ru, order_index) VALUES
(gen_random_uuid(), 'pcb-design-fundamentals', 'Week 5: Schematic Design', 'Săptămâna 5: Proiectarea schemelor', 'Неделя 5: Создание схем', 5);

INSERT INTO curriculum_lessons (curriculum_id, title, title_ro, title_ru, description, description_ro, description_ru, duration, type, order_index)
SELECT 
  cc.id,
  'Creating Schematics in KiCAD',
  'Crearea schemelor în KiCAD',
  'Создание принципиальных схем в KiCAD',
  'Complete schematic design workflow in KiCAD',
  'Flux complet de proiectare schematică în KiCAD',
  'Полный процесс создания принципиальных схем',
  '2 hours',
  'hands-on',
  1
FROM course_curriculum cc WHERE cc.course_id = 'pcb-design-fundamentals' AND cc.order_index = 5;

INSERT INTO curriculum_lessons (curriculum_id, title, title_ro, title_ru, description, description_ro, description_ru, duration, type, order_index)
SELECT 
  cc.id,
  'From Schematic to PCB Layout',
  'De la schemă la aspectul PCB',
  'От схемы к разводке печатной платы',
  'Starting PCB layout from schematic and features overview',
  'Începerea aspectului PCB din schemă și prezentarea caracteristicilor',
  'Начало разводки печатной платы и обзор возможностей',
  '2 hours',
  'hands-on',
  2
FROM course_curriculum cc WHERE cc.course_id = 'pcb-design-fundamentals' AND cc.order_index = 5;

-- Week 6: PCB Layout Basics
INSERT INTO course_curriculum (id, course_id, title, title_ro, title_ru, order_index) VALUES
(gen_random_uuid(), 'pcb-design-fundamentals', 'Week 6: PCB Layout Basics', 'Săptămâna 6: Bazele aspectului PCB', 'Неделя 6: Основы разводки печатных плат', 6);

INSERT INTO curriculum_lessons (curriculum_id, title, title_ro, title_ru, description, description_ro, description_ru, duration, type, order_index)
SELECT 
  cc.id,
  'Board Setup and Design Rules',
  'Configurarea plăcii și regulile de proiectare',
  'Настройка платы и правила проектирования',
  'Defining dimensions, stack-up, and design rule constraints',
  'Definirea dimensiunilor, stratificării și constrângerilor regulilor',
  'Определение размеров, стека слоёв и правил проектирования',
  '2 hours',
  'video',
  1
FROM course_curriculum cc WHERE cc.course_id = 'pcb-design-fundamentals' AND cc.order_index = 6;

INSERT INTO curriculum_lessons (curriculum_id, title, title_ro, title_ru, description, description_ro, description_ru, duration, type, order_index)
SELECT 
  cc.id,
  'Component Placement Strategy',
  'Strategia de plasare a componentelor',
  'Стратегия размещения компонентов',
  'Planning and optimizing component placement with priorities',
  'Planificarea și optimizarea plasării componentelor cu priorități',
  'Планирование и оптимизация размещения компонентов',
  '2 hours',
  'hands-on',
  2
FROM course_curriculum cc WHERE cc.course_id = 'pcb-design-fundamentals' AND cc.order_index = 6;

-- Week 7: PCB Routing
INSERT INTO course_curriculum (id, course_id, title, title_ro, title_ru, order_index) VALUES
(gen_random_uuid(), 'pcb-design-fundamentals', 'Week 7: PCB Routing', 'Săptămâna 7: Rutarea PCB', 'Неделя 7: Трассировка печатных плат', 7);

INSERT INTO curriculum_lessons (curriculum_id, title, title_ro, title_ru, description, description_ro, description_ru, duration, type, order_index)
SELECT 
  cc.id,
  'Trace Routing Techniques',
  'Tehnici de rutare a traseelor',
  'Техники трассировки проводников',
  'PCB trace routing, vias, holes, and keep-out areas',
  'Rutarea traseelor PCB, vias, găuri și zone interzise',
  'Трассировка проводников, переходные отверстия и запрещенные зоны',
  '2 hours',
  'hands-on',
  1
FROM course_curriculum cc WHERE cc.course_id = 'pcb-design-fundamentals' AND cc.order_index = 7;

INSERT INTO curriculum_lessons (curriculum_id, title, title_ro, title_ru, description, description_ro, description_ru, duration, type, order_index)
SELECT 
  cc.id,
  'Copper Pours and Best Practices',
  'Poligoane de cupru și cele mai bune practici',
  'Полигоны и лучшие практики',
  'Creating copper pours and practical routing tips',
  'Crearea poligoanelor de cupru și sfaturi practice de rutare',
  'Создание полигонов и практические советы по трассировке',
  '2 hours',
  'hands-on',
  2
FROM course_curriculum cc WHERE cc.course_id = 'pcb-design-fundamentals' AND cc.order_index = 7;

-- Week 8: Finishing Touches
INSERT INTO course_curriculum (id, course_id, title, title_ro, title_ru, order_index) VALUES
(gen_random_uuid(), 'pcb-design-fundamentals', 'Week 8: Finishing Touches', 'Săptămâna 8: Finisaje', 'Неделя 8: Завершающие штрихи', 8);

INSERT INTO curriculum_lessons (curriculum_id, title, title_ro, title_ru, description, description_ro, description_ru, duration, type, order_index)
SELECT 
  cc.id,
  'Test Points and Silkscreen',
  'Puncte de testare și serigrafie',
  'Тестовые точки и шелкография',
  'Adding test points and designing silkscreen markings',
  'Adăugarea punctelor de testare și proiectarea marcajelor serigrafice',
  'Добавление тестовых точек и проектирование маркировки',
  '2 hours',
  'video',
  1
FROM course_curriculum cc WHERE cc.course_id = 'pcb-design-fundamentals' AND cc.order_index = 8;

INSERT INTO curriculum_lessons (curriculum_id, title, title_ro, title_ru, description, description_ro, description_ru, duration, type, order_index)
SELECT 
  cc.id,
  'Design Rule Check and Validation',
  'Verificarea regulilor și validare',
  'Проверка правил и валидация',
  'Running DRC, fixing errors, and final validation',
  'Rularea DRC, remedierea erorilor și validarea finală',
  'Запуск проверки, исправление ошибок и финальная валидация',
  '2 hours',
  'hands-on',
  2
FROM course_curriculum cc WHERE cc.course_id = 'pcb-design-fundamentals' AND cc.order_index = 8;

-- Week 9: Manufacturing Preparation
INSERT INTO course_curriculum (id, course_id, title, title_ro, title_ru, order_index) VALUES
(gen_random_uuid(), 'pcb-design-fundamentals', 'Week 9: Manufacturing Preparation', 'Săptămâna 9: Pregătirea pentru producție', 'Неделя 9: Подготовка к производству', 9);

INSERT INTO curriculum_lessons (curriculum_id, title, title_ro, title_ru, description, description_ro, description_ru, duration, type, order_index)
SELECT 
  cc.id,
  'Generating Manufacturing Files',
  'Generarea fișierelor de fabricație',
  'Создание производственных файлов',
  'Creating Gerber files and placing orders with manufacturers',
  'Crearea fișierelor Gerber și plasarea comenzilor la producători',
  'Создание Gerber файлов и размещение заказов',
  '2 hours',
  'hands-on',
  1
FROM course_curriculum cc WHERE cc.course_id = 'pcb-design-fundamentals' AND cc.order_index = 9;

INSERT INTO curriculum_lessons (curriculum_id, title, title_ro, title_ru, description, description_ro, description_ru, duration, type, order_index)
SELECT 
  cc.id,
  'Documentation and Component Ordering',
  'Documentație și comandarea componentelor',
  'Документация и заказ компонентов',
  'Creating technical documentation and sourcing components',
  'Crearea documentației tehnice și sursa componentelor',
  'Создание технической документации и поиск компонентов',
  '2 hours',
  'video',
  2
FROM course_curriculum cc WHERE cc.course_id = 'pcb-design-fundamentals' AND cc.order_index = 9;

-- Week 10: Advanced Topics
INSERT INTO course_curriculum (id, course_id, title, title_ro, title_ru, order_index) VALUES
(gen_random_uuid(), 'pcb-design-fundamentals', 'Week 10: Advanced Topics', 'Săptămâna 10: Subiecte avansate', 'Неделя 10: Продвинутые темы', 10);

INSERT INTO curriculum_lessons (curriculum_id, title, title_ro, title_ru, description, description_ro, description_ru, duration, type, order_index)
SELECT 
  cc.id,
  'High-Speed Signals and Thermal Management',
  'Semnale de mare viteză și gestionarea termică',
  'Высокоскоростные сигналы и тепловой менеджмент',
  'Signal integrity for high-speed designs and heat dissipation',
  'Integritatea semnalului pentru proiectări rapide și disiparea căldurii',
  'Целостность сигнала и рассеивание тепла',
  '2 hours',
  'video',
  1
FROM course_curriculum cc WHERE cc.course_id = 'pcb-design-fundamentals' AND cc.order_index = 10;

INSERT INTO curriculum_lessons (curriculum_id, title, title_ro, title_ru, description, description_ro, description_ru, duration, type, order_index)
SELECT 
  cc.id,
  'High Voltage Design Considerations',
  'Considerații pentru proiectarea tensiunii înalte',
  'Проектирование для высоких напряжений',
  'Safety considerations and best practices for high voltage PCBs',
  'Considerații de siguranță și practici pentru PCB-uri cu tensiune înaltă',
  'Соображения безопасности для высоковольтных печатных плат',
  '2 hours',
  'video',
  2
FROM course_curriculum cc WHERE cc.course_id = 'pcb-design-fundamentals' AND cc.order_index = 10;