"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function SeatsPage() {
  const params = useSearchParams();
  const selectedDate = params.get("date") || "No Date Selected";
  const [seatType, setSeatType] = useState("");
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-6">
      {/* Progress Bar */}
      <div className="flex items-center justify-center space-x-6 mb-10">
        <div className="flex items-center space-x-2 text-gray-400">
          <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center font-bold">
            1
          </div>
          <span>Date & Time</span>
        </div>
        <span className="text-gray-400">›</span>
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-orange-600 text-white flex items-center justify-center font-bold">
            2
          </div>
          <span className="font-semibold">Seats</span>
        </div>
        <span className="text-gray-400">›</span>
        <div className="flex items-center space-x-2 text-gray-400">
          <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center font-bold">
            3
          </div>
          <span>Review & Pay</span>
        </div>
      </div>

      {/* Seat Selection */}
      <div className="bg-white p-6 rounded-xl shadow-md max-w-md mx-auto text-center">
        <h2 className="text-xl font-semibold mb-3">Select Seat Type</h2>
        <p className="text-gray-500 mb-6">Event Date: {selectedDate}</p>

        {[{ name: "General", price: 499 }, { name: "VIP", price: 999 }, { name: "Premium", price: 1499 }].map(
          (seat) => (
            <button
              key={seat.name}
              onClick={() => setSeatType(seat.name)}
              className={`block w-full text-left border px-4 py-3 rounded-lg mb-3 transition ${
                seatType === seat.name
                  ? "border-orange-600 text-orange-600 bg-orange-50"
                  : "border-gray-300 hover:border-orange-400"
              }`}
            >
              {seat.name} — ₹{seat.price}
            </button>
          )
        )}

        <div className="mt-4">
          <label className="font-medium">Quantity: </label>
          <input
            type="number"
            value={quantity}
            min={1}
            max={10}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="ml-2 w-16 border rounded px-2 py-1 text-center"
          />
        </div>

        <div className="mt-6">
          {seatType ? (
            <Link
              href={`/eventdetail/Ticket/review?seat=${seatType}&qty=${quantity}&date=${encodeURIComponent(
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
              Select Seat to Continue
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
