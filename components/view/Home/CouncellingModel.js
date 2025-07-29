'use client';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import Loadar from '@/app/comman/Loader';
import { ErrorTosters, Tosters } from '@/app/comman/Tosters'; 
import { getRequestCall } from '@/app/comman/FrontApi';

function CounsellingModel({ isOpen, setIsOpen, opacity }) {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);

  const closeModal = () => setIsOpen({ counselling: false, skills: false });

  const handleSubmit = async () => {
    if (!email || !phone) {
      toast.error('Please fill in all required fields');
      return;
    }

    setLoading(true)
    try {
      const res = await getRequestCall({ email, phone });
      if (res.status === 200) {
        Tosters('Request Send Successfully!')
        setLoading(false);
        setTimeout(() => {
          closeModal()
        }, 1000);
      }

    } catch (err) {
      setLoading(false);
      ErrorTosters(err?.response?.data?.message)
    }
  };

  return (
    <>
      {isOpen && (
        <div className={`fixed inset-0 bg-black bg-opacity-${opacity} flex items-center justify-center z-50`}>
          {loading && <Loadar />}
          <div className="bg-white rounded-xl shadow-xl max-w-sm w-full relative overflow-hidden p-6">
            <button
              onClick={closeModal}
              className="absolute top-1 right-1 w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full text-lg font-bold text-gray-600 hover:bg-gray-300"
              aria-label="Close modal"
            >
              &times;
            </button>

            <h4 className="text-lg font-semibold text-left text-gray-800 mb-4">
              Get a free counselling to decide your next career step.
            </h4>

            <div className="mb-4 text-left">
              <label className="block text-sm text-gray-700 mb-1">Email Id</label>
              <input
                type="email"
                placeholder="Enter your email*"
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-6 text-left">
              <label className="block text-sm text-gray-700 mb-1">Phone Number</label>
              <div className="flex">
                <select className="border border-gray-300 rounded-l px-3 py-2 text-sm bg-gray-300">
                  <option value="IN">IN +91</option>
                  {/* Extendable country list */}
                </select>
                <input
                  type="tel"
                  placeholder="Enter Phone Number*"
                  className="flex-1 border border-l-0 border-gray-300 rounded-r px-3 py-2 text-sm"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>

            <button
              className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 rounded transition"
              onClick={handleSubmit}
              disabled={loading}
            >
              GET A CALL
            </button>

            <p className="text-xs text-gray-500 mt-3 text-center">
              Our career Advisor will give you a call shortly
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default CounsellingModel;
