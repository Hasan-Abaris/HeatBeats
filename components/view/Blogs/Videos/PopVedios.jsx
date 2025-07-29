"use client"
import React from 'react'
import data from "@/data/videos.json";
import Image from 'next/image';
import Link from 'next/link';
import { MdMessage } from 'react-icons/md';
import { FaEye } from 'react-icons/fa';
import { FaCirclePlay } from 'react-icons/fa6';
// import { useSearchParams } from "next/navigation";
import Pagination from '@/components/common/Pagination/Pagination';
const POPULARVID_PER_PAGE = 4;
function PopVedios() {
    //   const searchParams = useSearchParams();
    //     const page = parseInt(searchParams.get("page") || "1", 10);
    
    //     const popularVid = data?.recentVideos || [];
    //     const totalPages = Math.ceil(popularVid.length / POPULARVID_PER_PAGE);
    
    //     const startIndex = (page - 1) * POPULARVID_PER_PAGE;
    //     const endIndex = startIndex + POPULARVID_PER_PAGE;
    //     const currentpopularVid = popularVid.slice(startIndex, endIndex);
    // console.log(data);
    
  return (
    <>
            <h2 className="text-xl font-extrabold uppercase text-gray-900 tracking-wide mb-5">
                Popular Videos
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
                {data?.recentlyArticles?.map((item, index) => (
                    <div
                        key={index}
                        className="h-full flex flex-col justify-between transition-all duration-700 ease-in-out  shadow-lg border border-gray-200  overflow-hidden"
                    >
                        <div className="relative w-full overflow-hidden border-b">
                            <Image
                                src={item?.image}
                                width={500}
                                height={300}
                                alt="recent-videos"
                                className="w-full h-auto object-cover"
                            />

                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="relative">
                                    <div className="absolute inset-0 rounded-full "></div>
                                    <div className="relative z-10 bg-orange-500 text-white p-3 rounded-full shadow-lg ">
                                        <span className='text-3xl'><FaCirclePlay /></span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 bg-white">
                            <div className="text-sm textBlueDark font-medium">
                                <Link href={"#"}>{item?.title}</Link>
                                {item?.author && (
                                    <div className="text-sm text-gray-500 mt-2">
                                        <span className="font-bold text-xs">By: {item?.author}</span>
                                    </div>
                                )}
                            </div>

                            <div className="text-md textBlueDark font-bold mt-2 flex justify-between items-center">
                                <div className='updated'>
                                    <p><small>Last Updated On</small></p>
                                    <span>{item?.date}</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center gap-1">
                                        <FaEye className="textOrange" />
                                        <span>{item?.views ? item?.views : "0"}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <MdMessage className="textOrange" />
                                        <span>{item?.comments ? item?.comments : "0"}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                ))}
            </div>
            {/* <Pagination currentPage={page} totalPages={totalPages} /> */}
        </>
  )
}

export default PopVedios
