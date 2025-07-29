'use client';

import { useState } from 'react';
import Image from 'next/image';

const faqs = [
    {
        question: 'What is Business Intelligence and Visualization?',
        answer:
            'Business Intelligence is an approach that aids in understanding data and information. Visualization is a way to present a story about data.',
    },
    {
        question: 'Why is visualization important in Business Intelligence?',
          answer:
            'Business Intelligence is an approach that aids in understanding data and information. Visualization is a way to present a story about data.',
    },
    {
        question: 'Why learn BI and Visualization courses?',
          answer:
            'Business Intelligence is an approach that aids in understanding data and information. Visualization is a way to present a story about data.',
    },
    {
        question: 'What is the annual salary of a Business Intelligence professional?',
          answer:
            'Business Intelligence is an approach that aids in understanding data and information. Visualization is a way to present a story about data.',
    },
    {
        question: 'What are the skills required to learn BI and Visualization?',
          answer:
            'Business Intelligence is an approach that aids in understanding data and information. Visualization is a way to present a story about data.',
    },
    {
        question: 'What are the job options available after completing BI and Visualization courses online?',
          answer:
            'Business Intelligence is an approach that aids in understanding data and information. Visualization is a way to present a story about data.',
    },
    {
        question: 'Which courses are best for BI and Visualization?',
          answer:
            'Business Intelligence is an approach that aids in understanding data and information. Visualization is a way to present a story about data.',
    },
];

const blogs = [
    {
        title: 'Needs and Benefits of Data Visualization',
        date: 'May 22nd, 2019',
        image: '/images/Needs-and-Benefits-of-Data-Visualization-01-1-300x175.png',
    },
    {
        title: 'QlikView Tutorial: Understand The Power Of QlikView’s Click-Visualization',
        date: 'May 23rd, 2019',
        image: '/images/Needs-and-Benefits-of-Data-Visualization-01-1-300x175.png',
    },
    {
        title: 'Learn Tableau Functions and How to Use Them with Examples',
        date: 'November 26th, 2024',
        image: '/images/Needs-and-Benefits-of-Data-Visualization-01-1-300x175.png',
    },
];
export const categories = [
    "Artificial Intelligence",
    "Cloud Computing",
    "DevOps",
    "Data Science",
    "Cyber Security",
    "Programming & Frameworks",
    "Project Management and Methodologies",
    "PG Programs",
    "Software Testing",
    "Big Data",
    "Frontend Development",
    "Databases",
    "Data Warehousing and ETL",
    "Blockchain",
    "Operating Systems",
    "Robotic Process Automation",
    "Digital Marketing",
    "Others",
];

export default function BiVisualizationSection() {
    const [activeIndex, setActiveIndex] = useState(0);

    const toggleAccordion = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <div className="max-w-6xl mx-auto p-4">
            <h2 className="text-2xl font-semibold mb-4">BI and Visualization FAQs</h2>
            <div className="border rounded-md shadow-sm mb-10">
                {faqs.map((faq, index) => (
                    <div key={index} className="border-b">
                        <button
                            onClick={() => toggleAccordion(index)}
                            className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none"
                        >
                            <span>{faq.question}</span>
                            <span>{activeIndex === index ? '▴' : '▾'}</span>
                        </button>
                        {activeIndex === index && faq.answer && (
                            <div className="px-6 pb-4 text-sm text-gray-600">{faq.answer}</div>
                        )}
                    </div>
                ))}
            </div>

            <h2 className="text-2xl font-semibold mb-4">Latest Blog Posts on BI and Visualization</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
                {blogs.map((blog, index) => (
                    <div key={index} className="rounded-lg shadow hover:shadow-md transition p-3">
                        <Image
                            src={blog.image}
                            alt={blog.title}
                            width={300}
                            height={200}
                            className="w-full h-48 object-cover rounded-md"
                        />
                        <p className="text-xs text-gray-500 mt-2">{blog.date}</p>
                        <p className="text-sm font-medium mt-1">{blog.title}</p>
                    </div>
                ))}
            </div>

            <div className="bg-gray-100 p-4 rounded-md text-center md:text-left flex flex-col md:flex-row items-center justify-between">
                <div className="mb-2 md:mb-0">
                    <h3 className="text-lg font-semibold">Blog posts</h3>
                    <p className="text-sm text-gray-600">Check out our blog for free insights and updates on your field</p>
                </div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">SHOW ME</button>
            </div>
            <div className="bg-gray-100 p-4 mt-2 rounded-md text-center md:text-left flex flex-col md:flex-row items-center justify-between">
                <div className="mb-2 md:mb-0">
                    <h3 className="text-lg font-semibold">Discover Top Categories</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                        {categories.map((category, index) => (
                            <div
                                key={index}
                                className="bg-white shadow-sm border rounded-xl p-3 hover:bg-gray-100 transition"
                            >
                                {category}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
