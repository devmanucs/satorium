import { Button } from "@/components/ui/button";
import { FileType, Play } from "lucide-react";

const ActionButtons = () => {
  return (
    <div className="agri-card h-full flex flex-col">
      <h3 className="font-medium text-lg mb-3">Ações Rápidas</h3>
      <div className="flex flex-1 items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-md">
          <Button className="flex items-center justify-center gap-2 p-6 h-auto">
            <Play className="h-5 w-5" />
            <span>Iniciar Nova Leitura</span>
          </Button>
          <Button variant="outline" className="flex items-center justify-center gap-2 p-6 h-auto">
            <FileType className="h-5 w-5" />
            <span>Exportar Dados (.csv)</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ActionButtons;
