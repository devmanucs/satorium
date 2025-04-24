import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { LeafyGreen, Droplets, Microscope, Battery, Signal, Webhook } from "lucide-react";

const Help = () => {
  const features = [
    {
      icon: LeafyGreen,
      title: "Análise de Solo",
      description: "O rover realiza análises detalhadas do solo, medindo níveis de nutrientes, pH e outros parâmetros essenciais para o cultivo."
    },
    {
      icon: Droplets,
      title: "Monitoramento de Umidade",
      description: "Sensores avançados medem a umidade do solo em diferentes profundidades, auxiliando na gestão da irrigação."
    },
    {
      icon: Microscope,
      title: "Análise de Nutrientes",
      description: "Identificação e quantificação dos principais nutrientes presentes no solo, auxiliando na tomada de decisão sobre fertilização."
    },
    {
      icon: Signal,
      title: "Conectividade",
      description: "Transmissão em tempo real dos dados coletados para a plataforma, permitindo monitoramento contínuo."
    },
    {
      icon: Battery,
      title: "Autonomia",
      description: "Bateria de longa duração com sistema de recarga solar, garantindo operação contínua em campo."
    },
    {
      icon: Webhook,
      title: "Integração",
      description: "Integração com sistemas de irrigação e outros equipamentos agrícolas para automação de processos."
    }
  ];

  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-semibold">Ajuda</h1>
          <p className="text-muted-foreground mt-2">
            Guia completo sobre as funcionalidades do rover e suas aplicações
          </p>
        </div>

        <Separator />

        <div className="grid gap-6 md:grid-cols-2">
          {features.map((feature) => (
            <Card key={feature.title}>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <feature.icon className="h-5 w-5 text-muted-foreground" />
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Help;