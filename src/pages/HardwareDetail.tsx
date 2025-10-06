import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/ui/navigation";
import {
  ShoppingCart,
  Star,
  ArrowLeft,
  Check,
  Package,
  Shield,
  Truck,
} from "lucide-react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import STMImage from "@/assets/STM1.png";
import arduinoImage from "@/assets/arduino1.png";

const HardwareDetail = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { toast } = useToast();

  const products = {
    "dino-dev-stm32": {
      id: "dino-dev-stm32",
      name: "Dino Dev STM32",
      image: STMImage,
      description:
        "Compact STM32F103RBT6-based board for learning embedded programming and prototyping. Designed for easy use, it helps users master GPIOs, timers, ADCs, and serial interfaces in real-world applications.",
      fullDescription:
        "The Dino Dev STM32 is a comprehensive development board designed specifically for students, hobbyists, and professionals looking to master embedded systems programming. Built around the powerful STM32F103RBT6 microcontroller, this board provides hands-on experience with real-world peripherals and interfaces. Whether you're learning the basics of GPIO manipulation or diving deep into advanced timer configurations and communication protocols, this board offers everything you need in a compact, user-friendly package.",
      price: 39,
      originalPrice: null,
      rating: 4.8,
      reviews: 980,
      inStock: true,
      specifications: [
        "STM32F103RBT6 microcontroller",
        "9 LEDs + 1 RGB LED for visual feedback",
        "2 buttons + slider switch for input control",
        "Buzzer and encoder for timer tasks",
        "Photoresistor for light sensing",
        "Potentiometer for analog input",
        "LCD display for real-time output",
        "Humidity & temperature sensor (DHT11)",
        "EEPROM + NOR Flash memory for data storage",
        "UART, I2C, SPI communication interfaces",
        "USB connector for programming",
        "Free GPIO connectors for expansion",
        "USB-C powered (5V → 3.3V/2A DC-DC converter)",
        "Compact dimensions: 100mm x 70mm",
      ],
      features: [
        "Learn GPIO, timers, ADC, and interfaces",
        "External memory read/write",
        "Multiple bootloader options",
        "Debugging and prototyping tool",
        "Simple, flexible, beginner-friendly design",
        "Compatible with ARM development tools",
        "Extensive example code library",
        "Active community support",
      ],
      applications: [
        "Embedded systems education",
        "IoT prototyping",
        "Sensor data acquisition",
        "Motor control projects",
        "Communication protocol learning",
        "Real-time embedded applications",
      ],
      packageIncludes: [
        "1x Dino Dev STM32 Board",
        "1x USB-C Cable",
        "Quick Start Guide",
        "Example Code Library",
      ],
    },
    "dino-dev-328pb": {
      id: "dino-dev-328pb",
      name: "Dino Dev ATmega328PB",
      image: arduinoImage,
      description:
        "Educational board based on ATmega328PB for learning microcontrollers, prototyping, and testing embedded systems. Ideal for students and makers.",
      fullDescription:
        "The Dino Dev ATmega328PB is the perfect entry point into the world of microcontroller programming. Based on the enhanced ATmega328PB chip, this board offers more capabilities than standard Arduino boards while maintaining full compatibility with the Arduino IDE. With built-in sensors, display, and multiple communication interfaces, you can start experimenting immediately without needing additional components. The board is designed to be educational yet powerful enough for real-world applications.",
      price: 29,
      originalPrice: null,
      rating: 4.8,
      reviews: 860,
      inStock: true,
      specifications: [
        "ATmega328PB microcontroller (enhanced version)",
        "27 I/O lines for maximum flexibility",
        "32 KB Flash memory for program storage",
        "1 KB EEPROM for data retention",
        "2 KB SRAM for runtime data",
        "8-bit & 16-bit timers for precise timing",
        "10 PWM channels for motor control",
        "8-channel 10-bit ADC for analog sensing",
        "Two USART interfaces for serial communication",
        "SPI and I2C interfaces for peripherals",
        "Power: USB or 6–9V DC input",
        "OLED 64x32 display included",
        "GL5528 photoresistor for light detection",
        "MPU6050 IMU for motion sensing",
        "BMP280 sensor for pressure/altitude",
      ],
      features: [
        "USB programming and power",
        "Capacitive touch support",
        "Onboard buzzer for audio feedback",
        "Multiple LEDs for status indication",
        "Buttons for user input",
        "Power source switch (USB/external)",
        "Arduino IDE compatible",
        "Supports Arduino shields",
        "Breadboard-friendly design",
        "Low power modes supported",
      ],
      applications: [
        "Arduino programming education",
        "Robotics projects",
        "Weather station development",
        "Motion-controlled applications",
        "Data logging systems",
        "Home automation prototypes",
      ],
      packageIncludes: [
        "1x Dino Dev ATmega328PB Board",
        "1x USB Cable",
        "Quick Start Guide",
        "Arduino Setup Instructions",
        "Sample Projects Guide",
      ],
    },
  };

  const product = products[productId as keyof typeof products];

  if (!product) {
    return (
      <div className="min-h-screen bg-slate-900 text-white">
        <Navigation />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
          <Button onClick={() => navigate("/hardware")} variant="outline">
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Hardware
          </Button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <div className="min-h-screen bg-slate-900 font-inter text-white">
      <Navigation />

      {/* Back Button */}
      <div className="container mx-auto px-4 pt-24 pb-8">
        <Button
          onClick={() => navigate("/hardware")}
          variant="outline"
          className="border-slate-600 text-gray-300 hover:bg-slate-800"
        >
          <ArrowLeft className="mr-2 w-4 h-4" />
          Back to Hardware
        </Button>
      </div>

      {/* Product Detail Section */}
      <section className="py-8 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Product Image */}
            <div className="space-y-6">
              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="aspect-square w-full bg-white rounded-lg p-8 flex items-center justify-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4">
                <Card className="bg-slate-800/50 border-slate-700">
                  <CardContent className="p-4 text-center">
                    <Shield className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-400">Quality Guaranteed</p>
                  </CardContent>
                </Card>
                <Card className="bg-slate-800/50 border-slate-700">
                  <CardContent className="p-4 text-center">
                    <Truck className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-400">Fast Shipping</p>
                  </CardContent>
                </Card>
                <Card className="bg-slate-800/50 border-slate-700">
                  <CardContent className="p-4 text-center">
                    <Package className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-400">Secure Packaging</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <Badge
                  className={`mb-4 ${
                    product.inStock
                      ? "bg-green-500/20 text-green-400 border-green-500/30"
                      : "bg-red-500/20 text-red-400 border-red-500/30"
                  }`}
                >
                  {product.inStock ? "In Stock" : "Out of Stock"}
                </Badge>

                <h1 className="text-4xl font-bold mb-4">{product.name}</h1>

                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="text-white font-semibold ml-2">
                      {product.rating}
                    </span>
                    <span className="text-gray-400 ml-2">
                      ({product.reviews} reviews)
                    </span>
                  </div>
                </div>

                <p className="text-gray-300 text-lg mb-6">
                  {product.description}
                </p>

                <div className="border-t border-b border-slate-700 py-6 mb-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center space-x-3">
                        <span className="text-4xl font-bold text-white">
                          ${product.price}
                        </span>
                        {product.originalPrice && (
                          <span className="text-2xl text-gray-500 line-through">
                            ${product.originalPrice}
                          </span>
                        )}
                      </div>
                      <p className="text-gray-400 mt-2">Including VAT</p>
                    </div>
                  </div>
                </div>

                <Button
                  size="lg"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg"
                  disabled={!product.inStock}
                  onClick={handleAddToCart}
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  {product.inStock ? "Add to Cart" : "Out of Stock"}
                </Button>
              </div>
            </div>
          </div>

          {/* Detailed Information Tabs */}
          <div className="max-w-7xl mx-auto mt-16 space-y-8">
            {/* Full Description */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Product Overview</h2>
                <p className="text-gray-300 leading-relaxed">
                  {product.fullDescription}
                </p>
              </CardContent>
            </Card>

            {/* Specifications */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">
                  Technical Specifications
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {product.specifications.map((spec, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{spec}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Features */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">Key Features</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Applications */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">
                  Ideal Applications
                </h2>
                <div className="grid md:grid-cols-3 gap-4">
                  {product.applications.map((app, index) => (
                    <Badge
                      key={index}
                      className="bg-purple-500/20 text-purple-400 border-purple-500/30 text-center py-2"
                    >
                      {app}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Package Contents */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">Package Includes</h2>
                <div className="space-y-3">
                  {product.packageIncludes.map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Package className="w-5 h-5 text-blue-400" />
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HardwareDetail;
