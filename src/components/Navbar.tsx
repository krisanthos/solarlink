
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Search, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getProductCategories } from "@/data/products";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const categories = getProductCategories();

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b">
      <div className="solar-container flex items-center justify-between h-16">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
          <Link to="/" className="flex items-center gap-2">
            <div className="font-bold text-xl">
              <span className="text-solar-blue dark:text-solar-red">Solar</span>
              <span>Link</span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-sm font-medium hover:text-solar-blue dark:hover:text-solar-red transition-colors">
            Home
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="link" className="text-sm font-medium hover:text-solar-blue dark:hover:text-solar-red transition-colors p-0">
                Products
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="bg-popover w-48">
              {categories.map((category) => (
                <DropdownMenuItem key={category} asChild>
                  <Link 
                    to={`/products?category=${encodeURIComponent(category)}`}
                    className="w-full hover:cursor-pointer"
                  >
                    {category}
                  </Link>
                </DropdownMenuItem>
              ))}
              <DropdownMenuItem asChild>
                <Link to="/products" className="w-full hover:cursor-pointer">All Products</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link to="/about" className="text-sm font-medium hover:text-solar-blue dark:hover:text-solar-red transition-colors">
            About Us
          </Link>
          <Link to="/contact" className="text-sm font-medium hover:text-solar-blue dark:hover:text-solar-red transition-colors">
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t animate-fade-in">
          <div className="solar-container py-4 space-y-2">
            <Link 
              to="/"
              className="block p-2 hover:bg-accent rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <div className="p-2 space-y-1">
              <div className="font-medium mb-1">Products</div>
              <div className="pl-4 space-y-1">
                {categories.map((category) => (
                  <Link
                    key={category}
                    to={`/products?category=${encodeURIComponent(category)}`}
                    className="block p-1 hover:text-solar-blue dark:hover:text-solar-red"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {category}
                  </Link>
                ))}
                <Link
                  to="/products"
                  className="block p-1 hover:text-solar-blue dark:hover:text-solar-red"
                  onClick={() => setIsMenuOpen(false)}
                >
                  All Products
                </Link>
              </div>
            </div>
            <Link 
              to="/about"
              className="block p-2 hover:bg-accent rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/contact"
              className="block p-2 hover:bg-accent rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="border-t my-2"></div>
            <div className="p-2">
              {/* Mobile menu additional links could go here */}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
