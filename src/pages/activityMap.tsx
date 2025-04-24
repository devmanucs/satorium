import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin } from "lucide-react";

const ActivityMap = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <h1 className="text-2xl md:text-3xl font-bold text-agri-forest">Mapa de Atividades</h1>
          <div className="flex gap-2 items-center text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>23/04/2025</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <Card className="lg:col-span-3">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-agri-forest" />
                  <CardTitle className="text-lg font-semibold">Visão da Propriedade</CardTitle>
                </div>
                <Button variant="outline" size="sm">
                  <MapPin className="h-4 w-4 mr-2" />
                  Centralizar
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="relative w-full h-[600px] rounded-lg overflow-hidden bg-[#F2FCE2]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-agri-lime/50 flex items-center justify-center text-agri-forest">
                      <MapPin className="h-8 w-8" />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Conecte o rover para visualizar o mapa em tempo real
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Pontos de Análise</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { id: 1, name: "Setor Sul - Campo 3", status: "good" },
                  { id: 2, name: "Setor Norte - Campo 1", status: "warning" },
                  { id: 3, name: "Setor Leste - Campo 2", status: "critical" }
                ].map((point) => (
                  <div
                    key={point.id}
                    className="flex items-center gap-3 p-3 rounded-lg bg-card/50 border"
                  >
                    <div
                      className={`w-3 h-3 rounded-full ${
                        point.status === 'good' ? 'bg-green-500' :
                        point.status === 'warning' ? 'bg-yellow-500' :
                        'bg-red-500'
                      }`}
                    />
                    <span className="flex-1 text-sm">{point.name}</span>
                    <Button variant="ghost" size="sm">
                      <MapPin className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default ActivityMap;