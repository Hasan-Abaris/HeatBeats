export default function CultureTab() {
  const data = [
    {
      title: "Development Squad",
      description:
        "Our devs are the backbone of HeartBeats. They design, build, and optimize every line of code that powers our games, tournaments, and live systems. Innovation and performance are their daily grind — because in gaming, milliseconds matter.",
      image: "/images/courses/pubg.jpg",
      align: "left",
    },
    {
      title: "Creative & Media Crew",
      description:
        "The Creative Crew brings stories to life. From dynamic video edits to streaming overlays and event graphics, they ensure that every visual feels alive and every live stream looks electric. They are the soul behind our content.",
      image: "/images/courses/amongus-course.jpg",
      align: "right",
      name: "Riya Kapoor",
      position: "Head of Live & Media",
    },
    {
      title: "Community Team",
      description:
        "HeartBeats is nothing without its players — and our community team keeps that heart beating strong. From hosting Discord events to moderating streams and organizing challenges, they make every gamer feel at home.",
      image: "/images/courses/unity.jpg",
      align: "left",
      name: "Meera Joshi",
      position: "Community Manager",
    },
    {
      title: "Event & Esports Team",
      description:
        "Our event team runs the adrenaline show — from esports tournaments to local gaming fests. They coordinate everything: sign-ups, live brackets, prize pools, and those jaw-dropping grand finals moments that players never forget.",
      image: "/images/courses/esports.jpg",
      align: "right",
    },
    {
      title: "Support & Success Team",
      description:
        "This squad is the heartbeat of player experience. They help gamers with accounts, event queries, or tech issues — always with speed and empathy. They ensure that no player is left behind, no matter the challenge.",
      image: "/images/courses/podcast1.jpg",
      align: "left",
      name: "Abhishek Kumar",
      position: "Player Support Head",
    },
    {
      title: "Core Admin Team",
      description:
        "Our admin crew keeps everything running behind the scenes — from talent partnerships and sponsorships to player outreach. They ensure HeartBeats stays organized, focused, and unstoppable.",
      image: "/images/courses/podcast2.jpg",
      align: "right",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto mt-6 p-4 text-gray-800">
      <div className="text-center mb-10">
        <h3 className="text-4xl font-extrabold text-green-700 mb-3">
          CULTURE AT HEARTBEATS
        </h3>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          At HeartBeats, we’re not just building a gaming platform — we’re building a family. 
          Our culture is powered by creativity, teamwork, late-night game sessions, and a shared love for competition. 
          Every idea matters. Every gamer counts.
        </p>
      </div>

      {data.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row gap-6 mb-10 ${
            item.align === "right" ? "md:flex-row-reverse" : ""
          }`}
        >
          <div className="md:w-1/2">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-72 object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform"
            />
          </div>
          <div className="md:w-1/2 flex flex-col justify-center bg-white rounded-2xl shadow-md p-6">
            <h4 className="text-2xl font-semibold mb-2 text-green-700">
              {item.title}
            </h4>
            <p className="text-gray-700 mb-3">{item.description}</p>
            {item.name && (
              <p className="font-semibold text-gray-900">
                {item.name} — <span className="text-gray-600">{item.position}</span>
              </p>
            )}
            <button className="mt-4 bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-xl transition-all duration-200">
              Join This Squad
            </button>
          </div>
        </div>
      ))}

      {/* Awards & Recognition Section */}
      <div className="bg-gray-100 py-10 rounded-3xl mt-12 shadow-inner">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-green-700 mb-6">
            AWARDS & RECOGNITION
          </h2>
          <p className="text-gray-600 mb-8">
            HeartBeats has been recognized for its innovation in gaming, community engagement, 
            and esports event management across the nation.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-8">
            <div className="bg-white shadow-lg rounded-2xl p-6 max-w-xs">
              <img
                src="/images/gaming-award1.png"
                alt="Award"
                className="w-40 mx-auto mb-4"
              />
              <p className="text-gray-700 text-sm">
                Winner — “Best Emerging Gaming Community 2024” by GameOn India.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-2xl p-6 max-w-xs">
              <img
                src="/images/gaming-award2.png"
                alt="Award"
                className="w-40 mx-auto mb-4"
              />
              <p className="text-gray-700 text-sm">
                Featured as “Top 5 Esports Startups to Watch” by TechArena Weekly.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-10">
        <h1 className="text-3xl font-bold text-center md:text-left">
          Ready to join the HeartBeats team?
        </h1>
        <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200">
          APPLY NOW
        </button>
      </div>
    </div>
  );
}
