import React from 'react'
import data from "@/data/sitemap.json";
import Link from 'next/link';
function Sitemapcard() {
    
    return (
        <>
            <div className="mx-auto px-3 mb-5 ">
                <h2 className="text-3xl  font-semibold uppercase text-gray-900 tracking-wide mb-8">
                    SLA Consultant India Sitemap
                </h2>
                <div className='bg-white p-8 shadow-md border-t'>
                    <h3 className='text-2xl textBlueDark font-bold'>All Categories</h3>
                    <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-3'>
                        {data?.categories?.map((category,index)=>{
                            return  <div className='py-3'>
                            <ul>
                                <li>
                                    <Link href={`${"/"}`}>{category?.name}</Link>
                                </li>

                            </ul>
                        </div>
                        })}
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sitemapcard
