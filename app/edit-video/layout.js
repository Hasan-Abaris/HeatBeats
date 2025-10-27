'use client';
import React, { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

export default function EditVideoLayout({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const menuItems = [
    { label: 'Details', path: '/edit-video/details' },
    { label: 'Analytics', path: '/edit-video/analytics' },
    { label: 'Editor', path: '/edit-video/editor' },
    { label: 'Comments', path: '/edit-video/comments' },
    { label: 'Subtitles', path: '/edit-video/subtitles' },
    { label: 'Copyright', path: '/edit-video/copyright' },
    { label: 'Clips', path: '/edit-video/clips' },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r fixed h-full flex flex-col">
        {/* Menu List (scrollable area) */}
        <div className="flex-1 overflow-y-auto p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.path}>
                <button
                  onClick={() => router.push(item.path)}
                  className={`w-full text-left p-2 rounded ${
                    pathname === item.path
                      ? 'bg-gray-200 font-semibold'
                      : 'hover:bg-gray-100'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Settings Button (fixed bottom) */}
        <div className="p-4 border-t">
          <button
            onClick={() => setIsSettingsOpen(true)}
            className="w-full text-left p-2 rounded hover:bg-gray-100 flex items-center space-x-2 text-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              width="20"
              fill="currentColor"
            >
              <path d="M10 12.5q-1.05 0-1.775-.725Q7.5 11.05 7.5 10t.725-1.775Q8.95 7.5 10 7.5t1.775.725Q12.5 8.95 12.5 10t-.725 1.775Q11.05 12.5 10 12.5Zm0 6.458q-.354 0-.635-.177-.281-.177-.458-.489l-.688-1.271q-.375-.104-.708-.271-.333-.167-.625-.396l-1.375.312q-.313.062-.625-.094t-.479-.469L3.02 13.98q-.167-.292-.094-.615t.313-.563l1.083-.833Q4.208 11.73 4.188 11.5q-.021-.229-.021-.5 0-.271.021-.5.02-.23.125-.458l-1.083-.834q-.25-.24-.323-.562-.073-.323.094-.615l1.417-2.458q.167-.292.479-.448.313-.157.625-.095l1.375.313q.292-.23.625-.396.333-.167.708-.271l.688-1.271q.177-.312.458-.489.281-.177.635-.177h2.833q.354 0 .635.177.281.177.458.489l.688 1.271q.375.104.708.271.333.166.625.396l1.375-.313q.313-.062.625.095t.479.448l1.417 2.458q.167.292.094.615-.073.322-.323.562l-1.083.834q.105.228.125.458.021.229.021.5 0 .271-.021.5-.02.23-.125.458l1.083.833q.25.24.323.563.073.323-.094.615l-1.417 2.458q-.167.292-.479.448-.313.157-.625.095l-1.375-.312q-.292.229-.625.396-.333.167-.708.271l-.688 1.271q-.177.312-.458.489-.281.177-.635.177Z" />
            </svg>
            <span>Settings</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64 p-6">{children}</main>

      {/* Settings Modal */}
      {isSettingsOpen && (
        <>
          {/* Background Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-40 z-40"
            onClick={() => setIsSettingsOpen(false)}
          ></div>

          {/* Sliding Modal */}
          <div
            className="fixed bottom-0 left-0 right-0 bg-white z-50 shadow-2xl rounded-t-2xl p-6 max-h-[60vh] overflow-y-auto transition-transform duration-300 transform translate-y-0"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Settings</h2>
              <button
                onClick={() => setIsSettingsOpen(false)}
                className="text-gray-500 hover:text-gray-700 text-xl"
              >
                ✕
              </button>
            </div>
            <div className="space-y-4 text-gray-700">
              <div>
                <label className="block font-medium mb-1">Theme</label>
                <select className="border rounded p-2 w-full">
                  <option>Light</option>
                  <option>Dark</option>
                  <option>System Default</option>
                </select>
              </div>
              <div>
                <label className="block font-medium mb-1">Language</label>
                <select className="border rounded p-2 w-full">
                  <option>English</option>
                  <option>Hindi</option>
                  <option>Spanish</option>
                </select>
              </div>
              <div>
                <label className="block font-medium mb-1">Notifications</label>
                <input type="checkbox" className="mr-2" /> Enable email updates
              </div>
              <div className="pt-4">
                <button
                  onClick={() => setIsSettingsOpen(false)}
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Save Settings
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
