import { MailIcon } from "lucide-react";

export default function JoinUsTab() {
  return (
    <div className="bg-white text-gray-800 px-6 md:px-16 py-12 space-y-16">

      {/* REASONS TO JOIN SECTION */}
      <section>
        <h2 className="text-center text-3xl font-extrabold text-green-700 mb-10">
          WHY JOIN HEARTBEATS?
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          {[
            {
              title: "Build the Future of Gaming",
              content:
                "At HeartBeats, you get to work with passionate gamers, streamers, and developers who are redefining community-driven gaming. Every idea you share can shape how players experience our world.",
              icon: "🎮",
            },
            {
              title: "Freedom to Create",
              content:
                "We believe in creativity without limits. Whether you’re coding, designing, streaming, or strategizing events — you’re free to experiment, explore, and bring your ideas to life.",
              icon: "⚡",
            },
            {
              title: "Teamwork Over Titles",
              content:
                "No formal suits, no ego walls. Just gamers, creators, and dreamers working side by side. Collaboration is our power-up — we grow stronger together.",
              icon: "🤝",
            },
            {
              title: "Always Leveling Up",
              content:
                "We never stop learning — new tools, new games, new trends. HeartBeats supports your growth through workshops, mentorship, and access to exclusive industry events.",
              icon: "🚀",
            },
          ].map((item, i) => (
            <div key={i} className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-700 text-xl font-bold">{item.icon}</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1 text-gray-900">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-700">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* OPEN POSITIONS SECTION */}
      <div className="bg-gray-100 px-6 md:px-20 py-16 rounded-3xl shadow-inner">
        <h2 className="text-center text-3xl font-bold mb-4 text-green-700">
          OPEN POSITIONS
        </h2>
        <p className="text-center text-sm text-gray-700">
          Send your portfolio or CV to{" "}
          <a href="mailto:careers@heartbeats.gg" className="text-green-700 underline">
            careers@heartbeats.gg
          </a>
          . We’d love to know what makes you tick 🎧
        </p>
        <p className="text-center text-sm text-gray-700 mb-12">
          Or check out our current openings below and join the squad.
        </p>

        <div className="space-y-12 text-gray-800 max-w-6xl mx-auto">
          <div>
            <h3 className="text-lg font-bold mb-4 text-green-700">🎨 CREATIVE & MEDIA</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <p>Video Editor (Gaming)</p>
                <p className="text-sm text-gray-500">Remote / Hybrid</p>
              </div>
              <div>
                <p>Graphic Designer – Esports</p>
                <p className="text-sm text-gray-500">Remote</p>
              </div>
              <div>
                <p>Social Media Coordinator</p>
                <p className="text-sm text-gray-500">Delhi / Mumbai</p>
              </div>
            </div>
          </div>

          <hr className="border-gray-300" />

          <div>
            <h3 className="text-lg font-bold mb-4 text-green-700">💻 DEVELOPMENT</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <p>Frontend Developer – React & Tailwind</p>
                <p className="text-sm text-gray-500">Remote</p>
              </div>
              <div>
                <p>Backend Developer – Node.js</p>
                <p className="text-sm text-gray-500">Remote</p>
              </div>
              <div>
                <p>Game Systems Engineer</p>
                <p className="text-sm text-gray-500">Bangalore</p>
              </div>
            </div>
          </div>

          <hr className="border-gray-300" />

          <div>
            <h3 className="text-lg font-bold mb-4 text-green-700">🎤 COMMUNITY & EVENTS</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <p>Community Moderator (Discord)</p>
                <p className="text-sm text-gray-500">Remote</p>
              </div>
              <div>
                <p>Event Coordinator – Esports</p>
                <p className="text-sm text-gray-500">Mumbai</p>
              </div>
              <div>
                <p>Streamer Relations Manager</p>
                <p className="text-sm text-gray-500">Remote / Hybrid</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* NEWSLETTER + CONTACT SECTION */}
      <div className="bg-white px-6 md:px-20 py-16 border-t border-gray-200 text-left">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              Stay in the Loop 💌
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Subscribe for job openings, tournaments, and game dev news.
            </p>
            <div className="flex w-full max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-l-md focus:outline-none"
              />
              <button className="bg-green-700 text-white px-6 py-3 rounded-r-md font-semibold hover:bg-green-800 transition-all">
                SIGN UP
              </button>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              TALK TO OUR TEAM
            </h3>
            <div className="flex items-center space-x-2 text-gray-600">
              <MailIcon className="w-5 h-5 text-green-700" />
              <a href="mailto:careers@heartbeats.gg" className="text-green-700">
                careers@heartbeats.gg
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
