'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function ContestDetailspage() {
  const [activeTab, setActiveTab] = useState('home');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const router = useRouter();

  const tabs = ['home', 'videos', 'shorts', 'live', 'playlists', 'posts', 'about'];

  const handleSubscribe = () => {
    setIsSubscribed(true);
  };

  const handleCustomizeChannel = () => {
    setActiveTab('home');
    router.push('/#');
  };

  const handleManageVideos = () => {
    setActiveTab('videos');
    router.push('/Channeldetail');
  };

 const handleTabClick = (tab) => {
  setActiveTab(tab);
  // no router.push, stay on same page
};
  return (
    <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-sm">
      {/* Banner */}
      <div className="relative w-full h-48 sm:h-64 md:h-80 bg-gray-200 rounded-t-xl overflow-hidden">
        <Image
          src="/images/banner2.jpg"
          alt="Channel Banner"
          fill
          className="object-cover"
        />
      </div>

      {/* Profile Info */}
      <div className="flex items-center px-6 mt-5 mb-4">
        <Image
          src="/images/courses/unity.jpg"
          width={100}
          height={100}
          alt="Profile Avatar"
          className="rounded-full border-4 border-white"
        />
        <div className="ml-4">
          <h2 className="text-2xl font-bold">Quartz Games</h2>
          <p className="text-gray-500">@QuartzGames • 482K subscribers • 1K videos</p>
             {/* Following & Followers */}
          <p className="text-gray-500 mt-1">Following: 1.2K • Followers: 500K</p>
          <div className="mt-2 flex space-x-2">
            {!isSubscribed ? (
              <button
                onClick={handleSubscribe}
                className="px-5 py-2 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 transition"
              >
                Subscribe
              </button>
            ) : (
              <>
                <button
                  onClick={handleCustomizeChannel}
                  className="px-5 py-2 bg-gray-600 text-white font-medium rounded-md hover:bg-gray-700 transition"
                >
                  Customize Channel
                </button>
                <button
                  onClick={handleManageVideos}
                  className="px-5 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition"
                >
                  Manage Videos
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-t border-b">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={`flex-1 text-center py-3 font-medium transition-colors ${
              activeTab === tab ? 'border-b-2 border-black text-black' : 'text-gray-500 hover:text-black'
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {activeTab === 'home' && (
          <>
            <h3 className="text-xl font-semibold">Featured Content</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="bg-gray-100 rounded-lg overflow-hidden">
                  <div className="h-32 bg-gray-300"></div>
                  <div className="p-3">
                    <p className="font-medium">Featured Video {i + 1}</p>
                    <p className="text-sm text-gray-500">100K views • {i + 1} days ago</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-gray-500 mt-2">Welcome to Quartz Games! Discover curated gaming content, trending videos, and more.</p>
          </>
        )}
        {activeTab === 'videos' && (
          <>
            <h3 className="text-xl font-semibold">Latest Videos</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-gray-100 rounded-lg overflow-hidden">
                  <div className="h-40 bg-gray-300"></div>
                  <div className="p-3">
                    <p className="font-medium">Gameplay Video {i + 1}</p>
                    <p className="text-sm text-gray-500">{(i + 1) * 50}K views • {i + 1} weeks ago</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-gray-500 mt-2">Check out all the latest gaming videos uploaded by Quartz Games.</p>
          </>
        )}
        {activeTab === 'shorts' && (
          <>
            <h3 className="text-xl font-semibold">Short Clips</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
                  Short {i + 1}
                </div>
              ))}
            </div>
            <p className="text-gray-500 mt-2">Quick, entertaining gaming clips you can watch anytime.</p>
          </>
        )}
        {activeTab === 'live' && (
          <>
            <h3 className="text-xl font-semibold">Live Streams</h3>
            <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
              <p>No live streams currently active</p>
            </div>
            <p className="text-gray-500 mt-2">Join Quartz Games for live gaming sessions and real-time interactions!</p>
          </>
        )}
        {activeTab === 'playlists' && (
          <>
            <h3 className="text-xl font-semibold">Playlists</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {['Beginner Tutorials', 'Speedruns', 'Game Reviews'].map((title, i) => (
                <div key={i} className="bg-gray-100 p-4 rounded-lg">
                  <p className="font-medium">{title}</p>
                  <p className="text-sm text-gray-500">{i + 5} videos</p>
                </div>
              ))}
            </div>
            <p className="text-gray-500 mt-2">Explore organized collections of gaming videos by topic or theme.</p>
          </>
        )}
        {activeTab === 'posts' && (
          <>
            <h3 className="text-xl font-semibold">Community Posts</h3>
            <div className="space-y-4">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-medium">Post {i + 1}</p>
                  <p className="text-gray-600">Check out our latest community update! What's your favorite game this month?</p>
                  <p className="text-sm text-gray-500">{i + 1} hours ago</p>
                </div>
              ))}
            </div>
            <p className="text-gray-500 mt-2">Stay connected with Quartz Games' community updates and posts.</p>
          </>
        )}
        {activeTab === 'about' && (
          <>
            <h3 className="text-xl font-semibold">About Quartz Games</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium">Channel Details</h4>
                <p className="text-gray-600">Quartz Games is your go-to channel for gaming tutorials, reviews, and live streams.</p>
                <p className="text-gray-500">Joined: January 15, 2018</p>
                <p className="text-gray-500">Location: United States</p>
                <p className="text-gray-500">Total Views: 25M</p>
              </div>
              <div>
                <h4 className="font-medium">Contact</h4>
                <p className="text-gray-600">Email: contact@quartzgames.com</p>
                <p className="text-gray-600">Business inquiries: business@quartzgames.com</p>
              </div>
              <div>
                <h4 className="font-medium">Links</h4>
                <p className="text-blue-600 hover:underline">Twitter: @QuartzGames</p>
                <p className="text-blue-600 hover:underline">Discord: QuartzGamesCommunity</p>
                <p className="text-blue-600 hover:underline">Website: www.quartzgames.com</p>
              </div>
            </div>
            <p className="text-gray-500 mt-2">Learn more about Quartz Games and join our gaming community!</p>
          </>
        )}
      </div>
    </div>
  );
}