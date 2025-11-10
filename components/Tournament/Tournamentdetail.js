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
    <div className="bg-gray-50 py-16 px-6 md:px-12">
      <h2 className="text-3xl font-bold text-center mb-12 text-green-800 uppercase tracking-wide">
        Esports Community Tournaments
      </h2>

      <div className="flex flex-col gap-16">
        {tournaments.map((tournament, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch"
          >
            {/* Left Section - Tournament Details */}
            <div className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden flex flex-col justify-between hover:shadow-lg transition-all duration-300">
              <div>
                <img
                  src={tournament.image}
                  alt={tournament.name}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-3 text-green-800">
                    {tournament.name}
                  </h3>
                  <div className="flex justify-between text-sm text-gray-700 mb-3">
                    <p>
                      <span className="font-semibold text-gray-900">Prize:</span>{" "}
                      {tournament.prize}
                    </p>
                    <p>
                      <span className="font-semibold text-gray-900">Entry:</span>{" "}
                      {tournament.entry}
                    </p>
                  </div>
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                      tournament.status === "Live"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {tournament.status}
                  </span>
                </div>
              </div>

              <button className="m-6 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800 transition font-medium shadow-sm">
                Join Tournament
              </button>
            </div>

            {/* Right Section - Enhanced Player List */}
            <div className="bg-gradient-to-b from-white to-green-50 rounded-2xl shadow-md border border-gray-200 p-6 hover:shadow-xl transition-all duration-300">
              <div className="flex justify-between items-center mb-5">
                <h4 className="text-xl font-bold text-green-800 flex items-center gap-2">
                  🏆 Top 10 Players
                </h4>
                <span className="text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded-md">
                  {tournament.players.length} Players
                </span>
              </div>

              <ul className="space-y-2">
                {tournament.players.map((player, i) => (
                  <li
                    key={i}
                    className={`flex justify-between items-center py-2 px-3 rounded-lg transition-all duration-200 ${
                      i < 3
                        ? "bg-green-100 text-green-900 font-semibold"
                        : "hover:bg-green-50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 flex items-center justify-center rounded-full font-bold text-sm ${
                          i === 0
                            ? "bg-yellow-400 text-white"
                            : i === 1
                            ? "bg-gray-400 text-white"
                            : i === 2
                            ? "bg-orange-400 text-white"
                            : "bg-green-200 text-green-800"
                        }`}
                      >
                        {i + 1}
                      </div>
                      <div>
                        <p className="text-sm">{player}</p>
                        {i < 3 && (
                          <span className="text-xs text-gray-500">
                            {i === 0
                              ? "🏅 Champion"
                              : i === 1
                              ? "🥈 Runner-up"
                              : "🥉 Top 3"}
                          </span>
                        )}
                      </div>
                    </div>

                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full ${
                        i < 3
                          ? "bg-green-700 text-white"
                          : "bg-green-100 text-green-700"
                      }`}
                    >
                      {i < 3 ? "Elite" : "Pro"}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tournamentdetail;
