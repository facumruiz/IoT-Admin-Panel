import React from "react";
import { Lightbulb, Thermometer, Droplets } from "lucide-react";

interface IconProps {
  customIcon?: React.ReactNode;
  sensorType: string;
  status?: string;
}

// Icon mapping based on sensor type
const CardIcon: React.FC<IconProps> = ({ customIcon, sensorType, status }) => {
  if (customIcon) return customIcon;

  switch (sensorType) {
    case "relay":
      return status === "on" ? (
        <Lightbulb className="w-12 h-12 text-green-400" />
      ) : (
        <Lightbulb className="w-12 h-12 text-gray-500" />
      );
    case "temperature":
      return <Thermometer className="w-12 h-12 text-green-400" />;
    case "humidity":
      return (
        <div className="flex flex-col items-center">
          <Droplets className="w-8 h-8 text-green-400" />
          <Droplets className="w-6 h-6 text-green-400 -mt-2" />
          <Droplets className="w-4 h-4 text-green-400 -mt-1" />
        </div>
      );
    default:
      return <div className="w-12 h-12 bg-green-400 rounded-full"></div>;
  }
};

export default CardIcon;
