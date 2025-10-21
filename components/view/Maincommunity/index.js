"use client";
import React from "react";
import { useRouter, usePathname } from "next/navigation";

export default function TabNavigation() {
  const router = useRouter();
  const pathname = usePathname();

  const tabs = [
    { key: "home", label: "Home", path: "/" },
    { key: "forum", label: "Forum", path: "/forum" },
    { key: "contest", label: "Contest", path: "/Contest" },
    { key: "support", label: "Support", path: "/Support" },
  ];

  return (
    <div className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="flex justify-center gap-8 py-3">
        {tabs.map((tab) => {
          const isActive = pathname === tab.path;
          return (
            <button
              key={tab.key}
              onClick={() => router.push(tab.path)}
              className={`text-base font-medium border-b-2 transition-colors ${
                isActive
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-gray-600 hover:text-blue-500"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
