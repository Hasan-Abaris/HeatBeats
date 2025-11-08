'use client'
import React, { useState } from "react";

const ListCourses = () => {
  const [courses, setCourses] = useState([
    { id: 1, name: "Web Development", instructor: "Alice Johnson", duration: "8 weeks", category: "Programming" },
    { id: 2, name: "UI/UX Design Basics", instructor: "John Doe", duration: "6 weeks", category: "Design" },
    { id: 3, name: "Digital Marketing 101", instructor: "Sara Lee", duration: "5 weeks", category: "Marketing" },
    { id: 4, name: "Business Management", instructor: "David Kim", duration: "10 weeks", category: "Business" },
    { id: 5, name: "Data Analytics Intro", instructor: "Emily Clark", duration: "7 weeks", category: "Programming" },
    { id: 6, name: "AI Fundamentals", instructor: "James Miller", duration: "9 weeks", category: "Programming" },
    { id: 7, name: "Graphic Design", instructor: "Ava Brown", duration: "5 weeks", category: "Design" },
    { id: 8, name: "Social Media Marketing", instructor: "Sophia Wilson", duration: "4 weeks", category: "Marketing" },
    { id: 9, name: "Entrepreneurship", instructor: "Olivia Davis", duration: "8 weeks", category: "Business" },
    { id: 10, name: "Advanced React", instructor: "Ethan White", duration: "6 weeks", category: "Programming" },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 5;

  const totalPages = Math.ceil(courses.length / coursesPerPage);
  const currentCourses = courses.slice(
    (currentPage - 1) * coursesPerPage,
    currentPage * coursesPerPage
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6 text-black">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-8 border-t-4 border-green-700">
        <h2 className="text-2xl font-bold text-green-700 mb-6">📚 Course List</h2>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-gray-300 rounded-lg">
            <thead className="bg-green-100 text-green-800 uppercase text-xs">
              <tr>
                <th className="px-4 py-3 text-left">#</th>
                <th className="px-4 py-3 text-left">Course Name</th>
                <th className="px-4 py-3 text-left">Instructor</th>
                <th className="px-4 py-3 text-left">Duration</th>
                <th className="px-4 py-3 text-left">Category</th>
                <th className="px-4 py-3 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {currentCourses.map((course, index) => (
                <tr
                  key={course.id}
                  className="border-b hover:bg-gray-100 transition-all duration-150"
                >
                  <td className="px-4 py-3">{(currentPage - 1) * coursesPerPage + index + 1}</td>
                  <td className="px-4 py-3 font-medium">{course.name}</td>
                  <td className="px-4 py-3">{course.instructor}</td>
                  <td className="px-4 py-3">{course.duration}</td>
                  <td className="px-4 py-3">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                      {course.category}
                    </span>
                  </td>
                  <td className="px-4 py-3 flex space-x-2">
                    <button className="text-green-700 hover:text-green-900 font-semibold">
                      Edit
                    </button>
                    <button className="text-red-600 hover:text-red-800 font-semibold">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-6 space-x-2">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`px-3 py-1 rounded-md ${
                currentPage === index + 1
                  ? "bg-green-700 text-white"
                  : "border border-gray-300 hover:bg-green-100"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListCourses;
