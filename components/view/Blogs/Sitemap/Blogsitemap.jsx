"use client"
import React from 'react'
import data from "@/data/blogsitemap"
import Link from 'next/link'
import Pagination from '@/components/common/Pagination/Pagination'
// import { useSearchParams } from 'next/navigation';
const LINK_PER_PAGE = 40;
function Blogsitemap() {
    // const searchParams = useSearchParams();
    //         const page = parseInt(searchParams.get("page") || "1", 10);
        
    //         const popularVid = data|| [];
    //         const totalPages = Math.ceil(popularVid.length / LINK_PER_PAGE);
        
    //         const startIndex = (page - 1) * LINK_PER_PAGE;
    //         const endIndex = startIndex + LINK_PER_PAGE;
            // const blogsitemap = popularVid.slice(startIndex, endIndex);
    return (
        <>
            <div className="mx-auto px-3 mb-5 ">
                <h2 className="text-3xl px-4  font-semibold uppercase text-gray-900 tracking-wide mb-8 shadow-md">
                    Blog Sitemap
                </h2>
                <div className='bg-white p-8 shadow-md border-t'>
                    
                    <div className='grid grid-cols-1 sm:grid-cols-4 md:grid-4'>
                        {data?.map((blog, index) => {
                            return <div className='py-3' key={index}>
                                <ul>
                                    <li>
                                        <div className="w-full overflow-hidden whitespace-nowrap text-ellipsis px-5 hover:underline">
                                            <Link href={`${blog?.path}`} className="truncate">
                                                {blog?.title}
                                            </Link>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        })}

                    </div>
                    {/* <Pagination currentPage={page} totalPages={totalPages} /> */}
                </div>
            </div>
        </>
    )
}

export default Blogsitemap
