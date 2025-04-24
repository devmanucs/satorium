
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts';
import { Button } from "@/components/ui/button";

const data = [
  { name: 'Jan', umidade: 40, ph: 6.0, temperatura: 22 },
  { name: 'Fev', umidade: 45, ph: 6.2, temperatura: 23 },
  { name: 'Mar', umidade: 50, ph: 6.5, temperatura: 24 },
  { name: 'Abr', umidade: 52, ph: 6.3, temperatura: 25 },
  { name: 'Mai', umidade: 48, ph: 6.2, temperatura: 24 },
  { name: 'Jun', umidade: 43, ph: 6.1, temperatura: 22 },
];

interface StatsCardProps {
  title: string;
  dataKey: "umidade" | "ph" | "temperatura";
  color: string;
  unit: string;
}

const StatsCard = ({ title, dataKey, color, unit }: StatsCardProps) => {
  const getCurrentValue = () => {
    return data[data.length - 1][dataKey];
  };

  return (
    <div className="agri-card h-full">
      <div className="flex justify-between items-center mb-1">
        <h3 className="font-medium text-lg">{title}</h3>
        <div className="text-xs text-muted-foreground">Últimos 6 meses</div>
      </div>
      <div className="font-bold text-2xl mb-2">
        {getCurrentValue()}
        <span className="text-sm font-normal text-muted-foreground ml-1">{unit}</span>
      </div>
      <div className="h-32">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" tick={{ fontSize: 10 }} />
            <YAxis hide />
            <Tooltip />
            <Area type="monotone" dataKey={dataKey} stroke={color} fill={color} fillOpacity={0.2} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default StatsCard;
