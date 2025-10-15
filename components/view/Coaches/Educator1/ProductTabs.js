"use client";

import React, { useState } from "react";

function ProductTabs() {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        {/* Tabs Header */}
        <div className="flex flex-wrap border-b border-gray-300 rounded-t-lg overflow-hidden">
          {["description", "info", "reviews"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 font-semibold uppercase text-sm transition-all duration-200 ${
                activeTab === tab
                  ? "bg-green-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {tab === "description"
                ? "Description"
                : tab === "info"
                ? "Additional Information"
                : "Reviews (2)"}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="mt-6">
          {/* ====================== DESCRIPTION TAB ====================== */}
          {activeTab === "description" && (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <tbody className="text-gray-700 text-sm md:text-base">
                  <tr className="border-b border-gray-200">
                    <td className="font-semibold py-3 pr-6 w-40">Title</td>
                    <td className="italic">
                      Clash of Clans Pro eSport Team Owner / Pro Base Builder
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="font-semibold py-3 pr-6">Time Zone</td>
                    <td className="italic">(GMT-11:00) Pacific, Midway</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="font-semibold py-3 pr-6">Availability</td>
                    <td className="italic">evenings (UK time)</td>
                  </tr>
                  <tr className="border-b border-gray-200 align-top">
                    <td className="font-semibold py-3 pr-6">Achievements</td>
                    <td className="italic leading-relaxed">
                      World Championship offline qualifiers (May 2019 – Katowice, Poland)
                      <br />
                      World Championship offline qualifiers (July 2019 – Katowice, Poland)
                      <br />
                      NDL Pro Season 3 Champion
                      <br />
                      EWL Season 2 and 3 Champion
                    </td>
                  </tr>
                  <tr>
                    <td className="font-semibold py-3 pr-6 align-top">About Me</td>
                    <td className="italic leading-relaxed">
                      I’ve grown, captained and led a team to the World Championship offline
                      qualifiers twice both in May 2019 and July 2019 as well as won various
                      fan-organized leagues with both my own team and other teams. This has
                      given me a whole heap of experience in both base identification, base
                      attack strategy, base building, team selection, and how to build and
                      maintain a good group of players. I have written Town Hall–specific
                      base-building guides that have aided thousands of players with their
                      builds. I can help you build yours on a one-to-one basis or show you
                      what a base is weak to, break it down, and help you gain that
                      important clutch triple for your team…
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

                {/* ====================== ADDITIONAL INFO TAB ====================== */}
          {activeTab === "info" && (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-gray-700 text-sm md:text-base">
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="font-semibold py-3 pr-6 w-48">Coaching</td>
                    <td>Clash of Clans</td>
                  </tr>
                  <tr>
                    <td className="font-semibold py-3 pr-6">Language</td>
                    <td>English</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
          {/* ====================== REVIEWS TAB ====================== */}
          {activeTab === "reviews" && (
            <div className="p-6 text-gray-700 space-y-6">
              <h2 className="text-xl font-semibold mb-4">
                2 Reviews for 60 Minute Private Lesson with Coach Bradders
              </h2>

              {/* Review 1 */}
              <div className="border-b border-gray-200 pb-4">
                <p className="font-semibold text-yellow-500 mb-1">★★★★★</p>
                <p className="font-semibold">
                  Jonathan Morand{" "}
                  <span className="text-gray-500 text-sm">(verified owner) – Apr 1, 2020</span>
                </p>
                <p className="mt-2 leading-relaxed">
                  Amazing. Had a great experience and would definitely do it again. He helped
                  me attack in war and managed to get a 3 star on th13. He also explains the
                  game really well and what strategies to use for each base. Had a good chat
                  also. 1000% recommended.
                </p>

                <div className="mt-3 pl-4 border-l-4 border-green-500">
                  <p className="font-semibold text-green-700">Ice Queen – Apr 10, 2020</p>
                  <p className="italic text-gray-700">
                    Thank you for leaving a review, Jonathan! I am so happy that Coach
                    Bradders helped you get that 3 star in war and that you enjoyed your
                    session!
                  </p>
                </div>
              </div>

              {/* Review 2 */}
              <div>
                <p className="font-semibold text-yellow-500 mb-1">★★★★★</p>
                <p className="font-semibold">
                  Daniel Meyer-Bousso{" "}
                  <span className="text-gray-500 text-sm">(verified owner) – Mar 8, 2020</span>
                </p>
                <p className="mt-2 leading-relaxed">
                  Had the goal to get high level feedback on my base building and Bradders
                  definitely knows what he’s talking about. He is also very capable of
                  identifying individual points for improvement and teaching in a very
                  understandable way. Highly customized support, I can only recommend
                  Bradders!
                </p>

                <div className="mt-3 pl-4 border-l-4 border-green-500">
                  <p className="font-semibold text-green-700">Ice Queen – Apr 10, 2020</p>
                  <p className="italic text-gray-700">
                    Thank you for leaving a review, Daniel! We are so happy that you enjoyed
                    your session with Coach Bradders! Let us know how your base building is
                    going.
                  </p>
                </div>
              </div>

              {/* Review Notice */}
              <p className="text-gray-500 italic text-sm pt-4 border-t border-gray-200">
                Only logged in customers who have purchased this product may leave a review.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default ProductTabs;
