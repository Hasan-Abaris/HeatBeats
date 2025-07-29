"use client";
import React, { useState } from "react";
import { submitTrainingQuery } from "@/app/comman/FrontApi";

const FormSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    company_name: "",
    email: "",
    phone: "",
    training_for: "", // 
    query: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const response = await submitTrainingQuery(formData);
      console.log("Response:", response.data);
      setMessage(" Query submitted successfully!");
      setFormData({
        name: "",
        company_name: "",
        email: "",
        phone: "",
        training_for: "",
        query: "",
      });
    } catch (error) {
      console.error("Submission failed:", error);
      setMessage(" Something went wrong. Please try again.");
    }
  };

  return (
    <div
      className="p-6 md:px-16 md:py-16 bg-[#01333f] bg-cover bg-center"
      style={{
        backgroundImage: `url(/images/b2b_footer_opti.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#01333f",
      }}
    >
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Talk to our training advisor
        </h2>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full border border-gray-300 rounded px-4 py-2"
              required
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Company Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="company_name"
                value={formData.company_name}
                onChange={handleChange}
                placeholder="Enter Company Name"
                className="w-full border border-gray-300 rounded px-4 py-2"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Training For<span className="text-red-500">*</span>
              </label>
              <select
                name="training_for" // ✅ updated
                value={formData.training_for}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-4 py-2"
                required
              >
                <option value="">Select an Option</option>
                <option value="Corporate">Corporate</option>
                <option value="Individual">Individual</option>
              </select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Email ID<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email ID"
                className="w-full border border-gray-300 rounded px-4 py-2"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Phone Number<span className="text-red-500">*</span>
              </label>
              <div className="flex border border-gray-300 rounded overflow-hidden">
                <span className="flex items-center px-3 bg-gray-100 border-r border-gray-300">
                  <img
                    src="https://flagcdn.com/in.svg"
                    alt="India"
                    className="w-5 h-5 mr-1"
                  />
                  +91
                </span>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="w-full px-4 py-2 outline-none"
                  required
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Query</label>
            <textarea
              name="query"
              value={formData.query}
              onChange={handleChange}
              placeholder="Enter your Query"
              rows="3"
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
          </div>

          {message && (
            <p className="text-sm font-semibold text-blue-600">{message}</p>
          )}

          <button
            type="submit"
            className="bg-orange-500 text-white font-semibold px-6 py-2 rounded hover:bg-orange-600 transition"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormSection;
