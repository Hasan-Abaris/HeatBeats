// File: components/Gamesdetails/Tournamentdetail.jsx
import React from "react";

function Tournamentdetail() {
  const tournaments = [
    {
      name: "VALORANT",
      image: "/images/courses/valorant.jpg",
      prize: "₹5,000",
      entry: "Free",
      status: "Upcoming",
      players: [
        "Player_1", "Player_2", "Player_3", "Player_4", "Player_5",
        "Player_6", "Player_7", "Player_8", "Player_9", "Player_10",
      ],
    },
    {
      name: "CALL OF DUTY: MOBILE",
      image: "/images/courses/testing.jpg",
      prize: "₹7,500",
      entry: "Free",
      status: "Live",
      players: [
        "SniperX", "ShadowOP", "Ghost", "Blaze", "Nova",
        "Rogue", "Venom", "Alpha", "Omega", "Wolf",
      ],
    },
    {
      name: "PUBG MOBILE LITE",
      image: "/images/courses/pubg.jpg",
      prize: "₹3,000",
      entry: "Free",
      status: "Upcoming",
      players: [
        "Beast", "Hunter", "DarkSoul", "Frost", "Ninja",
        "Zeus", "Reaper", "King", "Slayer", "Titan",
      ],
    },
    {
      name: "BGMI",
      image: "/images/courses/pubg.jpg",
      prize: "₹10,000",
      entry: "Free",
      status: "Live",
      players: [
        "Dynamo", "Scout", "Mortal", "Jonathan", "Mavi",
        "Goblin", "Omega", "ClutchGod", "Jelly", "Neyoo",
      ],
    },
    {
      name: "GARENA FREE FIRE - NEW AGE",
      image: "/images/courses/freefire.jpg",
      prize: "₹4,500",
      entry: "Free",
      status: "Upcoming",
      players: [
        "FF_Pro", "OneTap", "Ace", "Boom", "Xeno",
        "Neo", "Crush", "Leo", "NoMercy", "Axel",
      ],
    },
  ];

  return (
    <div className="bg-[#f9f9f9] py-16 px-6 md:px-12">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
        TOURNAMENTS
      </h2>

      <div className="flex flex-col gap-16">
        {tournaments.map((tournament, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start"
          >
            {/* Left Section - Tournament Card */}
            <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-200">
              <img
                src={tournament.image}
                alt={tournament.name}
                className="rounded-xl mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {tournament.name}
              </h3>
              <div className="flex justify-between text-sm text-gray-600 mb-3">
                <p>
                  <span className="font-semibold text-gray-800">Prize:</span>{" "}
                  {tournament.prize}
                </p>
                <p>
                  <span className="font-semibold text-gray-800">Entry:</span>{" "}
                  {tournament.entry}
                </p>
              </div>
              <span
                className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                  tournament.status === "Live"
                    ? "bg-green-100 text-green-600"
                    : "bg-yellow-100 text-yellow-600"
                }`}
              >
                {tournament.status}
              </span>
              <button className="block w-full mt-4 py-2 bg-[#ff6b61] text-white rounded-lg hover:bg-[#ff7b70] transition font-medium">
                Join Tournament
              </button>
            </div>

            {/* Right Section - Top 10 Players */}
            <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-200">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">
                Top 10 Players
              </h4>
              <ol className="space-y-2 text-gray-700 text-sm">
                {tournament.players.map((player, i) => (
                  <li
                    key={i}
                    className="flex justify-between items-center border-b border-gray-100 pb-1"
                  >
                    <span>
                      {i + 1}. {player}
                    </span>
                    <span className="text-gray-500">★</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tournamentdetail;
