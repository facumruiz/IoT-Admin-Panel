import React from "react";

interface FilterButtonsProps {
  filters: { topic?: string; sensorType?: string };
  updateFilter: (filterType: "topic" | "sensorType", value: string) => void;
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

  const sensorList = ["temperature", "relays", "humidity"];

  const clearFilters = () => {
    updateFilter("topic", ""); // This will clear both through the Dashboard's updateFilter
  };

  return (
    <div className="flex gap-4 mb-6">
      {/* Topic filters */}

      {topics?.map((topic) => (
        <button
          key={topic}
          onClick={() => updateFilter("topic", topic)}
          className={`px-4 py-2 rounded-md ${
            filters.topic === topic
              ? "border-emerald-600 border-2 text-white"
              : "border-gray-600 border-2 text-gray-300"
          } hover:bg-green-600 hover:text-white transition-colors`}
        >
          {topic}
        </button>
      ))}

      {/* Sensor type filters */}
      {sensorList?.map((sensor) => (
        <button
          key={sensor}
          onClick={() => updateFilter("sensorType", sensor)}
          className={`px-4 py-2  rounded-md ${
            filters.sensorType === sensor
              ? "border-emerald-600 border-2 text-white"
              : "border-gray-600 border-2 text-gray-300"
          } hover:bg-green-600 hover:text-white transition-colors`}
        >
          {sensor}
        </button>
      ))}

      <button
        onClick={clearFilters}
        className="px-4 py-2 rounded-md border-gray-600 border-2 text-white hover:bg-red-700 transition-colors"
      >
        Clear Filter
      </button>
    </div>
  );
};

export default FilterButtons;
