// src/components/CourseDescription.js
import React from 'react';
import Link from "next/link";


const CourseDescription = ({ courses }) => (
  <section className="p-8 w-[60vw] mx-auto">
    <h2 className="text-xl font-semibold mb-6">
      {courses.length > 0
        ? `${courses[0].topic} Courses Description`
        : 'No courses available for this topic'}
    </h2>

    {courses.map((c, i) => (
      <div key={i} className="mb-8">
        <h3 className="text-lg font-medium mb-4">{c.title}</h3>
        <div className="flex items-start space-x-4">
          <img
            src={c.image}
            alt={`${c.title} icon`}
            className="w-8 h-8 mt-1 flex-shrink-0"
          />
          <p className="text-sm leading-relaxed text-gray-700">
            {c.description}
          </p>
        </div>
        {i < courses.length - 1 && (
          <hr className="border-t border-gray-200 mt-6" />
        )}
      </div>
    ))}
  </section>
);

export default CourseDescription;
