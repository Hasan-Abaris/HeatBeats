"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";

// ✅ Import API
import { getSiteMenus } from "@/app/comman/FrontApi";

export default function Footers() {

  // ✅ API data state
  const [menus, setMenus] = useState([]);

useEffect(() => {
  async function fetchMenus() {
    try {
      const res = await getSiteMenus();
     
      // You can set it if needed later: setMenus(res.data.data);
    } catch (error) {
      
    }
  }

  fetchMenus();
}, []);


  // ✅ Your existing static data remains untouched
  const footerData =
  {
    "TRENDING_CERTIFICATION_COURSES": [
      "DevOps Certification Training",
      "AWS Certification Training",
      "PMP Certification Training",
      "Power BI Certification Training Course: PwC Academy",
      "CEH Certification - Certified Ethical Hacking Course",
      "Selenium Course",
      "CISSP Certification Training",
      "Microsoft Azure Data Engineering Training Course",
      "Salesforce Training Course",
      "PRINCE2® Foundation & Practitioner Certification Course",
      "Tableau Certification Training Course",
      "React JS Training Course",
      "Prompt Engineering with Generative AI"
    ],
    "TRENDING_MASTER_COURSES": [
      "DevOps Engineer Course Masters Program",
      "Project Management Training [Masters Program]",
      "Cloud Architect Course",
      "Full Stack Developer Course",
      "Business Analyst Masters Course",
      "Microsoft Azure Cloud Engineer Training",
      "Automation Testing Courses [Masters Program]",
      "Machine Learning Course Masters Program",
      "Business Intelligence Masters Program",
      "Post Graduate Program in DevOps",
      "Advanced Certificate Program in Data Science and AI",
      "PGP in Cyber Security and Ethical Hacking",
      "Generative AI in Business: University of Cambridge Online",
      "Human-Computer Interaction (HCI) for AI Systems Design",
      "Post Graduate Program in Cloud Computing"
    ],
    "SLA_Consultants_India_FOR_BUSINESS": [
      "Corporate Training",
      "Partners",

    ],
    "jobs_by_stream": [
      "Marketing jobs",
      "Content writing jobs",
      "Web development jobs",
      "Sales jobs",
      "Finance jobs",
      "Digital Marketing jobs",
      "Computer Science jobs",
      "Graphic Design jobs",
      "Data Science jobs",
      "View all jobs"
    ],
    "placement_guarantee_courses": [
      "Full Stack Development",
      "Data Science",
      "Human Resource Management",
      "Digital Marketing",
      "Electric Vehicle",
      "UI/UX Design",
      "Product Management",
      "Financial Modelling",
      "Supply Chain Logistics"
    ]
  };

  const topics = [
    "Selenium tutorial",
    "Selenium interview questions",
    "Java tutorial",
    "What is HTML",
    "Java interview questions",
    "PHP tutorial",
    "JavaScript interview questions",
    "Spring tutorial",
    "PHP interview questions",
    "Inheritance in Java",
    "Polymorphism in Java",
    "Spring interview questions",
    "Pointers in C",
    "Linux commands",
    "Android tutorial",
    "JavaScript tutorial",
    "jQuery tutorial",
    "SQL interview questions",
    "MySQL tutorial",
    "Machine learning tutorial",
    "Python tutorial",
    "What is machine learning",
    "Ethical hacking tutorial",
    "SQL injection",
    "AWS certification career opportunities"
  ];

  const siteLinks = {
    "COMPANY": {
      list: [
        { id: "company-1", title: "About" , url: "aboutus" },
        { id: "company-2", title: "News & Media", url: "allmedia" },
        { id: "company-3", title: "Reviews", url: "reviews" },
        { id: "company-4", title: "Contact Us", url: "contact-us" },
        { id: "company-5", title: "Locations", url: "locations" },
        { id: "company-6", title: "Terms & Conditions", url: "termsconditions" },
        { id: "company-7", title: "Privacy Policy",url:"privacy-policy" },
      ]
    },

    "WORK_WITH_US": {
      list: [
        { id: "work-1", title: "Careers", url: "careers", url: "careers" },
        { id: "work-2", title: "Become an Instructor", url: "become-an-instructor" },
        { id: "work-3", title: "Become an Affiliate", url: "affiliate-program" },
        { id: "work-4", title: "Become a Partner", url: "partners" },
        { id: "work-5", title: "Hire from SLA Consultants India", url: "hire-from" },
         { id: "work-6", title: "Designation", url: "designation" },
      ]
    },

    "RESOURCES": {
      list: [
        { id: "resources-1", title: "Blog", path: "blogs" },
        { id: "resources-2", title: "Community", path: "community" },
        { id: "resources-3", title: "Videos", path: "blogs/videos" },
        { id: "resources-4", title: "Webinars", path: "webinars" },
      ]
    }
    ,

    "SITEMAPS": {
      list: [
        { id: "sitemaps-1", title: "Sitemap", path: "sitemap" },
        { id: "sitemaps-2", title: "Blog Sitemap", path: "blogs/sitemap" },
        { id: "sitemaps-3", title: "City Sitemap", path: "city/sitemap" },
        { id: "sitemaps-4", title: "Community Sitemap", path: "community/sitemap" }
      ]
    }

  };

  const categories = [
    "Artificial Intelligence",
    "BI and Visualization",
    "Cloud Computing",
    "DevOps",
    "Data Science",
    "Cyber Security",
    "Programming & Frameworks",
    "Project Management and Methodologies",
    "Software Testing",
    "Big Data",
    "Frontend Development",
    "Databases",
    "Data Warehousing and ETL",
    "Blockchain",
    "Operating Systems",
    "Robotic Process Automation",
    "Digital Marketing",
    "Others"
  ];


  return (
    <footer className="bg-[#052A3F]  text-gray-100 p-6 md:px-16 " style={{ backgroundImage: `url("/images/bg2.2f6b6a693a2ba58df04e.png")`, backgroundSize: "cover" }}>
      <div className="w-[1130px] m-auto">
        <h2 className="uppercase text-2xl">slaconsultants</h2>

        <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 mt-10">
          <div>
            <h3 className="text-lg font-bold text-white pb-2 mb-4 text-center sm:text-start">
              TRENDING CERTIFICATION COURSES
            </h3>
            <ul className="space-y-3 text-white text-center sm:text-start">
              {footerData.TRENDING_CERTIFICATION_COURSES.map((item, index) => (
                <li
                  key={index}
                  className="text-sm relative cursor-pointer transition-all duration-300 ease-in-out hover:text-[#FFD700] "
                >
                  <Link href={"/"}>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white pb-2 mb-4 text-center sm:text-start">
              TRENDING MASTER COURSES
            </h3>
            <ul className="space-y-3 text-white text-center sm:text-start">
              {footerData.TRENDING_MASTER_COURSES.map((item, index) => (
                <li
                  key={index}
                  className="text-sm relative cursor-pointer transition-all duration-300 ease-in-out hover:text-[#FFD700] "
                >
                  <Link href={`/`}>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>


          </div>
          <div>
            <h3 className="text-lg font-bold text-white  pb-2 mb-4 text-center sm:text-start">
              SLA FOR BUSINESS
            </h3>
            <ul className="space-y-3 text-white text-center sm:text-start">
              {footerData.SLA_Consultants_India_FOR_BUSINESS.map((item, index) => (
                <li
                  key={index}
                  className="text-sm relative cursor-pointer transition-all duration-300 ease-in-out hover:text-[#FFD700] "
                >
                  <Link href={"/"}>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
            <div className=" text-white space-y-4 w-fit mt-20">
              <p className="text-sm uppercase">Download App</p>

              <div className="space-y-3">
                <a href="#" className="flex items-center space-x-2 border border-white rounded-md px-4 py-2">
                  <img src="/images/apple.png" alt="Apple Logo" className="h-5" />
                  <span>
                    <p className="text-xs">Download on the</p>
                    <p className="text-base font-semibold">App Store</p>
                  </span>
                </a>

                <a href="#" className="flex items-center space-x-2 border border-white rounded-md px-4 py-2">
                  <img src="/images/store.png" alt="Google Play Logo" className="h-5" />
                  <span>
                    <p className="text-xs">GET IT ON</p>
                    <p className="text-base font-semibold">Google Play</p>
                  </span>
                </a>
              </div>
            </div>


            {/* <div>
              <h3 className="text-2xl font-bold text-white  pb-2 mt-8 text-center sm:text-start">
                Contact Us
              </h3>
              <ul className="space-y-3 text-white text-center sm:text-start text-lg list-disc pl-6">
                <li>

                  <Link
                    href="tel:+91-8851746286"
                    className="text-sm relative cursor-pointer transition-all duration-300 ease-in-out hover:text-pri after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-500 hover:after:w-full"
                  >
                    +91-8851746286
                  </Link>
                </li>
                <li>

                  <Link
                    href="tel:+91-9045206022"
                    className="text-sm relative cursor-pointer transition-all duration-300 ease-in-out hover:text-pri after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-500 hover:after:w-full"
                  >
                    +91-9045206022
                  </Link>
                </li>
                <li>

                  <Link
                    href="mailto:sales@abaris.in"
                    className="text-sm relative cursor-pointer transition-all duration-300 ease-in-out hover:text-pri after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-500 hover:after:w-full"
                  >
                    sales@abaris.in
                  </Link>
                </li>
                <li>
                  98B, 2nd Floor, Namberdar Estate, Taimoor Nagar, New Friends
                  Colony, New Delhi-110025
                </li>
              </ul>
              <div className="mt-6 w-72md:w-96 flex justify-center items-center bg-white rounded-md p-2">
                <input
                  type="text"
                  className="w-full h-full px-4 text-gray-800 lg:text-left placeholder:text-gray-400 focus:outline-none focus:border-gray-500"
                  placeholder="Enter your email"
                />
                <button
                  type="submit"
                  className="h-full py-2 px-2 bgOrange shadow-md rounded-md text-xl text-white font-semibold w-fit hover:bg-[#ffcc00] transition duration-300"
                >
                  <GoArrowUpRight />
                </button>
              </div>
            </div> */}
          </div>
        </div>

        <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-10 gap-10 mt-10 pb-6 pt-6 border-y border-[#521B1B]">

          <div >
            <h3 className="text-lg font-bold text-white pb-2 mb-4 text-center sm:text-start">
              COMPANY
            </h3>
            <ul className="space-y-3 text-white text-center sm:text-start">
              {siteLinks.COMPANY.list.map((item) => {
                return <li
                  key={item.id}
                  className="text-sm relative cursor-pointer transition-all duration-300 ease-in-out hover:text-[#FFD700] "
                >
                  <Link href={`/${item.url ? item.url : "/"}`}>
                    {item.title}
                  </Link>
                </li>
              })}
            </ul>
          </div>


          <div>
            <div>
              <h3 className="text-lg font-bold text-white pb-2 mb-4 text-center sm:text-start">
                WORK WITH US
              </h3>
              <ul className="space-y-3 text-white text-center sm:text-start">
                {siteLinks.WORK_WITH_US.list.map((item, index) => (
                  <li
                    key={index}
                    className="text-sm relative cursor-pointer transition-all duration-300 ease-in-out hover:text-[#FFD700] "
                  >
                    <Link href={`/${item.url ? item.url : "/"}`}>

                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>


            </div>

          </div>
          <div>
            <h3 className="text-lg font-bold text-white  pb-2 mb-4 text-center sm:text-start">
              RESOURCES
            </h3>
            <ul className="space-y-3 text-white text-center sm:text-start">
              {siteLinks.RESOURCES.list.map((item, index) => (
                <li
                  key={index}
                  className="text-sm relative cursor-pointer transition-all duration-300 ease-in-out hover:text-[#FFD700] "
                >
                  <Link href={`/${item?.path}`}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div>
              <h3 className="text-lg font-bold text-white  pb-2 mb-4 text-center sm:text-start">
                SITEMAPS
              </h3>
              <ul className="space-y-3 text-white text-center sm:text-start">
                {siteLinks.SITEMAPS.list.map((item, index) => (
                  <li
                    key={index}
                    className="text-sm relative cursor-pointer transition-all duration-300 ease-in-out hover:text-[#FFD700] "
                  >
                    <Link href={`/${item?.path}`}>

                      {item?.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>


          {/* <div>
            <h3 className="text-lg font-bold text-white  pb-2 mb-4 text-center sm:text-start">
              Support
            </h3>
            <ul className="space-y-3 text-white text-center sm:text-start text-lg list-disc pl-6">
              <li>

                <Link
                  href="/personal-details"
                  className="text-sm relative cursor-pointer transition-all duration-300 ease-in-out hover:text-pri after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-500 hover:after:w-full"
                >
                  Personal Details
                </Link>
              </li>
              <li>
                <Link
                  href="/notifications"
                  className="text-sm relative cursor-pointer transition-all duration-300 ease-in-out hover:text-pri after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-500 hover:after:w-full"
                >
                  Notification
                </Link>
              </li>
              <li>
                <Link
                  href="/registration"
                  className="text-sm relative cursor-pointer transition-all duration-300 ease-in-out hover:text-pri after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-500 hover:after:w-full"
                >
                  Registration
                </Link>
              </li>
            </ul>
          </div> */}


        </div>


        <div className="mt-6">
          <h3 className="text-lg font-bold text-white pb-2 mb-4 text-center sm:text-start">
            TRENDING BLOG ARTICLES
          </h3>
          <ul className="flex gap-3 flex-wrap text-white text-center sm:text-start">
            {topics.map((item, i) => {
              return <li
                key={i}
                className="text-sm relative cursor-pointer transition-all duration-300 ease-in-out hover:text-[#FFD700] "
              >
                <Link href={`${"/"}`}>
                  {item}  |
                </Link>
              </li>
            })}
          </ul>
        </div>
        <div className="mt-6">
          <h3 className="text-lg font-bold text-white pb-2 mb-4 text-center sm:text-start">
            CATEGORIES
          </h3>
          <ul className="flex gap-3 flex-wrap text-white text-center sm:text-start">
            {categories.map((item, i) => {
              return <li
                key={i}
                className="text-sm relative cursor-pointer transition-all duration-300 ease-in-out hover:text-[#FFD700] "
              >
                <Link href={`${"/"}`}>
                  {item}  |
                </Link>
              </li>
            })}
          </ul>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-10 border-t pt-6 flex justify-between items-center text-sm text-white flex-col md:flex-row gap-4">
          <p>© 2025 SLA Consultants India. All rights reserved. Version 1.1 Last Demo 4 August, 2025 space Day</p>
          <ul className="flex space-x-5">
            <li>
              <Link
                href="#"
                className="flex items-center justify-center w-8 h-8 rounded-md  text-white hover:bg-gray-900 hover:text-white transition"
              >
                <FaFacebookF className="w-4 h-4" />
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center justify-center w-8 h-8 rounded-md  text-white hover:bg-gray-900 hover:text-white transition"
              >
                <FaInstagram className="w-4 h-4" />
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center justify-center w-8 h-8 rounded-md  text-white hover:bg-gray-900 hover:text-white transition"
              >
                <FaTwitter className="w-4 h-4" />
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center justify-center w-8 h-8 rounded-md  text-white hover:bg-gray-900 hover:text-white transition"
              >
                <FaGithub className="w-4 h-4" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
