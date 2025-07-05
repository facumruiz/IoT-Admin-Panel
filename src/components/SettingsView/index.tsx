import React from "react";

const SettingsView: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-white text-2xl font-bold mb-6">Settings</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* MQTT Settings */}
        <div className="bg-black border border-green-400 rounded-lg p-6">
          <h3 className="text-green-400 text-lg font-semibold mb-4">
            MQTT Configuration
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-white text-sm mb-2">
                Broker URL
              </label>
              <input
                type="text"
                defaultValue="mqtt://localhost:1883"
                className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white"
              />
            </div>
            <div>
              <label className="block text-white text-sm mb-2">Username</label>
              <input
                type="text"
                className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white"
              />
            </div>
            <div>
              <label className="block text-white text-sm mb-2">Password</label>
              <input
                type="password"
                className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white"
              />
            </div>
          </div>
        </div>

        {/* Display Settings */}
        <div className="bg-black border border-green-400 rounded-lg p-6">
          <h3 className="text-green-400 text-lg font-semibold mb-4">
            Display Settings
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-white">Auto-refresh data</span>
              <input type="checkbox" className="w-4 h-4" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-white">Show timestamps</span>
              <input type="checkbox" className="w-4 h-4" defaultChecked />
            </div>
            <div>
              <label className="block text-white text-sm mb-2">
                Refresh interval (seconds)
              </label>
              <input
                type="number"
                defaultValue="5"
                className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsView;
