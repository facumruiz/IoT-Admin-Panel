import React from "react";
import { useMessages } from "../../hooks/useMessages";

import { Message } from "../../types/message";
import SensorCard from "../SensorCard";

const Messages = () => {
  // const { messages } = useMessages();
  // console.log("Messages:", messages);

  const messages = [
    {
      _id: "685d41fdc3797ea98e2dfe81",
      sensorType: "relay",
      title: "Luz1",
      value: "on",
      status: "on",
      topic: "dispositivo/relay1",
      timestamp: "2025-06-06T17:39:13.000Z",
      isOnline: true,
      deviceName: "Living Room Light",
    },
    {
      _id: "685d436ec3797ea98e2dfe83",
      sensorType: "relay",
      title: "Luz1",
      value: "on",
      status: "on",
      topic: "dispositivo/relay1",
      timestamp: "2025-06-06T17:39:13.000Z",
      isOnline: true,
      deviceName: "Luz Living",
    },
    {
      _id: "685d436ec3797ea98e2dfe84",
      sensorType: "relay",
      title: "Luz2",
      value: "off",
      status: "off",
      topic: "dispositivo/relay2",
      timestamp: "2025-06-06T17:40:00.000Z",
      isOnline: true,
      deviceName: "Luz Cocina",
    },
    {
      _id: "685d436ec3797ea98e2dfe85",
      sensorType: "relay",
      title: "Luz3",
      value: "on",
      status: "on",
      topic: "dispositivo/relay3",
      timestamp: "2025-06-06T17:40:45.000Z",
      isOnline: true,
      deviceName: "Luz Habitación",
    },
    {
      _id: "685d436ec3797ea98e2dfe86",
      sensorType: "temperature",
      title: "Temperatura",
      value: "23.5",
      status: "ok",
      topic: "dispositivo/temperatura",
      timestamp: "2025-06-06T17:41:20.000Z",
      isOnline: true,
      deviceName: "Sensor Temp",
    },
    {
      _id: "685d436ec3797ea98e2dfe87",
      sensorType: "humidity",
      title: "Humedad",
      value: "45%",
      status: "ok",
      topic: "dispositivo/humedad",
      timestamp: "2025-06-06T17:42:10.000Z",
      isOnline: true,
      deviceName: "Sensor Humedad",
    },
    {
      _id: "685d4385c3797ea98e2dfe88",
      sensorType: "relay",
      title: "Luz1",
      value: "on",
      status: "on",
      topic: "dispositivo/relay1",
      timestamp: "2025-06-06T17:39:13.000Z",
      isOnline: true,
      deviceName: "Luz Living",
    },
    {
      _id: "685d4385c3797ea98e2dfe89",
      sensorType: "relay",
      title: "Luz2",
      value: "off",
      status: "off",
      topic: "dispositivo/relay2",
      timestamp: "2025-06-06T17:40:00.000Z",
      isOnline: true,
      deviceName: "Luz Cocina",
    },
    {
      _id: "685d4385c3797ea98e2dfe8a",
      sensorType: "relay",
      title: "Luz3",
      value: "on",
      status: "on",
      topic: "dispositivo/relay3",
      timestamp: "2025-06-06T17:40:45.000Z",
      isOnline: true,
      deviceName: "Luz Habitación",
    },
    {
      _id: "685d4385c3797ea98e2dfe8b",
      sensorType: "temperature",
      title: "Temperatura",
      value: "23.5",
      status: "ok",
      topic: "dispositivo/temperatura",
      timestamp: "2025-06-06T17:41:20.000Z",
      isOnline: true,
      deviceName: "Sensor Temp",
    },
    {
      _id: "685d4385c3797ea98e2dfe8c",
      sensorType: "humidity",
      title: "Humedad",
      value: "45%",
      status: "ok",
      topic: "dispositivo/humedad",
      timestamp: "2025-06-06T17:42:10.000Z",
      isOnline: true,
      deviceName: "Sensor Humedad",
    },
    {
      _id: "685d44a7c3797ea98e2dfe8e",
      sensorType: "temperature",
      title: "Temperatura",
      value: "22.5",
      status: "ok",
      topic: "dispositivo/temperatura",
      timestamp: "2025-06-26T08:00:00.000Z",
      isOnline: true,
      deviceName: "Sensor Temp",
    },
    {
      _id: "685d44a7c3797ea98e2dfe8f",
      sensorType: "humidity",
      title: "Humedad",
      value: "47%",
      status: "ok",
      topic: "dispositivo/humedad",
      timestamp: "2025-06-26T08:00:05.000Z",
      isOnline: true,
      deviceName: "Sensor Humedad",
    },
    {
      _id: "685d44a7c3797ea98e2dfe90",
      sensorType: "temperature",
      title: "Temperatura",
      value: "23.1",
      status: "ok",
      topic: "dispositivo/temperatura",
      timestamp: "2025-06-26T10:00:00.000Z",
      isOnline: true,
      deviceName: "Sensor Temp",
    },
    {
      _id: "685d44a7c3797ea98e2dfe91",
      sensorType: "humidity",
      title: "Humedad",
      value: "50%",
      status: "ok",
      topic: "dispositivo/humedad",
      timestamp: "2025-06-26T10:00:05.000Z",
      isOnline: true,
      deviceName: "Sensor Humedad",
    },
    {
      _id: "685d44a7c3797ea98e2dfe92",
      sensorType: "temperature",
      title: "Temperatura",
      value: "24.0",
      status: "ok",
      topic: "dispositivo/temperatura",
      timestamp: "2025-06-26T12:00:00.000Z",
      isOnline: true,
      deviceName: "Sensor Temp",
    },
    {
      _id: "685d44a7c3797ea98e2dfe93",
      sensorType: "humidity",
      title: "Humedad",
      value: "53%",
      status: "ok",
      topic: "dispositivo/humedad",
      timestamp: "2025-06-26T12:00:05.000Z",
      isOnline: true,
      deviceName: "Sensor Humedad",
    },
    {
      _id: "685d44a7c3797ea98e2dfe94",
      sensorType: "temperature",
      title: "Temperatura",
      value: "23.2",
      status: "ok",
      topic: "dispositivo/temperatura",
      timestamp: "2025-06-26T14:00:00.000Z",
      isOnline: true,
      deviceName: "Sensor Temp",
    },
    {
      _id: "685d44a7c3797ea98e2dfe95",
      sensorType: "humidity",
      title: "Humedad",
      value: "49%",
      status: "ok",
      topic: "dispositivo/humedad",
      timestamp: "2025-06-26T14:00:05.000Z",
      isOnline: true,
      deviceName: "Sensor Humedad",
    },
    {
      _id: "685d44a7c3797ea98e2dfe96",
      sensorType: "temperature",
      title: "Temperatura",
      value: "22.0",
      status: "ok",
      topic: "dispositivo/temperatura",
      timestamp: "2025-06-26T16:00:00.000Z",
      isOnline: true,
      deviceName: "Sensor Temp",
    },
    {
      _id: "685d44a7c3797ea98e2dfe97",
      sensorType: "humidity",
      title: "Humedad",
      value: "46%",
      status: "ok",
      topic: "dispositivo/humedad",
      timestamp: "2025-06-26T16:00:05.000Z",
      isOnline: true,
      deviceName: "Sensor Humedad",
    },
  ];

  console.log("Messages:", messages);
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
            {messages?.map((sensor: Message) => (
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

export default Messages;
