import Link from "next/link";
import React from "react";

export default function EventDetail() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans px-5">
      {/* ===== Main Layout ===== */}
      <div className="max-w-8xl mx-auto px-2  py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* === LEFT: Main Content (Now on the left) === */}
        <main className="lg:col-span-2 space-y-8 order-1 lg:order-1">
          {/* Event Banner */}
          <img
            src="/images/courses/pubg.jpg"
            alt="HeatBeasts Game Event"
            className="w-full h-[350px] object-cover rounded-2xl shadow-lg"
          />

          {/* Event Title & Info */}
          <div>
            <h1 className="text-3xl font-bold">
              HeatBeasts Arena Tournament 2025
            </h1>
            <p className="text-gray-600 mt-2">
              🎮 Multiplayer Gaming • Live E-Sports Event
            </p>
            <p className="text-gray-500 mt-1">📍 Noida • 🕒 5:00 PM</p>
          </div>

          {/* About Section */}
          <section>
            <h2 className="text-xl font-semibold mb-2 text-gray-800">
              About The Event
            </h2>
            <p className="text-gray-700 leading-relaxed">
              <b>HeatBeasts Arena Tournament</b> brings together top gamers from
              across the country to battle it out in FPS, strategy, and battle
              royale games. Watch live matches, compete in challenges, and meet
              professional gamers. Exclusive prizes await the champions!
            </p>
          </section>

          {/* Featured Gamers Section */}
          <section className="bg-white p-6 rounded-xl shadow space-y-3">
            <h2 className="text-xl font-semibold mb-2 text-gray-800">
              Featured Gamers
            </h2>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <img
                src="/images/Educators/emily.jpg"
                alt="Pro Gamer"
                className="w-28 h-28 rounded-full object-cover shadow"
              />
              <div>
                <h3 className="font-bold text-lg">Alex "Blaze" Smith</h3>
                <p className="text-gray-600 text-sm">
                  Professional FPS Gamer & Streamer
                </p>
                <p className="mt-2 text-gray-500 text-sm">
                  Alex is known for his precision and fast reflexes, making him
                  a top contender in HeatBeasts tournaments.
                </p>
              </div>
            </div>
          </section>

          {/* Ticket Info */}
          <section className="bg-white p-6 rounded-xl shadow space-y-3">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Ticket Info
            </h2>
            <p>🎫 Price Range: ₹499 – ₹1499</p>
            <p>💺 Reserved & Free Seating Available</p>
            <p>📱 E-Ticket available for entry</p>
            <p>❌ No refunds once booked</p>
          </section>
        </main>

        {/* === RIGHT: Event Info (Now on the right) === */}
        <aside className="bg-white rounded-xl shadow-lg p-5 space-y-4 h-fit order-2 lg:order-2">
          <h2 className="text-lg font-semibold text-gray-800 mb-2 border-b pb-2">
            📋 Event Info
          </h2>

          {[
            {
              icon: "https://assets-in.bmscdn.com/nmcms/synopsis/calendar.png",
              label: "Sat 25 Oct 2025",
            },
            {
              icon: "https://assets-in.bmscdn.com/nmcms/synopsis/time.png",
              label: "5:00 PM",
            },
            {
              icon: "https://assets-in.bmscdn.com/nmcms/synopsis/duration.png",
              label: "3 hours",
            },
            {
              icon: "https://assets-in.bmscdn.com/nmcms/synopsis/key_info/age_limit.png",
              label: "Age Limit: 13+",
            },
            {
              icon: "https://assets-in.bmscdn.com/nmcms/synopsis/language.png",
              label: "English",
            },
            {
              icon: "https://assets-in.bmscdn.com/nmcms/synopsis/genre.png",
              label: "FPS / Strategy / Battle Royale",
            },
            {
              icon: "https://assets-in.bmscdn.com/nmcms/synopsis/location.png",
              label: "HeatBeasts Arena, Noida",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 bg-gray-50 hover:bg-orange-50 transition rounded-lg p-2"
            >
              <img src={item.icon} alt={item.label} className="w-6 h-6" />
              <p className="text-sm font-medium">{item.label}</p>
            </div>
          ))}
          <Link href="/eventdetail/Ticket"
            className="w-full bg-orange-600 text-white py-2 rounded-lg font-semibold mt-4 hover:bg-orange-700 transition flex items-center justify-center"
          >
            🎟️ Book Ticket
          </Link>
        </aside>
      </div>
    </div>
  );
}
