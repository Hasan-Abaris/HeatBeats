import React from 'react'
import { IoHeadsetSharp } from "react-icons/io5";
function Helponcourse() {
    return (
        <div className='bg-white shadow-md p-5'>
            <div className='items-center justify-between flex border-b pb-4'>
                <div className='flex items-center gap-x-5'>
                    <span className="text-2xl"><IoHeadsetSharp /></span>
                    <span>
                        <h3 className='text-2xl font-semibold'>Help on Course Pre-requisites</h3>
                    </span>
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

export default Helponcourse
