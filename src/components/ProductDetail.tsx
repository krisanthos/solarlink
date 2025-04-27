
import React from "react";
import { Phone, Mail, Check } from "lucide-react";
import { Product } from "@/utils/types";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

interface ProductDetailProps {
  product: Product;
}

const ProductDetail = ({ product }: ProductDetailProps) => {
  const { 
    name, 
    category, 
    price, 
    description, 
    features, 
    specifications, 
    imageUrl, 
    rating, 
    inStock 
  } = product;
  
  // Create star rating
  const stars = Array(5).fill(0).map((_, i) => (
    <svg 
      key={i}
      className={`h-5 w-5 ${i < Math.floor(rating) ? "text-solar-gold" : i < rating ? "text-solar-gold/50" : "text-gray-300"}`}
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="currentColor"
    >
      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
    </svg>
  ));
  
  const handleContactClick = (method: 'call' | 'message') => {
    if (method === 'call') {
      window.location.href = 'tel:+2349032334918';
    } else {
      window.location.href = 'mailto:info@solarlink.com?subject=Inquiry about ' + encodeURIComponent(name);
    }
  };
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="space-y-4">
        <div className="aspect-square rounded-lg overflow-hidden border">
          <img 
            src={imageUrl} 
            alt={name} 
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      
      <div className="space-y-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="outline">{category}</Badge>
            {!inStock && (
              <Badge variant="destructive">Out of stock</Badge>
            )}
          </div>
          <h1 className="text-2xl md:text-3xl font-bold">{name}</h1>
          <div className="flex items-center gap-1 mt-2">
            {stars}
            <span className="ml-2 text-muted-foreground">({rating})</span>
          </div>
          <div className="mt-4 text-2xl font-bold text-solar-blue dark:text-solar-red">
            ₦{price.toLocaleString()}
          </div>
          <p className="mt-4 text-muted-foreground">
            {description}
          </p>
        </div>
        
        <Separator />
        
        <div className="space-y-2">
          <h3 className="font-medium">Key Features:</h3>
          <ul className="grid grid-cols-1 gap-1">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <Check className="h-4 w-4 text-solar-blue dark:text-solar-red flex-shrink-0" />
                <span className="text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <Separator />
        
        <div className="space-y-4">
          <h3 className="font-medium">Contact for Order:</h3>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button 
              className="flex-1 bg-solar-blue hover:bg-solar-blue/90 dark:bg-solar-red dark:hover:bg-solar-red/90"
              onClick={() => handleContactClick('call')}
            >
              <Phone className="mr-2 h-4 w-4" />
              Call Us
            </Button>
            <Button 
              variant="outline" 
              className="flex-1"
              onClick={() => handleContactClick('message')}
            >
              <Mail className="mr-2 h-4 w-4" />
              Send Message
            </Button>
          </div>
          <p className="text-xs text-muted-foreground text-center">
            Our team is available Mon-Fri, 8am to 5pm.
          </p>
        </div>
        
        <Separator />
        
        <Tabs defaultValue="specifications" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="shipping">Shipping Info</TabsTrigger>
          </TabsList>
          <TabsContent value="specifications" className="pt-4">
            <dl className="grid grid-cols-2 gap-4">
              {Object.entries(specifications).map(([key, value]) => (
                <div key={key} className="space-y-1">
                  <dt className="text-xs text-muted-foreground">{key}</dt>
                  <dd className="text-sm font-medium">{value}</dd>
                </div>
              ))}
            </dl>
          </TabsContent>
          <TabsContent value="shipping" className="pt-4 space-y-2">
            <p className="text-sm">Free shipping on all orders over ₦200,000.</p>
            <p className="text-sm">Standard delivery: 5-7 business days.</p>
            <p className="text-sm">Express delivery available at checkout.</p>
            <p className="text-sm">Professional installation available.</p>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ProductDetail;
