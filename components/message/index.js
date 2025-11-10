"use client";
import { useState } from "react";
import Image from "next/image";
import { Phone, Video, Send, Search, ArrowLeft } from "lucide-react";

export default function ChatList() {
  const chats = [
    {
      id: 1,
      name: "Alex",
      message: "Hey, how’s it going?",
      time: "10:45 AM",
      avatar: "/images/educators/sara.jpg",
    },
    {
      id: 2,
      name: "Emma",
      message: "Let’s play tonight!",
      time: "9:20 AM",
      avatar: "/images/educators/emily.jpg",
    },
    {
      id: 3,
      name: "Liam",
      message: "GG last match 🔥",
      time: "Yesterday",
      avatar: "/images/educators/olivia.jpg",
    },
  ];

  const [selectedChat, setSelectedChat] = useState(null);
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!message.trim()) return;
    alert(`Message sent to ${selectedChat.name}: ${message}`);
    setMessage("");
  };

  return (
    <div className="flex h-[calc(100vh-10px)] bg-gray-50 rounded-xl shadow-md overflow-hidden">
      {/* ===== LEFT CHAT LIST (Whoxa style) ===== */}
      <div className="w-1/3 border-r border-gray-200 bg-white flex flex-col">
        {/* Header */}
        <div className="flex items-center gap-3 px-4 py-6 border-b border-gray-200">
          <ArrowLeft className="cursor-pointer" />
          <h2 className="text-lg font-semibold">Chats</h2>
        </div>

        {/* Search Bar */}
        <div className="relative px-4 py-3 border-b border-gray-200">
          <Search className="absolute left-7 top-[22px] text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search User"
            className="w-full rounded-xl bg-gray-100 py-2 pl-9 pr-3 text-sm text-gray-700 outline-none placeholder-gray-400"
          />
        </div>

        {/* Chat List */}
        <div className="flex-1 overflow-y-auto">
          {chats.map((chat) => (
            <div
              key={chat.id}
              onClick={() => setSelectedChat(chat)}
              className={`flex items-center justify-between px-4 py-3 cursor-pointer transition-all duration-200 border-b border-gray-100 ${
                selectedChat?.id === chat.id ? "bg-blue-100" : "hover:bg-gray-50"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12">
                  <Image
                    src={chat.avatar}
                    alt={chat.name}
                    fill
                    className="rounded-full object-cover border border-gray-300"
                  />
                </div>
                <div>
                  <h3 className="text-base font-medium text-gray-900">{chat.name}</h3>
                  <p className="text-gray-500 text-sm truncate w-[160px]">{chat.message}</p>
                </div>
              </div>
              <span className="text-xs text-gray-400 whitespace-nowrap">{chat.time}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ===== RIGHT CHAT BOX ===== */}
      <div className="flex-1 flex flex-col bg-white">
        {selectedChat ? (
          <>
            {/* Chat Header */}
            <div className="flex justify-between items-center border-b border-gray-200 p-4 bg-gray-50">
              <div className="flex items-center gap-3">
                <Image
                  src={selectedChat.avatar}
                  alt={selectedChat.name}
                  width={44}
                  height={44}
                  className="rounded-full"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {selectedChat.name}
                  </h3>
                  <p className="text-sm text-green-500">Online</p>
                </div>
              </div>
              <div className="flex gap-4 text-gray-600">
                <button className="hover:text-blue-500">
                  <Phone size={22} />
                </button>
                <button className="hover:text-blue-500">
                  <Video size={22} />
                </button>
              </div>
            </div>

            {/* Chat Messages Area */}
            <div className="flex-1 p-6 overflow-y-auto bg-gray-50">
              <div className="flex flex-col gap-4">
                <div className="self-start bg-gray-200 text-gray-800 px-4 py-2 rounded-2xl max-w-xs">
                  {selectedChat.message}
                </div>
                <div className="self-end bg-blue-500 text-white px-4 py-2 rounded-2xl max-w-xs">
                  Sounds good!
                </div>
              </div>
            </div>

            {/* Chat Input */}
            <div className="flex items-center gap-3 p-4 border-t border-gray-200 bg-white">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 p-3 border rounded-full outline-none focus:ring-2 focus:ring-blue-400"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button
                onClick={handleSend}
                className="bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transition-all duration-200"
              >
                <Send size={20} />
              </button>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-gray-400">
            <Image
              src="/images/chat/start.png"
              alt="Start Chat"
              width={180}
              height={180}
              className="opacity-80"
            />
            <p className="mt-4 text-lg font-medium">
              Select a chat to start conversation
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
