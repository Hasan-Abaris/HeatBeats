"use client";
import React from "react";
import { useSearchParams } from "next/navigation";

export default function ReviewPage() {
  const params = useSearchParams();
  const date = params.get("date");
  const seat = params.get("seat");
  const qty = parseInt(params.get("qty"), 10) || 1;

  const prices = { General: 499, VIP: 999, Premium: 1499 };
  const total = (prices[seat] || 0) * qty;

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
        <div className="flex items-center space-x-2 text-gray-400">
          <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center font-bold">
            2
          </div>
          <span>Seats</span>
        </div>
        <span className="text-gray-400">›</span>
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-orange-600 text-white flex items-center justify-center font-bold">
            3
          </div>
          <span className="font-semibold">Review & Pay</span>
        </div>
      </div>

      {/* Review Card */}
      <div className="bg-white p-6 rounded-xl shadow-md max-w-md mx-auto text-center">
        <h2 className="text-xl font-semibold mb-4">Review Your Booking</h2>
        <p className="text-gray-600 mb-2">Event: HeatBeasts Arena Tournament</p>
        <p className="text-gray-600 mb-2">Date: {date}</p>
        <p className="text-gray-600 mb-2">Seat Type: {seat}</p>
        <p className="text-gray-600 mb-2">Quantity: {qty}</p>
        <p className="text-gray-800 font-bold text-lg mt-4">
          Total: ₹{total.toLocaleString()}
        </p>

        <button
          onClick={() => alert("✅ Payment Successful! Ticket Booked.")}
          className="mt-6 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition"
        >
          Proceed to Pay
        </button>
      </div>
    </div>
  );
}
