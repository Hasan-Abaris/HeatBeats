import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Articles() {
    // 🔥 Updated blog data (Game Academy / HeatBeasts theme)
    const data = {
        blog: [
            {
                id: 1,
                title: "Becoming a Pro Battle Royale Player",
                description: "Discover key training routines, sensitivity settings, and mindset hacks to dominate PUBG, Free Fire, and other battle royale titles.",
                author: "Aarav Mehta",
                date: "Oct 21, 2025",
                image: "/images/courses/pubg.jpg"
            },
            {
                id: 2,
                title: "The Art of Esports Teamwork",
                description: "From strategy calls to player roles—learn how top esports teams build synergy and coordination for tournament wins.",
                author: "Maya Kapoor",
                date: "Oct 17, 2025",
                image: "/images/courses/esports.jpg"
            },
            {
                id: 3,
                title: "Game Development with Unity: Step-by-Step Guide",
                description: "A complete beginner’s guide to building your first playable game prototype using Unity and C#.",
                author: "Rishi Verma",
                date: "Oct 10, 2025",
                image: "/images/courses/unity.jpg"
            },
            {
                id: 4,
                title: "How to Build a Career in Game Design",
                description: "Explore creative paths in game design—from storytelling and UI/UX to animation and interactive world-building.",
                author: "Neha Sharma",
                date: "Oct 5, 2025",
                image: "/images/courses/gamedesign.jpg"
            }
        ]
    };

    return (
        <>
            <h2 className="text-xl font-extrabold uppercase text-gray-900 tracking-wide mb-5">
                Recently Added Articles
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
                {data.blog.map((item) => (
                    <div
                        key={item.id}
                        className="h-full flex flex-col justify-between transition-all duration-700 ease-in-out hover:-translate-y-2 shadow-lg border border-gray-200 rounded overflow-hidden"
                    >
                        {/* Uniform image size */}
                        <div className="w-full h-[250px] overflow-hidden">
                            <Image
                                src={item.image}
                                width={500}
                                height={250}
                                alt={item.title}
                                className="w-full h-[250px] object-cover transition-transform duration-1000 ease-in-out hover:scale-105"
                            />
                        </div>

                        <div className="p-6 bg-white flex-1 flex flex-col justify-between">
                            <div className="text-sm textBlueDark font-medium">
                                <Link href={`/blogs/${item.id}`}>
                                    <h3 className="font-semibold text-lg mb-2 hover:text-blue-600 transition-colors duration-200">
                                        {item.title}
                                    </h3>
                                </Link>
                                {item.author && (
                                    <div className="text-sm text-gray-500 mt-2">
                                        <span className="font-bold text-xs">By: {item.author}</span>
                                    </div>
                                )}
                                {item.date && (
                                    <div className="text-sm text-gray-400 mt-1 text-xs">
                                        Published: {item.date}
                                    </div>
                                )}
                                {item.description && (
                                    <p className="text-gray-600 mt-2 text-sm">{item.description}</p>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Articles;
