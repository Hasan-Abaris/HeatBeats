"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Header } from "@/components/common/Header";
import Footers from "@/components/common/Footer/Footer";

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const [user, setUser] = useState(null);

  // 🌟 Load user from localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch {
        setUser(null);
      }
    }
  }, []);

  // 🌟 Listen for user login/logout changes (from custom event or storage)
  useEffect(() => {
    const handleUserChange = () => {
      const updatedUser = localStorage.getItem("user");
      if (updatedUser) {
        try {
          setUser(JSON.parse(updatedUser));
        } catch {
          setUser(null);
        }
      } else {
        setUser(null);
      }
    };

    // Listen for both custom event & storage changes (cross-tab)
    window.addEventListener("userChange", handleUserChange);
    window.addEventListener("storage", handleUserChange);

    return () => {
      window.removeEventListener("userChange", handleUserChange);
      window.removeEventListener("storage", handleUserChange);
    };
  }, []);

  // 🧭 Hide footer only on specific routes
  const hideFooterOn = ["/edit-video"];
  const shouldHideFooter = hideFooterOn.some((path) =>
    pathname.startsWith(path)
  );

  return (
    <div className="min-h-screen flex flex-col">
      {/* ✅ Pass user & setUser to Header */}
      <Header user={user} setUser={setUser} />

      <main className="flex-1">{children}</main>

      {!shouldHideFooter && <Footers />}
    </div>
  );
}
