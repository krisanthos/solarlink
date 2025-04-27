
import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
    // Form would be reset here
    (e.target as HTMLFormElement).reset();
  };
  
  return (
    <section className="solar-section bg-muted/50">
      <div className="solar-container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="solar-heading">Get In Touch</h2>
          <p className="solar-subheading">
            Have questions about our products or services? Reach out to our team and we'll be happy to assist you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Contact Information</h3>
            
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-solar-blue dark:bg-solar-red text-white flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a href="tel:+2349032334918" className="text-muted-foreground hover:text-solar-blue dark:hover:text-solar-red">
                    +234 9032334918
                  </a>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-solar-blue dark:bg-solar-red text-white flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a href="mailto:info@solarlink.com" className="text-muted-foreground hover:text-solar-blue dark:hover:text-solar-red">
                    info@solarlink.com
                  </a>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-solar-blue dark:bg-solar-red text-white flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium">Address</h4>
                  <p className="text-muted-foreground">
                    123 Solar Avenue<br />
                    Lagos, Nigeria
                  </p>
                </div>
              </div>
            </div>
            
            <div className="pt-4">
              <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
              <div className="space-y-1">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>8:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span>9:00 AM - 1:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="solar-card p-6">
            <h3 className="text-xl font-semibold mb-4">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Name</label>
                  <Input id="name" placeholder="Your name" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <Input id="email" type="email" placeholder="Your email" required />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                <Input id="subject" placeholder="Message subject" required />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <Textarea id="message" placeholder="Your message" rows={5} required />
              </div>
              
              <Button type="submit" className="w-full bg-solar-blue hover:bg-solar-blue/90 dark:bg-solar-red dark:hover:bg-solar-red/90">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
