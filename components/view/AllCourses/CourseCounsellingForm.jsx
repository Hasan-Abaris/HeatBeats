"use client";

import React, { useState } from "react";
import axios from "axios";
import { baseUrl, xApiKey } from "@/app/comman/UrlCollection";


const CourseCounsellingForm = ({ courseName }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    query: `I would like to know more about your ${courseName || "course"}.`,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${baseUrl}course/counsellor-query`,
        formData,
        {
          headers: {
            "x-api-key": xApiKey,
          },
        }
      );
      if (response?.data?.status) {
        setSubmitted(true);
      }
    } catch (err) {
      console.error("Counselling form submission failed:", err);
    }
  };

  if (submitted) {
    return <p className="text-green-600 mt-2 text-sm">Submitted successfully!</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4 space-y-3">
      <input
        name="name"
        type="text"
        placeholder="Your Name"
        className="w-full border p-2 text-sm"
        required
        onChange={handleChange}
      />
      <input
        name="email"
        type="email"
        placeholder="Your Email"
        className="w-full border p-2 text-sm"
        required
        onChange={handleChange}
      />
      <input
        name="phone"
        type="tel"
        placeholder="Your Phone"
        className="w-full border p-2 text-sm"
        required
        onChange={handleChange}
      />
      <textarea
        name="query"
        placeholder="What would you like to know?"
        className="w-full border p-2 text-sm"
        rows={3}
        required
        value={formData.query}
        onChange={handleChange}
      />
      <button
        type="submit"
        className="bg-blue-800 text-white text-sm px-4 py-2 rounded"
      >
        Get Counselling
      </button>
    </form>
  );
};

export default CourseCounsellingForm;
