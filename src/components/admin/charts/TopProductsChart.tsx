
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { ChartTooltip } from "@/components/ui/chart";
import { Product } from '@/utils/types';

interface TopProductChartProps {
  data: Pick<Product, 'id' | 'name' | 'views' | 'purchases'>[];
  dataKey: 'views' | 'purchases';
  title: string;
}

export const TopProductsChart = ({ data, dataKey, title }: TopProductChartProps) => {
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#9146FF'];

  return (
    <div>
      <h3 className="text-center mb-4">{title}</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={100}
            fill="#8884d8"
            dataKey={dataKey}
            nameKey="name"
            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
          >
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <ChartTooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};
