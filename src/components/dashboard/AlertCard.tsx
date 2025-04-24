
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface AlertInfo {
  title: string;
  description: string;
  type: "success" | "warning" | "danger";
}

interface AlertCardProps {
  alerts: AlertInfo[];
}

const AlertCard = ({ alerts }: AlertCardProps) => {
  return (
    <div className="agri-card h-full">
      <h3 className="font-medium text-lg mb-3">Alertas Rápidos</h3>
      <div className="space-y-3">
        {alerts.length > 0 ? (
          alerts.map((alert, index) => (
            <Alert 
              key={index} 
              variant="default" 
              className={`border-l-4 ${
                alert.type === "success" 
                  ? "border-l-alert-success bg-green-50" 
                  : alert.type === "warning" 
                  ? "border-l-alert-warning bg-yellow-50" 
                  : "border-l-alert-danger bg-red-50"
              }`}
            >
              <AlertCircle className={`h-4 w-4 ${
                alert.type === "success" 
                  ? "text-alert-success" 
                  : alert.type === "warning" 
                  ? "text-alert-warning" 
                  : "text-alert-danger"
              }`} />
              <AlertTitle>{alert.title}</AlertTitle>
              <AlertDescription>{alert.description}</AlertDescription>
            </Alert>
          ))
        ) : (
          <p className="text-muted-foreground text-sm">Nenhum alerta no momento</p>
        )}
      </div>
    </div>
  );
};

export default AlertCard;
