import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { getProductCategories, getProductsByCategory } from "@/data/products";
import { ProductCategory } from "@/utils/types";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ProductsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get("category") as ProductCategory | undefined;
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(categoryParam);
  const [sortOrder, setSortOrder] = useState<string>("featured");
  
  const categories = ["All Products", ...getProductCategories()];
  const products = selectedCategory && selectedCategory !== "All Products" 
    ? getProductsByCategory(selectedCategory as ProductCategory) 
    : getProductsByCategory();
  
  // Sort products based on selected order
  const sortedProducts = [...products].sort((a, b) => {
    switch (sortOrder) {
      case "price-low": 
        return a.price - b.price;
      case "price-high": 
        return b.price - a.price;
      case "rating": 
        return b.rating - a.rating;
      default: 
        // Featured - keep original order
        return 0;
    }
  });
  
  useEffect(() => {
    // Update selected category when URL param changes
    setSelectedCategory(categoryParam || "All Products");
  }, [categoryParam]);
  
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    if (category === "All Products") {
      searchParams.delete("category");
    } else {
      searchParams.set("category", category);
    }
    setSearchParams(searchParams);
  };
  
  return (
    <div className="solar-container py-8 md:py-12">
      <div className="flex flex-col items-start md:flex-row md:items-center justify-between mb-8">
        <div>
          <h1 className="solar-heading mb-2">Solar Products</h1>
          <p className="text-muted-foreground">
            {selectedCategory === "All Products" ? "Browse all our solar products" : selectedCategory}
          </p>
        </div>
        
        <div className="mt-4 md:mt-0">
          <Select value={sortOrder} onValueChange={(value) => setSortOrder(value)}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Featured</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="rating">Highest Rated</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Category Sidebar */}
        <div className="md:col-span-3 space-y-6">
          <div className="solar-card p-4">
            <h3 className="font-medium mb-3">Categories</h3>
            <div className="space-y-1">
              {categories.map((category) => (
                <Button 
                  key={category}
                  variant={selectedCategory === category ? "default" : "ghost"}
                  className={`w-full justify-start ${selectedCategory === category ? "bg-solar-blue dark:bg-solar-red" : ""}`}
                  onClick={() => handleCategoryChange(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Product Grid */}
        <div className="md:col-span-9">
          {sortedProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium mb-2">No products found</h3>
              <p className="text-muted-foreground">
                Try selecting another category or check back later.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
