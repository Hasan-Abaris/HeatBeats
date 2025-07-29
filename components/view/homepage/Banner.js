"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import { getAllBanners, getBannerDetails } from "@/app/comman/FrontApi";

const banners = [
  {
    image: "/images/BGnew-1.png",
    title: "Explore Our Power BI Courses",
    subtitle: "Learn from experts with real-world experience.",
  },
  {
    image: "/images/BGnew-1.png",
    title: "Master Data Visualization",
    subtitle: "Interactive dashboards and live projects.",
  },
];

const cards = [
  { title: "DEVOPS ENGINEER", link: "#", active: false },
  { title: "CLOUD ARCHITECT", link: "#", active: false },
  { title: "DATA SCIENTIST", link: "#", active: false },
];

function Banner() {
  useEffect(() => {
    async function fetchBannerData() {
      try {
        const res = await getAllBanners();

        const firstBannerId = res.data?.data?.[0]?.id;
        if (firstBannerId) {
          const detailRes = await getBannerDetails({ id: firstBannerId });
        } else {
        }
      } catch (err) {}
    }
    fetchBannerData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full h-96 bg-gray-200 relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop
        className="w-full h-[400px]"
      >
        {banners.map((banner, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="w-full h-full bg-cover bg-center flex items-center justify-center text-white relative"
              style={{ backgroundImage: `url(${banner.image})` }}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 flex gap-4 z-10">
        {cards.map((card, idx) => (
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
