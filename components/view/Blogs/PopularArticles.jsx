"use client";
import React from "react";
import data from "@/data/blogs.json";
import Image from "next/image";
import Link from "next/link";
import { FaEye } from "react-icons/fa6";
import { MdMessage } from "react-icons/md";
import Pagination from "@/components/common/Pagination/Pagination";
// import { useSearchParams } from "next/navigation";

const ARTICLES_PER_PAGE = 4;

function PopularArticles() {
  // const searchParams = useSearchParams();
  // const page = parseInt(searchParams.get("page") || "1", 10);

  // const articles = data?.popularArticles || [];
  // const totalPages = Math.ceil(articles.length / ARTICLES_PER_PAGE);

  // const startIndex = (page - 1) * ARTICLES_PER_PAGE;
  // const endIndex = startIndex + ARTICLES_PER_PAGE;
  // const currentArticles = articles.slice(startIndex, endIndex);

  return (
    <>
      <h2 className="text-xl font-extrabold uppercase text-gray-900 tracking-wide mb-5">
        Popular Articles
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
        {data?.recentlyArticles?.map((item, index) => (
          <div
            key={index}
            className="h-full flex flex-col justify-between transition-all duration-700 ease-in-out hover:-translate-y-2 shadow-lg border border-gray-200 rounded-xs overflow-hidden"
          >
            <div className="w-full h-[250px] overflow-hidden border-b">
              <Image
                src={item?.image}
                width={500}
                height={250}
                alt="Blog Image"
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="p-6 bg-white">
              <div className="text-sm textBlueDark font-medium">
                <Link href={"#"}>{item?.title}</Link>
                {item?.author && (
                  <div className="text-sm text-gray-500 mt-2">
                    <span className="font-bold text-xs">
                      By: {item?.author}
                    </span>
                  </div>
                )}
              </div>

              <div className="text-md textBlueDark font-bold mt-2 flex justify-between items-center">
                <span>{item?.date}</span>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <FaEye className="textOrange" />
                    <span>{item?.views ? item?.views :"0"}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MdMessage className="textOrange" />
                    <span>{item?.comments ? item?.comments :"0"}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* <Pagination currentPage={page} totalPages={totalPages} /> */}
    </>
  );
}

export default PopularArticles;
