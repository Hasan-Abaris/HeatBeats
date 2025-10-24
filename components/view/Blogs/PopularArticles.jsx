'use client';
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaEye } from "react-icons/fa6";
import { MdMessage } from "react-icons/md";

function PopularArticles() {
  // Static gaming articles
  const popularArticles = [
    {
      id: 1,
      title: "PUBG Battle Royale Tips",
      author: "Jane Doe",
      date: "Oct 20, 2025",
      views: 1200,
      comments: 15,
      image: "/images/courses/pubg.jpg"
    },
    {
      id: 2,
      title: "Chess Opening Strategies",
      author: "John Smith",
      date: "Oct 18, 2025",
      views: 950,
      comments: 8,
      image: "/images/courses/chess.jpg"
    },
    {
      id: 3,
      title: "Ludo Game Tactics",
      author: "Alice Johnson",
      date: "Oct 15, 2025",
      views: 780,
      comments: 5,
      image: "/images/courses/ludo.jpg"
    },
    {
      id: 4,
      title: "Mobile Game Optimization Tips",
      author: "Mark Wilson",
      date: "Oct 10, 2025",
      views: 640,
      comments: 12,
      image: "/images/courses/amongus-course.jpg"
    }
  ];

  return (
    <>
      <h2 className="text-xl font-extrabold uppercase text-gray-900 tracking-wide mb-5">
        Popular Articles
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
        {popularArticles.map((item) => (
          <div
            key={item.id}
            className="h-full flex flex-col justify-between transition-all duration-700 ease-in-out hover:-translate-y-2 shadow-lg border border-gray-200 rounded-xs overflow-hidden"
          >
            <div className="w-full h-[250px] overflow-hidden border-b">
              <Image
                src={item.image}
                width={500}
                height={250}
                alt={item.title}
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="p-6 bg-white">
              <div className="text-sm textBlueDark font-medium">
                <Link href={"#"} className="hover:underline">{item.title}</Link>
                {item.author && (
                  <div className="text-sm text-gray-500 mt-2">
                    <span className="font-bold text-xs">By: {item.author}</span>
                  </div>
                )}
              </div>

              <div className="text-md textBlueDark font-bold mt-2 flex justify-between items-center">
                <span>{item.date}</span>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <FaEye className="textOrange" />
                    <span>{item.views}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MdMessage className="textOrange" />
                    <span>{item.comments}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default PopularArticles;
