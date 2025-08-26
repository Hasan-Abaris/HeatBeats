"use client";

import Link from "next/link";
import { RiSearchLine } from "react-icons/ri";
import { useEffect, useState } from "react";
import { IoCallSharp } from "react-icons/io5";
import { FaCaretDown } from "react-icons/fa6";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { IoMdArrowDropright } from "react-icons/io";
import { FaBell } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import axios from "axios";
import { useRouter } from "next/navigation";

import MegaMenu from "./MegaMenu";
import SearchOverlay from "@/components/common/SearchOverlay";
import CallModel from "./CallModel";
import Loadar from "@/app/comman/Loader";
import { Input } from "@/components/ui/input";
import { getCategiryList, getSiteSettings } from "@/app/comman/FrontApi";
import { baseUrl, xApiKey } from "@/app/comman/UrlCollection";

export function Header() {
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [settings, setSettings] = useState({});
  const [saleisActive, setSaleIsActive] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [models, showModels] = useState(false);

  const [store, setStore] = useState([]);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [courses, setCourses] = useState([]);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [profileOpen, setProfileOpen] = useState(false);

  const handleRemove = () => setIsActive(false);

  const getSettings = async () => {
    try {
      const res = await getSiteSettings();
      setSettings(res.data?.data || {});
    } catch (error) {
      console.error("Error fetching settings:", error);
    }
  };

  const getCategory = async () => {
    try {
      const getData = await getCategiryList();
      if (getData.status === 200 && getData.data?.data) {
        setStore(getData.data.data);
        setHoveredItem(getData.data.data[0]);
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const setIsDropdownOpendef = () => {
    if (!hoveredItem && store.length) setHoveredItem(store[0]);
  };

  // ✅ Fetch settings + categories on mount
  useEffect(() => {
    const fetchInit = async () => {
      setLoading(true);
      await Promise.all([getSettings(), getCategory()]);
      setLoading(false);
    };
    fetchInit();
  }, []);

  // ✅ Check login on mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");
    if (token && storedUser) {
      setUser(JSON.parse(storedUser));
      setIsLoggedIn(true);
    } else {
      setUser(null);
      setIsLoggedIn(false);
    }
  }, []);

  // ✅ Listen for login/logout events across app
  useEffect(() => {
    const handleAuthChange = () => {
      const token = localStorage.getItem("token");
      const storedUser = localStorage.getItem("user");
      if (token && storedUser) {
        setUser(JSON.parse(storedUser));
        setIsLoggedIn(true);
      } else {
        setUser(null);
        setIsLoggedIn(false);
      }
    };

    window.addEventListener("storage", handleAuthChange);
    window.addEventListener("authChange", handleAuthChange);

    return () => {
      window.removeEventListener("storage", handleAuthChange);
      window.removeEventListener("authChange", handleAuthChange);
    };
  }, []);

  // ✅ Fetch courses when hovered category changes
  useEffect(() => {
    const fetchCourses = async () => {
      if (!hoveredItem) return;
      try {
        const res = await axios.get(
          `${baseUrl}course/get-all-courses?course_category_id=${hoveredItem.id}`,
          { headers: { "X-API-Key": xApiKey } }
        );
        setCourses(res.status === 200 && res.data?.data ? res.data.data : []);
      } catch (error) {
        console.error("Error fetching courses:", error);
        setCourses([]);
      }
    };
    fetchCourses();
  }, [hoveredItem]);

  const setIsDropdownOpen = (item) => setHoveredItem(item);

  // ✅ Logout function
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setUser(null);
    setProfileOpen(false);

    window.dispatchEvent(new Event("authChange"));
    router.push("/"); // go to home page
  };

  return (
    <>
      {loading && <Loadar />}

      {/* top strip */}
      <div className="px-6 md:px-16 py-2 bgBlueDark">
        <div className="flex justify-between flex-wrap">
          <ul className="flex gap-6 flex-wrap">
            <li className="text-white flex gap-3 text-sm items-center">
              <IoCallSharp /> New Course Enquiry :
            </li>
            <li className="text-white flex gap-3 text-sm items-center">
              {settings["site.phone"] || "+1 833 564 3321"}
              {!saleisActive ? (
                <span>(Toll Free)</span>
              ) : (
                <span className="cursor-pointer" onClick={() => showModels(true)}>
                  <FaCaretDown />
                </span>
              )}
              {models && (
                <CallModel isOpen={models} setIsOpen={showModels} settings={settings} />
              )}
            </li>
          </ul>

          {settings["site.promo_text"] && (
            <div className="text-white text-sm flex gap-2 items-center">
              <span
                dangerouslySetInnerHTML={{
                  __html: settings["site.promo_text"],
                }}
              />
              {settings["site.promo_button_url"] && (
                <Link href={settings["site.promo_button_url"]} className="text-yellow-200 underline">
                  Know more
                </Link>
              )}
            </div>
          )}
        </div>
      </div>

      {/* main header */}
      <header className="border-b flex justify-between items-center px-6 py-3 md:px-16 md:py-3 bg-white w-full">
        {/* left: logo + category + search */}
        <div className="flex gap-5 items-center">
          <Link href="/">
            <img
              src={
                settings?.data?.image_base_url && settings?.data?.["site.header_logo"]
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
            {/* Category mega dropdown (left button) */}
            <div className="relative group">
              <button
                className="textBlueDark border rounded text-white px-5 py-1 flex items-center gap-2 hover:bg-sky-700 hover:text-white"
                style={{ borderColor: "#005483" }}
                onMouseEnter={setIsDropdownOpendef}
              >
                Category
                <MdOutlineArrowDropDown className="text-2xl" />
              </button>

              {/* Mega dropdown content */}
              <div className="absolute hidden group-hover:block border bg-white text-black rounded mt-[1px] w-[800px] h-[400px] z-40">
                <div className="flex h-full">
                  {/* Categories list */}
                  <div className="flex-1 border-r-2 overflow-auto bg-gray-100">
                    <ul className="flex flex-col gap-1">
                      {store.map((item) => (
                        <li
                          key={item.id}
                          onMouseEnter={() => setIsDropdownOpen(item)}
                          className="group flex items-center justify-between p-3 rounded cursor-pointer hover:bg-white transition"
                        >
                          <span>{item.name}</span>
                          <IoMdArrowDropright className="w-4 h-4" />
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Courses list */}
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
                        <li className="p-2 text-sm text-gray-500">No courses available</li>
                      )}
                    </ul>
                  </div>

                  {/* Course preview */}
                  <div className="flex-1 border rounded-md p-4 max-w-sm">
                    <div>Live Course</div>
                    <hr />
                    {courses[0] ? (
                      <>
                        <h2 className="text-lg font-semibold text-gray-800 mb-2">
                          {courses[0].name}
                        </h2>
                        <div className="flex items-center text-sm text-gray-600 mb-2">
                          <span className="flex items-center mr-4">
                            <svg className="w-4 h-4 text-blue-600 mr-1" fill="currentColor" viewBox="0 0 20 20">
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
                      <p className="text-sm text-gray-600 mb-2">No course selected</p>
                    )}
                    <button className="w-full text-blue-600 border border-blue-600 rounded-md py-2 hover:bg-blue-50 transition">
                      View Course Details
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Search */}
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

        {/* right: nav area */}
        <div className="flex gap-5 items-center">
          {!isLoggedIn && (
            <div className="hidden lg:block">
              <MegaMenu />
            </div>
          )}

          <div className="flex gap-3 items-center">
            {isLoggedIn ? (
              <>
                <Link href="/refer" className="text-base textBlueDark">
                  Refer
                </Link>
                <Link href="/all-courses" className="text-base textBlueDark">
                  All Courses
                </Link>
                <Link href="/community" className="text-base textBlueDark">
                  Community
                </Link>

                <button className="text-xl textBlueDark">
                  <FaBell />
                </button>

                {/* profile dropdown */}
                <div className="relative">
                  <button
                    className="text-xl textBlueDark flex items-center"
                    onClick={() => setProfileOpen(!profileOpen)}
                  >
                    <FiUser />
                    <span className="ml-1">{user?.username || "User"}</span>
                    <MdOutlineArrowDropDown className="text-2xl" />
                  </button>

                  {profileOpen && (
                    <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg overflow-hidden z-50">
                      <Link
                        href="/profile"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        My Profile
                      </Link>
                      <Link
                        href="/settings"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        Settings
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <>
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
              </>
            )}
          </div>
        </div>
      </header>
    </>
  );
}
