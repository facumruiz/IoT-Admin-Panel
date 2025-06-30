import React from "react";
import { useMessages } from "../../hooks/useMessages";

import { Message } from "../../types/message";
import SensorCard from "../SensorCard";

const SensorDashboard: React.FC = () => {
  const { messages } = useMessages();

  return (
    <div
      className="flex"
      style={{
        background: "linear-gradient(135deg, #0F160A 0%, #577C38 100%)",
      }}
    >
      {/* Main Content */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden">
        <div className="p-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {messages.map((sensor: Message) => (
              <SensorCard
                key={sensor._id}
                sensorType={
                  sensor.sensorType as
                    | "relay"
                    | "temperature"
                    | "humidity"
                    | "generic"
                }
                title={sensor.title}
                value={sensor.value}
                unit={sensor.unit}
                status={sensor.status as "on" | "off" | "active" | "inactive"}
                topic={sensor.topic}
                timestamp={new Date(sensor.timestamp).toLocaleString()}
                isOnline={sensor.isOnline}
                deviceName={sensor.deviceName}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SensorDashboard;
