// src/components/CourseCards.js
import React from 'react';
import Link from "next/link";


const CourseCards = ({ courses }) => (
  <div className="p-8 w-[60vw] mx-auto">
    <h2 className="text-xl font-semibold mb-6">
      {courses.length > 0
        ? `${courses[0].topic} Bestseller Courses`
        : 'No courses available for this topic'}
    </h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {courses.map((course, i) => (
        <div
          key={i}
          className="relative group rounded-xl overflow-hidden shadow-lg transition-all duration-300 h-[360px] w-full"
        >
          {/* Image Header */}
          <div className="h-[140px] relative overflow-hidden rounded-t-xl">
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-3">
              <h3 className="text-white font-semibold text-sm drop-shadow-md">
                {course.title}
              </h3>
            </div>
          </div>

          {/* Static Content */}
          <div className="p-4 bg-white text-sm text-gray-700 h-[calc(100%-96px)]">
            <p className="font-semibold mb-1">{course.title}</p>
            <ul className="text-xs text-gray-600 space-y-1 mb-2">
              <li>👤 {course.learners} Enrolled Learners</li>
              <li>📅 Weekend/Weekday</li>
              <li>🎥 Live Class</li>
            </ul>
            <div className="text-yellow-500 text-sm">
              {'★'.repeat(Math.floor(course.rating))}
              {'☆'.repeat(5 - Math.floor(course.rating))} {course.rating} (
              {course.reviews})
            </div>
          </div>

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-90 text-white px-4 py-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between z-10">
            <div>
              <p className="text-sm">
                ✅{' '}
                <span className="font-semibold">{course.completionRate}</span> -
                Course completion rate
              </p>
              <p className="mt-2 text-sm font-semibold">Next batch</p>
              <p className="text-base">{course.nextBatch}</p>

              <div className="mt-4">
                <p className="text-sm italic">What will I learn?</p>
                <ul className="list-disc ml-4 mt-1 text-sm space-y-1">
                  {course.topics.map((t, idx) => (
                    <li key={idx}>{t}</li>
                  ))}
                </ul>
              </div>
            </div>

            <button className="mt-6 bg-transparent border border-white text-white font-semibold py-1.5 px-4 rounded hover:bg-white hover:text-black transition-colors duration-300">
              VIEW DETAILS
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default CourseCards;
