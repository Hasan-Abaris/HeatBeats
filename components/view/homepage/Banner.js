"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import { getBannerDetails } from "@/app/comman/FrontApi";

function Banner() {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    async function fetchBannerData() {
      try {
        const res = await getBannerDetails(); // No ID needed since it returns grouped by location
        const websiteBanners = res.data?.data?.["Website Promotion"] || [];
        (res.data?.data);
        ("Fetched Website Banners:", websiteBanners);



        setBanners(websiteBanners); // Save banners to state
      } catch (err) {
        console.error("Failed to fetch banners:", err);
      }
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
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <div
              className="w-full h-full bg-cover bg-center flex items-center justify-center text-white relative"
              style={{
                backgroundImage: `url(http://15.206.141.223/backend/public/uploads/banner/${banner.banner})`,
              }}
            >
              <div className="bg-black bg-opacity-40 p-4 rounded">
                <h2 className="text-2xl font-bold">{banner.heading}</h2>
                <p className="text-sm mt-2">{banner.description}</p>
                {banner.banner_link && banner.banner_button_text && (
                  <a
                    href={banner.banner_link}
                    className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded"
                  >
                    {banner.banner_button_text}
                  </a>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Static bottom cards */}
      <div className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 flex gap-4 z-10">
        {[
          { title: "DEVOPS ENGINEER", link: "#", active: false },
          { title: "CLOUD ARCHITECT", link: "#", active: false },
          { title: "DATA SCIENTIST", link: "#", active: false },
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
