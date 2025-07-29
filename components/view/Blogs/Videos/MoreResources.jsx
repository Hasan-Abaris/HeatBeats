import React from 'react'
import { BiSolidMoviePlay } from "react-icons/bi";
import { BsFillChatTextFill } from "react-icons/bs";
import { TfiLayoutMenuV } from "react-icons/tfi";
import { BsFillPhoneFill } from "react-icons/bs";
import Link from 'next/link';
function MoreResources() {
    const moreResourceVideos = [
        {
            "icon": <BiSolidMoviePlay />,
            "title": "Blogs",
            "count": "77",
            "category": "Blogs",
            "path": "/blogs"
        },
        {
            "icon": <BsFillChatTextFill />,
            "title": "Interview Qustions",
            "count": "234",
            "category": "Questions Bank",
            "path": "/"
        },
        {
            "icon": <TfiLayoutMenuV />,
            "title": "Cheat Sheet ",
            "count": "12",
            "category": "CheatSheet",
            "path": "/"
        },
        {
            "icon": <BsFillPhoneFill />,
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
                {moreResourceVideos.map((resource, index) => {
                    return <div className="w-full  border bgOrange  rounded-sm text-white  flex items-center gap-5 p-2" key={index}>
                        <div className='text-6xl'>{resource?.icon}</div>
                        <div className='videos'>
                            <Link href={resource?.path} className="font-bold text-md">{resource?.title}</Link>
                            <p>
                                <small className='font-thin'>
                                    {resource?.count}
                                </small>
                                {resource?.count ? "+" : ""}
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
