-- Add Romanian translations for C++ course requirements
UPDATE public.course_requirements
SET requirement_ro = 'Familiaritate de bază cu programarea utilă (nu obligatoriu)'
WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND requirement = 'Basic programming familiarity helpful (not mandatory)';

UPDATE public.course_requirements
SET requirement_ro = 'Laptop cu un compilator C++ modern (GCC/Clang/MSVC)'
WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND requirement = 'Laptop with a modern C++ compiler (GCC/Clang/MSVC)';

UPDATE public.course_requirements
SET requirement_ro = 'CMake 3.20+ și un editor de cod (VS Code/CLion)'
WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND requirement = 'CMake 3.20+ and a code editor (VS Code/CLion)';

UPDATE public.course_requirements
SET requirement_ro = 'Dorință de a practica și itera'
WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND requirement = 'Willingness to practice and iterate';

-- Add Russian translations for C++ course requirements
UPDATE public.course_requirements
SET requirement_ru = 'Базовое знакомство с программированием полезно (не обязательно)'
WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND requirement = 'Basic programming familiarity helpful (not mandatory)';

UPDATE public.course_requirements
SET requirement_ru = 'Ноутбук с современным компилятором C++ (GCC/Clang/MSVC)'
WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND requirement = 'Laptop with a modern C++ compiler (GCC/Clang/MSVC)';

UPDATE public.course_requirements
SET requirement_ru = 'CMake 3.20+ и редактор кода (VS Code/CLion)'
WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND requirement = 'CMake 3.20+ and a code editor (VS Code/CLion)';

UPDATE public.course_requirements
SET requirement_ru = 'Готовность практиковаться и совершенствоваться'
WHERE course_id = 'cpp-bsw-beginner-to-advanced' AND requirement = 'Willingness to practice and iterate';

-- Add Romanian translations for PCB Design course features
UPDATE public.course_features
SET feature_ro = 'Instrumente de design PCB standard din industrie'
WHERE course_id = 'pcb-design-fundamentals' AND feature = 'Industry-standard PCB design tools';

UPDATE public.course_features
SET feature_ro = 'Proiecte hardware reale și prototipuri'
WHERE course_id = 'pcb-design-fundamentals' AND feature = 'Real hardware projects and prototypes';

UPDATE public.course_features
SET feature_ro = 'Verificare și validare a regulilor de design'
WHERE course_id = 'pcb-design-fundamentals' AND feature = 'Design rule checking and validation';

UPDATE public.course_features
SET feature_ro = 'Generare de fișiere pentru fabricație'
WHERE course_id = 'pcb-design-fundamentals' AND feature = 'Manufacturing file generation';

UPDATE public.course_features
SET feature_ro = 'Analiză a integrității semnalului'
WHERE course_id = 'pcb-design-fundamentals' AND feature = 'Signal integrity analysis';

UPDATE public.course_features
SET feature_ro = 'Piese de portofoliu PCB profesionale'
WHERE course_id = 'pcb-design-fundamentals' AND feature = 'Professional PCB portfolio pieces';

UPDATE public.course_features
SET feature_ro = 'Certificat de finalizare'
WHERE course_id = 'pcb-design-fundamentals' AND feature = 'Certificate of completion';

-- Add Russian translations for PCB Design course features
UPDATE public.course_features
SET feature_ru = 'Стандартные для отрасли инструменты проектирования печатных плат'
WHERE course_id = 'pcb-design-fundamentals' AND feature = 'Industry-standard PCB design tools';

UPDATE public.course_features
SET feature_ru = 'Реальные аппаратные проекты и прототипы'
WHERE course_id = 'pcb-design-fundamentals' AND feature = 'Real hardware projects and prototypes';

UPDATE public.course_features
SET feature_ru = 'Проверка и валидация правил проектирования'
WHERE course_id = 'pcb-design-fundamentals' AND feature = 'Design rule checking and validation';

UPDATE public.course_features
SET feature_ru = 'Генерация файлов для производства'
WHERE course_id = 'pcb-design-fundamentals' AND feature = 'Manufacturing file generation';

UPDATE public.course_features
SET feature_ru = 'Анализ целостности сигнала'
WHERE course_id = 'pcb-design-fundamentals' AND feature = 'Signal integrity analysis';

UPDATE public.course_features
SET feature_ru = 'Профессиональные проекты печатных плат для портфолио'
WHERE course_id = 'pcb-design-fundamentals' AND feature = 'Professional PCB portfolio pieces';

UPDATE public.course_features
SET feature_ru = 'Сертификат об окончании'
WHERE course_id = 'pcb-design-fundamentals' AND feature = 'Certificate of completion';

-- Add Romanian translations for PCB Design course requirements
UPDATE public.course_requirements
SET requirement_ro = 'Cunoștințe de bază de electronică'
WHERE course_id = 'pcb-design-fundamentals' AND requirement = 'Basic electronics knowledge';

UPDATE public.course_requirements
SET requirement_ro = 'Înțelegerea teoriei circuitelor'
WHERE course_id = 'pcb-design-fundamentals' AND requirement = 'Understanding of circuit theory';

UPDATE public.course_requirements
SET requirement_ro = 'Computer capabil să ruleze software de design PCB'
WHERE course_id = 'pcb-design-fundamentals' AND requirement = 'Computer capable of running PCB design software';

UPDATE public.course_requirements
SET requirement_ro = 'Multimetru și echipament de testare de bază (recomandat)'
WHERE course_id = 'pcb-design-fundamentals' AND requirement = 'Multimeter and basic testing equipment (recommended)';

-- Add Russian translations for PCB Design course requirements
UPDATE public.course_requirements
SET requirement_ru = 'Базовые знания электроники'
WHERE course_id = 'pcb-design-fundamentals' AND requirement = 'Basic electronics knowledge';

UPDATE public.course_requirements
SET requirement_ru = 'Понимание теории цепей'
WHERE course_id = 'pcb-design-fundamentals' AND requirement = 'Understanding of circuit theory';

UPDATE public.course_requirements
SET requirement_ru = 'Компьютер, способный запускать программное обеспечение для проектирования печатных плат'
WHERE course_id = 'pcb-design-fundamentals' AND requirement = 'Computer capable of running PCB design software';

UPDATE public.course_requirements
SET requirement_ru = 'Мультиметр и базовое испытательное оборудование (рекомендуется)'
WHERE course_id = 'pcb-design-fundamentals' AND requirement = 'Multimeter and basic testing equipment (recommended)';

-- Add Romanian translations for PCB Design course outcomes
UPDATE public.course_outcomes
SET outcome_ro = 'Proiectează PCB-uri multi-strat profesionale'
WHERE course_id = 'pcb-design-fundamentals' AND outcome = 'Design professional multi-layer PCBs';

UPDATE public.course_outcomes
SET outcome_ro = 'Stăpânește captura de scheme și selecția componentelor'
WHERE course_id = 'pcb-design-fundamentals' AND outcome = 'Master schematic capture and component selection';

UPDATE public.course_outcomes
SET outcome_ro = 'Înțelege integritatea semnalului și considerațiile EMI'
WHERE course_id = 'pcb-design-fundamentals' AND outcome = 'Understand signal integrity and EMI considerations';

UPDATE public.course_outcomes
SET outcome_ro = 'Generează fișiere de design gata pentru fabricație'
WHERE course_id = 'pcb-design-fundamentals' AND outcome = 'Generate manufacturing-ready design files';

UPDATE public.course_outcomes
SET outcome_ro = 'Aplică principiile DFM și DFA'
WHERE course_id = 'pcb-design-fundamentals' AND outcome = 'Apply DFM and DFA principles';

UPDATE public.course_outcomes
SET outcome_ro = 'Construiește un portofoliu de design-uri PCB reale'
WHERE course_id = 'pcb-design-fundamentals' AND outcome = 'Build a portfolio of real PCB designs';

-- Add Russian translations for PCB Design course outcomes
UPDATE public.course_outcomes
SET outcome_ru = 'Проектируйте профессиональные многослойные печатные платы'
WHERE course_id = 'pcb-design-fundamentals' AND outcome = 'Design professional multi-layer PCBs';

UPDATE public.course_outcomes
SET outcome_ru = 'Освойте захват схем и выбор компонентов'
WHERE course_id = 'pcb-design-fundamentals' AND outcome = 'Master schematic capture and component selection';

UPDATE public.course_outcomes
SET outcome_ru = 'Понимайте целостность сигнала и вопросы ЭМС'
WHERE course_id = 'pcb-design-fundamentals' AND outcome = 'Understand signal integrity and EMI considerations';

UPDATE public.course_outcomes
SET outcome_ru = 'Генерируйте файлы проектирования, готовые к производству'
WHERE course_id = 'pcb-design-fundamentals' AND outcome = 'Generate manufacturing-ready design files';

UPDATE public.course_outcomes
SET outcome_ru = 'Применяйте принципы DFM и DFA'
WHERE course_id = 'pcb-design-fundamentals' AND outcome = 'Apply DFM and DFA principles';

UPDATE public.course_outcomes
SET outcome_ru = 'Создайте портфолио реальных проектов печатных плат'
WHERE course_id = 'pcb-design-fundamentals' AND outcome = 'Build a portfolio of real PCB designs';