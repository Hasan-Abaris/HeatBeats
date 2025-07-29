import React from 'react'
import { SlPencil, SlUser } from "react-icons/sl";
function ProfessionalDetails() {
    return (
        <div className='bg-white shadow-md p-5 mb-5'>
            <div className='items-center justify-between flex border-b pb-4'>
                <div className='flex items-center gap-x-5'>
                    <span className="text-2xl text-blue-300"><SlUser /></span>
                    <span>
                        <h3 className='text-2xl font-semibold'>Professional Details</h3>
                    </span>
                </div>
                <div className=''>
                    <button className="right-4 text-xl bg-white p-2 rounded-full shadow">
                        <SlPencil />
                    </button>

                </div>
            </div>
            <div className='grid md:grid-cols-2 gap-8'>
                <div>
                    <h5 className='text-xl font-light my-2'>Company Name</h5>
                    <span className='font-light'>SLA Consultant India</span>
                </div>
                <div>
                    <h5 className='text-xl font-light my-2'>Your Current Job Level</h5>
                    <span className='font-light'></span>
                </div>
                <div>
                    <h5 className='text-xl font-light my-2'>Current Industry</h5>
                    <span className='font-light'></span>
                </div>
                <div>
                    <h5 className='text-xl font-light my-2'> Skills</h5>
                    <span className='font-light'></span>
                </div>

            </div>
        </div>
    )
}

export default ProfessionalDetails
