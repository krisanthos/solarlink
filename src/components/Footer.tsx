
import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-muted text-muted-foreground">
      <div className="solar-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground">
              <span className="text-solar-blue dark:text-solar-red">Solar</span>
              <span>Link</span>
            </h3>
            <p className="text-sm">
              Providing sustainable solar solutions for homes and businesses since 2010.
            </p>
            <div className="flex space-x-4">
              {/* Social icons would go here */}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Products</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/products?category=Solar%20Panels" className="text-sm hover:text-solar-blue dark:hover:text-solar-red transition-colors">
                  Solar Panels
                </Link>
              </li>
              <li>
                <Link to="/products?category=Solar%20Batteries" className="text-sm hover:text-solar-blue dark:hover:text-solar-red transition-colors">
                  Solar Batteries
                </Link>
              </li>
              <li>
                <Link to="/products?category=Solar%20Inverters" className="text-sm hover:text-solar-blue dark:hover:text-solar-red transition-colors">
                  Solar Inverters
                </Link>
              </li>
              <li>
                <Link to="/products?category=Solar%20Lighting" className="text-sm hover:text-solar-blue dark:hover:text-solar-red transition-colors">
                  Solar Lighting
                </Link>
              </li>
              <li>
                <Link to="/products?category=Accessories" className="text-sm hover:text-solar-blue dark:hover:text-solar-red transition-colors">
                  Accessories
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm hover:text-solar-blue dark:hover:text-solar-red transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-solar-blue dark:hover:text-solar-red transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-sm hover:text-solar-blue dark:hover:text-solar-red transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm hover:text-solar-blue dark:hover:text-solar-red transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+2349032334918" className="text-sm hover:text-solar-blue dark:hover:text-solar-red transition-colors">
                  +234 9032334918
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@solarlink.com" className="text-sm hover:text-solar-blue dark:hover:text-solar-red transition-colors">
                  info@solarlink.com
                </a>
              </li>
              <li className="text-sm">
                123 Solar Avenue<br />
                Lagos, Nigeria
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-sm">
          <p>© {currentYear} SolarLink. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
