-- Create function to update timestamps if it doesn't exist
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

-- Create development_boards table with translation support
CREATE TABLE development_boards (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  image TEXT NOT NULL,
  description TEXT NOT NULL,
  price NUMERIC NOT NULL,
  original_price NUMERIC,
  rating NUMERIC NOT NULL DEFAULT 0,
  reviews INTEGER NOT NULL DEFAULT 0,
  in_stock BOOLEAN NOT NULL DEFAULT true,
  specifications TEXT[] NOT NULL,
  features TEXT[] NOT NULL,
  full_description TEXT,
  applications TEXT[],
  package_includes TEXT[],
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  
  -- Romanian translations
  name_ro TEXT,
  description_ro TEXT,
  specifications_ro TEXT[],
  features_ro TEXT[],
  full_description_ro TEXT,
  applications_ro TEXT[],
  package_includes_ro TEXT[],
  
  -- Russian translations
  name_ru TEXT,
  description_ru TEXT,
  specifications_ru TEXT[],
  features_ru TEXT[],
  full_description_ru TEXT,
  applications_ru TEXT[],
  package_includes_ru TEXT[]
);

-- Enable Row Level Security
ALTER TABLE development_boards ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public read access
CREATE POLICY "Anyone can view development boards"
ON development_boards
FOR SELECT
USING (true);

-- Only admins can insert, update, or delete development boards
CREATE POLICY "Only admins can insert development boards"
ON development_boards
FOR INSERT
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Only admins can update development boards"
ON development_boards
FOR UPDATE
USING (has_role(auth.uid(), 'admin'::app_role))
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Only admins can delete development boards"
ON development_boards
FOR DELETE
USING (has_role(auth.uid(), 'admin'::app_role));

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_development_boards_updated_at
BEFORE UPDATE ON development_boards
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert Dino Dev STM32 board with translations
INSERT INTO development_boards (
  id, name, image, description, price, original_price, rating, reviews, in_stock,
  specifications, features, full_description, applications, package_includes,
  name_ro, description_ro, specifications_ro, features_ro, full_description_ro, applications_ro, package_includes_ro,
  name_ru, description_ru, specifications_ru, features_ru, full_description_ru, applications_ru, package_includes_ru
) VALUES (
  'dino-dev-stm32',
  'Dino Dev STM32',
  '/src/assets/STM1.png',
  'Compact STM32F103RBT6-based board for learning embedded programming and prototyping.',
  39,
  NULL,
  4.8,
  980,
  true,
  ARRAY[
    'STM32F103RBT6 microcontroller',
    '9 LEDs + 1 RGB LED, 2 buttons, slider switch',
    'Buzzer and encoder for timer tasks',
    'Photoresistor, potentiometer, LCD display',
    'Humidity & temperature sensor',
    'EEPROM + NOR Flash memory',
    'UART, I2C, SPI, USB, and free GPIO connectors',
    'USB-C powered (5V → 3.3V/2A DC-DC converter)'
  ],
  ARRAY[
    'Learn GPIO, timers, ADC, and interfaces',
    'External memory read/write',
    'Multiple bootloader options',
    'Debugging and prototyping tool',
    'Simple, flexible, beginner-friendly design'
  ],
  'A hands-on STM32 training board designed for education and fast prototyping. Simple layout, clear labeling, and rich peripherals make it ideal for labs, workshops, and DIY projects.',
  ARRAY['Education & labs', 'Embedded prototyping', 'Peripherals training'],
  ARRAY['Dino Dev STM32 board', 'USB-C cable', 'Quick start guide'],
  
  -- Romanian
  'Dino Dev STM32',
  'Placă compactă bazată pe STM32F103RBT6 pentru învățarea programării embedded și prototipare.',
  ARRAY[
    'Microcontroler STM32F103RBT6',
    '9 LED-uri + 1 LED RGB, 2 butoane, comutator glisant',
    'Buzzer și encoder pentru sarcini timer',
    'Fotoresistor, potențiometru, display LCD',
    'Senzor de umiditate și temperatură',
    'Memorie EEPROM + NOR Flash',
    'Conectori UART, I2C, SPI, USB și GPIO liberi',
    'Alimentat prin USB-C (convertor DC-DC 5V → 3.3V/2A)'
  ],
  ARRAY[
    'Învață GPIO, timere, ADC și interfețe',
    'Citire/scriere memorie externă',
    'Opțiuni multiple de bootloader',
    'Instrument de debugging și prototipare',
    'Design simplu, flexibil, prietenos pentru începători'
  ],
  'O placă de antrenament STM32 practică, concepută pentru educație și prototipare rapidă. Layout simplu, etichetare clară și periferice bogate o fac ideală pentru laboratoare, workshop-uri și proiecte DIY.',
  ARRAY['Educație și laboratoare', 'Prototipare embedded', 'Antrenament periferice'],
  ARRAY['Placă Dino Dev STM32', 'Cablu USB-C', 'Ghid de pornire rapidă'],
  
  -- Russian
  'Dino Dev STM32',
  'Компактная плата на базе STM32F103RBT6 для изучения встроенного программирования и прототипирования.',
  ARRAY[
    'Микроконтроллер STM32F103RBT6',
    '9 светодиодов + 1 RGB светодиод, 2 кнопки, переключатель',
    'Зуммер и энкодер для задач с таймерами',
    'Фоторезистор, потенциометр, LCD дисплей',
    'Датчик влажности и температуры',
    'Память EEPROM + NOR Flash',
    'Разъемы UART, I2C, SPI, USB и свободные GPIO',
    'Питание через USB-C (DC-DC преобразователь 5V → 3.3V/2A)'
  ],
  ARRAY[
    'Изучение GPIO, таймеров, АЦП и интерфейсов',
    'Чтение/запись внешней памяти',
    'Множество вариантов загрузчика',
    'Инструмент для отладки и прототипирования',
    'Простой, гибкий дизайн для начинающих'
  ],
  'Практическая учебная плата STM32, разработанная для обучения и быстрого прототипирования. Простая компоновка, четкая маркировка и богатые периферийные устройства делают ее идеальной для лабораторий, семинаров и DIY проектов.',
  ARRAY['Образование и лаборатории', 'Встроенное прототипирование', 'Обучение периферийным устройствам'],
  ARRAY['Плата Dino Dev STM32', 'USB-C кабель', 'Руководство быстрого старта']
);

-- Insert Dino Dev ATmega328PB board with translations
INSERT INTO development_boards (
  id, name, image, description, price, original_price, rating, reviews, in_stock,
  specifications, features, full_description, applications, package_includes,
  name_ro, description_ro, specifications_ro, features_ro, full_description_ro, applications_ro, package_includes_ro,
  name_ru, description_ru, specifications_ru, features_ru, full_description_ru, applications_ru, package_includes_ru
) VALUES (
  'dino-dev-328pb',
  'Dino Dev ATmega328PB',
  '/src/assets/arduino1.png',
  'Educational ATmega328PB board for learning MCUs, prototyping, and testing embedded systems.',
  29,
  NULL,
  4.8,
  860,
  true,
  ARRAY[
    'ATmega328PB microcontroller',
    '27 I/O lines, 32 KB Flash, 1 KB EEPROM, 2 KB SRAM',
    '8-bit & 16-bit timers, 10 PWM channels, 8-ch 10-bit ADC',
    'Two USART, SPI, I2C interfaces',
    'Power: USB or 6–9V DC',
    'OLED 64x32 display, GL5528 photoresistor',
    'MPU6050 IMU, BMP280 sensor'
  ],
  ARRAY[
    'USB programming and power',
    'Capacitive touch support',
    'Onboard buzzer, LEDs, and buttons',
    'Power source switch (USB/external)',
    'Arduino IDE compatible',
    'Supports shields and breadboards'
  ],
  'A compact, Arduino-IDE-friendly board based on ATmega328PB with useful onboard sensors and display for fast experiments.',
  ARRAY['Education', 'DIY projects', 'Sensor demos'],
  ARRAY['Dino Dev ATmega328PB board', 'USB cable', 'Quick start guide'],
  
  -- Romanian
  'Dino Dev ATmega328PB',
  'Placă educațională ATmega328PB pentru învățarea MCU-urilor, prototipare și testare sisteme embedded.',
  ARRAY[
    'Microcontroler ATmega328PB',
    '27 linii I/O, 32 KB Flash, 1 KB EEPROM, 2 KB SRAM',
    'Timere 8-bit și 16-bit, 10 canale PWM, ADC 8-ch 10-bit',
    'Două interfețe USART, SPI, I2C',
    'Alimentare: USB sau 6–9V DC',
    'Display OLED 64x32, fotoresistor GL5528',
    'IMU MPU6050, senzor BMP280'
  ],
  ARRAY[
    'Programare și alimentare prin USB',
    'Suport pentru atingere capacitivă',
    'Buzzer, LED-uri și butoane pe placă',
    'Comutator sursă de alimentare (USB/extern)',
    'Compatible cu Arduino IDE',
    'Suportă shield-uri și breadboard-uri'
  ],
  'O placă compactă, compatibilă cu Arduino IDE, bazată pe ATmega328PB cu senzori și display utile pe placă pentru experimente rapide.',
  ARRAY['Educație', 'Proiecte DIY', 'Demo-uri cu senzori'],
  ARRAY['Placă Dino Dev ATmega328PB', 'Cablu USB', 'Ghid de pornire rapidă'],
  
  -- Russian
  'Dino Dev ATmega328PB',
  'Образовательная плата ATmega328PB для изучения микроконтроллеров, прототипирования и тестирования встроенных систем.',
  ARRAY[
    'Микроконтроллер ATmega328PB',
    '27 линий I/O, 32 КБ Flash, 1 КБ EEPROM, 2 КБ SRAM',
    '8-бит и 16-бит таймеры, 10 каналов ШИМ, 8-кан 10-бит АЦП',
    'Два интерфейса USART, SPI, I2C',
    'Питание: USB или 6–9В DC',
    'OLED дисплей 64x32, фоторезистор GL5528',
    'IMU MPU6050, датчик BMP280'
  ],
  ARRAY[
    'Программирование и питание через USB',
    'Поддержка емкостного сенсора',
    'Встроенный зуммер, светодиоды и кнопки',
    'Переключатель источника питания (USB/внешний)',
    'Совместим с Arduino IDE',
    'Поддержка шилдов и макетных плат'
  ],
  'Компактная плата, совместимая с Arduino IDE, на базе ATmega328PB с полезными встроенными датчиками и дисплеем для быстрых экспериментов.',
  ARRAY['Образование', 'DIY проекты', 'Демонстрации датчиков'],
  ARRAY['Плата Dino Dev ATmega328PB', 'USB кабель', 'Руководство быстрого старта']
);