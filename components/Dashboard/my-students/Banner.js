'use client';

import React, { useState } from "react";

const MyStudents = () => {
  const [search, setSearch] = useState("");
  const [courseFilter, setCourseFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const studentsPerPage = 6;

  // Sample students data
  const students = [
    { id: 1, name: "Zunaira Ahmed", course: "Pro Gaming Basics", joinDate: "2025-08-01", progress: "80%", status: "Active" },
    { id: 2, name: "Rayan Khan", course: "Advanced Battle Tactics", joinDate: "2025-07-18", progress: "60%", status: "Active" },
    { id: 3, name: "Sana Malik", course: "eSports Strategy", joinDate: "2025-07-22", progress: "95%", status: "Completed" },
    { id: 4, name: "Danish Iqbal", course: "Pro Gaming Basics", joinDate: "2025-07-30", progress: "40%", status: "Active" },
    { id: 5, name: "Ayesha Noor", course: "Esports Community Tournament 101", joinDate: "2025-08-05", progress: "100%", status: "Completed" },
    { id: 6, name: "Hiba Shah", course: "Advanced Battle Tactics", joinDate: "2025-08-10", progress: "50%", status: "Active" },
    { id: 7, name: "Arham Ali", course: "eSports Strategy", joinDate: "2025-08-12", progress: "90%", status: "Completed" },
    { id: 8, name: "Imran Ali", course: "Esports Community Tournament 101", joinDate: "2025-08-15", progress: "70%", status: "Active" },
    { id: 9, name: "Fatima Zaid", course: "Pro Gaming Basics", joinDate: "2025-08-18", progress: "30%", status: "Active" },
    { id: 10, name: "Saad Khan", course: "Esports Community Tournament 101", joinDate: "2025-08-20", progress: "85%", status: "Completed" },
  ];

  // Filtering
  const filtered = students.filter(
    (s) =>
      s.name.toLowerCase().includes(search.toLowerCase()) &&
      (courseFilter ? s.course === courseFilter : true)
  );

  const totalPages = Math.ceil(filtered.length / studentsPerPage);
  const currentStudents = filtered.slice(
    (currentPage - 1) * studentsPerPage,
    currentPage * studentsPerPage
  );

  return (
    <div className="min-h-screen bg-gray-50 text-black">
      
     

      {/* ✅ Main Content */}
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-8 border-t-4 border-green-700 mt-8">
        <h2 className="text-2xl font-bold text-green-700 mb-6">🎓 My Students</h2>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <input
            type="text"
            placeholder="Search by name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 flex-1 focus:outline-none focus:ring-2 focus:ring-green-700"
          />

          <select
            value={courseFilter}
            onChange={(e) => setCourseFilter(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-700"
          >
            <option value="">All Courses</option>
            <option value="Pro Gaming Basics">Pro Gaming Basics</option>
            <option value="Advanced Battle Tactics">Advanced Battle Tactics</option>
            <option value="eSports Strategy">eSports Strategy</option>
            <option value="Esports Community Tournament 101">Esports Community Tournament 101</option>
          </select>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-gray-300 rounded-lg">
            <thead className="bg-green-100 text-green-800 uppercase text-xs">
              <tr>
                <th className="px-4 py-3 text-left">#</th>
                <th className="px-4 py-3 text-left">Name</th>
                <th className="px-4 py-3 text-left">Course</th>
                <th className="px-4 py-3 text-left">Join Date</th>
                <th className="px-4 py-3 text-left">Progress</th>
                <th className="px-4 py-3 text-left">Status</th>
                <th className="px-4 py-3 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {currentStudents.map((s, index) => (
                <tr
                  key={s.id}
                  className="border-b hover:bg-gray-100 transition-all duration-150"
                >
                  <td className="px-4 py-3">{(currentPage - 1) * studentsPerPage + index + 1}</td>
                  <td className="px-4 py-3 font-semibold">{s.name}</td>
                  <td className="px-4 py-3">{s.course}</td>
                  <td className="px-4 py-3">{s.joinDate}</td>
                  <td className="px-4 py-3">{s.progress}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        s.status === "Active"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-green-100 text-green-700"
                      }`}
                    >
                      {s.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 flex space-x-3">
                    <button className="text-green-700 hover:text-green-900 font-semibold">
                      View
                    </button>
                    <button className="text-red-600 hover:text-red-800 font-semibold">
                      Remove
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

export default MyStudents;
