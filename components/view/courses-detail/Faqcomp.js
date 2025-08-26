"use client";
import React, { useState } from 'react';
import { submitCounsellorQuery } from "@/app/comman/FrontApi"; // Import the API function

const curriculumData = [
  {
    title: 'Introduction to Power BI',
    topicsCount: 12,
    topics: [
      'Introduction to Business Intelligence',
      'Self-Service Business Intelligence (SSBI)',
      'Introduction to Power BI',
      'Traditional BI vs. Power BI',
      'Power BI vs. Tableau vs. QlikView',
      'Uses of Power BI',
      'The Flow of Work in Power BI',
      'Working with Power BI',
      'Basic Components of Power BI',
      'Comparison of Power BI Version',
      'Introduction to Building Blocks of Power BI',
      'Data model and importance of Data Modeling'
    ],
    handsOn: ['Installation of Power BI'],
    skills: ['Concepts of Business Intelligence', 'Power BI installation']
  },
  {
    title: 'Power BI Desktop and Data Transformation',
    topicsCount: 10,
    topics: ['Getting Started with Power BI Desktop', 'Power BI Desktop Interface', 'Connecting to Data Sources', 'Query Editor', 'Data Cleaning Techniques'],
    handsOn: ['Connecting Excel to Power BI', 'Data Cleaning in Power BI'],
    skills: ['Data loading', 'Data transformation']
  },
  {
    title: 'Data Analysis Expression (DAX)',
    topicsCount: 10,
    topics: ['What is DAX?', 'Calculated Columns and Measures', 'DAX Functions Overview', 'Text, Date, Logical and Math Functions'],
    handsOn: ['Creating Calculated Columns', 'Using DAX to Filter Data'],
    skills: ['DAX basics', 'Data calculations']
  }
];

export default function Faqcomp() {
  const [openIndex, setOpenIndex] = useState(0);
  const [formData, setFormData] = useState({ query: '', phone: '', email: '' });
  const [formStatus, setFormStatus] = useState({ loading: false, message: '' });

  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ loading: true, message: '' });

    try {
      const response = await submitCounsellorQuery(formData);
      const result = response.data; // Assuming API returns data in response.data
      if (result.status) {
        setFormStatus({ loading: false, message: result.message || 'Request submitted successfully!' });
        setFormData({ query: '', phone: '', email: '' }); // Reset form
      } else {
        setFormStatus({ loading: false, message: result.message || 'Failed to submit. Try again.' });
      }
    } catch (error) {
      setFormStatus({ loading: false, message: 'An error occurred. Please try again.' });
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4 sm:p-6 font-sans">
      <div className="w-full max-w-7xl mx-auto">
        <h1 className="text-2xl font-semibold text-center mb-4">Curriculum Designed by Experts</h1>

        <div className="text-center mb-6">
          <h2 className="text-xl font-semibold text-blue-900">Power BI Course Syllabus</h2>
          <button className="text-red-600 flex items-center justify-center mx-auto mt-2">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 2a1 1 0 011 1v9.586l2.293-2.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586V3a1 1 0 011-1z" />
            </svg>
            DOWNLOAD CURRICULUM
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            {curriculumData.map((section, idx) => (
              <div key={idx} className="bg-white shadow rounded p-4">
                <div
                  className="flex justify-between items-center border-b pb-2 cursor-pointer"
                  onClick={() => toggleSection(idx)}
                  role="button"
                  aria-expanded={openIndex === idx}
                >
                  <h3 className="text-lg font-semibold">{section.title}</h3>
                  <span className="text-sm text-gray-600">{section.topicsCount} Topics</span>
                </div>

                {openIndex === idx && (
                  <div className="grid md:grid-cols-3 gap-4 mt-4">
                    <ul className="col-span-2 list-disc list-inside space-y-1 text-sm text-gray-800">
                      {section.topics.map((topic, i) => (
                        <li key={i}>{topic}</li>
                      ))}
                    </ul>
                    <div className="space-y-4 text-sm">
                      {section.handsOn && (
                        <div>
                          <p className="font-semibold text-green-700 flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z" />
                            </svg>
                            Hands-on
                          </p>
                          <ul className="ml-5 list-disc">
                            {section.handsOn.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {section.skills && (
                        <div>
                          <p className="font-semibold text-green-700 flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z" />
                            </svg>
                            Skills You Will Learn
                          </p>
                          <ul className="ml-5 list-disc">
                            {section.skills.map((skill, i) => (
                              <li key={i}>{skill}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="bg-white shadow rounded p-6">
            <h4 className="text-lg font-semibold text-gray-800">Free Career Counselling</h4>
            <p className="text-sm text-gray-600 mb-4">We are happy to help you 24/7</p>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="query">
                  Query
                </label>
                <input
                  type="text"
                  name="query"
                  value={formData.query}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm text-sm p-2"
                  placeholder="Enter your query*"
                  required
                  aria-required="true"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="phone">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm text-sm p-2"
                  placeholder="Enter Phone Number *"
                  required
                  aria-required="true"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                  Email Id
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm text-sm p-2"
                  placeholder="Enter your email*"
                  required
                  aria-required="true"
                />
              </div>
              {formStatus.message && (
                <p className={`text-sm ${formStatus.message.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>
                  {formStatus.message}
                </p>
              )}
              <p className="text-xs text-gray-500">
                Please Note: By continuing and signing in, you agree to our{' '}
                <a className="underline" href="#">
                  Terms & Conditions
                </a>{' '}
                and{' '}
                <a className="underline" href="#">
                  Privacy Policy
                </a>.
              </p>
              <button
                type="submit"
                disabled={formStatus.loading}
                className={`w-full py-2 rounded text-sm font-semibold text-white ${
                  formStatus.loading ? 'bg-blue-500 opacity-50 cursor-not-allowed' : 'bg-blue-700 hover:bg-blue-800'
                }`}
              >
                {formStatus.loading ? 'Submitting...' : 'Submit'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}