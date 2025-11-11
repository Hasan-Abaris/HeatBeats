"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Home,
  PlusCircle,
  List,
  Gamepad2,
  Trophy,
  BookOpen,
  Ticket,
  Calendar,
  Users,
  Settings,
} from "lucide-react";

export default function DashboardSidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Dashboard", href: "/Dashboard", icon: <Home size={20} /> },
    { name: "Add Event", href: "/Dashboard/add-event", icon: <PlusCircle size={20} /> },
    { name: "List Event", href: "/Dashboard/list-event", icon: <List size={20} /> },
    { name: "Add Game", href: "/Dashboard/add-game", icon: <PlusCircle size={20} /> },
    { name: "List Game", href: "/Dashboard/list-game", icon: <List size={20} /> },
    { name: "Add Tournament", href: "/Dashboard/add-tournament", icon: <PlusCircle size={20} /> },
    { name: "List Tournament", href: "/Dashboard/list-tournament", icon: <List size={20} /> },
    { name: "Add Course", href: "/Dashboard/add-course", icon: <PlusCircle size={20} /> },
    { name: "List Course", href: "/Dashboard/list-course", icon: <List size={20} /> },
    { name: "My Tickets", href: "/Dashboard/my-tickets", icon: <Ticket size={20} /> },
    { name: "Booking List", href: "/Dashboard/booking-list", icon: <Calendar size={20} /> },
    { name: "My Students", href: "/Dashboard/my-students", icon: <Users size={20} /> },
    { name: "My Tournaments List", href: "/Dashboard/my-tournaments", icon: <Trophy size={20} /> },
  ];

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="lg:hidden flex items-center justify-between bg-[#141010] text-white px-4 py-3 border-b border-gray-800">
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
          className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
        >
          <Menu size={22} />
        </button>
        <h1 className="text-lg font-bold">
          Game<span className="text-green-500">Dashboard</span>
        </h1>
        <div className="w-9" /> {/* Spacer */}
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 w-64 bg-[#141010] text-white flex flex-col z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-4 border-b border-gray-800">
          <h1 className="text-xl font-extrabold tracking-tight">
            Game<span className="text-green-500">Dashboard</span>
          </h1>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            className="lg:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors"
          >
            <X size={22} />
          </button>
        </div>

        {/* Menu */}
        <nav className="flex-1 overflow-y-auto p-3 space-y-1">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-green-600 text-white shadow-sm"
                    : "text-gray-300 hover:bg-gray-800 hover:text-white"
                }`}
              >
                <div className="w-9 h-9 flex items-center justify-center rounded-md bg-gray-800/50">
                  {item.icon}
                </div>
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Optional: Footer */}
        <div className="p-3 border-t border-gray-800">
          <Link
            href="/Dashboard/settings"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-400 hover:bg-gray-800 hover:text-white transition-all"
          >
            <div className="w-9 h-9 flex items-center justify-center rounded-md bg-gray-800/50">
              <Settings size={20} />
            </div>
            <span>Settings</span>
          </Link>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
        />
      )}
    </>
  );
}