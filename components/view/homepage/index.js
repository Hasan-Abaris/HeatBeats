"use client";
import { useEffect, useState } from "react";
import Banner from "./Banner";
import Blogs from "./Blogs";
import CareerRelatedPrograms from "./CareerRelatedPrograms";
import CertificationCourses from "./CertificationCourses";
import DiscoverTopCategories from "./DiscoverTopCategories";
import EnrollSection from "./EnrollSection";
import Internship from "./Internship";
import OurCorporateClients from "./OurCorporateClients";
import RecentAdditions from "./RecentAdditions";
import Reviews from "./Reviews";
import ShortTermCourse from "./ShortTermCourse";
import SLABusiness from "./SLABusiness";
import SLAEdge from "./SLAEdge";
import TrendingCourses from "./TrendingCourses";
import UpskillModel from "../Home/UpskillModel";
import CouncellingModel from "../Home/CouncellingModel";
import Loader from "@/app/comman/Loader";
import {
  getClientsList,
  getSiteSettings,
  getCategiryList,
} from "@/app/comman/FrontApi";
import axios from "axios";
import { baseUrl, xApiKey } from "@/app/comman/UrlCollection";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { IoMdArrowDropright } from "react-icons/io";
import { FiMenu } from "react-icons/fi"; // 

import Link from "next/link";

function HomePageNew() {
  const [isOpen, setIsOpen] = useState({ skills: false, counselling: false });
  const [opacity, setOpacity] = useState(60);
  const [allClients, setClients] = useState([]);
  const [siteSettings, setSiteSettings] = useState(null);
  const [loading, setLoading] = useState(true);

  // category states
  const [store, setStore] = useState([]);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [courses, setCourses] = useState([]);

  const setIsDropdownOpendef = () => {
    if (!hoveredItem && store.length) {
      setHoveredItem(store[0]);
    }
  };

  const getData = async () => {
    try {
      const resClients = await getClientsList();
      if (resClients.status === 200) setClients(resClients.data.data || []);

      const resSettings = await getSiteSettings();
      if (resSettings.status === 200) setSiteSettings(resSettings.data.data);

      // ✅ fetch category list
      const resCat = await getCategiryList();
      if (resCat.status === 200) {
        setStore(resCat.data.data || []);
        setHoveredItem(resCat.data.data[0]);
      }
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getData();
    const t = setTimeout(() => {
      setIsOpen({ counselling: false, skills: true });
    }, 9000);
    return () => clearTimeout(t);
  }, []);

  // load courses when category hovered
  useEffect(() => {
    const fetchCourses = async () => {
      if (!hoveredItem) return;
      const res = await axios.get(
        `${baseUrl}course/get-all-courses?course_category_id=${hoveredItem.id}`,
        { headers: { "X-API-Key": xApiKey } }
      );
      setCourses(res.data?.data || []);
    };
    fetchCourses();
  }, [hoveredItem]);

  if (loading) return <Loader />;

  return (
    <div className="w-full relative">
      {isOpen.skills && (
        <UpskillModel
          isOpen={isOpen.skills}
          setIsOpen={setIsOpen}
          opacity={opacity}
        />
      )}
      {isOpen.counselling && (
        <CouncellingModel
          isOpen={isOpen.counselling}
          setIsOpen={setIsOpen}
          opacity={opacity}
        />
      )}

      {/* ===== Header Menu Bar ===== */}
      <ul className="flex gap-10 py-2 bg-gray-100">
        {/* LEFT: Browse Courses dropdown */}
        <li className="relative group text-blue-800 text-lg">
          <button
            className="border px-4 py-1 flex items-center gap-2"
            onMouseEnter={setIsDropdownOpendef}
          >
            Browse Courses <MdOutlineArrowDropDown />
          </button>

          <div className="absolute left-0 hidden group-hover:block bg-white border rounded mt-1 w-[800px] h-[400px] z-40">
            <div className="flex h-full">
              {/* left list - categories */}
              <div className="flex-1 border-r overflow-auto bg-gray-100">
                <ul>
                  {store.map((item) => (
                    <li
                      key={item.id}
                      onMouseEnter={() => setHoveredItem(item)}
                      className="p-3 hover:bg-white cursor-pointer flex justify-between"
                    >
                      <span>{item.name}</span>
                      <IoMdArrowDropright />
                    </li>
                  ))}
                </ul>
              </div>

              {/* mid list - courses */}
              <div className="flex-1 border-r overflow-auto bg-gray-100">
                <ul>
                  {courses?.length > 0 ? (
                    courses.map((course) => (
                      <li
                        key={course.id}
                        className="p-2 hover:bg-white cursor-pointer"
                      >
                        {course.name}
                      </li>
                    ))
                  ) : (
                    <li className="p-2 text-sm text-gray-500">No courses</li>
                  )}
                </ul>
              </div>

              {/* right - details */}
              <div className="flex-1 p-4">
                {courses[0] ? (
                  <>
                    <h2 className="font-semibold">{courses[0].name}</h2>
                    <p className="text-sm text-gray-600">
                      {courses[0]?.desc || "No details available"}
                    </p>
                  </>
                ) : (
                  <p>No course selected</p>
                )}
              </div>
            </div>
          </div>
        </li>

        {/* CENTER: show first 10 categories inline */}
        {store.slice(0, 10).map((cat) => (
          <li key={cat.id} className="relative text-blue-800 text-lg group">
            <a href={`/category/${cat.slug || cat.id}`}>{cat.name}</a>
          </li>
        ))}

        {/* More categories in dropdown if > 10 */}
        {store.length > 10 && (
          <li className="relative text-blue-800 text-lg group">
            <button className="px-2">
              <FiMenu size={20} /> {/* ✅ Menu icon */}
            </button>
            <div className="absolute left-0 mt-2 bg-white border rounded shadow hidden group-hover:block z-10 min-w-[200px]">
              {store.slice(10).map((cat) => (
                <Link
                  key={cat.id}
                  href={`/category/${cat.slug || cat.id}`}
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          </li>
        )}
      </ul>

      {/* ===== Sections ===== */}
      <Banner />
      <TrendingCourses />
      <CareerRelatedPrograms />
      <RecentAdditions />
      <CertificationCourses />
      <ShortTermCourse />
      <Internship />
      <DiscoverTopCategories />
      <Reviews />
      <EnrollSection />
      <Blogs />
      <SLAEdge />
      <SLABusiness />
      <OurCorporateClients allclients={allClients} />
    </div>
  );
}

export default HomePageNew;
