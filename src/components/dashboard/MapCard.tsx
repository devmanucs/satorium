import { Button } from "@/components/ui/button";
import { ExpandIcon } from "lucide-react";
import { useState } from "react";

const MapCard = () => {
  const [isMapExpanded, setIsMapExpanded] = useState(false);

  return (
    <div className={`agri-card h-full min-h-[240px] flex flex-col ${isMapExpanded ? 'fixed inset-0 z-50 p-6 rounded-none' : ''}`}>
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-medium text-lg">Mapa da Propriedade</h3>
        <Button variant="ghost" size="sm" onClick={() => setIsMapExpanded(!isMapExpanded)}>
          <ExpandIcon className="h-4 w-4" />
        </Button>
      </div>
      
      <div className="relative flex-grow rounded-md overflow-hidden border border-border bg-card/50">
        <div className="absolute inset-0 bg-agri-cream/30 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-agri-lime/50 flex items-center justify-center text-agri-forest">
              <Map className="h-8 w-8" />
            </div>
            <p className="text-sm text-muted-foreground">
              Mapa interativo da propriedade
            </p>
            <p className="text-xs text-muted-foreground">
              Conecte o rover para visualizar os dados em tempo real
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Import from Lucide React
function Map(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
      <line x1="9" x2="9" y1="3" y2="18" />
      <line x1="15" x2="15" y1="6" y2="21" />
    </svg>
  );
}

export default MapCard;
