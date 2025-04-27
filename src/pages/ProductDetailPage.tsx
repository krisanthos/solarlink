
import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { getProductBySlug, getRelatedProducts } from "@/data/products";
import ProductDetail from "@/components/ProductDetail";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const ProductDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const product = slug ? getProductBySlug(slug) : undefined;
  const relatedProducts = product ? getRelatedProducts(product.id) : [];
  
  useEffect(() => {
    // Redirect to products page if product not found
    if (slug && !product) {
      navigate("/products");
    }
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, [slug, product, navigate]);
  
  if (!product) {
    return null; // Will redirect in useEffect
  }
  
  return (
    <div className="solar-container py-8 md:py-12">
      <div className="mb-6">
        <Link to="/products" className="inline-flex items-center text-muted-foreground hover:text-solar-blue dark:hover:text-solar-red">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Products
        </Link>
      </div>
      
      <ProductDetail product={product} />
      
      {relatedProducts.length > 0 && (
        <>
          <Separator className="my-12" />
          
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductDetailPage;
