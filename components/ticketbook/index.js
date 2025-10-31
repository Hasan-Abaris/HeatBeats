"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function BookTicket() {
  const [selectedDate, setSelectedDate] = useState("");

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-6">
      {/* Progress Bar */}
      <div className="flex items-center justify-center space-x-6 mb-10">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-orange-600 text-white flex items-center justify-center font-bold">
            1
          </div>
          <span className="font-semibold">Date & Time</span>
        </div>
        <span className="text-gray-400">›</span>
        <div className="flex items-center space-x-2 text-gray-400">
          <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center font-bold">
            2
          </div>
          <span>Seats</span>
        </div>
        <span className="text-gray-400">›</span>
        <div className="flex items-center space-x-2 text-gray-400">
          <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center font-bold">
            3
          </div>
          <span>Review & Pay</span>
        </div>
      </div>

      {/* Venue Info */}
      <h1 className="text-2xl font-bold text-center mb-2">
        HeatBeasts Arena Tournament 2025
      </h1>
      <p className="text-center text-gray-600 mb-6">
        HeatBeasts Arena, Noida
      </p>

      {/* Availability Legend */}
      <div className="flex justify-center space-x-4 mb-6">
        <span className="flex items-center space-x-1">
          <span className="w-3 h-3 rounded-full bg-green-500"></span>
          <span className="text-sm">Available</span>
        </span>
        <span className="flex items-center space-x-1">
          <span className="w-3 h-3 rounded-full bg-orange-400"></span>
          <span className="text-sm">Fast Filling</span>
        </span>
        <span className="flex items-center space-x-1">
          <span className="w-3 h-3 rounded-full bg-gray-400"></span>
          <span className="text-sm">Sold Out</span>
        </span>
      </div>

      {/* Date Selection */}
      <div className="bg-white p-6 rounded-xl shadow-md max-w-md mx-auto text-center">
        <h2 className="text-lg font-semibold mb-4">Select Date</h2>
        <div className="flex justify-center gap-4">
          {["Sat 01 Nov", "Sun 02 Nov"].map((date) => (
            <button
              key={date}
              onClick={() => setSelectedDate(date)}
              className={`border rounded-lg px-6 py-3 font-medium transition ${
                selectedDate === date
                  ? "border-orange-600 text-orange-600 bg-orange-50"
                  : "border-gray-300 text-gray-700 hover:border-orange-400"
              }`}
            >
              {date}
            </button>
          ))}
        </div>

        <div className="mt-6">
          {selectedDate ? (
            <Link
              href={`/eventdetail/Ticket/seats?date=${encodeURIComponent(
                selectedDate
              )}`}
              className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg font-semibold"
            >
              Continue →
            </Link>
          ) : (
            <button
              disabled
              className="bg-gray-300 text-white px-6 py-2 rounded-lg font-semibold cursor-not-allowed"
            >
              Select Date to Continue
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
