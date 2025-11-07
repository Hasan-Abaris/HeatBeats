export default function AboutTab() {
  const teamMembers = [
    {
      name: "Ayaan Verma",
      role: "Founder & Community Head",
      education: "Game Developer & Esports Enthusiast",
      image: "/images/Educators/john.jpg",
      description: `Ayaan founded HeartBeats with a vision to build the most engaging gaming community — where players, streamers, and fans connect beyond the screen. He leads with creativity and a passion for innovation, making HeartBeats a home for gamers worldwide.`,
    },
    {
      name: "Riya Kapoor",
      role: "Head of Live & Media",
      education: "Digital Media Specialist",
      image: "/images/Educators/emily.jpg",
      description: `Riya is the heart of our live streaming and event production. She ensures that every broadcast, from casual streams to championship finals, delivers excitement, energy, and a flawless experience to our audience.`,
    },
    {
      name: "Arjun Sharma",
      role: "Lead Developer",
      education: "B.Tech in Computer Science",
      image: "/images/Educators/robert.jpg",
      description: `Arjun leads the tech behind HeartBeats — from real-time leaderboards to tournament matchmaking. His expertise in full-stack development ensures our platform stays smooth, fast, and secure.`,
    },
    {
      name: "Meera Joshi",
      role: "Community Manager",
      education: "BA in Communication & Media",
      image: "/images/Educators/jane.jpg",
      description: `Meera brings people together. She handles member engagement, tournaments, Discord events, and keeps the HeartBeats community buzzing with fun challenges and updates.`,
    },
  ];

  const mediaHighlights = [
    { id: 1, img: "/images/courses/chess.jpg" },
    { id: 2, img: "/images/courses/ludo.jpg" },
    { id: 3, img: "/images/courses/pubg.jpg" },
    { id: 4, img: "/images/courses/carrom.jpg" },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 text-gray-800">
      <h2 className="text-4xl font-extrabold text-center text-green-700 mb-8">
        Welcome to HeartBeats
      </h2>

      <div className="grid md:grid-cols-3 gap-8 mb-12 text-sm">
        <div>
          <h3 className="font-bold mb-2 text-lg text-green-700">Who We Are</h3>
          <p>
            HeartBeats is a vibrant game community built by players, for players.
            We’re more than just a platform — we’re a family of gamers, creators,
            and dreamers who share one passion: gaming that connects hearts.
          </p>
        </div>

        <div>
          <h3 className="font-bold mb-2 text-lg text-green-700">Our Vision</h3>
          <p>
            To build the world’s most inclusive gaming hub — where competitive
            players, streamers, and casual gamers unite through tournaments,
            live sessions, and collaborative gameplay.
          </p>
        </div>

        <div>
          <h3 className="font-bold mb-2 text-lg text-green-700">Our Mission</h3>
          <p>
            To empower every gamer with a stage to shine — whether it’s through
            live streams, competitive events, or creative showcases. We make
            gaming social, inspiring, and rewarding.
          </p>
        </div>
      </div>

      <h3 className="text-2xl font-semibold mb-6 text-center text-green-700">
        Meet Our Core Team
      </h3>
      <div className="space-y-6">
        {teamMembers.map((member, idx) => (
          <div
            key={idx}
            className="flex flex-col md:flex-row bg-white shadow-lg hover:shadow-xl p-5 rounded-2xl transition-all duration-300"
          >
            <div className="w-full md:w-1/4 flex justify-center items-start mb-4 md:mb-0">
              <img
                src={member.image}
                alt={member.name}
                width={120}
                height={120}
                className="rounded-full border-4 border-green-200"
              />
            </div>
            <div className="md:w-3/4 md:pl-6">
              <h4 className="font-bold text-lg text-gray-900">
                {member.name}
              </h4>
              <p className="italic text-sm text-gray-600 mb-1">
                {member.role}
              </p>
              <p className="text-sm mb-2 text-gray-700">
                <strong>Background:</strong> {member.education}
              </p>
              <p className="text-sm text-gray-600">{member.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="p-6 md:px-16 md:py-16 bg-gray-100 mt-10 rounded-3xl shadow-inner">
        <h2 className="text-2xl font-bold text-center mb-6 text-green-700">
          HeartBeats in the Spotlight
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Our journey has been featured in top gaming blogs, social media, and
          online events. Here’s a glimpse of our moments in the gaming world!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {mediaHighlights.map((item, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-xl shadow-lg hover:scale-105 transition-transform"
            >
              <img
                src={item.img}
                alt={`Gaming Highlight ${i + 1}`}
                className="w-full h-48 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
