"use client";
import React from 'react';
import { FcCustomerSupport } from 'react-icons/fc';

function CallModel({ isOpen, setIsOpen }) {
  const closeModal = () => setIsOpen({ ...isOpen, callModel: false });

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-blue-600 bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-xl max-w-sm w-full relative overflow-hidden p-6">
            
            <button
              onClick={closeModal}
              className="absolute top-1 right-1 w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full text-lg font-bold text-gray-600 hover:bg-gray-300"
              aria-label="Close modal"
            >
              &times;
            </button>

            <h4 className="text-lg font-semibold text-left text-gray-800 mb-4 flex items-center">
              {/* <FcCustomerSupport className="text-2xl mr-3" /> */}
              Tell Us Your Preferred Starting Date
            </h4>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">Preferred Batch Start Date</label>
                <input
                  type="date"
                  id="startDate"
                  name="startDate"
                  className="mt-1 block w-full rounded-md border-black shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email ID</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  className="mt-1 block w-full rounded-md border-black shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="123-456-7890"
                  className="mt-1 block w-full rounded-md border-black shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3"
                />
              </div>
            </form>
            <button className='w-full mt-6 bg-blue-600 hover:bg-blue-800 text-white font-semibold py-2 rounded transition'>
              Submit Request
            </button>

            {/* <button
              onClick={closeModal}
              className="w-full mt-6 bg-red-600 hover:bg-red-800 text-white font-semibold py-2 rounded transition"
            >
              Close
            </button> */}
          </div>
        </div>
      )}
    </>
  );
}

export default CallModel;
