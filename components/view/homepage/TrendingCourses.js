"use client";
import { Menu } from "lucide-react";
import { useState } from "react";
import TrendingCard from "./TrendingCard";

function TrendingCourses() {

    const categories = [
        "All",
        "Artificial Intelligence",
        "BI and Visualization",
        "Cloud Computing",
        "DevOps",
        "Data Science",
        "Cyber Security",
    ];
    const [selected, setSelected] = useState("All");

    return (
        <div className="p-4 mt-14 w-[1130px] mx-auto">
            <h2 className="text-2xl font-bold mb-4">Trending Courses</h2>
            <div className="flex items-center gap-4 overflow-x-auto border-b border-gray-200 bg-gray-50 px-4 py-2 text-sm text-gray-700">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setSelected(category)}
                        className={`whitespace-nowrap border-b-2 px-2 py-1 transition-colors ${selected === category
                            ? "border-blue-600 text-black"
                            : "border-transparent text-gray-500 hover:text-black"
                            }`}
                    >
                        {category}
                    </button>
                ))}

                <button className="ml-auto text-gray-600 hover:text-black p-1">
                    <Menu size={18} />
                </button>
            </div>
            <TrendingCard />
        </div>
    );
}

export default TrendingCourses;