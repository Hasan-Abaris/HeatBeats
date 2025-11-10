"use client";
import React, { useState } from "react";

export default function Settingpage() {
  const [selected, setSelected] = useState("At Office");

  const settings = [
    "At Office",
    "Starred Messages",
    "Block Contacts",
    "Privacy Policy",
    "Terms & Condition",
    "Share a link",
    "Language",
    "Dark Mode",
    "Logout",
  ];

  const renderContent = () => {
    switch (selected) {
      case "At Office":
        return (
          <>
            <h2 className="text-2xl font-semibold mb-2">At Office</h2>
            <p className="text-gray-600">
              Customize your office availability and update your working hours here.
            </p>
          </>
        );
      case "Starred Messages":
        return (
          <>
            <h2 className="text-2xl font-semibold mb-2">Starred Messages</h2>
            <p className="text-gray-600">
              Your starred messages will appear here. You can unstar them anytime.
            </p>
          </>
        );
      case "Block Contacts":
        return (
          <>
            <h2 className="text-2xl font-semibold mb-2">Blocked Contacts</h2>
            <p className="text-gray-600">
              Manage the contacts you’ve blocked. Unblock them if you wish to reconnect.
            </p>
          </>
        );
      case "Privacy Policy":
        return (
          <>
            <h2 className="text-2xl font-semibold mb-2">Privacy Policy</h2>
            <p className="text-gray-600">
              Learn how your data is protected and used. We prioritize user privacy.
            </p>
          </>
        );
      case "Terms & Condition":
        return (
          <>
            <h2 className="text-2xl font-semibold mb-2">Terms & Conditions</h2>
            <p className="text-gray-600">
              Read the terms and conditions that govern your use of our platform.
            </p>
          </>
        );
      case "Share a link":
        return (
          <>
            <h2 className="text-2xl font-semibold mb-2">Share a Link</h2>
            <p className="text-gray-600">
              Invite your friends to join by sharing your personal referral link.
            </p>
          </>
        );
      case "Language":
        return (
          <>
            <h2 className="text-2xl font-semibold mb-2">Language Settings</h2>
            <p className="text-gray-600">
              Choose your preferred language to enhance your app experience.
            </p>
          </>
        );
      case "Dark Mode":
        return (
          <>
            <h2 className="text-2xl font-semibold mb-2">Dark Mode</h2>
            <p className="text-gray-600">
              Switch between light and dark themes for better viewing comfort.
            </p>
          </>
        );
      case "Logout":
        return (
          <>
            <h2 className="text-2xl font-semibold mb-2 text-red-500">Logout</h2>
            <p className="text-gray-600">
              Are you sure you want to log out? You’ll need to sign in again to continue.
            </p>
          </>
        );
      default:
        return <p>Select a setting to view details.</p>;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* ===== LEFT SIDEBAR ===== */}
      <div className="flex w-80 flex-col bg-white shadow-md border-r border-gray-200">
        {/* Header */}
        <div className="flex items-center gap-2 px-4 py-4 border-b border-gray-200 bg-gray-50">
          <button className="text-gray-600 hover:text-gray-800 transition">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 320 512"
              height="18"
              width="18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 
              0 45.3l192 192c12.5 12.5 
              32.8 12.5 45.3 0s12.5-32.8 
              0-45.3L77.3 256 246.6 86.6c12.5-12.5 
              12.5-32.8 0-45.3s-32.8-12.5 
              -45.3 0l-192 192z"></path>
            </svg>
          </button>
          <h2 className="font-semibold text-lg text-gray-800">Settings</h2>
        </div>

        {/* Profile Section */}
        <div className="flex flex-col items-center py-6">
          <img
            src="https://whoxachat.com/uploads/avtars/female-1.png"
            alt="profile"
            className="h-24 w-24 rounded-full object-cover border-4 border-gray-100 shadow-sm"
          />
          <h3 className="mt-3 text-lg font-semibold">MH Hamza</h3>
          <div className="flex items-center gap-1 bg-green-100 px-2 py-1 mt-1 rounded-full">
            <span className="h-2 w-2 rounded-full bg-green-500"></span>
            <span className="text-sm text-green-700">Online</span>
          </div>
        </div>

        {/* Setting Options */}
        <div className="flex flex-col gap-1 px-3">
          {settings.map((label) => (
            <div
              key={label}
              onClick={() => setSelected(label)}
              className={`flex items-center justify-between px-4 py-2 rounded-lg transition cursor-pointer ${
                selected === label
                  ? "bg-green-100 text-green-700 font-medium"
                  : "hover:bg-gray-100 text-gray-800"
              } ${label === "Logout" ? "text-red-500 font-medium" : ""}`}
            >
              <span>{label}</span>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 320 512"
                height="14"
                width="14"
                className="text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M278.6 233.4c12.5 12.5 
                12.5 32.8 0 45.3l-160 160c-12.5 
                12.5-32.8 12.5-45.3 0s-12.5-32.8 
                0-45.3L210.7 256 73.4 118.6c-12.5-12.5
                -12.5-32.8 0-45.3s32.8-12.5 
                45.3 0l160 160z"></path>
              </svg>
            </div>
          ))}
        </div>

        {/* Version */}
        <div className="mt-auto py-3 text-center text-sm text-gray-500 border-t border-gray-200">
          Version 1.0.10
        </div>
      </div>

      {/* ===== RIGHT CONTENT AREA ===== */}
      <div className="flex-1 p-8 bg-white shadow-inner">
        {renderContent()}
      </div>
    </div>
  );
}
