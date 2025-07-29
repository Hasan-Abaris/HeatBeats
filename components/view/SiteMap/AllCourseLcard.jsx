import React from 'react'
import data from "@/data/sitemap.json";
import Link from 'next/link';

function AllCourseLcard() {
    return (
        <div className="mx-auto px-3">
            
            <div className='bg-white p-8 shadow-md '>
                <h3 className='text-2xl textBlueDark font-bold'>All Courses</h3>
                <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-3'>
                    {data?.sitemapAllCourses?.map((Course, index) => {
                        return <div className='py-3'>
                            <ul>
                                <li>
                                    <Link href={`${"/"}`}>{Course?.name}</Link>
                                </li>

                            </ul>
                        </div>
                    })}

                </div>
            </div>
        </div>
    )
}

export default AllCourseLcard
