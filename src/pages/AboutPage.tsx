
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40 z-10"></div>
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1504&q=80" 
            alt="Solar Engineers" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-20 solar-container min-h-[50vh] flex flex-col justify-center py-20">
          <div className="max-w-2xl text-white space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
              About SolarLink
            </h1>
            <p className="text-xl opacity-90">
              Leading the solar revolution since 2010
            </p>
          </div>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="solar-section">
        <div className="solar-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="solar-heading">Our Story</h2>
              <div className="space-y-4">
                <p>
                  SolarLink was founded in 2010 with a simple mission: to make clean, renewable solar energy accessible to everyone. What started as a small team of passionate engineers has grown into a leading provider of solar solutions across Africa.
                </p>
                <p>
                  Over the years, we've helped thousands of homes and businesses reduce their carbon footprint and energy costs through our high-quality solar products and expert installation services.
                </p>
                <p>
                  Today, we continue to innovate and expand our product range, staying at the forefront of solar technology to provide our customers with the most efficient and reliable solar solutions available.
                </p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1504&q=80" 
                alt="Solar Installation" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="solar-section bg-muted/50">
        <div className="solar-container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="solar-heading">Our Core Values</h2>
            <p className="solar-subheading">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="solar-card p-6">
              <h3 className="text-xl font-semibold mb-3">Sustainability</h3>
              <p className="text-muted-foreground">
                We are committed to promoting sustainable energy solutions that reduce environmental impact and help create a cleaner world for future generations.
              </p>
            </div>
            <div className="solar-card p-6">
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-muted-foreground">
                We continuously seek new technologies and approaches to improve the efficiency, affordability, and accessibility of solar energy.
              </p>
            </div>
            <div className="solar-card p-6">
              <h3 className="text-xl font-semibold mb-3">Integrity</h3>
              <p className="text-muted-foreground">
                We conduct our business with honesty, transparency, and ethical practices, building trust with our customers, partners, and communities.
              </p>
            </div>
            <div className="solar-card p-6">
              <h3 className="text-xl font-semibold mb-3">Quality</h3>
              <p className="text-muted-foreground">
                We are dedicated to providing the highest quality solar products and services, ensuring reliability and customer satisfaction.
              </p>
            </div>
            <div className="solar-card p-6">
              <h3 className="text-xl font-semibold mb-3">Community</h3>
              <p className="text-muted-foreground">
                We support the communities we serve through education, job creation, and partnerships that advance renewable energy adoption.
              </p>
            </div>
            <div className="solar-card p-6">
              <h3 className="text-xl font-semibold mb-3">Customer Focus</h3>
              <p className="text-muted-foreground">
                We prioritize the needs and satisfaction of our customers, providing personalized solutions and exceptional service.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="solar-section bg-solar-blue text-white dark:bg-solar-red">
        <div className="solar-container text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to Switch to Solar?</h2>
            <p className="text-lg mb-8 opacity-90">
              Start your journey to energy independence today. Browse our products or contact our team to discuss your solar needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" asChild>
                <Link to="/products">Explore Products</Link>
              </Button>
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-solar-blue dark:hover:text-solar-red" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
