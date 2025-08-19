"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";

// ✅ Import API
import {
  getBlogList,
  getAllCourseCategories,
  getAllMenus,
} from "@/app/comman/FrontApi";

export default function Footer() {
  // ✅ API data state
  const [topics, setTopics] = useState([]);
  const [categories, setCategories] = useState([]);
  const [menusData, setMenusData] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const [blogsRes, categoriesRes, menusRes] = await Promise.all([
          getBlogList(),
          getAllCourseCategories(),
          getAllMenus(),
        ]);

        // Blogs
        if (blogsRes?.data?.status && Array.isArray(blogsRes.data.data)) {
          setTopics(blogsRes.data.data);
        }

        // Categories
        if (
          categoriesRes?.data?.status &&
          Array.isArray(categoriesRes.data.data)
        ) {
          setCategories(categoriesRes.data.data);
        }

        if (menusRes?.data?.status && menusRes.data.data) {
          console.log("Raw Menus API Data:", menusRes.data.data); // debug
          const filteredMenus = Object.fromEntries(
            Object.entries(menusRes.data.data).filter(
              ([key]) => key !== "header-menu"
            )
          );
          console.log("Filtered Menus:", filteredMenus); // debug
          setMenusData(filteredMenus);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  // ✅ Static footer data
  const footerData = {
    TRENDING_CERTIFICATION_COURSES: [
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
      "Prompt Engineering with Generative AI",
    ],
    TRENDING_MASTER_COURSES: [
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
      "Post Graduate Program in Cloud Computing",
    ],
    SLA_Consultants_India_FOR_BUSINESS: ["Corporate Training", "Partners"],
  };

  return (
    <footer
      className="bg-[#052A3F] text-gray-100 p-6 md:px-16"
      style={{
        backgroundImage: `url("/images/bg2.2f6b6a693a2ba58df04e.png")`,
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="uppercase text-2xl">slaconsultants</h2>

        {/* TOP GRID */}
        <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-10">
          {/* Trending Certification Courses */}
          <div>
            <h3 className="text-lg font-bold text-white pb-2 mb-4 text-center sm:text-start">
              TRENDING CERTIFICATION COURSES
            </h3>
            <ul className="space-y-3 text-white text-center sm:text-start">
              {footerData.TRENDING_CERTIFICATION_COURSES.map((item, index) => (
                <li
                  key={index}
                  className="text-sm cursor-pointer hover:text-[#FFD700] transition"
                >
                  <Link href="/">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Trending Master Courses */}
          <div>
            <h3 className="text-lg font-bold text-white pb-2 mb-4 text-center sm:text-start">
              TRENDING MASTER COURSES
            </h3>
            <ul className="space-y-3 text-white text-center sm:text-start">
              {footerData.TRENDING_MASTER_COURSES.map((item, index) => (
                <li
                  key={index}
                  className="text-sm hover:text-[#FFD700] transition"
                >
                  <Link href="/">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SLA For Business */}
          <div>
            <h3 className="text-lg font-bold text-white pb-2 mb-4 text-center sm:text-start">
              SLA FOR BUSINESS
            </h3>
            <ul className="space-y-3 text-white text-center sm:text-start">
              {footerData.SLA_Consultants_India_FOR_BUSINESS.map(
                (item, index) => (
                  <li
                    key={index}
                    className="text-sm hover:text-[#FFD700] transition"
                  >
                    <Link href="/">{item}</Link>
                  </li>
                )
              )}
            </ul>

            {/* APP DOWNLOAD */}
            <div className="text-white space-y-4 w-fit mt-8">
              <p className="text-sm uppercase">Download App</p>
              <a
                href="#"
                className="flex items-center space-x-2 border border-white rounded-md px-4 py-2"
              >
                <img src="/images/apple.png" className="h-5" />
                <span>
                  <p className="text-xs">Download on the</p>
                  <p className="text-base font-semibold">App Store</p>
                </span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-2 border border-white rounded-md px-4 py-2"
              >
                <img src="/images/store.png" className="h-5" />
                <span>
                  <p className="text-xs">GET IT ON</p>
                  <p className="text-base font-semibold">Google Play</p>
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* LINK GRIDS from API */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-10 py-6 border-y border-[#521B1B]">
          {Object.keys(menusData).map((menuKey) => (
            <div key={menuKey}>
              <h3 className="text-lg font-bold text-white pb-2 mb-4">
                {menuKey.replace(/-/g, " ").toUpperCase()}
              </h3>
              <ul className="space-y-3 text-white">
                {menusData[menuKey]?.map((item) => (
                  <li
                    key={item.id}
                    className="text-sm hover:text-[#FFD700] transition"
                  >
                    <Link href={item.url || "#"}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* BLOG TOPICS */}
        <div className="mt-6">
          <h3 className="text-lg font-bold text-white mb-4">
            TRENDING BLOG ARTICLES
          </h3>
          <ul className="flex flex-wrap gap-2 break-words text-white">
            {topics.length > 0 ? (
              topics.map((item) => (
                <li
                  key={item.id}
                  className="text-sm hover:text-[#FFD700] transition"
                >
                  <Link href={`/blog/${item.slug}`}>{item.title} |</Link>
                </li>
              ))
            ) : (
              <li className="text-sm text-gray-400">No blogs available</li>
            )}
          </ul>
        </div>

        {/* CATEGORIES */}
        <div className="mt-6">
          <h3 className="text-lg font-bold text-white mb-4">CATEGORIES</h3>
          <ul className="flex flex-wrap gap-2 break-words text-white">
            {categories.length > 0 ? (
              categories.map((cat) => (
                <li
                  key={cat.id}
                  className="text-sm hover:text-[#FFD700] transition"
                >
                  <Link href={`/category/${cat.slug}`}>{cat.name} |</Link>
                </li>
              ))
            ) : (
              <li className="text-sm text-gray-400">No categories available</li>
            )}
          </ul>
        </div>

        {/* BOTTOM STRIP */}
        <div className="mt-10 border-t pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white">
          <p>
            © 2025 SLA Consultants India. All rights reserved. Version 1.2 Last
            Demo 19 August, 2025 space Final
          </p>
          <ul className="flex space-x-5">
            <li>
              <Link
                href="#"
                className="w-8 h-8 flex items-center justify-center hover:bg-gray-900 rounded"
              >
                <FaFacebookF />
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="w-8 h-8 flex items-center justify-center hover:bg-gray-900 rounded"
              >
                <FaInstagram />
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="w-8 h-8 flex items-center justify-center hover:bg-gray-900 rounded"
              >
                <FaTwitter />
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="w-8 h-8 flex items-center justify-center hover:bg-gray-900 rounded"
              >
                <FaGithub />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
