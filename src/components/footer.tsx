import { Badge } from "@/components/ui/badge";
import { Code, Cpu, Wifi, Zap } from "lucide-react";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-12 bg-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">ES</span>
              </div>
              <span className="font-bold text-lg text-white">
                Embedded School
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              Empowering the next generation of embedded systems developers with
              practical, industry-focused education.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-white">Courses</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link
                  to="/courses/embedded-c-arduino"
                  className="hover:text-blue-400 transition-colors flex items-center"
                >
                  <Cpu className="w-3 h-3 mr-2" />
                  Arduino Programming
                </Link>
              </li>
              <li>
                <Link
                  to="/courses/advanced-embedded-c"
                  className="hover:text-blue-400 transition-colors flex items-center"
                >
                  <Code className="w-3 h-3 mr-2" />
                  Embedded C
                </Link>
              </li>
              <li>
                <Link
                  to="/courses/iot-systems"
                  className="hover:text-blue-400 transition-colors flex items-center"
                >
                  <Wifi className="w-3 h-3 mr-2" />
                  IoT Systems
                </Link>
              </li>
              <li>
                <Link
                  to="/courses/automotive"
                  className="hover:text-blue-400 transition-colors flex items-center"
                >
                  <Zap className="w-3 h-3 mr-2" />
                  Automotive Electronics
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-white">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link
                  to="/about"
                  className="hover:text-blue-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-blue-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="hover:text-blue-400 transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="hover:text-blue-400 transition-colors"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-white">
              Developer Resources
            </h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link
                  to="/docs"
                  className="hover:text-blue-400 transition-colors"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  to="/api"
                  className="hover:text-blue-400 transition-colors"
                >
                  API Reference
                </Link>
              </li>
              <li>
                <Link
                  to="/community"
                  className="hover:text-blue-400 transition-colors"
                >
                  Community
                </Link>
              </li>
              <li>
                <Link
                  to="/support"
                  className="hover:text-blue-400 transition-colors"
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © 2024 Embedded School. Open source education platform.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <div className="flex items-center space-x-1 text-gray-400">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-xs">All systems operational</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
