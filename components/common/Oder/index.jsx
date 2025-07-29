import React from "react";
import { FaBookOpen } from "react-icons/fa"; 

function Myorder() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4 bg-gray-100">
      <span className="text-7xl text-blue-300 mb-6"><FaBookOpen  /></span>

      <p className="text-lg text-gray-700 mb-6">
        It looks like you are not enrolled for any course test
      </p>

      <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md text-sm font-medium">
        Browse All Courses
      </button>
    </div>
  );
}

export default Myorder;
