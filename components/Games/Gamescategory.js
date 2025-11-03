"use client";
import React from "react";
import Slider from "react-slick";

const categories = [
  { name: "Action", icon: "actions.svg" },
  { name: "Adventure", icon: "adventure.svg" },
  { name: "Arcade", icon: "arcade.svg" },
  { name: "Puzzle", icon: "puzzle.svg" },
  { name: "Racing", icon: "racing.svg" },
  { name: "Sports", icon: "sport.svg" },
  { name: "Girls", icon: "girls.svg" },
  { name: "Multiplayer", icon: "multiplayer.svg" },
  { name: "Shooting", icon: "shooting.svg" },
  { name: "Strategy", icon: "strategy.svg" },
];

function Gamescategory() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 2 },
      },
    ],
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Play Games By Category

        </h3>

        {/* Slick Carousel */}
        <Slider {...settings}>
          {categories.map((cat, i) => (
            <div key={i} className="px-3">
              <div className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 p-4 flex flex-col items-center justify-center cursor-pointer">
                <img
                  src={`https://theme.cloudarcade.net/content/themes/arcade-one/images/icon/${cat.icon}`}
                  alt={cat.name}
                  width={60}
                  height={60}
                  className="mb-3"
                />
                <span className="font-medium text-gray-800 text-center">
                  {cat.name}
                </span>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Gamescategory;
