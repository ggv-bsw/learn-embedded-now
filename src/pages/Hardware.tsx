import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/ui/navigation";
import {
  Cpu,
  Zap,
  ShoppingCart,
  Star,
  ArrowRight,
  Microchip,
  Shield,
  Gauge,
} from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedParticles from "@/components/animated-particles";
import STMImage from "@/assets/STM1.png";
import arduinoImage from "@/assets/arduino1.png";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";

const Hardware = () => {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (board: (typeof developmentBoards)[0]) => {
    addToCart({
      id: board.id,
      name: board.name,
      price: board.price,
      image: board.image,
    });
    toast({
      title: "Added to cart",
      description: `${board.name} has been added to your cart.`,
    });
  };

  const developmentBoards = [
    {
      id: "dino-dev-stm32",
      name: "Dino Dev STM32",
      image: STMImage,
      description:
        "Compact STM32F103RBT6-based board for learning embedded programming and prototyping. Designed for easy use, it helps users master GPIOs, timers, ADCs, and serial interfaces in real-world applications.",
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
    },
    {
      id: "dino-dev-328pb",
      name: "Dino Dev ATmega328PB",
      image: arduinoImage,
      description:
        "Educational board based on ATmega328PB for learning microcontrollers, prototyping, and testing embedded systems. Ideal for students and makers.",
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
    },
  ];

  const categories = [
    { name: "All Boards", count: 24, active: true },
    { name: "Arduino", count: 8 },
    { name: "STM", count: 6 },
  ];

  const features = [
    {
      icon: Shield,
      title: "Quality Guaranteed",
      description: "All boards tested and verified before shipping",
    },
    {
      icon: Zap,
      title: "Fast Shipping",
      description: "Same-day processing with 2-3 day delivery",
    },
    {
      icon: Gauge,
      title: "Technical Support",
      description: "Expert help with setup and troubleshooting",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900 font-inter text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              <pattern
                id="grid"
                width="4"
                height="4"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 4 0 L 0 0 0 4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.1"
                  className="text-primary"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Animated Particles */}
        <AnimatedParticles />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-green-500/10 text-green-400 border-green-500/20 font-mono">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              Hardware Store
            </Badge>

            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Premium Development
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400">
                Hardware & Boards
              </span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
              Professional-grade development boards and microcontrollers for
              your embedded projects. From Arduino to advanced ARM processors.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-slate-900 hover:bg-gray-100 font-semibold px-6 md:px-8 py-4 md:py-6 text-base md:text-lg transition-all duration-300 hover:scale-105"
              >
                <ShoppingCart className="mr-2 w-4 md:w-5 h-4 md:h-5" />
                Shop Now
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-gray-500 px-6 md:px-8 py-4 md:py-6 text-base md:text-lg"
              >
                <Microchip className="mr-2 w-4 md:w-5 h-4 md:h-5" />
                Browse Categories
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={category.active ? "default" : "outline"}
                className={`${
                  category.active
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : "border-slate-600 text-gray-300 hover:bg-slate-700 hover:border-slate-500"
                }`}
              >
                {category.name}
                <Badge className="ml-2 bg-white/20 text-current">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-blue-500/10 text-blue-400 border-blue-500/20 font-mono">
              <Cpu className="w-4 h-4 mr-2" />
              Featured Products
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
              Professional Development Boards
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Hand-picked selection of the best microcontrollers and development
              platforms
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {developmentBoards.map((board) => (
              <Card
                key={board.id}
                className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 group"
              >
                {/* Product Image */}
                <div className="p-4 pb-0">
                  <div className="aspect-square w-full bg-white rounded-lg p-4 mb-4 flex items-center justify-center overflow-hidden">
                    <img
                      src={board.image}
                      alt={board.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                </div>

                <CardHeader className="pb-4 pt-0">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <CardTitle className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                        {board.name}
                      </CardTitle>
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-white font-semibold ml-1">
                            {board.rating}
                          </span>
                          <span className="text-gray-400 text-sm ml-1">
                            ({board.reviews} reviews)
                          </span>
                        </div>
                      </div>
                    </div>
                    <Badge
                      className={`${
                        board.inStock
                          ? "bg-green-500/20 text-green-400 border-green-500/30"
                          : "bg-red-500/20 text-red-400 border-red-500/30"
                      }`}
                    >
                      {board.inStock ? "In Stock" : "Out of Stock"}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <p className="text-gray-400 mb-4 line-clamp-2">
                    {board.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {board.features.map((feature, index) => (
                      <Badge
                        key={index}
                        className="bg-blue-500/20 text-blue-400 border-blue-500/30 text-xs"
                      >
                        {feature}
                      </Badge>
                    ))}
                  </div>

                  {/* Specifications */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">
                      Key Specifications:
                    </h4>
                    <ul className="text-sm text-gray-400 space-y-1">
                      {board.specifications.slice(0, 3).map((spec, index) => (
                        <li key={index} className="flex items-center">
                          <div className="w-1 h-1 bg-blue-400 rounded-full mr-2"></div>
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-white">
                          ${board.price}
                        </span>
                        {board.originalPrice && (
                          <span className="text-lg text-gray-500 line-through">
                            ${board.originalPrice}
                          </span>
                        )}
                      </div>
                    </div>
                    <Button
                      className={`${
                        board.inStock
                          ? "bg-blue-600 hover:bg-blue-700 text-white"
                          : "bg-gray-600 text-gray-400 cursor-not-allowed"
                      }`}
                      disabled={!board.inStock}
                      onClick={() => handleAddToCart(board)}
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      {board.inStock ? "Add to Cart" : "Out of Stock"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="border-slate-600 text-slate-900  hover:scale-105"
            >
              View All Products
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-purple-500/10 text-purple-400 border-purple-500/20 font-mono">
              <Shield className="w-4 h-4 mr-2" />
              Why Buy From Us?
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
              Trusted by Developers Worldwide
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Professional service and support for all your embedded development
              needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 text-center group"
              >
                <CardContent className="pt-8 pb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                    <feature.icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-white group-hover:text-blue-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hardware;
