-- Add Romanian translations for team members
UPDATE public.team_members SET
  title_ro = 'Inginer Senior Sisteme Embedded',
  role_ro = 'Inginer Software',
  specialization_ro = 'Arhitectura Sistemelor Embedded',
  expertise_ro = ARRAY['C Embedded', 'RTOS', 'Sisteme Auto'],
  location_ro = 'Chișinău, Moldova',
  bio_ro = 'Inginer senior de sisteme embedded cu experiență vastă în industriile auto și IoT. Specializat în sisteme de operare în timp real și programare la nivel scăzut. Pasionat de predarea conceptelor complexe embedded într-un mod accesibil.',
  specialties_ro = ARRAY['Sisteme Embedded', 'ECU Auto', 'RTOS', 'C/C++', 'Design Hardware']
WHERE id = 1;

UPDATE public.team_members SET
  title_ro = 'Inginer Principal Date',
  role_ro = 'Inginer Date',
  specialization_ro = 'Python, ML & Baze de Date',
  expertise_ro = ARRAY['Big Data', 'Învățare Automată', 'Platform Cloud'],
  location_ro = 'București, România',
  bio_ro = 'Expert în ingineria datelor cu experiență solidă în învățare automată și sisteme distribuite. A construit pipeline-uri de date scalabile pentru mai multe companii Fortune 500. Se bucură să transforme concepte complexe de date în experiențe de învățare practice.',
  specialties_ro = ARRAY['Apache Spark', 'Python', 'Învățare Automată', 'AWS', 'Pipeline-uri Date']
WHERE id = 2;

UPDATE public.team_members SET
  title_ro = 'Inginer Senior QA',
  role_ro = 'Asigurarea Calității',
  specialization_ro = 'Test Sisteme & PLC',
  expertise_ro = ARRAY['Automatizare Teste', 'Programare PLC', 'Validare'],
  location_ro = 'Iași, România',
  bio_ro = 'Specialist în asigurarea calității cu experiență vastă în automatizare industrială și testare de sisteme. Expert în programare PLC și framework-uri de automatizare a testelor. Dedicat predării metodologiilor robuste de testare pentru sisteme embedded.',
  specialties_ro = ARRAY['Automatizare Teste', 'Programare PLC', 'Validare Sisteme', 'Python', 'IoT Industrial']
WHERE id = 3;

UPDATE public.team_members SET
  title_ro = 'Inginer Senior Software',
  role_ro = 'Inginer Software',
  specialization_ro = 'C++ cu Linux & IoT',
  expertise_ro = ARRAY['Sisteme Linux', 'Protocoale IoT', 'Programare Rețea'],
  location_ro = 'Chișinău, Moldova',
  bio_ro = 'Specialist Linux și IoT cu expertiză profundă în programare rețea și sisteme Linux embedded. A contribuit la numeroase proiecte open-source și se bucură să mentoreze dezvoltatori în programare la nivel de sistem.',
  specialties_ro = ARRAY['Kernel Linux', 'C++', 'Protocoale IoT', 'Programare Rețea', 'Linux Embedded']
WHERE id = 4;

-- Add Russian translations for team members
UPDATE public.team_members SET
  title_ru = 'Старший инженер встраиваемых систем',
  role_ru = 'Инженер-программист',
  specialization_ru = 'Архитектура встраиваемых систем',
  expertise_ru = ARRAY['Встроенный C', 'RTOS', 'Автомобильные системы'],
  location_ru = 'Кишинёв, Молдова',
  bio_ru = 'Старший инженер встраиваемых систем с обширным опытом в автомобильной промышленности и IoT. Специализируется на операционных системах реального времени и низкоуровневом программировании. Увлечён преподаванием сложных концепций встраиваемых систем в доступной форме.',
  specialties_ru = ARRAY['Встраиваемые системы', 'Автомобильный ECU', 'RTOS', 'C/C++', 'Проектирование оборудования']
WHERE id = 1;

UPDATE public.team_members SET
  title_ru = 'Ведущий инженер данных',
  role_ru = 'Инженер данных',
  specialization_ru = 'Python, ML и базы данных',
  expertise_ru = ARRAY['Большие данные', 'Машинное обучение', 'Облачные платформы'],
  location_ru = 'Бухарест, Румыния',
  bio_ru = 'Эксперт в области инженерии данных с сильным опытом в машинном обучении и распределённых системах. Создал масштабируемые конвейеры данных для нескольких компаний из списка Fortune 500. Любит превращать сложные концепции данных в практический опыт обучения.',
  specialties_ru = ARRAY['Apache Spark', 'Python', 'Машинное обучение', 'AWS', 'Конвейеры данных']
WHERE id = 2;

UPDATE public.team_members SET
  title_ru = 'Старший инженер QA',
  role_ru = 'Обеспечение качества',
  specialization_ru = 'Тестирование систем и ПЛК',
  expertise_ru = ARRAY['Автоматизация тестирования', 'Программирование ПЛК', 'Валидация'],
  location_ru = 'Яссы, Румыния',
  bio_ru = 'Специалист по обеспечению качества с обширным опытом в промышленной автоматизации и тестировании систем. Эксперт в программировании ПЛК и фреймворках автоматизации тестирования. Посвящён обучению надёжным методологиям тестирования встраиваемых систем.',
  specialties_ru = ARRAY['Автоматизация тестирования', 'Программирование ПЛК', 'Валидация систем', 'Python', 'Промышленный IoT']
WHERE id = 3;

UPDATE public.team_members SET
  title_ru = 'Старший инженер-программист',
  role_ru = 'Инженер-программист',
  specialization_ru = 'C++ с Linux и IoT',
  expertise_ru = ARRAY['Системы Linux', 'Протоколы IoT', 'Сетевое программирование'],
  location_ru = 'Кишинёв, Молдова',
  bio_ru = 'Специалист по Linux и IoT с глубокой экспертизой в сетевом программировании и встраиваемых системах Linux. Внёс вклад в многочисленные проекты с открытым исходным кодом и любит наставлять разработчиков в системном программировании.',
  specialties_ru = ARRAY['Ядро Linux', 'C++', 'Протоколы IoT', 'Сетевое программирование', 'Встроенный Linux']
WHERE id = 4;