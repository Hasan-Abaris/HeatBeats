'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { getWebinarDetails, registerWebinar } from '@/app/comman/FrontApi';
import Loadar from '@/app/comman/Loader';

export default function WebinarDetailsPanel() {
  const { id } = useParams();
  const [webinar, setWebinar] = useState(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    email: '',
    experience: '',
    phone: '',
    subscribe: false,
  });
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        setLoading(true);
        const res = await getWebinarDetails(id);
        setWebinar(res.data.data);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch webinar details", err);
        setLoading(false);
      }
    };

    if (id) fetchDetails();
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setSubmitting(true);

    const payload = {
      email: form.email,
      phone: form.phone,
      experience_level: form.experience,
      receive_updates: form.subscribe ? 'Yes' : 'No',
    };

    try {
      await registerWebinar(id, payload);
      setMessage('Successfully registered!');
    } catch (error) {
      console.error('Registration failed:', error);
      setMessage('Registration failed. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) return <Loadar />;
  if (!webinar) return <div className="text-red-500 p-4">Webinar not found or failed to load.</div>;

  const { description } = webinar;
  const agendaList =
    typeof webinar.agenda === 'string' ? webinar.agenda.split('\n') : webinar.agenda || [];
  const factsList =
    typeof webinar.facts === 'string' ? webinar.facts.split('\n') : webinar.facts || [];

  return (
    <div className="flex flex-col md:flex-row gap-8 p-6">
      {/* Left Section */}
      <div className="flex-1 space-y-6">
        <div>
          <h2 className="text-lg font-bold mb-2">DESCRIPTION</h2>
          <p className="text-sm text-gray-700">{description}</p>
        </div>

        <div>
          <h2 className="text-lg font-bold mb-2">AGENDA</h2>
          <ul className="list-disc pl-6 text-sm text-gray-700 space-y-1">
            {agendaList.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-bold mb-2">Webinar Facts</h2>
          <div className="border border-dashed border-teal-400 p-4 text-sm text-gray-700 space-y-2">
            {factsList.map((fact, idx) => (
              <p key={idx}>• {fact}</p>
            ))}
          </div>
        </div>
      </div>

      {/* Right: Registration Form */}
      <div className="w-full md:max-w-sm border rounded-md p-6 shadow-md">
        <h3 className="text-md font-semibold mb-4 flex items-center gap-2">
          <span role="img" aria-label="icon">📅</span>
          RESERVE YOUR SPOT NOW
        </h3>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="text-sm font-medium">Email*</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="e.g. test@gmail.com"
              className="w-full mt-1 px-3 py-2 border rounded-md text-sm"
            />
          </div>
          <div>
            <label className="text-sm font-medium">Years of Experience*</label>
            <select
              name="experience"
              value={form.experience}
              onChange={handleChange}
              required
              className="w-full mt-1 px-3 py-2 border rounded-md text-sm"
            >
              <option value="">Please Select</option>
              <option value="0-1">0-1</option>
              <option value="2-5 Years">2-5 Years</option>
              <option value="5+">5+</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium">Phone Number*</label>
            <div className="flex">
              <select className="border rounded-l-md text-sm px-2" disabled>
                <option>IN</option>
              </select>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                className="flex-1 border-t border-b border-r rounded-r-md px-3 py-2 text-sm"
                placeholder="+91 Mobile number"
              />
            </div>
          </div>
          <div className="flex items-center text-sm">
            <input
              type="checkbox"
              name="subscribe"
              checked={form.subscribe}
              onChange={handleChange}
              className="mr-2"
            />
            <label>Check here to receive further updates</label>
          </div>
          {message && <p className="text-sm text-blue-600">{message}</p>}
          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md text-sm font-semibold"
          >
            {submitting ? 'Submitting...' : 'SUBMIT'}
          </button>
        </form>
      </div>
    </div>
  );
}
