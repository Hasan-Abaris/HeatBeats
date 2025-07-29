import ProfileCard from '@/components/common/MyActivity/ProfileCard'
import RecentActivities from '@/components/common/MyActivity/RecentActivities'
import React from 'react'
import Image from "next/image";
import proimg from "@/public/images/profile-circle.png";
function MyActivity() {
    return (
        <section className="p-6 px-16 py-24 grayBackground">
            <div className="bg-gray-100 p-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="md:col-span-2 bg-white shadow p-4 rounded">
                        <ProfileCard/>
                        <RecentActivities/>
                    </div>

                    <div className="bg-white shadow p-4 rounded flex items-center gap-4">
                        <Image
                                src={proimg}
                                alt="Avatar"
                                width={56}  
                                height={56} 
                                className="rounded-full border mr-4"
                              />
                        <div className="w-full">
                            <div className="w-full bg-gray-200 h-2 rounded-full">
                                <div className="bg-green-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                            </div>
                            <p className="text-sm text-gray-700 mt-1">Profile Strength %</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MyActivity
