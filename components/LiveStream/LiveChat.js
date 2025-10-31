"use client";
import React, { useState } from "react";

export default function LiveChat() {
  const [messages, setMessages] = useState([
    { user: "Aisha", text: "Hello everyone! 👋" },
    { user: "Rahul", text: "This is so cool 🔥" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() === "") return;
    setMessages([...messages, { user: "You", text: input }]);
    setInput("");
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-5 h-[700px] flex flex-col">
      <h2 className="text-lg font-semibold mb-3">Live Chat</h2>

      <div className="flex-1 overflow-y-auto border rounded-md bg-gray-50 p-3 space-y-2">
        {messages.map((msg, i) => (
          <div key={i} className="text-sm">
            <span className="font-semibold text-blue-600">{msg.user}: </span>
            <span>{msg.text}</span>
          </div>
        ))}
      </div>

      <div className="flex mt-3 gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Say something..."
          className="flex-1 border rounded-md px-3 py-2 text-sm"
        />
        <button
          onClick={handleSend}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm"
        >
          Send
        </button>
      </div>
    </div>
  );
}
