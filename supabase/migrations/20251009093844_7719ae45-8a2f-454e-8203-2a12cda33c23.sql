-- Add Romanian translations for Software Testing course features
UPDATE public.course_features
SET feature_ro = 'Instrumente și framework-uri de testare standard din industrie'
WHERE course_id = 'software-testing-automotive-qa' AND feature = 'Industry-standard testing tools and frameworks';

UPDATE public.course_features
SET feature_ro = 'Acoperire siguranță funcțională ISO 26262'
WHERE course_id = 'software-testing-automotive-qa' AND feature = 'ISO 26262 functional safety coverage';

UPDATE public.course_features
SET feature_ro = 'Scenarii reale de testare ECU automotive'
WHERE course_id = 'software-testing-automotive-qa' AND feature = 'Real automotive ECU test scenarios';

UPDATE public.course_features
SET feature_ro = 'Acces la mediul de simulare HIL/SIL'
WHERE course_id = 'software-testing-automotive-qa' AND feature = 'HIL/SIL simulation environment access';

UPDATE public.course_features
SET feature_ro = 'Metodologie de testare AUTOSAR'
WHERE course_id = 'software-testing-automotive-qa' AND feature = 'AUTOSAR testing methodology';

UPDATE public.course_features
SET feature_ro = 'Automatizare testare și integrare CI/CD'
WHERE course_id = 'software-testing-automotive-qa' AND feature = 'Test automation and CI/CD integration';

UPDATE public.course_features
SET feature_ro = 'Pregătire pentru certificare profesională'
WHERE course_id = 'software-testing-automotive-qa' AND feature = 'Professional certification preparation';

-- Add Russian translations for Software Testing course features
UPDATE public.course_features
SET feature_ru = 'Стандартные инструменты и фреймворки для тестирования'
WHERE course_id = 'software-testing-automotive-qa' AND feature = 'Industry-standard testing tools and frameworks';

UPDATE public.course_features
SET feature_ru = 'Охват функциональной безопасности ISO 26262'
WHERE course_id = 'software-testing-automotive-qa' AND feature = 'ISO 26262 functional safety coverage';

UPDATE public.course_features
SET feature_ru = 'Реальные сценарии тестирования автомобильных ЭБУ'
WHERE course_id = 'software-testing-automotive-qa' AND feature = 'Real automotive ECU test scenarios';

UPDATE public.course_features
SET feature_ru = 'Доступ к среде моделирования HIL/SIL'
WHERE course_id = 'software-testing-automotive-qa' AND feature = 'HIL/SIL simulation environment access';

UPDATE public.course_features
SET feature_ru = 'Методология тестирования AUTOSAR'
WHERE course_id = 'software-testing-automotive-qa' AND feature = 'AUTOSAR testing methodology';

UPDATE public.course_features
SET feature_ru = 'Автоматизация тестирования и интеграция CI/CD'
WHERE course_id = 'software-testing-automotive-qa' AND feature = 'Test automation and CI/CD integration';

UPDATE public.course_features
SET feature_ru = 'Подготовка к профессиональной сертификации'
WHERE course_id = 'software-testing-automotive-qa' AND feature = 'Professional certification preparation';

-- Add Romanian translations for Software Testing course requirements
UPDATE public.course_requirements
SET requirement_ro = 'Fundal solid în dezvoltarea software'
WHERE course_id = 'software-testing-automotive-qa' AND requirement = 'Strong software development background';

UPDATE public.course_requirements
SET requirement_ro = 'Înțelegere de bază a sistemelor automotive'
WHERE course_id = 'software-testing-automotive-qa' AND requirement = 'Basic understanding of automotive systems';

UPDATE public.course_requirements
SET requirement_ro = 'Familiaritate cu programarea C/C++'
WHERE course_id = 'software-testing-automotive-qa' AND requirement = 'Familiarity with C/C++ programming';

UPDATE public.course_requirements
SET requirement_ro = 'Cunoștințe despre sisteme embedded (recomandat)'
WHERE course_id = 'software-testing-automotive-qa' AND requirement = 'Knowledge of embedded systems (recommended)';

UPDATE public.course_requirements
SET requirement_ro = 'Experiență cu concepte de testare'
WHERE course_id = 'software-testing-automotive-qa' AND requirement = 'Experience with testing concepts';

-- Add Russian translations for Software Testing course requirements
UPDATE public.course_requirements
SET requirement_ru = 'Сильный опыт разработки программного обеспечения'
WHERE course_id = 'software-testing-automotive-qa' AND requirement = 'Strong software development background';

UPDATE public.course_requirements
SET requirement_ru = 'Базовое понимание автомобильных систем'
WHERE course_id = 'software-testing-automotive-qa' AND requirement = 'Basic understanding of automotive systems';

UPDATE public.course_requirements
SET requirement_ru = 'Знакомство с программированием на C/C++'
WHERE course_id = 'software-testing-automotive-qa' AND requirement = 'Familiarity with C/C++ programming';

UPDATE public.course_requirements
SET requirement_ru = 'Знание встроенных систем (рекомендуется)'
WHERE course_id = 'software-testing-automotive-qa' AND requirement = 'Knowledge of embedded systems (recommended)';

UPDATE public.course_requirements
SET requirement_ru = 'Опыт работы с концепциями тестирования'
WHERE course_id = 'software-testing-automotive-qa' AND requirement = 'Experience with testing concepts';

-- Add Romanian translations for Software Testing course outcomes
UPDATE public.course_outcomes
SET outcome_ro = 'Proiectează strategii complete de testare automotive'
WHERE course_id = 'software-testing-automotive-qa' AND outcome = 'Design comprehensive automotive test strategies';

UPDATE public.course_outcomes
SET outcome_ro = 'Implementează framework-uri de testare automatizate'
WHERE course_id = 'software-testing-automotive-qa' AND outcome = 'Implement automated testing frameworks';

UPDATE public.course_outcomes
SET outcome_ro = 'Execută scenarii de testare HIL/SIL'
WHERE course_id = 'software-testing-automotive-qa' AND outcome = 'Execute HIL/SIL testing scenarios';

UPDATE public.course_outcomes
SET outcome_ro = 'Aplică principiile de testare a siguranței ISO 26262'
WHERE course_id = 'software-testing-automotive-qa' AND outcome = 'Apply ISO 26262 safety testing principles';

UPDATE public.course_outcomes
SET outcome_ro = 'Validează componente software bazate pe AUTOSAR'
WHERE course_id = 'software-testing-automotive-qa' AND outcome = 'Validate AUTOSAR-based software components';

UPDATE public.course_outcomes
SET outcome_ro = 'Conduce proiecte și echipe QA automotive'
WHERE course_id = 'software-testing-automotive-qa' AND outcome = 'Lead automotive QA projects and teams';

-- Add Russian translations for Software Testing course outcomes
UPDATE public.course_outcomes
SET outcome_ru = 'Разрабатывайте комплексные стратегии тестирования автомобилей'
WHERE course_id = 'software-testing-automotive-qa' AND outcome = 'Design comprehensive automotive test strategies';

UPDATE public.course_outcomes
SET outcome_ru = 'Внедряйте автоматизированные фреймворки тестирования'
WHERE course_id = 'software-testing-automotive-qa' AND outcome = 'Implement automated testing frameworks';

UPDATE public.course_outcomes
SET outcome_ru = 'Выполняйте сценарии тестирования HIL/SIL'
WHERE course_id = 'software-testing-automotive-qa' AND outcome = 'Execute HIL/SIL testing scenarios';

UPDATE public.course_outcomes
SET outcome_ru = 'Применяйте принципы тестирования безопасности ISO 26262'
WHERE course_id = 'software-testing-automotive-qa' AND outcome = 'Apply ISO 26262 safety testing principles';

UPDATE public.course_outcomes
SET outcome_ru = 'Валидируйте программные компоненты на базе AUTOSAR'
WHERE course_id = 'software-testing-automotive-qa' AND outcome = 'Validate AUTOSAR-based software components';

UPDATE public.course_outcomes
SET outcome_ru = 'Руководите автомобильными проектами и командами QA'
WHERE course_id = 'software-testing-automotive-qa' AND outcome = 'Lead automotive QA projects and teams';