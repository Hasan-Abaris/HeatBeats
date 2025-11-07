// components/Dashboard/DashboardSidebar.js
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function DashboardSidebar() {
  const pathname = usePathname();

  const menuItems = [
    { name: "Dashboard", href: "/Dashboard", icon: "dashboard.svg" },
    { name: "Add Event", href: "/Dashboard/add-event", icon: "calendar-plus.svg" },
    { name: "List Event", href: "/Dashboard/list-event", icon: "list.svg" },
    { name: "Add Game", href: "/Dashboard/add-game", icon: "plus.svg" },
    { name: "List Game", href: "/Dashboard/list-game", icon: "gamepad.svg" },
    { name: "Add Tournament", href: "/Dashboard/add-tournament", icon: "trophy-plus.svg" },
    { name: "List Tournament", href: "/Dashboard/list-tournament", icon: "trophy-list.svg" },
    { name: "Add Course", href: "/Dashboard/add-course", icon: "book-plus.svg" },
    { name: "List Course", href: "/Dashboard/list-course", icon: "book-list.svg" },
    { name: "My Tickets", href: "/Dashboard/my-tickets", icon: "ticket.svg" },
    { name: "Booking List", href: "/Dashboard/booking-list", icon: "clipboard.svg" },
    { name: "My Students", href: "/Dashboard/my-students", icon: "users.svg" },
    { name: "My Tournaments List", href: "/Dashboard/my-tournaments", icon: "trophy.svg" },
  ];

  return (
    <aside className="left-sidebar bg-[#141010] text-white w-64 min-h-full flex flex-col">
      {/* Header - SAME as GamesSidebar */}
      <div className="side-header flex items-center justify-between px-4 py-4 border-b border-gray-700">
        <div className="burger-btn">
          <span className="bi bi-text-paragraph text-2xl text-white">☰</span>
        </div>

        {/* Dashboard Title */}
        <div className="site-title text-center flex-1">
          <h1 className="text-xl font-extrabold tracking-wide text-white">
            Game<span className="text-green-500">Dashboard</span>
          </h1>
        </div>

        <div className="burger-btn">
          <span className="bi bi-three-dots-vertical text-2xl text-white">⋮</span>
        </div>
      </div>

      {/* Menu Items - SAME structure as categories */}
      <ul className="p-2 space-y-2 flex-1 overflow-y-auto">
        {menuItems.map((item, i) => (
          <li key={i} className="category-item">
            <Link
              href={item.href}
              className={`flex items-center gap-3 hover:bg-green-700 p-2 rounded-md transition ${
                pathname === item.href ? "bg-green-600" : ""
              }`}
            >
              <span className="g-icon w-10 h-10 flex items-center justify-center bg-gray-800 rounded">
                {/* Replace with your icons */}
                <span className="text-lg">
                  {item.name.includes("Add") ? "➕" : 
                   item.name.includes("List") ? "📋" : 
                   item.name.includes("Dashboard") ? "🏠" : 
                   item.name.includes("Game") ? "🎮" : 
                   item.name.includes("Tournament") ? "🏆" : 
                   item.name.includes("Course") ? "📚" : 
                   item.name.includes("Ticket") ? "🎫" : 
                   item.name.includes("Booking") ? "📅" : 
                   item.name.includes("Students") ? "👥" : "⚙️"}
                </span>
              </span>
              <span className="font-medium">{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}