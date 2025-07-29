"use client";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { IoMdShare } from "react-icons/io";
import { IoHeartOutline } from "react-icons/io5";
export default function CourseIntro() {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div>
          <div className="flex items-center gap-4 bg-[#F9FAFB] p-4 rounded-md max-w-md mb-4">

            <div className="flex items-center gap-2">
              <FaPhoneSquareAlt className="text-blue-600 w-5 h-5" />
              <div className="text-sm">
                <p className="text-gray-700">Have queries? Ask us</p>
                <p className="text-blue-600 font-medium">+91 81474 34542</p>
              </div>
            </div>

            <div className="flex items-center gap-2 ml-auto">
              <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100">
                <IoHeartOutline className="w-4 h-4 text-gray-400" fill="lightgray" />
              </button>
              <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100">
                <IoMdShare className="w-4 h-4 text-gray-400" />
              </button>
            </div>
          </div>
          <div className="w-full ">
            <div className="relative w-full h-64 bg-gray-100 flex items-center justify-center rounded-lg overflow-hidden">

              <button className="absolute inset-0 flex items-center justify-center text-white text-3xl font-bold bg-black bg-opacity-50">
                ▶
              </button>
              <img src="/images/vedio.webp" alt="Preview" className="object-cover w-full h-full" />
            </div>
            <p className="text-center mt-2 text-sm font-semibold">View Course Preview Video</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 space-y-4">
          <h1 className="text-2xl font-bold">Power BI Certification Training Course: PwC Academy</h1>
          <p className="text-gray-700 text-sm">
            Play SLA course Preview VideoView Course Preview Video
            The SLA Power BI certification course by PwC Academy will help you gain expertise in Business Analytics. You will master concepts such as Power BI Desktop, Architecture, DAX, Service, Mobile Apps, Data Quality Assessment, Data Transformation, Data Modelling, Reports, and Q&A, to name a few, with industry use cases. This Power BI training is live instructor-led and ensures that you get hands-on experience in real-time projects. Learn Power BI online from 10+ years of experienced industry experts and clear the PL-300 exam.
          </p>
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <span>⭐ 4.2 (33,100 Ratings)</span>
            <span>👨‍🎓 102774 Learners</span>
          </div>
          <div className="flex items-center space-x-4">
            <img src="/images/microsoft-partner.webp" className="h-12" />
            <img src="/images/microsoft-partner.webp" className="h-12" />
          </div>
          <div className="space-x-3 mt-2">
            <button className="bg-blue-600 text-white px-4 py-2 rounded">Enroll Now</button>
            <button className="border px-4 py-2 rounded">Download Curriculum</button>
          </div>
          <div className="flex justify-between text-sm pt-4">
            <div className="text-center">
              <p>⭐ 4.5</p><p>Google Reviews</p>
            </div>
            <div className="text-center">
              <p>⭐ 4.6</p><p>G2 Reviews</p>
            </div>
            <div className="text-center">
              <p>⭐ 4.7</p><p>Sitejabber Reviews</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
