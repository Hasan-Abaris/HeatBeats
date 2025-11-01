"use client";
import React, { useState } from "react";
import { Send } from "lucide-react";

export default function LiveChat() {
  const [messages, setMessages] = useState([
    { user: "Aisha", text: "Hello everyone! 👋" },
    { user: "Rahul", text: "This is awesome 🔥" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { user: "You", text: input }]);
    setInput("");
  };

  return (
    <div className="bg-white rounded-xl border shadow-sm p-5 h-[700px] flex flex-col">
      <h2 className="text-lg font-semibold mb-3">Live Chat</h2>

      {/* Chat messages */}
      <div className="flex-1 overflow-y-auto border rounded-md bg-gray-50 p-3 space-y-2">
        {messages.map((msg, i) => (
          <div key={i} className="text-sm">
            <span className="font-semibold text-red-600">{msg.user}: </span>
            <span>{msg.text}</span>
          </div>
        ))}
      </div>

      {/* Chat input */}
      <div className="flex mt-3 gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Say something..."
          className="flex-1 border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-red-500 outline-none"
        />
        <button
          onClick={handleSend}
          className="flex items-center gap-1 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium"
        >
          <Send size={14} />
          Send
        </button>
      </div>
    </div>
  );
}
