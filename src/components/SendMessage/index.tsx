import React from "react";
import { useState } from "react";

const SendMessageView: React.FC = () => {
  const [topic, setTopic] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("text");

  const handleSendMessage = () => {
    if (!topic || !message) {
      alert("Please fill in both topic and message fields");
      return;
    }

    // Here you would implement your MQTT publishing logic
    console.log("Sending message:", { topic, message, messageType });
    alert(`Message sent to ${topic}: ${message}`);

    // Clear form
    setTopic("");
    setMessage("");
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-white text-2xl font-bold mb-6">
        Send Message to Device
      </h2>

      <div className="bg-black border border-green-400 rounded-lg p-6">
        <div className="space-y-4">
          {/* Topic Input */}
          <div>
            <label className="block text-green-400 text-sm font-medium mb-2">
              Topic
            </label>
            <input
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="dispositivo/relay1"
              className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:outline-none focus:border-green-400"
            />
          </div>

          {/* Message Type */}
          <div>
            <label className="block text-green-400 text-sm font-medium mb-2">
              Message Type
            </label>
            <select
              value={messageType}
              onChange={(e) => setMessageType(e.target.value)}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:outline-none focus:border-green-400"
            >
              <option value="text">Text</option>
              <option value="json">JSON</option>
              <option value="command">Command</option>
            </select>
          </div>

          {/* Message Input */}
          <div>
            <label className="block text-green-400 text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter your message here..."
              rows={4}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:outline-none focus:border-green-400 resize-none"
            />
          </div>

          {/* Send Button */}
          <button
            onClick={handleSendMessage}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
          >
            Send Message
          </button>
        </div>
      </div>

      {/* Quick Commands */}
      <div className="mt-6">
        <h3 className="text-white text-lg font-semibold mb-4">
          Quick Commands
        </h3>
        <div className="grid grid-cols-2 gap-3">
          {[
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
          ].map((cmd, index) => (
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
    </div>
  );
};

export default SendMessageView;
