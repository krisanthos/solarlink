
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from "@/components/ui/chart";
import { CategoryStats } from '@/utils/types';

interface CategoryPerformanceChartProps {
  data: CategoryStats[];
}

export const CategoryPerformanceChart = ({ data }: CategoryPerformanceChartProps) => {
  const chartConfig = {
    views: { label: 'Views', color: '#2563eb' },
    purchases: { label: 'Purchases', color: '#16a34a' },
  };

  return (
    <div className="h-[400px] mt-4">
      <ChartContainer config={chartConfig}>
        <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
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
  );
};
