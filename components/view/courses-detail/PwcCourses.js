"use client";
import React, { useState } from "react";

const tabs = ["India", "US", "ROW"];
const cities = [
  "Ahmedabad", "Aurangabad", "Bangalore", "Bhopal", "Bhubaneswar", "Chandigarh", "Chennai", "Coimbatore", "Delhi", "Gurgaon",
  "Hyderabad", "Kochi", "Kolkata", "Lucknow", "Mumbai", "Noida", "Patna", "Pune", "Ranchi", "Surat", "Tirupati", "Udaipur",
  "Vadodara", "Vijayawada", "Visakhapatnam"
];

const sections = [
  {
    title: "Other BI and Visualization courses",
    courses: [
      { title: "Best Business Analyst Certification Courses", learners: "14k+" },
      { title: "Tableau Certification Training Course", learners: "60k+" },
      { title: "Applied Business Intelligence for Decision Making Course by PwC Academy", learners: "4k+" },
    ]
  },
  {
    title: "Trending courses",
    courses: [
      { title: "Cyber Security and Ethical Hacking Internship Program", learners: "15k+" },
      { title: "Agentic AI Training Course - Master AI Agents", learners: "2k+" },
      { title: "Full Stack Development Internship Program", learners: "29k+" },
    ]
  },
  {
    title: "Recently viewed courses",
    courses: [
      { title: "DevOps Engineer Course Masters Program", learners: "54k+" },
      { title: "Prompt Engineering with Generative AI", learners: "8k+" },
      { title: "AWS Certification Training", learners: "182k+" },
    ]
  }
];

export default function PwcCourses() {
  const [selectedTab, setSelectedTab] = useState("India");

  return (
    <div className="p-6 max-w-screen-xl mx-auto text-[#1D1D1F]">
      <h1 className="text-lg font-semibold mb-4">
        Find Best Power BI Training Courses by PwC Academy in other cities
      </h1>

      {/* Tabs */}
      <div className="flex gap-2 mb-4">
        {tabs.map(tab => (
          <button
            key={tab}
            className={`px-4 py-1 rounded-full shadow-md text-sm font-medium ${
              selectedTab === tab ? "bg-blue-600 text-white" : "bg-white text-black"
            }`}
            onClick={() => setSelectedTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* City Links */}
      <div className="flex flex-wrap gap-2 border rounded-md p-4 mb-6">
        {cities.map(city => (
          <span key={city} className="text-sm text-blue-700 cursor-pointer hover:underline">
            {city}
          </span>
        ))}
      </div>

      {/* Course Sections as Horizontal Sliders */}
      {sections.map(section => (
        <div key={section.title} className="mb-8">
          <h2 className="font-semibold mb-4 text-lg">{section.title}</h2>
          <div className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory">
            {section.courses.map((course, index) => (
              <div
                key={index}
                className="min-w-[250px] snap-start bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-200"
              >
                <p className="text-sm font-medium mb-1">
                  {section.title.includes("Role Based") && (
                    <span className="text-xs text-gray-400">Role Based Course Combo </span>
                  )}
                  {course.title}
                </p>
                <p className="text-xs text-gray-500 flex items-center gap-1 mt-2">
                  <span role="img" aria-label="thumbs-up">👍</span>
                  {course.learners} Satisfied Learners
                </p>
                <p className="mt-2 text-sm text-blue-700 font-medium flex items-center gap-1 cursor-pointer">
                  KNOW MORE <span className="text-blue-500">→</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
