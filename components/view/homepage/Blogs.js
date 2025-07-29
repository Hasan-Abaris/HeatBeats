"use client";
import React, { useRef, useState, useEffect } from "react";
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";

const blogs = [
  {
    date: "April 30th",
    title: "Top DevOps Interview Questions And Answers for 2025 [Updated]",
    image: "/images/discoverimage/blo1.png",
  },
  {
    date: "January 15th",
    title: "Java Interview Questions and Answers",
    image: "/images/discoverimage/blo2.png",
  },
  {
    date: "October 30th",
    title: "Setting Up A Multi Node Cluster In Hadoop 2.X",
    image: "/images/discoverimage/blo3.png",
  },
];

function Blogs() {
  const containerRef = useRef(null);
  const cardRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollToIndex = (index) => {
    const container = containerRef.current;
    const card = cardRef.current;

    if (container && card) {
      const cardWidth = card.offsetWidth + 16; // include padding/margin
      container.scrollTo({ left: cardWidth * index, behavior: "smooth" });
    }
  };

  useEffect(() => {
    scrollToIndex(currentIndex);
  }, [currentIndex]);

  return (
    <div className="w-[1130px] mx-auto relative">

      <h2 className="text-2xl font-bold mb-4 mt-6">Latest Blog Posts</h2>
      <div className="max-w-[1200px] mx-auto flex items-start gap-6 relative">

        <div className="flex-1 overflow-hidden">
          <div
            ref={containerRef}
            className="flex gap-4 overflow-x-hidden scroll-smooth"
          >
            {blogs.map((blog, idx) => (
              <div
                key={idx}
                ref={idx === 0 ? cardRef : null}
                className="flex-shrink-0 w-[300px] bg-white rounded-md shadow p-4"
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-[150px] object-cover rounded"
                />
                <p className="text-[10px] text-gray-600 mt-2">{blog.date}</p>
                <h3 className="text-[14px] font-medium text-gray-900 mt-1">
                  {blog.title}
                </h3>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-4 gap-2">
            {blogs.map((_, idx) => (
              <div
                key={idx}
                className={`w-2 h-2 rounded-full ${idx === currentIndex ? "bg-sky-800" : "bg-gray-300"
                  }`}
              ></div>
            ))}
          </div>
        </div>


        <div className="w-[220px] shrink-0">
          <h2 className="text-sm font-bold text-gray-900 mb-2">BLOG POSTS</h2>
          <p className="text-[12px] text-gray-600 mb-4 leading-tight">
            Check out our blog for free insights and updates on your field
          </p>
          <button className="border border-blue-800 text-blue-800 text-[11px] font-semibold px-4 py-1 rounded-sm">
            SHOW ME
          </button>
        </div>


        <button
          className="absolute left-0 top-[45%] -translate-y-1/2 p-2 bg-white rounded-full shadow text-gray-800"
          onClick={() => setCurrentIndex((prev) => Math.max(prev - 1, 0))}
        >
          <MdOutlineArrowBackIos />
        </button>
        <button
          className="absolute right-[240px] top-[45%] -translate-y-1/2 p-2 bg-white rounded-full shadow text-gray-800"
          onClick={() =>
            setCurrentIndex((prev) => Math.min(prev + 1, blogs.length - 1))
          }
        >
          <MdOutlineArrowForwardIos />
        </button>
      </div>
    </div>
  );
}
export default Blogs;