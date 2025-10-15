import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Articles({ data }) {
  

    return (
        <>
            <h2 className="text-xl font-extrabold uppercase text-gray-900 tracking-wide mb-5">
                Recently Added Articles
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
                {data?.blog?.map((item, index) => (
                    <div
                        key={index}
                        className="h-full flex flex-col justify-between transition-all duration-700 ease-in-out hover:-translate-y-2 shadow-lg border border-gray-200 rounded overflow-hidden"
                    >
                        <div className="w-full h-[250px] overflow-hidden">
                            <Image
                                src={`http://15.206.141.223/backend/public/storage/uploads/${item?.image}`}
                                width={500}
                                height={250}
                                alt={item?.title || 'Blog Image'}
                                className="w-full h-auto object-cover transition-transform duration-1000 ease-in-out"
                            />
                        </div>

                        <div className="p-6 bg-white flex-1 flex flex-col justify-between">
                            <div className="text-sm textBlueDark font-medium">
                                <Link href={`/blogs/${item?.id}`}>
                                    <h3 className="font-semibold text-lg mb-2 hover:text-blue-600 transition-colors duration-200">
                                        {item?.title}
                                    </h3>
                                </Link>
                                {item?.author && (
                                    <div className="text-sm text-gray-500 mt-2">
                                        <span className="font-bold text-xs">By: {item?.author}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Articles
