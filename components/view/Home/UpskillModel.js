"use client";
import React from 'react';

function UpskillModel({ isOpen, setIsOpen,opacity }) {
  const closeModal = () => setIsOpen({counselling:true,skills:false});

  return (
    <>
      {isOpen && (
        <div className={`fixed inset-0 bg-black bg-opacity-${opacity} flex items-center justify-center z-50`}>
          <div className="bg-white rounded-xl shadow-xl max-w-lg w-full relative overflow-hidden text-center p-6">
            
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full text-lg font-bold text-gray-600 hover:bg-gray-300"
              aria-label="Close modal"
            >
              &times;
            </button>

            <img
              src="https://db7hsdc8829us.cloudfront.net/dist/1658131456/i/c65491f263d84eb7a72a4b212e1c709d.jpeg?v=1687254908"
              alt="Upskill"
              className="w-full rounded mb-4"
            />

            <h2 className="text-2xl font-semibold text-gray-800 mb-2 font-normal">
              Upskill Now For A Better Career
            </h2>
            <p className="text-gray-700 mb-6 px-4">
              Unleash your true potential by upskilling in the in-demand
              technologies of the digital era. Check out the upcoming batches and offers.
            </p>

            <button className="bg-red-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded transition">
              EXPLORE COURSES
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default UpskillModel;
