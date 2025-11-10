"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Messagelayout({ children }) {
  const pathname = usePathname();

  const menuItems = [
    { href: "/message/profile", icon: "/images/chat/profile.png", alt: "Profile" },
    { href: "/message", icon: "/images/chat/chat.png", alt: "Chat" },
    { href: "/message/status", icon: "/images/chat/status.png", alt: "Status" },
    { href: "/message/contact-list", icon: "/images/chat/contact.png", alt: "Contacts" },
    { href: "/message/call-history", icon: "/images/chat/call.png", alt: "Calls" },
    { href: "/message/setting", icon: "/images/chat/setting.png", alt: "Settings" },
  ];

  return (
    <div className="flex bg-">
      {/* ===== LEFT SIDEBAR ===== */}
      <aside
        className="hidden lg:flex flex-col justify-between bg-gray-300 py-8 text-white shadow-xl w-24 2xl:w-28 rounded-tr-2xl rounded-br-2xl"
        style={{
          minHeight: "calc(100vh - 60px)", // Adjust based on your navbar + footer height
          marginTop: "10px", // Slight gap from navbar
          marginBottom: "10px", // Slight gap from footer
        }}
      >
        <div className="flex flex-col items-center gap-7">
          {/* Logo */}
          <Link href="/" className="mb-10">
            <Image
              src="/images/sports2.jpg"
              alt="HeatBeasts Logo"
              width={56}
              height={56}
              className="h-14 w-14 object-contain rounded-full"
            />
          </Link>

          {/* Menu Icons */}
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link key={item.href} href={item.href}>
                <Image
                  src={item.icon}
                  alt={item.alt}
                  width={28}
                  height={28}
                  className={`h-7 transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "opacity-100 scale-110"
                      : "opacity-60 hover:opacity-100"
                  }`}
                />
              </Link>
            );
          })}
        </div>

        {/* Bottom Buttons */}
        <div className="flex flex-col items-center gap-7 mt-auto">
          {/* Dark Mode Button */}
          <button className="flex items-center gap-2">
            <Image
              src="/images/chat/moon.png"
              alt="Dark Mode"
              width={28}
              height={28}
              className="h-7 cursor-pointer"
            />
          </button>

          {/* Logout Button */}
          <button>
            <Image
              src="/images/chat/logout.png"
              alt="Logout"
              width={28}
              height={28}
              className="h-7 cursor-pointer"
            />
          </button>
        </div>
      </aside>

      {/* ===== MAIN CONTENT AREA ===== */}
<main className="flex-1 p-2">{children}</main>
    </div>
  );
}
