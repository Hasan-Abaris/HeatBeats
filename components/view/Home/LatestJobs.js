import Link from "next/link";
import { SlGraph } from "react-icons/sl";
import React from "react";
import { MdMyLocation } from "react-icons/md";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";
import { IoIosStar } from "react-icons/io";

const masterPrograms = [
  {
    bgColor: "#ff98a3",
    id: "mp-1",
    title: "DevOps Engineer Course Masters Program",
    shortTitle: "DevOps Engineer Course Masters Program",
    rating: 4,
    reviews: 18600,
    tag: "Best Seller",
  },
  {
    bgColor: "#6e97ff",
    id: "mp-2",
    title: "Generative AI Course: Masters Program",
    shortTitle: "Generative AI Course: Masters Program",
    rating: 4,
    reviews: 3800,
  },
  {
    bgColor: "#91c653",
    id: "mp-3",
    title: "Business Analyst Masters Course",
    shortTitle: "Business Analyst Masters Course",
    rating: 4.3,
    reviews: 5150,
  },
  {
    bgColor: "#c891f8",
    id: "mp-4",
    title: "Automation Testing Courses [Masters Program]",
    shortTitle: "Automation Testing Courses [Masters Progra..",
    rating: 4.2,
    reviews: 5650,
  },
  {
    bgColor: "#7be0fd",
    id: "mp-5",
    title: "Cloud Architect Masters Program",
    shortTitle: "Cloud Architect Course",
    rating: 4.4,
    reviews: 14650,
  },
  {
    bgColor: "#fea101",
    id: "mp-6",
    title: "Data Analyst Certification Course",
    shortTitle: "Data Analyst Certification Course",
    rating: 4.1,
    reviews: 6200,
    nextBatch: {
      inDays: 0,
      date: "7th April",
    },
    subCourses: [
      "Python Programming Certification Course",
      "Microsoft Power BI Certification Training Course",
      "Tableau Certification Training Course",
    ],
  },
];

const LatestJobs = () => {
  return (
    <section
      className="p-6 md:px-16 md:py-16"
      style={{
        backgroundImage: `url("/images/BG-1.png")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="text-center">
        <h3 className="textBlueDark font-bold text-4xl mb-4">
          Career Related Programs
        </h3>

        <p className="textBlack text-base">
          Find Jobs, Employment & Career Opportunities. Some of the companies
          we've helped recruit excellent applicants over the years.
        </p>
      </div>
      <div className="my-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {masterPrograms.map((item) => {
            return (
              <div key={item.id} className="bg-white rounded shadow-sm">
                <Link href="/job-detail">
                  <div
                    className="p-8"
                    style={{
                      background: `linear-gradient(to right, ${item.bgColor}, #005483)`,
                    }}
                  >
                    <h4 className="text-white font-semibold">{item.title}</h4>
                  </div>
                  <div className="p-8">
                    <span className="px-3 rounded text-light text-sm inline-flex items-center gap-2 bgAntiquewhite">
                      <SlGraph /> Active Hiring
                    </span>
                    <p className="textBlack text-xl">{item.shortTitle}</p>
                    <div className="mt-3">
                      <ul>
                        <li className="flex gap-1 items-center mb-1 text-base">
                          {" "}
                          <span className="textOrange">
                            <IoIosStar />
                          </span>
                          <span className="textOrange">
                            <IoIosStar />
                          </span>
                          <span className="textOrange">
                            <IoIosStar />
                          </span>
                          <span className="textOrange">
                            <IoIosStar />
                          </span>
                          <span className="textOrange">
                            <IoIosStar />
                          </span>
                          {item.rating}
                        </li>
                        <li className="flex gap-3 items-center mb-1 text-base">
                          {" "}
                          Reviews - {item.reviews}
                        </li>
                      </ul>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex justify-center">
        <div className="text-center">
          <button className="bgBlueDark rounded px-3 py-1 text-white">
            Browse All Courses
          </button>
          <p className="text-lg italic">Explore our wide range of courses</p>
        </div>
      </div>
    </section>
  );
};

export default LatestJobs;
