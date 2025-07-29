"use client"
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
    counselling: false
  });
  const [opacity, setOpacity] = useState(60);
  useEffect(() => {

    setTimeout(() => {
      setIsOpen({ counselling: false, skills: true })
    }, 9000);
    

  }, [])
  return (
    <>
      <section
        className="p-6 md:px-16 md:py-16 bgBlueDark"
        style={{
          backgroundImage: `url("/images/BG-1.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#01333f",
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center h-full">
          <div className="text-center md:text-start">
            <h6 className="textBlueDark font-bold text-base mb-6 underline">
              SLA Consultants India
            </h6>
            <h1 className="textBlueDark font-bold text-3xl md:text-5xl mb-6">
              Post Graduate Program in Generative AI and ML
            </h1>
            <p className="textBlueDark text-base md:text-lg">
              SLA Consultants India offers the University of Cambridge Online’s
              new Generative AI Course for Business Professionals
            </p>
            <div className="mt-6 w-72md:w-96 flex justify-center items-center bg-white rounded-full p-2">
              <input
                type="text"
                className="w-full h-full px-4 text-gray-800 lg:text-left placeholder:text-gray-400 focus:outline-none focus:border-gray-500"
                placeholder="Search jobs & candidates ..."
              />
              <button
                type="submit"
                className="h-full py-2 px-4 uppercase bgBlueDark shadow-md rounded-full text-sm text-white  w-fit hover:bg-[#ffcc00] transition duration-300"
              >
                Search
              </button>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
              {data.map((item, i) => {
                return (
                  <div key={i}>
                    <h5 className="text-xl font-semibold textBlueDark">
                      {item.label}
                    </h5>
                    <p className="text-sm px-2 py-1 rounded font-medium bgOrange text-white inline">
                      {item.value}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="hidden">
            <form className="bg-white rounded p-8 w-96 m-auto">
              <h3 className="textBlueDark font-semibold text-3xl mb-5 text-center md:text-start">
                Empower your career with Abaris today
              </h3>
              <div className="mb-2">
                <Label htmlFor="job">Job Search</Label>
                <Input type="name" placeholder="Search Job keywords " />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label htmlFor="Job Category">Job Category</Label>
                  <Input type="name" placeholder="Software & Application " />
                </div>
                <div>
                  <Label htmlFor="Job Type">Job Type</Label>
                  <Input type="name" placeholder="All Type " />
                </div>
                <div>
                  <Label htmlFor="Job Level">Job Level</Label>
                  <Input type="name" placeholder="Junior Level " />
                </div>
                <div className="mb-2">
                  <Label htmlFor="Experience">Experience</Label>
                  <Input type="name" placeholder="1 Year " />
                </div>
              </div>

              <div className="mb-2">
                <Label htmlFor="Expected Salary">Expected Salary</Label>
                <Input type="name" placeholder="$500-$1000 PA" />
              </div>
              <div className="mb-2">
                <Button type="submit">Submit</Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {isOpen.skills && <UpskillModel isOpen={isOpen.skills} setIsOpen={setIsOpen} opacity={opacity} />}
      {isOpen.counselling && <CouncellingModel isOpen={isOpen.counselling} setIsOpen={setIsOpen} opacity={opacity} />}

      <Trending />
      <LatestInternship />
      <LatestJobs />
      <CertificationCourses />
      {/* <GuaranteeCourses /> */}
      {/* <Companies /> */}
      <Overall />
      
    </>
  );
};

export default Home;
