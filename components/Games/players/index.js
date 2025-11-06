import React from "react";

const topPlayers = [
  {
    rank: 1,
    name: "maximus",
    xp: "6810 xp",
    level: "Epic",
    img: "https://theme.cloudarcade.net/images/avatar/default/15.png",
    medal: "https://theme.cloudarcade.net/content/themes/arcade-one/images/medal-1.svg",
  },
  {
    rank: 2,
    name: "john_doe",
    xp: "5233 xp",
    level: "Grandmaster",
    img: "https://theme.cloudarcade.net/images/avatar/default/12.png",
    medal: "https://theme.cloudarcade.net/content/themes/arcade-one/images/medal-2.svg",
  },
  {
    rank: 3,
    name: "bam_bang",
    xp: "4521 xp",
    level: "Grandmaster",
    img: "https://theme.cloudarcade.net/images/avatar/default/19.png",
    medal: "https://theme.cloudarcade.net/content/themes/arcade-one/images/medal-3.svg",
  },
];

const otherPlayers = [
  {
    rank: 4,
    name: "kevin",
    xp: "4230 xp",
    level: "Grandmaster",
    img: "https://theme.cloudarcade.net/images/avatar/default/2.png",
    badge: "https://theme.cloudarcade.net/images/ranks/level-6.png",
  },
  {
    rank: 5,
    name: "dark_knight",
    xp: "2883 xp",
    level: "Master",
    img: "https://theme.cloudarcade.net/images/avatar/default/3.png",
    badge: "https://theme.cloudarcade.net/images/ranks/level-5.png",
  },
  {
    rank: 6,
    name: "cathelinee",
    xp: "2103 xp",
    level: "Master",
    img: "https://theme.cloudarcade.net/images/avatar/default/15.png",
    badge: "https://theme.cloudarcade.net/images/ranks/level-5.png",
  },
  {
    rank: 7,
    name: "satoshi",
    xp: "1750 xp",
    level: "Enthusiast",
    img: "https://theme.cloudarcade.net/images/avatar/default/18.png",
    badge: "https://theme.cloudarcade.net/images/ranks/level-4.png",
  },
  {
    rank: 8,
    name: "diegoo",
    xp: "750 xp",
    level: "Fan",
    img: "https://theme.cloudarcade.net/images/avatar/default/4.png",
    badge: "https://theme.cloudarcade.net/images/ranks/level-3.png",
  },
  {
    rank: 9,
    name: "marimoo",
    xp: "400 xp",
    level: "Player",
    img: "https://theme.cloudarcade.net/images/avatar/default/2.png",
    badge: "https://theme.cloudarcade.net/images/ranks/level-2.png",
  },
  {
    rank: 10,
    name: "belugga",
    xp: "87 xp",
    level: "Newbie",
    img: "https://theme.cloudarcade.net/images/avatar/default/13.png",
    badge: "https://theme.cloudarcade.net/images/ranks/level-1.png",
  },
];

function Playerspage() {
  return (
    <div className="flex flex-col lg:flex-row gap-8 w-full bg-[#f9f9f9] py-10 px-4 md:px-10">
      {/* LEFT SIDE - Leaderboard */}
      <div className="w-full lg:w-2/3 bg-white rounded-xl shadow-md p-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800">
          Top Players
        </h2>

        {/* === Top 3 Players === */}
        <div className="flex justify-center items-end gap-6 mb-10 flex-wrap">
          {topPlayers.map((player) => (
            <div
              key={player.rank}
              className={`flex flex-col items-center ${
                player.rank === 1
                  ? "transform scale-110"
                  : player.rank === 2
                  ? "translate-y-4"
                  : "translate-y-6"
              }`}
            >
              <div className="relative">
                <img
                  src={player.img}
                  alt={player.name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-yellow-400"
                />
                <img
                  src={player.medal}
                  alt="medal"
                  className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-8 h-8"
                />
              </div>
              <div className="text-center mt-3">
                <h3 className="font-semibold text-gray-800">{player.name}</h3>
                <p className="text-sm text-gray-500">{player.xp}</p>
                <p className="text-xs text-green-600 font-medium">
                  {player.level}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* === Leaderboard Table === */}
        <div className="overflow-x-auto">
          <div className="min-w-[600px] border border-gray-200 rounded-lg">
            {otherPlayers.map((player) => (
              <div
                key={player.rank}
                className="flex items-center justify-between border-b last:border-none px-4 py-3 hover:bg-gray-50 transition-all"
              >
                <div className="w-8 font-bold text-gray-700">{player.rank}</div>
                <div className="flex items-center gap-3 w-48">
                  <img
                    src={player.img}
                    alt={player.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <span className="text-gray-800 font-medium text-sm">
                    {player.name}
                  </span>
                </div>
                <div className="text-gray-600 text-sm">{player.xp}</div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-green-600">{player.level}</span>
                  <img
                    src={player.badge}
                    alt={player.level}
                    className="w-6 h-6"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT SIDE - Widgets */}
      <div className="w-full lg:w-1/3 flex flex-col gap-6">
        {/* New Games Section */}
        <div className="bg-white rounded-xl shadow-md p-4">
          <h4 className="text-lg font-bold mb-4 border-b pb-2 text-[#76b900]">
            New Games
          </h4>
          <div className="grid grid-cols-3 gap-3">
            {[
              {
                img: "https://theme.cloudarcade.net/thumbs/ten-10_2.webp",
                link: "/Games/Gamesdetail",
              },
              {
                img: "https://theme.cloudarcade.net/thumbs/anti-virus-game_2.webp",
                link: "/Games/Gamesdetail",
              },
              {
                img: "https://theme.cloudarcade.net/games/memory-match/memory-match-thumb_2_small.jpg",
                link: "/Games/Gamesdetail",
              },
              {
                img: "https://theme.cloudarcade.net/games/tennis/tennis-thumb_2_small.jpg",
                link: "/Games/Gamesdetail",
              },
              {
                img: "https://theme.cloudarcade.net/thumbs/skydom-reforged-skydom-reforged-94529c23cb094231a768b74f808d5cd0-512x512_small.webp",
                link: "/Games/Gamesdetail",
              },
              {
                img: "https://theme.cloudarcade.net/thumbs/unblock-cube-3d-unblock-cube-3d-b2d6554a0200418cbe03a42d6e515a80-512x512_small.webp",
                link: "/Games/Gamesdetail",
              },
              {
                img: "https://theme.cloudarcade.net/thumbs/pair-up-pair-up-1dcfbb7f95d845009db9f6f5cf808642-512x512_small.webp",
                link: "/Games/Gamesdetail",
              },
              {
                img: "https://theme.cloudarcade.net/thumbs/smileyworld-match-smileyworld-match-930c56c9df07432f9052e80ba020085e-512x512_small.webp",
                link: "/Games/Gamesdetail",
              },
              {
                img: "https://theme.cloudarcade.net/thumbs/fill-pix-fill-pix-05a9f4d59cdd4f66a316a7dc0ff1b543-512x512_small.webp",
                link: "/Games/Gamesdetail",
              },
            ].map((game, index) => (
              <a key={index} href={game.link} target="_blank" rel="noreferrer">
                <img
                  src={game.img}
                  alt="Game"
                  className="w-full h-20 object-cover rounded-md hover:opacity-80"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Playerspage;
