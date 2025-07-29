"use client";

import { useState } from "react";

function SeniorPowerBIDeveloper() {
    return (
        <div className="mt-4">
            <div className="flex justify-between  m-auto">
                <div className="w-[300px] my-2">
                    <img src="/images/annual_salary_image1_2846_1_1722853014.webp" alt="Power BI" className="w-[100%] h-[200px] mb-4" />
                    <h3 className="text-lg font-semibold">Annual Salary</h3>
                </div>
                <div>
                    <img src="/images/designation_multi_section_image_2846_0_1722853014.webp" alt="Power BI" className=" h-[200px] mb-4" />
                    <h3 className="text-lg font-semibold">Hiring Companies</h3>
                </div>

            </div>
            <div className="flex  align-top mt-4 pt-3 border-t-2 border-indigo-500">
                <h1 className="text-2xl font-bold mx-4">Want to become a Senior Power BI Developer?</h1>
                <button className="bg-blue-600 text-white px-4 py-2 rounded">
                    Enroll Now
                </button>
            </div>
        </div>
    );
}

function BIEngineer() {
    return (
        <div className="mt-4">
            <div className="flex justify-between  m-auto">
                <div className="w-[300px] my-2">
                    <img src="/images/annual_salary_image1_2846_1_1722853014.webp" alt="Power BI" className="w-[100%] h-[200px] mb-4" />
                    <h3 className="text-lg font-semibold">Annual Salary</h3>
                </div>
                <div>
                    <img src="/images/designation_multi_section_image_2846_0_1722853073.webp" alt="Power BI" className=" h-[200px] mb-4" />
                    <h3 className="text-lg font-semibold">Hiring Companies</h3>
                </div>

            </div>
            <div className="flex  align-top mt-4 pt-3 border-t-2 border-indigo-500">
                <h1 className="text-2xl font-bold mx-4">Want to become a BI Engineer?</h1>
                <button className="bg-blue-600 text-white px-4 py-2 rounded">
                    Enroll Now
                </button>
            </div>
        </div>
    );
}

function SeniorAnalystPowerBI() {
    return (
        <div className="mt-4">
            <div className="flex justify-between  m-auto">
                <div className="w-[300px] my-2">
                    <img src="/images/annual_salary_image1_2846_1_1722853014.webp" alt="Power BI" className="w-[100%] h-[200px] mb-4" />
                    <h3 className="text-lg font-semibold">Annual Salary</h3>
                </div>
                <div>
                    <img src="/images/designation_multi_section_image_2846_0_1722853136.webp" alt="Power BI" className=" h-[200px] mb-4" />
                    <h3 className="text-lg font-semibold">Hiring Companies</h3>
                </div>

            </div>
            <div className="flex  align-top mt-4 pt-3 border-t-2 border-indigo-500">
                <h1 className="text-2xl font-bold mx-4">Want to become a Senior Analyst Power BI?</h1>
                <button className="bg-blue-600 text-white px-4 py-2 rounded">
                    Enroll Now
                </button>
            </div>
        </div>
    );
}

function PowerBIConsultant() {
    return (
        <div className="mt-4">
            <div className="flex justify-between  m-auto">
                <div className="w-[300px] my-2">
                    <img src="/images/annual_salary_image1_2846_1_1722853014.webp" alt="Power BI" className="w-[100%] h-[200px] mb-4" />
                    <h3 className="text-lg font-semibold">Annual Salary</h3>
                </div>
                <div>
                    <img src="/images/designation_multi_section_image_2846_0_1722853244.webp" alt="Power BI" className=" h-[200px] mb-4" />
                    <h3 className="text-lg font-semibold">Hiring Companies</h3>
                </div>

            </div>
            <div className="flex  align-top mt-4 pt-3 border-t-2 border-indigo-500">
                <h1 className="text-2xl font-bold mx-4">Want to become a Power BI Consultant?
                </h1>
                <button className="bg-blue-600 text-white px-4 py-2 rounded">
                    Enroll Now
                </button>
            </div>
        </div>
    );
}

export default function CourseBenefits() {
    const [selectedTab, setSelectedTab] = useState("Senior Power BI Developer");

    const tabComponents = {
        "Senior Power BI Developer": <SeniorPowerBIDeveloper />,
        "BI Engineer": <BIEngineer />,
        "Senior Analyst Power BI": <SeniorAnalystPowerBI />,
        "Power BI Consultant": <PowerBIConsultant />,
    };

    const tabs = Object.keys(tabComponents);

    return (
        <div className="p-6 rounded-lg shadow-md my-6">
            <h2 className="text-2xl font-bold mb-4 text-center">Power BI Training Course Benefits</h2>
            <p className="text-sm text-gray-600 mb-4 text-center">
                The global BI market has been on an impressive growth trajectory, starting at $27.11 B in 2022 and projected to reach $54.27 B by 2030, with a significant step up to $33.3 B expected in 2024. This growth is fueled by the ever-increasing demand for skilled professionals. The Bureau of Labor Statistics predicts an 11% increase in business analyst positions from 2020 to 2030, highlighting the significance of BI roles.
            </p>

            <div className="flex flex-col md:flex-row items-start">
                <h2 className="text-xl m-2">Designations</h2>
                <div className="inline-flex bg-gray-200 rounded-full p-1 flex-wrap">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setSelectedTab(tab)}
                            className={`px-6 py-2 rounded-full font-medium m-1 ${selectedTab === tab
                                ? "bg-blue-600 text-white shadow"
                                : "text-gray-700 hover:bg-gray-300"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            <div className=" p-3 rounded-sm m-2">{tabComponents[selectedTab]}</div>
        </div>
    );
}
