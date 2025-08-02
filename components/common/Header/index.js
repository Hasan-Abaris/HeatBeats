"use client";

import Link from "next/link";
import { RiSearchLine } from "react-icons/ri";
import MegaMenu from "./MegaMenu";
import { useEffect, useState } from "react";
import SearchArea from "./SearchArea";
import { IoCallSharp } from "react-icons/io5";
import {
  FaBarsStaggered,
  FaCaretDown,
  FaCircleUser,
  FaFlagCheckered,
} from "react-icons/fa6";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { MdOutlineArrowDropDown } from "react-icons/md";
import CallModel from "./CallModel";
import { IoMdArrowDropright } from "react-icons/io";
import TopHdMonthEnd from "./TopHdMonthEnd";
import { getCategiryList } from "@/app/comman/FrontApi";
import Loadar from "@/app/comman/Loader";
import { baseUrl, xApiKey } from "@/app/comman/UrlCollection";

export function Header() {
  const [loading, setLoading] = useState(true);
  const [saleisActive, setSaleIsActive] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [models, showModels] = useState(false);
  const [store, setStore] = useState([]);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  // Static subcategories for each category
  const subCategories = {
    "Artificial Intelligence": [
      "AI Basics",
      "Machine Learning",
      "Deep Learning Machine Learning Course Masters Program", "Artificial Intelligence Certification Course", "Generative AI Certification Training Course", "Agentic AI Certification Training Course", "Introduction to Generative AI", "Microsoft Azure AI Fundamentals AI-900 Certification Course", "Applied Machine Learning with Python by PwC Academy", "Prompt Engineering with LLMs Training Course", "Machine Learning Operations (MLOps) Certification Training",
    ],
    "BI and Visualization": ["Power BI", "Tableau", "Data Visualization"],
    "Cloud Computing": ["AWS", "Azure", "Google Cloud"],
    DevOps: ["Docker", "Kubernetes", "CI/CD"],
    "Cyber Security": [
      "CISSP Certification",
      "Certified Ethical Hacking",
      "Cyber Security Masters",
    ],
    "Doctorate Programs": [
      "PhD in AI",
      "PhD in Data Science",
      "PhD in Cybersecurity",
    ],
    "PG Programs": [
      "MBA in IT",
      "MSc in Data Science",
      "MSc in Cloud Computing",
    ],
    "Data Science": ["Data Analysis", "Big Data", "Data Engineering"],
    "Project Management and Methodologies": ["PMP", "Agile", "Scrum"],
    "Programming & Frameworks": ["Python", "JavaScript", "React"],
    "Software Testing": ["Manual Testing", "Automation Testing", "Selenium"],
    "Big Data": ["Hadoop", "Spark", "Big Data Analytics"],
    "Frontend Development": ["HTML/CSS", "JavaScript", "Frontend Frameworks"],
  };

  const handleRemove = () => setIsActive(false);

  const getCategory = async () => {
    setLoading(true);
    try {
      const getData = await getCategiryList();
      if (getData.status === 200 && getData.data?.data) {
        setStore(getData.data.data);
        setHoveredItem(getData.data.data[0]);
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getCategory();
    const timer = setTimeout(() => setSaleIsActive(true), 10000);
    return () => clearTimeout(timer);
  }, []);

  const setIsDropdownOpen = (item) => setHoveredItem(item);
  const handleMouseLeave = () => {};
  const setIsDropdownOpendef = () => hoveredItem || setHoveredItem(store[0]);

  const handleSearchChange = async (event) => {
    const value = event.target.value;
    setSearchQuery(value);

    if (!value) {
      setFilteredItems([]);
      return;
    }

    try {
      const res = await axios.get(`${baseUrl}course/search?query=${value}`, {
        headers: {
          "X-API-Key": xApiKey,
        },
      });

      if (res.status === 200 && res.data?.data) {
        setFilteredItems(res.data.data);
      } else {
        setFilteredItems([]);
      }
    } catch (error) {
      console.error("Search error:", error);
      setFilteredItems([]);
    }
  };

  return (
    <>
      {loading && <Loadar />}
      <div className="px-6 md:px-16 py-2 bgBlueDark">
        <div className="flex justify-between flex-wrap">
          <ul className="flex gap-6 flex-wrap">
            <li className="text-white flex gap-3 text-sm items-center">
              <IoCallSharp /> New Course Enquiry :
            </li>
            <li className="text-white flex gap-3 text-sm  items-center">
              +1 833 564 3321{" "}
              {!saleisActive ? (
                <span>(Toll Free)</span>
              ) : (
                <span
                  className="cursor-pointer"
                  onClick={() => showModels(true)}
                >
                  <FaCaretDown />
                </span>
              )}
              {models && <CallModel isOpen={models} setIsOpen={showModels} />}
            </li>
          </ul>
        </div>
      </div>

      <header className="border-b flex justify-between items-center px-6 py-3 md:px-16 md:py-3 bg-white w-full">
        <div className="flex gap-5 items-center">
          <Link href="/">
            <img
              src="/images/main-logo.png"
              width={240}
              height={40}
              className="md:h-full w-48"
              alt="Intershala"
            />
          </Link>

          <div className="flex gap-5 items-center">
            <div className="relative group">
              <button
                className="textBlueDark border rounded text-white px-5 py-1 flex items-center gap-2 hover:bg-sky-700 hover:text-white group-hover:border-red-700"
                style={{ borderColor: "#005483" }}
                onMouseEnter={setIsDropdownOpendef}
              >
                Category
                <MdOutlineArrowDropDown className="text-2xl" />
              </button>
              <div className="absolute hidden group-hover:block border bg-white text-black rounded mt-[1px] w-[800px] h-[400px] z-40">
                <div className="flex h-full">
                  <div className="flex-1 border-r-2 overflow-auto bg-gray-100">
                    <ul className="flex flex-col gap-1">
                      {store.map((item) => (
                        <li
                          key={item.id}
                          onMouseEnter={() => setIsDropdownOpen(item)}
                          onMouseLeave={handleMouseLeave}
                          className="group flex items-center justify-between p-3 rounded cursor-pointer hover:bg-white transition"
                        >
                          <span>{item.name}</span>
                          <IoMdArrowDropright className="w-4 h-4 transition-opacity duration-200" />
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex-1 border-r-2 overflow-auto bg-gray-100">
                    <ul className="flex flex-col gap-1">
                      {hoveredItem &&
                        subCategories[hoveredItem.name]?.map(
                          (subCat, index) => (
                            <li
                              key={index}
                              className="group flex items-center justify-between p-2 rounded cursor-pointer hover:bg-white transition"
                            >
                              <span className="text-sm">{subCat}</span>
                            </li>
                          )
                        )}
                    </ul>
                  </div>

                  <div className="flex-1 border rounded-md p-4 max-w-sm">
                    <div className="">Live Course</div>
                    <hr />
                    <h2 className="text-lg font-semibold text-gray-800 mb-2">
                      {hoveredItem?.liveCourses?.name}
                    </h2>
                    <div className="flex items-center text-sm text-gray-600 mb-2">
                      <span className="flex items-center mr-4">
                        <svg
                          className="w-4 h-4 text-blue-600 mr-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 10a4 4 0 100-8 4 4 0 000 8zM2 18a8 8 0 1116 0H2z" />
                        </svg>
                        <span className="text-blue-600 font-medium">
                          {hoveredItem?.liveCourses?.learners} Learners
                        </span>
                      </span>
                      <span className="flex items-center">
                        <svg
                          className="w-4 h-4 text-yellow-500 mr-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.975h4.183c.969 0 1.371 1.24.588 1.81l-3.39 2.462 1.287 3.974c.3.922-.755 1.688-1.538 1.118L10 13.348l-3.367 2.518c-.783.57-1.838-.196-1.538-1.118l1.287-3.974-3.39-2.462c-.783-.57-.38-1.81.588-1.81h4.183L9.05 2.927z" />
                        </svg>
                        {hoveredItem?.liveCourses?.starts}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">
                      {hoveredItem?.liveCourses?.desc}
                    </p>
                    <button className="w-full text-blue-600 border border-blue-600 rounded-md py-2 hover:bg-blue-50 transition">
                      View Course Details
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative grayBackground rounded-full cursor-pointer">
              <Input
                type="text"
                placeholder="Search Courses"
                className="border-0 ps-[34px] w-[350px] rounded-full"
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <span className="absolute left-2 top-2 textBlueDark text-xl">
                <RiSearchLine />
              </span>
              {filteredItems.length > 0 && (
                <ul className="absolute bg-white border rounded-md mt-2 shadow-lg w-full z-50">
                  {filteredItems.map((item) => (
                    <li
                      key={item.id}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      {item.name}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            {isActive && <SearchArea handleRemove={handleRemove} />}
          </div>
        </div>

        <div className="flex gap-5 items-center">
          <div className="hidden lg:block">
            <MegaMenu />
          </div>
          <div className="hidden lg:flex gap-3">
            <Link
              href="/signup"
              className="text-base whitespace-nowrap px-3 py-1 rounded textBlueDark border-2"
              style={{ borderColor: "#005483" }}
            >
              Sign Up
            </Link>
            <Link
              href="/login"
              className="text-base border-2 whitespace-nowrap px-3 py-1 rounded textBlueDark"
              style={{ borderColor: "#005483" }}
            >
              Log in
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
