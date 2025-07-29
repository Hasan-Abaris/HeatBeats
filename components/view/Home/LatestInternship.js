import Link from "next/link";
import { SlGraph } from "react-icons/sl";
import React from "react";
import { MdMyLocation } from "react-icons/md";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { IoIosStar, IoMdTime } from "react-icons/io";
import { FaAngleRight } from "react-icons/fa6";

const data = {
  featuredCourses: [
    {
      id: "course-1",
      title: "DevOps Certification Training",
      bgColor: "#ff98a3",
      shortTitle: "DevOps Certification Training",
      rating: 5,
      reviews: 79900,
    },
    {
      id: "course-2",
      title: "AWS Certification Training",
      bgColor: "#6e97ff",
      shortTitle: "AWS Certification Training",
      rating: 4,
      reviews: 67950,
    },
    {
      id: "course-3",
      title: "Power BI Certification Training Course: PwC Academy",
      bgColor: "#91c653",
      shortTitle: "Power BI Certification Training Course: Pw..",
      rating: 4.2,
      reviews: 33100,
      tag: "Best Seller",
    },
    {
      id: "course-4",
      title: "Agentic AI Training Course - Master AI Agents",
      bgColor: "#c891f8",
      shortTitle: "Agentic AI Training Course - Master AI Age..",
      rating: 4.4,
      reviews: 42,
    },
    {
      id: "course-5",
      title: "Selenium Course",
      bgColor: "#7be0fd",
      shortTitle: "Selenium Course",
      rating: 5,
      reviews: 23100,
    },
    {
      id: "course-6",
      title: "Artificial Intelligence Certification Course",
      bgColor: "#fea101",
      shortTitle: "Artificial Intelligence Certification Cour..",
      rating: 4.7,
      reviews: 6100,
    },
    {
      id: "course-7",
      title: "Microservices Certification Training Course",
      bgColor: "#ff9da0",
      shortTitle: "Microservices Certification Training Cours..",
      rating: 4.8,
      reviews: 5650,
    },
  ],
};

const LatestInternship = () => {
  return (
    <section className="p-6 md:px-16 md:py-16 grayBackground">
      <div className="text-center">
        <h1 className="textBlueDark font-bold text-4xl mb-4">
          Trending Courses
        </h1>

        <p className="textBlack text-base">
          Find Jobs, Employment & Career Opportunities. Some of the companies
          we've helped recruit excellent applicants over the years.
        </p>
      </div>
      <div className="my-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data.featuredCourses.map((item) => {
            return (
              <div
                key={item.id}
                className="bg-white rounded shadow-sm "
                style={{
                  backgroundImage: `url("/images/bg-shade.png")`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "left",
                }}
              >
                <Link href="/courses-detail/1">
                  <div
                    className="p-8"
                    style={{
                      background: `linear-gradient(to right, ${item.bgColor}, #005483)`,
                    }}
                  >
                    <h4 className="text-white font-semibold">{item.title}</h4>
                  </div>
                  <div className="p-8">
                    <span className="px-2 rounded text-light text-sm inline-flex items-center gap-2 bgAntiquewhite">
                      Active Training
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

export default LatestInternship;
