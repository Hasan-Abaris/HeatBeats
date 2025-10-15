"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Trending from "./Trending";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import LatestInternship from "./LatestInternship";
import LatestJobs from "./LatestJobs";
import CertificationCourses from "./CertificationCourses";
import GuaranteeCourses from "./GuaranteeCourses";
import Companies from "./Companies";
import Overall from "./Overall";
import UpskillModel from "./UpskillModel";
import CouncellingModel from "./CouncellingModel";

const data = [
  { label: "Become A", value: "DEVOPS ENGINEER" },
  { label: "Become a", value: "Cloud Architect" },
  { label: "Become a", value: "Data Scientist" },
];

const Home = () => {
  const [isOpen, setIsOpen] = useState({
    skills: false,
    counselling: false,
  });
  const [opacity, setOpacity] = useState(60);

  useEffect(() => {
    setTimeout(() => {
      setIsOpen({ counselling: false, skills: true });
    }, 9000);
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section
        className="px-6 py-12 md:px-16 lg:py-20 bgBlueDark"
        style={{
          backgroundImage: `url("/images/BG-1.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#01333f",
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* LEFT */}
          <div className="text-center md:text-left">
            <h6 className="textBlueDark font-bold text-base mb-4 underline">
              SLA Consultants India
            </h6>
            <h1 className="textBlueDark font-bold text-3xl md:text-5xl leading-tight mb-4">
              Post Graduate Program in Generative AI and ML
            </h1>
            <p className="textBlueDark text-base md:text-lg mb-8">
              SLA Consultants India offers the University of Cambridge Online’s
              new Generative AI Course for Business Professionals
            </p>
            <div className="flex bg-white rounded-full p-2 w-full max-w-lg mx-auto md:mx-0">
              <input
                type="text"
                className="flex-1 px-4 text-gray-800 placeholder:text-gray-400 focus:outline-none"
                placeholder="Search jobs & candidates ..."
              />
              <button
                type="submit"
                className="px-4 py-2 bgBlueDark text-white font-semibold rounded-full hover:bg-[#ffcc00] transition"
              >
                Search
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-10">
              {data.map((item, i) => (
                <div key={i}>
                  <h5 className="text-lg md:text-xl font-semibold textBlueDark">
                    {item.label}
                  </h5>
                  <p className="text-sm px-2 py-1 rounded bgOrange text-white inline-block mt-1 font-medium">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right (hidden form) */}
          <div className="hidden lg:block">
            <form className="bg-white rounded-lg shadow p-8 w-80">
              <h3 className="textBlueDark font-semibold text-2xl mb-6 text-center">
                Empower your career with Abaris today
              </h3>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="job">Job Search</Label>
                  <Input placeholder="Search Job keywords " />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Label htmlFor="cat">Job Category</Label>
                    <Input placeholder="Software & Application " />
                  </div>
                  <div>
                    <Label htmlFor="type">Job Type</Label>
                    <Input placeholder="All Type " />
                  </div>
                  <div>
                    <Label htmlFor="level">Job Level</Label>
                    <Input placeholder="Junior Level " />
                  </div>
                  <div>
                    <Label htmlFor="exp">Experience</Label>
                    <Input placeholder="1 Year " />
                  </div>
                </div>
                <div>
                  <Label htmlFor="salary">Expected Salary</Label>
                  <Input placeholder="$500-$1000 PA" />
                </div>
                <Button type="submit" className="w-full">
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {isOpen.skills && (
        <UpskillModel isOpen={isOpen.skills} setIsOpen={setIsOpen} opacity={opacity} />
      )}
      {isOpen.counselling && (
        <CouncellingModel isOpen={isOpen.counselling} setIsOpen={setIsOpen} opacity={opacity} />
      )}

      {/* REST SECTIONS */}
      <Trending />
      <LatestInternship />
      <LatestJobs />
      <CertificationCourses />
      <Overall />
    </>
  );
};

export default Home;
