
export type SoilStatus = "good" | "warning" | "danger";

export interface SoilReading {
  id: string;
  timestamp: string;
  location: string;
  soilType: string;
  moisture: number;
  ph: number;
  temperature: number;
  nutrients: {
    nitrogen: number;
    phosphorus: number;
    potassium: number;
  };
  status: SoilStatus;
}

export interface Alert {
  id: string;
  title: string;
  description: string;
  type: "success" | "warning" | "danger";
  timestamp: string;
  read: boolean;
}

export interface Device {
  id: string;
  name: string;
  type: "rover" | "drone" | "sensor";
  status: "online" | "offline" | "standby";
  lastSync?: string;
  battery?: number;
}
