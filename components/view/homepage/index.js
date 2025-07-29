'use client';
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
import Loadar from "@/app/comman/Loader";
import { getClientsList, getSiteSettings } from "@/app/comman/FrontApi"; //  Import API

function HomePageNew() {
    const [isOpen, setIsOpen] = useState({
        skills: false,
        counselling: false
    });
    const [opacity, setOpacity] = useState(60);

    const [allclients, setClients] = useState(true);
    const [siteSettings, setSiteSettings] = useState(null); //  Add site settings state

    const getData = async () => {
        try {
            const resClients = await getClientsList();
            if (resClients.status === 200) {
                setClients(resClients.data.data || []);
            }

            const resSettings = await getSiteSettings(); //  Fetch site settings
            if (resSettings.status === 200) {
                setSiteSettings(resSettings.data.data); //  Store in state
            }
        } catch (error) {
        }
    };

    useEffect(() => {
        getData();
        setTimeout(() => {
            setIsOpen({ counselling: false, skills: true });
        }, 9000);
    }, []);

    return (
        <div className="w-full relative">
            {isOpen.skills && <UpskillModel isOpen={isOpen.skills} setIsOpen={setIsOpen} opacity={opacity} />}
            {isOpen.counselling && <CouncellingModel isOpen={isOpen.counselling} setIsOpen={setIsOpen} opacity={opacity} />}
            
            {/*  Optional: You can use siteSettings now */}
            {/* Example: */}
            {siteSettings?.['site.tagline'] && (
                <div className="bg-blue-100 text-center py-2 text-sm text-blue-800">
                    {siteSettings['site.tagline']}
                </div>
            )}

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
            <OurCorporateClients allclients={allclients} />
        </div>
    );
}

export default HomePageNew;
