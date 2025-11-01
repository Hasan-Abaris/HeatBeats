"use client";

import { useState } from "react";

export default function SearchPage() {
  const query = "JavaScript";
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

  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [formMessage, setFormMessage] = useState("");
  const [formError, setFormError] = useState("");

  const handleCallBack = (e) => {
    e.preventDefault();
    setFormMessage("✅ Request submitted successfully!");
    setFormError("");
    setPhone("");
    setEmail("");
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 bg-black min-h-screen text-white">
      {/* Heading */}
      <h1 className="text-xl md:text-2xl font-semibold mb-6">
        {results.length} courses for{" "}
        <span className="text-lightGreen">“{query}”</span>
      </h1>

      {/* Results */}
      <div className="space-y-5">
        {results.map((course) => (
          <div
            key={course.id}
            className="flex gap-5 border border-lightGreen rounded-lg p-5 bg-black hover:bg-lightGreen hover:text-black shadow-md transition"
          >
            <div className="flex-1">
              <h3 className="text-lg font-semibold">{course.name}</h3>
              <p className="text-sm text-gray-300 mt-1">{course.category_name}</p>

              <ul className="text-sm mt-2 list-disc pl-5 space-y-1">
                <li>Some key feature here</li>
                <li>Another feature here</li>
                <li>Etc…</li>
              </ul>

              <div className="flex items-center gap-4 text-sm text-gray-300 mt-3">
                <span>{course.learners}+ Learners</span>
                <span>
                  ⭐ {course.rating} ({course.reviews})
                </span>
              </div>
            </div>

            <div className="flex flex-col justify-between items-end">
              <button
                onClick={() => alert(`View details for course ${course.id}`)}
                className="bg-lightGreen text-black text-sm px-4 py-2 rounded-md hover:bg-white transition"
              >
                VIEW DETAILS
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Callback Form */}
      <div className="rounded-xl border border-lightGreen p-5 bg-black shadow-md mt-10">
        <h2 className="text-lg font-semibold mb-2 text-lightGreen">
          Request a Call Back
        </h2>
        <form
          onSubmit={handleCallBack}
          className="mt-3 flex flex-col items-center gap-3"
        >
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Your mobile number"
            className="border border-lightGreen bg-black text-white rounded-md px-3 py-2 w-full max-w-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-lightGreen"
            required
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="border border-lightGreen bg-black text-white rounded-md px-3 py-2 w-full max-w-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-lightGreen"
            required
          />
          <button className="bg-lightGreen text-black rounded-md px-4 py-2 w-full max-w-sm hover:bg-white transition">
            Get a call back
          </button>
        </form>

        {formMessage && (
          <p className="text-sm mt-2 text-lightGreen">{formMessage}</p>
        )}
        {formError && <p className="text-sm mt-2 text-red-500">{formError}</p>}
      </div>

      {/* Discover Categories */}
      <div className="mt-10">
        <h3 className="text-lg font-semibold mb-4 text-lightGreen">
          Discover Top Categories
        </h3>
        <div className="flex flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className="px-4 py-2 border border-lightGreen text-lightGreen rounded-full hover:bg-lightGreen hover:text-black transition"
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
