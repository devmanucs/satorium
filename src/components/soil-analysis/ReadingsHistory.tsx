import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import type { SoilReading } from "@/types";

interface ReadingsHistoryProps {
  readings: SoilReading[];
}

const ReadingsHistory = ({ readings }: ReadingsHistoryProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Histórico de Leituras</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Data</TableHead>
                <TableHead>Localização</TableHead>
                <TableHead>Tipo de Solo</TableHead>
                <TableHead>Umidade</TableHead>
                <TableHead>pH</TableHead>
                <TableHead>Temperatura</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {readings.map((reading) => (
                <TableRow key={reading.id}>
                  <TableCell>
                    {new Date(reading.timestamp).toLocaleString("pt-BR")}
                  </TableCell>
                  <TableCell>{reading.location}</TableCell>
                  <TableCell>{reading.soilType}</TableCell>
                  <TableCell>{reading.moisture}%</TableCell>
                  <TableCell>{reading.ph}</TableCell>
                  <TableCell>{reading.temperature}°C</TableCell>
                  <TableCell>
                    <span
                      className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                        reading.status === "good"
                          ? "bg-green-100 text-green-800"
                          : reading.status === "warning"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {reading.status === "good"
                        ? "Bom"
                        : reading.status === "warning"
                        ? "Atenção"
                        : "Crítico"}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReadingsHistory;