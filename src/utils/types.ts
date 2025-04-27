
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
  views?: number;
  purchases?: number;
}

export type ProductFilterOption = {
  label: string;
  value: string;
};

export interface CategoryStats {
  category: ProductCategory;
  views: number;
  purchases: number;
}

export interface AdminStats {
  totalViews: number;
  totalPurchases: number;
  categoryStats: CategoryStats[];
  topProducts: Pick<Product, 'id' | 'name' | 'views' | 'purchases'>[];
}

export type AdminUser = {
  username: string;
  role: 'admin' | 'editor';
};
