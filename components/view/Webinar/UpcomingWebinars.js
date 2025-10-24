"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function UpcomingWebinars() {
  const scrollRef = useRef(null);

  // Static gaming events
  const webinars = [
    {
      id: 1,
      name: "PUBG Pro Battle Strategies",
      webinar_datetime: "2025-11-02T18:00:00",
      registrations_count: 240,
    },
    {
      id: 2,
      name: "Master Ludo in 5 Steps",
      webinar_datetime: "2025-11-05T17:30:00",
      registrations_count: 190,
    },
    {
      id: 3,
      name: "Carrom Trick Shots & Tactics",
      webinar_datetime: "2025-11-07T19:00:00",
      registrations_count: 150,
    },
    {
      id: 4,
      name: "Chess Openings for Beginners",
      webinar_datetime: "2025-11-09T16:00:00",
      registrations_count: 220,
    },
    {
      id: 5,
      name: "Online Gaming Career Tips",
      webinar_datetime: "2025-11-12T18:30:00",
      registrations_count: 300,
    },
  ];

  // Scroll handler
  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;
    const cardWidth = container.children[0]?.getBoundingClientRect().width + 24;
    container.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-[#0d1224] py-14">
      <div className="max-w-7xl mx-auto px-4">
        {/* ===== Upcoming Gaming Webinars Section ===== */}
        <h2 className="text-3xl font-extrabold text-center text-orange-400 mb-8 uppercase tracking-wide">
          Upcoming Gaming Webinars
        </h2>

        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800 rounded-full shadow-md p-2 hover:bg-gray-700"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>

          {/* Scrollable List */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-scroll scroll-smooth no-scrollbar px-10 snap-x snap-mandatory"
          >
            {webinars.map((webinar) => (
              <div
                key={webinar.id}
                className="w-80 flex-shrink-0 bg-[#121a35] border border-gray-700 shadow-lg rounded-xl p-6 min-h-[260px] flex flex-col justify-between snap-start hover:scale-105 transition-transform duration-300"
              >
                <div className="flex flex-col gap-3">
                  <h3 className="text-xl font-bold text-white">
                    {webinar.name}
                  </h3>
                  <div className="text-sm text-gray-400">
                    {new Date(webinar.webinar_datetime).toLocaleDateString()} |{" "}
                    {new Date(webinar.webinar_datetime).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </div>
                  <div className="text-sm text-green-400">
                    {webinar.registrations_count} Registered
                  </div>
                </div>
                <button
                  onClick={() =>
                    (window.location.href = `/webinar/${webinar.id}`)
                  }
                  className="mt-5 bg-orange-500 text-white font-semibold py-2 rounded-lg hover:bg-orange-600 transition"
                >
                  REGISTER NOW
                </button>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800 rounded-full shadow-md p-2 hover:bg-gray-700"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      {/* Hide scrollbar */}
      <style jsx global>{`
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
