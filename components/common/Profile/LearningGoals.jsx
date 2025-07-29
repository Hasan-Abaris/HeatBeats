import React from 'react'
import { SlPencil, SlUser } from "react-icons/sl";
import { MdDoubleArrow } from "react-icons/md";
function LearningGoals() {
    return (
        <div className='bg-white shadow-md p-5 mb-5'>
            <div className='items-center justify-between flex border-b pb-4'>
                <div className='flex items-center gap-x-5'>
                    <span className="text-2xl"><MdDoubleArrow /></span>
                    <span>
                        <h3 className='text-2xl font-semibold'>Learning Goals</h3>
                    </span>
                </div>
                <div className=''>
                    <button className="right-4 text-xl bg-white p-2 rounded-full shadow">
                        <SlPencil />
                    </button>

                </div>
            </div>
            
            <h3 className='text-2xl font-bold mt-5'>
                Reminder Buddy
            </h3>
            <div className='grid md:grid-cols-3 gap-8'>
                
                <div>
                    <h5 className='text-xl font-bold my-2'>Partner's Name</h5>
                    <span className='font-light'>Not Available</span>
                </div>
                <div>
                    <h5 className='text-xl font-bold my-2'>Partner's Mobile</h5>
                    <span className='font-light'>Not Available</span>
                </div>
                <div>
                    <h5 className='text-xl font-bold my-2'>Partner's Email</h5>
                    <span className='font-light'>Not Available</span>
                </div>
            </div>
        </div>
    )
}

export default LearningGoals
