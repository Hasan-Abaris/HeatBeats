import React from "react";

function Banner() {
  return (
    <section className="section-header bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-900 text-white py-20">
      <div className="container mx-auto px-6">
        <div className="header-area text-center max-w-3xl mx-auto">
          {/* Title */}
          <div className="masthead-title mb-4">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide">
              Play on Your Browser
            </h1>
          </div>

          {/* Description */}
          <div className="masthead-description">
            <h3 className="text-lg md:text-xl text-gray-200 leading-relaxed">
              Welcome to <span className="font-semibold text-yellow-400">HeatBeasts Community Game</span> — a place where players from around the world come together to explore, compete, and create fun experiences. Dive into a growing collection of free browser games built for both casual and competitive play. No downloads, no limits — just pure gaming energy!
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
