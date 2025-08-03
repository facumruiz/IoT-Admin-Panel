import React, { useState } from "react";
import TopicInput from "../TopicInput";
import MessageTypeSelector from "../MessageTypeSelector";
import MessageInput from "../MessageInput";
import QuickCommands from "../QuickCommands";
import { usePostMessage } from "../../../hooks/usePostMessage";
import useToast from "../../../hooks/useToast";
import Loader from "../../commons/Loader";

const SendMessageView: React.FC = () => {
  const [topic, setTopic] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("text");
  const {
    postMessage,
    isLoading,
    isSuccess,
    isError,
    error,
    response,
    isPending,
  } = usePostMessage();
  const { showToast } = useToast();

  const handleSendMessage = () => {
    if (!topic || !message) {
      showToast("Please fill in both topic and message fields", "error", {
        position: "bottom-center",
        autoClose: 5000,
        theme: "light",
      });
      return;
    }

    postMessage(
      { topic, message },
      {
        onSuccess: (topic, message) => {
          showToast(
            `Message sent successfully to ${topic}: ${message}`,
            "success",
            {
              position: "bottom-right",
              autoClose: 5000,
              theme: "light",
            }
          );
          setTopic("");
          setMessage("");
        },
        onError: (err) => {
          showToast(`Failed to send message: ${err}`, "error", {
            position: "bottom-right",
            autoClose: 5000,
            theme: "light",
          });
        },
      }
    );
  };

  return (
    <div className="flex h-screen">
      <div
        className="flex-1 overflow-y-auto overflow-x-hidden"
        style={{
          background: "linear-gradient(135deg, #0F160A 0%, #577C38 100%)",
        }}
      >
        <div className="max-w-2xl mx-auto  justify-center p-8">
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

              {isPending && <Loader />}

              <button
                onClick={handleSendMessage}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
              >
                Send Message
              </button>
            </div>
          </div>
          <QuickCommands setTopic={setTopic} setMessage={setMessage} />^
        </div>
      </div>
    </div>
  );
};

export default SendMessageView;
