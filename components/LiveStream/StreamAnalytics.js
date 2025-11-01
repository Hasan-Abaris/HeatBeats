"use client";
import React from "react";
import { Activity } from "lucide-react";

export default function StreamAnalytics() {
  return (
    <div className="bg-white rounded-xl border shadow-sm p-5">
      <div className="flex items-center gap-2 mb-4">
        <Activity className="text-red-600" size={18} />
        <h2 className="text-lg font-semibold">Stream Analytics</h2>
      </div>

      <div className="grid grid-cols-3 gap-4 text-center">
        <div className="bg-gray-50 rounded-lg p-3 border">
          <h3 className="text-sm text-gray-600">Current Viewers</h3>
          <p className="text-2xl font-bold text-green-600">128</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-3 border">
          <h3 className="text-sm text-gray-600">Avg Watch Time</h3>
          <p className="text-2xl font-bold text-blue-600">7m 22s</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-3 border">
          <h3 className="text-sm text-gray-600">Chat Rate</h3>
          <p className="text-2xl font-bold text-purple-600">34/min</p>
        </div>
      </div>
    </div>
  );
}
