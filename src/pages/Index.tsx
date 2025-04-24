
import MainLayout from "@/components/layout/MainLayout";
import StatusCard from "@/components/dashboard/StatusCard";
import AlertCard from "@/components/dashboard/AlertCard";
import MapCard from "@/components/dashboard/MapCard";
import StatsCard from "@/components/dashboard/StatsCard";
import ConnectivityCard from "@/components/dashboard/ConnectivityCard";
import ActionButtons from "@/components/dashboard/ActionButtons";

const Index = () => {
  const alerts = [
    {
      title: "pH Ácido",
      description: "pH ácido detectado em 20% da área (região sul)",
      type: "warning" as const,
    },
    {
      title: "Baixa umidade",
      description: "Níveis críticos de umidade na região nordeste",
      type: "danger" as const,
    },
  ];

  return (
    <MainLayout>
      <div className="space-y-6">
        <h1 className="text-2xl md:text-3xl font-bold text-agri-forest">Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <StatusCard
            status="warning"
            lastReading="22/04/2025 10:30"
            location="Setor Sul - Campo 3"
            soilType="Argiloso"
          />
          <AlertCard alerts={alerts} />
          <ActionButtons />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <StatsCard 
            title="Umidade do Solo" 
            dataKey="umidade" 
            color="#4F772D" 
            unit="%"
          />
          <StatsCard 
            title="pH do Solo" 
            dataKey="ph" 
            color="#90A955" 
            unit=""
          />
          <StatsCard 
            title="Temperatura" 
            dataKey="temperatura" 
            color="#31572C" 
            unit="°C"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <MapCard />
          </div>
          <ConnectivityCard
            isConnected={true}
            deviceType="Rover Satorium"
            lastSync="22/04/2025 10:30"
          />
        </div>
      </div>
    </MainLayout>
  );
};

export default Index;
