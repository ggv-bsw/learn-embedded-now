-- Week 1 Lesson Translations (Romanian)
UPDATE curriculum_lessons SET 
  title_ro = 'Introducere în C++ și CMake',
  description_ro = 'Configurarea mediului C++ • Scrierea unui program "Hello, World!" • Noțiuni de bază despre CMakeLists.txt pentru proiecte cu un singur fișier

Sarcină Practică: Scrieți un program "Hello, World!" și construiți-l folosind CMake.
Sarcină Avansată: Modificați programul pentru a accepta un nume ca input și a saluta utilizatorul'
WHERE title = 'Introduction to C++ and CMake';

UPDATE curriculum_lessons SET 
  title_ro = 'Sintaxă de Bază și Tipuri de Date',
  description_ro = 'Variabile și constante • Tipuri de date primitive (int, float, char, bool) • Fluxuri de input/output

Sarcină Practică: Scrieți un program pentru a calcula aria unui dreptunghi folosind variabile.
Sarcină Avansată: Extindeți programul pentru a gestiona atât dreptunghiuri cât și cercuri, folosind un meniu pentru selectarea formei.'
WHERE title = 'Basic Syntax and Data Types';

-- Week 1 Lesson Translations (Russian)
UPDATE curriculum_lessons SET 
  title_ru = 'Введение в C++ и CMake',
  description_ru = 'Настройка среды C++ • Написание программы "Hello, World!" • Основы CMakeLists.txt для однофайловых проектов

Практическая задача: Напишите программу "Hello, World!" и соберите её с помощью CMake.
Продвинутая задача: Измените программу для принятия имени как ввода и приветствия пользователя'
WHERE title = 'Introduction to C++ and CMake';

UPDATE curriculum_lessons SET 
  title_ru = 'Базовый синтаксис и типы данных',
  description_ru = 'Переменные и константы • Примитивные типы данных (int, float, char, bool) • Потоки ввода/вывода

Практическая задача: Напишите программу для расчета площади прямоугольника с использованием переменных.
Продвинутая задача: Расширьте программу для обработки как прямоугольников, так и кругов, используя меню для выбора формы.'
WHERE title = 'Basic Syntax and Data Types';

-- Week 2 Lesson Translations (Romanian)
UPDATE curriculum_lessons SET 
  title_ro = 'Structuri de Control',
  description_ro = 'Instrucțiuni condiționale: if, else, switch • Bucle: for, while, do-while

Sarcină Practică: Scrieți un program pentru a calcula suma tuturor numerelor de la 1 la n.
Sarcină Avansată: Scrieți un program pentru a verifica dacă un număr este prim.'
WHERE title = 'Control Structures';

UPDATE curriculum_lessons SET 
  title_ro = 'Funcții',
  description_ro = 'Declararea și definirea funcțiilor • Argumente implicite și supraîncărcare

Sarcină Practică: Creați funcții pentru a calcula aria unui cerc și a unui dreptunghi.
Sarcină Avansată: Scrieți o funcție recursivă pentru a calcula factorialul unui număr.'
WHERE title = 'Functions';

-- Week 2 Lesson Translations (Russian)
UPDATE curriculum_lessons SET 
  title_ru = 'Структуры управления',
  description_ru = 'Условные операторы: if, else, switch • Циклы: for, while, do-while

Практическая задача: Напишите программу для расчета суммы всех чисел от 1 до n.
Продвинутая задача: Напишите программу для проверки, является ли число простым.'
WHERE title = 'Control Structures';

UPDATE curriculum_lessons SET 
  title_ru = 'Функции',
  description_ru = 'Объявление и определение функций • Аргументы по умолчанию и перегрузка

Практическая задача: Создайте функции для расчета площади круга и прямоугольника.
Продвинутая задача: Напишите рекурсивную функцию для расчета факториала числа.'
WHERE title = 'Functions';

-- Week 3 Lesson Translations
UPDATE curriculum_lessons SET 
  title_ro = 'Array-uri și Șiruri de Caractere',
  description_ro = 'Declararea și inițializarea array-urilor • Lucrul cu șiruri de caractere (std::string)

Sarcină Practică: Scrieți un program pentru a găsi cel mai mare număr dintr-un array.
Sarcină Avansată: Creați un program care inversează un șir și verifică dacă este palindrom.',
  title_ru = 'Массивы и строки',
  description_ru = 'Объявление и инициализация массивов • Работа со строками (std::string)

Практическая задача: Напишите программу для поиска наибольшего числа в массиве.
Продвинутая задача: Создайте программу, которая переворачивает строку и проверяет, является ли она палиндромом.'
WHERE title = 'Arrays and Strings';

UPDATE curriculum_lessons SET 
  title_ro = 'Pointeri și Gestionarea Memoriei',
  description_ro = 'Noțiuni de bază despre pointeri • Alocarea dinamică a memoriei (new, delete)

Sarcină Practică: Alocați dinamic un array și calculați media sa.
Sarcină Avansată: Folosiți pointeri pentru a schimba două variabile fără a folosi o variabilă temporară.',
  title_ru = 'Указатели и управление памятью',
  description_ru = 'Основы указателей • Динамическое выделение памяти (new, delete)

Практическая задача: Динамически выделите массив и вычислите его среднее значение.
Продвинутая задача: Используйте указатели для обмена двух переменных без использования временной переменной.'
WHERE title = 'Pointers and Memory Management';

-- Week 4 Lesson Translations
UPDATE curriculum_lessons SET 
  title_ro = 'Clase și Obiecte',
  description_ro = 'Introducere în clase • Constructori și destructori

Sarcină Practică: Creați o clasă Car cu atribute precum marca și viteza, și metode pentru a accelera și a afișa detalii.
Sarcină Avansată: Adăugați o variabilă statică pentru a număra câte mașini au fost create.',
  title_ru = 'Классы и объекты',
  description_ru = 'Введение в классы • Конструкторы и деструкторы

Практическая задача: Создайте класс Car с атрибутами, такими как марка и скорость, и методами для ускорения и отображения деталей.
Продвинутая задача: Добавьте статическую переменную для подсчета созданных автомобилей.'
WHERE title = 'Classes and Objects';

UPDATE curriculum_lessons SET 
  title_ro = 'Moștenire și Polimorfism',
  description_ro = 'Moștenirea de bază • Funcții virtuale și suprascriere

Sarcină Practică: Implementați o clasă Shape cu clase derivate Circle și Rectangle.
Sarcină Avansată: Adăugați metode virtuale pentru calcularea perimetrului în clasele derivate.',
  title_ru = 'Наследование и полиморфизм',
  description_ru = 'Основы наследования • Виртуальные функции и переопределение

Практическая задача: Реализуйте класс Shape с производными классами Circle и Rectangle.
Продвинутая задача: Добавьте виртуальные методы для расчета периметра в производных классах.'
WHERE title = 'Inheritance and Polymorphism';

-- Week 5 Lesson Translations
UPDATE curriculum_lessons SET 
  title_ro = 'Supraîncărcarea Operatorilor',
  description_ro = 'Supraîncărcarea operatorilor aritmetici și relaționale

Sarcină Practică: Supraîncărcați operatorul + pentru a aduna două numere complexe.
Sarcină Avansată: Supraîncărcați operatorul << pentru a afișa numere complexe.',
  title_ru = 'Перегрузка операторов',
  description_ru = 'Перегрузка арифметических и реляционных операторов

Практическая задача: Перегрузите оператор + для сложения двух комплексных чисел.
Продвинутая задача: Перегрузите оператор << для отображения комплексных чисел.'
WHERE title = 'Operator Overloading';

UPDATE curriculum_lessons SET 
  title_ro = 'Șabloane',
  description_ro = 'Șabloane de funcții și clase

Sarcină Practică: Creați o clasă șablon Stack cu operații de bază (push, pop, afișare).
Sarcină Avansată: Specializați șablonul pentru char pentru a gestiona șiruri ca stive de caractere.',
  title_ru = 'Шаблоны',
  description_ru = 'Шаблоны функций и классов

Практическая задача: Создайте шаблонный класс Stack с базовыми операциями (push, pop, display).
Продвинутая задача: Специализируйте шаблон для char для управления строками как стеками символов.'
WHERE title = 'Templates';