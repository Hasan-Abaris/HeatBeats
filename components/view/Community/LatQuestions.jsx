import React from 'react'

function LatQuestions({ questionsData, activeTab, setActiveTab }) {
   
    return (
        <div className="flex border-b border-gray-200">
            {questionsData.tabs.map((tab) => (
                <button
                    key={tab}
                    className={`px-4 py-2 font-medium text-sm md:text-base relative ${activeTab === tab
                        ? 'text-orange-600 bg-white border-t border-r border-l border-gray-200 rounded-t-lg'
                        : 'text-gray-600 hover:text-blue-800 hover:bg-gray-50 border-b border-transparent'
                        }`}
                    onClick={() => setActiveTab(tab)}
                >
                    {tab}
                    {activeTab === tab && (
                        <div className="absolute bottom-[-1px] left-0 right-0 h-[1px] bg-white z-10"></div>
                    )}
                </button>
            ))}
        </div>
    )
}

export default LatQuestions
