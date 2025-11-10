"use client";
import React, { useState } from "react";

export default function Statuspage() {
  const [activeTab, setActiveTab] = useState("recent");
  const [selectedStatus, setSelectedStatus] = useState(null);

  // Dummy data for statuses
  const recentStatuses = [
    {
      id: 1,
      name: "Ayesha",
      time: "Today, 9:30 AM",
      img: "https://whoxachat.com/uploads/avtars/female-2.png",
      message: "Enjoying the sunshine ☀️",
    },
    {
      id: 2,
      name: "Ali",
      time: "Today, 8:00 AM",
      img: "https://whoxachat.com/uploads/avtars/male-3.png",
      message: "Morning vibes 🌅",
    },
  ];

  const viewedStatuses = [
    {
      id: 3,
      name: "Sara",
      time: "Yesterday, 10:00 PM",
      img: "https://whoxachat.com/uploads/avtars/female-4.png",
      message: "Late night study session 📚",
    },
  ];

  const currentStatuses =
    activeTab === "recent" ? recentStatuses : viewedStatuses;

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* ===== LEFT STATUS SIDEBAR ===== */}
      <aside className="min-w-[350px] bg-white shadow-md rounded-xl overflow-hidden ml-4 mt-5 pb-0 pt-4 2xl:min-w-[400px]">
        <div className="w-full px-4">
          {/* Header */}
          <h4 className="mb-5 text-lg font-semibold">MHHAMZA</h4>

          {/* My Status Section */}
          <div className="flex items-center px-3 py-4">
            <img
              src="https://whoxachat.com/uploads/avtars/female-1.png"
              alt="profile"
              className="mr-3 h-10 w-10 cursor-pointer rounded-full object-cover p-1 2xl:h-14 2xl:w-14"
            />
            <div className="flex w-full items-center justify-between">
              <div className="flex cursor-pointer flex-col">
                <div className="text-base font-medium capitalize text-gray-800">
                  My Status
                </div>
                <div className="flex items-center gap-x-1">
                  <div className="flex w-full max-w-[12.5rem] gap-x-1 text-[13px] text-gray-500">
                    <span>No Updates</span>
                  </div>
                </div>
              </div>

              {/* Add Status Button */}
              <div className="flex items-center justify-center gap-2">
                <div className="z-10 grid h-7 w-7 cursor-pointer place-content-center rounded-full bg-green-100">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 448 512"
                    className="text-green-600 rounded-full p-1 text-xl"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===== Tabs (Recent / Viewed) ===== */}
        <div className="mx-5 mb-3 mt-4 grid min-h-10 grid-cols-2 overflow-hidden rounded-lg border border-gray-300 text-center">
          <div
            onClick={() => {
              setActiveTab("recent");
              setSelectedStatus(null);
            }}
            className={`cursor-pointer px-4 py-2 font-medium transition ${
              activeTab === "recent"
                ? "bg-green-500 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Recent
          </div>
          <div
            onClick={() => {
              setActiveTab("viewed");
              setSelectedStatus(null);
            }}
            className={`cursor-pointer px-4 py-2 font-medium transition ${
              activeTab === "viewed"
                ? "bg-green-500 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Viewed
          </div>
        </div>

        {/* ===== Dynamic Status List ===== */}
        <div className="my-3 flex w-full flex-col overflow-y-auto overflow-x-hidden px-4">
          {currentStatuses.length > 0 ? (
            currentStatuses.map((status) => (
              <div
                key={status.id}
                className="flex items-center gap-3 p-2 cursor-pointer hover:bg-gray-100 rounded-lg transition"
                onClick={() => setSelectedStatus(status)}
              >
                <img
                  src={status.img}
                  alt={status.name}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div className="flex flex-col">
                  <span className="font-medium text-gray-800">
                    {status.name}
                  </span>
                  <span className="text-sm text-gray-500">{status.time}</span>
                </div>
              </div>
            ))
          ) : (
            <div className="grid h-96 place-content-center gap-5">
              <img
                src="/LightIcons/no_search_result_found.png"
                alt="no-status"
                className="mx-auto h-16 w-16 opacity-70"
              />
              <div className="text-gray-500 text-sm text-center">
                No {activeTab === "recent" ? "Recent" : "Viewed"} Status Found
              </div>
            </div>
          )}
        </div>
      </aside>

      {/* ===== RIGHT CONTENT AREA ===== */}
      <div className="flex-1 p-6">
        {selectedStatus ? (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src={selectedStatus.img}
                alt={selectedStatus.name}
                className="h-14 w-14 rounded-full object-cover"
              />
              <div>
                <h2 className="text-xl font-semibold">
                  {selectedStatus.name}
                </h2>
                <p className="text-gray-500 text-sm">{selectedStatus.time}</p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm border">
              <p className="text-gray-700">{selectedStatus.message}</p>
            </div>
          </div>
        ) : (
          <div className="text-center mt-40 text-gray-500">
            Click on a status to view updates here.
          </div>
        )}
      </div>
    </div>
  );
}
