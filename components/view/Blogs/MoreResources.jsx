import Link from 'next/link';
import React from 'react';
import { PiVideoFill } from 'react-icons/pi';
import { TbBrandWechat } from "react-icons/tb";
import { BsGrid1X2 } from "react-icons/bs";
import { IoPhonePortraitSharp } from "react-icons/io5";

function MoreResources() {
    const moreResourceData = [
        {
            icon: <PiVideoFill />,
            title: "PUBG Videos",
            count: "120",
            category: "Videos",
            path: "/games/pubg"
        },
        {
            icon: <TbBrandWechat />,
            title: "Chess Tutorials",
            count: "85",
            category: "Videos",
            path: "/games/chess"
        },
        {
            icon: <BsGrid1X2 />,
            title: "Ludo Strategies",
            count: "42",
            category: "Guides",
            path: "/games/ludo"
        },
        {
            icon: <IoPhonePortraitSharp />,
            title: "Mobile Game Tips",
            count: "30",
            category: "Tips & Tricks",
            path: "/games/mobile"
        },
    ];

    return (
        <>
            <h2 className="text-xl font-extrabold uppercase text-gray-900 tracking-wide mb-5">
                More Resources
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-10">
                {moreResourceData.map((resource, index) => (
                    <div
                        className="w-full border bgOrange rounded-sm text-white flex items-center gap-5 p-4 hover:shadow-lg transition"
                        key={index}
                    >
                        <div className="text-6xl">{resource.icon}</div>
                        <div className="videos">
                            <Link href={resource.path} className="font-bold text-md hover:underline">
                                {resource.title}
                            </Link>
                            <p className="mt-1 text-sm">
                                <small className='font-thin'>{resource.count}</small>
                                {resource.count ? "+" : ""} 
                                <small className='font-thin'> {resource.category}</small>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default MoreResources;
