import React from 'react';

function Banner() {
  return (
    <div className="relative w-full bg-center bg-cover text-white py-24 md:py-32"
         style={{ backgroundImage: "url('https://yourimageurl.com/banner-bg.jpg')" }}>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto text-center px-4">
        {/* Breadcrumb */}
        <nav className="text-sm mb-4">
          <span className="text-gray-200 hover:text-white transition">
            <a href="https://www.clashschool.com">Home</a>
          </span>
          <span className="mx-2 text-gray-400">/</span>

          <span className="text-gray-200 hover:text-white transition">
            <a href="https://www.clashschool.com/product-category/coaching-lessons/">Coaching Lessons</a>
          </span>
          <span className="mx-2 text-gray-400">/</span>

          <span className="text-gray-200 hover:text-white transition">
            <a href="https://www.clashschool.com/product-category/coaching-lessons/mobile-gaming/">Mobile Gaming</a>
          </span>
          <span className="mx-2 text-gray-400">/</span>

          <span className="text-gray-200 hover:text-white transition">
            <a href="https://www.clashschool.com/product-category/coaching-lessons/mobile-gaming/clash-of-clans/">Clash of Clans</a>
          </span>
          <span className="mx-2 text-gray-400">/</span>

          <span className="text-gray-300">60 Minute Private Lesson with Coach bradders</span>
        </nav>

        {/* Page Title */}
        <h1 className="text-3xl md:text-5xl font-bold">60 Minute Private Lesson with Coach bradders</h1>
      </div>
    </div>
  );
}

export default Banner;
