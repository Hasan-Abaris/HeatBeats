"use client";
import React, { useState } from "react";
import Link from "next/link";

// Enhanced mockForum data with additional fields
const mockForum = {
  id: "1",
  name: "General Gaming Discussions",
  image: "/images/Educators/john.jpg",
  threads: 120,
  interactions: 450,
  description:
    "A vibrant community for gamers to discuss the latest trends, share strategies, and connect over their favorite games.",
  announcement:
    "Welcome to the gaming forum! Stay updated with the latest discussions, share your thoughts, and join our monthly gaming challenges!",
  moderators: ["Alice", "Bob", "Charlie"],
  createdAt: "January 2023",
  categories: ["Action", "RPG", "Strategy", "Indie"],
  threadsList: [
    {
      id: "101",
      title: "Best Games of 2025",
      abstract:
        "Let’s discuss the best games released this year. Share your favorites and why you love them!",
      author: { name: "Alice", avatar: "/images/Educators/emily.jpg" },
      images: [
        "/images/courses/carrom.jpg",
        "/images/courses/chess.jpg",
        "/images/courses/ludo.jpg",
      ],
      views: 300,
      comments: 45,
      likes: 120,
      recommended: true,
      timeAgo: "2 hours ago",
      tags: ["2025", "Top Games"],
    },
    {
      id: "102",
      title: "Upcoming Game Releases in Q4",
      abstract:
        "Share info about upcoming releases. Which ones are you most excited for?",
      author: { name: "Bob", avatar: "/images/Educators/robert.jpg" },
      images: ["/images/courses/pubg.jpg"],
      views: 150,
      comments: 10,
      likes: 50,
      recommended: false,
      timeAgo: "1 day ago",
      tags: ["Releases", "Q4"],
    },
    {
      id: "103",
      title: "Multiplayer Strategies",
      abstract:
        "Tips and tricks for multiplayer games. Improve your teamwork and win more matches.",
      author: { name: "Charlie", avatar: "/images/Educators/john.jpg" },
      images: [],
      views: 200,
      comments: 22,
      likes: 75,
      recommended: true,
      timeAgo: "5 hours ago",
      tags: ["Multiplayer", "Tips"],
    },
    {
      id: "104",
      title: "Game Mods and Customization",
      abstract:
        "Discuss your favorite mods, skins, and customizations for games.",
      author: { name: "Dana", avatar: "/images/Educators/sara.jpg" },
      images: ["/images/courses/chess.jpg", "/images/courses/ludo.jpg"],
      views: 180,
      comments: 15,
      likes: 60,
      recommended: false,
      timeAgo: "3 days ago",
      tags: ["Mods", "Customization"],
    },
    {
      id: "105",
      title: "Retro Gaming Nostalgia",
      abstract:
        "Let’s talk about the games we grew up playing and why they are timeless classics.",
      author: { name: "Eve", avatar: "/images/Educators/sophia.jpg" },
      images: ["/images/courses/ludo.jpg"],
      views: 250,
      comments: 30,
      likes: 90,
      recommended: true,
      timeAgo: "1 week ago",
      tags: ["Retro", "Nostalgia"],
    },
  ],
};

function ForumDetailPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("recent");

  // Filter threads based on tab and search query
  const filteredThreads = mockForum.threadsList
    .filter((thread) => (activeTab === "all" ? true : thread.recommended))
    .filter(
      (thread) =>
        thread.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        thread.abstract.toLowerCase().includes(searchQuery.toLowerCase()) ||
        thread.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        )
    )
    .sort((a, b) => {
      if (sortOption === "recent") {
        const timeA = new Date(Date.now() - parseTimeAgo(a.timeAgo));
        const timeB = new Date(Date.now() - parseTimeAgo(b.timeAgo));
        return timeB - timeA;
      }
      if (sortOption === "popular") return b.likes - a.likes;
      if (sortOption === "comments") return b.comments - a.comments;
      return 0;
    });

  // Helper function to parse timeAgo for sorting
  function parseTimeAgo(timeAgo) {
    const [value, unit] = timeAgo.split(" ");
    const num = parseInt(value);
    if (unit.includes("hour")) return num * 60 * 60 * 1000;
    if (unit.includes("day")) return num * 24 * 60 * 60 * 1000;
    if (unit.includes("week")) return num * 7 * 24 * 60 * 60 * 1000;
    return 0;
  }

  return (
    <>
      <div className="max-w-5xl mx-auto p-6 font-sans">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/forum" className="hover:text-blue-600">
            Forums
          </Link>{" "}
          / <span className="text-gray-700">{mockForum.name}</span>
        </nav>

        {/* Forum Header */}
        <div className="flex flex-col sm:flex-row items-center gap-6 mb-8 bg-gradient-to-r from-blue-50 to-gray-50 p-6 rounded-lg shadow-sm">
          <img
            src={mockForum.image}
            alt="Forum"
            className="w-24 h-24 rounded-xl object-cover"
          />
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              {mockForum.name}
            </h1>
            <p className="text-gray-600 mt-2">{mockForum.description}</p>
            <div className="flex gap-4 mt-3 text-sm text-gray-500">
              <p>
                Threads:{" "}
                <span className="font-semibold">{mockForum.threads}</span>
              </p>
              <p>
                Interactions:{" "}
                <span className="font-semibold">{mockForum.interactions}</span>
              </p>
              <p>
                Created:{" "}
                <span className="font-semibold">{mockForum.createdAt}</span>
              </p>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Moderators:{" "}
              <span className="font-semibold">
                {mockForum.moderators.join(", ")}
              </span>
            </p>
          </div>
        </div>

        {/* Announcement */}
        {mockForum.announcement && (
          <div className="bg-blue-50 p-6 mb-8 rounded-lg border-l-4 border-blue-500 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Announcement
            </h3>
            <p className="text-gray-700">{mockForum.announcement}</p>
          </div>
        )}

        {/* Controls: Tabs, Search, and Sort */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          {/* Tabs */}
          <div className="flex gap-4">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-4 py-2 font-medium text-sm rounded-md transition-colors ${
                activeTab === "all"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setActiveTab("recommended")}
              className={`px-4 py-2 font-medium text-sm rounded-md transition-colors ${
                activeTab === "recommended"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Recommended
            </button>
          </div>

          {/* Search and Sort */}
          <div className="flex gap-4 w-full sm:w-auto">
            <input
              type="text"
              placeholder="Search threads..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-md w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="recent">Sort by Recent</option>
              <option value="popular">Sort by Popularity</option>
              <option value="comments">Sort by Comments</option>
            </select>
          </div>
        </div>

        {/* Threads */}
        <div className="space-y-6">
          {filteredThreads.length === 0 ? (
            <p className="text-gray-500 text-center">No threads found.</p>
          ) : (
            filteredThreads.map((thread) => (
              <div
                key={thread.id}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={thread.author.avatar}
                    alt="avatar"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <span className="font-semibold text-gray-800">
                      {thread.author.name}
                    </span>
                    <span className="text-xs text-gray-500 block">
                      {thread.timeAgo}
                    </span>
                  </div>
                  {thread.recommended && (
                    <span className="ml-auto bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded">
                      Recommended
                    </span>
                  )}
                </div>
                <Link href={`/thread/${thread.id}`} className="no-underline">
                  <h2 className="text-xl font-semibold text-gray-800 hover:text-blue-600 transition-colors">
                    {thread.title}
                  </h2>
                  <p className="text-gray-600 mt-2">{thread.abstract}</p>
                  {thread.images.length > 0 && (
                    <div className="flex gap-4 mt-4 overflow-x-auto">
                      {thread.images.map((img) => (
                        <img
                          key={img}
                          src={img}
                          alt=""
                          className="w-24 h-24 rounded-md object-cover"
                        />
                      ))}
                    </div>
                  )}
                  <div className="flex gap-4 mt-4 text-sm text-gray-500">
                    <span>Views: {thread.views}</span>
                    <span>Comments: {thread.comments}</span>
                    <span>Likes: {thread.likes}</span>
                  </div>
                  {thread.tags && (
                    <div className="flex gap-2 mt-3">
                      {thread.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </Link>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default ForumDetailPage;
