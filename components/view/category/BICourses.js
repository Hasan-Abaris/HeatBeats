import React from "react";
import { FaPowerOff, FaTable, FaBriefcase, FaChartBar, FaFileExcel, FaProjectDiagram } from "react-icons/fa";

const courses = [
  {
    title: "Best Power BI Training Courses by PwC Academy",
    icon: <FaPowerOff className="text-yellow-500 w-10 h-10" />,
    description:
      "The SLAower BI certification course by PwC Academy will help you gain expertise in Business Analytics. You will master concepts such as Power BI Desktop, Architecture, DAX, Service, Mobile Apps, Data Quality Assessment, Data Transformation, Data Modelling, Reports, and Q&A, to name a few, with industry use cases. This Power BI training is live instructor-led and ensures that you get hands-on experience in real-time projects. Learn Power BI online from 10+ years of experienced industry experts and clear the PL-300 exam.",
  },
  {
    title: "Tableau Certification Training Course",
    icon: <FaTable className="text-purple-500 w-10 h-10" />,
    description:
      "Tableau certification training covers in-depth knowledge of Tableau Prep Builder, Tableau Desktop, Charts, LOD expressions, Tableau Online, etc. This Tableau training will help you master the Business Intelligence tool, Data Visualization, and reporting. Throughout this online instructor-led training for Tableau, you will be working on real-life industry use cases in Retail, Entertainment, Transportation, and Life Sciences domains. Clear your Tableau Desktop, Analyst and Server certification exams with this Tableau course.",
  },
  {
    title: "Applied Business Intelligence for Decision Making Course by PwC Academy",
    icon: <FaChartBar className="text-blue-900 w-10 h-10" />,
    description:
      "SLArings you the unique opportunity to master the art of decision-making using applied business intelligence through the meticulously designed course from PwC’s Academy in India. This course empowers you to create robust reports and dashboards and dive deep into Power BI’s features, guided by real-world business scenarios. Master best practices and project dynamics to solve business problems with industry-standard solutions. You will learn to create visually smart narratives and explore multiple Power BI connectivity modes. Join us on this transformative journey and unlock your full potential in the dynamic world of business intelligence.",
  },
  {
    title: "Business Intelligence Internship Program with PwC Academy Certification",
    icon: <FaBriefcase className="text-blue-500 w-10 h-10" />,
    description:
      "Master the essential Power BI skills in 3 months and transform into an expert business analyst, certified by PwC and SLA",
  },
  {
    title: "Advanced MS Excel 2016 Certification Training",
    icon: <FaFileExcel className="text-green-500 w-10 h-10" />,
    description:
      "Excel has become one of the prerequisites for almost all jobs in the analytics and consulting sector. Through this course, you’ll learn the advanced functions that are used by analysts on a day to day basis. You’ll also get accustomed to even more advanced stages of excel use like Macros which further come handy. Throughout the course, you’ll be given hands-on assignments and case-studies to put the theoretical knowledge to practical.",
  },
  {
    title: "QlikView Certification Training",
    icon: <FaProjectDiagram className="text-green-700 w-10 h-10" />,
    description:
      "SLA QlikView Certification Training will help you become an expert in Data Visualization with QlikView. Along the course, you will be transforming data into interactive charts and graphs using QlikView features like dashboards, system table, incremental load and object formatting.",
  },
];

const BICourses = () => {
  return (
    <div className="max-w-4xl mx-auto ">
      <h2 className="text-2xl font-semibold mb-6">BI and Visualization Courses description</h2>
      <hr className="mb-3"/>
      <div className="space-y-6">
        {courses.map((course, index) => (
          <div key={index} className="flex items-start space-x-4">
            <div className="flex-shrink-0">{course.icon}</div>
            <div>
              <h3 className="font-semibold text-lg mb-1">{course.title}</h3>
              <p className="text-gray-700 text-sm">{course.description}</p>
            </div>
             
          </div>
        ))}
      </div>
    </div>
  );
};

export default BICourses;
