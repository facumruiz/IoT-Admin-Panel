import React from "react";

interface Props {
  setActiveView: React.Dispatch<React.SetStateAction<string>>;
}

const Logout = ({ setActiveView }) => {
  return (
    <div className="text-center">
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
  );
};

export default index;
