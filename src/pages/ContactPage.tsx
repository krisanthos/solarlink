
import React from "react";
import ContactSection from "@/components/ContactSection";

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <div className="solar-container py-12">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="solar-heading">Contact Us</h1>
          <p className="solar-subheading">
            We're here to answer any questions you have about our solar products and services.
          </p>
        </div>
      </div>
      
      <ContactSection />
      
      {/* Map Section */}
      <section className="solar-section bg-background">
        <div className="solar-container">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="solar-heading">Find Us</h2>
            <p className="solar-subheading">
              Visit our showroom to see our solar products in action
            </p>
          </div>
          
          <div className="aspect-video w-full rounded-lg overflow-hidden border">
            {/* Placeholder for map - in a real implementation, this would be replaced with an actual map component */}
            <div className="w-full h-full bg-muted flex items-center justify-center">
              <div className="text-center p-8">
                <h3 className="text-xl font-medium mb-2">SolarLink Headquarters</h3>
                <p className="text-muted-foreground">
                  123 Solar Avenue<br />
                  Lagos, Nigeria
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
