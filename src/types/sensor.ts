export interface Sensor {
  sensorType: string;
  title: string;
  value: string | number;
  unit?: string;
  status?: string;
  topic: string;
  timestamp: string;
  isOnline?: boolean;
  deviceName?: string;
  customIcon?: React.ReactNode;
}