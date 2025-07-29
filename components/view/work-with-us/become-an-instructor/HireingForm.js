'use client';

import { useState } from 'react';
import { Tosters, ErrorTosters } from '@/app/comman/Tosters';
import Loadar from '@/app/comman/Loader';
import axios from 'axios';

export default function BecomeInstructor() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobile: '',
    email: '',
    courseName: '',
    linkedin: '',
    aboutCourse: '',
    aboutYou: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Replace with your API endpoint
      const res = await axios.post('/api/instructor-application', formData);

      if (res.status === 200) {
        Tosters('Application submitted successfully!');
        setFormData({
          firstName: '',
          lastName: '',
          mobile: '',
          email: '',
          courseName: '',
          linkedin: '',
          aboutCourse: '',
          aboutYou: '',
        });
      } else {
        ErrorTosters('Failed to submit application.');
      }
    } catch (error) {
      console.error(error);
      ErrorTosters(error?.response?.data?.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 md:px-16 md:py-16 bg-[#d5d2d2] bg-cover bg-center">
      {loading && <Loadar />}
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Become an Instructor
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <form onSubmit={handleSubmit} className="space-y-4 w-full">
            <h4 className="text-lg font-medium">Fill in the form below</h4>
            <hr />

            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                required
                className="w-full border border-gray-300 rounded px-4 py-2"
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                required
                className="w-full border border-gray-300 rounded px-4 py-2"
              />
            </div>

            <input
              type="text"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Mobile"
              required
              className="w-full border border-gray-300 rounded px-4 py-2"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="w-full border border-gray-300 rounded px-4 py-2"
            />

            <input
              type="text"
              name="courseName"
              value={formData.courseName}
              onChange={handleChange}
              placeholder="Course Name"
              required
              className="w-full border border-gray-300 rounded px-4 py-2"
            />

            <input
              type="url"
              name="linkedin"
              value={formData.linkedin}
              onChange={handleChange}
              placeholder="LinkedIn Profile URL"
              className="w-full border border-gray-300 rounded px-4 py-2"
            />

            <textarea
              name="aboutCourse"
              value={formData.aboutCourse}
              onChange={handleChange}
              placeholder="About the Course"
              rows="4"
              required
              className="w-full border border-gray-300 rounded px-4 py-2"
            ></textarea>

            <textarea
              name="aboutYou"
              value={formData.aboutYou}
              onChange={handleChange}
              placeholder="Tell us more about yourself"
              rows="4"
              required
              className="w-full border border-gray-300 rounded px-4 py-2"
            ></textarea>

            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600 transition"
            >
              Submit Application
            </button>
          </form>

          <div className="text-sm text-gray-600">
            <h2 className="text-lg font-semibold mb-4">Who can teach?</h2>
            <p className="mb-2">
              Anyone with in-depth knowledge in a domain and passion for teaching can instruct at SLA.
              Good communication skills are mandatory.
            </p>

            <h2 className="text-lg font-semibold mb-4">Advantage SLA!</h2>
            <p className="mb-2">
              You'll work with a young, talented team and get revenue-sharing opportunities at India’s
              fastest-growing online training company. Conduct training from anywhere in the world!
            </p>

            <h2 className="text-lg font-semibold mb-4">The Process</h2>
            <p className="mb-2">
              Fill out this form. If shortlisted, you’ll undergo SLA’s learning methodology training
              and co-create course content to deliver an exceptional learning experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
