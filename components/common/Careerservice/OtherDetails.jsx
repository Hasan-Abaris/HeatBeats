import React from 'react'
import { FaGraduationCap } from "react-icons/fa";
import { SlPencil } from 'react-icons/sl';
function OtherDetails() {
    return (
        <div className='bg-white shadow-md p-5'>
            <div className='items-center justify-between flex border-b pb-4'>
                <div className='flex items-center gap-x-5'>
                    <span className="text-2xl text-blue-300"><FaGraduationCap /></span>
                    <span>
                        <h3 className='text-2xl font-semibold'> Other Details</h3>
                    </span>
                </div>
                <div className=''>
                    <button className="right-4 text-xl bg-white p-2 rounded-full shadow">
                        <SlPencil />
                    </button>

                </div>
            </div>
            <div className='grid md:grid-cols-2 gap-8'>
            </div>
        </div>
    )
}

export default OtherDetails
