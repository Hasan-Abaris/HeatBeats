import React from "react";

function Gamecategories() {
  const games = [
    {
      name: "Unblock Cube 3D",
      img: "https://theme.cloudarcade.net/thumbs/unblock-cube-3d-unblock-cube-3d-b2d6554a0200418cbe03a42d6e515a80-512x512_small.webp",
      rating: "3.3",
      reviews: "46",
      link: "/Games/Gamesdetail",
    },
    {
      name: "Unload the Fridge",
      img: "https://theme.cloudarcade.net/thumbs/unload-the-fridge-unload-the-fridge-c33d8b9400b94da09e6ab4733131b16b-512x512_small.webp",
      rating: "3.5",
      reviews: "10",
      link: "/Games/Gamesdetail",
    },
    {
      name: "Car Simulator Arena",
      img: "https://theme.cloudarcade.net/thumbs/car-simulator-arena-car-simulator-arena-3d3a60a0a52d4b49a7b38dd67108df26-512x512_small.webp",
      rating: "4.0",
      reviews: "31",
      link: "/Games/Gamesdetail",
    },
    {
      name: "Drift Hunters",
      img: "https://theme.cloudarcade.net/thumbs/drift-hunters-drift-hunters-5a4e49df4a124d30a9b43d460e2320c3-512x512_small.webp",
      rating: "4.6",
      reviews: "78",
      link: "/Games/Gamesdetail",
    },
    {
      name: "Pop It Knockout Royale",
      img: "https://theme.cloudarcade.net/thumbs/pop-it-knockout-royale-pop-it-knockout-royale-eb026326c0b845878187f0f14e6bcb1b-512x512_small.jpeg",
      rating: "3.9",
      reviews: "22",
      link: "/Games/Gamesdetail",
    },
    {
      name: "Mermaids Tail Rush",
      img: "https://theme.cloudarcade.net/thumbs/mermaids-tail-rush-mermaids-tail-rush-b54888b2351846bfa77ad95aee969705-512x512_small.jpeg",
      rating: "4.2",
      reviews: "30",
      link: "/Games/Gamesdetail",
    },
    {
      name: "Super Portal Maze 3D",
      img: "https://theme.cloudarcade.net/thumbs/super-portal-maze-3d-super-portal-maze-3d-9be6809f61854e20b9a429016a67a087-512x512_small.jpeg",
      rating: "3.8",
      reviews: "12",
      link: "/Games/Gamesdetail",
    },
    {
      name: "Draw Bullet Master",
      img: "https://theme.cloudarcade.net/thumbs/draw-bullet-master-draw-bullet-master-7b9412e7ff9141ff8346e35db8456b76-512x512_small.jpeg",
      rating: "4.1",
      reviews: "20",
      link: "/Games/Gamesdetail",
    },
    {
      name: "Clash of Stone",
      img: "https://theme.cloudarcade.net/thumbs/clash-of-stone-clash-of-stone-86d4c891c46b4731ae1f730733c10c54-512x512_small.jpeg",
      rating: "3.7",
      reviews: "19",
      link: "/Games/Gamesdetail",
    },
    {
      name: "Popcorn Box 3D",
      img: "https://theme.cloudarcade.net/thumbs/popcorn-box-3d-popcorn-box-3d-57a1f29b6db74d839cd6a4e3dc9313d9-512x512_small.webp",
      rating: "4.5",
      reviews: "25",
      link: "/Games/Gamesdetail",
    },
    {
      name: "Jump Dunk 3D",
      img: "https://theme.cloudarcade.net/thumbs/jump-dunk-3d-jump-dunk-3d-1f2e17341b344cf68941df7485366b4b-512x512_small.webp",
      rating: "4.0",
      reviews: "33",
      link: "/Games/Gamesdetail",
    },
    {
      name: "Bridge Water Rush",
      img: "https://theme.cloudarcade.net/thumbs/bridge-water-rush-bridge-water-rush-078792b6b4cf4630ad7cc06671b12d5d-512x512_small.jpeg",
      rating: "3.9",
      reviews: "18",
      link: "/Games/Gamesdetail",
    },
    {
      name: "Fun Race 3D",
      img: "https://theme.cloudarcade.net/thumbs/fun-race-3d-fun-race-3d-6c84ac22a43145b385bde540af5d81bb-512x512_small.webp",
      rating: "4.3",
      reviews: "41",
      link: "/Games/Gamesdetail",
    },
    {
      name: "Impostor Royal Killer",
      img: "https://theme.cloudarcade.net/thumbs/impostor-royal-killer-impostor-royal-killer-9ce1fb16ad5d42d99e16be4cb9bb15fb-512x512_small.jpeg",
      rating: "4.1",
      reviews: "24",
      link: "/Games/Gamesdetail",
    },
    {
      name: "Parkour Race",
      img: "https://theme.cloudarcade.net/thumbs/parkour-race-parkour-race-b08112e2eab04c2f93868f338267a01b-512x512_small.webp",
      rating: "4.4",
      reviews: "56",
      link: "/Games/Gamesdetail",
    },
    {
      name: "Cannon Ball Shoot",
      img: "https://theme.cloudarcade.net/thumbs/cannon-ball-shoot-cannon-ball-shoot-f09382fbc7854d9fa2c26f963d6e14a8-512x512_small.jpeg",
      rating: "3.6",
      reviews: "14",
      link: "/Games/Gamesdetail",
    },
    {
      name: "Draw Fighter 3D",
      img: "https://theme.cloudarcade.net/thumbs/draw-fighter-3d-draw-fighter-3d-580fa8f5402843d5ac801bfe89067619-512x512_small.jpeg",
      rating: "3.9",
      reviews: "17",
      link: "/Games/Gamesdetail",
    },
    {
      name: "City Bus Driver",
      img: "https://theme.cloudarcade.net/thumbs/city-bus-driver-city-bus-driver-5dca8da5fa8c487a83e8914ff8c59e53-512x512_small.webp",
      rating: "4.5",
      reviews: "29",
      link: "/Games/Gamesdetail",
    },
    {
      name: "Rope Help",
      img: "https://theme.cloudarcade.net/thumbs/rope-help-rope-help-3f92482a9c4a40e2a7e17446d69380eb-512x512_small.webp",
      rating: "3.8",
      reviews: "16",
      link: "/Games/Gamesdetail"
    },
    {
      name: "Rope Man Run",
      img: "https://theme.cloudarcade.net/thumbs/rope-man-run-rope-man-run-5df9b1d31a604b8d9d953e17489d21eb-512x512_small.jpeg",
      rating: "3.7",
      reviews: "13",
      link: "/Games/Gamesdetail",
    },
    {
      name: "Bridge Builder 3D",
      img: "https://theme.cloudarcade.net/thumbs/bridge-builder-3d-bridge-builder-3d-2f1e24699a844a4a8bdfda479aa9a3cd-512x512_small.webp",
      rating: "4.1",
      reviews: "22",
      link: "/Games/Gamesdetail",
    },
    {
      name: "Color Roll 3D",
      img: "https://theme.cloudarcade.net/thumbs/color-roll-3d-color-roll-3d-5b81e6a86d5c41a6aa6013c88f8a1cc2-512x512_small.webp",
      rating: "4.2",
      reviews: "34",
      link: "/Games/Gamesdetail",
    },
    {
      name: "Crazy Roll 3D",
      img: "https://theme.cloudarcade.net/thumbs/crazy-roll-3d-crazy-roll-3d-81a5eb2b0e9d4b9dbed6b1ce2731d3e4-512x512_small.webp",
      rating: "4.7",
      reviews: "62",
      link: "/Games/Gamesdetail",
    },
    {
      name: "Drift Boss",
      img: "https://theme.cloudarcade.net/thumbs/drift-boss-drift-boss-d2a8eb7b6ec04b58ac8e6c3f799c51d8-512x512_small.webp",
      rating: "4.3",
      reviews: "52",
      link: "/Games/Gamesdetail",
    },
    {
      name: "Slope",
      img: "https://theme.cloudarcade.net/thumbs/slope-slope-4d4c6211a17343a0b3edb6b247028c0f-512x512_small.webp",
      rating: "4.9",
      reviews: "89",
      link: "/Games/Gamesdetail",
    },
  ];

  return (
    <div className="px-6 py-8">
      {/* Section Title */}
      <div className="mb-6 border-b border-gray-200 pb-4">
        <h3 className="flex items-center text-3xl font-semibold text-gray-900">
          <span className="g-icon w-10 h-10 flex items-center justify-center mr-2">
            <img
              src="https://theme.cloudarcade.net/content/themes/arcade-one/images/icon/3d.svg"
              alt="3D"
              className="w-8 h-8"
            />
          </span>
          3D Games
        </h3>
        <p className="text-gray-600 mt-1">25 games in total. Page 1 of 1</p>
      </div>

      {/* Category Description */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 mb-8">
        <h4 className="text-gray-700 leading-relaxed">
          Step into a new dimension of fun with our exciting collection of 3D
          games! Enjoy realistic environments, thrilling adventures, and
          mind-bending challenges — all designed to immerse you in dynamic
          gameplay experiences. Whether you love racing, puzzles, or action, our
          3D world has something for everyone.
        </h4>
      </div>

      {/* Games Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {games.map((game, index) => (
          <a
            key={index}
            href={game.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition duration-200 overflow-hidden"
          >
            <div className="relative">
              <img
                src={game.img}
                alt={game.name}
                className="w-full h-40 object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition bg-black/40">
                <img
                  src="https://theme.cloudarcade.net/content/themes/arcade-one/images/icon/play.svg"
                  alt="Play"
                  className="w-10 h-10"
                />
              </div>
            </div>

            <div className="p-3 text-center">
              <h5 className="font-semibold text-gray-900 text-base mb-1 truncate">
                {game.name}
              </h5>
              <span className="text-sm text-yellow-500 flex items-center justify-center gap-1">
                ⭐ {game.rating}{" "}
                <span className="text-gray-500">({game.reviews} Reviews)</span>
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Gamecategories;
