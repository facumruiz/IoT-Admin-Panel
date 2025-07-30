import React, { useState } from "react";
import { useActivateSystem } from "../../hooks/useActivateSystem";

const ToggleSystem = () => {
  const { postMessage, isLoading, isPending } = useActivateSystem();
  const [isOn, setIsOn] = useState(false);

  const handleToggle = async () => {
    const newState = !isOn;

    try {
      await postMessage(
        { state: newState ? "on" : "off" },
        {
          onSuccess: () => {
            setIsOn(newState);
            alert(`System turned ${newState ? "ON" : "OFF"} successfully`);
          },
          onError: (err) => {
            console.error("Failed to send message:", err);
            alert("Failed to update system state. Please try again.");
          },
        }
      );
    } catch (error) {
      console.error("Error:", error);
    } finally {
    }
  };

  return (
    <div>
      <label className="inline-flex items-center me-5 cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={isOn}
          onChange={handleToggle}
          disabled={isPending}
        />
        <div
          className={`relative w-11 h-6 rounded-full peer 
          ${isOn ? "bg-green-600" : "bg-gray-200 dark:bg-gray-700"}
          peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800
          ${isLoading ? "opacity-50" : ""}`}
        >
          <div
            className={`absolute top-0.5 start-[2px] bg-white border border-gray-300 rounded-full h-5 w-5 transition-all
            ${isOn ? "translate-x-full rtl:-translate-x-full border-white" : ""}
            ${isLoading ? "opacity-70" : ""}`}
          ></div>
        </div>
      </label>
    </div>
  );
};

export default ToggleSystem;
