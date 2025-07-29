import React from 'react'
import { SlPencil, SlUser } from "react-icons/sl";
function UserDetails() {
    return (
        <div className='bg-white shadow-md p-5 mb-5'>
            <div className='items-center justify-between flex border-b pb-4'>
                <div className='flex items-center gap-x-5'>
                    <span className="text-2xl"><SlUser /></span>
                    <span>
                        <h3 className='text-2xl font-semibold'>User Details</h3>
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
                    <h5 className='text-xl font-bold my-2'>Name</h5>
                    <span className='font-light'>SLA Consultant Guest</span>
                </div>
                <div>
                    <h5 className='text-xl font-bold my-2'>Mobile</h5>
                    <span className='font-light'>+91 88517 46286</span>
                </div>
                <div>
                    <h5 className='text-xl font-bold my-2'>Contact E-mail</h5>
                    <span className='font-light'>admin@gmail.com</span>
                </div>
                <div>
                    <h5 className='text-xl font-bold my-2'>Current Time Zone</h5>
                    <span className='font-light'>India-IST-Asia/Kolkata</span>
                </div>

            </div>
            <h3 className='text-2xl font-bold mt-5'>
                Preferred time to contact
            </h3>
            <div className='grid md:grid-cols-3 gap-8'>
                <div>
                    <h5 className='text-xl font-bold my-2'>Timezone</h5>
                    <span className='font-light'>India-IST-Asia/Kolkata</span>
                </div>
                <div>
                    <h5 className='text-xl font-bold my-2'>Weekdays</h5>
                    <span className='font-light'>Not Available</span>
                </div>
                <div>
                    <h5 className='text-xl font-bold my-2'>Weekends</h5>
                    <span className='font-light'>Not Available</span>
                </div>


            </div>
        </div>
    )
}

export default UserDetails
