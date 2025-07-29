import Link from "next/link";
import { RxCross2 } from "react-icons/rx";

import React from "react";
import { FiSearch } from "react-icons/fi";
import { Input } from "@/components/ui/input";
const data = {
  popularCities: [
    { id: 1, name: "Delhi/NCR" },
    { id: 2, name: "AI" },
    { id: 3, name: "Mumbai" },
    { id: 4, name: "ChatGpt" },
    { id: 5, name: "Chennai" },
    { id: 6, name: "Kolkata" },
  ],

  popularCategories: [
    { id: 1, name: "Big brands" },
    { id: 2, name: "Work from home" },
    { id: 3, name: "Part-time" },
    { id: 4, name: "MBA" },
    { id: 5, name: "Engineering" },
    { id: 6, name: "Media" },
    { id: 7, name: "Design" },
    { id: 8, name: "Data Science" },
  ],
  popularCourses: [
    {
      id: 1,
      university: "Purdue University",
      title: "Post Graduate Program in DevOps",
      description: "Includes Source Code Management, Continuous Integration...",
      learners: "1k+ Satisfied Learners",
      emoji: "😊",
      link: "#",
    },
    {
      id: 2,
      university: "Role Based Course Combo",
      title: "Best DevOps Courses",
      description: "Includes 4 Live courses: DevOps, Docker, AWS DevOps...",
      learners: "54k+ Satisfied Learners",
      emoji: "😊",
      link: "#",
    },
    {
      id: 3,
      university: " University",
      title: "Post Graduate Program in DevOps",
      description: "Includes Source Code Management, Continuous Integration...",
      learners: "1k+ Satisfied Learners",
      emoji: "😊",
      link: "#",
    },
    {
      id: 4,
      university: "Role B Combo",
      title: "Best DevOps Courses",
      description: "Includes 4 Live courses: DevOps, Docker, AWS DevOps...",
      learners: "54k+ Satisfied Learners",
      emoji: "😊",
      link: "#",
    },
  ],
};


const SearchArea = ({ handleRemove }) => {

  return (
    <>
      <section className="p-6 w-full h-screen bg-white fixed z-30 top-0 left-0">
        <div className="lg:w-4/5 m-auto md:p-8 mb-4">
          <div className="flex justify-end text-xl cursor-pointer" onClick={handleRemove}>
            <RxCross2 />
          </div>

          <div className=" rounded mb-5">
            <div className="relative">
              <Input
                className="p-2 mt-1 h-14 bg-white border text-sm rounded"
                placeholder="e.g. Design, Mumbai, Infosys"
                type="e.g. Design, Mumbai, Infosys"
                name="e.g. Design, Mumbai, Infosys"
              />
              <span className="absolute top-0 right-0 h-full flex items-center justify-center text-xl bgBlueDark text-white px-4 rounded">
                <FiSearch />
              </span>
            </div>
          </div>

          <div className="border rounded p-6">
            
            <div className="mb-5">
              <h3 className="textBlueBlack font-semibold mb-2">Popular Searches
              </h3>
              <ul className="flex flex-wrap gap-4">
                {data.popularCities.map((item) => {
                  return <li key={item.id} className="border rounded-full px-2 text-sm grayBackground">{item.name}</li>;
                })}
              </ul>
            </div>
            <div>
              <h3 className="textBlueBlack font-semibold mb-2">Popular Course Categories</h3>
              <ul className="flex flex-wrap gap-4">
                {data.popularCategories.map((item) => {
                  return <li key={item.id} className="border rounded-full px-2 text-sm grayBackground">{item.name}</li>;
                })}
              </ul>
            </div>


            <div className="mb-5">
              <div>
                <h3 className="textBlueBlack font-semibold mb-4">Popular Courses</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {data.popularCourses.map((course) => (
                    <div key={course.id} className="border rounded-lg p-5 bg-white shadow">
                      <p className="text-sm text-orange-600 font-medium mb-1">{course.university}</p>
                      <h4 className="text-lg font-semibold text-blue-900 mb-2">{course.title}</h4>
                      <p className="text-sm text-gray-600 mb-2">{course.description}</p>
                      <p className="text-sm flex items-center mb-4">
                        <span className="mr-1">{course.emoji}</span> {course.learners}
                      </p>
                      <Link href={course.link} className="textBlueDark font-medium text-sm hover:underline flex items-center gap-1">
                        KNOW MORE <span>→</span>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

            </div>



          </div>
        </div>
      </section>
    </>
  );
};

export default SearchArea;
