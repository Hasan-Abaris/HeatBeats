import React from "react";
import { BsJoystick, BsStarFill, BsChevronDown } from "react-icons/bs";

function Newgames() {
  const games = [
    {
      title: "Ten (10)",
      img: "https://theme.cloudarcade.net/thumbs/ten-10_2.webp",
      rating: "3.6 (21)",
      link: "https://theme.cloudarcade.net/game/ten-10/",
    },
    {
      title: "Anti Virus Game",
      img: "https://theme.cloudarcade.net/thumbs/anti-virus-game_2.webp",
      rating: "4.1 (16)",
      link: "https://theme.cloudarcade.net/game/anti-virus-game/",
    },
    {
      title: "Memory Match",
      img: "https://theme.cloudarcade.net/games/memory-match/memory-match-thumb_2_small.jpg",
      rating: "3.8 (99)",
      link: "https://theme.cloudarcade.net/game/memory-match/",
    },
    {
      title: "Tennis",
      img: "https://theme.cloudarcade.net/games/tennis/tennis-thumb_2_small.jpg",
      rating: "3.9 (70)",
      link: "https://theme.cloudarcade.net/game/tennis/",
    },
    {
      title: "Skydom Reforged",
      img: "https://theme.cloudarcade.net/thumbs/skydom-reforged-skydom-reforged-94529c23cb094231a768b74f808d5cd0-512x512_small.webp",
      rating: "3.8 (52)",
      link: "https://theme.cloudarcade.net/game/skydom-reforged/",
    },
    {
      title: "Unblock Cube 3D",
      img: "https://theme.cloudarcade.net/thumbs/unblock-cube-3d-unblock-cube-3d-b2d6554a0200418cbe03a42d6e515a80-512x512_small.webp",
      rating: "3.3 (46)",
      link: "https://theme.cloudarcade.net/game/unblock-cube-3d/",
    },
    {
      title: "Pair Up",
      img: "https://theme.cloudarcade.net/thumbs/pair-up-pair-up-1dcfbb7f95d845009db9f6f5cf808642-512x512_small.webp",
      rating: "3.9 (19)",
      link: "https://theme.cloudarcade.net/game/pair-up/",
    },
    {
      title: "SmileyWorld Match",
      img: "https://theme.cloudarcade.net/thumbs/smileyworld-match-smileyworld-match-930c56c9df07432f9052e80ba020085e-512x512_small.webp",
      rating: "4.6 (12)",
      link: "https://theme.cloudarcade.net/game/smileyworld-match/",
    },
    {
      title: "Fill Pix",
      img: "https://theme.cloudarcade.net/thumbs/fill-pix-fill-pix-05a9f4d59cdd4f66a316a7dc0ff1b543-512x512_small.webp",
      rating: "4.2 (12)",
      link: "https://theme.cloudarcade.net/game/fill-pix/",
    },
    {
      title: "Break Your Brain",
      img: "https://theme.cloudarcade.net/thumbs/break-your-brain-break-your-brain-8a006e4993134ddaa9b0179158431fae-512x512_small.webp",
      rating: "3.9 (14)",
      link: "https://theme.cloudarcade.net/game/break-your-brain/",
    },
  ];

  return (
    <section className="section-newgames py-10 px-6 md:px-12 text-white">
      {/* Section Heading */}
      <h2 className="section-title flex items-center gap-2 text-2xl font-bold text-[#76b900] mb-8">
        <BsJoystick className="text-white" />
        <span className="text-black">New Games</span>
      </h2>

      {/* Game Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6" id="new-games-section">
        {games.map((game, index) => (
          <article key={index} className="game-card bg-zinc-900 rounded-xl overflow-hidden shadow-md hover:shadow-[#76b900]/40 transition">
            <a href={game.link} target="_blank" rel="noopener noreferrer" className="block">
              <figure className="w-full h-40 overflow-hidden">
                <img
                  src={game.img}
                  alt={game.title}
                  className="object-cover w-full h-full hover:scale-110 transition-transform duration-300"
                />
              </figure>
              <div className="p-4">
                <h3 className="text-base font-semibold text-white truncate">{game.title}</h3>
                <div className="text-sm text-gray-400 flex items-center gap-1 mt-1">
                  <BsStarFill className="text-[#76b900]" /> {game.rating}
                </div>
              </div>
            </a>
          </article>
        ))}
      </div>

      {/* Load More Button */}
      <div className="text-center mt-10">
        <button className="btn btn-load-more bg-[#76b900] text-black font-semibold px-6 py-2 rounded-md flex items-center gap-2 mx-auto hover:bg-white transition">
          Load More <BsChevronDown />
        </button>
      </div>
    </section>
  );
}

export default Newgames;
