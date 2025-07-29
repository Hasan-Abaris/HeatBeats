import React from 'react'
import Link from 'next/link'
import data from "@/data/commsitemap"

function Sitemap() {
    return (
        <section className="py-10 md:px-16 p-6">
            <div className="mx-auto px-3 mb-5 ">
                <h2 className="text-3xl px-4  font-semibold uppercase text-gray-900 tracking-wide mb-8 p-4 shadow-md">
                    Community Sitemap
                </h2>

                <div className='grid grid-cols-1 sm:grid-cols-4 md:grid-4 gap-2 bg-white'>
                    {data?.map((city, index) => {
                        return <div className=" p-2 " key={index}>
                            <span className="font-bold text-md truncate max-w-[300px] inline-block">
                                <Link href={`/`}>{city?.title}</Link>
                            </span>

                        </div>

                    })}

                </div>
            </div>
        </section>
    )
}

export default Sitemap
