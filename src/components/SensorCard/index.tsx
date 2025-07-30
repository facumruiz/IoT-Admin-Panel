import React from "react";
import { Wifi, WifiOff } from "lucide-react";
import CardIcon from "../CardIcon";
import { Sensor } from "../../types/sensor";

const SensorCard: React.FC<Sensor> = ({
  sensorType = "",
  title,
  value = "",
  unit = "",
  status,
  topic,
  timestamp,
  isOnline = true,
  deviceName,
  customIcon,
}) => {
  // Status text formatting
  const getStatusText = () => {
    if (sensorType === "relay") {
      return status === "on" ? "on" : "off";
    }
    return value.toString();
  };

  // Connection status indicator
  const ConnectionStatus = () => (
    <div>
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
        overflow: "hidden",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        borderBottom: "none",
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
      <div className="p-6 text-center h-60">
        {/* Icon */}
        <div className="flex justify-center mb-4">
          {<CardIcon sensorType={sensorType} status={status} />}
        </div>

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
        className="bg-[#27391C] px-4 py-4"
        style={{
          borderTop: "1px solid #27391C",
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
