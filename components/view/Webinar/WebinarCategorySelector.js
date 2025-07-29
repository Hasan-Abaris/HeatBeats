import React, { useRef } from 'react';

import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function WebinarCategorySelector({
  categories,
  selectedCategory,
  onSelectCategory,
}) {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -300 : 300,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="w-full mt-10 px-4 mb-10">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Browse by Categories
      </h2>

      <div className="flex items-center justify-center gap-2">
        {/* Left Chevron */}
        <button
          onClick={() => scroll('left')}
          className="bg-white shadow-md p-2 rounded-full hover:bg-gray-100"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Scrollable Categories */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto no-scrollbar gap-5 scroll-smooth px-1"
          style={{
            maxWidth: 'calc(200px * 4 + 64px)', // Show 4 cards + total gap
          }}
        >
          {['All', ...categories].map((cat, idx) => {
            const isAll = cat === 'All';
            const topic = isAll ? 'All' : cat.topic;
            const iconSrc = isAll
              ? '/images/world.svg' // Default icon for 'All'
              : cat.icon || '/images/fallback.svg'; // Custom SVG for each topic

            const isActive =
              selectedCategory === topic ||
              (isAll && selectedCategory === 'All');

            return (
              <button
                key={idx}
                onClick={() => onSelectCategory(topic)}
                className={`min-w-[200px] max-w-[200px] h-[160px] flex-shrink-0 flex flex-col items-center justify-center border rounded-2xl px-6 py-4 shadow transition-all ${
                  isActive
                    ? 'border-blue-600 bg-blue-50 ring-2 ring-blue-300'
                    : 'hover:bg-gray-50 border-gray-200'
                }`}
                style={{ scrollSnapAlign: 'start' }}
              >
                <div className="mb-3">
                  <Image
                    src={iconSrc}
                    alt={topic}
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
                <p className="text-base font-semibold text-gray-800 text-center">
                  {topic}
                </p>
              </button>
            );
          })}
        </div>

        {/* Right Chevron */}
        <button
          onClick={() => scroll('right')}
          className="bg-white shadow-md p-2 rounded-full hover:bg-gray-100"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
