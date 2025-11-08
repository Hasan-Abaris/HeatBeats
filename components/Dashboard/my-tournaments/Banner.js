'use client';
import React, { useState } from "react";

const MyTournaments = () => {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const tournamentsPerPage = 5;

  // Example: tournaments created by the user
  const myTournaments = [
    { id: 201, name: "HeatBeasts Battle Royale", date: "2025-11-12", game: "PUBG Mobile", players: 40, status: "Upcoming" },
    { id: 202, name: "HeatBeasts Clash Cup", date: "2025-10-25", game: "Clash Royale", players: 32, status: "Completed" },
    { id: 203, name: "Battle of Legends", date: "2025-11-02", game: "Free Fire", players: 50, status: "Ongoing" },
    { id: 204, name: "HeatBeasts eSports Arena", date: "2025-11-20", game: "Valorant", players: 16, status: "Upcoming" },
    { id: 205, name: "HeatBeasts Squad Showdown", date: "2025-10-29", game: "BGMI", players: 60, status: "Completed" },
    { id: 206, name: "Solo Sniper Challenge", date: "2025-11-10", game: "Call of Duty", players: 20, status: "Ongoing" },
  ];

  const filtered = myTournaments.filter(
    (t) =>
      t.name.toLowerCase().includes(search.toLowerCase()) &&
      (statusFilter ? t.status === statusFilter : true)
  );

  const totalPages = Math.ceil(filtered.length / tournamentsPerPage);
  const currentTournaments = filtered.slice(
    (currentPage - 1) * tournamentsPerPage,
    currentPage * tournamentsPerPage
  );

  return (
    <div className="min-h-screen bg-gray-50 text-black">
      {/* Header */}
      <header className="bg-green-700 text-white py-4 px-6 shadow-md flex justify-between items-center">
        <h1 className="text-xl font-bold">HeatBeasts</h1>
        <nav className="space-x-6">
          <a href="/add-tournament" className="hover:text-gray-200">Add Tournament</a>
          <a href="/list-tournament" className="hover:text-gray-200">List Tournament</a>
          <a href="/my-tournaments" className="underline font-semibold">My Tournaments</a>
        </nav>
      </header>

      {/* Main content */}
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-8 border-t-4 border-green-700 mt-8">
        <h2 className="text-2xl font-bold text-green-700 mb-6">🏆 My Tournaments</h2>

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
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-700"
          >
            <option value="">All Statuses</option>
            <option value="Upcoming">Upcoming</option>
            <option value="Ongoing">Ongoing</option>
            <option value="Completed">Completed</option>
          </select>
        </div>

        {/* Tournament table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-gray-300 rounded-lg">
            <thead className="bg-green-100 text-green-800 uppercase text-xs">
              <tr>
                <th className="px-4 py-3 text-left">#</th>
                <th className="px-4 py-3 text-left">Tournament Name</th>
                <th className="px-4 py-3 text-left">Game</th>
                <th className="px-4 py-3 text-left">Date</th>
                <th className="px-4 py-3 text-left">Players</th>
                <th className="px-4 py-3 text-left">Status</th>
                <th className="px-4 py-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentTournaments.map((t, index) => (
                <tr key={t.id} className="border-b hover:bg-gray-100 transition-all duration-150">
                  <td className="px-4 py-3">{(currentPage - 1) * tournamentsPerPage + index + 1}</td>
                  <td className="px-4 py-3 font-semibold">{t.name}</td>
                  <td className="px-4 py-3">{t.game}</td>
                  <td className="px-4 py-3">{t.date}</td>
                  <td className="px-4 py-3">{t.players}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        t.status === "Upcoming"
                          ? "bg-blue-100 text-blue-700"
                          : t.status === "Ongoing"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-green-100 text-green-700"
                      }`}
                    >
                      {t.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 flex space-x-3">
                    <button className="text-green-700 hover:text-green-900 font-semibold">View</button>
                    <button className="text-red-600 hover:text-red-800 font-semibold">Delete</button>
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

export default MyTournaments;
