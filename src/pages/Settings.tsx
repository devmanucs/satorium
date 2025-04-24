import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Sliders, Bell, Wifi, Battery } from "lucide-react";

const Settings = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Configurações</h1>
        </div>

        <Separator />

        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Sliders className="h-5 w-5 text-muted-foreground" />
                <CardTitle>Configurações do Rover</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="auto-readings">Leituras Automáticas</Label>
                <Switch id="auto-readings" />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="data-sync">Sincronização Automática</Label>
                <Switch id="data-sync" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="battery">Nível de Bateria</Label>
                  <p className="text-sm text-muted-foreground">75% restante</p>
                </div>
                <Battery className="h-5 w-5 text-muted-foreground" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label>Status da Conexão</Label>
                  <p className="text-sm text-muted-foreground">Conectado</p>
                </div>
                <Wifi className="h-5 w-5 text-green-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Bell className="h-5 w-5 text-muted-foreground" />
                <CardTitle>Notificações</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="alerts">Alertas de Umidade</Label>
                <Switch id="alerts" />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="daily-report">Relatório Diário</Label>
                <Switch id="daily-report" />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="battery-alerts">Alertas de Bateria Baixa</Label>
                <Switch id="battery-alerts" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default Settings;