"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl, xApiKey } from "@/app/comman/UrlCollection";
import { getHiringCompanies } from "@/app/comman/FrontApi";

function HireingForm() {
  const [formData, setFormData] = useState({});
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch all hiring companies
  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await getHiringCompanies();
        setCompanies(response.data.data || []);
        console.log("Hiring Companies Fetched:", response.data.data);
      } catch (error) {
        console.error("Error fetching companies:", error);
      }
    };

    fetchCompanies();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        `${baseUrl}company/post-hiring-form`,
        formData,
        {
          headers: {
            "X-API-Key": xApiKey,
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Form Submitted:", response.data);
      alert("Job posted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error.response || error.message);

      // Error handler to guide based on 405
      if (error.response?.status === 405) {
        alert("POST method is not allowed on this endpoint. Please contact backend.");
      } else {
        alert("Failed to post job. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 md:px-16 md:py-16 bg-[#d5d2d2] bg-cover bg-center">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Post Job</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <h4>Fill in the form below</h4>
            <hr />
            <h5 className="font-normal mt-4 mb-4">Job Details</h5>

            {/* Company Dropdown */}
            {companies.length > 0 && (
              <div>
                <label className="block text-gray-700 font-medium mb-1">Select Hiring Company</label>
                <select
                  name="company_id"
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-4 py-2"
                  required
                >
                  <option value="">Select a company</option>
                  {companies.map((company) => (
                    <option key={company.id} value={company.id}>
                      {company.name}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Example other inputs (add more as needed) */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">Job Title</label>
              <input
                type="text"
                name="job_title"
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-4 py-2"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">Location</label>
              <input
                type="text"
                name="location"
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-4 py-2"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600"
            >
              {loading ? "Posting..." : "Post Job"}
            </button>
          </form>

          {/* Sidebar info */}
          <div>
            <h2 className="mb-4 text-lg font-semibold">Are you looking for skilled professionals?</h2>
            <p className="text-gray-600">
              Post your job openings and get connected with talented individuals who are eager to contribute.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HireingForm;
