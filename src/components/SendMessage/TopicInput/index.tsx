import React from "react";

interface TopicInputProps {
  topic: string;
  setTopic: (topic: string) => void;
}

const TopicInput: React.FC<TopicInputProps> = ({ topic, setTopic }) => {
  return (
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
  );
};

export default TopicInput;
