"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import proImg from "@/public/images/profile-circle.png"
import { IoCameraReverseOutline } from "react-icons/io5";
import { SlPencil } from "react-icons/sl";
import EditProImgpop from './EditProImgpop';

function ProfileDetails() {
    const [models, showModels] = useState(false);
    return (
        <>
            <div className="bg-white shadow-md p-8 relative ">
                <button className="absolute top-4 right-4 text-xl bg-white p-2 rounded-full shadow">
                    <SlPencil />
                </button>

                <div className="relative w-fit mx-auto">
                    <Image
                        src={proImg}
                        alt="Profile"
                        width={200}
                        height={200}
                        className="rounded-full object-cover border"
                    />
                    <button className="absolute bottom-3 right-3 text-2xl bg-white p-2 rounded-full border shadow" onClick={() => showModels(true)}>
                        <IoCameraReverseOutline />
                    </button>

                </div>


                <div className="text-center mt-6">
                    <h2 className="text-2xl font-semibold">SLA Consultant Guest</h2>
                    <p className="text-gray-600">admin@gmail.com</p>
                    <span className="text-gray-700 block mt-1">+91 88517 46286</span>
                </div>
            </div>
            {models && <EditProImgpop isOpen={models} setIsOpen={showModels} />}
        </>

    )
}

export default ProfileDetails
