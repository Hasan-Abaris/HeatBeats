'use client';
import Image from 'next/image';
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn } from 'react-icons/fa';

export default function HeroReferral() {
  return (
    <section className="bg-[#E2F7FF] text-[#003366] py-12 px-6 md:px-16 lg:px-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Text Content */}
        <div className="space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">
            JOIN SLA consultant's REFERRAL PROGRAM, <br />
            <span className="text-[#004080]">EARN & LEARN WITH FRIENDS</span>
          </h1>

          <p className="text-lg font-semibold text-[#003366]">
            EARN upto <span className="font-bold">3000</span> Edureka Cash every
            time your friends enroll in a course
          </p>

          <p className="text-[#003366] text-base">
            Example : <strong>5 friends x 3,000 = 15,000</strong>
          </p>

          {/* Email input and button */}
          <div className="flex max-w-lg w-full bg-white shadow-md rounded overflow-hidden">
            <input
              type="email"
              placeholder="Paul@abc.com, xyz@gmail.com, ..."
              className="w-full px-4 py-3 text-sm text-gray-700 focus:outline-none"
            />
            <button className="bg-[#00AEEF] hover:bg-[#008ccf] text-white px-6 text-sm font-semibold transition">
              INVITE
            </button>
          </div>

          {/* Social icons */}
          <div className="pt-4">
            <p className="text-sm mb-2">Share via social media</p>
            <div className="flex items-center space-x-4 text-[#003366] text-xl">
              <FaFacebookF className="cursor-pointer hover:text-[#00AEEF]" />
              <FaGooglePlusG className="cursor-pointer hover:text-[#00AEEF]" />
              <FaLinkedinIn className="cursor-pointer hover:text-[#00AEEF]" />
            </div>
          </div>
        </div>

        {/* Illustration */}
        <div className="w-full flex justify-center md:justify-end">
          <Image
            src="/images/refer/refer.png"
            alt="Referral illustration"
            width={500}
            height={400}
            priority
            className="max-w-full h-auto"
          />
        </div>
      </div>

      {/* Optional: Decorative blob background */}
      <div className="absolute -bottom-10 -right-20 w-[800px] h-[500px] bg-[#C6F4FF] rounded-full opacity-30 blur-[100px] pointer-events-none"></div>
    </section>
  );
}
