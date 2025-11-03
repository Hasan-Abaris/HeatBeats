import StreamPreview from "@/components/LiveStream/StreamPreview";
import StreamSettings from "@/components/LiveStream/StreamSettings";
import LiveChat from "@/components/LiveStream/LiveChat";
import StreamAnalytics from "@/components/LiveStream/StreamAnalytics";

export default function ForYouPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-6">
        <StreamPreview />
        <StreamSettings />
        <StreamAnalytics />
      </div>
      <div className="lg:col-span-1">
        <LiveChat />
      </div>
    </div>
  );
}
