"use client";
import React from "react";
import NewsCard from "./NewsCard";

export default function NewsList() {
  const newsData = [
    {
      id: 1,
      title: "Valorant Masters Tokyo: DRX Upset By FNATIC",
      description:
        "FNATIC secures their spot in the grand finals after a thrilling 2-1 victory over DRX.",
      image: "/images/courses/valorant.jpg",
    },
    {
      id: 2,
      title: "PUBG Mobile Esports 2025 Announced!",
      description:
        "Tencent unveils the upcoming season with a prize pool of over $5 million and global qualifiers.",
      image: "/images/courses/pubg.jpg",
    },
    {
      id: 3,
      title: "CS2 Major 2025 Leaks: New Maps & Rules",
      description:
        "Rumors surface that Valve may introduce two new maps for the upcoming Major season.",
      image: "/images/courses/valorant.jpg",
    },
    {
      id: 4,
      title: "GTA VI Trailer Coming December 2025",
      description:
        "Rockstar finally confirms the long-awaited trailer release date, breaking internet records.",
      image: "/images/courses/valorant.jpg",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {newsData.map((news) => (
        <NewsCard key={news.id} news={news} />
      ))}
    </div>
  );
}
