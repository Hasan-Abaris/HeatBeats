"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function ContestDetailspage() {
  const [activeTab, setActiveTab] = useState("information");

  return (
    <div className="flex max-w-6xl mx-auto mt-10 bg-white border rounded-xl shadow-sm">
      {/* Left Sidebar */}
      <aside className="w-1/4 border-r p-4">
        <ul className="space-y-2">
          <li>
            <button
              onClick={() => setActiveTab("information")}
              className={`w-full text-left px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                activeTab === "information"
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              Information
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveTab("posts")}
              className={`w-full text-left px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                activeTab === "posts"
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              Posts
            </button>
          </li>
        </ul>
      </aside>

      {/* Right Content */}
      <main className="flex-1 p-6">
        {activeTab === "information" && (
          <div className="space-y-6">
            {/* User Info */}
            <div className="flex items-center gap-6 border-b pb-6">
              <Image
                src="https://usrsyswsdl.vivoglobal.com/usrsys/upload/avatar/20220511122243951.png"
                width={90}
                height={90}
                alt="User Avatar"
                className="rounded-full border"
              />
              <div>
                <h2 className="text-2xl font-bold text-gray-800">
                  Sayyad Hasan
                </h2>
                <p className="text-gray-500">User ID: 100049</p>
                <p className="text-sm text-gray-600 mt-1">
                  Keep Questing On and On!
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-gray-800">130.5k</p>
                <p className="text-gray-500 text-sm">Likes</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-800">46.1k</p>
                <p className="text-gray-500 text-sm">Followers</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-800">28</p>
                <p className="text-gray-500 text-sm">Following</p>
              </div>
            </div>

            {/* Follow Button */}
            <div className="flex justify-center mt-6">
              <button className="px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition">
                Follow
              </button>
            </div>
          </div>
        )}

        {activeTab === "posts" && (
          <div>
            <h1 className="text-2xl font-bold mb-4 text-gray-800">User Posts</h1>
            <p className="text-gray-600 mb-6">
              Here are all the posts made by this user.
            </p>

            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="p-4 border rounded-lg hover:bg-gray-50 transition"
                >
                  <h2 className="text-lg font-semibold text-gray-800">
                    Post Title {i}
                  </h2>
                  <p className="text-sm text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer nec odio. Praesent libero. Sed cursus ante dapibus
                    diam. Sed nisi.
                  </p>
                  <div className="flex justify-between mt-2 text-sm text-gray-500">
                    <span>❤️ {Math.floor(Math.random() * 100)} Likes</span>
                    <span>💬 {Math.floor(Math.random() * 20)} Comments</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
