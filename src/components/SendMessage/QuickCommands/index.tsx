import React from "react";

interface QuickCommandsProps {
  setTopic: (topic: string) => void;
  setMessage: (message: string) => void;
}

const QuickCommands: React.FC<QuickCommandsProps> = ({
  setTopic,
  setMessage,
}) => {
  const commands = [
    {
      label: "Turn On Relay 1",
      topic: "dispositivo/relay1",
      message: "on",
    },
    {
      label: "Turn Off Relay 1",
      topic: "dispositivo/relay1",
      message: "off",
    },
    {
      label: "Get Temperature",
      topic: "dispositivo/temperatura",
      message: "read",
    },
    {
      label: "Get Humidity",
      topic: "dispositivo/humedad",
      message: "read",
    },
  ];

  return (
    <div className="mt-6">
      <h3 className="text-white text-lg font-semibold mb-4">Quick Commands</h3>
      <div className="grid grid-cols-2 gap-3">
        {commands.map((cmd, index) => (
          <button
            key={index}
            onClick={() => {
              setTopic(cmd.topic);
              setMessage(cmd.message);
            }}
            className="bg-gray-800 hover:bg-gray-700 border border-green-400 text-white text-sm py-2 px-3 rounded-md transition-colors duration-200"
          >
            {cmd.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickCommands;
