import React from 'react'
import { PiBagBold } from "react-icons/pi";
import { SlPencil } from 'react-icons/sl';
function CareerInterests() {
    return (
        <div className='bg-white shadow-md p-5 mb-5'>
            <div className='items-center justify-between flex border-b pb-4'>
                <div className='flex items-center gap-x-5'>
                    <span className="text-2xl text-blue-300"><PiBagBold /></span>
                    <span>
                        <h3 className='text-2xl font-semibold'> Career Interests</h3>
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
                    <h5 className='text-xl font-light my-2'>Types of jobs you are intrested in</h5>
                    <span className='font-light'></span>
                </div>
                <div>
                    <h5 className='text-xl font-light my-2'>Employment types looking for</h5>
                    <span className='font-light'></span>
                </div>
                <div>
                    <h5 className='text-xl font-light my-2'>Current Location</h5>
                    <span className='font-light'></span>
                </div>
                <div>
                    <h5 className='text-xl font-light my-2'> Current/Last drawn CTC</h5>
                    <span className='font-light'></span>
                </div>
                <div>
                    <h5 className='text-xl font-light my-2'> Relocate</h5>
                    <span className='font-light'></span>
                </div>

            </div>
        </div>
    )
}

export default CareerInterests
