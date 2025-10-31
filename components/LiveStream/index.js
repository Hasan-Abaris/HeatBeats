import React from "react";
import LiveStreamLayout from "./LiveStreamLayout";
import StreamPreview from "./StreamPreview";
import StreamSettings from "./StreamSettings";
import StreamAnalytics from "./StreamAnalytics";
import LiveChat from "./LiveChat";

export default function LiveStreamPage() {
  return (
    <LiveStreamLayout>
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 space-y-6">
          <StreamPreview />
          <StreamSettings />
          <StreamAnalytics />
        </div>
        <div>
          <LiveChat />
        </div>
      </div>
    </LiveStreamLayout>
  );
}
