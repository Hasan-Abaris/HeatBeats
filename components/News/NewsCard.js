"use client";
import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function NewsCard({ news }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100">
      <div className="relative h-48 w-full">
        <Image
          src={news.image}
          alt={news.title}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4 flex flex-col justify-between h-[200px]">
        <div>
          <h2 className="text-lg font-semibold text-gray-800 line-clamp-2">
            {news.title}
          </h2>
          <p className="text-sm text-gray-500 mt-2 line-clamp-3">
            {news.description}
          </p>
        </div>
        <Link
          href={`/news/${news.id}`}
          className="mt-4 flex items-center gap-2 text-green-600 font-medium hover:underline"
        >
          Read More <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
