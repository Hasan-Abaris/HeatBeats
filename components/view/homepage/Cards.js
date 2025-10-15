"use client";

import Link from "next/link";

function Cards({ data }) {
  return (
    <div className="relative group bg-white rounded-xl shadow-md h-full overflow-hidden border border-gray-100 my-3 transition-transform duration-300 hover:scale-[1.02]">
      
      {/* Game/Course Image */}
      <div className="w-full h-40 overflow-hidden rounded-t-xl">
        <img
          src={data.image}
          alt={data.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Title & Description */}
      <div className="p-4">
        <h3 className="text-sm font-bold text-gray-800 mb-2">{data.title}</h3>
        <p className="text-xs text-gray-500">{data.description}</p>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-4 text-center">
        <h3 className="text-lg font-semibold mb-2">{data.title}</h3>
        <p className="text-xs mb-4">{data.description}</p>
        <Link
          href={data.link || "#"}
          className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-lg shadow-md transition"
        >
          {data.category === "gamecourses" ? "Enroll Now" : "Play Now"}
        </Link>
      </div>
    </div>
  );
}

export default Cards;
