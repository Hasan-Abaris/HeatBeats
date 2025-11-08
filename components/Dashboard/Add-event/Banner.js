'use client';
import React, { useState } from 'react';

const AddEvent = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    time: '',
    location: '',
    banner: null,
    organizer: '',
    category: '',
  });

  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
      setPreview(URL.createObjectURL(files[0]));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted event:', formData);
    alert('✅ Event added successfully!');
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-green-600 text-white px-5 py-3 rounded-lg shadow-md mb-6 flex justify-between items-center">
        <h2 className="text-xl font-semibold">📅 Add New Event</h2>
        <button
          onClick={() => setFormData({
            title: '',
            description: '',
            date: '',
            time: '',
            location: '',
            banner: null,
            organizer: '',
            category: '',
          })}
          className="bg-black px-3 py-1 rounded hover:bg-green-700 transition"
        >
          Reset
        </button>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6 space-y-5"
      >
        {/* Title */}
        <div>
          <label className="block font-medium mb-1">Event Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            placeholder="Enter event title"
            className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-300"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block font-medium mb-1">Description:</label>
          <textarea
            name="description"
            rows="4"
            value={formData.description}
            onChange={handleChange}
            placeholder="Describe your event..."
            className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-300"
          />
        </div>

        {/* Date & Time */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium mb-1">Date:</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-300"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Time:</label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-300"
            />
          </div>
        </div>

        {/* Location & Organizer */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium mb-1">Location:</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Venue or online link"
              required
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-300"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Organizer:</label>
            <input
              type="text"
              name="organizer"
              value={formData.organizer}
              onChange={handleChange}
              placeholder="Organized by..."
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-300"
            />
          </div>
        </div>

        {/* Category */}
        <div>
          <label className="block font-medium mb-1">Category:</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-300"
          >
            <option value="">Select category</option>
            <option>Workshop</option>
            <option>Webinar</option>
            <option>Conference</option>
            <option>Competition</option>
            <option>Meetup</option>
          </select>
        </div>

        {/* Banner Upload */}
        <div>
          <label className="block font-medium mb-1">Event Banner:</label>
          <input
            type="file"
            name="banner"
            accept="image/*"
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 cursor-pointer focus:ring-2 focus:ring-blue-300"
          />
          {preview && (
            <img
              src={preview}
              alt="Preview"
              className="mt-3 w-64 rounded-lg shadow-md border"
            />
          )}
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3 pt-3">
          <button
            type="reset"
            onClick={() => setFormData({
              title: '',
              description: '',
              date: '',
              time: '',
              location: '',
              banner: null,
              organizer: '',
              category: '',
            })}
            className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition"
          >
            Clear
          </button>
          <button
            type="submit"
            className="px-5 py-2 bg-black text-white rounded-md hover:bg-green-700 transition"
          >
            Add Event
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddEvent;
