import { FaFireFlameCurved } from "react-icons/fa6";
import Link from "next/link";
import React from "react";
const categories = [
  { id: "ai", bgColor: "#ff98a3", title: "Artificial Intelligence" },
  { id: "bi", bgColor: "#6e97ff", title: "BI and Visualization" },
  { id: "cloud", bgColor: "#91c653", title: "Cloud Computing" },
  { id: "devops", bgColor: "#c891f8", title: "DevOps" },
  { id: "data-science", bgColor: "#7be0fd", title: "Data Science" },
  { id: "cyber-security", bgColor: "#fea101", title: "Cyber Security" },
  { id: "programming", bgColor: "#ff9da0", title: "Programming & Frameworks" },
];

const Trending = () => {
  return (
    <section className="p-6 md:px-16 md:py-16">
      <div className="text-center">
        <h1 className="textBlueDark font-bold text-4xl mb-4">
          Discover Top Categories
        </h1>

        <p className="textBlack text-base">
          Find Jobs, Employment & Career Opportunities. Some of the companies
          we've helped recruit excellent applicants over the years.
        </p>
      </div>
      <div className="grid grid-cols-1 sm: sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2 mt-10">
        {categories.map((item) => {
          return (
           <Link
              key={item.id}
              href={`/category/${item.id}`}
              className="flex flex-col items-center justify-center p-4 rounded-lg shadow-md"
              style={{ backgroundColor: item.bgColor }}
            >
            <div className="p-4 text-center border-2" key={item.id} style={{borderColor: `${item.bgColor}`}}>
              <h4 className="text-base font-semibold">
                {item.title}
              </h4>
            </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Trending;
