
import { cn } from "@/lib/utils";
import { Smile, Meh, Frown } from "lucide-react";

type SoilStatus = "good" | "warning" | "danger";

interface StatusCardProps {
  status: SoilStatus;
  lastReading: string;
  location: string;
  soilType: string;
}

const StatusCard = ({ status, lastReading, location, soilType }: StatusCardProps) => {
  const getStatusIcon = () => {
    switch (status) {
      case "good":
        return <Smile className="h-10 w-10 soil-status-good" />;
      case "warning":
        return <Meh className="h-10 w-10 soil-status-warning" />;
      case "danger":
        return <Frown className="h-10 w-10 soil-status-danger" />;
    }
  };

  const getStatusText = () => {
    switch (status) {
      case "good":
        return "Ótimo";
      case "warning":
        return "Requer atenção";
      case "danger":
        return "Crítico";
    }
  };

  const statusClass = cn("rounded-full p-1", {
    "bg-green-100": status === "good",
    "bg-yellow-100": status === "warning",
    "bg-red-100": status === "danger",
  });

  return (
    <div className="agri-card h-full">
      <h3 className="font-medium text-lg mb-3">Estado Geral do Solo</h3>
      <div className="flex items-center justify-between">
        <div className={statusClass}>{getStatusIcon()}</div>
        <div className="ml-4">
          <p className={cn("font-bold text-lg", {
            "text-alert-success": status === "good",
            "text-alert-warning": status === "warning",
            "text-alert-danger": status === "danger",
          })}>
            {getStatusText()}
          </p>
          <p className="text-sm text-muted-foreground">
            Última leitura: {lastReading}
          </p>
          <p className="text-sm text-muted-foreground">
            Local: {location}
          </p>
          <p className="text-sm text-muted-foreground">
            Tipo: {soilType}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StatusCard;
