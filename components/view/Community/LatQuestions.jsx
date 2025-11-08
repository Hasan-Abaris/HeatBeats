import React from "react";
import {
  FaFire,
  FaClock,
  FaComments,
  FaArrowUp,
  FaEye,
  FaQuestion,
} from "react-icons/fa";

const tabIcons = {
  Trending: <FaFire className="inline mr-1 text-white hover:text-green-700" />,
  "New Releases": <FaClock className="inline mr-1 text-white hover:text-green-700" />,
  "Most Discussed": <FaComments className="inline mr-1 text-white hover:text-green-700" />,
  "Most Upvoted": <FaArrowUp className="inline mr-1 text-white hover:text-green-700" />,
  "Most Viewed": <FaEye className="inline mr-1 text-white hover:text-green-700" />,
  Unanswered: <FaQuestion className="inline mr-1 text-white hover:text-green-700" />,
};

function LatQuestions({ questionsData, activeTab, setActiveTab }) {
  return (
    <div className="w-full overflow-x-auto scrollbar-hide border-b border-gray-200">
      {/* Tab container */}
      <div className="flex flex-nowrap md:flex-wrap gap-2 md:gap-4 px-2 sm:px-4">
        {questionsData.tabs.map((tab) => (
          <button
            key={tab}
            className={`px-3 sm:px-4 py-2 font-medium text-sm md:text-base flex-shrink-0 relative whitespace-nowrap flex items-center gap-1 
              ${
                activeTab === tab
                  ? "text-orange-600 bg-white border-t border-r border-l border-gray-200 rounded-t-lg"
                  : "text-white hover:text-black hover:bg-gray-50 border-b border-transparent "
              } transition-colors duration-200`}
            onClick={() => setActiveTab(tab)}
            aria-pressed={activeTab === tab}
          >
            {tabIcons[tab] || null}
            <span className="truncate">{tab}</span>

            {activeTab === tab && (
              <div className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-green-700 z-10 rounded"></div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

export default LatQuestions;
