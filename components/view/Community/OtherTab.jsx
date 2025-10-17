import React from "react";

const OtherTab = () => {
  const games = [
    {
      id: "117890",
      title: "iQOO Esports Showdown 2025",
      description: "Join the ultimate esports battle featuring PUBG Mobile and BGMI! Compete for cash prizes and exclusive iQOO gear. Registration closes Oct 25, 2025.",
      views: 2450,
      comments: 320,
      likes: 450,
      time: "Oct 17, 2025 02:00 PM IST",
      link: "https://community.iqoo.com/in/event/117890",
    },
    {
      id: "117891",
      title: "Mobile Gaming Marathon",
      description: "Test your stamina with a 24-hour gaming marathon. Top players win iQOO 13 Pro devices. Starts Oct 18, 2025, 6:00 PM IST.",
      views: 1800,
      comments: 210,
      likes: 300,
      time: "Oct 17, 2025 01:30 PM IST",
      link: "https://community.iqoo.com/in/event/117891",
    },
    {
      id: "117892",
      title: "Retro Gaming Challenge",
      description: "Relive the classics with our NES and SNES emulation contest. Share your high scores for a chance to win retro-themed merchandise. Ends Oct 20, 2025.",
      views: 950,
      comments: 150,
      likes: 180,
      time: "Oct 17, 2025 12:45 PM IST",
      link: "https://community.iqoo.com/in/event/117892",
    },
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Gaming Events</h2>
      <div className="space-y-4">
        {games.map((game) => (
          <div
            key={game.id}
            className="bg-gray-800 text-white p-4 rounded-lg shadow-md hover:bg-gray-700 transition-colors"
          >
            <a href={game.link} className="block">
              <h3 className="text-xl font-semibold mb-2">{game.title}</h3>
              <p className="text-gray-300 mb-2 line-clamp-2">{game.description}</p>
              <div className="flex justify-between text-sm text-gray-400">
                <span>Views: {game.views}</span>
                <span>Comments: {game.comments}</span>
                <span>Likes: {game.likes}</span>
              </div>
              <div className="text-xs text-gray-500 mt-1">{game.time}</div>
            </a>
          </div>
        ))}
      </div>
      <p className="text-gray-600 mt-4">More gaming excitement coming soon!</p>
    </div>
  );
};

export default OtherTab;