import { useMemo, useState } from "react";
import { useMessages } from "../../hooks/useMessages";
import { Message } from "../../types/message";
import SensorCard from "../SensorCard";
import SidebarMenu from "../SidebarMenu";
import React from "react";

const Dashboard: React.FC = () => {
  const [activeView, setActiveView] = useState("last-messages");
  // const { messages } = useMessages();
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

  // Filter data based on active view
  const filteredData = useMemo(() => {
    if (activeView === "last-messages") {
      // Sort messages by timestamp in descending order and take the last 10
      return messages
        .sort(
          (a, b) =>
            new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
        )
        .slice(0, 10);
    }
    return messages;
  }, [activeView, messages]);

  console.log("filteredData:", filteredData);

  const getViewTitle = () => {
    switch (activeView) {
      case "last-messages":
        return "Last Messages";
      case "all-devices":
        return "All Devices";
      case "send-message":
        return "Send Message";
      case "settings":
        return "Settings";
      default:
        return "Dashboard";
    }
  };

  const renderContent = () => {
    switch (activeView) {
      case "send-message":
        return;
      case "settings":
        return;
      case "logout":
        // Handle logout logic here
        return (
          <div className="text-center">
            <h2 className="text-white text-2xl font-bold mb-4">Logout</h2>
            <p className="text-gray-300 mb-6">
              Are you sure you want to logout?
            </p>
            <div className="space-x-4">
              <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md">
                Yes, Logout
              </button>
              <button
                onClick={() => setActiveView("all-devices")}
                className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-md"
              >
                Cancel
              </button>
            </div>
          </div>
        );
      case "all-devices":
        return (
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-white text-3xl font-bold">{getViewTitle()}</h1>
          </div>
        );

      case "last-messages":
        return (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-white text-3xl font-bold">
                {getViewTitle()}
              </h1>
              {activeView === "last-messages" && (
                <div className="text-green-400 text-sm">
                  Showing {filteredData.length} most recent messages
                </div>
              )}
            </div>

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
        );
      default:
        return (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-white text-3xl font-bold">
                {getViewTitle()}
              </h1>
              {activeView === "last-messages" && (
                <div className="text-green-400 text-sm">
                  Showing {messages.length} most recent messages
                </div>
              )}
            </div>

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
        );
    }
  };

  return (
    <div className="flex h-screen">
      <SidebarMenu activeView={activeView} onViewChange={setActiveView} />

      <div
        className="flex-1 overflow-y-auto overflow-x-hidden"
        style={{
          background: "linear-gradient(135deg, #0F160A 0%, #577C38 100%)",
        }}
      >
        <div className="p-8 max-w-7xl mx-auto">{renderContent()}</div>
      </div>
    </div>
  );
};

export default Dashboard;
