'use client';

import React, { useState } from "react";

const MyTickets = () => {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const ticketsPerPage = 5;

  const tickets = [
    { id: 101, subject: "Game not loading", status: "Open", priority: "High", date: "2025-11-01" },
    { id: 102, subject: "Unable to upload course", status: "In Progress", priority: "Medium", date: "2025-11-03" },
    { id: 103, subject: "Leaderboard issue", status: "Resolved", priority: "Low", date: "2025-10-28" },
    { id: 104, subject: "Tournament page bug", status: "Open", priority: "High", date: "2025-10-30" },
    { id: 105, subject: "Payment issue", status: "Resolved", priority: "Medium", date: "2025-11-05" },
    { id: 106, subject: "Profile not updating", status: "In Progress", priority: "High", date: "2025-11-06" },
    { id: 107, subject: "Mobile layout broken", status: "Open", priority: "Low", date: "2025-11-07" },
    { id: 108, subject: "Missing assets in upload", status: "Resolved", priority: "Medium", date: "2025-11-02" },
  ];

  // Filtering + Pagination
  const filtered = tickets.filter(
    (t) =>
      t.subject.toLowerCase().includes(search.toLowerCase()) &&
      (statusFilter ? t.status === statusFilter : true)
  );

  const totalPages = Math.ceil(filtered.length / ticketsPerPage);
  const currentTickets = filtered.slice(
    (currentPage - 1) * ticketsPerPage,
    currentPage * ticketsPerPage
  );

  return (
    <div className="min-h-screen bg-gray-50 text-black">
 

      {/* ✅ Main Ticket Section */}
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-8 border-t-4 border-green-700 mt-8">
        <h2 className="text-2xl font-bold text-green-700 mb-6">🎫 My Tickets</h2>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <input
            type="text"
            placeholder="Search by subject..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 flex-1 focus:outline-none focus:ring-2 focus:ring-green-700"
          />

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-700"
          >
            <option value="">All Statuses</option>
            <option value="Open">Open</option>
            <option value="In Progress">In Progress</option>
            <option value="Resolved">Resolved</option>
          </select>
        </div>

        {/* Ticket Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-gray-300 rounded-lg">
            <thead className="bg-green-100 text-green-800 uppercase text-xs">
              <tr>
                <th className="px-4 py-3 text-left">#</th>
                <th className="px-4 py-3 text-left">Ticket ID</th>
                <th className="px-4 py-3 text-left">Subject</th>
                <th className="px-4 py-3 text-left">Status</th>
                <th className="px-4 py-3 text-left">Priority</th>
                <th className="px-4 py-3 text-left">Date</th>
                <th className="px-4 py-3 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {currentTickets.map((t, index) => (
                <tr
                  key={t.id}
                  className="border-b hover:bg-gray-100 transition-all duration-150"
                >
                  <td className="px-4 py-3">
                    {(currentPage - 1) * ticketsPerPage + index + 1}
                  </td>
                  <td className="px-4 py-3 font-semibold">{t.id}</td>
                  <td className="px-4 py-3">{t.subject}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        t.status === "Open"
                          ? "bg-red-100 text-red-700"
                          : t.status === "In Progress"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-green-100 text-green-700"
                      }`}
                    >
                      {t.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">{t.priority}</td>
                  <td className="px-4 py-3">{t.date}</td>
                  <td className="px-4 py-3 flex space-x-3">
                    <button className="text-green-700 hover:text-green-900 font-semibold">
                      View
                    </button>
                    <button className="text-red-600 hover:text-red-800 font-semibold">
                      Close
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

export default MyTickets;
