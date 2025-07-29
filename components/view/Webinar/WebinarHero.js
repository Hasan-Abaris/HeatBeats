import { FaSearch, FaChalkboardTeacher, FaUsers } from 'react-icons/fa';
import Image from 'next/image';

export default function WebinarHero() {
  return (
    <div className="relative bg-gradient-to-br from-[#00254b] to-[#122147] text-white overflow-hidden h-[60vh] md:h-[50vh]">
      <div className="px-6 pt-32 pb-24 flex flex-col md:flex-row items-start md:items-center w-full">
        {/* Left column */}
        <div className="flex-2 max-w-xl">
          <h1 className="text-6xl md:text-7xl font-extrabold mb-4 leading-snug">
            SLA Masterclass
          </h1>
          <p className="text-lg md:text-xl mb-6 leading-snug">
            Webinars to broaden your tech horizon. Introducing SLA Masterclass,
            a webinar series created to help you understand and immerse yourself
            in the latest trending technologies.
          </p>

          {/* Search Bar */}
          <div className="relative w-full max-w-3xl mx-auto md:mx-0">
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-2xl" />
            <input
              type="text"
              placeholder="Search webinars by title, speaker and skills"
              className="w-full py-4 pl-14 pr-4 rounded-lg bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Right graphic */}
        <div className="hidden md:flex flex-1 justify-end items-center mt-6 md:mt-0">
          <div className="relative w-[300px] h-[250px]">
            <Image
              src="/images/WebinarIMG.svg"
              alt="Floating graphic"
              fill
              className="object-contain opacity-60"
            />
          </div>
        </div>
      </div>

      {/* Stats, floating bottom-right */}
      <div className="absolute bottom-6 right-6 flex gap-12 text-white">
        <div className="flex items-center space-x-3">
          <FaChalkboardTeacher className="text-3xl" />
          <div>
            <p className="text-2xl font-bold">10000+</p>
            <p className="text-sm">Webinars</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <FaUsers className="text-3xl" />
          <div>
            <p className="text-2xl font-bold">1000000+</p>
            <p className="text-sm">Learners</p>
          </div>
        </div>
      </div>
    </div>
  );
}
