
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

interface TimeSeriesData {
  date: string;
  views: number;
  purchases: number;
}

interface TimeSeriesChartProps {
  data: TimeSeriesData[];
}

export const TimeSeriesChart = ({ data }: TimeSeriesChartProps) => {
  const chartConfig = {
    views: { label: 'Views', color: '#2563eb' },
    purchases: { label: 'Purchases', color: '#16a34a' },
  };

  return (
    <div className="h-[400px] mt-4">
      <ChartContainer config={chartConfig}>
        <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
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
        </AreaChart>
      </ChartContainer>
    </div>
  );
};
