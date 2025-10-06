import STMImage from "@/assets/STM1.png";
import arduinoImage from "@/assets/arduino1.png";

export type DevelopmentBoard = {
  id: string;
  name: string;
  image: string;
  description: string;
  price: number;
  originalPrice: number | null;
  rating: number;
  reviews: number;
  inStock: boolean;
  specifications: string[];
  features: string[];
  fullDescription?: string;
  applications?: string[];
  packageIncludes?: string[];
};

export const developmentBoards: DevelopmentBoard[] = [
  {
    id: "dino-dev-stm32",
    name: "Dino Dev STM32",
    image: STMImage,
    description:
      "Compact STM32F103RBT6-based board for learning embedded programming and prototyping.",
    price: 39,
    originalPrice: null,
    rating: 4.8,
    reviews: 980,
    inStock: true,
    specifications: [
      "STM32F103RBT6 microcontroller",
      "9 LEDs + 1 RGB LED, 2 buttons, slider switch",
      "Buzzer and encoder for timer tasks",
      "Photoresistor, potentiometer, LCD display",
      "Humidity & temperature sensor",
      "EEPROM + NOR Flash memory",
      "UART, I2C, SPI, USB, and free GPIO connectors",
      "USB-C powered (5V → 3.3V/2A DC-DC converter)",
    ],
    features: [
      "Learn GPIO, timers, ADC, and interfaces",
      "External memory read/write",
      "Multiple bootloader options",
      "Debugging and prototyping tool",
      "Simple, flexible, beginner-friendly design",
    ],
    fullDescription:
      "A hands-on STM32 training board designed for education and fast prototyping. Simple layout, clear labeling, and rich peripherals make it ideal for labs, workshops, and DIY projects.",
    applications: [
      "Education & labs",
      "Embedded prototyping",
      "Peripherals training",
    ],
    packageIncludes: [
      "Dino Dev STM32 board",
      "USB-C cable",
      "Quick start guide",
    ],
  },
  {
    id: "dino-dev-328pb",
    name: "Dino Dev ATmega328PB",
    image: arduinoImage,
    description:
      "Educational ATmega328PB board for learning MCUs, prototyping, and testing embedded systems.",
    price: 29,
    originalPrice: null,
    rating: 4.8,
    reviews: 860,
    inStock: true,
    specifications: [
      "ATmega328PB microcontroller",
      "27 I/O lines, 32 KB Flash, 1 KB EEPROM, 2 KB SRAM",
      "8-bit & 16-bit timers, 10 PWM channels, 8-ch 10-bit ADC",
      "Two USART, SPI, I2C interfaces",
      "Power: USB or 6–9V DC",
      "OLED 64x32 display, GL5528 photoresistor",
      "MPU6050 IMU, BMP280 sensor",
    ],
    features: [
      "USB programming and power",
      "Capacitive touch support",
      "Onboard buzzer, LEDs, and buttons",
      "Power source switch (USB/external)",
      "Arduino IDE compatible",
      "Supports shields and breadboards",
    ],
    fullDescription:
      "A compact, Arduino-IDE-friendly board based on ATmega328PB with useful onboard sensors and display for fast experiments.",
    applications: ["Education", "DIY projects", "Sensor demos"],
    packageIncludes: [
      "Dino Dev ATmega328PB board",
      "USB cable",
      "Quick start guide",
    ],
  },
];
