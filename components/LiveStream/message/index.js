"use client";
import React, { useState } from "react";

const messages = [
  {
    name: "Kevin Temple",
    img: "https://reelboost.online/uploads/avatar/male-avatar-5.png",
    time: "12:30 pm",
    text: "Deal 🤝 , This time we pack more snacks before reaching the hills 😁😄",
  },
  {
    name: "Jane Williams",
    img: "https://reelboost.online/uploads/profile_pic/female-3.jpg",
    time: "04:40 pm",
    text: "Haha that looks fun. Let’s book tickets! 🎬",
  },
  {
    name: "Martha Beth",
    img: "https://reelboost.online/uploads/profile_pic/female-1.jpg",
    time: "04:14 pm",
    text: "That’s awesome! We can show this in class 👏🔥",
  },
  {
    name: "James Deep",
    img: "https://reelboost.online/uploads/profile_pic/male-2.jpg",
    time: "05:52 pm",
    text: "That’s awesome 😍 Let’s play it at the party tomorrow!",
  },
  {
    name: "Thomas Martin",
    img: "https://reelboost.online/uploads/profile_pic/male-4.jpg",
    time: "05:23 pm",
    text: "That’s a great resource 👏. Good job!",
  },
];

export default function Messagepage() {
  const [activeChat, setActiveChat] = useState(messages[0]);
  const [input, setInput] = useState("");
  const [chatHistory, setChatHistory] = useState([
    { sender: "them", text: "Hey there! 👋" },
    { sender: "me", text: "Hey Kevin! How’s it going?" },
  ]);

  const sendMessage = () => {
    if (input.trim() === "") return;
    setChatHistory([...chatHistory, { sender: "me", text: input }]);
    setInput("");
  };

  return (
    <div className="flex h-[calc(100vh-100px)] bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
      {/* ==== Left Side (Chat List) ==== */}
      <div className="w-full md:w-1/3 border-r flex flex-col bg-white">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b bg-gray-50 sticky top-0">
          <h2 className="text-lg font-semibold text-gray-800">Chats</h2>
        </div>

        {/* Search */}
        <div className="relative p-3 border-b">
          <input
            type="text"
            placeholder="Search for a User"
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-600 text-sm"
          />
          <img
            src="/SidebarIcons/search.png"
            alt="Search"
            className="absolute left-6 top-1/2 transform -translate-y-1/2 w-5 h-5 opacity-70"
          />
        </div>

        {/* Chat List */}
        <div className="overflow-y-auto flex-grow">
          {messages.map((msg) => (
            <div
              key={msg.name}
              onClick={() => {
                setActiveChat(msg);
                setChatHistory([
                  { sender: "them", text: msg.text },
                  { sender: "me", text: "Sounds great 😄!" },
                ]);
              }}
              className={`flex gap-3 items-center p-4 border-b border-gray-100 cursor-pointer transition-all ${
                activeChat.name === msg.name ? "bg-green-50" : "hover:bg-gray-50"
              }`}
            >
              <img
                src={msg.img}
                alt={msg.name}
                className="w-[44px] h-[44px] rounded-full object-cover"
              />
              <div className="flex flex-col flex-grow overflow-hidden">
                <div className="flex justify-between items-center">
                  <h3 className="text-sm font-semibold text-gray-800 truncate">
                    {msg.name}
                  </h3>
                  <p className="text-[10px] text-gray-500">{msg.time}</p>
                </div>
                <p className="text-xs text-gray-500 truncate">{msg.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ==== Right Side (Chat Box) ==== */}
      <div className="hidden md:flex flex-col flex-grow bg-gray-50">
        {/* Chat Header */}
        <div className="flex items-center gap-3 p-4 border-b bg-white">
          <img
            src={activeChat.img}
            alt={activeChat.name}
            className="w-[40px] h-[40px] rounded-full object-cover"
          />
          <div>
            <h3 className="text-sm font-semibold text-gray-800">
              {activeChat.name}
            </h3>
            <p className="text-xs text-gray-500">Online</p>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex flex-col flex-grow p-4 space-y-3 overflow-y-auto">
          {chatHistory.map((msg, i) => (
            <div
              key={i}
              className={`flex ${
                msg.sender === "me" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`px-4 py-2 rounded-2xl text-sm max-w-xs ${
                  msg.sender === "me"
                    ? "bg-green-600 text-white"
                    : "bg-white border"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="p-4 border-t bg-white flex items-center gap-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-grow border border-gray-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-green-600"
          />
          <button
            onClick={sendMessage}
            className="bg-green-600 text-white px-4 py-2 rounded-full text-sm hover:bg-green-700"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
