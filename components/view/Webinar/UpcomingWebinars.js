"use client";

import { useRef, useMemo, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { getAllWebinars } from "@/app/comman/FrontApi";
import Loadar from "@/app/comman/Loader";

export default function UpcomingWebinars() {
  const scrollRef = useRef(null);

  const [webinars, setWebinars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch webinars
  useEffect(() => {
    const fetchWebinars = async () => {
      try {
        const res = await getAllWebinars();
        const data = res?.data?.data || [];
        setWebinars(data);
      } catch {
        setError("Unable to load webinars at the moment.");
        // fallback placeholders
        setWebinars([
          {
            id: 1,
            title: "Intro to Cloud Computing",
            date: "2025-08-15",
            time: "4:00 PM",
            registrations: 120,
          },
          {
            id: 2,
            title: "Data Science for Beginners",
            date: "2025-08-17",
            time: "5:30 PM",
            registrations: 95,
          },
          {
            id: 3,
            title: "Intro to Cloud Computing",
            date: "2025-08-15",
            time: "4:00 PM",
            registrations: 120,
          },
          {
            id: 4,
            title: "Data Science for Beginners",
            date: "2025-08-17",
            time: "5:30 PM",
            registrations: 95,
          },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchWebinars();
  }, []);

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

  // Filter upcoming webinars (from today onward, no upper limit)
  const upcoming = useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return webinars.filter((w) => {
      if (!w.webinar_datetime) return false;
      const parsedDate = new Date(w.webinar_datetime);
      return parsedDate >= today;
    });
  }, [webinars]);

  if (loading) return <Loadar />;

  return (
    <div className="bg-[#f5f8fd] py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* ===== Upcoming Webinars Section ===== */}
        <h2 className="text-2xl font-semibold text-blue-700 mb-6 text-center">
          Upcoming Webinars
        </h2>

        {error && (
          <div className="text-center text-red-600 mb-4">{error}</div>
        )}

        {upcoming.length === 0 ? (
          <div className="text-center text-gray-500 py-6">
            No upcoming webinars.
          </div>
        ) : (
          <div className="relative">
            {/* Left Arrow */}
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow-md p-2 hover:bg-gray-100"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Scrollable List */}
            <div
              ref={scrollRef}
              className="flex gap-6 overflow-x-scroll scroll-smooth no-scrollbar px-12 snap-x snap-mandatory"
            >
              {upcoming.map((webinar, i) => (
                <div
                  key={webinar.id || i}
                  className="w-80 flex-shrink-0 bg-white shadow rounded-lg p-5 min-h-[260px] flex flex-col justify-between snap-start"
                >
                  <div className="flex flex-col gap-3">
                    <h3 className="text-lg font-semibold">{webinar.name}</h3>
                    <div className="text-sm text-gray-600">
                      {new Date(webinar.webinar_datetime).toLocaleDateString()} |{" "}
                      {new Date(webinar.webinar_datetime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                    <div className="text-sm text-green-700">
                      {webinar.registrations_count ?? 0} Registered
                    </div>
                  </div>
                  <button
                    onClick={() =>
                      (window.location.href = `/webinar/${webinar.id}`)
                    }
                    className="mt-5 border border-blue-600 text-blue-600 font-semibold py-2 rounded hover:bg-blue-50 transition"
                  >
                    REGISTER NOW
                  </button>
                </div>
              ))}
            </div>

            {/* Right Arrow */}
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow-md p-2 hover:bg-gray-100"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
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
