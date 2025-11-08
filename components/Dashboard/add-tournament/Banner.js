"use client";
import React, { useState } from "react";

export default function AddTournament() {
  const [form, setForm] = useState({
    name: "",
    date: "",
    location: "",
    organizer: "",
    prize: "",
    category: "",
    description: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Tournament Added: ${form.name}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-6">
      <div className="bg-green-700 text-white px-5 py-3 rounded-lg shadow-md flex justify-between items-center">
        <h1 className="text-2xl font-bold">🏆 Add Tournament</h1>
        <button
          onClick={() => alert("Navigate to Tournament List")}
          className="bg-white text-green-700 px-4 py-2 rounded-lg font-medium border border-green-700 hover:bg-green-700 hover:text-white transition"
        >
          View Tournaments
        </button>
      </div>

      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto bg-white p-6 mt-6 rounded-lg shadow-lg border border-gray-200 space-y-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold mb-1">Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-green-600"
              placeholder="Tournament Name"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Date</label>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-green-600"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold mb-1">Location</label>
            <input
              name="location"
              value={form.location}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-green-600"
              placeholder="Venue / City"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">
              Organizer
            </label>
            <input
              name="organizer"
              value={form.organizer}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-green-600"
              placeholder="Organized By"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold mb-1">Prize</label>
            <input
              name="prize"
              value={form.prize}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-green-600"
              placeholder="Prize Amount / Type"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Category</label>
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-green-600"
            >
              <option value="">Select Category</option>
              <option>Cricket</option>
              <option>Football</option>
              <option>Basketball</option>
              <option>Badminton</option>
              <option>Chess</option>
              <option>Esports</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">
            Description
          </label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            rows="4"
            placeholder="Tournament details..."
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-green-600"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-green-700 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-800 transition w-full md:w-auto"
        >
          ➕ Add Tournament
        </button>
      </form>
    </div>
  );
}
