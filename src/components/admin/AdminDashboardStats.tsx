
import { AdminStats } from "@/utils/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PieChart, Pie, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, Cell } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

interface AdminDashboardStatsProps {
  stats: AdminStats;
}

export const AdminDashboardStats = ({ stats }: AdminDashboardStatsProps) => {
  const categoryViewsData = stats.categoryStats.map(cat => ({
    name: cat.category,
    views: cat.views
  }));

  const categoryPurchasesData = stats.categoryStats.map(cat => ({
    name: cat.category,
    purchases: cat.purchases
  }));

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#9146FF', '#FF4560'];

  return (
    <div className="space-y-6">
      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-2xl font-bold">Total Views</CardTitle>
            <CardDescription>All-time product page views</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold">{stats.totalViews.toLocaleString()}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-2xl font-bold">Total Purchases</CardTitle>
            <CardDescription>All-time product purchases</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold">{stats.totalPurchases.toLocaleString()}</div>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Category Views</CardTitle>
            <CardDescription>Views by product category</CardDescription>
          </CardHeader>
          <CardContent className="pt-2">
            <ChartContainer
              className="h-80"
              config={{
                views: { label: "Views", color: "#0088FE" }
              }}
            >
              <BarChart data={categoryViewsData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip content={<ChartTooltipContent />} />
                <Legend />
                <Bar dataKey="views" fill="#0088FE" />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Category Purchases</CardTitle>
            <CardDescription>Purchase distribution</CardDescription>
          </CardHeader>
          <CardContent className="pt-2">
            <ChartContainer
              className="h-80"
              config={{
                purchases: { label: "Purchases", color: "#00C49F" }
              }}
            >
              <PieChart>
                <Pie
                  data={categoryPurchasesData}
                  cx="50%"
                  cy="50%"
                  labelLine={true}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="purchases"
                >
                  {categoryPurchasesData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip content={<ChartTooltipContent />} />
                <Legend />
              </PieChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      {/* Top Products */}
      <Card>
        <CardHeader>
          <CardTitle>Top Products</CardTitle>
          <CardDescription>Products with highest engagement</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left font-medium py-2">Product Name</th>
                  <th className="text-left font-medium py-2">Views</th>
                  <th className="text-left font-medium py-2">Purchases</th>
                  <th className="text-left font-medium py-2">Conversion Rate</th>
                </tr>
              </thead>
              <tbody>
                {stats.topProducts.map((product) => {
                  const conversionRate = product.views > 0 
                    ? ((product.purchases || 0) / product.views) * 100 
                    : 0;
                  
                  return (
                    <tr key={product.id} className="border-t border-border">
                      <td className="py-2">{product.name}</td>
                      <td className="py-2">{product.views}</td>
                      <td className="py-2">{product.purchases}</td>
                      <td className="py-2">{conversionRate.toFixed(1)}%</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
