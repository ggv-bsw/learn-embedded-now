-- Add Romanian translations for Python course
UPDATE public.courses
SET 
  title_ro = 'Python pentru Începători – Nivel Junior',
  subtitle_ro = '20 de lecții pe parcursul a 10 săptămâni: fundamente solide Python, gestionarea datelor, OOP, testare și mini-proiecte (CLI și Flask) cu gestionarea pachetelor prin uv',
  description_ro = 'Un curriculum practic pentru începători. Vei învăța concepte fundamentale de programare în Python, structuri de date, OOP, lucru cu fișiere și date (JSON/CSV), utilizarea bibliotecilor externe cu uv, testare unitară și cele mai bune practici. Până la final, vei construi două mini-proiecte: o aplicație CLI To-Do și o mică aplicație web Flask.',
  category_ro = 'Python'
WHERE id = 'python-junior-beginner';

-- Add Russian translations for Python course
UPDATE public.courses
SET 
  title_ru = 'Python для начинающих – Младший уровень',
  subtitle_ru = '20 уроков за 10 недель: прочная основа Python, работа с данными, ООП, тестирование и мини-проекты (CLI и Flask) с управлением пакетами через uv',
  description_ru = 'Практический курс для начинающих. Вы изучите основные концепции программирования на Python, структуры данных, ООП, работу с файлами и данными (JSON/CSV), использование внешних библиотек с uv, модульное тестирование и лучшие практики. К концу курса вы создадите два мини-проекта: CLI-приложение To-Do и небольшое веб-приложение Flask.',
  category_ru = 'Python'
WHERE id = 'python-junior-beginner';

-- Add Romanian translations for C++ course
UPDATE public.courses
SET 
  title_ro = 'Curs C++: De la Începător BSW la Avansat BSW',
  subtitle_ro = 'Învață C++ modern pas cu pas — de la sintaxă și memorie la STL, concurență, modele și CMake de producție',
  description_ro = 'O călătorie de 25 de lecții care te duce de la zero la C++ avansat la BSW. Vei construi încredere cu caracteristicile fundamentale ale limbajului, vei stăpâni memoria și STL, vei scrie programe multi-fișier și multi-thread și vei structura proiecte reale cu CMake modern. Fiecare lecție îmbină teoria cu laboratoare practice și provocări progresive.',
  category_ro = 'C++'
WHERE id = 'cpp-bsw-beginner-to-advanced';

-- Add Russian translations for C++ course
UPDATE public.courses
SET 
  title_ru = 'Курс C++: От начинающего BSW до продвинутого BSW',
  subtitle_ru = 'Изучайте современный C++ шаг за шагом — от синтаксиса и памяти до STL, многопоточности, паттернов и продуктового CMake',
  description_ru = 'Путешествие из 25 уроков, которое проведет вас от нуля до продвинутого уровня C++ в BSW. Вы обретете уверенность в основных возможностях языка, освоите память и STL, напишете многофайловые и многопоточные программы и структурируете реальные проекты с современным CMake. Каждый урок сочетает теорию с практическими лабораторными работами и прогрессивными задачами.',
  category_ru = 'C++'
WHERE id = 'cpp-bsw-beginner-to-advanced';

-- Add Romanian translations for PCB Design course
UPDATE public.courses
SET 
  title_ro = 'Fundamente de Design PCB',
  subtitle_ro = 'Stăpânește elementele esențiale ale designului de plăci de circuite imprimate, de la captura schemei până la fabricarea finală',
  description_ro = 'Învață să proiectezi PCB-uri profesionale folosind instrumente standard din industrie. Acest curs cuprinzător acoperă designul de scheme, selecția componentelor, layoutul PCB, integritatea semnalului, distribuția puterii și pregătirea pentru fabricație. Construiește proiecte din lumea reală, de la plăci simple la design-uri complexe multi-strat.',
  category_ro = 'Hardware'
WHERE id = 'pcb-design-fundamentals';

-- Add Russian translations for PCB Design course
UPDATE public.courses
SET 
  title_ru = 'Основы проектирования печатных плат',
  subtitle_ru = 'Освойте основы проектирования печатных плат от захвата схемы до окончательного производства',
  description_ru = 'Научитесь проектировать профессиональные печатные платы с использованием стандартных инструментов индустрии. Этот комплексный курс охватывает проектирование схем, выбор компонентов, компоновку PCB, целостность сигнала, распределение питания и подготовку к производству. Создавайте реальные проекты от простых плат до сложных многослойных конструкций.',
  category_ru = 'Аппаратное обеспечение'
WHERE id = 'pcb-design-fundamentals';

-- Add Romanian translations for Software Testing course
UPDATE public.courses
SET 
  title_ro = 'Testare Software și QA Automotive',
  subtitle_ro = 'Metodologii complete de testare pentru software automotive și sisteme embedded cu standarde industriale',
  description_ro = 'Stăpânește principiile testării software specific pentru aplicații automotive. Învață automatizarea testelor, siguranța funcțională ISO 26262, testarea AUTOSAR, testarea HIL/SIL și procesele de asigurare a calității specifice automotive. Dobândește experiență practică cu instrumente și framework-uri de testare standard din industrie.',
  category_ro = 'Testare'
WHERE id = 'software-testing-automotive-qa';

-- Add Russian translations for Software Testing course
UPDATE public.courses
SET 
  title_ru = 'Тестирование ПО и автомобильное обеспечение качества',
  subtitle_ru = 'Комплексные методологии тестирования для автомобильного программного обеспечения и встроенных систем с отраслевыми стандартами',
  description_ru = 'Освойте принципы тестирования программного обеспечения специально для автомобильных приложений. Изучите автоматизацию тестирования, функциональную безопасность ISO 26262, тестирование AUTOSAR, тестирование HIL/SIL и процессы обеспечения качества, специфичные для автомобильной промышленности. Получите практический опыт работы со стандартными инструментами и фреймворками для тестирования.',
  category_ru = 'Тестирование'
WHERE id = 'software-testing-automotive-qa';

-- Update instructor translations
UPDATE public.instructors
SET 
  title_ro = 'Lead Data Engineer',
  bio_ro = 'Expert în ingineria datelor cu o fundație solidă în învățare automată și sisteme distribuite. A construit pipeline-uri de date scalabile pentru multiple companii Fortune 500. Se bucură să transforme concepte complexe de date în experiențe de învățare practice.'
WHERE course_id = 'python-junior-beginner';

UPDATE public.instructors
SET 
  title_ru = 'Ведущий инженер по работе с данными',
  bio_ru = 'Эксперт по инженерии данных с сильным опытом в машинном обучении и распределенных системах. Создал масштабируемые конвейеры данных для нескольких компаний Fortune 500. Любит превращать сложные концепции данных в практический опыт обучения.'
WHERE course_id = 'python-junior-beginner';

UPDATE public.instructors
SET 
  title_ro = 'Senior Software Engineer',
  bio_ro = 'Specialist Linux și IoT cu experiență profundă în programarea rețelelor și sistemele Linux embedded. A contribuit la numeroase proiecte open-source și se bucură să mentorezze dezvoltatori în programarea la nivel de sistem.'
WHERE course_id = 'cpp-bsw-beginner-to-advanced';

UPDATE public.instructors
SET 
  title_ru = 'Старший инженер-программист',
  bio_ru = 'Специалист по Linux и IoT с глубокими знаниями в области сетевого программирования и встроенных систем Linux. Внес вклад во множество проектов с открытым исходным кодом и любит наставлять разработчиков в системном программировании.'
WHERE course_id = 'cpp-bsw-beginner-to-advanced';

UPDATE public.instructors
SET 
  title_ro = 'Hardware Design Engineer',
  bio_ro = 'Specialist în designul hardware cu experiență vastă în designul PCB pentru electronice de consum și aplicații industriale. A proiectat peste 200 de produse de succes și se bucură să predea tehnici practice de design PCB.'
WHERE course_id = 'pcb-design-fundamentals';

UPDATE public.instructors
SET 
  title_ru = 'Инженер по проектированию аппаратного обеспечения',
  bio_ru = 'Специалист по проектированию аппаратного обеспечения с обширным опытом проектирования печатных плат для потребительской электроники и промышленных приложений. Спроектировал более 200 успешных продуктов и любит преподавать практические методы проектирования печатных плат.'
WHERE course_id = 'pcb-design-fundamentals';

UPDATE public.instructors
SET 
  title_ro = 'Automotive QA Lead',
  bio_ro = 'Expert în testarea software automotive cu experiență vastă la producători auto de top. Specializat în siguranță funcțională, AUTOSAR și framework-uri de testare automatizată. A condus echipe QA pentru multiple programe de vehicule de producție.'
WHERE course_id = 'software-testing-automotive-qa';

UPDATE public.instructors
SET 
  title_ru = 'Руководитель QA автомобильной промышленности',
  bio_ru = 'Эксперт по тестированию автомобильного программного обеспечения с обширным опытом работы в ведущих автопроизводителях. Специализируется на функциональной безопасности, AUTOSAR и автоматизированных фреймворках тестирования. Возглавлял команды QA для нескольких программ серийных автомобилей.'
WHERE course_id = 'software-testing-automotive-qa';