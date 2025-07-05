import React from "react";

interface MessageTypeSelectorProps {
  messageType: string;
  setMessageType: (messageType: string) => void;
}

const MessageTypeSelector: React.FC<MessageTypeSelectorProps> = ({
  messageType,
  setMessageType,
}) => {
  return (
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
  );
};

export default MessageTypeSelector;
