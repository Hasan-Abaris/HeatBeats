import React, { useState, useEffect } from 'react';
import { FaRegTimesCircle } from 'react-icons/fa';
import { FaFlagCheckered } from 'react-icons/fa6';
import { IoCallSharp } from 'react-icons/io5';

function TopHdMonthEnd() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 120000);
        return () => clearTimeout(timer);
    }, []);
    if (!isVisible) return null;

    return (
        <div className="px-6 md:px-16 py-1 bgOrange relative">
            <div className="flex justify-center flex-wrap items-center">
                <div>
                    <ul className="flex gap-3 items-center flex-wrap  text-center ">
                        <li className=" text-white capitalize">
                            Month End Sale - Flat 30% <span className='uppercase font-semibold'>Offer Ending in :</span>{" "}
                            <span className="text-white font-semibold">00 D 12 h 08 m 37 s</span>
                        </li>
                        <li className="underline text-white text-center">GRAB NOW</li>
                    </ul>
                </div>
                <button 
                    onClick={()=>setIsVisible(!isVisible)}
                    className='text-white border border-white rounded-full absolute right-5'
                >
                    <FaRegTimesCircle />
                </button>
            </div>
        </div>
    );
}

export default TopHdMonthEnd;