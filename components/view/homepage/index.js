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
      {/* <OurCorporateClients allclients={allClients} /> */}
    </div>
  );
}

export default HomePageNew;
