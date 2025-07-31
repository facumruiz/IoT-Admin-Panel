import React from "react";
import { useDashboardContext } from "../../context/DashboardContext";

const Logout = () => {
  const { setActiveView } = useDashboardContext();

  return (
    <div className="flex h-screen">
      <div
        className="flex-1 overflow-y-auto overflow-x-hidden"
        style={{
          background: "linear-gradient(135deg, #0F160A 0%, #577C38 100%)",
        }}
      >
        <div className="text-center justify-center p-8">
          <h2 className="text-white text-2xl font-bold mb-4">Logout</h2>
          <p className="text-gray-300 mb-6">Are you sure you want to logout?</p>
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
      </div>
    </div>
  );
};

export default Logout;
