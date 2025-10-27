import React from 'react';

function Clippage() {
  return (
    <div className="p-8 bg-white rounded-lg border border-gray-200 shadow-sm max-w-4xl mx-auto">
      {/* Section: Title */}
      <h2 className="text-2xl font-semibold mb-4">What happened</h2>

      {/* Summary text */}
      <p className="text-gray-700 mb-6">
        No copyright issues were found in your video.
      </p>

      {/* Summary cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {/* Channel Status */}
        <div className="flex items-start p-4 border rounded-lg bg-gray-50">
          <div className="text-green-500 mr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="28"
              viewBox="0 0 24 24"
              width="28"
              fill="currentColor"
            >
              <path d="m9.8 17.3-4.2-4.1L7 11.8l2.8 2.7L17 7.4l1.4 1.4-8.6 8.5zM12 3c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9m0-1c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12 6.5 2 12 2z" />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-900">Channel</h3>
            <p className="text-sm text-gray-600">Your channel isn't affected.</p>
          </div>
        </div>

        {/* Visibility Status */}
        <div className="flex items-start p-4 border rounded-lg bg-gray-50">
          <div className="text-green-500 mr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="28"
              viewBox="0 0 24 24"
              width="28"
              fill="currentColor"
            >
              <path d="m9.8 17.3-4.2-4.1L7 11.8l2.8 2.7L17 7.4l1.4 1.4-8.6 8.5zM12 3c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9m0-1c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12 6.5 2 12 2z" />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-900">Visibility</h3>
            <p className="text-sm text-gray-600">
              There are no visibility restrictions.
            </p>
          </div>
        </div>
      </div>

      {/* Content Table */}
      <div className="border rounded-lg overflow-hidden">
        <div className="grid grid-cols-3 bg-gray-100 border-b text-sm font-medium text-gray-700">
          <div className="p-3">Content used</div>
          <div className="p-3">Content type</div>
          <div className="p-3 text-center">Impact</div>
        </div>

        <div className="p-6 text-gray-600 text-sm text-center">
          No copyrighted content was found in your video.
        </div>
      </div>

      {/* Error Section (optional, static) */}
      <div className="mt-10 flex flex-col items-center text-center">
        <img
          src="https://www.gstatic.com/youtube/img/creator/error_illustration_v2.svg"
          alt="Error illustration"
          className="w-40 mb-4"
        />
        <p className="text-gray-700 mb-4">Oops, something went wrong.</p>
        <button className="px-5 py-2 bg-gray-200 rounded-md hover:bg-gray-300">
          Retry
        </button>
      </div>
    </div>
  );
}

export default Clippage;
