'use client';

import React, { useState } from "react";

const BookingList = () => {
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const bookingsPerPage = 6;

  // Sample bookings data
  const bookings = [
    { id: 201, event: "HeatBeasts Summer Cup", name: "Zunaira Ahmed", date: "2025-06-18", seats: 2, status: "Confirmed" },
    { id: 202, event: "HeatBeasts Winter Clash", name: "Rayan Khan", date: "2025-07-02", seats: 1, status: "Pending" },
    { id: 203, event: "HeatBeasts Pro League", name: "Sana Malik", date: "2025-07-15", seats: 3, status: "Confirmed" },
    { id: 204, event: "HeatBeasts Gaming Fest", name: "Arham Ali", date: "2025-08-01", seats: 2, status: "Cancelled" },
    { id: 205, event: "HeatBeasts Arena Fight", name: "Ayesha Noor", date: "2025-08-10", seats: 4, status: "Confirmed" },
    { id: 206, event: "HeatBeasts LAN Night", name: "Danish Iqbal", date: "2025-09-05", seats: 1, status: "Pending" },
    { id: 207, event: "HeatBeasts Summer Battle", name: "Fatima Zaid", date: "2025-09-12", seats: 2, status: "Cancelled" },
    { id: 208, event: "HeatBeasts Champions Meet", name: "Imran Ali", date: "2025-09-20", seats: 3, status: "Confirmed" },
    { id: 209, event: "HeatBeasts Final Showdown", name: "Hiba Shah", date: "2025-10-10", seats: 2, status: "Pending" },
    { id: 210, event: "HeatBeasts VIP Night", name: "Saad Khan", date: "2025-10-18", seats: 1, status: "Confirmed" },
  ];

  // Filter logic
  const filtered = bookings.filter(
    (b) =>
      b.event.toLowerCase().includes(search.toLowerCase()) &&
      (filterStatus ? b.status === filterStatus : true)
  );

  const totalPages = Math.ceil(filtered.length / bookingsPerPage);
  const currentBookings = filtered.slice(
    (currentPage - 1) * bookingsPerPage,
    currentPage * bookingsPerPage
  );

  return (
    <div className="min-h-screen bg-gray-50 text-black">
    

      {/* ✅ Main Section */}
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-8 border-t-4 border-green-700 mt-8">
        <h2 className="text-2xl font-bold text-green-700 mb-6">📋 Booking List</h2>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <input
            type="text"
            placeholder="Search by event..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 flex-1 focus:outline-none focus:ring-2 focus:ring-green-700"
          />

          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-700"
          >
            <option value="">All Status</option>
            <option value="Confirmed">Confirmed</option>
            <option value="Pending">Pending</option>
            <option value="Cancelled">Cancelled</option>
          </select>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-gray-300 rounded-lg">
            <thead className="bg-green-100 text-green-800 uppercase text-xs">
              <tr>
                <th className="px-4 py-3 text-left">#</th>
                <th className="px-4 py-3 text-left">Booking ID</th>
                <th className="px-4 py-3 text-left">Event</th>
                <th className="px-4 py-3 text-left">Name</th>
                <th className="px-4 py-3 text-left">Date</th>
                <th className="px-4 py-3 text-left">Seats</th>
                <th className="px-4 py-3 text-left">Status</th>
                <th className="px-4 py-3 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {currentBookings.map((b, index) => (
                <tr
                  key={b.id}
                  className="border-b hover:bg-gray-100 transition-all duration-150"
                >
                  <td className="px-4 py-3">{(currentPage - 1) * bookingsPerPage + index + 1}</td>
                  <td className="px-4 py-3 font-semibold">{b.id}</td>
                  <td className="px-4 py-3">{b.event}</td>
                  <td className="px-4 py-3">{b.name}</td>
                  <td className="px-4 py-3">{b.date}</td>
                  <td className="px-4 py-3">{b.seats}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        b.status === "Confirmed"
                          ? "bg-green-100 text-green-700"
                          : b.status === "Pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {b.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 flex space-x-3">
                    <button className="text-green-700 hover:text-green-900 font-semibold">
                      View
                    </button>
                    <button className="text-red-600 hover:text-red-800 font-semibold">
                      Cancel
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

export default BookingList;
