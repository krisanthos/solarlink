
export type ProductCategory = 
  | "Solar Panels" 
  | "Solar Batteries"
  | "Solar Inverters"
  | "Solar Lighting"
  | "Solar Chargers"
  | "Accessories";

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: ProductCategory;
  price: number;
  description: string;
  features: string[];
  specifications: Record<string, string>;
  imageUrl: string;
  rating: number;
  inStock: boolean;
}

export type ProductFilterOption = {
  label: string;
  value: string;
};
