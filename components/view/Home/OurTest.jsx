import { RiDoubleQuotesL } from "react-icons/ri";

const reviews = [
  {
    name: "John Doe",
    role: "Web Developer",
    icon: <RiDoubleQuotesL className="text-4xl text-[#0473b7]" />,
    image:
      "https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100270.jpg?w=740",
    feedback:
      "This platform has been amazing for me! It helped me enhance my coding skills with practical examples.",
  },
  {
    name: "Jane Smith",
    role: "UI/UX Designer",
    icon: <RiDoubleQuotesL className="text-4xl text-[#0473b7]" />,
    image:
      "https://img.freepik.com/free-photo/portrait-happy-young-woman-looking-camera_23-2147892777.jpg?w=740",
    feedback:
      "I love how user-friendly and interactive the platform is! It’s the perfect tool for designers.",
  },
  {
    name: "Mark Wilson",
    role: "Frontend Developer",
    icon: <RiDoubleQuotesL className="text-4xl text-[#0473b7]" />,
    image:
      "https://img.freepik.com/free-photo/close-up-view-strict-young-handsome-caucasian-man-wearing-glasses-standing-profile-view-isolated-crimson-wall_141793-79811.jpg?w=360",
    feedback:
      "The best learning platform I've used so far. I especially love the interactive tutorials and challenges.",
  },
];

const OurTest = () => {
  return (
    <section className="mt-16 mb-16 rounded-2xl mx-5 md:mx-10 text-gray-900 py-4 px-5">
      <div className="max-w-screen-xl mx-auto p-3 md:px-6">
        <h2 className="text-center text-4xl font-bold mb-12 text-black">
          Happy Clients
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-gray-200 p-6 rounded-2xl flex flex-col items-center h-full transition hover:scale-105"
            >
              {/* User Image */}
              <img
                src={review.image}
                alt={review.name}
                className="w-20 h-20 rounded-full mb-4 border-4 border-gray-300 object-cover"
              />

              {/* Quote Icon */}
              <div className="mb-4">{review.icon}</div>

              {/* Feedback */}
              <p className="text-gray-800 text-center flex-grow text-lg ">
                "{review.feedback}"
              </p>

              {/* Name & Role */}
              <div className="mt-4 text-center">
                <div className="text-lg font-bold">{review.name}</div>
                <div className="text-md text-gray-600 italic">{review.role}</div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Reviews Button */}
        <div className="mt-8 flex justify-center">
          <button className="bg-[#0473b7] text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-[#070f4d] transition">
            View All Reviews ➜
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurTest;
