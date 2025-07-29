import React from 'react';

export default function HeroSection({ topic }) {
  return (
    <div
      className="w-full bg-gradient-to-r from-blue-900 to-blue-700 bg-blend-overlay bg-no-repeat bg-center text-white p-10"
      style={{
        backgroundImage: "url('/images/RibbonHeroIMG.jpg')",
        backgroundSize: '100% auto',
      }}
    >
      <div className="w-[60vw] mx-auto grid grid-cols-2 items-center gap-8">
        <h1 className="text-3xl md:text-4xl font-bold">
          {topic?.toUpperCase()} CERTIFICATION COURSES
        </h1>
        <p className="text-sm md:text-base leading-relaxed">
          {topic
            ? `Discover the top certification courses in ${topic}. Upskill now to meet industry demands.`
            : `Explore industry-recognized courses to accelerate your career.`}
        </p>
      </div>
    </div>
  );
}
