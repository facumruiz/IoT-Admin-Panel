import React from "react";
import { useMessages } from "../../hooks/useMessages";
import SidebarMenu from "../SidebarMenu";
import IoTDeviceTable from "../IoTDeviceTable";
import SendMessageView from "../SendMessage/SendMessageView";
import RecievedMessages from "../RecieveMessages";
import SettingsView from "../SettingsView";
import Loader from "../commons/Loader";
import { useDashboardContext } from "../../context/DashboardContext";
import FilterButtons from "../commons/FilterButtons";

const Dashboard: React.FC = () => {
  const { activeView, setActiveView, filters, setFilters } =
    useDashboardContext();

  const updateFilter = (filterType: "topic" | "sensorType", value: string) => {
    setFilters({
      ...filters,
      topic: filterType === "topic" ? value : "", // Clear topic if selecting sensorType
      sensorType: filterType === "sensorType" ? value : "", // Clear sensorType if selecting topic
    });
  };

  const { messages, pagination, loading, error } = useMessages(filters);

  console.log("Messages:", messages);

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
        return "Last Messages";
    }
  };

  const renderContent = () => {
    switch (activeView) {
      case "send-message":
        return (
          <div>
            <SendMessageView />;
          </div>
        );

      case "settings":
        return <SettingsView />;

      case "logout":
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
          <>
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-white text-2xl font-bold">
                {getViewTitle()}
              </h1>
            </div>
            <div className="p-6 min-h-screen">
              <IoTDeviceTable devices={messages} />
            </div>
          </>
        );

      case "last-messages":
        return (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-white text-2xl font-bold">
                {getViewTitle()}
              </h1>
              {activeView === "last-messages" && (
                <div className="text-green-400 text-sm">
                  Showing {messages.length} most recent messages
                </div>
              )}
            </div>
            <FilterButtons filters={filters} updateFilter={updateFilter} />;
            <RecievedMessages messages={messages} />
          </div>
        );

      default:
        return (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-white text-2xl font-bold">
                {getViewTitle()}
              </h1>
              {activeView === "last-messages" && (
                <div className="text-green-400 text-sm">
                  Showing {messages.length} most recent messages
                </div>
              )}
            </div>
            <FilterButtons filters={filters} updateFilter={updateFilter} />;
            <RecievedMessages messages={messages} />
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
        {loading && <Loader />}
      </div>
    </div>
  );
};

export default Dashboard;
