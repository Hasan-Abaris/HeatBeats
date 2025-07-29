'use client';

import { useState } from 'react';
import AboutTab from './AboutTab';
import JoinUsTab from './JoinUsTab';
import CultureTab from './CultureTab';

function Careers() {
    const [activeTab, setActiveTab] = useState('about');

    const tabContent = {
        about: <AboutTab />,
        culture: <CultureTab/>,
        join: <JoinUsTab />,
    };
    return (
        <>
            <section
                className="p-6 md:px-16 md:py-16 h-[360px] text-white"
                style={{ 
                    backgroundImage: `${activeTab === 'about' ? 'url(/images/joinus_01.jpg)' : 'url(/images/joinus_02.jpg)'}`,
                    backgroundSize: "cover",
                    backgroundPosition: "top center, center",
                    backgroundRepeat: "no-repeat, no-repeat",
                }}
            >

            </section>
            <div className="p-4 rounded-xl  mx-auto mt-3 ">
                <div className="flex justify-center gap-4 mb-6 border-b border-b-gray-300">
                    {['about', 'culture', 'join'].map((tab) => (
                        <button
                            key={tab}
                            className={`relative px-4 py-2 text-lg font-semibold transition-colors duration-200 ${activeTab === tab
                                ? 'text-blue-700 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-1 after:bg-blue-700'
                                : 'text-gray-500 hover:text-blue-500'
                                }`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab.toUpperCase()}
                        </button>
                    ))}
                </div>


                <div className="text-center">{tabContent[activeTab]}</div>
            </div>
        </>
    );
}

export default Careers;
