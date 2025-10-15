"use client";
import React, { useRef, useState, useEffect } from "react";
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";
import Cards from "./Cards";

const data = [
    {
    id: 1,
    title: "Advanced Chess Course",
    category: "gamecourses",
    image: "/images/courses/chess-course.jpg",
    description: "Become a chess grandmaster with this course.",
    link: "/courses/chess",
  },
  {
    id: 2,
    title: "PUBG Masterclass Course",
    category: "gamecourses",
    image: "/images/courses/pubg-course.jpg",
    description: "Learn advanced PUBG strategies and team coordination.",
    link: "/courses/pubg",
  },
  {
    id: 3,
    title: "Among Us Strategy Course",
    category: "gamecourses",
    image: "/images/courses/amongus-course.jpg",
    description: "Master Among Us game strategies as a course.",
    link: "/courses/amongus",
  },
];


function CareerRelatedPrograms() {
    const TrendingCourse = data || [];
    const containerRef = useRef(null);
    const cardRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [maxIndex, setMaxIndex] = useState(0);

    const scrollToIndex = (index) => {
        const container = containerRef.current;
        const card = cardRef.current;

        if (container && card) {
            const cardWidth = card.offsetWidth;
            container.scrollTo({ left: cardWidth * index, behavior: "smooth" });
        }
    };

    const updateMaxIndex = () => {
        const screenWidth = window.innerWidth;
        const visibleCards = screenWidth >= 1024 ? 4 : screenWidth >= 640 ? 2 : 1;
        const max = TrendingCourse.length - visibleCards;
        setMaxIndex(max >= 0 ? max : 0);
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
        <div className="w-[1130px] mx-auto relative">
            <h2 className="text-2xl font-bold mb-4">Career Related Programs</h2>
            <div
                ref={containerRef}
                className="flex overflow-x-hidden snap-x snap-mandatory scroll-smooth"
            >
                {TrendingCourse.map((course, idx) => (
                    <div
                        key={idx}
                        ref={idx === 0 ? cardRef : null}
                        className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 p-2 snap-start"
                    >
                        <div>
                            <Cards data={course} />

                        </div>
                    </div>

                ))}
            </div>


            <div className="absolute top-[61%] left-[-27px] transform -translate-y-1/2 z-10">
                <button
                    onClick={() => setCurrentIndex((prev) => Math.max(prev - 1, 0))}
                    className="textOrange bg-white p-3 rounded-full hover:bg-gray-500 shadow-lg text-2xl font-extrabold"
                >
                    <MdOutlineArrowBackIos />
                </button>
            </div>
            <div className="absolute top-[61%]  right-[-19px] transform -translate-y-1/2 z-10">
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

export default CareerRelatedPrograms;
