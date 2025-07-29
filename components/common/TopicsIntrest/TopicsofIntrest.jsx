import React from 'react';
import { FaFileImport } from "react-icons/fa";
import { IoIosGlobe } from "react-icons/io";
import { IoCodeSlashOutline } from "react-icons/io5";
import { HiDevicePhoneMobile } from "react-icons/hi2";
import { BsDatabase } from "react-icons/bs";

// Icon name to component mapping
const iconMap = {
  IoIosGlobe: IoIosGlobe,
  HiDevicePhoneMobile: HiDevicePhoneMobile,
  IoCodeSlashOutline: IoCodeSlashOutline,
  BsDatabase: BsDatabase,
};

function TopicsofIntrest() {
  const data = [
    { id: "1", title: "Programming & Frameworks", icon: "IoIosGlobe" },
    { id: "2", title: "Mobile Development", icon: "HiDevicePhoneMobile" },
    { id: "3", title: "Frontend Development", icon: "IoCodeSlashOutline" },
    { id: "4", title: "Databases", icon: "BsDatabase" },
  ];

  return (
    <div className='bg-white shadow-md p-5'>
      <div className='items-center justify-between flex border-b pb-4'>
        <div className='flex items-center gap-x-5'>
          <span className="text-2xl"><FaFileImport /></span>
          <h3 className='text-2xl font-semibold'>Help on Course Pre-requisites</h3>
        </div>
        <button className="right-4 text-xl p-2 uppercase font-semibold">EDIT</button>
      </div>

      <div className='grid md:grid-cols-5 gap-6'>
        {data.map((item, index) => {
          const Icon = iconMap[item.icon]; 

          return (
            <div className='border p-4 rounded-sm text-center my-12' key={index}>
              <div className="text-center mb-2">
                {Icon && <Icon className="inline-block text-3xl text-blue-500" />}
              </div>
              <span className='font-light'>{item.title}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TopicsofIntrest;
