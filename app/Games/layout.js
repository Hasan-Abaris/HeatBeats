import GamesSidebar from "@/components/Games/Gameslayout";
import React from "react";

export default function GamesLayout({ children }) {
  return (
    <div className="flex w-full min-h-screen items-stretch">
      {/* Left sidebar (dark background) */}
      <GamesSidebar />

      {/* Right main content (white background) */}
      <main className="flex-1 bg-white text-black p-6 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
