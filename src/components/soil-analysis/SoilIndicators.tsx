import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Thermometer } from "lucide-react";

interface SoilIndicator {
  label: string;
  value: string;
  color: string;
}

interface SoilIndicatorsProps {
  indicators: SoilIndicator[];
}

const SoilIndicators = ({ indicators }: SoilIndicatorsProps) => {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-3">
          <Thermometer className="h-5 w-5 text-agri-forest" />
          <CardTitle className="text-lg font-semibold">Indicadores Atuais</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 justify-center items-center">
          {indicators.map((item) => (
            <div
              key={item.label}
              className="text-center p-7 bg-[#ecf39e]/10 rounded-lg justify-center items-center shadow-sm hover:shadow-md transition-all duration-200 ease-in-out"
            >
              <p className="text-sm text-muted-foreground">{item.label}</p>
              <p className={`text-lg font-semibold ${item.color}`}>{item.value}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default SoilIndicators;