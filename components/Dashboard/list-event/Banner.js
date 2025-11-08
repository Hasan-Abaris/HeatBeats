"use client";
import React, { useState } from "react";

export default function EventList() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);

  const events = [
    {
      id: 1,
      title: "Hackathon 2025",
      date: "2025-11-20",
      time: "09:00 AM",
      location: "Code Arena, New York",
      category: "Competition",
      organizer: "DevCon",
      banner:
        "https://img.freepik.com/free-vector/hackathon-concept-illustration_114360-9173.jpg",
    },
    {
      id: 2,
      title: "AI & Machine Learning Summit",
      date: "2025-12-05",
      time: "10:00 AM",
      location: "Silicon Valley",
      category: "Conference",
      organizer: "TechWorld",
      banner:
        "https://img.freepik.com/free-vector/ai-technology-concept-banner_23-2149096307.jpg",
    },
    {
      id: 3,
      title: "Design Masterclass",
      date: "2025-11-15",
      time: "02:00 PM",
      location: "Online (Zoom)",
      category: "Workshop",
      organizer: "Creative Minds",
      banner:
        "https://img.freepik.com/free-vector/graphic-designer-concept-illustration_114360-1868.jpg",
    },
    {
      id: 4,
      title: "Frontend Bootcamp",
      date: "2025-11-25",
      time: "11:00 AM",
      location: "Virtual",
      category: "Training",
      organizer: "WebVerse",
      banner:
        "https://img.freepik.com/free-vector/webinar-concept-illustration_114360-4764.jpg",
    },
    {
      id: 5,
      title: "Entrepreneurship Meetup",
      date: "2025-12-10",
      time: "06:00 PM",
      location: "Downtown Cafe",
      category: "Meetup",
      organizer: "BizTalk",
      banner:
        "https://img.freepik.com/free-vector/startup-meeting-concept-illustration_114360-1049.jpg",
    },
    {
      id: 6,
      title: "Cybersecurity Awareness Week",
      date: "2025-11-18",
      time: "01:00 PM",
      location: "IT Park Hall A",
      category: "Seminar",
      organizer: "SafeNet",
      banner:
        "https://img.freepik.com/free-vector/cyber-security-concept-illustration_114360-1076.jpg",
    },
    {
      id: 7,
      title: "Tech Expo 2025",
      date: "2025-11-28",
      time: "09:30 AM",
      location: "Exhibition Center",
      category: "Expo",
      organizer: "Global Tech",
      banner:
        "https://img.freepik.com/free-vector/tech-event-poster-with-gradient-colors_23-2148994663.jpg",
    },
    {
      id: 8,
      title: "Photography Contest",
      date: "2025-12-03",
      time: "04:00 PM",
      location: "Art Studio, LA",
      category: "Competition",
      organizer: "PixelFrame",
      banner:
        "https://img.freepik.com/free-vector/photography-contest-concept-illustration_114360-1947.jpg",
    },
    {
      id: 9,
      title: "Blockchain Summit",
      date: "2025-12-12",
      time: "10:00 AM",
      location: "CryptoHub Center",
      category: "Conference",
      organizer: "BlockVerse",
      banner:
        "https://img.freepik.com/free-vector/blockchain-technology-banner_23-2149214491.jpg",
    },
    {
      id: 10,
      title: "Cloud Computing Workshop",
      date: "2025-12-08",
      time: "02:00 PM",
      location: "Online",
      category: "Workshop",
      organizer: "CloudWorks",
      banner:
        "https://img.freepik.com/free-vector/data-center-illustration_114360-1065.jpg",
    },
  ];

  const filteredEvents = events.filter(
    (event) =>
      event.title.toLowerCase().includes(search.toLowerCase()) &&
      (category === "" || event.category === category)
  );

  const itemsPerPage = 5;
  const totalPages = Math.ceil(filteredEvents.length / itemsPerPage);
  const paginatedEvents = filteredEvents.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-6">
      {/* Header */}
      <div className="bg-green-700 px-5 py-3 rounded-lg flex justify-between items-center shadow-md">
        <h1 className="text-2xl font-bold tracking-wide text-white">
          🌿 Event List
        </h1>
        <button
          onClick={() => alert("Navigate to Add Event Page")}
          className="bg-white text-green-700 px-4 py-2 rounded-lg font-medium border border-green-700 hover:bg-green-700 hover:text-white transition duration-300"
        >
          + Add Event
        </button>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <input
          type="text"
          placeholder="Search event..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-white border border-gray-300 text-gray-800 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="bg-white border border-gray-300 text-gray-800 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
        >
          <option value="">All Categories</option>
          <option>Workshop</option>
          <option>Conference</option>
          <option>Competition</option>
          <option>Meetup</option>
          <option>Seminar</option>
          <option>Expo</option>
        </select>

        <div className="flex items-center justify-center md:justify-end">
          <label className="mr-2 text-gray-700">Page:</label>
          <select
            value={page}
            onChange={(e) => setPage(Number(e.target.value))}
            className="bg-white border border-gray-300 text-gray-800 px-3 py-2 rounded-lg focus:ring-2 focus:ring-green-600"
          >
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="mt-6 overflow-x-auto bg-white rounded-lg shadow-md border border-gray-200">
        <table className="min-w-full text-sm text-gray-700">
          <thead className="bg-green-700 text-white uppercase text-xs">
            <tr>
              <th className="px-4 py-3 text-left">#</th>
              <th className="px-4 py-3 text-left">Banner</th>
              <th className="px-4 py-3 text-left">Title</th>
              <th className="px-4 py-3 text-left">Date & Time</th>
              <th className="px-4 py-3 text-left">Location</th>
              <th className="px-4 py-3 text-left">Category</th>
              <th className="px-4 py-3 text-left">Organizer</th>
              <th className="px-4 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginatedEvents.map((event, index) => (
              <tr
                key={event.id}
                className="border-b border-gray-200 hover:bg-green-50 transition"
              >
                <td className="px-4 py-3">
                  {(page - 1) * itemsPerPage + index + 1}
                </td>
                <td className="px-4 py-3">
                  <img
                    src={event.banner}
                    alt={event.title}
                    className="w-16 h-12 object-cover rounded-md shadow-sm"
                  />
                </td>
                <td className="px-4 py-3 font-semibold">{event.title}</td>
                <td className="px-4 py-3">
                  {event.date}
                  <br />
                  <span className="text-xs text-gray-500">{event.time}</span>
                </td>
                <td className="px-4 py-3">{event.location}</td>
                <td className="px-4 py-3">
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                    {event.category}
                  </span>
                </td>
                <td className="px-4 py-3">{event.organizer}</td>
                <td className="px-4 py-3 flex gap-3">
                  <button
                    onClick={() => alert(`Edit event: ${event.title}`)}
                    className="text-yellow-600 hover:text-yellow-700"
                  >
                    <i className="fa fa-edit"></i>
                  </button>
                  <button
                    onClick={() => alert(`Delete event: ${event.title}`)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <i className="fa fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}

            {paginatedEvents.length === 0 && (
              <tr>
                <td
                  colSpan="8"
                  className="text-center py-6 text-gray-500 font-medium"
                >
                  No events found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Buttons */}
      <div className="flex justify-center mt-6">
        <ul className="flex space-x-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
            <li
              key={num}
              onClick={() => setPage(num)}
              className={`px-4 py-1 rounded-md cursor-pointer ${
                page === num
                  ? "bg-green-700 text-white"
                  : "bg-white border border-gray-300 text-gray-800 hover:bg-green-100"
              }`}
            >
              {num}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
