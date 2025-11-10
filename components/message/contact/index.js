"use client";
import React, { useState } from "react";
import { Search, Video, Phone } from "lucide-react";

export default function ChatPage() {
  const [selectedChat, setSelectedChat] = useState(null);

  const contacts = [
    { id: 1, name: "Alex", avatar: "/images/educators/robert.jpg", lastMsg: "Hey there!" },
    { id: 2, name: "Emma", avatar: "/images/educators/linda.jpg", lastMsg: "See you soon!" },
    { id: 3, name: "Liam", avatar: "/images/educators/emily.jpg", lastMsg: "GG last match 🔥" },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* ===== LEFT SIDEBAR ===== */}
      <aside className="w-[350px] border-r border-gray-200 flex flex-col">
        {/* Search Bar */}
        <div className="p-4 border-b flex items-center gap-2">
          <input
            type="text"
            placeholder="Search contacts..."
            className="w-full px-3 py-2 border rounded-lg text-sm outline-none focus:border-green-400"
          />
          <Search size={18} className="text-gray-500" />
        </div>

        {/* New Group + Add Contact */}
        <div className="flex justify-between items-center px-4 py-3 border-b">
          <button className="px-4 py-2 bg-green-500 text-white rounded-lg text-sm hover:bg-green-600 transition">
            New Group
          </button>
          <button className="px-4 py-2 border border-green-500 text-green-600 rounded-lg text-sm hover:bg-green-50 transition">
            Add Contact
          </button>
        </div>

        {/* Contact List */}
        <div className="flex-1 overflow-y-auto">
          {contacts.map((contact) => (
            <div
              key={contact.id}
              onClick={() => setSelectedChat(contact)}
              className={`flex items-center gap-3 p-4 cursor-pointer transition ${
                selectedChat?.id === contact.id
                  ? "bg-green-100"
                  : "hover:bg-gray-100"
              }`}
            >
              <img
                src={contact.avatar}
                alt={contact.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="font-medium">{contact.name}</h3>
                <p className="text-sm text-gray-500 truncate w-[180px]">
                  {contact.lastMsg}
                </p>
              </div>
            </div>
          ))}
        </div>
      </aside>

      {/* ===== RIGHT CHAT AREA ===== */}
      <main className="flex-1 flex flex-col">
        {selectedChat ? (
          <>
            {/* Chat Header */}
            <div className="flex items-center justify-between p-4 border-b bg-white shadow-sm">
              <div className="flex items-center gap-3">
                <img
                  src={selectedChat.avatar}
                  alt={selectedChat.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-medium">{selectedChat.name}</h3>
                  <p className="text-xs text-gray-500">Online</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-gray-600">
                <Phone className="cursor-pointer hover:text-green-600" />
                <Video className="cursor-pointer hover:text-green-600" />
              </div>
            </div>

            {/* Chat Body */}
            <div className="flex-1 p-6 overflow-y-auto bg-white">
              <div className="text-gray-400 text-center mt-20">
                Start chatting with{" "}
                <span className="font-semibold text-gray-600">
                  {selectedChat.name}
                </span>
              </div>
            </div>

            {/* Chat Input */}
            <div className="p-4 border-t flex items-center gap-3 bg-white">
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-1 border rounded-lg px-3 py-2 outline-none focus:border-green-400"
              />
              <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition">
                Send
              </button>
            </div>
          </>
        ) : (
          <div className="flex items-center justify-center flex-1 text-gray-400">
            Select a contact to start chatting
          </div>
        )}
      </main>
    </div>
  );
}
