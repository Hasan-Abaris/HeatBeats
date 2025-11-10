"use client";
import React from "react";
import Image from "next/image";
import { Phone, Video, Send } from "lucide-react";

export default function Profilepage() {
  return (
    <div className="flex h-[calc(100vh-20px)] bg-gray-50 rounded-xl shadow-md overflow-hidden">
      {/* ===== LEFT PROFILE SIDEBAR ===== */}
      <aside className="w-[350px] bg-white shadow-md rounded-xl overflow-y-auto">
        {/* ===== PROFILE HEADER ===== */}
        <div
          className="w-full space-y-5 bg-[url('/Home/profile_bg.png')] bg-no-repeat px-4"
          style={{ backgroundSize: "100%" }}
        >
          <div className="flex items-center gap-3 pt-6 font-semibold text-black lg:pt-16">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 320 512"
              className="cursor-pointer"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"></path>
            </svg>
            <span>Profile</span>
          </div>

          <div className="relative mx-auto h-fit w-fit pt-16 lg:pt-3">
            <img
              src="https://whoxachat.com/uploads/avtars/female-1.png"
              className="mx-auto h-32 w-32 rounded-full bg-gray-200 object-cover p-2"
              alt="Profile"
            />
            <div className="absolute bottom-1 right-2 z-10 grid h-8 w-8 cursor-pointer place-content-center rounded-full bg-green-500">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 448 512"
                className="text-white rounded-full p-1 text-xl"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"></path>
              </svg>
            </div>
          </div>

          <div className="space-y-2 text-center pb-5">
            <span className="text-xl capitalize font-semibold">MH Hamza</span>
            <div className="mx-auto flex w-fit items-center justify-center gap-2 rounded-xl bg-green-100 px-2 py-1 shadow-sm">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                className="text-green-600"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"></path>
              </svg>
              <span className="text-green-700 text-sm font-medium">Online</span>
            </div>
          </div>
        </div>

        {/* ===== PROFILE DETAILS SECTION ===== */}
        <div className="mt-6 space-y-4 px-4 pb-6">
          <div className="flex flex-col gap-3">
            <div className="flex cursor-pointer items-center justify-between rounded-lg border border-gray-200 px-4 py-2">
              <div className="flex items-center gap-3">
                <i className="fa-solid fa-user text-lg"></i>
                <div>MH Hamza</div>
              </div>
              <i className="fa-solid fa-pen text-gray-400"></i>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-700 mb-2">Gender</h4>
            <div className="ml-2 flex gap-6">
              <label className="inline-flex items-center gap-2">
                <input type="radio" name="gender" defaultChecked className="accent-gray-800" />
                Male
              </label>
              <label className="inline-flex items-center gap-2">
                <input type="radio" name="gender" className="accent-gray-800" />
                Female
              </label>
            </div>
          </div>

          <div className="rounded-lg bg-gray-100 px-4 py-3">
            <h3 className="text-sm font-semibold text-gray-700 mb-3">Contact Details</h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between rounded-lg border border-gray-300 px-4 py-2">
                <div className="flex items-center gap-3">
                  <i className="fa-solid fa-phone text-lg"></i>
                  <div>+1 5628532467</div>
                </div>
                <i className="fa-solid fa-check text-green-500"></i>
              </div>

              <div className="flex items-center justify-between rounded-lg border border-gray-300 px-4 py-2">
                <div className="flex items-center gap-3">
                  <i className="fa-solid fa-location-dot text-lg"></i>
                  <div>United States</div>
                </div>
                <i className="fa-solid fa-check text-green-500"></i>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* ===== RIGHT CHAT-STYLE BOX ===== */}
      <div className="flex-1 flex flex-col bg-white border-l border-gray-200">
        {/* Header */}
        <div className="flex justify-between items-center border-b border-gray-200 p-4 bg-gray-50">
          <div className="flex items-center gap-3">
            <Image
              src="https://whoxachat.com/uploads/avtars/female-1.png"
              alt="MH Hamza"
              width={44}
              height={44}
              className="rounded-full"
            />
            <div>
              <h3 className="font-semibold text-gray-900">MH Hamza</h3>
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
              Hello! How are you today?
            </div>
            <div className="self-end bg-blue-500 text-white px-4 py-2 rounded-2xl max-w-xs">
              I’m doing great, thanks!
            </div>
          </div>
        </div>

        {/* Chat Input */}
        <div className="flex items-center gap-3 p-4 border-t border-gray-200 bg-white">
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-1 p-3 border rounded-full outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button className="bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transition-all duration-200">
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
