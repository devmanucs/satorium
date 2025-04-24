import MainLayout from "@/components/layout/MainLayout";
import { Droplet } from "lucide-react";
import type { SoilReading } from "@/types";
import MoistureChart from "@/components/soil-analysis/MoistureChart";
import SoilIndicators from "@/components/soil-analysis/SoilIndicators";
import ReadingsHistory from "@/components/soil-analysis/ReadingsHistory";

const mockData: SoilReading[] = [
  {
    id: "1",
    timestamp: "2025-04-23T08:00:00",
    location: "Setor Sul - Campo 3",
    soilType: "Argiloso",
    moisture: 65,
    ph: 6.5,
    temperature: 23,
    nutrients: {
      nitrogen: 45,
      phosphorus: 30,
      potassium: 25
    },
    status: "good"
  },
  {
    id: "2",
    timestamp: "2025-04-23T10:00:00",
    location: "Setor Norte - Campo 1",
    soilType: "Arenoso",
    moisture: 45,
    ph: 5.8,
    temperature: 25,
    nutrients: {
      nitrogen: 35,
      phosphorus: 25,
      potassium: 20
    },
    status: "warning"
  },
  {
    id: "3",
    timestamp: "2025-04-23T10:00:00",
    location: "Setor Norte - Campo 1",
    soilType: "Úmido",
    moisture: 45,
    ph: 5.8,
    temperature: 25,
    nutrients: {
      nitrogen: 35,
      phosphorus: 25,
      potassium: 20
    },
    status: "warning"
  },
  {
    id: "4",
    timestamp: "2025-04-23T10:00:00",
    location: "Setor Norte - Campo 4",
    soilType: "Fértil",
    moisture: 45,
    ph: 5.8,
    temperature: 25,
    nutrients: {
      nitrogen: 35,
      phosphorus: 25,
      potassium: 20
    },
    status: "good"
  }
];

const indicators = [
  { label: "Umidade", value: "65%", color: "text-[#4F772D]" },
  { label: "pH", value: "6.5", color: "text-[#90A955]" },
  { label: "Temperatura", value: "23°C", color: "text-[#31572C]" },
  { label: "Nitrogênio", value: "45mg/kg", color: "text-[#4F772D]" },
  { label: "Fósforo", value: "30mg/kg", color: "text-[#90A955]" },
  { label: "Potássio", value: "25mg/kg", color: "text-[#31572C]" },
];

const SoilAnalysis = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <h1 className="text-2xl md:text-3xl font-bold text-agri-forest">Análises de Solo</h1>
          <div className="flex gap-2 items-center text-sm text-muted-foreground">
            <Droplet className="h-4 w-4" />
            <span>Última atualização: 23/04/2025 10:30</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">          <MoistureChart data={mockData} />
          <SoilIndicators indicators={indicators} />
        </div>

        <ReadingsHistory readings={mockData} />
      </div>
    </MainLayout>
  );
};

export default SoilAnalysis;