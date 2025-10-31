"use client";
import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function StreamPreview() {
  const [showKey, setShowKey] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-md p-5">
      <h2 className="text-lg font-semibold mb-3">Stream Preview</h2>
      <div className="aspect-video bg-black rounded-lg flex items-center justify-center text-gray-400">
        <span>Stream will appear here once live</span>
      </div>

      <div className="mt-4 space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-700 font-medium">
            Stream Key
          </span>
          <button
            onClick={() => setShowKey(!showKey)}
            className="text-blue-600 text-sm flex items-center gap-1"
          >
            {showKey ? <EyeOff size={16} /> : <Eye size={16} />}
            {showKey ? "Hide" : "Show"}
          </button>
        </div>
        <p className="border px-3 py-1 rounded-md bg-gray-50 font-mono text-sm">
          {showKey ? "rtmp://youtube.live/abcd-xyz123" : "••••••••••••••••••"}
        </p>

        <div className="text-sm text-green-600 font-medium mt-1">
          🔴 Excellent connection
        </div>
      </div>
    </div>
  );
}
