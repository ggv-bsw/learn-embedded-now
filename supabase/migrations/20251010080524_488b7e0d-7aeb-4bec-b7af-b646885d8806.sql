-- Update professional packs with correct titles and descriptions

-- Update first pack: IoT, Automotive & Biomedical Career
UPDATE professional_packs
SET 
  title = 'IoT, Automotive & Biomedical Career',
  title_ro = 'Carieră în IoT, Automotive și Biomedical',
  title_ru = 'Карьера в IoT, автомобильной и биомедицинской индустрии',
  description = 'Specialized path for careers in IoT, automotive systems, and biomedical engineering. Master embedded systems, hardware design, and industry-specific applications.',
  description_ro = 'Traseu specializat pentru cariere în IoT, sisteme automotive și inginerie biomedicală. Stăpânește sistemele integrate, designul hardware și aplicațiile specifice industriei.',
  description_ru = 'Специализированный путь для карьеры в IoT, автомобильных системах и биомедицинской инженерии. Освойте встраиваемые системы, проектирование оборудования и отраслевые приложения.'
WHERE id = 'career-path-embedded-professional';

-- Update second pack: Mobile Engineer
UPDATE professional_packs
SET 
  title = 'Mobile Engineer',
  title_ro = 'Inginer Mobile',
  title_ru = 'Мобильный инженер',
  description = 'Complete mobile development path. Build cross-platform applications with modern frameworks and best practices for iOS and Android platforms.',
  description_ro = 'Traseu complet de dezvoltare mobilă. Construiește aplicații cross-platform cu framework-uri moderne și cele mai bune practici pentru platformele iOS și Android.',
  description_ru = 'Полный путь мобильной разработки. Создавайте кроссплатформенные приложения с современными фреймворками и лучшими практиками для платформ iOS и Android.'
WHERE id = 'career-path-software-developer';

-- Update third pack: Data Engineer
UPDATE professional_packs
SET 
  title = 'Data Engineer',
  title_ro = 'Inginer de Date',
  title_ru = 'Инженер данных',
  description = 'Master data engineering fundamentals. Learn Python, data processing, analytics, and build robust data pipelines for modern data-driven applications.',
  description_ro = 'Stăpânește fundamentele ingineriei datelor. Învață Python, procesarea datelor, analitica și construiește pipeline-uri de date robuste pentru aplicații moderne bazate pe date.',
  description_ru = 'Освойте основы инженерии данных. Изучите Python, обработку данных, аналитику и создавайте надежные конвейеры данных для современных приложений, управляемых данными.'
WHERE id = 'career-path-complete-bundle';