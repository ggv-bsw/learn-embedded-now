-- Python course lessons (continued)
UPDATE curriculum_lessons SET 
  title_ro = 'Lecția 5: Liste — indexare, slicing, metode comune; manager listă cumpărături',
  title_ru = 'Урок 5: Списки — индексирование, срезы, общие методы; менеджер списка покупок'
WHERE title = 'Lesson 5: Lists — indexing, slicing, common methods; shopping list manager';

UPDATE curriculum_lessons SET 
  title_ro = 'Lecția 6: Tuple-uri & set-uri — diferențe și cazuri de utilizare; eliminare duplicate',
  title_ru = 'Урок 6: Кортежи и множества — различия и случаи использования; удаление дубликатов'
WHERE title = 'Lesson 6: Tuples & sets — differences and use cases; remove duplicates';

UPDATE curriculum_lessons SET 
  title_ro = 'Lecția 7: Dicționare — iterare chei/valori, metode utile; catalog note studenți',
  title_ru = 'Урок 7: Словари — итерация по ключам/значениям, полезные методы; журнал оценок студентов'
WHERE title = 'Lesson 7: Dictionaries — iterating keys/values, useful methods; student gradebook';

UPDATE curriculum_lessons SET 
  title_ro = 'Lecția 8: Funcții — def, parametri, return, scope; utilități matematice',
  title_ru = 'Урок 8: Функции — def, параметры, return, область видимости; математические утилиты'
WHERE title = 'Lesson 8: Functions — def, parameters, return, scope; math utilities';

UPDATE curriculum_lessons SET 
  title_ro = 'Lecția 9: Module & pachete, import-uri; biblioteci standard (math, random, datetime); generator parole aleatorii',
  title_ru = 'Урок 9: Модули и пакеты, импорты; стандартные библиотеки (math, random, datetime); генератор случайных паролей'
WHERE title = 'Lesson 9: Modules & packages, imports; standard libraries (math, random, datetime); random password generator';

UPDATE curriculum_lessons SET 
  title_ro = 'Lecția 10: Gestionare erori cu try/except/finally; input numeric robust',
  title_ru = 'Урок 10: Обработка ошибок с try/except/finally; надежный числовой ввод'
WHERE title = 'Lesson 10: Error handling with try/except/finally; robust numeric input';

UPDATE curriculum_lessons SET 
  title_ro = 'Lecția 11: Intro OOP — clase, obiecte, atribute, metode; clasă Mașină start/stop',
  title_ru = 'Урок 11: Введение в ООП — классы, объекты, атрибуты, методы; класс Автомобиль start/stop'
WHERE title = 'Lesson 11: OOP intro — classes, objects, attributes, methods; Car class start/stop';

UPDATE curriculum_lessons SET 
  title_ro = 'Lecția 12: Constructori, moștenire, polimorfism, __str__; ierarhie animale',
  title_ru = 'Урок 12: Конструкторы, наследование, полиморфизм, __str__; иерархия животных'
WHERE title = 'Lesson 12: Constructors, inheritance, polymorphism, __str__; animal hierarchy';

UPDATE curriculum_lessons SET 
  title_ro = 'Lecția 13: Citire & scriere fișiere text; aplicație jurnal care salvează note',
  title_ru = 'Урок 13: Чтение и запись текстовых файлов; приложение-дневник для сохранения заметок'
WHERE title = 'Lesson 13: Reading & writing text files; journal app that saves notes';

UPDATE curriculum_lessons SET 
  title_ro = 'Lecția 14: JSON & CSV — manipulare date; raport CSV produse',
  title_ru = 'Урок 14: JSON и CSV — манипуляция данными; CSV-отчет о продуктах'
WHERE title = 'Lesson 14: JSON & CSV — data manipulation; product CSV report';

UPDATE curriculum_lessons SET 
  title_ro = 'Lecția 15: uv — configurare & utilizare (medii virtuale, instalare pachete, fixare versiuni); mediu izolat + requests',
  title_ru = 'Урок 15: uv — настройка и использование (виртуальные среды, установка пакетов, фиксация версий); изолированная среда + requests'
WHERE title = 'Lesson 15: uv — setup & usage (virtual envs, install packages, version pinning); isolated env + requests';

UPDATE curriculum_lessons SET 
  title_ro = 'Lecția 16: Intro în pandas pentru date tabulare (bazele); analiză simplă CSV (instalat via uv)',
  title_ru = 'Урок 16: Введение в pandas для табличных данных (основы); простой анализ CSV (установлен через uv)'
WHERE title = 'Lesson 16: Intro to pandas for tabular data (basics); simple CSV analysis (installed via uv)';

UPDATE curriculum_lessons SET 
  title_ro = 'Lecția 17: Testare unitară (unittest/pytest) și principii de debugging; teste pentru funcții matematice',
  title_ru = 'Урок 17: Модульное тестирование (unittest/pytest) и принципы отладки; тесты для математических функций'
WHERE title = 'Lesson 17: Unit testing (unittest/pytest) and debugging principles; tests for math functions';

UPDATE curriculum_lessons SET 
  title_ro = 'Lecția 18: Ghid de stil PEP 8, docstrings, Git & GitHub (intro); creează un repository mic',
  title_ru = 'Урок 18: Руководство по стилю PEP 8, docstrings, Git и GitHub (введение); создание небольшого репозитория'
WHERE title = 'Lesson 18: PEP 8 style guide, docstrings, Git & GitHub (intro); create a small repo';

UPDATE curriculum_lessons SET 
  title_ro = 'Lecția 19: Proiect 1 — Lista de sarcini cu fișiere (aplicație CLI)',
  title_ru = 'Урок 19: Проект 1 — Список задач с файлами (CLI-приложение)'
WHERE title = 'Lesson 19: Project 1 — To-Do List with files (CLI app)';

UPDATE curriculum_lessons SET 
  title_ro = 'Lecția 20: Proiect 2 — Aplicație web Flask mică (CRUD pentru note) — instalat & rulat cu uv',
  title_ru = 'Урок 20: Проект 2 — Небольшое веб-приложение Flask (CRUD для заметок) — установлено и запущено с uv'
WHERE title = 'Lesson 20: Project 2 — Small Flask web app (CRUD for notes) — installed & run with uv';

-- Software Testing course lessons
UPDATE curriculum_lessons SET 
  title_ro = 'Planificarea testării și testarea bazată pe cerințe',
  title_ru = 'Планирование тестирования и тестирование на основе требований'
WHERE title = 'Test planning and requirement-based testing';

UPDATE curriculum_lessons SET 
  title_ro = 'Introducere în siguranța funcțională ISO 26262',
  title_ru = 'Введение в функциональную безопасность ISO 26262'
WHERE title = 'Introduction to ISO 26262 functional safety';

UPDATE curriculum_lessons SET 
  title_ro = 'Arhitectura software automotive și modelul V',
  title_ru = 'Архитектура автомобильного ПО и V-модель'
WHERE title = 'Automotive software architecture and V-model';

UPDATE curriculum_lessons SET 
  title_ro = 'Lab: Crearea planurilor de testare pentru un modul ECU',
  title_ru = 'Лаб: Создание планов тестирования для модуля ECU'
WHERE title = 'Lab: Create test plans for an ECU module';