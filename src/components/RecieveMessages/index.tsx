import React from "react";
import { Message } from "../../types/message";
import SensorCard from "../SensorCard";

interface RecieveMessagesProps {
  messages: Message[];
}
const RecieveMessages: React.FC<RecieveMessagesProps> = ({ messages }) => {
  return (
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
  );
};

export default RecieveMessages;
