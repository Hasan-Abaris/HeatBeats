'use client';
import React, { useRef, useState, useEffect } from 'react';

export default function LatestBlogPosts({ posts, topic }) {
  const viewportRef = useRef();
  const scrollerRef = useRef();
  const [activeIndex, setActiveIndex] = useState(0);
  const [pageWidth, setPageWidth] = useState(0);
  const totalPages = Math.ceil(posts.length / 3);

  // Filter blog posts by topic
  const filteredPosts = posts.filter(
    (post) => post.topic?.toLowerCase() === topic.toLowerCase()
  );

  // Measure visible width (3 cards) once
  useEffect(() => {
    if (viewportRef.current) {
      setPageWidth(viewportRef.current.clientWidth);
    }
  }, []);

  // Update activeIndex on scroll (in case of drag)
  useEffect(() => {
    const scroller = scrollerRef.current;
    const onScroll = () => {
      const idx = Math.round(scroller.scrollLeft / pageWidth);
      setActiveIndex(idx);
    };
    scroller.addEventListener('scroll', onScroll, { passive: true });
    return () => scroller.removeEventListener('scroll', onScroll);
  }, [pageWidth]);

  const goToPage = (idx) => {
    if (idx < 0) idx = 0;
    if (idx >= totalPages) idx = totalPages - 1;
    scrollerRef.current.scrollTo({
      left: idx * pageWidth,
      behavior: 'smooth',
    });
    setActiveIndex(idx);
  };

  return (
    <section className="p-8 w-[60vw] mx-auto">
      <h2 className="text-xl font-semibold mb-6">
        Latest Blog Posts on {topic}
      </h2>
      <div className="flex items-start">
        <div className="flex items-center space-x-4 flex-1">
          {/* left arrow */}
          <button
            onClick={() => goToPage(activeIndex - 1)}
            disabled={activeIndex === 0}
            className="bg-white rounded-full shadow p-2 disabled:opacity-50"
          >
            <svg
              className="w-5 h-5 text-gray-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* viewport showing exactly 3 items */}
          <div
            ref={viewportRef}
            className="overflow-hidden"
            style={{
              width: `calc(3 * 15rem + 2 * 1.5rem)`,
            }} /* 3 × w-60 + 2 × space-x-6 */
          >
            <div
              ref={scrollerRef}
              className="flex space-x-6 hide-scrollbar"
              style={{
                overflowX: 'auto',
                scrollSnapType: 'x mandatory',
                scrollBehavior: 'smooth',
              }}
            >
              {filteredPosts.map((p, i) => (
                <a
                  key={i}
                  href={p.link}
                  className="flex-shrink-0 w-60 scroll-snap-align-start"
                >
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-36 object-cover rounded"
                  />
                  <p className="text-xs text-gray-500 mt-2">{p.date}</p>
                  <h3 className="text-sm font-medium mt-1">{p.title}</h3>
                </a>
              ))}
            </div>
          </div>

          {/* right arrow */}
          <button
            onClick={() => goToPage(activeIndex + 1)}
            disabled={activeIndex === totalPages - 1}
            className="bg-white rounded-full shadow p-2 disabled:opacity-50"
          >
            <svg
              className="w-5 h-5 text-gray-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* sidebar */}
        <aside className="ml-8 w-40 text-right">
          <h3 className="font-semibold">Blog posts</h3>
          <p className="text-sm text-gray-600 mb-4">
            Check out our blog for free insights and updates on your field
          </p>
          <a
            href="#"
            className="inline-block border border-blue-700 text-blue-700 px-4 py-1 text-sm rounded hover:bg-blue-700 hover:text-white transition"
          >
            SHOW ME
          </a>
        </aside>
      </div>

      {/* pagination dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {Array.from({ length: totalPages }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToPage(idx)}
            className={`block rounded-full transition-all focus:outline-none ${
              idx === activeIndex
                ? 'bg-blue-700 w-3 h-3'
                : 'bg-gray-300 w-2 h-2'
            }`}
          />
        ))}
      </div>

      {/* hide-scrollbar */}
      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
