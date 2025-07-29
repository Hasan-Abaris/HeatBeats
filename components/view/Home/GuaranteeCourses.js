import Link from "next/link";
import React from "react";
import { FaBookReader, FaRegMoneyBillAlt } from "react-icons/fa";
import { FaAngleRight, FaFireFlameCurved, FaStar } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";
import { RiSuitcaseLine } from "react-icons/ri";

const data = [
  {
    id: 25,
    url: "/images/full-stack-web-development-specialization-v3.png.webp",
    title: "Full Stack Development Course",
    type: "Course with guaranteed job",
    duration: "4 months",
    salary: "₹3-10 LPA",
    opportunities: "1.08 Lac+",
    rating: "New",
  },
  {
    id: 26,
    url: "/images/data-science-specialization-v3.png.webp",
    title: "Data Science Course",
    type: "Course with internship placement",
    duration: "6 months",
    stipend: "₹40,000 total",
    opportunities: "45,500+",
    rating: 4.5,
  },
  {
    id: 27,
    url: "/images/full-stack-web-development-specialization-v3.png.webp",
    title: "Human Resource Management Course",
    type: "Course with job placement",
    duration: "3 months",
    salary: "₹3-10 LPA",
    opportunities: "2.91 Lac+",
    rating: 4.3,
  },
  {
    id: 28,
    url: "/images/data-science-specialization-v3.png.webp",
    title: "Digital Marketing Course",
    type: "Course with guaranteed job",
    duration: "5 months",
    salary: "₹3-10 LPA",
    opportunities: "6.25 Lac+",
    rating: 4.4,
  },
  {
    id: 29,
    url: "/images/full-stack-web-development-specialization-v3.png.webp",
    title: "Electric Vehicle Course",
    type: "Course with guaranteed internship",
    duration: "7 months",
    stipend: "₹45,000 total",
    opportunities: "1 crore",
    rating: "New",
  },
  {
    id: 30,
    url: "/images/data-science-specialization-v3.png.webp",
    title: "UI/UX Design Course",
    type: "Course with guaranteed internship",
    duration: "5 months",
    stipend: "₹35,000 total",
    opportunities: "10K+",
    rating: "New",
  },
  {
    id: 31,
    url: "/images/full-stack-web-development-specialization-v3.png.webp",
    title: "Product Management Course",
    type: "Course with guaranteed internship",
    duration: "5 months",
    stipend: "₹35,000 total",
    opportunities: "3.1K+",
    rating: "New",
  },
  {
    id: 32,
    url: "/images/data-science-specialization-v3.png.webp",
    title: "Financial Modelling Course",
    type: "Course with guaranteed internship",
    duration: "4 months",
    stipend: "₹40,000 total",
    opportunities: "7.4K+",
    rating: "New",
  }
  // {
  //   id: 33,
  //   url: "/images/full-stack-web-development-specialization-v3.png.webp",
  //   title: "Supply Chain Logistics Course",
  //   type: "Course with guaranteed job",
  //   duration: "2 months",
  //   salary: "₹3-10 LPA",
  //   opportunities: "Get hired at Amazon, Swiggy, Zepto etc",
  //   rating: "New",
  // },
];

const GuaranteeCourses = () => {
  return (
    <section
      className="p-6 md:px-16 md:py-16 bgBlueDark"
      style={{
        backgroundImage: `url("/images/bg2.2f6b6a693a2ba58df04e.PNG")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#01333f",
      }}
    >
      <div className="text-center">
        <h1 className="text-white font-bold text-4xl mb-4">
          Placement guarantee courses
        </h1>
        <h4 className="text-white flex justify-center gap-3 items-center font-light text-2xl mb-6">
          Guaranteed placement, Get 100% refund. if not hired Become job ready
          <span className="text-orange">
            <FaFireFlameCurved />
          </span>
        </h4>
      </div>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data.map((item) => {
            return (
              <div key={item.id} className="bg-white rounded">
                <img src={item.url} width={300} height={150} alt={"Guarantee Courses"}/>
                <div className="p-4">
                  <div className="">
                    <p className="px-1  rounded text-light text-sm inline bgAntiquewhite">
                      {item.type}
                    </p>
                    <h4 className="textBlueDark py-2 font-semibold text-xl">{item.title}</h4>
                  </div>
                  <div className="my-3">
                    <ul>
                      <li className="flex gap-3 items-center mb-1 text-sm">
                        <IoMdTime />
                        {item.duration} courses
                      </li>
                      <li className="flex gap-3 items-center mb-1 text-sm">
                        {" "}
                        <FaRegMoneyBillAlt />
                        Get placed with {item.salary} salary
                      </li>
                      <li className="flex gap-3 items-center mb-1 text-sm">
                        <RiSuitcaseLine />
                        {item.opportunities}
                        opportunities
                      </li>
                    </ul>
                  </div>
                  <div>
                    <span className="flex gap-2 items-center text-sm">
                      Know More <FaAngleRight />{" "}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GuaranteeCourses;
