-- Add Romanian translations for Python course features
UPDATE public.course_features
SET feature_ro = 'Structură clară: 2 lecții/săptămână pe parcursul a 10 săptămâni'
WHERE course_id = 'python-junior-beginner' AND feature = 'Clear structure: 2 lessons/week for 10 weeks';

UPDATE public.course_features
SET feature_ro = 'Practică integrată în fiecare lecție'
WHERE course_id = 'python-junior-beginner' AND feature = 'Practice embedded in every lesson';

UPDATE public.course_features
SET feature_ro = 'Gestionarea pachetelor și mediilor cu uv'
WHERE course_id = 'python-junior-beginner' AND feature = 'Package & environment management with uv';

UPDATE public.course_features
SET feature_ro = 'Mini-proiecte CLI și web (Flask)'
WHERE course_id = 'python-junior-beginner' AND feature = 'CLI and web (Flask) mini-projects';

UPDATE public.course_features
SET feature_ro = 'Cele mai bune practici: PEP 8, docstrings, Git'
WHERE course_id = 'python-junior-beginner' AND feature = 'Best practices: PEP 8, docstrings, Git';

UPDATE public.course_features
SET feature_ro = 'Acces la comunitate și resurse'
WHERE course_id = 'python-junior-beginner' AND feature = 'Access to community and resources';

UPDATE public.course_features
SET feature_ro = 'Certificat de finalizare'
WHERE course_id = 'python-junior-beginner' AND feature = 'Certificate of completion';

-- Add Russian translations for Python course features
UPDATE public.course_features
SET feature_ru = 'Четкая структура: 2 урока в неделю в течение 10 недель'
WHERE course_id = 'python-junior-beginner' AND feature = 'Clear structure: 2 lessons/week for 10 weeks';

UPDATE public.course_features
SET feature_ru = 'Практика встроена в каждый урок'
WHERE course_id = 'python-junior-beginner' AND feature = 'Practice embedded in every lesson';

UPDATE public.course_features
SET feature_ru = 'Управление пакетами и средами с uv'
WHERE course_id = 'python-junior-beginner' AND feature = 'Package & environment management with uv';

UPDATE public.course_features
SET feature_ru = 'Мини-проекты CLI и веб (Flask)'
WHERE course_id = 'python-junior-beginner' AND feature = 'CLI and web (Flask) mini-projects';

UPDATE public.course_features
SET feature_ru = 'Лучшие практики: PEP 8, docstrings, Git'
WHERE course_id = 'python-junior-beginner' AND feature = 'Best practices: PEP 8, docstrings, Git';

UPDATE public.course_features
SET feature_ru = 'Доступ к сообществу и ресурсам'
WHERE course_id = 'python-junior-beginner' AND feature = 'Access to community and resources';

UPDATE public.course_features
SET feature_ru = 'Сертификат об окончании'
WHERE course_id = 'python-junior-beginner' AND feature = 'Certificate of completion';

-- Add Romanian translations for Python course requirements
UPDATE public.course_requirements
SET requirement_ro = 'Laptop cu conexiune la internet'
WHERE course_id = 'python-junior-beginner' AND requirement = 'Laptop with internet connection';

UPDATE public.course_requirements
SET requirement_ro = 'Dorință de a învăța prin practică'
WHERE course_id = 'python-junior-beginner' AND requirement = 'Willingness to learn by doing';

UPDATE public.course_requirements
SET requirement_ro = 'Cont GitHub (recomandat pentru proiecte)'
WHERE course_id = 'python-junior-beginner' AND requirement = 'GitHub account (recommended for projects)';

UPDATE public.course_requirements
SET requirement_ro = 'Editor de cod (VS Code sau PyCharm) — configurat în Săptămâna 1'
WHERE course_id = 'python-junior-beginner' AND requirement = 'Code editor (VS Code or PyCharm) — set up in Week 1';

-- Add Russian translations for Python course requirements
UPDATE public.course_requirements
SET requirement_ru = 'Ноутбук с подключением к интернету'
WHERE course_id = 'python-junior-beginner' AND requirement = 'Laptop with internet connection';

UPDATE public.course_requirements
SET requirement_ru = 'Готовность учиться на практике'
WHERE course_id = 'python-junior-beginner' AND requirement = 'Willingness to learn by doing';

UPDATE public.course_requirements
SET requirement_ru = 'Аккаунт GitHub (рекомендуется для проектов)'
WHERE course_id = 'python-junior-beginner' AND requirement = 'GitHub account (recommended for projects)';

UPDATE public.course_requirements
SET requirement_ru = 'Редактор кода (VS Code или PyCharm) — настройка в Неделю 1'
WHERE course_id = 'python-junior-beginner' AND requirement = 'Code editor (VS Code or PyCharm) — set up in Week 1';

-- Add Romanian translations for Python course outcomes
UPDATE public.course_outcomes
SET outcome_ro = 'Scrie cod Python curat și bine structurat'
WHERE course_id = 'python-junior-beginner' AND outcome = 'Write clean, well-structured Python code';

UPDATE public.course_outcomes
SET outcome_ro = 'Lucrează eficient cu liste, seturi, dicționare și OOP'
WHERE course_id = 'python-junior-beginner' AND outcome = 'Work effectively with lists, sets, dictionaries, and OOP';

UPDATE public.course_outcomes
SET outcome_ro = 'Gestionează fișiere și date (JSON/CSV)'
WHERE course_id = 'python-junior-beginner' AND outcome = 'Handle files and data (JSON/CSV)';

UPDATE public.course_outcomes
SET outcome_ro = 'Folosește uv pentru a instala și gestiona biblioteci externe'
WHERE course_id = 'python-junior-beginner' AND outcome = 'Use uv to install and manage external libraries';

UPDATE public.course_outcomes
SET outcome_ro = 'Scrie teste unitare și folosește Git'
WHERE course_id = 'python-junior-beginner' AND outcome = 'Write unit tests and use Git';

UPDATE public.course_outcomes
SET outcome_ro = 'Construiește aplicații mini complete (CLI și web)'
WHERE course_id = 'python-junior-beginner' AND outcome = 'Build complete mini-apps (CLI and web)';

-- Add Russian translations for Python course outcomes
UPDATE public.course_outcomes
SET outcome_ru = 'Пишите чистый, хорошо структурированный код Python'
WHERE course_id = 'python-junior-beginner' AND outcome = 'Write clean, well-structured Python code';

UPDATE public.course_outcomes
SET outcome_ru = 'Эффективно работайте со списками, множествами, словарями и ООП'
WHERE course_id = 'python-junior-beginner' AND outcome = 'Work effectively with lists, sets, dictionaries, and OOP';

UPDATE public.course_outcomes
SET outcome_ru = 'Обрабатывайте файлы и данные (JSON/CSV)'
WHERE course_id = 'python-junior-beginner' AND outcome = 'Handle files and data (JSON/CSV)';

UPDATE public.course_outcomes
SET outcome_ru = 'Используйте uv для установки и управления внешними библиотеками'
WHERE course_id = 'python-junior-beginner' AND outcome = 'Use uv to install and manage external libraries';

UPDATE public.course_outcomes
SET outcome_ru = 'Пишите модульные тесты и используйте Git'
WHERE course_id = 'python-junior-beginner' AND outcome = 'Write unit tests and use Git';

UPDATE public.course_outcomes
SET outcome_ru = 'Создавайте полноценные мини-приложения (CLI и веб)'
WHERE course_id = 'python-junior-beginner' AND outcome = 'Build complete mini-apps (CLI and web)';

-- Add Romanian translations for C++ course features
UPDATE public.course_features
SET feature_ro = 'C++ modern (C++17/20) cu proiecte reale'
WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND feature = 'Modern C++ (C++17/20) with real projects';

UPDATE public.course_features
SET feature_ro = 'Laboratoare practice la fiecare modul'
WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND feature = 'Hands-on labs every module';

UPDATE public.course_features
SET feature_ro = 'Configurări CMake de nivel producție'
WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND feature = 'Production-grade CMake setups';

UPDATE public.course_features
SET feature_ro = 'Multithreading și cele mai bune practici STL'
WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND feature = 'Multithreading & STL best practices';

UPDATE public.course_features
SET feature_ro = 'Modele de design cu utilizare practică'
WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND feature = 'Design patterns with practical use';

UPDATE public.course_features
SET feature_ro = 'Recenzii de cod și feedback'
WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND feature = 'Code reviews and feedback';

UPDATE public.course_features
SET feature_ro = 'Certificat de finalizare'
WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND feature = 'Certificate of completion';

UPDATE public.course_features
SET feature_ro = 'Comunitate Discord și resurse'
WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND feature = 'Discord community & resources';

-- Add Russian translations for C++ course features
UPDATE public.course_features
SET feature_ru = 'Современный C++ (C++17/20) с реальными проектами'
WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND feature = 'Modern C++ (C++17/20) with real projects';

UPDATE public.course_features
SET feature_ru = 'Практические лабораторные работы в каждом модуле'
WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND feature = 'Hands-on labs every module';

UPDATE public.course_features
SET feature_ru = 'Профессиональные настройки CMake'
WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND feature = 'Production-grade CMake setups';

UPDATE public.course_features
SET feature_ru = 'Многопоточность и лучшие практики STL'
WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND feature = 'Multithreading & STL best practices';

UPDATE public.course_features
SET feature_ru = 'Паттерны проектирования с практическим применением'
WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND feature = 'Design patterns with practical use';

UPDATE public.course_features
SET feature_ru = 'Обзоры кода и обратная связь'
WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND feature = 'Code reviews and feedback';

UPDATE public.course_features
SET feature_ru = 'Сертификат об окончании'
WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND feature = 'Certificate of completion';

UPDATE public.course_features
SET feature_ru = 'Сообщество Discord и ресурсы'
WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND feature = 'Discord community & resources';