'use client';

import { useState } from 'react';
const mainArticles = [
    {
        id: 1,
        sourceLogo: '/images/cxo-logo.png',
        publisher: 'CXOtoday.com',
        date: '23 May, 2024',
        title: 'SLA offers the University of Cambridge Online’s new Generative AI Course',
        summary: 'The University Of Cambridge Online teams up with SLA to present an exclusive course on Generative AI in Business...',
    },
    {
        id: 2,
        sourceLogo: '/images/illinois-tech.svg',
        publisher: 'THE NEW INDIAN EXPRESS',
        date: '04 May, 2024',
        title: 'Best DevOps Courses in India 2024',
        summary: 'The comprehensive DevOps certification of SLA, with a balanced mix of theory and practicals...',
    },
    {
        id: 3,
        sourceLogo: '/images/newindianexpress.avif',
        publisher: 'SLA offers the University of Cambridge Online’s new G',
        date: '04 May, 2024',
        title: 'Best DevOps Courses in India 2024',
        summary: 'The University Of Cambridge Online teams up with SLA to present an exclusive course on Generative AI in Business, designed to empower learners with skills needed to incorporate generativ....',
    },
    {
        id: 22,
        sourceLogo: '/images/cxo-logo.png',
        publisher: 'CXOtoday.com',
        date: '23 May, 2024',
        title: 'SLA offers the University of Cambridge Online’s new Generative AI Course',
        summary: 'The University Of Cambridge Online teams up with SLA to present an exclusive course on Generative AI in Business...',
    },
    {
        id: 24,
        sourceLogo: '/images/illinois-tech.svg',
        publisher: 'THE NEW INDIAN EXPRESS',
        date: '04 May, 2024',
        title: 'Best DevOps Courses in India 2024',
        summary: 'The comprehensive DevOps certification of SLA, with a balanced mix of theory and practicals...',
    },
    {
        id: 53,
        sourceLogo: '/images/newindianexpress.avif',
        publisher: 'SLA offers the University of Cambridge Online’s new G',
        date: '04 May, 2024',
        title: 'Best DevOps Courses in India 2024',
        summary: 'The University Of Cambridge Online teams up with SLA to present an exclusive course on Generative AI in Business, designed to empower learners with skills needed to incorporate generativ....',
    },
];

const popularNews = [
    {
        id: 101,
        title: 'SLA and Cambridge launch AI course for business leaders',
        summary: 'SLA partners with Cambridge to deliver a new AI course aimed at transforming business strategy...',
    },
    {
        id: 102,
        title: 'Top DevOps Trends for 2024',
        summary: 'DevOps continues to evolve. Here are the key trends and skills to master in 2024...',
    },
    {
        id: 103,
        title: 'PwC + SLA: New Power BI Certification Path',
        summary: 'This collaboration will allow learners to get dual certification and access global project experience...',
    },
    {
        id: 1021,
        title: 'SLA and Cambridge launch AI course for business leaders',
        summary: 'SLA partners with Cambridge to deliver a new AI course aimed at transforming business strategy...',
    },
    
    {
        id: 1403,
        title: 'PwC + SLA: New Power BI Certification Path',
        summary: 'This collaboration will allow learners to get dual certification and access global project experience...',
    },
];
const ITEMS_PER_PAGE = 4;

export default function NewsSection() {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(mainArticles.length / ITEMS_PER_PAGE);

    const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentItems = mainArticles.slice(startIdx, startIdx + ITEMS_PER_PAGE);

    const handlePrev = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const handleNext = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    return (
        <div className="bg-gray-50">
            <h1 className="text-center text-3xl font-bold text-blue-800 py-6">SLA Consultants in News</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-gray-50 w-[1100px] m-auto">
                <div className="md:col-span-2 space-y-6">
                    {currentItems.map((article) => (
                        <div key={article.id} className="bg-white shadow-md rounded-lg p-5 flex gap-4">
                            <img src={article.sourceLogo} alt={article.publisher} className="w-14 h-14 object-contain" />
                            <div>
                                <h3 className="font-semibold text-sm text-gray-600">{article.publisher}</h3>
                                <p className="text-xs text-gray-500 mb-2">{article.date}</p>
                                <h2 className="text-lg font-bold text-blue-800">{article.title}</h2>
                                <p className="text-sm text-gray-600 mt-1">{article.summary}</p>
                                <button className="text-orange-500 text-sm mt-2 hover:underline">Read More →</button>
                                <div className="flex space-x-3 mt-3 text-blue-600">
                                    <i className="fab fa-linkedin" />
                                    <i className="fab fa-twitter" />
                                    <i className="fab fa-facebook" />
                                </div>
                            </div>
                        </div>
                    ))}

                    <div className="flex justify-center space-x-4 mt-6">
                        <button
                            onClick={handlePrev}
                            disabled={currentPage === 1}
                            className="px-4 py-2 bg-blue-600 text-white rounded disabled:bg-gray-400"
                        >
                            Previous
                        </button>
                        <span className="text-sm text-gray-700 self-center">
                            Page {currentPage} of {totalPages}
                        </span>
                        <button
                            onClick={handleNext}
                            disabled={currentPage === totalPages}
                            className="px-4 py-2 bg-blue-600 text-white rounded disabled:bg-gray-400"
                        >
                            Next
                        </button>
                    </div>
                </div>

                {/* Popular News */}
                <div className="space-y-4">
                    <h3 className="font-bold text-lg mb-2">Popular News</h3>
                    {popularNews.map((news) => (
                        <div key={news.id} className="bg-white shadow-sm rounded-md p-4">
                            <h4 className="font-semibold text-sm text-gray-700">{news.title}</h4>
                            <p className="text-xs text-gray-500 mt-1">{news.summary.slice(0, 100)}...</p>
                            <button className="text-orange-500 text-sm mt-2 hover:underline">Read More →</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
