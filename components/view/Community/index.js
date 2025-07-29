'use client';
import React from 'react'
import { useState } from 'react';
import questionsData from '../../../data/community.json';
import LatQuestions from './LatQuestions';
import FillQuestion from './FillQuestion';
import PopTag from './PopTag';
import RecQues from './RecQues';
import AllCategories from './AllCategories';

function Communityfaq() {
    const [activeTab, setActiveTab] = useState(questionsData.tabs[0]);
    const filteredQuestions = questionsData?.questions?.filter(
        (question) => question?.tab === activeTab
    );
    

    return (
        <section className="p-6 md:px-16 md:py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-semibold textBlueDark mb-6 pb-4 border-b border-gray-200">
                    Latest questions in Edureka Community
                </h2>

                <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-1">
                        <LatQuestions questionsData={questionsData} activeTab={activeTab} setActiveTab={setActiveTab} />
                        <FillQuestion filteredQuestions={filteredQuestions} />
                    </div>

                    <div className="w-full md:w-80 space-y-6">
                        <PopTag questionsData={questionsData} />
                        <RecQues questionsData={questionsData} />
                        <AllCategories questionsData={questionsData} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Communityfaq;