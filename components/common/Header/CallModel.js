"use client";
import React from 'react';
import { FcCustomerSupport } from 'react-icons/fc';

function CallModel({ isOpen, setIsOpen, settings }) {
  const closeModal = () => setIsOpen(false);

  return (
    <>
      {isOpen && (
        <div className={`fixed inset-0 bg-blue-600 bg-opacity-60 flex items-center justify-center z-50`}>
          <div className="bg-white rounded-xl shadow-xl max-w-sm w-full relative overflow-hidden p-6">
            
            <button
              onClick={closeModal}
              className="absolute top-1 right-1 w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full text-lg font-bold text-gray-600 hover:bg-gray-300"
              aria-label="Close modal"
            >
              &times;
            </button>

            <h4 className="text-lg font-semibold text-left text-gray-800 mb-4 flex">
              <FcCustomerSupport style={{fontSize:"33px",marginRight:"13px"}}/> Call SLA Consultant 24x7
            </h4>
            <div className="text-gray-600 pb-5">SLA Consultant and learner support agents are available 24x7 to help with your learning needs.</div>
            
            <div className="border border-gray-200 rounded-lg p-4 mb-3">
              <p className="text-sm text-gray-700 font-medium mb-1">For New Course Enquiry</p>
              <p className="text-sm flex items-center text-gray-600">
                <span className="mr-2">🇮🇳 India:</span>
                <span className="text-blue-700 font-semibold">{settings?.["site.phone"] || "N/A"}</span>
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-4 mb-5">
              <p className="text-sm text-gray-700 font-medium mb-1">For Support (Already enrolled learners only)</p>
              <p className="text-sm flex items-center text-gray-600">
                <span className="mr-2">🇮🇳 India:</span>
                <span className="text-blue-700 font-semibold">{settings?.["site.course_counsellor_phone"] || "N/A"}</span>
              </p>
            </div>

            <button onClick={closeModal} className="w-full bg-red-600 hover:bg-red-800 text-white font-semibold py-2 rounded transition">
             Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default CallModel;
