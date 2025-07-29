'use client'; // for Next.js 13+ app dir (if needed)

import React, { useState } from 'react';

export default function ReferralDetails() {
  const [activeTab, setActiveTab] = useState("all");
  return (
    <div className="bg-white shadow-sm rounded-md p-4 flex-1">
      
      <div className="flex border-b text-sm font-medium text-gray-600">
        <button
          onClick={() => setActiveTab("all")}
          className={`px-4 py-2 ${activeTab === "all" ? "text-blue-600 border-b shadow-lg" : ""}`}
        >
          All
        </button>
        <button
          onClick={() => setActiveTab("promo")}
          className={`px-4 py-2 border-l ${activeTab === "promo" ? "text-blue-600 border-b shadow-lg " : ""}`}
        >
          Promotional Credits
        </button>
        <button
          onClick={() => setActiveTab("referral")}
          className={`px-4 py-2 border-l ${activeTab === "referral" ? "text-blue-600 border-b-2 shadow-lg" : ""}`}
        >
          Referral & Refund Credits
        </button>
      </div>

      {/* Credit Info */}
      <div className="mt-4 flex items-start justify-between text-sm md:text-base">
        <div>
          <p className="text-green-600 font-semibold text-lg">₹ 1695.2</p>
        </div>
        <div>
          <p className="font-medium">Bonus Added</p>
          <p className="text-xs text-gray-500">Expires on 15th May 25</p>
        </div>
        <div>
          <p className="font-medium">Admin</p>
          <p className="text-xs text-gray-500">Added</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-800">13-May-2025</p>
        </div>
      </div>
    </div>
  );
}
