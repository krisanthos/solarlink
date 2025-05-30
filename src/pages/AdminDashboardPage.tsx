import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AdminStats, Product, ProductCategory } from "@/utils/types";
import { ProductForm } from "@/components/admin/ProductForm";
import { CategoryForm } from "@/components/admin/CategoryForm";
import { ProductsList } from "@/components/admin/ProductsList";
import { CategoryList } from "@/components/admin/CategoryList";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { products, getProductCategories } from "@/data/products";
import { StatsOverview } from "@/components/admin/StatsOverview";
import { TimeSeriesChart } from "@/components/admin/charts/TimeSeriesChart";
import { CategoryPerformanceChart } from "@/components/admin/charts/CategoryPerformanceChart";
import { TopProductsChart } from "@/components/admin/charts/TopProductsChart";
import { ChartDialog } from "@/components/admin/ChartDialog";

const AdminDashboardPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [adminProducts, setAdminProducts] = useState<Product[]>(products);
  const [categories, setCategories] = useState<ProductCategory[]>(
    getProductCategories() as ProductCategory[]
  );
  const [currentProduct, setCurrentProduct] = useState<Product | null>(null);
  const [currentCategory, setCurrentCategory] = useState<ProductCategory | null>(null);
  
  useEffect(() => {
    localStorage.setItem("adminVerified", "true");
  }, []);

  // Mock stats data - in a real app this would come from an API
  const mockStats: AdminStats = {
    totalViews: 1240,
    totalPurchases: 56,
    categoryStats: categories.map(category => ({
      category,
      views: Math.floor(Math.random() * 500),
      purchases: Math.floor(Math.random() * 50)
    })),
    topProducts: adminProducts.slice(0, 5).map(product => ({
      id: product.id,
      name: product.name,
      views: Math.floor(Math.random() * 300),
      purchases: Math.floor(Math.random() * 20)
    }))
  };

  // Generate time-based data for charts
  const generateTimeData = () => {
    const data = [];
    const now = new Date();
    for (let i = 30; i >= 0; i--) {
      const date = new Date(now);
      date.setDate(date.getDate() - i);
      data.push({
        date: `${date.getMonth()+1}/${date.getDate()}`,
        views: Math.floor(Math.random() * 50) + 10,
        purchases: Math.floor(Math.random() * 5) + 1
      });
    }
    return data;
  };

  const timeData = generateTimeData();

  const handleAddProduct = (product: Product) => {
    setAdminProducts([...adminProducts, product]);
    toast({
      title: "Product Added",
      description: `${product.name} has been added successfully.`
    });
  };

  const handleUpdateProduct = (product: Product) => {
    setAdminProducts(adminProducts.map(p => p.id === product.id ? product : p));
    setCurrentProduct(null);
    toast({
      title: "Product Updated",
      description: `${product.name} has been updated successfully.`
    });
  };

  const handleDeleteProduct = (productId: string) => {
    setAdminProducts(adminProducts.filter(p => p.id !== productId));
    toast({
      title: "Product Deleted",
      description: "The product has been deleted successfully."
    });
  };

  const handleEditProduct = (product: Product) => {
    setCurrentProduct(product);
  };

  const handleAddCategory = (category: ProductCategory) => {
    if (categories.includes(category)) {
      toast({
        title: "Category Exists",
        description: "This category already exists.",
        variant: "destructive"
      });
      return;
    }
    setCategories([...categories, category]);
    toast({
      title: "Category Added",
      description: `${category} has been added successfully.`
    });
  };

  const handleUpdateCategory = (oldCategory: ProductCategory, newCategory: ProductCategory) => {
    setCategories(categories.map(c => c === oldCategory ? newCategory : c));
    setCurrentCategory(null);
    // Update products with this category
    setAdminProducts(adminProducts.map(product => 
      product.category === oldCategory 
      ? { ...product, category: newCategory } 
      : product
    ));
    toast({
      title: "Category Updated",
      description: `Category has been updated successfully.`
    });
  };

  const handleDeleteCategory = (category: ProductCategory) => {
    // Check if there are products in this category
    const productsInCategory = adminProducts.filter(p => p.category === category);
    if (productsInCategory.length > 0) {
      toast({
        title: "Cannot Delete",
        description: `This category contains ${productsInCategory.length} products. Please move or delete them first.`,
        variant: "destructive"
      });
      return;
    }
    setCategories(categories.filter(c => c !== category));
    toast({
      title: "Category Deleted",
      description: "The category has been deleted successfully."
    });
  };

  const handleEditCategory = (category: ProductCategory) => {
    setCurrentCategory(category);
  };

  return (
    <div className="container py-10">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <Button onClick={() => navigate('/')} variant="outline">
          Back to Site
        </Button>
      </div>

      <Tabs defaultValue="stats" className="w-full">
        <TabsList className="mb-8">
          <TabsTrigger value="stats">Dashboard</TabsTrigger>
          <TabsTrigger value="products">Products</TabsTrigger>
          <TabsTrigger value="categories">Categories</TabsTrigger>
        </TabsList>

        <TabsContent value="stats">
          <StatsOverview
            totalViews={mockStats.totalViews}
            totalPurchases={mockStats.totalPurchases}
            totalCategories={categories.length}
            totalProducts={adminProducts.length}
          />
          
          <div className="space-y-6">
            <ChartDialog
              title="Traffic Overview"
              description="Website views and purchases over time"
            >
              <TimeSeriesChart data={timeData} />
            </ChartDialog>
            
            <ChartDialog
              title="Category Performance"
              description="Views and purchases by category"
            >
              <CategoryPerformanceChart data={mockStats.categoryStats} />
            </ChartDialog>
            
            <ChartDialog
              title="Top Products"
              description="Most viewed and purchased products"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <TopProductsChart
                  data={mockStats.topProducts}
                  dataKey="views"
                  title="Views"
                />
                <TopProductsChart
                  data={mockStats.topProducts}
                  dataKey="purchases"
                  title="Purchases"
                />
              </div>
            </ChartDialog>
          </div>
        </TabsContent>

        <TabsContent value="products">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Products</CardTitle>
                  <CardDescription>Manage your solar products</CardDescription>
                </CardHeader>
                <CardContent>
                  <ProductsList 
                    products={adminProducts} 
                    onEdit={handleEditProduct}
                    onDelete={handleDeleteProduct}
                  />
                </CardContent>
              </Card>
            </div>
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>
                    {currentProduct ? 'Edit Product' : 'Add New Product'}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ProductForm 
                    product={currentProduct}
                    categories={categories}
                    onSubmit={currentProduct ? handleUpdateProduct : handleAddProduct}
                    onCancel={() => setCurrentProduct(null)}
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="categories">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Categories</CardTitle>
                  <CardDescription>Manage your product categories</CardDescription>
                </CardHeader>
                <CardContent>
                  <CategoryList 
                    categories={categories} 
                    onEdit={handleEditCategory}
                    onDelete={handleDeleteCategory}
                  />
                </CardContent>
              </Card>
            </div>
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>
                    {currentCategory ? 'Edit Category' : 'Add New Category'}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CategoryForm 
                    category={currentCategory}
                    onSubmit={currentCategory 
                      ? (newCategory) => handleUpdateCategory(currentCategory, newCategory)
                      : handleAddCategory
                    }
                    onCancel={() => setCurrentCategory(null)}
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminDashboardPage;
