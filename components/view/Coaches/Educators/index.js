"use client";
import React from "react";
import EducatorCard from "../../../view/homepage/EducatorCard";
import { educatorsData } from "../../../../data/educatorsData";

const EducatorsPageMain = () => {
  return (
    <div className="max-w-6xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-8 text-center">All Educators</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {educatorsData.map((educator) => (
          <EducatorCard key={educator.id} data={educator} />
        ))}
      </div>
    </div>
  );
};

export default EducatorsPageMain;
