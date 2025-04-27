
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AdminStats, CategoryStats, Product, ProductCategory } from "@/utils/types";
import { ProductForm } from "@/components/admin/ProductForm";
import { CategoryForm } from "@/components/admin/CategoryForm";
import { ProductsList } from "@/components/admin/ProductsList";
import { CategoryList } from "@/components/admin/CategoryList";
import { AdminDashboardStats } from "@/components/admin/AdminDashboardStats";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { products, getProductCategories } from "@/data/products";
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from "@/components/ui/chart";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

const AdminDashboardPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [adminProducts, setAdminProducts] = useState<Product[]>(products);
  const [categories, setCategories] = useState<ProductCategory[]>(
    getProductCategories() as ProductCategory[]
  );
  const [currentProduct, setCurrentProduct] = useState<Product | null>(null);
  const [currentCategory, setCurrentCategory] = useState<ProductCategory | null>(null);
  
  // Set up auth verification effect
  useEffect(() => {
    // For demo purposes, store verification in localStorage when admin reaches this page
    localStorage.setItem("adminVerified", "true");
    
    return () => {
      // Clean up - in a real app, you would have proper auth state management
    };
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

  // Generate some time-based data for charts
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
  
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

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

  // Chart config for styling
  const chartConfig = {
    views: { label: 'Views', color: '#2563eb' },
    purchases: { label: 'Purchases', color: '#16a34a' },
    categories: { label: 'Categories' },
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Total Page Views</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{mockStats.totalViews.toLocaleString()}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Total Sales</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{mockStats.totalPurchases.toLocaleString()}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{categories.length}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Products</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{adminProducts.length}</div>
              </CardContent>
            </Card>
          </div>
          
          {/* Collapsible Charts */}
          <div className="space-y-6">
            <Dialog>
              <DialogTrigger asChild>
                <Card className="cursor-pointer hover:border-primary/50 transition-colors">
                  <CardHeader>
                    <CardTitle>Traffic Overview</CardTitle>
                    <CardDescription>Website views and purchases over time</CardDescription>
                  </CardHeader>
                  <CardContent className="h-[100px] flex items-center justify-center text-muted-foreground">
                    Click to view detailed chart
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-4xl">
                <DialogHeader>
                  <DialogTitle>Traffic Overview</DialogTitle>
                  <DialogDescription>
                    Website views and purchases over the last 30 days
                  </DialogDescription>
                </DialogHeader>
                <div className="h-[400px] mt-4">
                  <ChartContainer config={chartConfig}>
                    <AreaChart data={timeData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                      <defs>
                        <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#2563eb" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="colorPurchases" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#16a34a" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#16a34a" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <XAxis dataKey="date" />
                      <YAxis />
                      <CartesianGrid strokeDasharray="3 3" />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Area type="monotone" dataKey="views" stroke="#2563eb" fillOpacity={1} fill="url(#colorViews)" />
                      <Area type="monotone" dataKey="purchases" stroke="#16a34a" fillOpacity={1} fill="url(#colorPurchases)" />
                      <ChartLegend content={<ChartLegendContent />} />
                    </AreaChart>
                  </ChartContainer>
                </div>
              </DialogContent>
            </Dialog>
            
            <Dialog>
              <DialogTrigger asChild>
                <Card className="cursor-pointer hover:border-primary/50 transition-colors">
                  <CardHeader>
                    <CardTitle>Category Performance</CardTitle>
                    <CardDescription>Views and purchases by category</CardDescription>
                  </CardHeader>
                  <CardContent className="h-[100px] flex items-center justify-center text-muted-foreground">
                    Click to view detailed chart
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-4xl">
                <DialogHeader>
                  <DialogTitle>Category Performance</DialogTitle>
                  <DialogDescription>
                    Comparison of views and purchases across all product categories
                  </DialogDescription>
                </DialogHeader>
                <div className="h-[400px] mt-4">
                  <ChartContainer config={chartConfig}>
                    <BarChart data={mockStats.categoryStats} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                      <XAxis dataKey="category" />
                      <YAxis />
                      <CartesianGrid strokeDasharray="3 3" />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Bar dataKey="views" fill="#2563eb" name="Views" />
                      <Bar dataKey="purchases" fill="#16a34a" name="Purchases" />
                      <ChartLegend content={<ChartLegendContent />} />
                    </BarChart>
                  </ChartContainer>
                </div>
              </DialogContent>
            </Dialog>
            
            <Dialog>
              <DialogTrigger asChild>
                <Card className="cursor-pointer hover:border-primary/50 transition-colors">
                  <CardHeader>
                    <CardTitle>Top Products</CardTitle>
                    <CardDescription>Most viewed and purchased products</CardDescription>
                  </CardHeader>
                  <CardContent className="h-[100px] flex items-center justify-center text-muted-foreground">
                    Click to view detailed chart
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-4xl">
                <DialogHeader>
                  <DialogTitle>Top Products</DialogTitle>
                  <DialogDescription>
                    Performance of your best-selling products
                  </DialogDescription>
                </DialogHeader>
                <div className="h-[400px] mt-4 grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-center mb-4">Views</h3>
                    <ResponsiveContainer width="100%" height={300}>
                      <PieChart>
                        <Pie
                          data={mockStats.topProducts}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          outerRadius={100}
                          fill="#8884d8"
                          dataKey="views"
                          nameKey="name"
                          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        >
                          {mockStats.topProducts.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <ChartTooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div>
                    <h3 className="text-center mb-4">Purchases</h3>
                    <ResponsiveContainer width="100%" height={300}>
                      <PieChart>
                        <Pie
                          data={mockStats.topProducts}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          outerRadius={100}
                          fill="#8884d8"
                          dataKey="purchases"
                          nameKey="name"
                          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        >
                          {mockStats.topProducts.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <ChartTooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
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
