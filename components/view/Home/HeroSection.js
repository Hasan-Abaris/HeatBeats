import { Button } from "@/components/ui/button";
import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-white min-h-screen flex flex-col items-center justify-center p-5 md:p-10">
      <div className="w-full ">
        <div className=" text-left">
          <p className="text-bluedark font-medium  font-stretch">
            We're not the only ones excited
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold font-narrow uppercase mt-2 text-bluedark">
            We work on for our clients.
          </h2>
          <div className="flex items-center justify-between">
            <p className="text-gray-500 mt-2 font-stretch">
              A Leading solution provider for Web and IT Services
            </p>
            <Button className="">Learn More</Button>
          </div>
        </div>

        <div className="relative mt-6 rounded-3xl overflow-hidden">
          <img
            src="/images/treding-banner.jpg"
            alt="Image"
            className="w-full h-96 object-cover"
            width={1000}
            height={1000}
          />
          <div className="absolute bottom-6 left-6 bg-black bg-opacity-60 text-white p-4 border border-gray-600 backdrop-blur-sm rounded-2xl w-4/5">
            <span className="bg-gray-300 text-black text-xs px-2 py-1 rounded-full">
              NEWS
            </span>
            <h3 className="mt-2 font-semibold font-stretch">
              Pioneers in Web Development
            </h3>
            <p className="text-sm">
              We specialize in modern web technologies, delivering high-quality
              static & dynamic websites tailored to your business needs.
            </p>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-5 ">
          <div className="bg-primary/20 p-6 rounded-2xl text-left">
            <h3 className="text-3xl font-bold font-narrow">95+</h3>
            <p className="text-gray-500 font-stretch">PROJECTS COMPLETED</p>
          </div>
          <div className="bg-primary/20 p-6 rounded-2xl text-left relative">
            <h3 className="text-3xl font-bold font-narrow">100%</h3>
            <p className="text-gray-500 font-stretch">CLIENT SATISFACTION</p>
            <span className="absolute top-2 right-2 border border-black text-xs px-2 py-1 rounded-full">
              RELIABLE
            </span>
          </div>
          <div className="bg-primary text-gray-200 p-6 rounded-2xl text-left">
            <h3 className="text-3xl font-bold font-narrow">LATEST</h3>
            <p className="font-stretch">TECHNOLOGIES USED</p>
          </div>
          <div className="bg-primary/20 p-6 rounded-2xl text-left">
            <h3 className="text-3xl font-bold font-narrow">115+</h3>
            <p className="text-gray-500 font-stretch">HAPPY CLIENTS</p>
          </div>
          <div className="bg-primary/20 p-6 rounded-2xl text-left relative">
            <h3 className="text-3xl font-bold font-narrow">11+</h3>
            <p className="text-gray-500 font-stretch">COUNTRIES</p>
            {/* <span className="absolute top-2 right-2 border border-black text-xs px-2 py-1 rounded-full">
              RELIABLE
            </span> */}
          </div>
          <div className="bg-primary text-gray-200 p-6 rounded-2xl text-left">
            <h3 className="text-3xl font-bold font-narrow">50+</h3>
            <p className="font-stretch">POSITIVE REVIEWS</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
