"use client";
import React, { useState } from "react";
import { Eye, EyeOff, Signal } from "lucide-react";

export default function StreamPreview() {
  const [showKey, setShowKey] = useState(false);

  return (
    <div className="bg-white rounded-xl border shadow-sm p-5">
      <h2 className="text-lg font-semibold mb-4">Stream Preview</h2>

      {/* Video area */}
      <div className="aspect-video bg-black rounded-lg flex items-center justify-center text-gray-400 text-sm">
        <span>Stream will appear here once live</span>
      </div>

      {/* Stream key */}
      <div className="mt-5 space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-gray-700">Stream Key</span>
          <button
            onClick={() => setShowKey(!showKey)}
            className="text-blue-600 text-sm flex items-center gap-1 hover:underline"
          >
            {showKey ? <EyeOff size={16} /> : <Eye size={16} />}
            {showKey ? "Hide" : "Show"}
          </button>
        </div>
        <p className="border px-3 py-2 rounded-md bg-gray-50 font-mono text-sm select-all">
          {showKey ? "rtmp://live.server/stream-xyz123" : "•••••••••••••••••••••"}
        </p>

        <div className="flex items-center gap-2 text-sm text-green-600 font-medium mt-1">
          <Signal size={14} />
          Excellent connection
        </div>
      </div>
    </div>
  );
}
