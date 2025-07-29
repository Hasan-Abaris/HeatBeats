'use client';
import React, { useState } from 'react';
import clsx from 'clsx';

function CallUs() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <div
        className={clsx(
          'fixed top-1/2 -translate-y-1/2 z-10 transition-transform duration-500 ease-in-out',
          'w-72 bg-white shadow-lg border px-5 py-8',
          isVisible ? 'translate-x-0 right-0' : 'translate-x-full right-0'
        )}
      >
        <div className="flex justify-between items-start mb-1">
          <span className="text-sm font-semibold text-gray-700">Call us for any query</span>
          <button
            onClick={() => setIsVisible(false)}
            className="text-xs text-gray-400 hover:text-gray-600"
          >
            Hide
          </button>
        </div>
        <a href="tel:+918851746286" className="text-blue-600 font-semibold text-lg block">
          +91 88517 46286
        </a>
        <span className="text-xs text-gray-500">Experts Available 24 x 7</span>
      </div>

      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-20">
        {!isVisible && (
          <button
            className="flex flex-col items-center justify-center bg-blue-900 h-32 w-12 py-2  shadow-lg shadow-blue-400/80  transition-opacity duration-500"
            onClick={() => setIsVisible(true)}
          >
            <div className="transform -rotate-90 text-white font-bold tracking-wider whitespace-nowrap text-sm">
              CONTACT US
            </div>
          </button>
        )}
      </div>
    </>
  );
}

export default CallUs;
