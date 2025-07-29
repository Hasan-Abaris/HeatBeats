import Link from 'next/link'
import React from 'react'
import { PiVideoFill } from 'react-icons/pi';
import { TbBrandWechat } from "react-icons/tb";
import { BsGrid1X2 } from "react-icons/bs";
import { IoPhonePortraitSharp } from "react-icons/io5";
function MoreResources() {
    const moreResourceData = [
        {
            "icon": <PiVideoFill />,
            "title": "Videos",
            "count": "211",
            "category": "Videos",
            "path": "blogs/videos"
        },
        {
            "icon": <TbBrandWechat />,
            "title": "Interview Qustions",
            "count": "234",
            "category": "Questions Bank",
            "path": "/"
        },
        {
            "icon": <BsGrid1X2 />,
            "title": "Cheat Sheet ",
            "count": "12",
            "category": "CheatSheet",
            "path": "/"
        },
        {
            "icon": <IoPhonePortraitSharp />,
            "title": "Ebook",
            "count": "14 ",
            "category": "Ebook",
            "path": "/"
        },
    ]
    return (
        <>
            <h2 className="text-xl  font-extrabold uppercase text-gray-900 tracking-wide mb-5">
                More Resources
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-10">
                {moreResourceData.map((resource, index) => {
                    return <div className="w-full  border bgOrange  rounded-sm text-white  flex items-center gap-5 p-2" key={index}>
                        <div className='text-6xl'>{resource?.icon}</div>
                        <div className='videos'>
                            <Link href={resource?.path} className="font-bold text-md">{resource?.title}</Link>
                            <p>
                                <small className='font-thin'>
                                    {resource?.count}
                                </small>
                                {resource?.count  ? "+" : ""}
                                <small className='font-thin'>
                                    {resource?.category}
                                </small>
                            </p>
                        </div>
                    </div>
                })}
            </div>
        </>
    )
}

export default MoreResources
