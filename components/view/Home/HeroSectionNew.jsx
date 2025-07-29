"use client";
// import InquiryPoup from "@/components/section/InquiryPopup";
import React from "react";
// import HeroImage from "../assets/HeroImage.jpg";

import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay";



const HeroSectionNew = () => {
  return (
    <section className="flex flex-col">
      <Carousel plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]} opts={{
        align: "start",
        loop: true,
      }}>
        <CarouselContent>
          <CarouselItem>
            <div className="w-full">
              <div className="relative w-full h-[90vh] flex items-center bg-gray-900">
                {/* Background Image */}
                <img
                  src="/assets/hero-bg.jpg"
                  alt="Hero"
                  width={1400}
                  height={1000}
                  className="absolute inset-0 w-full h-full object-cover rounded-2xl opacity-50"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-bluedark rounded-2xl bg-opacity-10"></div>

                {/* Hero Content */}
                <div className="relative z-10 max-w-3xl text-left text-white p-5 md:px-16">
                  <h3 className="text-4xl md:text-5xl font-bold leading-tight">
                    Empowering excellence through training and consulting
                  </h3>
                  <p className="text-lg mt-4 max-w-lg">
                    We build high-quality websites and digital solutions to enhance
                    user experience and drive business growth. Our team leverages
                    modern technologies to deliver seamless performance and visually
                    stunning applications.
                  </p>
                  {/* <InquiryPoup>
                    <button className="mt-6 bg-[#0473b7] text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 shadow-lg hover:bg-[#070f4d] transition">
                      Learn More ➜
                    </button>
                  </InquiryPoup> */}
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="w-full">
              <div className="relative w-full h-[90vh] flex items-center bg-gray-900">
                {/* Background Image */}
                <img
                  src="/images/treding-banner.jpg"
                  alt="Hero"
                  width={1400}
                  height={1000}
                  className="absolute inset-0 w-full h-full object-cover rounded-2xl opacity-50"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-bluedark rounded-2xl bg-opacity-10"></div>

                {/* Hero Content */}
                <div className="relative z-10 max-w-3xl text-left text-white p-5 md:px-16">
                  <h3 className="text-4xl md:text-5xl font-bold leading-tight">
                    Transforming Ideas into Reality with Cutting-Edge Web Solutions
                  </h3>
                  <p className="text-lg mt-4 max-w-lg">
                    We build high-quality websites and digital solutions to enhance
                    user experience and drive business growth. Our team leverages
                    modern technologies to deliver seamless performance and visually
                    stunning applications.
                  </p>
                  {/* <InquiryPoup>
                    <button className="mt-6 bg-[#0473b7] text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 shadow-lg hover:bg-[#070f4d] transition">
                      Learn More ➜
                    </button>
                  </InquiryPoup> */}
                </div>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>



    </section>
  );
};

export default HeroSectionNew;
