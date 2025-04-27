
import React from "react";
import { Link } from "react-router-dom";
import { Product } from "@/utils/types";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  product: Product;
  className?: string;
}

const ProductCard = ({ product, className }: ProductCardProps) => {
  const { id, name, slug, category, price, imageUrl, rating, inStock } = product;
  
  // Create star rating
  const stars = Array(5).fill(0).map((_, i) => (
    <svg 
      key={i}
      className={cn(
        "h-4 w-4", 
        i < Math.floor(rating) 
          ? "text-solar-gold" 
          : i < rating 
            ? "text-solar-gold/50" 
            : "text-gray-300"
      )}
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="currentColor"
    >
      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
    </svg>
  ));
  
  return (
    <Link to={`/products/${slug}`} className={cn("solar-card group block", className)}>
      <div className="aspect-square relative overflow-hidden rounded-t-lg">
        <img 
          src={imageUrl} 
          alt={name} 
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-2 right-2">
          {!inStock && (
            <Badge variant="destructive" className="text-xs">Out of stock</Badge>
          )}
        </div>
      </div>
      <div className="p-4">
        <div className="text-sm text-muted-foreground mb-1">{category}</div>
        <h3 className="font-medium text-lg mb-1 line-clamp-1">{name}</h3>
        <div className="flex items-center gap-1 mb-2">
          {stars}
          <span className="text-xs text-muted-foreground ml-1">({rating})</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="font-semibold">₦{price.toLocaleString()}</div>
          <div className="text-xs px-2 py-1 rounded bg-primary/10 text-primary">
            View Details
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
  
