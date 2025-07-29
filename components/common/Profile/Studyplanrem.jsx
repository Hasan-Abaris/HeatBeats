import React from 'react'
import { FaCalendar } from "react-icons/fa";
import { SlPencil } from 'react-icons/sl';

function Studyplanrem() {
    return (
        <div className='bg-white shadow-md p-5 mb-5'>
            <div className='items-center justify-between flex border-b pb-4'>
                <div className='flex items-center gap-x-5'>
                    <span className="text-2xl"><FaCalendar /></span>
                    <span>
                        <h3 className='text-2xl font-semibold'>Study Plan - Reminders are on</h3>
                    </span>
                </div>
                <div className=''>
                    <button className="right-4 text-xl bg-white p-2 rounded-full shadow">
                        <SlPencil />
                    </button>

                </div>
            </div>


            <div className='grid md:grid-cols-3 gap-8'>
                <div>
                    <span className='font-light'>Not Available</span>
                </div>
                
            </div>

        </div>
    )
}

export default Studyplanrem
