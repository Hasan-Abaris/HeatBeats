import React from "react";

function Similargames() {
  const games = [
    {
      title: "Unload the Fridge",
      rating: "3.5 (10 Reviews)",
      img: "https://theme.cloudarcade.net/thumbs/unload-the-fridge-unload-the-fridge-c33d8b9400b94da09e6ab4733131b16b-512x512_small.webp",
      link: "/Games/Gamesdetail",
    },
    {
      title: "Winter Warm Up Math",
      rating: "0 (0 Reviews)",
      img: "https://theme.cloudarcade.net/thumbs/winter-warm-up-math-winter-warm-up-math-37b9d9682fd44cac94b367ae8ed1c09d-512x512_small.jpeg",
      link: "/Games/Gamesdetail",
    },
    {
      title: "Xmas Mahjong Deluxe",
      rating: "0 (0 Reviews)",
      img: "https://theme.cloudarcade.net/thumbs/xmas-mahjong-deluxe-xmas-mahjong-deluxe-8c9fb07e0c7945799035f76409b47121-512x512_small.jpeg",
      link: "/Games/Gamesdetail",
    },
    {
      title: "Daily Solitaire Blue",
      rating: "0 (0 Reviews)",
      img: "https://theme.cloudarcade.net/thumbs/daily-solitaire-blue-daily-solitaire-blue-e28872a3009d42d7b5580c95a71192fe-512x512_small.webp",
      link: "/Games/Gamesdetail",
    },
    {
      title: "Winter Pairs",
      rating: "0 (0 Reviews)",
      img: "https://theme.cloudarcade.net/thumbs/winter-pairs-winter-pairs-5b4ed3d1a9f8434c8dc9abc8c41b4242-512x512_small.jpeg",
      link: "/Games/Gamesdetail",
    },
    {
      title: "Infinite Heroes",
      rating: "0 (0 Reviews)",
      img: "https://theme.cloudarcade.net/thumbs/infinite-heroes-infinite-heroes-b30cbdd7de794f779fee2875a017d159-512x512_small.webp",
      link: "/Games/Gamesdetail",
    },
  ];

  return (
    <section className="similar-games mt-10">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="section-title flex items-center gap-3 mb-6">
          <span className="g-icon">
            <img
              src="https://theme.cloudarcade.net/content/themes/arcade-one/images/icon/similar.svg"
              alt="Similar Icon"
              width="40"
              height="40"
            />
          </span>
          <h3 className="text-2xl font-semibold  text-[#76b900]">
            Similar Games
          </h3>
        </div>

        {/* Game Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {games.map((game, index) => (
            <a
              href={game.link}
              target="_blank"
              rel="noreferrer"
              key={index}
              className="block bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden group"
            >
              <div className="relative">
                <img
                  src={game.img}
                  alt={game.title}
                  className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition bg-black/40">
                  <img
                    src="https://theme.cloudarcade.net/content/themes/arcade-one/images/icon/play.svg"
                    alt="Play Icon"
                    className="w-10 h-10"
                  />
                </div>
              </div>
              <div className="p-3">
                <div className="text-sm font-medium text-gray-800 truncate">
                  {game.title}
                </div>
                <div className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                  <i className="bi bi-star-fill text-yellow-400"></i>
                  {game.rating}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Similargames;
