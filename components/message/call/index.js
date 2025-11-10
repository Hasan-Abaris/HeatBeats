"use client";
import React, { useState } from "react";

export default function Callpage() {
  const [activeTab, setActiveTab] = useState("all");

  const calls = [
    {
      id: 1,
      name: "Alex Alex",
      avatar: "https://whoxachat.com/uploads/avtars/male-3.png",
      type: "Outgoing Video Call",
      icon: "/CallIcons/outgoing_video_call.png",
      date: "10/11/2025",
      time: "9:19 am",
    },
    {
      id: 2,
      name: "John John",
      avatar: "https://whoxachat.com/uploads/avtars/male-2.png",
      type: "Outgoing Audio Call",
      icon: "/CallIcons/outgoing_audio_call.png",
      date: "10/11/2025",
      time: "8:42 am",
    },
    {
      id: 3,
      name: "Chuckle Squad",
      avatar:
        "https://whoxachat.com/uploads/others/1758611816986-pexels-matthew-montrone-230847-1324803.jpg",
      type: "Missed Audio Call",
      icon: "/CallIcons/missed_audio_call.png",
      date: "10/11/2025",
      time: "7:55 am",
    },
    {
      id: 4,
      name: "Ryan Ryan",
      avatar: "https://whoxachat.com/uploads/avtars/male-1.png",
      type: "Missed Audio Call",
      icon: "/CallIcons/missed_audio_call.png",
      date: "10/11/2025",
      time: "2:17 am",
    },
    {
      id: 5,
      name: "Ethan Ethan",
      avatar: "https://whoxachat.com/uploads/avtars/male-2.png",
      type: "Outgoing Video Call",
      icon: "/CallIcons/outgoing_video_call.png",
      date: "10/11/2025",
      time: "12:10 am",
    },
  ];

  const filteredCalls =
    activeTab === "missed"
      ? calls.filter((call) => call.type.toLowerCase().includes("missed"))
      : calls;

  return (
    <div className="w-full bg-gray-50 min-h-screen">
      {/* ===== Tabs ===== */}
      <div className="mt-4 flex w-full justify-center gap-4 bg-gray-100 px-2 py-3 lg:gap-6 rounded-md">
        {/* All Calls */}
        <div
          onClick={() => setActiveTab("all")}
          className={`p-2 flex w-40 cursor-pointer items-center justify-center gap-2 rounded-lg text-center text-sm font-medium transition ${
            activeTab === "all"
              ? "bg-green-500 text-white"
              : "bg-white text-gray-800 hover:bg-gray-200"
          }`}
        >
          <img className="h-5" src="/LightIcons/call.png" alt="" />
          <span>All Calls</span>
        </div>

        {/* Missed Calls */}
        <div
          onClick={() => setActiveTab("missed")}
          className={`p-2 flex w-40 cursor-pointer items-center justify-center gap-2 rounded-lg text-center text-sm font-medium transition ${
            activeTab === "missed"
              ? "bg-green-500 text-white"
              : "bg-white text-gray-800 hover:bg-gray-200"
          }`}
        >
          <img className="h-5" src="/LightIcons/call.png" alt="" />
          <span>Missed Calls</span>
        </div>
      </div>

      {/* ===== Calls List ===== */}
      <div className="my-5 flex h-[75vh] w-full max-w-full flex-col overflow-y-auto overflow-x-hidden pb-20">
        {filteredCalls.length > 0 ? (
          filteredCalls.map((call) => (
            <div key={call.id}>
              <div className="flex cursor-pointer items-center px-3 py-4 hover:bg-gray-100 transition">
                {/* Avatar */}
                <div className="relative mr-3 h-14 w-14">
                  <div
                    className="rounded-full object-cover"
                    style={{
                      backgroundImage: `url(${call.avatar})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      height: "100%",
                    }}
                  ></div>
                </div>

                {/* Call Info */}
                <div className="flex w-full items-center justify-between">
                  <div>
                    <div className="text-base font-medium capitalize text-gray-800">
                      {call.name}
                    </div>
                    <div className="flex items-center gap-1 text-xs text-gray-600">
                      <div className="grid h-6 w-6 place-content-center rounded-full">
                        <img src={call.icon} className="h-4 w-4" alt="" />
                      </div>
                      <div>{call.type}</div>
                    </div>
                  </div>
                  <div className="space-y-1 text-end text-sm text-gray-500">
                    <div>{call.date}</div>
                    <div className="text-xs">{call.time}</div>
                  </div>
                </div>
              </div>
              <hr className="border-t border-gray-200" />
            </div>
          ))
        ) : (
          <div className="text-center text-gray-500 mt-20">No Calls Found</div>
        )}
      </div>
    </div>
  );
}
