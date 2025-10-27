'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function GameContentPage() {
  const [activeTab, setActiveTab] = useState('Videos');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const router = useRouter();

  const tabs = [
    'Inspiration',
    'Videos',
    'Shorts',
    'Live',
    'Posts',
    'Playlists',
    'Podcasts',
    'Promotions',
    'Collaborations',
  ];

  // Sample data for each tab
  const tabData = {
    Inspiration: [
      {
        title: 'Game Dev Motivation',
        description: 'Tips to stay inspired as a game developer ...READ MORE',
        author: 'DevInspire',
        date: 'Jan 20, 2025',
        views: '500K',
        thumbnail: '/images/courses/ludo.jpg',
      },
      {
        title: 'Indie Game Success Stories',
        description: 'How small studios made it big ...READ MORE',
        author: 'IndieLover',
        date: 'Feb 15, 2025',
        views: '750K',
        thumbnail: '/images/courses/pubg.jpg',
      },
    ],
    Videos: [
      {
        title: 'Top 10 Unity Game Tips',
        thumbnail: '/images/courses/unity.jpg',
        views: 1200,
        comments: 5,
        likes: 100,
        date: '10 Oct 2025',
        visibility: 'Public',
        restrictions: 'None',
        author: 'UnityMaster',
      },
      {
        title: 'Unreal Engine 5 Epic Tutorial',
        thumbnail: '/images/courses/amongus-course.jpg',
        views: 900,
        comments: 2,
        likes: 80,
        date: '8 Oct 2025',
        visibility: 'Public',
        restrictions: 'None',
        author: 'UnrealGuru',
      },
      {
        title: 'Top 5 Indie courses of 2025',
        thumbnail: '/images/courses/chess.jpg',
        views: 1500,
        comments: 10,
        likes: 200,
        date: '5 Oct 2025',
        visibility: 'Public',
        restrictions: 'None',
        author: 'IndieLover',
      },
    ],
    Shorts: [
      {
        title: 'Quick Unity Trick',
        thumbnail: '/images/courses/short1.jpg',
        views: '300K',
        date: '12 Oct 2025',
        author: 'QuickTips',
      },
      {
        title: 'Gameplay Highlight',
        thumbnail: '/images/courses/short2.jpg',
        views: '450K',
        date: '11 Oct 2025',
        author: 'GameClips',
      },
    ],
    Live: [
      {
        title: 'Live Unity Coding Session',
        thumbnail: '/images/courses/live1.jpg',
        status: 'Ended',
        date: '9 Oct 2025',
        viewers: '10K',
        author: 'LiveCoder',
      },
      {
        title: 'Indie Game Showcase',
        thumbnail: '/images/courses/live2.jpg',
        status: 'Upcoming',
        date: '15 Oct 2025',
        viewers: 'N/A',
        author: 'IndieLover',
      },
    ],
    Posts: [
      {
        title: 'Community Update',
        content: 'New game dev challenge announced! Join now! ...READ MORE',
        date: '13 Oct 2025',
        author: 'CommunityManager',
        likes: 50,
      },
      {
        title: 'Ask Me Anything',
        content: 'Ask your game dev questions! ...READ MORE',
        date: '12 Oct 2025',
        author: 'DevGuru',
        likes: 75,
      },
    ],
    Playlists: [
      {
        title: 'Unity Tutorials',
        videoCount: 10,
        thumbnail: '/images/courses/playlist1.jpg',
        author: 'UnityMaster',
      },
      {
        title: 'Indie Game Reviews',
        videoCount: 5,
        thumbnail: '/images/courses/playlist2.jpg',
        author: 'IndieLover',
      },
    ],
    Podcasts: [
      {
        title: 'Game Dev Podcast Ep 1',
        duration: '45min',
        date: '10 Oct 2025',
        author: 'PodcastHost',
        thumbnail: '/images/courses/podcast1.jpg',
      },
      {
        title: 'Indie Dev Stories',
        duration: '30min',
        date: '8 Oct 2025',
        author: 'IndieLover',
        thumbnail: '/images/courses/podcast2.jpg',
      },
    ],
    Promotions: [
      {
        title: 'Game Dev Course Discount',
        description: '50% off our Unity course! ...READ MORE',
        date: '14 Oct 2025',
        author: 'PromoTeam',
        thumbnail: '/images/courses/promo1.jpg',
      },
      {
        title: 'New Game Launch',
        description: 'Check out our latest indie game! ...READ MORE',
        date: '13 Oct 2025',
        author: 'IndieLover',
        thumbnail: '/images/courses/promo2.jpg',
      },
    ],
    Collaborations: [
      {
        title: 'Collab with Indie Devs',
        description: 'Join our indie game jam! ...READ MORE',
        date: '11 Oct 2025',
        author: 'CollabMaster',
        thumbnail: '/images/courses/collab1.jpg',
      },
      {
        title: 'Streamer Team-Up',
        description: 'Streaming with top gamers ...READ MORE',
        date: '10 Oct 2025',
        author: 'StreamerPro',
        thumbnail: '/images/courses/collab2.jpg',
      },
    ],
  };

  const handleSubscribe = () => {
    setIsSubscribed(true);
  };

  const handleCustomizeChannel = () => {
    setActiveTab('Inspiration');
    router.push('/#');
  };

  const handleManageVideos = () => {
    setActiveTab('Videos');
    router.push('/#');
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };     

  const handleAuthorClick = (authorName) => {
    const authorSlug = authorName.toLowerCase().replace(/\s+/g, '-');
    router.push(`/contest-details/${authorSlug}`);
  };

  const handleEditClick = (videoTitle) => {
    router.push(`/edit-video?title=${encodeURIComponent(videoTitle)}`);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r p-4">
        <h2 className="font-bold text-xl mb-6">Your Channel</h2>
        <ul className="space-y-3">
          {['Dashboard', 'Content', 'Analytics', 'Community', 'Subtitles', 'Settings', 'Send feedback'].map((item) => (
            <li key={item} className="hover:bg-gray-200 p-2 rounded cursor-pointer">
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Channel Header */}
        <div className="flex items-center mb-6">
       
          <div className="ml-4">
            <h1 className="text-2xl font-bold">Channel content</h1>
            <div className="mt-2 flex space-x-2">
             
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b mb-4 space-x-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabClick(tab)}
              className={`py-2 px-3 font-medium transition-colors ${
                activeTab === tab ? 'border-b-2 border-blue-600 text-blue-600' : 'hover:text-blue-600'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded shadow p-4">
          {activeTab === 'Videos' && (
            <table className="w-full table-auto">
              <thead className="bg-gray-50 border-b">
                <tr>
                  {['Video', 'Visibility', 'Restrictions', 'Date', 'Views', 'Comments', 'Likes', 'Author', 'Edits'].map((col) => (
                    <th key={col} className="text-left px-4 py-2 font-medium text-gray-700">
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tabData.Videos.map((video, i) => (
                  <tr key={i} className="border-b hover:bg-gray-100">
                    <td className="flex items-center px-4 py-2 gap-3">
                      <Image
                        src={video.thumbnail}
                        width={120}
                        height={68}
                        alt={video.title}
                        className="rounded"
                      />
                      <span>{video.title}</span>
                    </td>
                    <td className="px-4 py-2">{video.visibility}</td>
                    <td className="px-4 py-2">{video.restrictions}</td>
                    <td className="px-4 py-2">{video.date}</td>
                    <td className="px-4 py-2">{video.views}</td>
                    <td className="px-4 py-2">{video.comments}</td>
                    <td className="px-4 py-2">{video.likes}</td>
                    <td
                      className="px-4 py-2 text-blue-600 hover:underline cursor-pointer"
                      onClick={() => handleAuthorClick(video.author)}
                    >
                      {video.author}
                    </td>
                    <td className="px-4 py-2">
                      <button
                        onClick={() => handleEditClick(video.title)}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        <span className="material-icons">Edit</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          {activeTab === 'Inspiration' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {tabData.Inspiration.map((item, i) => (
                <div key={i} className="bg-gray-50 p-4 rounded-lg shadow">
                  <Image
                    src={item.thumbnail}
                    width={200}
                    height={120}
                    alt={item.title}
                    className="rounded mb-2"
                  />
                  <h3 className="font-bold">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                  <p
                    className="text-blue-600 hover:underline cursor-pointer mt-2"
                    onClick={() => handleAuthorClick(item.author)}
                  >
                    By {item.author}
                  </p>
                  <p className="text-gray-500 text-sm">{item.date} • {item.views} views</p>
                </div>
              ))}
            </div>
          )}
          {activeTab === 'Shorts' && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {tabData.Shorts.map((short, i) => (
                <div key={i} className="bg-gray-50 p-4 rounded-lg shadow">
                  <Image
                    src={short.thumbnail}
                    width={150}
                    height={200}
                    alt={short.title}
                    className="rounded mb-2"
                  />
                  <h3 className="font-bold">{short.title}</h3>
                  <p
                    className="text-blue-600 hover:underline cursor-pointer mt-2"
                    onClick={() => handleAuthorClick(short.author)}
                  >
                    By {short.author}
                  </p>
                  <p className="text-gray-500 text-sm">{short.date} • {short.views} views</p>
                </div>
              ))}
            </div>
          )}
          {activeTab === 'Live' && (
            <div className="space-y-4">
              {tabData.Live.map((live, i) => (
                <div key={i} className="bg-gray-50 p-4 rounded-lg shadow flex items-center gap-4">
                  <Image
                    src={live.thumbnail}
                    width={150}
                    height={100}
                    alt={live.title}
                    className="rounded"
                  />
                  <div>
                    <h3 className="font-bold">{live.title}</h3>
                    <p
                      className="text-blue-600 hover:underline cursor-pointer"
                      onClick={() => handleAuthorClick(live.author)}
                    >
                      By {live.author}
                    </p>
                    <p className="text-gray-500 text-sm">
                      {live.date} • {live.status} • {live.viewers} viewers
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
          {activeTab === 'Posts' && (
            <div className="space-y-4">
              {tabData.Posts.map((post, i) => (
                <div key={i} className="bg-gray-50 p-4 rounded-lg shadow">
                  <h3 className="font-bold">{post.title}</h3>
                  <p className="text-gray-600">{post.content}</p>
                  <p
                    className="text-blue-600 hover:underline cursor-pointer mt-2"
                    onClick={() => handleAuthorClick(post.author)}
                  >
                    By {post.author}
                  </p>
                  <p className="text-gray-500 text-sm">{post.date} • {post.likes} likes</p>
                </div>
              ))}
            </div>
          )}
          {activeTab === 'Playlists' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {tabData.Playlists.map((playlist, i) => (
                <div key={i} className="bg-gray-50 p-4 rounded-lg shadow">
                  <Image
                    src={playlist.thumbnail}
                    width={200}
                    height={120}
                    alt={playlist.title}
                    className="rounded mb-2"
                  />
                  <h3 className="font-bold">{playlist.title}</h3>
                  <p
                    className="text-blue-600 hover:underline cursor-pointer mt-2"
                    onClick={() => handleAuthorClick(playlist.author)}
                  >
                    By {playlist.author}
                  </p>
                  <p className="text-gray-500 text-sm">{playlist.videoCount} videos</p>
                </div>
              ))}
            </div>
          )}
          {activeTab === 'Podcasts' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {tabData.Podcasts.map((podcast, i) => (
                <div key={i} className="bg-gray-50 p-4 rounded-lg shadow">
                  <Image
                    src={podcast.thumbnail}
                    width={200}
                    height={120}
                    alt={podcast.title}
                    className="rounded mb-2"
                  />
                  <h3 className="font-bold">{podcast.title}</h3>
                  <p
                    className="text-blue-600 hover:underline cursor-pointer mt-2"
                    onClick={() => handleAuthorClick(podcast.author)}
                  >
                    By {podcast.author}
                  </p>
                  <p className="text-gray-500 text-sm">{podcast.date} • {podcast.duration}</p>
                </div>
              ))}
            </div>
          )}
          {activeTab === 'Promotions' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {tabData.Promotions.map((promo, i) => (
                <div key={i} className="bg-gray-50 p-4 rounded-lg shadow">
                  <Image
                    src={promo.thumbnail}
                    width={200}
                    height={120}
                    alt={promo.title}
                    className="rounded mb-2"
                  />
                  <h3 className="font-bold">{promo.title}</h3>
                  <p className="text-gray-600">{promo.description}</p>
                  <p
                    className="text-blue-600 hover:underline cursor-pointer mt-2"
                    onClick={() => handleAuthorClick(promo.author)}
                  >
                    By {promo.author}
                  </p>
                  <p className="text-gray-500 text-sm">{promo.date}</p>
                </div>
              ))}
            </div>
          )}
          {activeTab === 'Collaborations' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {tabData.Collaborations.map((collab, i) => (
                <div key={i} className="bg-gray-50 p-4 rounded-lg shadow">
                  <Image
                    src={collab.thumbnail}
                    width={200}
                    height={120}
                    alt={collab.title}
                    className="rounded mb-2"
                  />
                  <h3 className="font-bold">{collab.title}</h3>
                  <p className="text-gray-600">{collab.description}</p>
                  <p
                    className="text-blue-600 hover:underline cursor-pointer mt-2"
                    onClick={() => handleAuthorClick(collab.author)}
                  >
                    By {collab.author}
                  </p>
                  <p className="text-gray-500 text-sm">{collab.date}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}