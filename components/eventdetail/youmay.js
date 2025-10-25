import React from "react";

const relatedEvents = [
  {
    id: 0,
    title: "Valorant Championship 2025",
    img: "/images/courses/ludo.jpg",
    link: "#",
  },
  {
    id: 1,
    title: "Call of Duty: Warzone Invitational",
    img: "/images/courses/ludo.jpg",
    link: "#",
  },
  {
    id: 2,
    title: "Fortnite Battle Royale Showdown",
    img: "/images/courses/ludo.jpg",
    link: "#",
  },
  {
    id: 3,
    title: "PUBG Mobile Tournament",
    img: "/images/courses/ludo.jpg",
    link: "#",
  },
  {
    id: 4,
    title: "Minecraft Speedrun Contest",
    img: "/images/courses/ludo.jpg",
    link: "#",
  },
  {
    id: 5,
    title: "League of Legends Esports Finals",
    img: "/images/courses/ludo.jpg",
    link: "#",
  },
  {
    id: 6,
    title: "FIFA 25 Ultimate Tournament",
    img: "/images/courses/ludo.jpg",
    link: "#",
  },
  {
    id: 7,
    title: "Dota 2 International Qualifiers",
    img: "/images/courses/ludo.jpg",
    link: "#",
  },
  {
    id: 8,
    title: "CS:GO Pro League",
    img: "/images/courses/ludo.jpg",
    link: "#",
  },
  {
    id: 9,
    title: "Rocket League Championship Series",
    img: "/images/courses/ludo.jpg",
    link: "#",
  },
];

function Youmay() {
  return (
    <div className="my-8 px-8">
      <h2 className="text-2xl font-bold mb-2">You May Also Like</h2>
      <p className="text-gray-600 mb-4">Exciting gaming events around you, join now!</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {relatedEvents.map((event) => (
          <a
            key={event.id}
            href={event.link}
            className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
          >
            {event.img ? (
              <img
                src={event.img}
                alt={event.title}
                className="w-full h-40 object-cover"
              />
            ) : (
              <div className="w-full h-40 bg-gray-200 flex items-center justify-center text-gray-400">
                No Image
              </div>
            )}
            <div className="p-3">
              <h3 className="text-sm font-medium">{event.title}</h3>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Youmay;
