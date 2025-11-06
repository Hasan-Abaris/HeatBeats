// File: components/Gamesdetails/Contest.jsx
import React from "react";
import {
  FaTrophy,
  FaChartBar,
  FaMoneyBillWave,
  FaShieldAlt,
  FaUsers,
  FaShareAlt,
} from "react-icons/fa";

function Contest() {
  const features = [
    {
      icon: <FaTrophy size={22} />,
      title: "Exciting Tournaments",
      desc: "Participate in thrilling gaming tournaments held regularly and showcase your gaming excellence.",
    },
    {
      icon: <FaChartBar size={22} />,
      title: "Live Leaderboards",
      desc: "Track your rank in real time as you climb the leaderboards and compete with the best players.",
    },
    {
      icon: <FaMoneyBillWave size={22} />,
      title: "Cash Rewards",
      desc: "Win exciting cash prizes and rewards for your skills and performance in every tournament.",
    },
    {
      icon: <FaShieldAlt size={22} />,
      title: "Fair Play Rules",
      desc: "We ensure fair gameplay for everyone. No emulators, no hacks — just pure competitive gaming.",
    },
    {
      icon: <FaUsers size={22} />,
      title: "Player Profiles",
      desc: "Create your own gamer profile, track your stats, and get recognized as a top tournament player.",
    },
    {
      icon: <FaShareAlt size={22} />,
      title: "Refer & Earn",
      desc: "Invite your friends to join tournaments and earn referral bonuses for every successful invite.",
    },
  ];

  return (
    <div className="bg-[#1e1e1e] text-white py-16 px-6 md:px-12">
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-3">Tournament Features</h2>
        <p className="text-gray-300 max-w-2xl mx-auto text-sm md:text-base">
          Experience the ultimate competitive gaming platform with real rewards,
          live leaderboards, and a fair play environment that celebrates true
          skill.
        </p>
      </div>

      {/* Main Layout */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 max-w-6xl mx-auto">
        {/* Left Side - Phone Image */}
        <div className="flex justify-center w-full lg:w-1/2">
          <img
            src="/images/courses/pubg.jpg" // 👈 replace this with your tournament image
            alt="Tournament App Screenshot"
            className="w-[300px] md:w-[360px] lg:w-[400px] rounded-xl shadow-lg"
          />
        </div>

        {/* Right Side - Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full lg:w-1/2">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start gap-4 transition-transform hover:scale-[1.03]"
            >
              <div className="bg-[#ff6b61] p-3 rounded-full flex items-center justify-center text-white shadow-md hover:bg-[#ff7b70] transition">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Contest;
