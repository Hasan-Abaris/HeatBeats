import React from "react";

export default function Initial() {
  return (
    <div className="flex flex-col lg:flex-row w-full gap-6 p-6 bg-gray-50">
      {/* LEFT SIDE - Game Splash Section */}
      <div className="flex-1 bg-white rounded-xl shadow-md p-6">
        <div className="pluto-splash-container">
          <div className="pluto-splash-center">
            <div
              id="pluto-splash-game"
              className="pluto-splash-game flex flex-col items-center text-center"
            >
              {/* Game Thumbnail + Play Button */}
              <div className="pluto-splash-game-thumbnail-play mb-4">
                <div className="pluto-splash-game-thumbnail mb-4">
                  <div
                    className="w-48 h-48 rounded-lg bg-cover bg-center mx-auto"
                    style={{
                      backgroundImage:
                        "url('https://img.gamedistribution.com/b2d6554a0200418cbe03a42d6e515a80-512x512.jpeg')",
                    }}
                  ></div>
                </div>
                <div className="pluto-splash-game-play">
                  <button className="bg-[#76b900] text-white px-6 py-2 rounded-md font-semibold hover:bg-[#76b900]">
                    PLAY
                  </button>
                </div>
              </div>

              {/* Game Title */}
              <div className="pluto-splash-game-title mt-4">
                <p className="text-2xl font-bold text-gray-800">
                  Unblock Cube 3D
                </p>
              </div>

              {/* Game Description */}
              <div className="pluto-splash-game-description mt-4">
                <p className="text-gray-600 leading-relaxed text-base">
                  Super popular puzzle from mobile now here! <br />
                  Unblock Cube 3D is a relaxing puzzle game. Swipe to rotate the
                  cube and tap the blocks to make them fly away and clear the
                  levels. Blocks only move in one direction, so plan carefully!
                  <br />
                  Train your brain by clearing levels, earn rewards, and enjoy
                  endless fun!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE - Widgets */}
      <div className="w-full lg:w-1/3 flex flex-col gap-6">
        {/* New Games Section */}
        <div className="bg-white rounded-xl shadow-md p-4">
          <h4 className="text-lg font-bold mb-4 border-b pb-2 text-[#76b900]">New Games</h4>
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
