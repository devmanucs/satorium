
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-agri-cream/50 to-background p-4">
      <div className="text-center max-w-md">
        <div className="w-20 h-20 mx-auto mb-6 bg-agri-lime/20 rounded-full flex items-center justify-center">
          <span className="text-4xl text-agri-forest">404</span>
        </div>
        <h1 className="text-3xl font-bold text-agri-forest mb-2">Página não encontrada</h1>
        <p className="text-muted-foreground mb-6">
          A página que você está procurando ainda não existe ou foi movida.
        </p>
        <Button asChild className="w-full sm:w-auto">
          <Link to="/">Voltar ao Dashboard</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
