'use client';
import React, { useState } from 'react';
import questionsData from '../../../data/community.json';
import LatQuestions from './LatQuestions';
import FillQuestion from './FillQuestion';
import PopTag from './PopTag';
import RecQues from './RecQues';
import AllCategories from './AllCategories';
import Banner from './Banner';

function Communityfaq() {
  const [activeTab, setActiveTab] = useState(questionsData.tabs[0]);
  const filteredQuestions = questionsData.questions.filter(
    (question) => question.tab.trim() === activeTab.trim()
  );

  const handleCategoryClick = (categoryName) => setActiveTab(categoryName);

  return (
    <>
      {/* 🏠 Banner (Home tab only) */}
      <Banner />

      <div className="mt-10">
        <h2 className="text-2xl md:text-3xl font-semibold textBlueDark mb-6 pb-4 border-b border-gray-200">
          HeatBeasts Community
        </h2>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Column */}
          <div className="flex-1">
            <LatQuestions
              questionsData={questionsData}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
            <FillQuestion filteredQuestions={filteredQuestions} />
          </div>

          {/* Right Sidebar */}
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
    </>
  );
}

export default Communityfaq;
