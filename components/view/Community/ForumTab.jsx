import React from "react";

const ForumTab = () => {
  // Updated data focused on gaming themes
  const forums = [
    {
      id: 1,
      name: "General Gaming Discussions",
      threads: "15.2k",
      interactions: "245.8k",
      image:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      link: "/gaming-forum/general",
    },
    {
      id: 9,
      name: "Mobile Game Reviews",
      threads: "28.5k",
      interactions: "620.3k",
      image:
        "https://images.unsplash.com/photo-1611921093905-1f579e3b4b1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      link: "/gaming-forum/reviews",
    },
    {
      id: 8,
      name: "Esports & Tournaments",
      threads: "12.7k",
      interactions: "298.4k",
      image:
        "https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      link: "/gaming-forum/esports",
    },
    {
      id: 3,
      name: "Battle Royale Zone",
      threads: "22.1k",
      interactions: "456.2k",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      link: "/gaming-forum/battle-royale",
    },
    {
      id: 21,
      name: "Gaming Events & Meetups",
      threads: "2.8k",
      interactions: "89.7k",
      image:
        "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      link: "/gaming-forum/events",
    },
    {
      id: 13,
      name: "Game Announcements",
      threads: "1.9k",
      interactions: "345.6k",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      link: "/gaming-forum/announcements",
    },
    {
      id: 32,
      name: "Gaming Hardware & Peripherals",
      threads: "1.2k",
      interactions: "28.4k",
      image:
        "https://images.unsplash.com/photo-1587829741301-dc798b83add3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      link: "/gaming-forum/hardware",
    },
    {
      id: 29,
      name: "Game Development Corner",
      threads: "856",
      interactions: "19.2k",
      image:
        "https://images.unsplash.com/photo-1558618047-3c8c46b5b21e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      link: "/gaming-forum/development",
    },
    {
      id: 30,
      name: "Gaming News & Updates",
      threads: "5.3k",
      interactions: "112.8k",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      link: "/gaming-forum/news",
    },
    {
      id: 5,
      name: "Off-Topic Gaming Lounge",
      threads: "18.9k",
      interactions: "342.7k",
      image:
        "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      link: "/gaming-forum/off-topic",
    },
    {
      id: 4,
      name: "Gaming Hall of Fame",
      threads: "1.2k",
      interactions: "89.3k",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      link: "/gaming-forum/hall-of-fame",
    },
    {
      id: 27,
      name: "Top Gamers Spotlight",
      threads: "245",
      interactions: "12.4k",
      image:
        "https://images.unsplash.com/photo-1570549717069-d3d6e3720c96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      link: "/gaming-forum/top-gamers",
    },
    {
      id: 6,
      name: "Game Feedback Hub",
      threads: "4.7k",
      interactions: "78.9k",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      link: "/gaming-forum/feedback",
    },
    {
      id: 15,
      name: "Gaming Polls & Surveys",
      threads: "1.8k",
      interactions: "45.6k",
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      link: "/gaming-forum/polls",
    },
    {
      id: 16,
      name: "Gaming Tips & Strategies",
      threads: "8.4k",
      interactions: "156.2k",
      image:
        "https://images.unsplash.com/photo-1489599199158-7e7a1e4a1e05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      link: "/gaming-forum/tips",
    },
    {
      id: 26,
      name: "Game Streaming Hub",
      threads: "1.1k",
      interactions: "23.4k",
      image:
        "https://images.unsplash.com/photo-1611162617213-7d15d3e8e5c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      link: "/gaming-forum/streaming",
    },
    {
      id: 14,
      name: "Game Patch Notes",
      threads: "3.2k",
      interactions: "67.8k",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      link: "/gaming-forum/patch-notes",
    },
    {
      id: 22,
      name: "Game Bug Reports",
      threads: "5.6k",
      interactions: "134.2k",
      image:
        "https://images.unsplash.com/photo-1558618047-3c8c46b5b21e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      link: "/gaming-forum/bugs",
    },
    {
      id: 24,
      name: "Gaming Milestones",
      threads: "678",
      interactions: "34.1k",
      image:
        "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      link: "/gaming-forum/milestones",
    },
    {
      id: 28,
      name: "Frame Rate Challenges",
      threads: "456",
      interactions: "12.8k",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      link: "/gaming-forum/fps-challenges",
    },
    {
      id: 31,
      name: "Mobile Gaming Revolution",
      threads: "89",
      interactions: "2.3k",
      image:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      link: "/gaming-forum/mobile-revolution",
    },
    {
      id: 25,
      name: "Next-Gen Mobile Games",
      threads: "2.1k",
      interactions: "45.9k",
      image:
        "https://images.unsplash.com/photo-1611921093905-1f579e3b4b1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      link: "/gaming-forum/next-gen",
    },
    {
      id: 23,
      name: "Gaming PC vs Mobile",
      threads: "3.4k",
      interactions: "67.2k",
      image:
        "https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      link: "/gaming-forum/pc-vs-mobile",
    },
    {
      id: 20,
      name: "Retro Gaming Nostalgia",
      threads: "1.5k",
      interactions: "28.7k",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      link: "/gaming-forum/retro",
    },
    {
      id: 11,
      name: "Indie Game Showcase",
      threads: "7.8k",
      interactions: "123.4k",
      image:
        "https://images.unsplash.com/photo-1489599199158-7e7a1e4a1e05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      link: "/gaming-forum/indie",
    },
    {
      id: 2,
      name: "Casual Gaming Zone",
      threads: "9.1k",
      interactions: "156.8k",
      image:
        "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      link: "/gaming-forum/casual",
    },
    {
      id: 10,
      name: "Competitive Gaming",
      threads: "4.3k",
      interactions: "89.6k",
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      link: "/gaming-forum/competitive",
    },
    {
      id: 18,
      name: "VR/AR Gaming",
      threads: "2.7k",
      interactions: "45.2k",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      link: "/gaming-forum/vrar",
    },
    {
      id: 17,
      name: "Classic Console Emulation",
      threads: "3.1k",
      interactions: "67.9k",
      image:
        "https://images.unsplash.com/photo-1611162617213-7d15d3e8e5c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      link: "/gaming-forum/emulation",
    },
    {
      id: 12,
      name: "Gaming Accessories",
      threads: "2.4k",
      interactions: "56.3k",
      image:
        "https://images.unsplash.com/photo-1587829741301-dc798b83add3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      link: "/gaming-forum/accessories",
    },
  ];

  return (
    <div className="forum-group-wrapper">
      <div role="list" aria-label="Gaming Forums list" className="forum-list-wrapper">
        {forums.map((forum, index) => (
          <div key={forum.id} role="listitem">
            <a
              href={forum.link}
              role="link"
              tabIndex={0}
              className="forum-item-wrapper flex items-center p-4 hover:bg-gray-100 rounded-lg transition-colors"
              data-showparamsapp={JSON.stringify({
                cfrom: "001|007|02|250",
                pos: index,
                forum_id: forum.id,
                forum_name: forum.name,
                tab_id: 2,
                tab_name: "Gaming Forums",
              })}
              data-clickparamsapp={JSON.stringify({
                cfrom: "001|007|01|250",
                pos: index,
                forum_id: forum.id,
                forum_name: forum.name,
                tab_id: 2,
                tab_name: "Gaming Forums",
              })}
              data-clickparamsga={JSON.stringify({
                event: "GamingForumsBannerClick",
                bannerName: forum.name,
                linkDestination: forum.link,
              })}
            >
              <img
                src={forum.image}
                alt={`${forum.name} forum`}
                className="forum-pic w-16 h-16 mr-4 rounded-lg object-cover shadow-md"
                loading="lazy"
              />
              <div className="mid flex-1">
                <div className="forum-name text-lg font-semibold text-gray-800">
                  {forum.name}
                </div>
                <div className="nums text-gray-600 text-sm mt-1">
                  <span className="theme-num mr-2">🧵 {forum.threads}</span>
                  <span className="interaction-num">💬 {forum.interactions}</span>
                </div>
              </div>
              <div className="link-icon-wrapper ml-2">
                <svg
                  className="w-4 h-4 text-gray-400 hover:text-blue-500 transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </a>
          </div>
        ))}
      </div>
      <div className="no-result text-center py-4 text-gray-500">
        <div className="flex items-center justify-center">
          <svg
            className="w-6 h-6 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2h10a2 2 0 012 2v2M7 7V5a2 2 0 012-2h8a2 2 0 012 2v2"
            />
          </svg>
          No more forums to explore
        </div>
      </div>
    </div>
  );
};

export default ForumTab;