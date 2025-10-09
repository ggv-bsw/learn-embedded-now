-- Update blog posts with Romanian and Russian translations

-- Post 1: The Force of Embedded Systems
UPDATE blog_posts 
SET 
  title_ro = 'Forța Sistemelor Înglobate: O Nouă Speranță pentru IoT',
  title_ru = 'Сила Встроенных Систем: Новая Надежда для IoT',
  excerpt_ro = 'Descoperă cum sistemele înglobate și IoT transformă viitorul tehnologiei. Alătură-te rebeliunii împotriva sistemelor complexe.',
  excerpt_ru = 'Узнайте, как встроенные системы и IoT преображают будущее технологий. Присоединяйтесь к восстанию против сложных систем.',
  category_ro = 'IoT',
  category_ru = 'IoT',
  content_ro = '<h2>Introducere în Forța IoT</h2><p>Într-o galaxie în care dispozitivele sunt interconectate, sistemele înglobate sunt forța care ține totul împreună. Învață cum să folosești această putere.</p><h3>Ce vei învăța</h3><ul><li>Fundamentele arhitecturii IoT</li><li>Protocoale de comunicare</li><li>Securitate în IoT</li></ul>',
  content_ru = '<h2>Введение в Силу IoT</h2><p>В галактике, где устройства взаимосвязаны, встроенные системы — это сила, которая удерживает всё вместе. Научитесь использовать эту мощь.</p><h3>Что вы узнаете</h3><ul><li>Основы архитектуры IoT</li><li>Протоколы связи</li><li>Безопасность в IoT</li></ul>'
WHERE slug = 'force-of-embedded-systems-iot';

-- Post 2: Arduino Strikes Back
UPDATE blog_posts 
SET 
  title_ro = 'Arduino Contraatacă: Tehnici Avansate de Programare',
  title_ru = 'Arduino Наносит Ответный Удар: Продвинутые Техники Программирования',
  excerpt_ro = 'Treci dincolo de blink. Stăpânește tehnicile avansate de programare Arduino pentru a construi aplicații de nivel profesional.',
  excerpt_ru = 'Выйдите за рамки blink. Овладейте продвинутыми техниками программирования Arduino для создания профессиональных приложений.',
  category_ro = 'Arduino',
  category_ru = 'Arduino',
  content_ro = '<h2>Tehnici Avansate Arduino</h2><p>După ce ai învățat bazele, este timpul să explorezi tehnici avansate care îți vor permite să construiești sisteme complexe și profesionale.</p><h3>Subiecte acoperite</h3><ul><li>Întreruperi și temporizatoare</li><li>Comunicare serială avansată</li><li>Gestionarea puterii</li></ul>',
  content_ru = '<h2>Продвинутые Техники Arduino</h2><p>После изучения основ пришло время исследовать продвинутые техники, которые позволят вам создавать сложные и профессиональные системы.</p><h3>Охваченные темы</h3><ul><li>Прерывания и таймеры</li><li>Продвинутая последовательная связь</li><li>Управление питанием</li></ul>'
WHERE slug = 'arduino-strikes-back-advanced-programming';

-- Post 3: Return of the C
UPDATE blog_posts 
SET 
  title_ro = 'Întoarcerea lui C: Stăpânirea Programării la Nivel Scăzut',
  title_ru = 'Возвращение C: Овладение Низкоуровневым Программированием',
  excerpt_ro = 'Programarea în C este esențială pentru sistemele înglobate. Învață să gândești la nivel hardware și să scrii cod eficient.',
  excerpt_ru = 'Программирование на C необходимо для встроенных систем. Научитесь мыслить на уровне железа и писать эффективный код.',
  category_ro = 'C Înglobat',
  category_ru = 'Встроенный C',
  content_ro = '<h2>Stăpânirea C pentru Embedded</h2><p>Limbajul C este forța supremă în lumea embedded. Descoperă cum să controlezi direct hardware-ul și să optimizezi fiecare ciclu de procesor.</p><h3>Концепte cheie</h3><ul><li>Pointeri și gestionarea memoriei</li><li>Manipularea biților</li><li>Optimizare la nivel scăzut</li></ul>',
  content_ru = '<h2>Овладение C для Embedded</h2><p>Язык C — это высшая сила в мире встроенных систем. Откройте для себя, как напрямую управлять железом и оптимизировать каждый процессорный цикл.</p><h3>Ключевые концепции</h3><ul><li>Указатели и управление памятью</li><li>Битовые манипуляции</li><li>Низкоуровневая оптимизация</li></ul>'
WHERE slug = 'return-of-c-mastering-low-level';

-- Post 4: The Phantom Menace
UPDATE blog_posts 
SET 
  title_ro = 'Amenințarea Fantomă: Depanarea Sistemelor Înglobate',
  title_ru = 'Призрачная Угроза: Отладка Встроенных Систем',
  excerpt_ro = 'Bug-urile sunt amenințarea fantomă care bântuie fiecare dezvoltator. Învață tehnici avansate de depanare pentru a le învinge.',
  excerpt_ru = 'Баги — это призрачная угроза, преследующая каждого разработчика. Изучите продвинутые техники отладки, чтобы победить их.',
  category_ro = 'Depanare',
  category_ru = 'Отладка',
  content_ro = '<h2>Tehnici de Depanare</h2><p>În lumea embedded, bug-urile pot fi dificil de găsit și de rezolvat. Învață instrumente și tehnici profesionale pentru a le descoperi rapid.</p><h3>Instrumente și metode</h3><ul><li>Debugger-e hardware (JTAG, SWD)</li><li>Analiză cu osciloscop logic</li><li>Depanare prin printf avansată</li></ul>',
  content_ru = '<h2>Техники Отладки</h2><p>В мире встроенных систем баги могут быть трудными для обнаружения и устранения. Изучите профессиональные инструменты и техники для их быстрого выявления.</p><h3>Инструменты и методы</h3><ul><li>Аппаратные отладчики (JTAG, SWD)</li><li>Анализ логическим анализатором</li><li>Продвинутая отладка через printf</li></ul>'
WHERE slug = 'phantom-menace-debugging-embedded';

-- Post 5: Attack of the Clones
UPDATE blog_posts 
SET 
  title_ro = 'Atacul Clonelor: Arhitectură IoT Scalabilă',
  title_ru = 'Атака Клонов: Масштабируемая Архитектура IoT',
  excerpt_ro = 'Când unul nu este suficient: construiește sisteme IoT care se pot scala de la zeci la milioane de dispozitive.',
  excerpt_ru = 'Когда одного недостаточно: создавайте IoT-системы, которые могут масштабироваться от десятков до миллионов устройств.',
  category_ro = 'Arhitectură',
  category_ru = 'Архитектура',
  content_ro = '<h2>Arhitectură Scalabilă</h2><p>Construirea unui sistem IoT care funcționează pentru câteva dispozitive este una, dar scalarea la mii sau milioane este cu totul altceva.</p><h3>Principii de scalare</h3><ul><li>Arhitectură de microservicii</li><li>Gestionarea conexiunilor</li><li>Echilibrarea sarcinii</li></ul>',
  content_ru = '<h2>Масштабируемая Архитектура</h2><p>Создание IoT-системы, которая работает для нескольких устройств — одно, но масштабирование до тысяч или миллионов — совсем другое дело.</p><h3>Принципы масштабирования</h3><ul><li>Микросервисная архитектура</li><li>Управление соединениями</li><li>Балансировка нагрузки</li></ul>'
WHERE slug = 'attack-of-clones-scalable-iot';