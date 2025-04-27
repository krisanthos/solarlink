
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import ContactSection from "@/components/ContactSection";
import { getFeaturedProducts } from "@/data/products";

const Index = () => {
  const featuredProducts = getFeaturedProducts();
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40 z-10"></div>
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1504&q=80" 
            alt="Solar Panel Installation" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-20 solar-container min-h-[80vh] flex flex-col justify-center py-20">
          <div className="max-w-2xl text-white space-y-6 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              Harness the Power of the Sun with SolarLink
            </h1>
            <p className="text-xl opacity-90">
              Premium solar solutions for homes and businesses. Save money and help the planet with renewable energy.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <Button className="bg-solar-blue hover:bg-solar-blue/90 text-white" asChild>
                <Link to="/products">
                  Explore Products
                </Link>
              </Button>
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-black" asChild>
                <Link to="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="solar-section bg-muted/50">
        <div className="solar-container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="solar-heading">Why Choose SolarLink?</h2>
            <p className="solar-subheading">
              We offer top-quality solar products with professional installation and exceptional customer service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="solar-card p-6 text-center">
              <div className="w-16 h-16 bg-solar-blue dark:bg-solar-red text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
              <p className="text-muted-foreground">
                Our solar products are sourced from leading manufacturers and undergo rigorous quality testing.
              </p>
            </div>
            
            <div className="solar-card p-6 text-center">
              <div className="w-16 h-16 bg-solar-blue dark:bg-solar-red text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Installation</h3>
              <p className="text-muted-foreground">
                Our certified technicians ensure proper installation for maximum efficiency and longevity.
              </p>
            </div>
            
            <div className="solar-card p-6 text-center">
              <div className="w-16 h-16 bg-solar-blue dark:bg-solar-red text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Ongoing Support</h3>
              <p className="text-muted-foreground">
                We provide dedicated customer support and maintenance services long after installation.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Products */}
      <section className="solar-section">
        <div className="solar-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
            <div>
              <h2 className="solar-heading mb-2">Featured Products</h2>
              <p className="solar-subheading md:mb-0">
                Explore our most popular solar solutions
              </p>
            </div>
            <Button variant="link" className="text-solar-blue dark:text-solar-red" asChild>
              <Link to="/products" className="flex items-center">
                View All Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials would be added here */}
      
      {/* Contact Section */}
      <ContactSection />
    </div>
  );
};

export default Index;
