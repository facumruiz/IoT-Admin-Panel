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
    { value: "", label: "All Topics" },
    { value: "dispositivo/temperatura", label: "Temperature" },
    { value: "dispositivo/humedad", label: "Humidity" },
    { value: "dispositivo/relay1", label: "Relay 1" },
    { value: "dispositivo/relay2", label: "Relay 2" },
    { value: "dispositivo/relay3", label: "Relay 3" },
  ];

  const sensorList = ["temperature", "relay", "humidity"];

  const clearFilters = () => {
    updateFilter("topic", "");
    updateFilter("sensorType", "");
  };

  const handleTopicChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedTopic = e.target.value;
    // Clear sensorType only if a topic is selected (not "All Topics")
    if (selectedTopic) {
      updateFilter("sensorType", "");
    }
    updateFilter("topic", selectedTopic);
  };

  const handleSensorClick = (sensor: string) => {
    // Clear topic only if selecting a different sensor
    if (filters.sensorType !== sensor) {
      updateFilter("topic", "");
    }
    // Toggle sensor selection
    updateFilter("sensorType", filters.sensorType === sensor ? "" : sensor);
  };

  // Standardized dimensions
  const controlHeight = "h-10";
  const controlPadding = "px-4 py-2";
  const controlWidth = "min-w-[50px]";

  return (
    <div className="flex flex-wrap items-end gap-3 mb-6">
      {/* Topic filter */}
      <div className="flex flex-col gap-1">
        <label
          htmlFor="topic-filter"
          className="text-sm font-medium text-gray-300"
        >
          Filter by Topic
        </label>
        <div className={`relative ${controlWidth}`}>
          <select
            id="topic-filter"
            value={filters.topic || ""}
            onChange={handleTopicChange}
            className={`${controlHeight} ${controlPadding} ${controlWidth} appearance-none w-full rounded-md border-2 bg-gray-800 text-white border-gray-600 hover:border-emerald-600 focus:border-emerald-600 focus:outline-none transition-colors cursor-pointer`}
          >
            {topics.map((topic) => (
              <option
                key={topic.value}
                value={topic.value}
                className="bg-gray-800"
              >
                {topic.label}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Sensor type filters */}
      <div className="flex flex-col gap-1">
        <span className="text-sm font-medium text-gray-300">
          Filter by Sensor Type
        </span>
        <div className="flex flex-wrap gap-2">
          {sensorList.map((sensor) => (
            <button
              key={sensor}
              onClick={() => handleSensorClick(sensor)}
              className={`${controlHeight} ${controlPadding} ${controlWidth} rounded-md border-2 ${
                filters.sensorType === sensor
                  ? "border-emerald-600 bg-emerald-600 text-white"
                  : "border-gray-600 text-gray-300 hover:border-emerald-600 hover:text-white"
              } transition-colors text-center`}
            >
              {sensor.charAt(0).toUpperCase() + sensor.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Clear filters button */}
      <div className="flex flex-col gap-1">
        <span className="text-sm font-medium text-gray-300">
          Remove all filters
        </span>
        <button
          onClick={clearFilters}
          className={`${controlHeight} ${controlPadding} ${controlWidth} rounded-md border-2 border-gray-600 text-white hover:bg-red-700 hover:border-red-700 transition-colors`}
        >
          Clear Filters
        </button>
      </div>
    </div>
  );
};

export default FilterButtons;
