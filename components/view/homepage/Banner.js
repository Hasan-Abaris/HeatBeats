"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Banner() {
  // 🎮 Static banners (edit this array for your own banners)
  const banners = [
    {
      id: 1,
      image: "/images/banner1.jpg",
      heading: "Play & Learn Online",
      description: "Join live game-based learning with fun courses for all ages.",
      buttonText: "Explore Games",
      link: "/games",
    },
    {
      id: 2,
      image: "/images/banner2.jpg",
      heading: "Join Live Gaming Classes",
      description: "Learn chess, ludo, and strategy games from expert tutors.",
      buttonText: "Start Learning",
      link: "/courses",
    },
    {
      id: 3,
      image: "/images/banner3.jpg",
      heading: "Top Tutors & Online Courses",
      description: "Level up your gaming and learning skills together.",
      buttonText: "View Courses",
      link: "/tutors",
    },
  ];

  return (
    <div className="relative w-full h-[450px] bg-gray-100 flex flex-col items-center justify-center">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop
        className="w-full h-[450px]"
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <div
              className="w-full h-[450px] bg-cover bg-center flex items-center justify-center text-white relative"
              style={{
                backgroundImage: `url(${banner.image})`,
              }}
            >
              <div className="bg-black bg-opacity-50 p-6 rounded-lg text-center max-w-xl mx-auto">
                <h2 className="text-3xl font-bold mb-3">{banner.heading}</h2>
                <p className="text-base mb-4">{banner.description}</p>
                {banner.buttonText && banner.link && (
                  <a
                    href={banner.link}
                    className="inline-block mt-2 px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
                  >
                    {banner.buttonText}
                  </a>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Bottom category cards */}
      <div className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 flex gap-4 z-10">
        {[
          { title: "CHESS MASTER", link: "#", active: true },
          { title: "LUDO EXPERT", link: "#", active: false },
          { title: "PUBG STRATEGIST", link: "#", active: false },
        ].map((card, idx) => (
          <div
            key={idx}
            className={`rounded-xl px-6 py-4 shadow-lg text-center w-[300px] bg-white transition-all duration-300 ${
              card.active ? "border-2 border-blue-500" : "hover:border-blue-300"
            }`}
          >
            <div className="flex text-left items-center justify-between">
              <div>
                <p className="text-[12px] text-gray-500 mb-1">BECOME A</p>
                <h3 className="font-bold text-sm mb-2">{card.title}</h3>
              </div>
              <a
                href={card.link}
                className="text-[12px] text-blue-600 font-medium"
              >
                KNOW MORE
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Banner;
