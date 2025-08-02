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
      label: "Get Temperature",
      topic: "dispositivo/temperatura",
      message: "read",
    },
    {
      label: "Get Humidity",
      topic: "dispositivo/humedad",
      message: "read",
    },
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
      label: "Turn On Relay 2",
      topic: "dispositivo/relay2",
      message: "on",
    },
    {
      label: "Turn Off Relay 2",
      topic: "dispositivo/relay2",
      message: "off",
    },

    {
      label: "Turn On Relay 3",
      topic: "dispositivo/relay3",
      message: "on",
    },
    {
      label: "Turn Off Relay 3",
      topic: "dispositivo/relay3",
      message: "off",
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
            className="h-10 px-4 py-2 min-w-[160px] text-center hover:border-emerald-600 bg-gray-900  border-gray-600 border-2  text-white text-sm  rounded-md transition-colors duration-200"
          >
            {cmd.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickCommands;
