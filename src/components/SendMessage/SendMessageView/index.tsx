import React, { useState } from "react";
import TopicInput from "../TopicInput";
import MessageTypeSelector from "../MessageTypeSelector";
import MessageInput from "../MessageInput";
import QuickCommands from "../QuickCommands";
import { usePostMessage } from "../../../hooks/usePostMessage";

const SendMessageView: React.FC = () => {
  const [topic, setTopic] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("text");
  const { postMessage, isLoading, isSuccess, isError, error, response } =
    usePostMessage();

  const handleSendMessage = () => {
    if (!topic || !message) {
      alert("Please fill in both topic and message fields");
      return;
    }

    postMessage(
      { topic, message },
      {
        onSuccess: (topic, message) => {
          alert(`Message sent successfully to ${topic}: ${message}`);
          setTopic("");
          setMessage("");
        },
        onError: (err) => {
          console.error("Failed to send message:", err);
          alert("Failed to send the message. Please try again.");
        },
      }
    );
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
          {response && <h1>{response}</h1>}
        </div>
      </div>

      <QuickCommands setTopic={setTopic} setMessage={setMessage} />
    </div>
  );
};

export default SendMessageView;
