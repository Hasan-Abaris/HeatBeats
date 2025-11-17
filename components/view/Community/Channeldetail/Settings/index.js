"use client";

import { useState } from "react";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("General");
  const [channelSubTab, setChannelSubTab] = useState("Basic info");
  const [uploadSubTab, setUploadSubTab] = useState("Basic info");
  const [communitySubTab, setCommunitySubTab] = useState("Content controls");

  // Keywords state
  const [keywords, setKeywords] = useState([
    "#InternetPersonalities",
    "#Biography",
    "#Documentary",
    "#LifeStory",
  ]);

  const [newKeyword, setNewKeyword] = useState("");

  const handleAddKeyword = (e) => {
    e.preventDefault();
    if (!newKeyword.trim()) return;
    setKeywords([...keywords, newKeyword.trim()]);
    setNewKeyword("");
  };

  const handleRemoveKeyword = (tag) => {
    setKeywords(keywords.filter((k) => k !== tag));
  };

  const tabs = [
    "General",
    "Channel",
    "Upload defaults",
    "Permissions",
    "Community moderation",
    "Creator demographics",
    "Agreements",
  ];

  // -------------------------------------------------------
  // TAB CONTENT FUNCTIONS
  // -------------------------------------------------------

  const renderGeneral = () => (
    <div>
      <h3 className="text-lg font-semibold mb-4">Default units</h3>

      <label className="block text-gray-700 font-medium mb-2">Currency</label>
      <select className="border rounded-md p-2 w-60 bg-gray-50">
        <option>INR – Indian Rupee</option>
        <option>USD – US Dollar</option>
        <option>EUR – Euro</option>
      </select>

      <p className="text-gray-500 text-sm mt-2">
        Revenue is converted from US dollars based on historical conversion rates.
      </p>
    </div>
  );

  // Channel Tab
  const renderChannel = () => (
    <div>
      <div className="flex border-b mb-6">
        {["Basic info", "Advanced settings", "Feature eligibility"].map((sub) => (
          <button
            key={sub}
            onClick={() => setChannelSubTab(sub)}
            className={`mr-6 pb-2 text-sm font-medium ${
              channelSubTab === sub ? "border-b-2 border-black" : "text-gray-500"
            }`}
          >
            {sub}
          </button>
        ))}
      </div>

      {channelSubTab === "Basic info" && (
        <div className="space-y-6">
          {/* Country */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Country of residence
            </label>
            <select className="border rounded-md p-2 w-80 bg-gray-50">
              <option>India</option>
              <option>United States</option>
              <option>United Kingdom</option>
            </select>
          </div>

          {/* Keywords */}
          <div>
            <label className="block text-sm font-medium mb-2">Keywords</label>

            <div className="border p-3 rounded-md bg-white flex flex-wrap gap-2">
              {keywords.map((keyword) => (
                <span
                  key={keyword}
                  className="bg-gray-100 px-3 py-1 rounded-full text-sm flex items-center"
                >
                  {keyword}
                  <button
                    onClick={() => handleRemoveKeyword(keyword)}
                    className="ml-2 text-gray-500 hover:text-black"
                  >
                    ✕
                  </button>
                </span>
              ))}
            </div>

            <form onSubmit={handleAddKeyword} className="mt-3 flex gap-2">
              <input
                className="border rounded-md p-2 w-72 text-sm bg-gray-50"
                placeholder="Add keyword..."
                value={newKeyword}
                onChange={(e) => setNewKeyword(e.target.value)}
              />
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md">
                Add
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );

  // Upload defaults
  const renderUploadDefaults = () => (
    <div>
      <div className="flex border-b mb-6">
        {["Basic info", "Advanced settings"].map((sub) => (
          <button
            key={sub}
            onClick={() => setUploadSubTab(sub)}
            className={`mr-6 pb-2 text-sm font-medium ${
              uploadSubTab === sub ? "border-b-2 border-black" : "text-gray-500"
            }`}
          >
            {sub}
          </button>
        ))}
      </div>

      {uploadSubTab === "Basic info" && (
        <div className="space-y-6">
          {/* Title */}
          <div>
            <label className="block mb-1 text-sm font-medium">Title</label>
            <input className="border rounded-md w-full p-2 bg-gray-50" />
          </div>

          {/* Description */}
          <div>
            <label className="block mb-1 text-sm font-medium">Description</label>
            <textarea className="border rounded-md w-full p-2 bg-gray-50" rows={4} />
          </div>
        </div>
      )}
    </div>
  );

  // Permissions
  const renderPermissions = () => (
    <div>
      <h3 className="text-lg font-semibold">Permissions</h3>

      <table className="w-full text-sm mt-4">
        <thead>
          <tr className="border-b text-gray-700">
            <th>Name</th>
            <th>Role</th>
            <th>User</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="py-3 font-medium">SAYYAD HASAN SHAHZAD</td>
            <td>Owner</td>
            <td>
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-white">
                  S
                </div>
                <span>sayyadhasan@gmail.com</span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  // Community moderation
  const renderCommunityModeration = () => (
    <div>
      <div className="flex border-b mb-6">
        {["Content controls", "User management"].map((sub) => (
          <button
            key={sub}
            onClick={() => setCommunitySubTab(sub)}
            className={`mr-6 pb-2 text-sm font-medium ${
              communitySubTab === sub ? "border-b-2 border-black" : "text-gray-500"
            }`}
          >
            {sub}
          </button>
        ))}
      </div>

      {communitySubTab === "Content controls" && (
        <p className="text-sm text-gray-500">Set preferences for comments and posts</p>
      )}
    </div>
  );

  // Creator demographics
  const renderDemographics = () => (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">Help make YouTube inclusive</h3>

      <div className="border rounded-lg p-6 bg-gray-50 text-center">
        <p className="text-sm text-gray-600">
          Provide optional demographic information.
        </p>
        <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md">
          Take survey
        </button>
      </div>
    </div>
  );

  // Agreements
  const renderAgreements = () => (
    <p className="text-gray-600 text-sm">Manage creator agreements.</p>
  );

  // Content switcher
  const getContent = () => {
    switch (activeTab) {
      case "General":
        return renderGeneral();
      case "Channel":
        return renderChannel();
      case "Upload defaults":
        return renderUploadDefaults();
      case "Permissions":
        return renderPermissions();
      case "Community moderation":
        return renderCommunityModeration();
      case "Creator demographics":
        return renderDemographics();
      case "Agreements":
        return renderAgreements();
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* LEFT SIDEBAR */}
      <aside className="w-60 bg-white border-r p-4">
        <h2 className="text-xl font-semibold mb-4">Settings</h2>

        <ul className="space-y-1">
          {tabs.map((tab) => (
            <li key={tab}>
              <button
                onClick={() => setActiveTab(tab)}
                className={`w-full text-left px-3 py-2 rounded-md ${
                  activeTab === tab
                    ? "bg-gray-200 font-medium"
                    : "hover:bg-gray-100"
                }`}
              >
                {tab}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      {/* RIGHT CONTENT */}
      <main className="flex-1 p-6 overflow-y-auto">{getContent()}</main>
    </div>
  );
}
