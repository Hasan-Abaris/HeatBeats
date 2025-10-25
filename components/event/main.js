"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function FiltersPage() {
  const router = useRouter();

  // ✅ Static Events Data
  const allEvents = [
    {
      id: 1,
      title: "Valorant Showdown 2025",
      category: "Tournaments",
      language: "English",
      date: "Today",
      price: 499,
      venue: "Delhi Esports Arena",
      image: "/images/courses/unity.jpg",
    },
    {
      id: 2,
      title: "Stream Masterclass",
      category: "Workshops",
      language: "English",
      date: "Tomorrow",
      price: 799,
      venue: "Noida Gaming Hub",
      image: "/images/courses/unity.jpg",
    },
    {
      id: 3,
      title: "HeatBeasts Cosplay Meetup",
      category: "Live Streams",
      language: "Hindi",
      date: "This Weekend",
      price: 299,
      venue: "Gurugram Arena",
      image: "/images/courses/unity.jpg",
    },
    {
      id: 4,
      title: "Dota 2 Ultimate Cup",
      category: "Tournaments",
      language: "English",
      date: "This Weekend",
      price: 999,
      venue: "Indira Gandhi Indoor Stadium",
      image: "/images/courses/unity.jpg",
    },
    {
      id: 5,
      title: "Beginner’s Esports Bootcamp",
      category: "Workshops",
      language: "Hindi",
      date: "Tomorrow",
      price: 0,
      venue: "Delhi Skill Hub",
      image: "/images/courses/unity.jpg",
    },
    {
      id: 6,
      title: "HeatBeasts LAN Party Night",
      category: "Live Streams",
      language: "English",
      date: "Today",
      price: 499,
      venue: "Gurugram Tech Lounge",
      image: "/images/courses/unity.jpg",
    },
  ];

  // ✅ Filter State
  const [filters, setFilters] = useState({
    date: "",
    category: "",
    language: "",
    price: "",
  });

  // ✅ Handle Filter Click
  const handleFilter = (type, value) => {
    setFilters((prev) => ({
      ...prev,
      [type]: prev[type] === value ? "" : value, // toggle
    }));
  };

  // ✅ Filtered Events Logic
  const filteredEvents = allEvents.filter((event) => {
    return (
      (!filters.date || event.date === filters.date) &&
      (!filters.category || event.category === filters.category) &&
      (!filters.language || event.language === filters.language) &&
      (!filters.price ||
        (filters.price === "Free"
          ? event.price === 0
          : filters.price === "Under ₹500"
          ? event.price < 500
          : filters.price === "₹500–₹1000"
          ? event.price >= 500 && event.price <= 1000
          : event.price > 1000))
    );
  });

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col lg:flex-row gap-8 px-6 py-10">
      {/* 🔹 Filters Section */}
      <div className="w-full lg:w-1/4 bg-white shadow-md rounded-lg p-6 space-y-6 h-fit sticky top-6">
        <h2 className="text-lg font-bold text-gray-800 mb-4 border-b pb-2">
          🎯 Filters
        </h2>

        {/* Date Filter */}
        <div>
          <h3 className="text-sm font-semibold text-gray-700 mb-2">📅 Date</h3>
          <div className="flex flex-wrap gap-2">
            {["Today", "Tomorrow", "This Weekend"].map((date) => (
              <button
                key={date}
                onClick={() => handleFilter("date", date)}
                className={`px-3 py-1 border rounded-md text-sm ${
                  filters.date === date
                    ? "bg-orange-600 text-white"
                    : "hover:bg-orange-100 text-gray-700"
                }`}
              >
                {date}
              </button>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div>
          <h3 className="text-sm font-semibold text-gray-700 mb-2">
            🎮 Category
          </h3>
          <div className="flex flex-wrap gap-2">
            {["Tournaments", "Live Streams", "Workshops"].map((cat) => (
              <button
                key={cat}
                onClick={() => handleFilter("category", cat)}
                className={`px-3 py-1 border rounded-md text-sm ${
                  filters.category === cat
                    ? "bg-green-600 text-white"
                    : "hover:bg-green-100 text-gray-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Language Filter */}
        <div>
          <h3 className="text-sm font-semibold text-gray-700 mb-2">
            🗣️ Language
          </h3>
          <div className="flex flex-wrap gap-2">
            {["English", "Hindi"].map((lang) => (
              <button
                key={lang}
                onClick={() => handleFilter("language", lang)}
                className={`px-3 py-1 border rounded-md text-sm ${
                  filters.language === lang
                    ? "bg-blue-600 text-white"
                    : "hover:bg-blue-100 text-gray-700"
                }`}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>

        {/* Price Filter */}
        <div>
          <h3 className="text-sm font-semibold text-gray-700 mb-2">💰 Price</h3>
          <div className="flex flex-wrap gap-2">
            {["Free", "Under ₹500", "₹500–₹1000", "₹1000+"].map((price) => (
              <button
                key={price}
                onClick={() => handleFilter("price", price)}
                className={`px-3 py-1 border rounded-md text-sm ${
                  filters.price === price
                    ? "bg-yellow-500 text-white"
                    : "hover:bg-yellow-100 text-gray-700"
                }`}
              >
                {price}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={() =>
            setFilters({ date: "", category: "", language: "", price: "" })
          }
          className="w-full mt-4 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 rounded-lg"
        >
          Clear All
        </button>
      </div>

      {/* 🔸 Events Section */}
      <div className="w-full lg:w-3/4">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          🎟️ Events in Delhi-NCR
        </h2>

        {filteredEvents.length === 0 ? (
          <p className="text-gray-500 italic">
            No events match your filters 😔
          </p>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredEvents.map((event) => (
              <div
                key={event.id}
                onClick={() => router.push(`/eventdetail`)}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition cursor-pointer"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{event.venue}</p>
                  <p className="text-gray-500 text-xs mt-1">{event.category}</p>
                  <p className="text-orange-600 font-semibold mt-2">
                    {event.price === 0
                      ? "Free Entry"
                      : `₹${event.price} onwards`}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
