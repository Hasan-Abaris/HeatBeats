import React from 'react'
import Link from 'next/link'
import data from "@/data/citysitemap"
function Citysitemap() {
    return (
        <section className="py-10 md:px-16 p-6">
            <div className="mx-auto px-3 mb-5 ">
                <h2 className="text-3xl px-4  font-semibold uppercase text-gray-900 tracking-wide mb-8 p-4 shadow-md">
                    SLA Consultant India City Sitemap
                </h2>

                <div className='grid grid-cols-1 sm:grid-cols-6 md:grid-6 gap-8'>
                    {data?.map((city, index) => {
                        return <div className="relative p-4 bg-gray-50 " key={index}>
                            <span className="font-bold text-xl">
                                <Link href={`/`}>{city?.title}</Link>
                            </span>
                            <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-gray-300 "></div>
                            <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-gray-300 "></div>
                            <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-gray-300 "></div>
                            <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-gray-300"></div>
                        </div>

                    })}

                </div>
            </div>
        </section>
    )
}

export default Citysitemap
