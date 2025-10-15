"use client";
import React, { useRef, useState, useEffect } from "react";
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";
import Cards from "./Cards";

const data = [
  {
    id: 1,
    title: "Certified Chess Trainer Course",
    rating: 4.8,
    reviews: 2100,
    stars: 5,
    image: "/images/courses/chess-certification.jpg",
    description: "Become a certified chess trainer and teach competitive-level strategies.",
    link: "/courses/chess-trainer",
  },
  {
    id: 2,
    title: "Ludo Pro Coaching Certification",
    rating: 4.6,
    reviews: 1800,
    stars: 4,
    image: "/images/courses/ludo.jpg",
    description: "Get certified as a Ludo coach and learn tournament-level techniques.",
    link: "/courses/ludo-coach",
  },
  {
    id: 3,
    title: "Esports PUBG Coaching Certificate",
    rating: 4.7,
    reviews: 2500,
    stars: 5,
    image: "/images/courses/pubg-certification.jpg",
    description: "Learn to coach and lead PUBG Esports teams with professional guidance.",
    link: "/courses/pubg-cert",
  },
  {
    id: 4,
    title: "Among Us Psychology & Strategy Course",
    rating: 4.5,
    reviews: 1300,
    stars: 4,
    image: "/images/courses/amongus.jpg",
    description: "Get certified in deception and teamwork psychology through Among Us.",
    link: "/courses/amongus-cert",
  },
  {
    id: 5,
    title: "Game Strategy Certification (All-Rounder)",
    rating: 4.9,
    reviews: 3000,
    stars: 5,
    image: "/images/courses/gamemaster-cert.jpg",
    description: "Earn a professional certification covering multiple strategy games.",
    link: "/courses/game-strategy-cert",
  },
];

function CertificationCourses() {
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
            <h2 className="text-2xl font-bold mb-4 mt-6">Certification Game Courses</h2>
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
                            <Cards data={course}  title={true}/>

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

export default CertificationCourses
