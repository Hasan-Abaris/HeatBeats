

import IncentiveCard from "./IncentiveCard";
import LearnerCard from "./LearnerCard";
import { BriefcaseIcon, ClockIcon, ChartBarIcon, UserIcon, DocumentTextIcon, TicketIcon, BookOpenIcon, GlobeIcon, HeartIcon, ShieldCheckIcon, UsersIcon } from "@heroicons/react/24/outline";

const IncentivesSection = ({setIsModalOpen}) => {
  return (
    <div className="space-y-10 px-6 py-12 w-[1100px] m-auto">
      <div>
        <h2 className="text-center text-2xl font-semibold mb-6">What’s in it for you?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <IncentiveCard icon={<BriefcaseIcon className="w-6 h-6" />} text="Opportunity to earn high rate of commission" />
          <IncentiveCard icon={<ClockIcon className="w-6 h-6" />} text="Co-branded platform setup within 1 hour" />
          <IncentiveCard icon={<ChartBarIcon className="w-6 h-6" />} text="Access to in-depth real-time analytics" />
          <IncentiveCard icon={<UserIcon className="w-6 h-6" />} text="Dedicated Account Manager to provide you support" />
          <IncentiveCard icon={<DocumentTextIcon className="w-6 h-6" />} text="Marketing and Sales collateral to help you sell better" />
          <IncentiveCard icon={<TicketIcon className="w-6 h-6" />} text="Exam Vouchers*" />
        </div>
      </div>

      <div>
        <h2 className="text-center text-2xl font-semibold mb-6">What’s in it for your learners?</h2>
        <div className="bg-blue-800 rounded-lg p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <LearnerCard icon={<BookOpenIcon className="w-6 h-6" />} text="More than 150 Live Instructor-Led and Self-Paced courses" />
          <LearnerCard icon={<HeartIcon className="w-6 h-6" />} text="24x7 lifetime support for your learners" />
          <LearnerCard icon={<ShieldCheckIcon className="w-6 h-6" />} text="Lifetime access to Edureka’s LMS" />
          <LearnerCard icon={<ChartBarIcon className="w-6 h-6" />} text="Highest course completion rate in the industry among learners" />
          <LearnerCard icon={<HeartIcon className="w-6 h-6" />} text="Trusted by a global community of almost 800,000 learners from 150+ countries" />
          <LearnerCard icon={<UsersIcon className="w-6 h-6" />} text="Career Counselling" />
        </div>
      </div>

      <div className="flex justify-center">
      <button onClick={() => setIsModalOpen(true)}
                className="bg-yellow-500 text-white font-bold text-base py-2 px-4 rounded mt-6 hover:bg-yellow-700 transition duration-300">Get In Touch</button>
      </div>
    </div>
  );
};

export default IncentivesSection;