"use client";

import { useState } from "react";

export default function CommunityPage() {
  const [active, setActive] = useState("comments");

  return (
    <div className="w-full px-4 md:px-8 py-6">
      <h1 className="text-3xl font-bold mb-8">Community</h1>

      {/* CUSTOM TABS */}
      <div className="flex gap-2 bg-gray-100 p-1 rounded-lg w-fit">
        {[
          { id: "comments", label: "Comments" },
          { id: "posts", label: "Viewer Posts" },
          { id: "mentions", label: "Mentions" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition
              ${
                active === tab.id
                  ? "bg-white shadow-md text-black"
                  : "text-gray-600 hover:text-black"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* CONTENT */}
      <div className="mt-6">
        {/* COMMENTS TAB */}
        {active === "comments" && (
          <div className="space-y-4">
            {/* Filters */}
            <div className="flex flex-wrap items-center gap-4 mb-2">
              <select className="border border-gray-300 bg-white p-2 rounded-md text-sm shadow-sm focus:outline-none">
                <option>Published</option>
                <option>Held for Review</option>
                <option>Likely Spam</option>
              </select>

              <select className="border border-gray-300 bg-white p-2 rounded-md text-sm shadow-sm focus:outline-none">
                <option>Sort by</option>
                <option>Newest</option>
                <option>Oldest</option>
              </select>

              <button className="border border-gray-300 bg-white px-4 py-2 rounded-md text-sm shadow-sm hover:bg-gray-50 transition">
                Filter
              </button>
            </div>

            {/* Comment Item */}
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition flex gap-4">
              <img
                src="/profile1.jpg"
                className="w-12 h-12 rounded-full object-cover"
              />

              <div className="flex-1">
                <p className="font-semibold text-gray-900">
                  @gamerking • <span className="text-gray-500">2 days ago</span>
                </p>

                <p className="text-gray-700 mt-1">
                  This game documentary was amazing 🔥
                </p>

                <div className="mt-3 flex gap-5 text-gray-600 text-sm">
                  <button className="hover:text-black">Reply</button>
                  <button className="hover:text-black">👍</button>
                  <button className="hover:text-black">👎</button>
                  <button className="hover:text-black">❤️</button>
                  <button className="hover:text-black">⋮</button>
                </div>
              </div>

              <img
                src="/thumb1.jpg"
                className="w-36 h-24 rounded-lg object-cover border"
              />
            </div>
          </div>
        )}

        {/* VIEWER POSTS TAB */}
        {active === "posts" && (
          <div className="space-y-4">
            <div className="bg-white p-5 rounded-xl border shadow-sm hover:shadow-md transition">
              <p className="font-semibold">@proplayer</p>
              <p className="text-gray-700 mt-1">
                Just reached level 90 in Valorant 😎🔥
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border shadow-sm hover:shadow-md transition">
              <p className="font-semibold">@gamerfan</p>
              <p className="text-gray-700 mt-1">
                Who else is waiting for GTA 6 trailer?
              </p>
            </div>
          </div>
        )}

        {/* MENTIONS TAB */}
        {active === "mentions" && (
          <div className="space-y-4">
            <div className="bg-white p-5 rounded-xl border shadow-sm hover:shadow-md transition">
              <p className="text-gray-700">
                <span className="font-semibold">@you</span> was mentioned in a
                post about <span className="font-medium">Call of Duty Updates</span>.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border shadow-sm hover:shadow-md transition">
              <p className="text-gray-700">
                Someone tagged you: “This player is insane 🔥🔥🔥”
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
