import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const courseCategories = [
    { name: "Embedded C", href: "/courses/embedded-c" },
    { name: "Arduino", href: "/courses/arduino" },
    { name: "IoT Systems", href: "/courses/iot" },
    { name: "Automotive", href: "/courses/automotive" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 font-bold text-xl text-white">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">ES</span>
            </div>
            <span>Embedded School</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-300 hover:text-white bg-transparent">
                    Courses
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[400px] gap-3 p-6 bg-slate-800 border-slate-700">
                      {courseCategories.map((category) => (
                        <NavigationMenuLink key={category.name} asChild>
                          <Link
                            to={category.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-700 hover:text-blue-400 focus:bg-slate-700 focus:text-blue-400 text-gray-300"
                          >
                            <div className="text-sm font-medium leading-none">
                              {category.name}
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            <Link to="/about" className="text-gray-300 hover:text-blue-400 transition-colors font-medium">
              About
            </Link>
            <Link to="/pricing" className="text-gray-300 hover:text-blue-400 transition-colors font-medium">
              Pricing
            </Link>
            <Link to="/blog" className="text-gray-300 hover:text-blue-400 transition-colors font-medium">
              Blog
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-blue-400 transition-colors font-medium">
              Contact
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-slate-800">
              Login
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-slate-800 bg-slate-900">
            <div className="flex flex-col space-y-4">
              <div className="space-y-2">
                <div className="font-medium text-sm text-gray-400 px-4">
                  Courses
                </div>
                {courseCategories.map((category) => (
                  <Link
                    key={category.name}
                    to={category.href}
                    className="block px-8 py-2 text-gray-300 hover:text-blue-400 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
              
              <Link to="/about" className="block px-4 py-2 text-gray-300 hover:text-blue-400 transition-colors">
                About
              </Link>
              <Link to="/pricing" className="block px-4 py-2 text-gray-300 hover:text-blue-400 transition-colors">
                Pricing
              </Link>
              <Link to="/blog" className="block px-4 py-2 text-gray-300 hover:text-blue-400 transition-colors">
                Blog
              </Link>
              <Link to="/contact" className="block px-4 py-2 text-gray-300 hover:text-blue-400 transition-colors">
                Contact
              </Link>
              
              <div className="px-4 pt-4 space-y-2">
                <Button variant="ghost" className="w-full justify-start text-gray-300 hover:text-white hover:bg-slate-800">
                  Login
                </Button>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;