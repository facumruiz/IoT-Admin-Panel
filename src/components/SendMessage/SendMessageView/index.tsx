import React, { useState } from "react";
import TopicInput from "../TopicInput";
import MessageTypeSelector from "../MessageTypeSelector";
import MessageInput from "../MessageInput";
import QuickCommands from "../QuickCommands";

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
          <TopicInput topic={topic} setTopic={setTopic} />
          <MessageTypeSelector
            messageType={messageType}
            setMessageType={setMessageType}
          />
          <MessageInput message={message} setMessage={setMessage} />

          <button
            onClick={handleSendMessage}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
          >
            Send Message
          </button>
        </div>
      </div>

      <QuickCommands setTopic={setTopic} setMessage={setMessage} />
    </div>
  );
};

export default SendMessageView;
