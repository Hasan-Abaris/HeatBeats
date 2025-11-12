"use client";
import React from "react";
import { Crown, Star, Zap, Trophy, Shield, Clock } from "lucide-react";

export default function Packages() {
  const packages = [
    {
      name: "Silver",
      price: "$9/mo",
      gradient: "from-gray-700 to-gray-800",
      icon: <Shield className="text-gray-300" size={30} />,
      description:
        "Perfect for casual gamers who want to stay connected with the HeatsBeasts community.",
      features: [
        "Basic Access to Community Portal",
        "1 Tournament Entry / month",
        "Access to Friends & Groups",
        "Limited Gift Sending",
      ],
    },
    {
      name: "Gold",
      price: "$19/mo",
      gradient: "from-emerald-600 to-green-700",
      icon: <Crown className="text-yellow-400" size={30} />,
      description:
        "Get full access to exclusive tournaments, priority support, and custom avatars.",
      features: [
        "All Access + 3 Tournament Entries / month",
        "Exclusive Esports News & Leaderboards",
        "VIP Badge on Profile",
        "Priority Support from Team",
        "Unlimited Gift Sending",
      ],
    },
    {
      name: "Platinum",
      price: "$29/mo",
      gradient: "from-purple-600 to-indigo-700",
      icon: <Trophy className="text-yellow-300" size={30} />,
      description:
        "Designed for professional players and streamers aiming for the top.",
      features: [
        "Unlimited Tournament Access",
        "Verified Creator Tag",
        "Custom Group Hosting",
        "Early Access to Beta Features",
        "Premium Customer Support",
      ],
    },
  ];

  const history = [
    {
      plan: "Gold Membership",
      date: "Aug 14, 2025",
      duration: "1 Month",
      status: "Expired",
    },
    {
      plan: "Platinum Membership",
      date: "Sep 14, 2025",
      duration: "1 Month",
      status: "Active",
    },
  ];

  return (
    <div className="min-h-screen mt-10 mb-10 space-y-20">
      {/* Header Section */}
      <div className="text-center">
        <div className="flex justify-center items-center gap-3 mb-3">
          <Zap size={34} className="text-emerald-400" />
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-emerald-400 to-green-600 bg-clip-text text-transparent">
            Packages & Memberships
          </h1>
        </div>
        <p className="text-gray-400 max-w-xl mx-auto">
          Choose the perfect membership to level up your gaming experience on{" "}
          <span className="text-emerald-400 font-semibold">HeatsBeasts</span>.
        </p>
      </div>

      {/* Packages Sell Section */}
      <div>
        <h2 className="text-2xl font-bold text-emerald-400 text-center mb-4">
          Packages Sell
        </h2>
        <div className="grid md:grid-cols-3 gap-8 px-6">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`rounded-2xl p-6 shadow-lg bg-gradient-to-br ${pkg.gradient} relative border border-gray-700 hover:shadow-emerald-600/40 hover:-translate-y-2 transition-all duration-300`}
            >
              <div className="absolute top-4 right-4 bg-black/40 px-3 py-1 rounded-full text-xs text-gray-300">
                {pkg.name === "Platinum" ? "⭐ Most Popular" : pkg.name}
              </div>

              <div className="flex justify-center mb-4">{pkg.icon}</div>
              <h2 className="text-2xl font-bold text-center text-white mb-2">
                {pkg.name}
              </h2>
              <p className="text-center text-emerald-400 font-semibold text-lg mb-4">
                {pkg.price}
              </p>

              <p className="text-sm text-gray-300 text-center mb-5">
                {pkg.description}
              </p>

              <ul className="text-gray-300 text-sm space-y-2 mb-6">
                {pkg.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Star size={14} className="text-emerald-400" /> {f}
                  </li>
                ))}
              </ul>

              <button className="w-full py-2 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-500 transition-all">
                Subscribe Now
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* History Section */}
      <div className="px-6">
        <h2 className="text-2xl font-bold text-emerald-400 text-center mb-8">
          History
        </h2>
        <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800 shadow-lg">
          <div className="flex items-center gap-2 mb-4">
            <Clock size={20} className="text-emerald-400" />
            <h3 className="text-lg font-semibold text-white">Purchase History</h3>
          </div>
          <div className="divide-y divide-gray-800">
            {history.map((item, i) => (
              <div
                key={i}
                className="flex justify-between items-center py-3 text-gray-300"
              >
                <div>
                  <p className="font-medium text-white">{item.plan}</p>
                  <p className="text-sm text-gray-400">{item.date}</p>
                </div>
                <div className="text-sm text-gray-400">{item.duration}</div>
                <div
                  className={`text-sm font-semibold ${
                    item.status === "Active"
                      ? "text-emerald-400"
                      : "text-gray-500"
                  }`}
                >
                  {item.status}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-16">
        <p className="text-gray-400 mb-3">
          Not sure which plan fits you?
        </p>
        <button className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-green-600 text-white font-semibold rounded-lg hover:opacity-90 transition-all shadow-lg">
          Compare All Packages
        </button>
      </div>
    </div>
  );
}
