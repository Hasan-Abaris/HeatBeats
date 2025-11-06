// File: components/Gamesdetails/HowPlay.jsx
import React from "react";

function HowPlay() {
  return (
    <div className="bg-[#1e1e1e] text-white py-16 px-6 md:px-12">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-2">HOW TO PLAY</h2>
        <p className="text-gray-300 text-sm md:text-base">
          Begin Your Game Now
        </p>
      </div>

      {/* Section 1 - How To Play */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16 items-center">
        <img
          src="/images/courses/pubg.jpg" // 👈 replace with your actual image
          alt="PUBG Gameplay"
          className="rounded-xl w-full shadow-lg"
        />
        <div>
          <h3 className="text-2xl font-semibold mb-4">How To Play</h3>
          <ul className="space-y-3 text-gray-300 text-sm md:text-base list-disc pl-5">
            <li>Head over to your tournament selection section on the website.</li>
            <li>Tap “Create” and fill in the tournament details.</li>
            <li>Each tournament gets points up to 500.</li>
            <li>Play matches with your friends and climb the rank system.</li>
            <li>
              Join multiple tournaments under different categories to earn more.
            </li>
            <li>The top prize is ₹5000. It’s possible to join multiple tournaments at once.
            </li>
          </ul>
        </div>
      </div>

      {/* Section 2 - What To Do */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16 items-center">
        <div>
          <h3 className="text-2xl font-semibold mb-4">What To Do</h3>
          <ul className="space-y-3 text-gray-300 text-sm md:text-base list-disc pl-5">
            <li>Register on the platform.</li>
            <li>Create a free account.</li>
            <li>Connect your in-game account (PUBG, Free Fire, etc.).</li>
            <li>Verify your ID — you’re ready to play.</li>
            <li>Ensure your matches are conducted fairly (no emulators).</li>
            <li>Play daily matches and climb ranks for rewards.</li>
            <li>Participate in weekly and monthly tournaments.</li>
          </ul>
        </div>
        <img
          src="/images/courses/pubg-course.jpg" // 👈 replace with your actual image
          alt="Free Fire Gameplay"
          className="rounded-xl w-full shadow-lg"
        />
      </div>

      {/* Section 3 - Money Prizes */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <img
          src="/images/courses/gamedesign.jpg" // 👈 replace with your actual image
          alt="Money Prizes"
          className="rounded-xl w-full shadow-lg"
        />
        <div>
          <h3 className="text-2xl font-semibold mb-4">Money Prizes</h3>
          <p className="text-gray-300 text-sm md:text-base mb-4 leading-relaxed">
            Once you win your final tournament, you can request your winnings to
            be withdrawn from your dashboard or purchase additional in-game rewards.
          </p>
          <p className="text-gray-300 text-sm md:text-base mb-3">
            We also provide bonus playing options for higher cash prizes.
          </p>
          <p className="text-gray-400 text-sm mb-2 font-medium">
            Supported Payment Options:
          </p>
          <ul className="space-y-2 text-gray-300 text-sm list-disc pl-5">
            <li>Credit / Debit Cards</li>
            <li>Paytm</li>
            <li>Google Pay / PhonePe</li>
            <li>UPI</li>
          </ul>
          <p className="text-gray-400 text-sm mt-4 italic">
            Happy Winning!
          </p>
        </div>
      </div>
    </div>
  );
}

export default HowPlay;
