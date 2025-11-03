import React from "react";

function Banner() {
  return (
    <div className="pluto-splash-container flex flex-col items-center justify-center bg-blue-300 text-white min-h-screen p-6">
      {/* Abstract / Background Placeholder */}
      <div
        id="pluto-splash-abstract"
        className="pluto-splash-abstract absolute inset-0 opacity-10 bg-gradient-to-b via-gray-900 to-black"
      ></div>

      {/* Top Slot (hidden) */}
      <div
        id="pluto-splash-slot-top"
        className="pluto-splash-top hidden"
      ></div>

      {/* Center Section */}
      <div className="pluto-splash-center flex items-center justify-center relative z-10">
        {/* Left Ad Slot (hidden) */}
        <div
          id="pluto-splash-slot-left"
          className="pluto-splash-left hidden"
        ></div>

        {/* Game Content */}
        <div
          id="pluto-splash-game"
          className="pluto-splash-game bg-gray-900 rounded-2xl shadow-lg border border-gray-800 p-6 max-w-xl w-full"
        >
          {/* Game Metadata */}
          <div className="pluto-splash-game-metadata flex flex-col items-center text-center">
            {/* Game Thumbnail + Play Button */}
            <div className="pluto-splash-game-thumbnail-play mb-6">
              <div className="pluto-splash-game-thumbnail w-48 h-48 mx-auto mb-4 rounded-xl overflow-hidden border border-gray-700">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage:
                      'url("https://img.gamedistribution.com/b2d6554a0200418cbe03a42d6e515a80-512x512.jpeg")',
                  }}
                ></div>
              </div>

              <div className="pluto-splash-game-play">
                <button
                  id="pluto-splash-button"
                  className="bg-red-600 hover:bg-red-700 px-8 py-2 rounded-lg text-lg font-semibold text-white transition duration-300"
                >
                  PLAY
                </button>
                <div
                  className="pluto-loader hidden mt-2 text-gray-400"
                  id="pluto-loader"
                >
                  Loading...
                </div>
              </div>
            </div>

            {/* Game Title */}
            <div className="pluto-splash-game-title mb-2">
              <p className="text-2xl font-bold text-white">Unblock Cube 3D</p>
            </div>

            {/* Game Description */}
            <div className="pluto-splash-game-description max-w-lg">
              <p className="text-gray-300 text-sm leading-relaxed">
                Super popular puzzle from mobile games now here! <br />
                <br />
                <strong>Unblock Cube 3D</strong> is a super relaxing puzzle game.
                Swipe to rotate the cube and tap the blocks to make them fly away
                and clear the levels. Blocks will only move in one direction, so
                you’ve got to approach this brain teaser carefully! <br />
                <br />
                Train your brain by clearing levels, earn rewards, and have fun
                while improving your logic skills!
              </p>
            </div>
          </div>

          {/* Consent Message (hidden by default) */}
          <div
            className="pluto-splash-game-consent hidden mt-6 text-xs text-gray-400"
            id="pluto-splash-game-consent"
          >
            <p>
              We may show personalized ads provided by our partners, and our
              services cannot be used by children under 16 years old without the
              consent of their legal guardian. By clicking "PLAY", you consent to
              transmit your data to our partners for advertising purposes and
              declare that you are 16 years old or have permission from your legal
              guardian. Review our terms{" "}
              <a
                href="https://static.gamedistribution.com/terms/both.html"
                target="_blank"
                className="underline text-blue-400"
                rel="noopener noreferrer"
              >
                here
              </a>.
            </p>
          </div>
        </div>

        {/* Right Ad Slot (hidden) */}
        <div
          id="pluto-splash-slot-right"
          className="pluto-splash-right hidden"
        ></div>
      </div>

      {/* Bottom Slot (hidden) */}
      <div
        id="pluto-splash-slot-bottom"
        className="pluto-splash-bottom hidden"
      ></div>
    </div>
  );
}

export default Banner;
