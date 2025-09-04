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
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 font-bold text-xl">
            <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">ES</span>
            </div>
            <span>Embedded School</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Courses</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[400px] gap-3 p-6">
                      {courseCategories.map((category) => (
                        <NavigationMenuLink key={category.name} asChild>
                          <Link
                            to={category.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
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
            
            <Link to="/about" className="text-foreground hover:text-primary transition-smooth">
              About
            </Link>
            <Link to="/pricing" className="text-foreground hover:text-primary transition-smooth">
              Pricing
            </Link>
            <Link to="/blog" className="text-foreground hover:text-primary transition-smooth">
              Blog
            </Link>
            <Link to="/contact" className="text-foreground hover:text-primary transition-smooth">
              Contact
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost">Login</Button>
            <Button variant="default" className="bg-gradient-hero shadow-tech">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border bg-background">
            <div className="flex flex-col space-y-4">
              <div className="space-y-2">
                <div className="font-medium text-sm text-muted-foreground px-4">
                  Courses
                </div>
                {courseCategories.map((category) => (
                  <Link
                    key={category.name}
                    to={category.href}
                    className="block px-8 py-2 text-foreground hover:text-primary transition-smooth"
                    onClick={() => setIsOpen(false)}
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
              
              <Link to="/about" className="block px-4 py-2 text-foreground hover:text-primary transition-smooth">
                About
              </Link>
              <Link to="/pricing" className="block px-4 py-2 text-foreground hover:text-primary transition-smooth">
                Pricing
              </Link>
              <Link to="/blog" className="block px-4 py-2 text-foreground hover:text-primary transition-smooth">
                Blog
              </Link>
              <Link to="/contact" className="block px-4 py-2 text-foreground hover:text-primary transition-smooth">
                Contact
              </Link>
              
              <div className="px-4 pt-4 space-y-2">
                <Button variant="ghost" className="w-full justify-start">
                  Login
                </Button>
                <Button className="w-full bg-gradient-hero shadow-tech">
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