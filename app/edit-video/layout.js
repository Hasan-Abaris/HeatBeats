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
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('General');
  const [communitySubTab, setCommunitySubTab] = useState('Content controls');

  const menuItems = [
    { label: 'Details', path: '/edit-video/details', icon: <Pencil size={18} /> },
    { label: 'Analytics', path: '/edit-video/analytics', icon: <BarChart2 size={18} /> },
    { label: 'Editor', path: '/edit-video/editor', icon: <Film size={18} /> },
    { label: 'Comments', path: '/edit-video/comments', icon: <MessageSquare size={18} /> },
    { label: 'Subtitles', path: '/edit-video/subtitles', icon: <Subtitles size={18} /> },
    { label: 'Copyright', path: '/edit-video/copyright', icon: <Copyright size={18} /> },
    { label: 'Clips', path: '/edit-video/clips', icon: <Scissors size={18} /> },
  ];

  const tabs = [
    'General',
    'Channel',
    'Upload defaults',
    'Permissions',
    'Community moderation',
    'Creator demographics',
    'Agreements',
  ];

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

  const renderTabContent = () => {
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
        return <p>Channel information and branding settings.</p>;
      case 'Upload defaults':
        return <p>Set default visibility, category, and tags for uploads.</p>;
      case 'Permissions':
        return <p>Manage who can access and edit this channel.</p>;
      case 'Community moderation':
        return renderCommunityModeration();
      case 'Creator demographics':
        return <p>Manage your demographic data preferences.</p>;
      case 'Agreements':
        return <p>Review and manage your creator agreements.</p>;
      default:
        return null;
    }
  };

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
