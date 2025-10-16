import React from 'react';
import { FaFire, FaClock, FaComments, FaArrowUp, FaEye, FaQuestion } from 'react-icons/fa';

const tabIcons = {
    Trending: <FaFire className="inline mr-1 text-orange-500" />,
    "New Releases": <FaClock className="inline mr-1 text-blue-500" />,
    "Most Discussed": <FaComments className="inline mr-1 text-green-500" />,
    "Most Upvoted": <FaArrowUp className="inline mr-1 text-purple-500" />,
    "Most Viewed": <FaEye className="inline mr-1 text-yellow-500" />,
    Unanswered: <FaQuestion className="inline mr-1 text-gray-500" />,
};

function LatQuestions({ questionsData, activeTab, setActiveTab }) {
    return (
        <div className="overflow-x-auto border-b border-gray-200 scrollbar-hide">
            <div className="flex gap-2 md:gap-4 px-2">
                {questionsData.tabs.map((tab) => (
                    <button
                        key={tab}
                        className={`px-4 py-2 font-medium text-sm md:text-base relative whitespace-nowrap flex items-center gap-1
                            ${activeTab === tab
                                ? 'text-orange-600 bg-white border-t border-r border-l border-gray-200 rounded-t-lg'
                                : 'text-gray-600 hover:text-blue-800 hover:bg-gray-50 border-b border-transparent'
                            } transition-colors duration-200`}
                        onClick={() => setActiveTab(tab)}
                        aria-pressed={activeTab === tab}
                    >
                        {tabIcons[tab] || null}
                        <span className="truncate">{tab}</span>

                        {activeTab === tab && (
                            <div className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-orange-600 z-10 rounded"></div>
                        )}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default LatQuestions;
