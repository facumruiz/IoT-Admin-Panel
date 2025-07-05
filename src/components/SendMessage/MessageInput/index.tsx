import React from "react";

interface MessageInputProps {
  message: string;
  setMessage: (message: string) => void;
}

const MessageInput: React.FC<MessageInputProps> = ({ message, setMessage }) => {
  return (
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
  );
};

export default MessageInput;
