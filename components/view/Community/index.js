'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import questionsData from '../../../data/community.json';
import LatQuestions from './LatQuestions';
import FillQuestion from './FillQuestion';
import PopTag from './PopTag';
import RecQues from './RecQues';
import AllCategories from './AllCategories';

function Communityfaq() {
    const [activeTab, setActiveTab] = useState(questionsData.tabs[0]);
    const router = useRouter();

    // Filter questions based on active tab
    const filteredQuestions = questionsData.questions.filter(
        (question) => question.tab.trim() === activeTab.trim()
    );

    const handleCategoryClick = (categoryName) => {
        setActiveTab(categoryName);
    };

    const goHome = () => {
        router.push('/Homemain'); // Navigate to home page
    };

    return (
        <section className="p-6 md:px-16 md:py-16 bg-gray-50 relative min-h-screen">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-semibold textBlueDark mb-6 pb-4 border-b border-gray-200">
                    HeatBeasts Community
                </h2>

                <div className="flex flex-col md:flex-row gap-8">
                    {/* Left Column: Tabs + Questions */}
                    <div className="flex-1">
                        <LatQuestions
                            questionsData={questionsData}
                            activeTab={activeTab}
                            setActiveTab={setActiveTab}
                        />
                        <FillQuestion filteredQuestions={filteredQuestions} />
                    </div>

                    {/* Right Column: Sidebar */}
                    <div className="w-full md:w-80 space-y-6">
                        <PopTag questionsData={questionsData} />
                        <RecQues questionsData={questionsData} />
                        <AllCategories
                            questionsData={questionsData}
                            onCategoryClick={handleCategoryClick}
                        />
                    </div>
                </div>
            </div>

            {/* Floating Go Home Button */}
            <button
                onClick={goHome}
                className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-full shadow-lg z-50 transition-all"
            >
                Go Home
            </button>
        </section>
    );
}

export default Communityfaq;
