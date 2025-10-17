import React, { useState } from "react";

const SupportTab = () => {
  const [threads, setThreads] = useState([
    {
      id: "115811",
      abstract: "When will the next update for PUBG Mobile fix the matchmaking issues in ranked mode?",
      link: "https://community.iqoo.com/in/thread/115811",
      views: 3,
      comments: 0,
      time: "10 mins ago",
      indent: 0,
      pos: 0,
      category: "Game Updates",
      status: "Unresolved",
      likes: 0,
    },
    {
      id: "115805",
      abstract: "Call of Duty Mobile crashing during multiplayer matches on iQOO devices – is it a graphics driver issue?",
      link: "https://community.iqoo.com/in/thread/115805",
      views: 1,
      comments: 0,
      time: "29 mins ago",
      indent: 0,
      pos: 1,
      category: "Game Crashes",
      status: "Unresolved",
      likes: 0,
    },
    {
      id: "115788",
      abstract: "Overheating while playing Genshin Impact on high settings – any optimization tips for iQOO phones?",
      link: "https://community.iqoo.com/in/thread/115788",
      views: 7,
      comments: 0,
      time: "1 hr ago",
      indent: 0,
      pos: 2,
      category: "Performance Issues",
      status: "Unresolved",
      likes: 2,
    },
    {
      id: "115784",
      abstract: "Request for better controller support in Fortnite mobile – iQOO users struggling with input lag.",
      link: "https://community.iqoo.com/in/thread/115784",
      views: 9,
      comments: 0,
      time: "1 hr ago",
      indent: 0,
      pos: 3,
      category: "Feature Requests",
      status: "Unresolved",
      likes: 1,
    },
    {
      id: "115782",
      abstract: "My support ticket for Among Us connection errors hasn't been resolved yet – need help with NAT type on iQOO.",
      link: "https://community.iqoo.com/in/thread/115782",
      views: 9,
      comments: 0,
      time: "1 hr ago",
      indent: 0,
      pos: 4,
      category: "Network Issues",
      status: "Unresolved",
      likes: 0,
    },
    {
      id: "115780",
      abstract: "How to reduce lag in Free Fire on iQOO Neo series? Graphics settings not helping.",
      link: "https://community.iqoo.com/in/thread/115780",
      views: 4,
      comments: 0,
      time: "1 hr ago",
      indent: 0,
      pos: 5,
      category: "Performance Issues",
      status: "Resolved",
      likes: 3,
    },
    {
      id: "115764",
      abstract: "Minecraft Pocket Edition not loading worlds after the latest update – bug report.",
      link: "https://community.iqoo.com/in/thread/115764",
      views: 11,
      comments: 1,
      time: "2 hrs ago",
      indent: 0,
      pos: 6,
      category: "Game Bugs",
      status: "Resolved",
      likes: 1,
    },
    {
      id: "115763",
      abstract: "Clash of Clans base building glitches on Android – anyone else experiencing this?",
      link: "https://community.iqoo.com/in/thread/115763",
      views: 7,
      comments: 0,
      time: "2 hrs ago",
      indent: 0,
      pos: 7,
      category: "Game Bugs",
      status: "Unresolved",
      likes: 0,
    },
    {
      id: "115755",
      abstract: "Waiting for Roblox optimization update for mid-range devices like iQOO Z series.",
      link: "https://community.iqoo.com/in/thread/115755",
      views: 12,
      comments: 0,
      time: "2 hrs ago",
      indent: 0,
      pos: 8,
      category: "Game Updates",
      status: "Unresolved",
      likes: 2,
    },
    {
      id: "115726",
      abstract: "League of Legends: Wild Rift – frequent disconnects in ranked games.",
      link: "https://community.iqoo.com/in/thread/115726",
      views: 21,
      comments: 1,
      time: "4 hrs ago",
      indent: 1,
      pos: 9,
      category: "Network Issues",
      status: "Resolved",
      likes: 4,
    },
    {
      id: "115720",
      abstract: "Battery drain issues while playing Asphalt 9 on iQOO devices – any fixes?",
      link: "https://community.iqoo.com/in/thread/115720",
      views: 15,
      comments: 2,
      time: "5 hrs ago",
      indent: 0,
      pos: 10,
      category: "Performance Issues",
      status: "Unresolved",
      likes: 3,
    },
    {
      id: "115715",
      abstract: "Brawl Stars matchmaking unfair after recent balance patch – iQOO players affected.",
      link: "https://community.iqoo.com/in/thread/115715",
      views: 8,
      comments: 1,
      time: "6 hrs ago",
      indent: 0,
      pos: 11,
      category: "Game Balance",
      status: "Resolved",
      likes: 0,
    },
    {
      id: "115710",
      abstract: "Request for cross-play improvements in Apex Legends Mobile on Android.",
      link: "https://community.iqoo.com/in/thread/115710",
      views: 6,
      comments: 0,
      time: "7 hrs ago",
      indent: 0,
      pos: 12,
      category: "Feature Requests",
      status: "Unresolved",
      likes: 1,
    },
    {
      id: "115705",
      abstract: "Screen tearing in PUBG: New State during high FPS mode on iQOO.",
      link: "https://community.iqoo.com/in/thread/115705",
      views: 10,
      comments: 3,
      time: "8 hrs ago",
      indent: 0,
      pos: 13,
      category: "Game Crashes",
      status: "Unresolved",
      likes: 2,
    },
    {
      id: "115700",
      abstract: "How to mod GTA San Andreas on mobile without bans? iQOO specific guide needed.",
      link: "https://community.iqoo.com/in/thread/115700",
      views: 14,
      comments: 1,
      time: "9 hrs ago",
      indent: 0,
      pos: 14,
      category: "Mods & Hacks",
      status: "Unresolved",
      likes: 0,
    },
    {
      id: "115695",
      abstract: "Valorant Mobile beta access issues – stuck on waiting list.",
      link: "https://community.iqoo.com/in/thread/115695",
      views: 18,
      comments: 4,
      time: "10 hrs ago",
      indent: 0,
      pos: 15,
      category: "Game Access",
      status: "Resolved",
      likes: 5,
    },
    {
      id: "115690",
      abstract: "Candy Crush Saga levels too hard after update – energy system broken.",
      link: "https://community.iqoo.com/in/thread/115690",
      views: 5,
      comments: 0,
      time: "11 hrs ago",
      indent: 0,
      pos: 16,
      category: "Game Balance",
      status: "Unresolved",
      likes: 1,
    },
    {
      id: "115685",
      abstract: "Pokémon GO AR mode not working properly on iQOO cameras.",
      link: "https://community.iqoo.com/in/thread/115685",
      views: 13,
      comments: 2,
      time: "12 hrs ago",
      indent: 0,
      pos: 17,
      category: "Hardware Issues",
      status: "Unresolved",
      likes: 3,
    },
    {
      id: "115680",
      abstract: "Mobile Legends: Bang Bang hero balance patch feedback thread.",
      link: "https://community.iqoo.com/in/thread/115680",
      views: 20,
      comments: 5,
      time: "13 hrs ago",
      indent: 0,
      pos: 18,
      category: "Game Updates",
      status: "Resolved",
      likes: 6,
    },
    {
      id: "115675",
      abstract: "Stadia-like service for mobile games? Suggestions for iQOO cloud gaming.",
      link: "https://community.iqoo.com/in/thread/115675",
      views: 9,
      comments: 1,
      time: "14 hrs ago",
      indent: 0,
      pos: 19,
      category: "Feature Requests",
      status: "Unresolved",
      likes: 4,
    },
    {
      id: "115670",
      abstract: "Critical Ops FPS drops after installing new maps – optimization needed.",
      link: "https://community.iqoo.com/in/thread/115670",
      views: 16,
      comments: 3,
      time: "15 hrs ago",
      indent: 0,
      pos: 20,
      category: "Performance Issues",
      status: "Unresolved",
      likes: 2,
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(false);
  const [likedThreads, setLikedThreads] = useState({});

  const categories = [
    "All",
    "Game Updates",
    "Game Crashes",
    "Performance Issues",
    "Feature Requests",
    "Network Issues",
    "Game Bugs",
    "Game Balance",
    "Mods & Hacks",
    "Game Access",
  ];

  const filteredThreads = threads.filter(
    (thread) =>
      (selectedCategory === "All" || thread.category === selectedCategory) &&
      thread.abstract.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleLike = (threadId) => {
    setLikedThreads((prev) => ({
      ...prev,
      [threadId]: !prev[threadId],
    }));
  };

  const handleLoadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      // Simulate loading more threads (in a real app, fetch from API)
    }, 1000);
  };

  return (
    <div className="main-left max-w-4xl mx-auto p-4 sm:p-6 bg-gray-100 min-h-screen">
      {/* Search Bar and Filters */}
      <div className="mb-6 flex flex-col sm:flex-row gap-4">
        <input
          type="text"
          placeholder="Search gaming threads..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full sm:w-1/2 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Search gaming support threads"
        />
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? "bg-blue-500 text-white"
                  : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-200"
              }`}
              aria-pressed={selectedCategory === category}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Thread List */}
      <div role="list" aria-live="polite" className="list-wrapper space-y-4">
        {filteredThreads.map((thread, index) => (
          <div
            key={thread.id}
            role="listitem"
            aria-posinset={index + 1}
            aria-setsize={filteredThreads.length}
            className="bbs-thread-item bg-white rounded-lg shadow-md p-4 sm:p-6 hover:shadow-lg transition-shadow duration-200"
            data-showparamsapp={JSON.stringify({
              cfrom: "001|005|02|250",
              tab_id: 4,
              tab_name: "Gaming Support",
              pos: thread.pos,
              tid: thread.id,
            })}
            data-clickparamsapp={JSON.stringify({
              cfrom: "001|005|01|250",
              tab_id: 4,
              tab_name: "Gaming Support",
              pos: thread.pos,
              tid: thread.id,
            })}
          >
            <div className="support-thread">
              <div data-indent={thread.indent} className="reply-content flex items-start">
                {thread.indent === 1 && (
                  <span
                    role="img"
                    aria-label="Replied"
                    className="w-5 h-5 mr-2 text-blue-500"
                    title="This thread has a reply"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                      />
                    </svg>
                  </span>
                )}
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-sm font-semibold text-blue-600">
                      {thread.category}
                    </span>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        thread.status === "Resolved"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {thread.status}
                    </span>
                  </div>
                  <a
                    href={thread.link}
                    className="bbs-thread-abstract text-gray-800 font-medium hover:text-blue-600 transition-colors"
                    aria-label={`Thread: ${thread.abstract}`}
                  >
                    {thread.abstract}
                  </a>
                </div>
              </div>
              <div className="bbs-thread-bottom flex justify-between items-center mt-4">
                <div className="bbs-thread-num-list flex space-x-4 items-center">
                  <span
                    aria-label={`Viewed ${thread.views} times`}
                    className="text-gray-600 text-sm flex items-center"
                    title={`${thread.views} views`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                    {thread.views}
                  </span>
                  <span
                    aria-label={`Commented ${thread.comments} times`}
                    className="text-gray-600 text-sm flex items-center"
                    title={`${thread.comments} comments`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                      />
                    </svg>
                    {thread.comments}
                  </span>
                  <button
                    onClick={() => handleLike(thread.id)}
                    role="button"
                    tabIndex={0}
                    aria-pressed={likedThreads[thread.id] || false}
                    aria-label={`Like this thread, currently ${thread.likes + (likedThreads[thread.id] ? 1 : 0)} likes`}
                    className={`text-sm flex items-center transition-colors ${
                      likedThreads[thread.id]
                        ? "text-blue-500"
                        : "text-gray-600 hover:text-blue-500"
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 mr-1"
                      fill={likedThreads[thread.id] ? "currentColor" : "none"}
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m0-10l3-7h6m-6 7h6"
                      />
                    </svg>
                    {thread.likes + (likedThreads[thread.id] ? 1 : 0)}
                  </button>
                </div>
                <div className="bbs-thread-time text-gray-500 text-sm">
                  {thread.time}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Section */}
      <div data-type="1" className="vbs-scroll-more mt-6 text-center">
        {loading ? (
          <div
            className="scroll-loading flex items-center justify-center"
            role="alert"
            aria-live="polite"
            aria-atomic="true"
          >
            <svg
              className="animate-spin h-5 w-5 mr-3 text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            <span className="scroll-loading-text text-gray-600">Loading...</span>
          </div>
        ) : filteredThreads.length < threads.length ? (
          <button
            onClick={handleLoadMore}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            aria-label="Load more gaming threads"
          >
            Load More
          </button>
        ) : (
          <div
            className="vbs-scroll-status-prompt"
            role="alert"
            aria-live="polite"
            aria-atomic="true"
          >
            <p className="is-end text-center py-4 text-gray-500">No more gaming threads</p>
          </div>
        )}
        <div
          className="vbs-scroll-status-prompt hidden"
          role="alert"
          aria-live="polite"
          aria-atomic="true"
        >
          <p className="btn-try" aria-label="Loading error">
            <button
              onClick={handleLoadMore}
              className="text-blue-500 hover:underline"
              tabIndex={0}
            >
              Reload
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SupportTab;