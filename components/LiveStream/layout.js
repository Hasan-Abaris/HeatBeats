"use client";

export default function LivestreamLayout({ children }) {
  return (
    <div className="flex min-h-[calc(100vh-120px)] bg-gray-50">
      {/* ===== Sidebar ===== */}
      <aside className="hidden lg:flex sticky top-[80px] h-fit overflow-y-auto no-scrollbar w-[270px] py-5 shadow-md flex-col justify-between bg-white">
        <div className="flex flex-col gap-6">
          <div className="space-y-3">
            {[
              { name: "Dashboard", icon: "/icons/home.svg" },
              { name: "My Streams", icon: "/icons/stream.svg" },
              { name: "Settings", icon: "/icons/settings.svg" },
            ].map((item) => (
              <button
                key={item.name}
                className="flex items-center gap-3 px-6 py-2 hover:bg-gray-50 transition-all"
              >
                <img src={item.icon} alt={item.name} className="w-5 h-5" />
                <span className="font-medium text-[16px]">{item.name}</span>
              </button>
            ))}
          </div>
        </div>
      </aside>

      {/* ===== Main content area ===== */}
      <div className="flex flex-col flex-1 lg:ml-[270px]">
        <main className="flex-1 max-w-7xl mx-auto w-full px-6 py-8">
          {children}
        </main>
      </div>
    </div>
  );
}
