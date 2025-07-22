import React from "react";

interface FilterButtonsProps {
  filters: { topic?: string; sensorType?: string };
  updateFilter: (key: string | number, value: string | number) => void;
}

const FilterButtons: React.FC<FilterButtonsProps> = ({
  filters,
  updateFilter,
}) => {
  const topics = [
    "dispositivo/temperatura",
    "dispositivo/relay1",
    "dispositivo/relay2",
  ];

  const sensorList = ["temperatura", "relay", "humedad"];

  return (
    <div className="flex gap-4 mb-6">
      {topics?.map((topic) => (
        <button
          key={topic}
          onClick={() => updateFilter("topic", topic)}
          className={`px-4 py-2 rounded-md ${
            filters.topic === topic
              ? "bg-green-600 text-white"
              : "bg-gray-600 text-gray-300"
          } hover:bg-green-700 transition-colors`}
        >
          {topic}
        </button>
      ))}

      {sensorList?.map((sensor) => (
        <button
          key={sensor}
          onClick={() => updateFilter("topic", sensor)}
          className={`px-4 py-2 rounded-md ${
            filters.sensorType === sensor
              ? "bg-green-600 text-white"
              : "bg-gray-600 text-gray-300"
          } hover:bg-green-700 transition-colors`}
        >
          {sensor}
        </button>
      ))}
      <button
        onClick={() => updateFilter("topic", "")} // Clear filter
        className="px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 transition-colors"
      >
        Clear Filter
      </button>
    </div>
  );
};

export default FilterButtons;
