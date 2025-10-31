'use client';
import React, { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import {
  Pencil,
  BarChart2,
  Film,
  MessageSquare,
  Subtitles,
  Copyright,
  Scissors,
  Settings,
} from 'lucide-react';

export default function EditVideoLayout({ children }) {
  const router = useRouter();
  const pathname = usePathname();

  // Sidebar & settings modal states
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('General');
  const [communitySubTab, setCommunitySubTab] = useState('Content controls');

const [uploadSubTab, setUploadSubTab] = useState('Basic info');


  // Channel settings states (moved outside renderTabContent ✅)
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

  // Keyword handlers
  const handleAddKeyword = (e) => {
    e.preventDefault();
    if (newKeyword.trim() !== '') {
      setKeywords([...keywords, newKeyword.trim()]);
      setNewKeyword('');
    }
  };

  const handleRemoveKeyword = (keyword) => {
    setKeywords(keywords.filter((k) => k !== keyword));
  };

  // Sidebar Menu
  const menuItems = [
    { label: 'Details', path: '/edit-video/details', icon: <Pencil size={18} /> },
    { label: 'Analytics', path: '/edit-video/analytics', icon: <BarChart2 size={18} /> },
    { label: 'Editor', path: '/edit-video/editor', icon: <Film size={18} /> },
    { label: 'Comments', path: '/edit-video/comments', icon: <MessageSquare size={18} /> },
    { label: 'Subtitles', path: '/edit-video/subtitles', icon: <Subtitles size={18} /> },
    { label: 'Copyright', path: '/edit-video/copyright', icon: <Copyright size={18} /> },
    { label: 'Clips', path: '/edit-video/clips', icon: <Scissors size={18} /> },
  ];

  // Settings tabs
  const tabs = [
    'General',
    'Channel',
    'Upload defaults',
    'Permissions',
    'Community moderation',
    'Creator demographics',
    'Agreements',
  ];

  // Community moderation section
  const renderCommunityModeration = () => {
    return (
      <div>
        {/* Sub-tabs */}
        <div className="flex border-b mb-6">
          {['Content controls', 'User management'].map((subTab) => (
            <button
              key={subTab}
              className={`mr-6 pb-2 text-sm font-medium ${
                communitySubTab === subTab
                  ? 'border-b-2 border-black text-black'
                  : 'text-gray-500'
              }`}
              onClick={() => setCommunitySubTab(subTab)}
            >
              {subTab}
            </button>
          ))}
        </div>

        {/* Sub-tab content */}
        {communitySubTab === 'Content controls' ? (
          <div className="space-y-6">
            <p className="text-gray-600">
              Set preferences for comments, posts and more
            </p>

            {/* Comments Section */}
            <div>
              <h3 className="font-semibold text-lg mb-2">
                Comments on new videos and posts
              </h3>
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
            </div>

            {/* Live Chat Section */}
            <div>
              <h3 className="font-semibold text-lg mb-2">
                Messages in your live chat
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Moderation</label>
                  <p className="border rounded-md p-2 bg-gray-50">None</p>
                </div>
              </div>
            </div>

            {/* Community Posts Section */}
            <div>
              <h3 className="font-semibold text-lg mb-2">
                Posts in your community
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Viewer posts</label>
                  <p className="border rounded-md p-2 bg-gray-50">Off</p>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Moderation</label>
                  <p className="border rounded-md p-2 bg-gray-50">Basic</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Who can post</label>
                  <p className="border rounded-md p-2 bg-gray-50">Subscribers</p>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Minimum subscription time
                  </label>
                  <p className="border rounded-md p-2 bg-gray-50">1 day</p>
                </div>
              </div>
            </div>

            {/* Blocked Words Section */}
            <div>
              <h3 className="font-semibold text-lg mb-2">Blocked words</h3>
              <p className="text-sm text-gray-600 mb-2">Add blocked words</p>
              <textarea
                className="border rounded-md w-full p-2 text-sm bg-gray-50"
                rows="3"
                placeholder="Separate words and phrases with commas."
              ></textarea>
              <div className="mt-3">
                <label className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" />
                  <span className="text-sm text-gray-700">
                    Hold comments with hashtags and URLs for review
                    <p className="text-gray-500 text-xs mt-1">
                      Comments and viewer posts with hashtags and URLs will be held. This
                      setting does not apply to you, moderators or approved users. URLs
                      and hashtags are already blocked in live chat messages.
                    </p>
                  </span>
                </label>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">
              Choose who can moderate and participate
            </h3>

            <div>
              <label className="block text-sm font-medium mb-1">
                Managing moderators
              </label>
              <input
                className="border rounded-md w-full p-2 text-sm bg-gray-50"
                placeholder="Add managing moderator"
              />
              <p className="text-xs text-gray-500 mt-1">
                Paste the channel URL of a user to add as a managing moderator.
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Standard moderators
              </label>
              <input
                className="border rounded-md w-full p-2 text-sm bg-gray-50"
                placeholder="Add standard moderator"
              />
              <p className="text-xs text-gray-500 mt-1">
                Paste the channel URL of a user to add as a standard moderator.
              </p>
            </div>
          </div>
        )}
      </div>
    );
  };

  // Main tab content
  const renderTabContent = () => {
    const renderChannelSubTabs = () => (
      <div>
        {/* Channel Sub Tabs */}
        <div className="flex border-b mb-6">
          {['Basic info', 'Advanced settings', 'Feature eligibility'].map((subTab) => (
            <button
              key={subTab}
              onClick={() => setChannelSubTab(subTab)}
              className={`mr-6 pb-2 text-sm font-medium ${
                channelSubTab === subTab
                  ? 'border-b-2 border-black text-black'
                  : 'text-gray-500'
              }`}
            >
              {subTab}
            </button>
          ))}
        </div>

        {/* Channel Sub Tab Content */}
        {channelSubTab === 'Basic info' && (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Country of residence</label>
              <select className="border rounded-md p-2 w-80 bg-gray-50">
                <option>India</option>
                <option>United States</option>
                <option>United Kingdom</option>
                <option>Canada</option>
                <option>Australia</option>
              </select>
              <p className="text-sm text-gray-500 mt-2">
                Choose the country where you're currently based.
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Keywords</label>
              <div className="border rounded-md p-3 flex flex-wrap gap-2 bg-white min-h-[90px]">
                {keywords.map((keyword) => (
                  <div
                    key={keyword}
                    className="flex items-center bg-gray-100 text-sm px-2 py-1 rounded-full hover:bg-gray-200 transition"
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
                  onKeyDown={(e) => e.key === 'Enter' && handleAddKeyword(e)}
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

        {channelSubTab === 'Advanced settings' && (
          <div className="space-y-4">
            <h3 className="font-semibold text-lg mb-2">Advanced Channel Settings</h3>
            <p className="text-gray-600 text-sm">
              Choose whether your channel is made for kids, manage audience settings, or customize
              recommendations visibility.
            </p>
            <div className="space-y-2">
              <label className="flex items-center gap-2">
                <input type="radio" name="audience" />
                <span className="text-sm text-gray-700">Yes, set this channel as made for kids</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="audience" />
                <span className="text-sm text-gray-700">No, set this channel as not made for kids</span>
              </label>
            </div>
          </div>
        )}

        {channelSubTab === 'Feature eligibility' && (
          <div className="space-y-4">
            <h3 className="font-semibold text-lg mb-2">Feature Eligibility</h3>
            <p className="text-gray-600 text-sm">
              Check which YouTube features your channel can access based on verification and account
              standing.
            </p>

            <div className="border rounded-md p-4 bg-gray-50 space-y-2">
              <h4 className="font-medium text-gray-800">Default features</h4>
              <p className="text-sm text-gray-600">
                Upload videos, create playlists, and more.
              </p>
            </div>

            <div className="border rounded-md p-4 bg-gray-50 space-y-2">
              <h4 className="font-medium text-gray-800">Intermediate features</h4>
              <p className="text-sm text-gray-600">
                Verify your phone number to access features like custom thumbnails and longer videos.
              </p>
            </div>

            <div className="border rounded-md p-4 bg-gray-50 space-y-2">
              <h4 className="font-medium text-gray-800">Advanced features</h4>
              <p className="text-sm text-gray-600">
                Get access to advanced tools like external linking, live streaming, and more.
              </p>
            </div>
          </div>
        )}
      </div>
    );

    switch (activeTab) {
      case 'General':
        return (
          <div>
            <h3 className="text-lg font-semibold mb-4">Default units</h3>
            <label className="block text-gray-700 font-medium mb-2">Currency</label>
            <select className="border rounded-md p-2 w-60">
              <option>INR – Indian Rupee</option>
              <option>USD – US Dollar</option>
              <option>EUR – Euro</option>
            </select>
            <p className="text-gray-500 text-sm mt-2">
              Revenue is converted from US dollars based on historical conversion rates.
            </p>
          </div>
        );
      case 'Channel':
        return renderChannelSubTabs();
     case 'Upload defaults':
  return (
    <div>
      {/* Sub-tabs */}
      <div className="flex border-b mb-6">
        {['Basic info', 'Advanced settings'].map((subTab) => (
          <button
            key={subTab}
            onClick={() => setUploadSubTab(subTab)}
            className={`mr-6 pb-2 text-sm font-medium ${
              uploadSubTab === subTab
                ? 'border-b-2 border-black text-black'
                : 'text-gray-500'
            }`}
          >
            {subTab}
          </button>
        ))}
      </div>

      {/* Basic Info */}
      {uploadSubTab === 'Basic info' && (
        <div className="space-y-6">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium mb-1">Title</label>
            <input
              type="text"
              className="border rounded-md w-full p-2 bg-gray-50"
              placeholder="Add a title that describes your video"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium mb-1">Description</label>
            <textarea
              rows="4"
              className="border rounded-md w-full p-2 bg-gray-50"
              placeholder="Tell viewers about your video"
            ></textarea>
          </div>

          {/* Visibility */}
          <div>
            <label className="block text-sm font-medium mb-1">Visibility</label>
            <select className="border rounded-md p-2 w-64 bg-gray-50">
              <option>Select</option>
              <option>Private</option>
              <option>Unlisted</option>
              <option>Public</option>
            </select>
          </div>

          {/* Tags */}
          <div>
            <label className="block text-sm font-medium mb-1">Tags</label>
            <textarea
              rows="3"
              className="border rounded-md w-full p-2 bg-gray-50"
              placeholder="Add tags separated by commas"
            ></textarea>
            <p className="text-xs text-gray-500 mt-1">
              Tags can help viewers find your video, but are less important for search
              discovery now.
            </p>
          </div>
        </div>
      )}

      {/* Advanced Settings */}
      {uploadSubTab === 'Advanced settings' && (
        <div className="space-y-6">
          {/* Automatic chapters */}
          <div>
            <h3 className="font-semibold text-lg mb-2">Automatic chapters</h3>
            <p className="text-sm text-gray-600 mb-2">
              Chapters and key moments make your video easier to watch. You can overwrite
              automatic suggestions by creating your own chapters in the video
              description.
            </p>
            <label className="flex items-center gap-2">
              <input type="checkbox" defaultChecked className="w-4 h-4" />
              <span className="text-sm text-gray-700">
                Allow automatic chapters and key moments
              </span>
            </label>
          </div>

          {/* Licence and Category */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-1">Licence</label>
              <select className="border rounded-md p-2 w-full bg-gray-50">
                <option>Standard YouTube licence</option>
                <option>Creative Commons – Attribution</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Category</label>
              <select className="border rounded-md p-2 w-full bg-gray-50">
                <option>None</option>
                <option>Education</option>
                <option>Entertainment</option>
                <option>Science & Technology</option>
                <option>People & Blogs</option>
              </select>
            </div>
          </div>

          {/* Language and captions certification */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-1">Video language</label>
              <select className="border rounded-md p-2 w-full bg-gray-50">
                <option>Select</option>
                <option>English</option>
                <option>Hindi</option>
                <option>Spanish</option>
                <option>French</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Caption certification</label>
              <select className="border rounded-md p-2 w-full bg-gray-50">
                <option>None</option>
                <option>Includes caption certification</option>
              </select>
            </div>
          </div>
        </div>
      )}
    </div>
  );

     case 'Permissions':
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">Permissions for Internet Personalities</h3>
      <p className="text-sm text-gray-600">
        Invite
        <br />
        When you give people permissions on your channel, they can upload, comment, and
        take other public actions. They can also view private or hidden content.{' '}
        <a
          href="#"
          className="text-blue-600 hover:underline"
        >
          Learn more
        </a>
      </p>

      <div className="border-t pt-4">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="text-left text-gray-700 border-b">
              <th className="pb-2">Name</th>
              <th className="pb-2">Role</th>
              <th className="pb-2">User avatar</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-3 font-medium text-gray-900">SAYYAD HASAN SHAHZAD</td>
              <td className="py-3 text-gray-700">Owner</td>
              <td className="py-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-sm font-semibold text-white">
                    S
                  </div>
                  <div className="text-gray-600 text-sm">
                    sayyadhasan@gmail.com
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );

      case 'Community moderation':
        return renderCommunityModeration();
    case 'Creator demographics':
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">Help make YouTube more inclusive</h3>
      <p className="text-sm text-gray-600">
        Help us better understand the demographic and identity information of creator and artist communities on YouTube.
      </p>

      <div className="border rounded-lg p-6 bg-gray-50 flex flex-col items-center justify-center text-center space-y-4">
        <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center text-gray-500">
          Creator demographics illustration
        </div>
        <h4 className="text-base font-semibold">Creator demographics</h4>
        <p className="text-sm text-gray-600 max-w-lg">
          Providing this information is optional. You may delete your answers at any time.
          The information that you provide will not be used to impact your content’s or
          channel’s performance in YouTube’s systems.{' '}
          <a href="#" className="text-blue-600 hover:underline">
            Learn more
          </a>
        </p>

        <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm font-medium">
          Take survey
        </button>
        <p className="text-xs text-gray-500">
          You can update your responses once every 45 days.
        </p>
      </div>
    </div>
  );

      case 'Agreements':
        return <p>Review and manage your creator agreements.</p>;
      default:
        return null;
    }
  };

  // JSX layout
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r fixed h-full overflow-y-auto">
        <ul className="p-3 space-y-1">
          {menuItems.map((item) => (
            <li key={item.path}>
              <button
                onClick={() => router.push(item.path)}
                className={`flex items-center w-full gap-3 px-3 py-2 rounded-md text-gray-700 transition ${
                  pathname === item.path
                    ? 'bg-gray-100 font-semibold'
                    : 'hover:bg-gray-50'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            </li>
          ))}
          <li className="pt-2 mt-2 border-t">
            <button
              onClick={() => setIsSettingsOpen(true)}
              className="flex items-center w-full gap-3 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-50 transition"
            >
              <Settings size={18} />
              <span>Settings</span>
            </button>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64 p-6">{children}</main>

      {/* Settings Modal */}
      {isSettingsOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-40 z-40"
            onClick={() => setIsSettingsOpen(false)}
          ></div>

          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="bg-white w-[850px] h-[520px] rounded-2xl shadow-2xl flex flex-col overflow-hidden">
              <div className="flex justify-between items-center p-4 border-b">
                <h2 className="text-xl font-semibold">Settings</h2>
                <button
                  onClick={() => setIsSettingsOpen(false)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ✕
                </button>
              </div>

              <div className="flex flex-1 overflow-hidden">
                {/* Tabs */}
                <div className="w-56 border-r p-4 bg-gray-50">
                  <ul className="space-y-2">
                    {tabs.map((tab) => (
                      <li key={tab}>
                        <button
                          onClick={() => setActiveTab(tab)}
                          className={`w-full text-left px-3 py-2 rounded-md ${
                            activeTab === tab
                              ? 'bg-white font-medium shadow-sm'
                              : 'hover:bg-gray-100'
                          }`}
                        >
                          {tab}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex-1 p-6 overflow-y-auto">
                  {renderTabContent()}
                </div>
              </div>

              <div className="flex justify-end gap-2 border-t p-4 bg-gray-50">
                <button
                  onClick={() => setIsSettingsOpen(false)}
                  className="px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-100"
                >
                  Close
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                  Save
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
``
