"use client";
import { useEffect, useState } from "react";
import Banner from "./Banner";
import Blogs from "./Blogs";
import CareerRelatedPrograms from "./CareerRelatedPrograms";
import CertificationCourses from "./CertificationCourses";
import DiscoverTopCategories from "./DiscoverTopCategories";
import EnrollSection from "./EnrollSection";
import Internship from "./Internship";
import RecentAdditions from "./RecentAdditions";
import Reviews from "./Reviews";
import ShortTermCourse from "./ShortTermCourse";
import SLABusiness from "./SLABusiness";
import SLAEdge from "./SLAEdge";
import TrendingCourses from "./TrendingCourses";
import UpskillModel from "../Home/UpskillModel";
import CouncellingModel from "../Home/CouncellingModel";
import Loader from "@/app/comman/Loader";
import EducatorsSlider from "./EducatorsSlider";

function HomePageNew() {
  const [isOpen, setIsOpen] = useState({ skills: false, counselling: false });
  const [opacity, setOpacity] = useState(60);
  const [loading, setLoading] = useState(true);

  // Static placeholder data
  const staticClients = [
    { id: 1, name: "Client A", logo: "/images/clients/client1.png" },
    { id: 2, name: "Client B", logo: "/images/clients/client2.png" },
    { id: 3, name: "Client C", logo: "/images/clients/client3.png" },
  ];

  const staticSettings = {
    siteName: "HeatBeasts",
    address: "42 Pixel Street, Tech City, Gamingland 400001",
  };

  const staticCategories = [
    { id: 1, name: "Game Development" },
    { id: 2, name: "Esports" },
    { id: 3, name: "UI/UX Design" },
  ];

  const [hoveredItem, setHoveredItem] = useState(staticCategories[0]);
  const [courses, setCourses] = useState([]);

  // Simulate loading
  useEffect(() => {
    const t = setTimeout(() => {
      setIsOpen({ counselling: false, skills: true });
      setLoading(false);
    }, 1000);
    return () => clearTimeout(t);
  }, []);

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
      <EducatorsSlider /> {/* Uses static data */}
      <DiscoverTopCategories />
      <Reviews />
      <EnrollSection />
      <Blogs />
      <SLAEdge />
      <SLABusiness />
      {/* Example of static clients if needed */}
      {/* <OurCorporateClients allclients={staticClients} /> */}
    </div>
  );
}

export default HomePageNew;
