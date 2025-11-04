import React from "react";

function GameDescrip() {
  return (
    <div className="flex flex-col lg:flex-row gap-8 mt-10 px-4 lg:px-10">
      {/* LEFT SIDE: Description */}
      <div className="flex-1 bg-white p-6 rounded-xl shadow">
        {/* Description */}
        <h5 className="text-xl font-semibold text-[#76b900] mb-2">Description:</h5>
        <div className="text-gray-700 leading-relaxed mb-6">
          Super popular puzzle from mobile games now here.
          <br />
          <br />
          <strong>Unblock Cube 3D</strong> — a super relaxing puzzle game.
          Swipe to rotate the cube and tap the blocks to make them fly away and
          clear the levels. Blocks move in one direction only, so approach this
          brain teaser carefully!
          <br />
          Train your brain by clearing levels, earning rewards, and improving
          your focus.
        </div>

        {/* Instructions */}
        <h5 className="text-xl font-semibold text-[#76b900] mb-2">Instructions:</h5>
        <div className="text-gray-700 leading-relaxed mb-6">
          Tap to remove, <br />
          Swipe to rotate.
        </div>

        {/* Categories */}
        <h5 className="text-xl font-semibold text-[#76b900] mb-2">Categories:</h5>
        <div className="flex flex-wrap gap-3 mb-6">
          <a
            href="https://theme.cloudarcade.net/category/3d/"
            className="flex items-center gap-2 bg-blue-50 border border-blue-200 px-4 py-2 rounded-full hover:bg-blue-100 transition"
          >
            <img
              src="https://theme.cloudarcade.net/content/themes/arcade-one/images/icon/3d.svg"
              alt="3D"
              width="24"
              height="24"
            />
            <span className="text-blue-700 font-medium">3D</span>
          </a>
          <a
            href="https://theme.cloudarcade.net/category/puzzle/"
            className="flex items-center gap-2 bg-blue-50 border border-blue-200 px-4 py-2 rounded-full hover:bg-blue-100 transition"
          >
            <img
              src="https://theme.cloudarcade.net/content/themes/arcade-one/images/icon/puzzle.svg"
              alt="Puzzle"
              width="24"
              height="24"
            />
            <span className="text-blue-700 font-medium">Puzzle</span>
          </a>
        </div>

        {/* Tags Section */}
        <h5 className="text-xl font-semibold text-[#76b900] mb-2">Tags:</h5>
        <div className="flex flex-wrap gap-3">
          <a
            href="#"
            className="bg-gray-100 text-gray-700 px-4 py-1.5 rounded-full text-sm hover:bg-gray-200 transition"
          >
            Tik Tik
          </a>
          <a
            href="#"
            className="bg-gray-100 text-gray-700 px-4 py-1.5 rounded-full text-sm hover:bg-gray-200 transition"
          >
            Cube Cube
          </a>
        </div>

        {/* Comments Section */}
        <div className="mt-10">
          <h5 className="text-xl font-semibold text-[#76b900] mb-3">Comments</h5>
          <div className="flex items-start gap-3">
            <img
              src="https://theme.cloudarcade.net/images/default_profile.png"
              alt="User Avatar"
              className="w-10 h-10 rounded-full"
            />
            <div className="bg-gray-50 border border-gray-200 p-3 rounded-lg text-gray-600">
              You must log in to write a comment.
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE: Popular Games Widget */}
      <div className="w-full lg:w-1/3 bg-white p-6 rounded-xl shadow">
        <h4 className="text-xl font-semibold text-[#76b900] mb-4">
          Popular Games
        </h4>

        <div className="space-y-4">
          {[
            {
              title: "Memory Match",
              category: "Arcade, Clicker, Puzzle",
              img: "https://theme.cloudarcade.net/games/memory-match/memory-match-thumb_2_small.jpg",
              link: "https://theme.cloudarcade.net/game/memory-match/",
            },
            {
              title: "Tennis",
              category: "Arcade, Sports",
              img: "https://theme.cloudarcade.net/games/tennis/tennis-thumb_2_small.jpg",
              link: "https://theme.cloudarcade.net/game/tennis/",
            },
            {
              title: "Knife Jump",
              category: "Hypercasual",
              img: "https://theme.cloudarcade.net/thumbs/knife-jump-knife-jump-2e17eaa71f3a4cc1a58d7a17813465f8-512x512_small.jpeg",
              link: "https://theme.cloudarcade.net/game/knife-jump/",
            },
          ].map((game, index) => (
            <a
              href={game.link}
              key={index}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 hover:bg-gray-50 p-2 rounded-lg transition"
            >
              <img
                src={game.img}
                alt={game.title}
                className="w-16 h-16 rounded-md object-cover"
              />
              <div>
                <div className="font-medium text-gray-800">{game.title}</div>
                <div className="text-xs text-gray-500">{game.category}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GameDescrip;
