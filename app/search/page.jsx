"use client";

import { useState } from "react";

export default function SearchPage() {
  // Static demo data
  const query = "JavaScript"; // Example search query
  const results = [
    {
      id: 1,
      name: "JavaScript Basics",
      category_name: "Programming",
      learners: 1200,
      rating: "4.5",
      reviews: 300,
    },
    {
      id: 2,
      name: "Advanced JavaScript",
      category_name: "Programming",
      learners: 800,
      rating: "4.7",
      reviews: 150,
    },
  ];

  const categories = [
    { id: 1, name: "Programming" },
    { id: 2, name: "Design" },
    { id: 3, name: "Marketing" },
  ];

  // Form states
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [formMessage, setFormMessage] = useState("");
  const [formError, setFormError] = useState("");

  // Static form submit
  const handleCallBack = (e) => {
    e.preventDefault();
    setFormMessage("✅ Request submitted successfully!");
    setFormError("");
    setPhone("");
    setEmail("");
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <h1 className="text-xl md:text-2xl font-semibold mb-6">
        {results.length} courses for <span className="text-blue-600">“{query}”</span>
      </h1>

      {/* Results */}
      <div className="space-y-5">
        {results.map((course) => (
          <div
            key={course.id}
            className="flex gap-5 border rounded-lg p-5 bg-white shadow-sm hover:shadow-md transition"
          >
            <div className="flex-1">
              <h3 className="text-lg font-semibold">{course.name}</h3>
              <p className="text-sm text-gray-500 mt-1">{course.category_name}</p>

              <ul className="text-sm text-gray-700 mt-2 list-disc pl-5">
                <li>Some key feature here</li>
                <li>Another feature here</li>
                <li>Etc…</li>
              </ul>

              <div className="flex items-center gap-4 text-sm text-gray-600 mt-3">
                <span>{course.learners}+ Learners</span>
                <span>
                  ⭐ {course.rating} ({course.reviews})
                </span>
              </div>
            </div>

            <div className="flex flex-col justify-between items-end">
              <button
                onClick={() => alert(`View details for course ${course.id}`)}
                className="bg-blue-600 text-white text-sm px-4 py-2 rounded-md"
              >
                VIEW DETAILS
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Callback Form */}
      <div className="rounded-xl border p-5 bg-white shadow-sm mt-10">
        <h2 className="text-lg font-semibold mb-2">Request a Call Back</h2>
        <form onSubmit={handleCallBack} className="mt-3 flex flex-col items-center gap-3">
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Your mobile number"
            className="border rounded-md px-3 py-2 w-full max-w-sm"
            required
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="border rounded-md px-3 py-2 w-full max-w-sm"
            required
          />
          <button className="bg-gray-800 text-white rounded-md px-4 py-2 w-full max-w-sm">
            Get a call back
          </button>
        </form>

        {formMessage && <p className="text-sm mt-2 text-green-600">{formMessage}</p>}
        {formError && <p className="text-sm mt-2 text-red-600">{formError}</p>}
      </div>

      {/* Discover Categories */}
      <div className="mt-10">
        <h3 className="text-lg font-semibold mb-4">Discover Top Categories</h3>
        <div className="flex flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className="px-4 py-2 border rounded-full hover:bg-gray-50"
              onClick={() => alert(`View category ${cat.name}`)}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
