'use client';
import React, { useState, useMemo } from "react";

const Banner = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [source, setSource] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // 🕹 Full Game List
  const games = [
    {
      id: 113,
      name: "Drop It (Leaderboard demo)",
      category: "Arcade",
      source: "self",
      thumb: "https://demo.cloudarcade.net/games/drop-it/drop-it-thumb_2_small.jpg",
      url: "https://demo.cloudarcade.net/game/drop-it",
    },
    {
      id: 112,
      name: "Anti Virus",
      category: "Action, Arcade",
      source: "self",
      thumb: "https://demo.cloudarcade.net/games/antivirus/antivirus-thumb_2_small.jpeg",
      url: "https://demo.cloudarcade.net/game/anti-virus",
    },
    {
      id: 111,
      name: "Word Search",
      category: "Puzzle",
      source: "external",
      thumb: "https://demo.cloudarcade.net/games/word-search/thumb.jpg",
      url: "https://demo.cloudarcade.net/game/word-search",
    },
    {
      id: 110,
      name: "Zombie Shooter",
      category: "Action",
      source: "self",
      thumb: "https://demo.cloudarcade.net/games/zombie-shooter/thumb.jpg",
      url: "https://demo.cloudarcade.net/game/zombie-shooter",
    },
    {
      id: 109,
      name: "Mahjong Connect",
      category: "Puzzle",
      source: "external",
      thumb: "https://demo.cloudarcade.net/games/mahjong/thumb.jpg",
      url: "https://demo.cloudarcade.net/game/mahjong",
    },
    {
      id: 108,
      name: "Car Drift 3D",
      category: "Racing",
      source: "self",
      thumb: "https://demo.cloudarcade.net/games/drift/thumb.jpg",
      url: "https://demo.cloudarcade.net/game/drift",
    },
    {
      id: 107,
      name: "Super Mario Clone",
      category: "Adventure",
      source: "external",
      thumb: "https://demo.cloudarcade.net/games/mario/thumb.jpg",
      url: "https://demo.cloudarcade.net/game/mario",
    },
    {
      id: 106,
      name: "Tower Defense X",
      category: "Strategy",
      source: "self",
      thumb: "https://demo.cloudarcade.net/games/td/thumb.jpg",
      url: "https://demo.cloudarcade.net/game/td",
    },
    {
      id: 105,
      name: "Flappy Bird Reborn",
      category: "Arcade",
      source: "external",
      thumb: "https://demo.cloudarcade.net/games/flappy/thumb.jpg",
      url: "https://demo.cloudarcade.net/game/flappy",
    },
    {
      id: 104,
      name: "Chess Master",
      category: "Board",
      source: "self",
      thumb: "https://demo.cloudarcade.net/games/chess/thumb.jpg",
      url: "https://demo.cloudarcade.net/game/chess",
    },
  ];

  // 🔍 Filter logic
  const filteredGames = useMemo(() => {
    return games.filter(
      (g) =>
        g.name.toLowerCase().includes(search.toLowerCase()) &&
        (category ? g.category.includes(category) : true) &&
        (source ? g.source.toLowerCase().includes(source.toLowerCase()) : true)
    );
  }, [games, search, category, source]);

  // 📄 Pagination
  const gamesPerPage = 4;
  const totalPages = Math.ceil(filteredGames.length / gamesPerPage);
  const startIndex = (currentPage - 1) * gamesPerPage;
  const currentGames = filteredGames.slice(startIndex, startIndex + gamesPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Info Banner */}
      <div className="bg-yellow-100 border border-yellow-400 text-yellow-800 px-4 py-3 rounded relative mb-4 flex justify-between items-center">
        <span>(Admin Demo) Note: All actions are not saved.</span>
        <button className="text-yellow-700 hover:text-yellow-900">×</button>
      </div>

      <h3 className="text-2xl font-semibold mb-6">🎮 Game List</h3>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search game..."
            className="w-full pl-10 pr-3 py-2 border rounded-lg shadow-sm focus:ring focus:ring-blue-200"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <span className="absolute left-3 top-2.5 text-gray-400">
            <i className="fa fa-search"></i>
          </span>
        </div>

        <select
          className="w-full border rounded-lg shadow-sm px-3 py-2 focus:ring focus:ring-blue-200"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Category</option>
          <option>Arcade</option>
          <option>Action</option>
          <option>Puzzle</option>
          <option>Adventure</option>
          <option>Strategy</option>
          <option>Racing</option>
          <option>Board</option>
        </select>

        <div className="relative">
          <input
            type="text"
            placeholder="Source"
            className="w-full pl-10 pr-3 py-2 border rounded-lg shadow-sm focus:ring focus:ring-blue-200"
            value={source}
            onChange={(e) => setSource(e.target.value)}
          />
          <span className="absolute left-3 top-2.5 text-gray-400">
            <i className="fa fa-code"></i>
          </span>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto shadow rounded-lg bg-white">
        <table className="min-w-full text-sm text-gray-700">
          <thead className="bg-gray-200 text-gray-600 uppercase text-xs">
            <tr>
              <th className="px-4 py-3 text-left">#</th>
              <th className="px-4 py-3 text-left">ID</th>
              <th className="px-4 py-3 text-left">Thumbnail</th>
              <th className="px-4 py-3 text-left">Game Name</th>
              <th className="px-4 py-3 text-left">Category</th>
              <th className="px-4 py-3 text-left">Source</th>
              <th className="px-4 py-3 text-left">URL</th>
              <th className="px-4 py-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentGames.map((game, index) => (
              <tr key={game.id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-3">{startIndex + index + 1}</td>
                <td className="px-4 py-3 font-semibold">{game.id}</td>
                <td className="px-4 py-3">
                  <img
                    src={game.thumb}
                    alt={game.name}
                    className="w-16 h-auto rounded-md shadow-sm"
                  />
                </td>
                <td className="px-4 py-3">{game.name}</td>
                <td className="px-4 py-3">
                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs">
                    {game.category}
                  </span>
                </td>
                <td className="px-4 py-3">{game.source}</td>
                <td className="px-4 py-3">
                  <a
                    href={game.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Play
                  </a>
                </td>
                <td className="px-4 py-3 flex space-x-3">
                  <button className="text-yellow-500 hover:text-yellow-700">
                    <i className="fa fa-pencil-alt"></i>
                  </button>
                  <button className="text-red-500 hover:text-red-700">
                    <i className="fa fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6 space-x-2">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-1 border rounded-md hover:bg-blue-50 disabled:opacity-50"
        >
          Prev
        </button>

        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`px-3 py-1 rounded-md ${
              currentPage === index + 1
                ? "bg-blue-600 text-white"
                : "border hover:bg-blue-50"
            }`}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-1 border rounded-md hover:bg-blue-50 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Banner;
