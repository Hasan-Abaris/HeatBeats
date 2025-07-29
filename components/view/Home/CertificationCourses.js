import Link from "next/link";
import React from "react";
import { FaBookReader } from "react-icons/fa";
import { FaAngleRight, FaFireFlameCurved, FaStar } from "react-icons/fa6";

const upcomingCourses = [
  {
    url: "/images/co_img_69_1695898120.png",
    id: "uc-1",
    title: "Statistics Essentials for Analytics",
    shortTitle: "Statistics Essentials for Analytics",
    mode: "Self-paced",
  },
  {
    url: "/images/co_img_2263_1678870066.png",
    id: "uc-2",
    title: "Machine Learning Course Masters Program",
    shortTitle: "Machine Learning Course Masters Program",
    batchStart: "01 Jan",
  },
  {
    url: "/images/co_img_2154_1673412769.png",
    id: "uc-3",
    title: "DevOps Engineer Course Masters Program",
    shortTitle: "DevOps Engineer Course Masters Program",
    batchStart: "01 Jan",
  },
  {
    url: "/images/power-bi-certification-training-img-1722854784.png",
    id: "uc-4",
    title: "Power BI Certification Training Course: PwC Academy",
    shortTitle: "Power BI Certification Training Course: Pw..",
    batchStart: "12 Apr",
  },
  {
    url: "/images/co_img_2079_1669097128.png",
    id: "uc-5",
    title: "Tableau Certification Training Course",
    shortTitle: "Tableau Certification Training Course",
    batchStart: "12 Apr",
  },
  {
    url: "/images/co_img_69_1695898120.png",
    id: "uc-6",
    title: "Statistics Essentials for Analytics",
    shortTitle: "Statistics Essentials for Analytics",
    mode: "Self-paced",
  },
];

const CertificationCourses = () => {
  return (
    <section
      className="p-6 md:px-16 md:pt-16"
      style={{
        backgroundImage: `url("/images/bg2.2f6b6a693a2ba58df04e.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="text-center">
        <h3 className="textBlueDark font-bold text-4xl mb-4">
          Recently Viewed
        </h3>
      </div>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {upcomingCourses.map((item) => {
            return (
              <div key={item.id} className="bg-white rounded p-2 border">
                <div className="flex">
                  <img
                    src={item.url}
                    width={100}
                    height={100}
                    className="h-full"
                    alt="Popular certification courses"
                  />
                  <div className="px-4">
                    <div className="">
                      <h4 className="textBlueDark font-semibold">
                        {item.title}
                      </h4>
                    </div>
                    <div className="my-1">
                      <ul className="flex gap-3 items-center">
                        <li className="px-2 rounded text-light text-sm inline bgAntiquewhite">
                          {" "}
                          Batch Starts from - {item.batchStart}
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
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CertificationCourses;
