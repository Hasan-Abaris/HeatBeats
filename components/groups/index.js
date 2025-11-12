"use client";
import React, { useState } from "react";
import {
  Users,
  MessageSquare,
  Trophy,
  Gamepad2,
  Star,
  Settings,
  LogOut,
  PlusCircle,
} from "lucide-react";

export default function Groups() {
  const [activeTab, setActiveTab] = useState("groups");

  const groups = [
    {
      name: "Battle Squad",
      members: 128,
      posts: 542,
      activity: "Active Now",
      icon: "https://cdn-icons-png.flaticon.com/512/1055/1055646.png",
      badge: "🔥 Top Tier Team",
    },
    {
      name: "Game Devs United",
      members: 59,
      posts: 194,
      activity: "1 hour ago",
      icon: "https://cdn-icons-png.flaticon.com/512/2920/2920244.png",
      badge: "💻 Developers Lounge",
    },
    {
      name: "Streamers Hub",
      members: 200,
      posts: 673,
      activity: "5 mins ago",
      icon: "https://cdn-icons-png.flaticon.com/512/924/924915.png",
      badge: "🎥 Trending Group",
    },
    {
      name: "eSports Legends",
      members: 350,
      posts: 823,
      activity: "Today",
      icon: "https://cdn-icons-png.flaticon.com/512/727/727245.png",
      badge: "🏆 Tournament Winners",
    },
  ];

  const myGroups = [
    {
      name: "HeatsBeasts Core Team",
      members: 40,
      posts: 320,
      role: "Admin",
      icon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
      badge: "⚡ Official Crew",
    },
    {
      name: "Gamers Lounge",
      members: 180,
      posts: 482,
      role: "Member",
      icon: "https://cdn-icons-png.flaticon.com/512/2920/2920345.png",
      badge: "🎮 Friendly Zone",
    },
  ];

  const renderGroupCard = (g, isMyGroup = false) => (
    <div
      key={g.name}
      className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-emerald-600/40 hover:-translate-y-2 transition-all duration-300 border border-gray-800/50 relative"
    >
      {/* Group Header */}
      <div className="flex items-center gap-4 mb-4">
        <img
          src={g.icon}
          alt={g.name}
          className="w-14 h-14 rounded-full bg-gray-800 p-2"
        />
        <div>
          <h2 className="text-lg font-semibold text-white">{g.name}</h2>
          <p className="text-sm text-gray-400">{g.members} Members</p>
        </div>
      </div>

      {/* Group Stats */}
      <div className="flex justify-between text-sm text-gray-300 mb-3">
        <span className="flex items-center gap-1">
          <MessageSquare size={15} className="text-emerald-400" />
          {g.posts} Posts
        </span>
        <span className="flex items-center gap-1">
          <Gamepad2 size={15} className="text-green-400" />
          {g.activity || g.role}
        </span>
      </div>

      {/* Badge */}
      <div className="text-xs text-emerald-300 italic mb-4">{g.badge}</div>

      {/* Buttons */}
      {!isMyGroup ? (
        <button className="w-full py-2 bg-gradient-to-r from-emerald-500 to-green-600 text-white font-semibold rounded-lg hover:opacity-90 transition-all">
          Join Group
        </button>
      ) : (
        <div className="flex gap-2">
          <button className="flex-1 py-2 bg-emerald-600 text-white text-sm rounded-lg hover:bg-emerald-500 transition">
            View Posts
          </button>
          <button className="flex-1 py-2 bg-gray-800 text-gray-300 text-sm rounded-lg hover:bg-red-600 hover:text-white transition">
            Leave
          </button>
        </div>
      )}

      {/* Trophy/Icon */}
      <Trophy
        size={22}
        className="absolute top-4 right-4 text-emerald-400/60"
      />
    </div>
  );

  return (
    <div className="min-h-screen mt-8 mb-12">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="flex justify-center items-center gap-3 mb-3">
          <Users size={34} className="text-emerald-400" />
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-emerald-400 to-green-600 bg-clip-text text-transparent">
            Groups
          </h1>
        </div>
        <p className="text-gray-400 max-w-xl mx-auto">
          Connect with like-minded gamers, share strategies, and join exclusive
          HeatsBeasts groups!
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center mb-8">
        <div className="bg-gray-800/60 rounded-full p-1 flex">
          <button
            onClick={() => setActiveTab("groups")}
            className={`px-5 py-2 rounded-full text-sm font-medium transition ${
              activeTab === "groups"
                ? "bg-gradient-to-r from-emerald-500 to-green-600 text-white"
                : "text-gray-300 hover:text-white"
            }`}
          >
            🌍 Explore Groups
          </button>
          <button
            onClick={() => setActiveTab("myGroups")}
            className={`px-5 py-2 rounded-full text-sm font-medium transition ${
              activeTab === "myGroups"
                ? "bg-gradient-to-r from-emerald-500 to-green-600 text-white"
                : "text-gray-300 hover:text-white"
            }`}
          >
            ⭐ My Groups List
          </button>
        </div>
      </div>

      {/* Tab Content */}
      {activeTab === "groups" ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((g) => renderGroupCard(g))}
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {myGroups.map((g) => renderGroupCard(g, true))}
        </div>
      )}

      {/* CTA */}
      <div className="text-center mt-16">
        <button className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-green-600 text-white font-semibold rounded-lg hover:opacity-90 transition-all shadow-lg flex items-center gap-2 mx-auto">
          <PlusCircle size={20} /> Create New Group
        </button>
      </div>
    </div>
  );
}
