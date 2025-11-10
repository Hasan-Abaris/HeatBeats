"use client";
import React, { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Communityfaq from "@/components/view/Community"; // Show below Home page
import {
  ChatBubbleLeftRightIcon,
  UserCircleIcon,
  MagnifyingGlassIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

export default function MainPage() {
  const router = useRouter();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // const tabs = [
  //   { key: "home", label: "Home", path: "/" },
  //   { key: "forum", label: "Forum", path: "/forum" },
  //   { key: "contest", label: "Contest", path: "/Contest" },
  //   { key: "support", label: "Support", path: "/Support" },
  // ];

  const handleAcademicClick = () => {
    router.push("/Homemain");
  };

  return (
    <div className="min-h-screen bg-balck relative bg-black">
      {/* 🌐 Navbar */}
      {/* ↓ Lowered z-index to 100 so Header (z-[1000]) stays above */}
    

      {/* 🏠 Community section only for Home page */}
      {pathname === "/" && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <Communityfaq />
        </div>
      )}
    </div>
  );
}
