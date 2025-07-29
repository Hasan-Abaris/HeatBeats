import React from 'react'
import datablog from "@/data/blogs.json";
import Image from "next/image";
import Link from "next/link";
function Articles({data}) {
    console.log(data);
    
    return (
        <>
            <h2 className="text-xl  font-extrabold uppercase text-gray-900 tracking-wide mb-5">
                Recently Added Articles
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">

                {data?.blog?.map((item, index) => (
                 
                    
                    <div
                        key={index}
                        className="h-full flex flex-col justify-between transition-all duration-700 ease-in-out hover:-translate-y-2 shadow-lg border border-gray-200 rounded-xs overflow-hidden"
                    >
                        <div className="w-full h-[250px] overflow-hidden">
                            <Image
                                src={datablog?.recentlyArticles[0]?.image}
                                // src={`http://15.206.141.223/backend/public/storage/uploads/${item?.image}`}
                                width={500}
                                height={250}
                                alt="Jagdish Store"
                                className="w-full h-auto object-cover transition-transform duration-1000 ease-in-out"
                            />
                        </div>

                        <div className="p-6 bg-white flex-1 flex items-center">
                            <div className="text-sm textBlueDark font-medium">
                                <Link href={'#'}>
                                    {item?.title}
                                </Link>
                                {item?.authours && (
                                    <div className="text-sm text-gray-500 mt-6">
                                        <span className="font-bold text-xs">By: {item?.authours}</span>
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