// app/dashboard/layout.js
"use client";

import DashboardSidebar from "@/components/Dashboard/Dashboardlayout";
import React from "react";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex w-full min-h-screen bg-gray-50 text-gray-900">
      {/* -------------------------------------------------
          Sidebar – hidden on mobile, fixed on desktop
         ------------------------------------------------- */}
      <div className="hidden lg:flex lg:w-64">
        <DashboardSidebar />
      </div>

      {/* -------------------------------------------------
          Main Content – full width on mobile,
          offset by sidebar width on desktop
         ------------------------------------------------- */}
      <main className="flex-1 p-4 sm:p-6 lg:p-8 lg:ml-64 overflow-y-auto">
        {children}
      </main>

      {/* -------------------------------------------------
          Mobile‑only drawer (already inside DashboardSidebar)
          – no extra markup needed here
         ------------------------------------------------- */}
    </div>
  );
}