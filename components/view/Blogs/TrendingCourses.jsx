"use client";
import React, { useRef, useState, useEffect } from "react";
import data from "@/data/blogs.json";
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";
import Image from "next/image";

function TrendingCourses() {
    const TrendingCourse = data?.trendingCourses || [];
    const containerRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [maxIndex, setMaxIndex] = useState(0);

    const scrollToIndex = (index) => {
        const container = containerRef.current;
        if (container) {
            const width = container.offsetWidth;
            container.scrollTo({ left: width * index, behavior: "smooth" });
        }
    };

    const updateMaxIndex = () => {
        const screenWidth = window.innerWidth;
        const visibleCards = screenWidth >= 1024 ? 4 : screenWidth >= 640 ? 2 : 1;
        setMaxIndex(Math.ceil(TrendingCourse.length - visibleCards));
    };

    useEffect(() => {
        scrollToIndex(currentIndex);
    }, [currentIndex]);

    useEffect(() => {
        updateMaxIndex();
        window.addEventListener("resize", updateMaxIndex);
        return () => window.removeEventListener("resize", updateMaxIndex);
    }, [TrendingCourse.length]);

    return (
        <div className="relative lg:px-6 md:px-5">
            <h2 className="text-xl font-extrabold uppercase text-gray-900 tracking-wide mb-5  mt-10 underline">
                Trending Courses
            </h2>

            <div
                ref={containerRef}
                className="flex overflow-x-hidden snap-x snap-mandatory scroll-smooth"
            >
                {TrendingCourse.map((course, idx) => (
                    <div
                        key={idx}
                        className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 p-2 snap-start"
                    >
                        <div className="bg-white  shadow-md border  h-full">
                            <div className="w-full overflow-hidden border-b">
                                <Image
                                    src={course?.image}
                                    width={500}
                                    height={300}
                                    alt="Trending course image"
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                            <div className="p-4">
                                <h3 className={`${course.color} font-semibold mb-2`}>
                                    {course.title}
                                </h3>
                                <p className="text-sm text-gray-500 mb-1">
                                    👥 {course.learners} Enrolled Learners
                                </p>
                                <p className="text-sm text-gray-500 mb-1">🗓️ {course.schedule}</p>
                                <p className="text-sm text-gray-500 mb-1">📺 {course.mode}</p>
                                <p className="text-yellow-500 mt-2">
                                    {'★★★★★'} <span className="text-gray-600">({course.reviews})</span>
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Buttons */}
            <div className="absolute top-1/2 left-0.5 transform -translate-y-1/2 z-10">
                <button
                    onClick={() => setCurrentIndex((prev) => Math.max(prev - 1, 0))}
                    className="textOrange bg-white p-3 rounded-full hover:bg-gray-500 shadow-lg text-2xl font-extrabold"
                >
                    <MdOutlineArrowBackIos />
                </button>
            </div>
            <div className="absolute top-1/2 right-0.5 transform -translate-y-1/2 z-10">
                <button
                    onClick={() => setCurrentIndex((prev) => Math.min(prev + 1, maxIndex))}
                    className="textOrange bg-white p-3 rounded-full shadow-lg hover:bg-gray-500 text-2xl font-extrabold"
                >
                    <MdOutlineArrowForwardIos />
                </button>
            </div>
        </div>
    );
}

export default TrendingCourses;
