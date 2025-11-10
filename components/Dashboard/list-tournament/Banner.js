"use client";
import React, { useState } from "react";

export default function ListTournament() {
  const [search, setSearch] = useState("");

  const tournaments = [
    {
      id: 1,
      name: "Esports Community Valorant Masters",
      date: "2025-12-12",
      location: "Online",
      organizer: "Esports Community Official",
      game: "Valorant",
      prize: "₹50,000",
    },
    {
      id: 2,
      name: "Esports Community BGMI Pro League",
      date: "2025-11-25",
      location: "Delhi Esports Hub",
      organizer: "Esports Community x RedBull",
      game: "BGMI",
      prize: "₹1,00,000",
    },
    {
      id: 3,
      name: "Free Fire Clash 2025",
      date: "2025-12-05",
      location: "Mumbai Arena",
      organizer: "Esports Community Events",
      game: "Free Fire",
      prize: "₹75,000",
    },
    {
      id: 4,
      name: "Call of Duty Mobile Open Cup",
      date: "2025-11-18",
      location: "Online",
      organizer: "Esports Community India",
      game: "CODM",
      prize: "₹30,000",
    },
    {
      id: 5,
      name: "Esports Community Esports Invitational",
      date: "2025-12-30",
      location: "Bangalore Tech Arena",
      organizer: "Esports Community Official",
      game: "Multiple",
      prize: "₹2,00,000",
    },
  ];

  const filtered = tournaments.filter((t) =>
    t.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-6">
      <div className="bg-green-700 text-white px-5 py-3 rounded-lg shadow-md flex justify-between items-center">
        <h1 className="text-2xl font-bold">🏆 Esports Community Tournaments</h1>
        <button
          onClick={() => alert("Navigate to Add Tournament Page")}
          className="bg-white text-green-700 px-4 py-2 rounded-lg font-medium border border-green-700 hover:bg-green-700 hover:text-white transition"
        >
          + Add Tournament
        </button>
      </div>

      <div className="mt-6 max-w-2xl mx-auto">
        <input
          type="text"
          placeholder="Search tournament..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-white border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
        />
      </div>

      <div className="mt-6 overflow-x-auto bg-white rounded-lg shadow-md border border-gray-200">
        <table className="min-w-full text-sm text-gray-700">
          <thead className="bg-green-700 text-white uppercase text-xs">
            <tr>
              <th className="px-4 py-3 text-left">#</th>
              <th className="px-4 py-3 text-left">Name</th>
              <th className="px-4 py-3 text-left">Game</th>
              <th className="px-4 py-3 text-left">Date</th>
              <th className="px-4 py-3 text-left">Location</th>
              <th className="px-4 py-3 text-left">Organizer</th>
              <th className="px-4 py-3 text-left">Prize</th>
              <th className="px-4 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((t, index) => (
              <tr
                key={t.id}
                className="border-b border-gray-200 hover:bg-green-50 transition"
              >
                <td className="px-4 py-3">{index + 1}</td>
                <td className="px-4 py-3 font-semibold">{t.name}</td>
                <td className="px-4 py-3">{t.game}</td>
                <td className="px-4 py-3">{t.date}</td>
                <td className="px-4 py-3">{t.location}</td>
                <td className="px-4 py-3">{t.organizer}</td>
                <td className="px-4 py-3 font-medium text-green-700">{t.prize}</td>
                <td className="px-4 py-3 flex gap-3">
                  <button
                    onClick={() => alert(`Edit: ${t.name}`)}
                    className="text-yellow-600 hover:text-yellow-700"
                  >
                    <i className="fa fa-edit"></i>
                  </button>
                  <button
                    onClick={() => alert(`Delete: ${t.name}`)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <i className="fa fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}

            {filtered.length === 0 && (
              <tr>
                <td
                  colSpan="8"
                  className="text-center py-6 text-gray-500 font-medium"
                >
                  No tournaments found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
