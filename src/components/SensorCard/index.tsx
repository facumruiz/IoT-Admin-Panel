import React from "react";
import {
  Lightbulb,
  Thermometer,
  Droplets,
  Wifi,
  WifiOff,
  Power,
  PowerOff,
} from "lucide-react";

interface SensorCardProps {
  sensorType: "relay" | "temperature" | "humidity" | "generic";
  title: string;
  value: string | number;
  unit?: string;
  status?: "on" | "off" | "active" | "inactive";
  topic: string;
  timestamp: string;
  isOnline?: boolean;
  deviceName?: string;
  customIcon?: React.ReactNode;
}

const SensorCard: React.FC<SensorCardProps> = ({
  sensorType,
  title,
  value,
  unit = "",
  status,
  topic,
  timestamp,
  isOnline = true,
  deviceName,
  customIcon,
}) => {
  // Icon mapping based on sensor type
  const getIcon = () => {
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

  // Status text formatting
  const getStatusText = () => {
    if (sensorType === "relay") {
      return status === "on" ? "on" : "off";
    }
    return value.toString();
  };

  // Connection status indicator
  const ConnectionStatus = () => (
    <div className="absolute top-2 right-2">
      {isOnline ? (
        <Wifi className="w-4 h-4 text-green-400" />
      ) : (
        <WifiOff className="w-4 h-4 text-red-400" />
      )}
    </div>
  );

  return (
    <div
      className="bg-black border-green-400 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:border-green-300"
      style={{
        overflow: "hidden", // Ensure no overflow issues
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Adjust shadow to avoid black line
        borderBottom: "none", // Explicitly remove bottom border
      }}
    >
      {/* Header */}
      <div className="bg-[#27391C] flex items-center justify-between px-4 py-2">
        <div className="flex items-center gap-2">
          <span className="text-green-400 font-medium text-sm">
            {sensorType === "relay" ? "Rele-1:" : "Temp:"}
          </span>
          <span className="text-white font-medium text-sm">
            {isOnline ? "Encendido" : "Desconectado"}
          </span>
        </div>
        <ConnectionStatus />
      </div>

      {/* Main Content */}
      <div className="p-6 text-center">
        {/* Icon */}
        <div className="flex justify-center mb-4">{getIcon()}</div>

        {/* Value */}
        <div className="mb-2">
          <span className="text-white text-4xl font-bold">
            {getStatusText()}
          </span>
          {unit && <span className="text-white text-2xl ml-1">{unit}</span>}
        </div>

        {/* Label */}
        <div className="text-white text-lg font-medium mb-4">{title}</div>

        {/* Device Name */}
        {deviceName && (
          <div className="text-gray-400 text-sm mb-2">{deviceName}</div>
        )}
      </div>

      {/* Footer */}
      <div
        className="bg-[#27391C] px-4 py-2"
        style={{
          borderTop: "1px solid #27391C", // Ensure footer blends seamlessly
        }}
      >
        <div className="text-green-400 text-xs mb-1">Topic:</div>
        <div className="text-gray-300 text-xs mb-2 break-all">{topic}</div>
        <div className="text-green-400 text-xs">{timestamp}</div>
      </div>
    </div>
  );
};

export default SensorCard;
