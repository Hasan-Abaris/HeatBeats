'use client'
import React, { useState } from "react";

const AddCourse = () => {
  const [courseName, setCourseName] = useState("");
  const [instructor, setInstructor] = useState("");
  const [duration, setDuration] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`✅ Course "${courseName}" added successfully!`);
    setCourseName("");
    setInstructor("");
    setDuration("");
    setCategory("");
    setDescription("");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 text-black">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8 border-t-4 border-green-700">
        <h2 className="text-2xl font-bold text-green-700 mb-6">📘 Add New Course</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block font-medium mb-1">Course Name</label>
            <input
              type="text"
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-700"
              required
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Instructor</label>
            <input
              type="text"
              value={instructor}
              onChange={(e) => setInstructor(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-700"
              required
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Duration (weeks)</label>
            <input
              type="number"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-700"
              required
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-700"
              required
            >
              <option value="">Select category</option>
              <option>Programming</option>
              <option>Design</option>
              <option>Marketing</option>
              <option>Business</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label className="block font-medium mb-1">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2 h-24 focus:outline-none focus:ring-2 focus:ring-green-700"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-green-700 text-white py-2 rounded-lg hover:bg-green-800 transition-all duration-200"
          >
            Add Course
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCourse;
