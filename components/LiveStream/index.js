"use client";
import React from "react";
import LiveStreamLayout from "./LiveStreamLayout";
import StreamPreview from "./StreamPreview";
import StreamSettings from "./StreamSettings";
import StreamAnalytics from "./StreamAnalytics";
import LiveChat from "./LiveChat";

export default function LiveStreamPage() {
  return (
  
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: Stream preview + settings + analytics */}
        <div className="lg:col-span-2 space-y-6">
          <StreamPreview />
          <StreamSettings />
          <StreamAnalytics />
        </div>

        {/* Right: Live chat */}
        <div className="lg:col-span-1">
          <LiveChat />
        </div>
      </div>
  
  );
}
