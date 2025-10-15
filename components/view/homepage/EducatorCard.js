// components/view/homepage/EducatorCard.jsx
import React from "react";
import Link from "next/link";

const EducatorCard = ({ data }) => {
  if (!data) return null;

  return (
    <Link href={data.link}>
      <div className="border rounded-lg p-4 shadow-sm hover:shadow-lg bg-white cursor-pointer">
        <img
          src={data.image}
          alt={data.name}
          className="rounded-full w-24 h-24 mx-auto"
        />
        <h3 className="text-lg font-semibold text-center mt-2">{data.name}</h3>
        <p className="text-sm text-gray-500 text-center">{data.title}</p>
        <p className="text-sm text-gray-600 text-center mt-1">
          {data.courses} Courses
        </p>
        <p className="text-sm text-yellow-500 text-center mt-1">
          ⭐ {data.rating}
        </p>
      </div>
    </Link>
  );
};

export default EducatorCard;
