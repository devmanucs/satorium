
import { Wifi, WifiOff, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ConnectivityCardProps {
  isConnected: boolean;
  deviceType: string;
  lastSync?: string;
}

const ConnectivityCard = ({ isConnected, deviceType, lastSync }: ConnectivityCardProps) => {
  return (
    <div className="agri-card h-full">
      <h3 className="font-medium text-lg mb-3">Conectividade</h3>
      <div className="flex items-center mb-4">
        <div className={`p-2 rounded-full ${isConnected ? 'bg-green-100' : 'bg-red-100'}`}>
          {isConnected ? (
            <Wifi className="h-5 w-5 text-alert-success" />
          ) : (
            <WifiOff className="h-5 w-5 text-alert-danger" />
          )}
        </div>
        <div className="ml-3">
          <p className={`font-medium ${isConnected ? 'text-alert-success' : 'text-alert-danger'}`}>
            {isConnected ? 'Conectado' : 'Desconectado'}
          </p>
          <p className="text-sm text-muted-foreground">
            {isConnected
              ? `${deviceType} - Dados recebidos em tempo real`
              : `${deviceType} - Dispositivo offline`}
          </p>
          {lastSync && isConnected && (
            <p className="text-xs text-muted-foreground">
              Última sincronização: {lastSync}
            </p>
          )}
        </div>
      </div>
      <div className="flex gap-2">
        <Button size="sm" variant="outline" className="text-xs w-full">
          Reconectar
        </Button>
        <Button size="sm" className="text-xs w-full">
          <Check className="mr-1 h-3 w-3" /> Sincronizar
        </Button>
      </div>
    </div>
  );
};

export default ConnectivityCard;
