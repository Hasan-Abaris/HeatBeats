'use client'
import React, { useState } from 'react';

function Banner() {
  const [activeTab, setActiveTab] = useState('addgame');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Hidden input */}
      <input type="hidden" name="p_code" value="holy-moly" />

      {/* Tabs */}
      <ul className="flex border-b mb-6">
        {[
          { id: 'addgame', label: 'Upload Game' },
          { id: 'fetch', label: 'Fetch Games' },
          { id: 'remote', label: 'Remote Add' },
          { id: 'json', label: 'JSON Importer' },
        ].map((tab) => (
          <li key={tab.id} className="mr-4">
            <button
              onClick={() => handleTabClick(tab.id)}
              className={`px-4 py-2 font-semibold rounded-t-lg focus:outline-none ${
                activeTab === tab.id
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              {tab.label}
            </button>
          </li>
        ))}
      </ul>

      {/* Tab content */}
      <div>
        {/* Upload Game Tab */}
        {activeTab === 'addgame' && (
          <form className="bg-white shadow-md rounded-lg p-6 space-y-4">
            <input type="hidden" name="source" value="self" />
            <input type="hidden" name="tags" value="" />

            <div>
              <label className="block font-medium mb-1">Game Title:</label>
              <input type="text" name="title" required className="w-full border rounded p-2" />
            </div>

            <div>
              <label className="block font-medium mb-1">Description:</label>
              <textarea name="description" rows="3" required className="w-full border rounded p-2"></textarea>
            </div>

            <div>
              <label className="block font-medium mb-1">Instructions:</label>
              <textarea name="instructions" rows="3" className="w-full border rounded p-2"></textarea>
            </div>

            <div>
              <label className="block font-medium mb-1">Game File (.zip):</label>
              <input type="file" name="gamefile" accept=".zip" className="w-full" />
              <ul className="text-sm text-gray-600 mt-1 list-disc ml-5">
                <li>Must contain index.html on root</li>
                <li>Must contain "thumb_1.jpg" (512x384px) on root</li>
                <li>Must contain "thumb_2.jpg" (512x512px) on root</li>
              </ul>
            </div>

            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block font-medium mb-1">Game Width:</label>
                <input type="number" name="width" defaultValue={1280} required className="w-full border rounded p-2" />
              </div>
              <div className="flex-1">
                <label className="block font-medium mb-1">Game Height:</label>
                <input type="number" name="height" defaultValue={720} required className="w-full border rounded p-2" />
              </div>
            </div>

            <div>
              <label className="block font-medium mb-1">Category:</label>
              <select multiple name="category[]" size="8" className="w-full border rounded p-2">
                {[
                  '.IO','2 Player','3D','Action','Adventure','Arcade','Bejeweled','Classics','Clicker',
                  'Cooking','Girls','Hypercasual','InGame Purchase','Multiplayer','Puzzle','Puzzles',
                  'Racing','Shooting','Social','Sports','Stickman'
                ].map((cat, i) => (
                  <option key={i}>{cat}</option>
                ))}
              </select>
            </div>

            <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
              Upload Game
            </button>
          </form>
        )}

        {/* Fetch Games Tab */}
        {activeTab === 'fetch' && (
          <div className="bg-white shadow-md rounded-lg p-6 space-y-4">
            <p className="text-gray-700">Fetch games from different distributors.</p>
            <select className="w-full border rounded p-2">
              <option hidden>Choose distributor...</option>
              <option value="gimcraft">GimCraft</option>
              <option value="gamedistribution">GameDistribution</option>
              <option value="gamepix">GamePix</option>
              <option value="playsaurus">Playsaurus</option>
              <option value="more-distributors">More</option>
            </select>
            <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 mt-2">
              Fetch Games
            </button>
          </div>
        )}

        {/* Remote Add Tab */}
        {activeTab === 'remote' && (
          <form className="bg-white shadow-md rounded-lg p-6 space-y-4">
            <div>
              <label className="block font-medium mb-1">Game Title:</label>
              <input type="text" name="title" required className="w-full border rounded p-2" />
            </div>
            <div>
              <label className="block font-medium mb-1">Game URL:</label>
              <input type="text" name="url" required placeholder="https://example.com/yourgames/index.html" className="w-full border rounded p-2" />
            </div>
            <div>
              <label className="block font-medium mb-1">Thumbnail 512x384:</label>
              <input type="text" name="thumb_1" required placeholder="https://example.com/thumb_1.jpg" className="w-full border rounded p-2" />
            </div>
            <div>
              <label className="block font-medium mb-1">Thumbnail 512x512:</label>
              <input type="text" name="thumb_2" required placeholder="https://example.com/thumb_2.jpg" className="w-full border rounded p-2" />
            </div>
            <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
              Add Game
            </button>
          </form>
        )}

        {/* JSON Importer Tab */}
        {activeTab === 'json' && (
          <form className="bg-white shadow-md rounded-lg p-6 space-y-4">
            <label className="block font-medium mb-1">Paste JSON data:</label>
            <textarea name="json-importer" rows="8" required className="w-full border rounded p-2"></textarea>
            <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
              Import
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Banner;
