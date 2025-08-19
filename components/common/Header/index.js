"use client";

import Link from "next/link";
import { RiSearchLine } from "react-icons/ri";
import MegaMenu from "./MegaMenu";
import { useEffect, useState } from "react";
import SearchArea from "./SearchArea";
import { IoCallSharp } from "react-icons/io5";
import { FaCaretDown } from "react-icons/fa6";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { MdOutlineArrowDropDown } from "react-icons/md";
import CallModel from "./CallModel";
import { IoMdArrowDropright } from "react-icons/io";
import { getCategiryList, getSiteSettings } from "@/app/comman/FrontApi";
import Loadar from "@/app/comman/Loader";
import { baseUrl, xApiKey } from "@/app/comman/UrlCollection";
import SearchOverlay from "@/components/common/SearchOverlay"; // adjust path if needed

export function Header() {
  const [loading, setLoading] = useState(true);
  const [settings, setSettings] = useState({});
  const [saleisActive, setSaleIsActive] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [models, showModels] = useState(false);
  const [store, setStore] = useState([]);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [courses, setCourses] = useState([]);

  const handleRemove = () => setIsActive(false);

  const getSettings = async () => {
    const res = await getSiteSettings();
    setSettings(res.data?.data || {});
  };

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

  // ✅ -> proper safe default dropdown function
  const setIsDropdownOpendef = () => {
    if (!hoveredItem && store.length) {
      setHoveredItem(store[0]);
    }
  };

  useEffect(() => {
    getCategory();
    getSettings();
    const timer = setTimeout(() => setSaleIsActive(true), 10000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const fetchCourses = async () => {
      if (!hoveredItem) return;
      try {
        const res = await axios.get(
          `${baseUrl}course/get-all-courses?course_category_id=${hoveredItem.id}`,
          {
            headers: {
              "X-API-Key": xApiKey,
            },
          }
        );
        if (res.status === 200 && res.data?.data) {
          setCourses(res.data.data);
        } else {
          setCourses([]);
        }
      } catch (error) {
        console.error("Error fetching courses:", error);
        setCourses([]);
      }
    };
    fetchCourses();
  }, [hoveredItem]);

  const setIsDropdownOpen = (item) => setHoveredItem(item);
  const handleMouseLeave = () => {};

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
          {/* Left – enquiry */}
          <ul className="flex gap-6 flex-wrap">
            <li className="text-white flex gap-3 text-sm items-center">
              <IoCallSharp /> New Course Enquiry :
            </li>
            <li className="text-white flex gap-3 text-sm items-center">
              {settings["site.phone"] || "+1 833 564 3321"}
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
              {models && (
                <CallModel
                  isOpen={models}
                  setIsOpen={showModels}
                  settings={settings} // ✅ pass settings object here
                />
              )}
            </li>
          </ul>

          {/* Right – Promotion (NEW) */}
          {settings["site.promo_text"] && (
            <div className="text-white text-sm flex gap-2 items-center">
              <span
                dangerouslySetInnerHTML={{
                  __html: settings["site.promo_text"],
                }}
              ></span>
              {settings["site.promo_button_url"] && (
                <Link
                  href={settings["site.promo_button_url"]}
                  className="text-yellow-200 underline"
                >
                  Know more
                </Link>
              )}
            </div>
          )}
        </div>
      </div>

      <header className="border-b flex justify-between items-center px-6 py-3 md:px-16 md:py-3 bg-white w-full">
        <div className="flex gap-5 items-center">
          <Link href="/">
            <img
              src={
                settings?.data?.image_base_url &&
                settings?.data?.["site.header_logo"]
                  ? `${settings.data.image_base_url}/${settings.data["site.header_logo"]}`
                  : "/images/main-logo.png"
              }
              width={240}
              height={40}
              className="md:h-full w-48"
              alt="SLA logo"
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
                  {/* Left panel: Categories */}
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

                  {/* Middle panel: Dynamic courses */}
                  <div className="flex-1 border-r-2 overflow-auto bg-gray-100">
                    <ul className="flex flex-col gap-1">
                      {courses.length > 0 ? (
                        courses.map((course) => (
                          <li
                            key={course.id}
                            className="group flex items-center justify-between p-2 rounded cursor-pointer hover:bg-white transition"
                          >
                            <span className="text-sm">{course.name}</span>
                          </li>
                        ))
                      ) : (
                        <li className="p-2 text-sm text-gray-500">
                          No courses available
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Right panel: Live course (static or can adapt later) */}
                  <div className="flex-1 border rounded-md p-4 max-w-sm">
                    <div className="">Live Course</div>
                    <hr />
                    {courses[0] ? (
                      <>
                        <h2 className="text-lg font-semibold text-gray-800 mb-2">
                          {courses[0].name}
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
                              {courses[0]?.learners || "--"} Learners
                            </span>
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-4">
                          {courses[0]?.desc || "No details available"}
                        </p>
                      </>
                    ) : (
                      <p className="text-sm text-gray-600 mb-2">
                        No course selected
                      </p>
                    )}

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
                onFocus={() => setIsActive(true)}
              />
              <span className="absolute left-2 top-2 textBlueDark text-xl">
                <RiSearchLine />
              </span>
            </div>

            <SearchOverlay isOpen={isActive} onClose={handleRemove} />
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
