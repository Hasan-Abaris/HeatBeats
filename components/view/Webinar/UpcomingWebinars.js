'use client';

import { useRef, useMemo, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { getAllWebinars } from '@/app/comman/FrontApi';
import Loadar from '@/app/comman/Loader';

export default function UpcomingWebinars() {
  const scrollRef = useRef(null);
  const [webinars, setWebinars] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch webinars on mount
  useEffect(() => {
    const fetchWebinars = async () => {
      try {
        const res = await getAllWebinars();
        setWebinars(res.data.data || []);
      } catch (err) {
        console.error('Failed to fetch webinars:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchWebinars();
  }, []);

  // Scroll by one card + gap (24px)
  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;

    const firstCard = container.children[0];
    if (!firstCard) return;

    const cardWidth = firstCard.getBoundingClientRect().width + 24;
    container.scrollBy({
      left: direction === 'left' ? -cardWidth : cardWidth,
      behavior: 'smooth',
    });
  };

  // Filter for next 9 days
  const upcoming = useMemo(() => {
    const today = new Date();
    const nineDaysLater = new Date();
    nineDaysLater.setDate(today.getDate() + 9);

    return webinars.filter((w) => {
      const d = new Date(w.date);
      return d >= today && d <= nineDaysLater;
    });
  }, [webinars]);

  if (loading) return <Loadar />;
  if (upcoming.length === 0) return null;

  return (
    <section className="bg-[#f5f8fd] py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-semibold text-blue-700 mb-6 text-center">
          Upcoming Webinars
        </h2>

        <div className="relative">
          {/* Left Chevron */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow-md p-2 hover:bg-gray-100"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Scroll Container */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-scroll scroll-smooth no-scrollbar px-12 snap-x snap-mandatory"
          >
            {upcoming.map((webinar, i) => (
              <div
                key={i}
                className="webinar-card w-80 sm:w-[calc(50%-16px)] md:w-[calc(33.333%-16px)] flex-shrink-0 bg-white shadow rounded-lg p-5 min-h-[260px] flex flex-col justify-between snap-start"
              >
                <div className="flex flex-col gap-3">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {webinar.title}
                  </h3>
                  <div className="text-sm text-gray-600 flex items-center gap-2">
                    <span className="inline-block w-4">
                      <img src="/images/calendar.svg" alt="Date" />
                    </span>
                    {webinar.date}
                    <span className="mx-2">|</span>
                    {webinar.time}
                  </div>
                  <div className="text-sm text-green-700 flex items-center gap-1">
                    <span className="inline-block w-4">
                      <img src="/images/user.svg" alt="User Icon" />
                    </span>
                    {webinar.registrations} Registered
                  </div>
                </div>
                <button
                  onClick={() =>
                    window.location.href = `/webinar/${webinar.id}`
                  }
                  className="mt-5 border border-blue-600 text-blue-600 font-semibold py-2 rounded hover:bg-blue-50 transition"
                >
                  REGISTER NOW
                </button>
              </div>
            ))}
          </div>

          {/* Right Chevron */}
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow-md p-2 hover:bg-gray-100"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Scoped CSS to hide scrollbar */}
      <style jsx global>{`
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
