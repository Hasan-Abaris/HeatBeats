"use client";
import { useState } from "react";
import Image from "next/image";

// ===== Default Leaderboard Users =====
const users = [
  {
    rank: 1,
    name: "Rahul S",
    designation: "Best of 2024 - Nominee",
    avatar:
      "https://usrsyswsdl.vivoglobal.com/usrsys/upload/avatar/20251104205928358.png",
    icon: "https://in-exstatic-vivofs.vivo.com/bCy1HLzT9bUXp6Mb/IN-IQOO/signin/20241011/d0030d54d2584706b099bbee63922759_w42_h42.png",
  },
  {
    rank: 2,
    name: "Manthqq",
    designation: "Quester",
    avatar:
      "https://usrsyswsdl.vivoglobal.com/usrsys/upload/avatar/20251009011726432.png",
  },
  {
    rank: 3,
    name: "Arxhuu",
    designation: "Quester",
    avatar:
      "https://usrsyswsdl.vivoglobal.com/usrsys/upload/avatar/20250818181227243.jpg",
  },
  {
    rank: 4,
    name: "Sumit007",
    designation: "Star Quester - 2025",
    avatar:
      "https://usrsyswsdl.vivoglobal.com/usrsys/upload/avatar/20250409025831992.png",
    icon: "https://in-exstatic-vivofs.vivo.com/bCy1HLzT9bUXp6Mb/IN-IQOO/signin/20250115/b14dd84ad800441ca3f9a1fcd294c1da_w42_h42.png",
  },
  {
    rank: 5,
    name: "HasanRazaKhan",
    designation: "Best of 2024 - Nominee",
    avatar:
      "https://usrsyswsdl.vivoglobal.com/usrsys/upload/avatar/20241205015351267.png",
    icon: "https://in-exstatic-vivofs.vivo.com/bCy1HLzT9bUXp6Mb/IN-IQOO/signin/20241011/d0030d54d2584706b099bbee63922759_w42_h42.png",
  },
];

// ===== Super Quester Data =====
const superQuesters = [
  { rank: 1, name: "Kvkartikji04", designation: "Best of 2024 - Nominee" },
  { rank: 2, name: "TESVIPER10", designation: "Clan Member" },
  { rank: 3, name: "RZ Nitin", designation: "Ranger" },
  { rank: 4, name: "Rahul S", designation: "Best of 2024 - Nominee" },
  { rank: 5, name: "Arshilsiddiqui@16", designation: "Quester" },
  { rank: 6, name: "Rahil Anwar", designation: "Quester" },
  { rank: 7, name: "Arxhuu", designation: "Quester" },
  { rank: 8, name: "ANJU", designation: "Best of 2023 - Nominee" },
  { rank: 9, name: "HasanRazaKhan", designation: "Best of 2024 - Nominee" },
  { rank: 10, name: "Rohan6383", designation: "Quester" },
];

// ===== Thread-Master | Fortnightly =====
const threadMasters = [
  { rank: 1, name: "Mrrajput_2212", designation: "Quester" },
  { rank: 2, name: "Manthqq", designation: "Quester" },
  { rank: 3, name: "Kvkartikji04", designation: "Best of 2024 - Nominee" },
  { rank: 4, name: "Ayushpandey20", designation: "Star Quester - 2024" },
  { rank: 5, name: "PremDharmik", designation: "Quester" },
  { rank: 6, name: "Rahul S", designation: "Best of 2024 - Nominee" },
  { rank: 7, name: "Sumit007", designation: "Star Quester - 2025" },
  { rank: 8, name: "_abhinav1820", designation: "Quester" },
  { rank: 9, name: "HasanRazaKhan", designation: "Best of 2024 - Nominee" },
  { rank: 10, name: "Deepak15", designation: "Quester" },
];

// ===== Overall Thread Master =====
const overallThreadMasters = [
  { rank: 1, name: "Kvkartikji04", designation: "Best of 2024 - Nominee" },
  { rank: 2, name: "KrishnaQ", designation: "Best of 2023" },
  { rank: 3, name: "Rahul S", designation: "Best of 2024 - Nominee" },
  { rank: 4, name: "TESVIPER10", designation: "Clan Member" },
  { rank: 5, name: "Ayushpandey20", designation: "Star Quester - 2024" },
  { rank: 6, name: "Rohan6383", designation: "Clan Member" },
  { rank: 7, name: "ANJU", designation: "Best of 2023 - Nominee" },
  { rank: 8, name: "Mrrajput_2212", designation: "Quester" },
  { rank: 9, name: "HasanRazaKhan", designation: "Best of 2024 - Nominee" },
  { rank: 10, name: "Syed_Nabi23", designation: "Best of 2022" },
];

export default function Leaderboard() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Most Liked Quester | Fortnightly");

  const tabs = [
    "Most Liked Quester | Fortnightly",
    "Super Quester",
    "Thread-Master | Fortnightly",
    "Overall Thread Master",
  ];

  const getCurrentData = () => {
    switch (activeTab) {
      case "Super Quester":
        return superQuesters;
      case "Thread-Master | Fortnightly":
        return threadMasters;
      case "Overall Thread Master":
        return overallThreadMasters;
      default:
        return users;
    }
  };

  return (
    <div className="bg-[#0f0f10] text-white rounded-2xl p-6 w-full max-w-md mx-auto shadow-lg">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">
          Most Liked Quester <span className="text-gray-400">| Fortnightly</span>
        </h2>
        <button
          onClick={() => setIsOpen(true)}
          className="text-sm text-blue-400 hover:text-blue-500"
        >
          View All →
        </button>
      </div>

      {/* User List */}
      <div className="space-y-3">
        {users.map((user) => (
          <div
            key={user.rank}
            className="flex items-center justify-between bg-[#1a1a1c] hover:bg-[#222] p-3 rounded-xl transition"
          >
            <div className="flex items-center gap-3">
              <span className="text-lg font-bold text-gray-300 w-5">
                {user.rank}
              </span>
              <div className="relative">
                <Image
                  src={user.avatar}
                  alt={user.name}
                  width={42}
                  height={42}
                  className="rounded-full"
                />
                {user.icon && (
                  <Image
                    src={user.icon}
                    alt="badge"
                    width={16}
                    height={16}
                    className="absolute bottom-0 right-0 rounded-full"
                  />
                )}
              </div>
              <div>
                <p className="font-medium">{user.name}</p>
                <p className="text-xs text-gray-400">{user.designation}</p>
              </div>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-xs px-3 py-1 rounded-lg">
              Follow
            </button>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div
        onClick={() => setIsOpen(true)}
        className="flex justify-center items-center mt-4 text-gray-400 text-sm cursor-pointer hover:text-white"
      >
        more <span className="ml-1">→</span>
      </div>

      {/* ===== Modal ===== */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50 p-4">
          <div className="bg-[#1a1a1c] rounded-2xl w-full max-w-2xl p-6 relative shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-white"
            >
              ✕
            </button>

            {/* Modal Title */}
            <h2 className="text-xl font-bold mb-4 text-center">🏆 Leaderboard</h2>

            {/* Tabs */}
            <div className="grid grid-cols-4 border-b border-gray-700 mb-4 text-sm text-center">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-2 transition-all ${
                    activeTab === tab
                      ? "border-b-2 border-blue-500 text-blue-400"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Dynamic User List */}
            <div
              className="max-h-[60vh] overflow-y-auto space-y-3 pr-1 custom-scrollbar"
            >
              {getCurrentData().map((user) => (
                <div
                  key={user.rank}
                  className="flex items-center justify-between bg-[#111] hover:bg-[#222] p-3 rounded-xl transition"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-lg font-bold text-gray-300 w-5">
                      {user.rank}
                    </span>
                    <div>
                      <p className="font-medium">{user.name}</p>
                      <p className="text-xs text-gray-400">
                        {user.designation}
                      </p>
                    </div>
                  </div>
                  <button className="bg-blue-600 hover:bg-blue-700 text-xs px-3 py-1 rounded-lg">
                    Follow
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Custom Scrollbar Styles */}
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #3a3a3a;
          border-radius: 6px;
          transition: background-color 0.3s ease;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: #555;
        }
      `}</style>
    </div>
  );
}
