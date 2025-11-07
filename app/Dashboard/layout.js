// app/dashboard/layout.js
import DashboardSidebar from "@/components/Dashboard/Dashboardlayout";
import React from "react";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex w-full min-h-screen items-stretch">
      {/* Left sidebar (dark background) - SAME as Games */}
      <DashboardSidebar />

      {/* Right main content (dark background for dashboard) */}
      <main className="flex-1   p-6 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}