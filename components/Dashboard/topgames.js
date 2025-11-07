import React from 'react';

const games = [
  {
    id: 1,
    name: "Drop It ( Leaderboard demo )",
    link: "https://demo.cloudarcade.net/game/drop-it",
    played: 30610,
    category: ["Arcade"],
    likesPercent: 86,
    thumbsUp: 211,
    thumbsDown: 34,
  },
  {
    id: 2,
    name: "Anti Virus",
    link: "https://demo.cloudarcade.net/game/anti-virus",
    played: 20039,
    category: ["Action", "Arcade"],
    likesPercent: 84,
    thumbsUp: 254,
    thumbsDown: 48,
  },
  {
    id: 3,
    name: "Kill The Coronavirus",
    link: "https://demo.cloudarcade.net/game/kill-the-coronavirus",
    played: 14343,
    category: ["Arcade", "Hypercasual"],
    likesPercent: 77,
    thumbsUp: 143,
    thumbsDown: 42,
  },
  {
    id: 4,
    name: "Skydom",
    link: "https://demo.cloudarcade.net/game/skydom",
    played: 14194,
    category: ["Puzzle", "Bejeweled", "InGame Purchase"],
    likesPercent: 83,
    thumbsUp: 206,
    thumbsDown: 41,
  },
  {
    id: 5,
    name: "Road Crash",
    link: "https://demo.cloudarcade.net/game/road-crash",
    played: 12892,
    category: ["Racing", "Hypercasual", "InGame Purchase"],
    likesPercent: 84,
    thumbsUp: 103,
    thumbsDown: 19,
  },
  {
    id: 6,
    name: "Escape Out",
    link: "https://demo.cloudarcade.net/game/escape-out",
    played: 10087,
    category: ["Hypercasual"],
    likesPercent: 84,
    thumbsUp: 134,
    thumbsDown: 25,
  },
  {
    id: 7,
    name: "Pool 8",
    link: "https://demo.cloudarcade.net/game/pool-8",
    played: 8425,
    category: ["Puzzle", "Sports"],
    likesPercent: 73,
    thumbsUp: 54,
    thumbsDown: 19,
  },
  {
    id: 8,
    name: "Drunken Duel",
    link: "https://demo.cloudarcade.net/game/drunken-duel",
    played: 8127,
    category: ["2 Player", "Hypercasual"],
    likesPercent: 81,
    thumbsUp: 81,
    thumbsDown: 18,
  },
  {
    id: 9,
    name: "Snake Challenge",
    link: "https://demo.cloudarcade.net/game/snake-challenge",
    played: 6547,
    category: ["Arcade"],
    likesPercent: 85,
    thumbsUp: 86,
    thumbsDown: 15,
  },
  {
    id: 10,
    name: "Sugar Heroes",
    link: "https://demo.cloudarcade.net/game/sugar-heroes",
    played: 6244,
    category: ["Puzzle"],
    likesPercent: 84,
    thumbsUp: 59,
    thumbsDown: 11,
  },
];

function Topgames() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h3 className="text-2xl font-bold mb-6 text-gray-800">Top Games</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="py-3 px-4 text-left">#</th>
              <th className="py-3 px-4 text-left">Game Name</th>
              <th className="py-3 px-4 text-left">Played</th>
              <th className="py-3 px-4 text-left">Category</th>
              <th className="py-3 px-4 text-left">Likes</th>
            </tr>
          </thead>
          <tbody>
            {games.map((game) => (
              <tr key={game.id} className="border-b hover:bg-gray-100 transition duration-200">
                <td className="py-3 px-4 font-medium">{game.id}</td>
                <td className="py-3 px-4">
                  <a
                    href={game.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {game.name}
                  </a>
                </td>
                <td className="py-3 px-4">{game.played.toLocaleString()}</td>
                <td className="py-3 px-4">
                  {game.category.map((cat, index) => (
                    <span
                      key={index}
                      className="bg-gray-200 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded"
                    >
                      {cat}
                    </span>
                  ))}
                </td>
                <td className="py-3 px-4 flex items-center space-x-4">
                  <span className="text-sm font-semibold">{game.likesPercent}%</span>
                  <div className="flex items-center text-green-600">
                    <i className="fa fa-thumbs-up mr-1" aria-hidden="true"></i>
                    {game.thumbsUp}
                  </div>
                  <div className="flex items-center text-red-600">
                    <i className="fa fa-thumbs-down mr-1" aria-hidden="true"></i>
                    {game.thumbsDown}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Topgames;
