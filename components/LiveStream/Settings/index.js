'use client';
import React, { useState } from 'react';

export default function Settingpage() {
  const [activeTab, setActiveTab] = useState('General');
  const [communitySubTab, setCommunitySubTab] = useState('Content controls');
  const [uploadSubTab, setUploadSubTab] = useState('Basic info');
  const [channelSubTab, setChannelSubTab] = useState('Basic info');
  const [keywords, setKeywords] = useState([
    '#InternetPersonalities',
    '#FamousPeople #Biography',
    '#Documentary',
    '#LifeStory #SuccessStory',
    '#InternetCelebrities',
    '#SocialMediaStars',
    '#InfluencerBiography',
    '#FamousInternetPersonalities',
  ]);
  const [newKeyword, setNewKeyword] = useState('');

  const tabs = [
    'General',
    'Channel',
    'Upload defaults',
    'Permissions',
    'Community moderation',
    'Creator demographics',
    'Agreements',
  ];

  // Add/remove keywords
  const handleAddKeyword = (e) => {
    e.preventDefault();
    if (newKeyword.trim() !== '') {
      setKeywords([...keywords, newKeyword.trim()]);
      setNewKeyword('');
    }
  };
  const handleRemoveKeyword = (k) =>
    setKeywords(keywords.filter((x) => x !== k));

  /** -------------------- Community Moderation -------------------- */
  const renderCommunityModeration = () => (
    <div>
      {/* Sub-tabs */}
      <div className="flex border-b mb-6">
        {['Content controls', 'User management'].map((subTab) => (
          <button
            key={subTab}
            className={`mr-6 pb-2 text-sm font-medium ${
              communitySubTab === subTab
                ? 'border-b-2 border-blue-600 text-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setCommunitySubTab(subTab)}
          >
            {subTab}
          </button>
        ))}
      </div>

      {communitySubTab === 'Content controls' ? (
        <div className="space-y-6">
          <h3 className="text-lg font-semibold">Comments and posts</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Comments</label>
              <p className="border rounded-md p-2 bg-gray-50">On</p>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Moderation</label>
              <p className="border rounded-md p-2 bg-gray-50">Basic</p>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">Blocked words</h3>
            <textarea
              rows="3"
              className="border rounded-md w-full p-2 bg-gray-50 text-sm"
              placeholder="Separate words with commas..."
            />
          </div>
        </div>
      ) : (
        <div>
          <h3 className="text-lg font-semibold mb-4">User management</h3>
          <input
            type="text"
            className="border rounded-md p-2 w-full bg-gray-50"
            placeholder="Add moderator channel URL"
          />
        </div>
      )}
    </div>
  );

  /** -------------------- Main Tab Content -------------------- */
  const renderTabContent = () => {
    switch (activeTab) {
      case 'General':
        return (
          <div>
            <h3 className="text-lg font-semibold mb-4">Default units</h3>
            <label className="block text-sm font-medium mb-2">Currency</label>
            <select className="border rounded-md p-2 w-60 bg-gray-50">
              <option>INR – Indian Rupee</option>
              <option>USD – US Dollar</option>
              <option>EUR – Euro</option>
            </select>
          </div>
        );

      case 'Channel':
        return (
          <div>
            <div className="flex border-b mb-6">
              {['Basic info', 'Advanced settings', 'Feature eligibility'].map(
                (tab) => (
                  <button
                    key={tab}
                    onClick={() => setChannelSubTab(tab)}
                    className={`mr-6 pb-2 text-sm font-medium ${
                      channelSubTab === tab
                        ? 'border-b-2 border-blue-600 text-blue-600'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    {tab}
                  </button>
                )
              )}
            </div>

            {channelSubTab === 'Basic info' && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Country of residence
                  </label>
                  <select className="border rounded-md p-2 w-80 bg-gray-50">
                    <option>India</option>
                    <option>United States</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Keywords
                  </label>
                  <div className="flex flex-wrap gap-2 border p-3 rounded-md bg-white min-h-[90px]">
                    {keywords.map((keyword) => (
                      <div
                        key={keyword}
                        className="flex items-center bg-gray-100 text-sm px-2 py-1 rounded-full"
                      >
                        {keyword}
                        <button
                          onClick={() => handleRemoveKeyword(keyword)}
                          className="ml-2 text-gray-500 hover:text-gray-700"
                        >
                          ✕
                        </button>
                      </div>
                    ))}
                  </div>

                  <form onSubmit={handleAddKeyword} className="mt-3 flex gap-2">
                    <input
                      type="text"
                      className="border rounded-md p-2 w-72 text-sm bg-gray-50"
                      placeholder="Add keyword (e.g. #Biography)"
                      value={newKeyword}
                      onChange={(e) => setNewKeyword(e.target.value)}
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700"
                    >
                      Add
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>
        );

      case 'Upload defaults':
        return (
          <div>
            <div className="flex border-b mb-6">
              {['Basic info', 'Advanced settings'].map((subTab) => (
                <button
                  key={subTab}
                  onClick={() => setUploadSubTab(subTab)}
                  className={`mr-6 pb-2 text-sm font-medium ${
                    uploadSubTab === subTab
                      ? 'border-b-2 border-blue-600 text-blue-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {subTab}
                </button>
              ))}
            </div>

            {uploadSubTab === 'Basic info' && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-1">Title</label>
                  <input
                    type="text"
                    className="border rounded-md w-full p-2 bg-gray-50"
                    placeholder="Add a title that describes your video"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Description
                  </label>
                  <textarea
                    rows="4"
                    className="border rounded-md w-full p-2 bg-gray-50"
                    placeholder="Tell viewers about your video"
                  />
                </div>
              </div>
            )}
          </div>
        );

      case 'Community moderation':
        return renderCommunityModeration();

      case 'Creator demographics':
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">
              Help make YouTube more inclusive
            </h3>
            <p className="text-sm text-gray-600">
              Provide demographic info to help improve creator diversity.
            </p>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md">
              Take survey
            </button>
          </div>
        );

      default:
        return <p>Coming soon...</p>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <header className="bg-white border-b shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <h1 className="text-2xl font-semibold text-gray-800">Settings</h1>
        </div>

        {/* Top Tabs */}
        <nav className="border-t bg-gray-50">
          <div className="max-w-7xl mx-auto flex flex-wrap gap-4 px-6">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-3 pt-3 text-sm font-medium border-b-2 transition ${
                  activeTab === tab
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-600 hover:text-gray-800'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </nav>
      </header>

      {/* Tab Content */}
      <main className="max-w-7xl mx-auto p-8 bg-white mt-6 rounded-xl shadow-sm">
        {renderTabContent()}
      </main>
    </div>
  );
}
