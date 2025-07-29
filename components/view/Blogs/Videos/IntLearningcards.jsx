import React from 'react'
import {  FaTools, FaDatabase, FaShieldAlt, FaCloud, FaBriefcase, FaCode, FaBullhorn, FaUserFriends,  FaBuilding,  FaWarehouse, FaChartPie, FaCogs } from 'react-icons/fa';
import { GiArtificialIntelligence,GiOrbital } from "react-icons/gi";
import { TiLightbulb } from "react-icons/ti";
import { SlGraph } from "react-icons/sl";
import { MdOutlineSettingsSuggest,MdOutlineCreditCard,MdMonitorHeart } from "react-icons/md";
import { BsDatabase } from "react-icons/bs";
import { GoInfinity } from "react-icons/go";
import { TbSpeakerphone } from "react-icons/tb";
import { IoCodeSlashOutline } from "react-icons/io5";
import { HiDevicePhoneMobile } from "react-icons/hi2";
import { AiOutlineGlobal } from "react-icons/ai";
const intrestedLearninData = [
    { "title": "Artificial Intelligence", "icon": <GiArtificialIntelligence /> },
    { "title": "BI and Visualization", "icon": <TiLightbulb /> },
    { "title": "Big Data", "icon": <SlGraph /> },
    { "title": "Cloud Computing", "icon": <FaCloud /> },
    { "title": "Data Science", "icon": <GiOrbital /> },

    { "title": "Data Wherehousing and ETL", "icon": <MdOutlineSettingsSuggest /> },
    { "title": "Database", "icon": <BsDatabase /> },
    
    { "title": "DeveOps", "icon": <GoInfinity /> },
    { "title": "Digital Marketing", "icon": <TbSpeakerphone /> },

    { "title": "Frontend Development", "icon": <IoCodeSlashOutline /> },
    { "title": "Mobile Development", "icon": <HiDevicePhoneMobile /> },
    { "title": "Operating System", "icon": <MdOutlineCreditCard /> },
    { "title": "Programing Frameworks","icon" :<AiOutlineGlobal  /> },
    { "title": "Software Testing", "icon": <FaTools /> },
    { "title": "System & Architecture", "icon": <MdMonitorHeart /> },

    
]
function IntLearningcards() {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-5   gap-8 mb-10">
            {intrestedLearninData.map((item, i) => {
                return <div className="relative group transition-all duration-700 ease-in-out hover:-translate-y-2 " key={i}>
                    <div className="w-full lg:py-8 md:py-6 bg-white border border-gray-200 shadow-xl shadow-gray-300  items-center flex justify-center p-2 rounded-sm">
                        <div className="icon text-center">
                            <span className="inline-block text-center text-bluelight text-xl">{item?.icon}</span>
                            <h4 className="text-center mt-2 text-gray-700 mb-3 text-sm">{item?.title}</h4>
                        </div>
                    </div>
                </div>
            })}
        </div>
    )
}

export default IntLearningcards
