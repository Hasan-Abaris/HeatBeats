"use client";
import React, { useRef, useState, useEffect } from "react";
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";
import Cards from "./Cards";

const data = [
  {
    id: 1,
    title: "Chess Masterclass Course",
    rating: 4.7,
    reviews: 1200,
    stars: 5,
    image: "/images/courses/chess-course.jpg",
    description: "Learn advanced chess strategies and tactics.",
    link: "/courses/chess",
  },
  {
    id: 2,
    title: "PUBG Masterclass Course",
    rating: 4.6,
    reviews: 980,
    stars: 5,
    image: "/images/courses/pubg-course.jpg",
    description: "Master PUBG strategies and team coordination.",
    link: "/courses/pubg",
  },
  {
    id: 3,
    title: "Among Us Strategy Course",
    rating: 4.5,
    reviews: 850,
    stars: 4,
    image: "/images/courses/amongus-course.jpg",
    description: "Learn how to play Among Us effectively as crewmate or impostor.",
    link: "/courses/amongus",
  },
  {
    id: 4,
    title: "Fall Guys Fun & Tactics",
    rating: 4.6,
    reviews: 720,
    stars: 5,
    image: "/images/courses/fallguys-course.jpg",
    description: "Compete and win in colorful multiplayer challenges.",
    link: "/courses/fallguys",
  },
];

function RecentAdditions() {
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
            <h2 className="text-2xl font-bold mb-4 mt-6">Recent Courses Additions</h2>
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
                            <Cards data={course} title={true}/>

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

export default RecentAdditions
