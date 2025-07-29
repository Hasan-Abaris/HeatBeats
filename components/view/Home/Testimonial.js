"use client";
import { useState, useEffect } from "react";
// import { FaQuoteLeft, FaStar } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Luqman",
    image: "/images/blank.png",
    company: "Rating Review Platform, Saudi Arabia",
    feedback:
      "Over the years, SLA Consultants India has provided exceptional service and value in the design and development of several complex web-based software systems. The dedication and knowledge of their programming team has resulted in the successful launch – on time and on budget – of our systems. I can unconditionally recommend SLA Consultants India services.",
  },
  {
    id: 2,
    name: "Anuj Mittal",
    company: "Shri Ram Group, INDIA",
    image: "/images/blank.png",
    feedback:
      "The successful integration delivered by SLA Consultants India was critical to the successful operation of our client’s business, and all project stakeholders are pleased with the solution provided.",
  },
  {
    id: 3,
    name: "Marta Malak",
    company: "USquareHomes, Dubai",
    image: "/images/blank.png",
    feedback:
      "SLA Consultants India was very efficient and fast in providing me the application I needed for a project I was working on. They beat the cost of every other developer that had applied for the job and finished the job ahead of schedule.",
  },
  {
    id: 4,
    name: "Andwele Roberts",
    company: "HoH Ltd, USA",
    image: "/images/blank.png",
    feedback:
      "I wanted to convey what a great job I think the team did on this recent Listing Manager project. You certainly exceeded my expectations.",
  },
  {
    id: 5,
    name: "Vineet Madan",
    company: "Madan Group, INDIA",
    image: "/images/blank.png",
    feedback:
      "Amazing Company. I am really happy to meet SLA Consultants India. The team is very sharp and nice people. They are dedicated and committed to the client.",
  },
  {
    id: 6,
    name: "Dinesh Kumar",
    company: "Kiara Jewellers, Dubai",
    image: "/images/blank.png",
    feedback:
      "Great work, very good communication, clean code. The app was approved in the iTunes Store on the first try.",
  },
  {
    id: 7,
    name: "Mukesh",
    company: "Digital Solutions CRM, INDIA",
    image: "/images/blank.png",
    feedback:
      "SLA Consultants India was very patient and professional with us throughout the whole job but especially when we made changes to the original proposal.",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center text-center p-5 py-10  bg-white">
      <h2 className="text-3xl font-narrow md:text-4xl font-bold font- uppercase text-bluedark mb-10  ">
        What Our Clients Say
      </h2>

      {/* Testimonial Card */}
      <div className="relative max-w-3xl p-8 bg-gray-50 border rounded-xl shadow-lg text-gray-800 transition-all duration-500 ease-in-out">
        {/* <FaQuoteLeft className="absolute top-4 left-4 text-gray-300 text-4xl" /> */}
        <div className="flex flex-col items-center">
          <img
            src={testimonials[activeIndex].image}
            alt={testimonials[activeIndex].name}
            className="w-20 h-20 rounded-full border-4 border-primary shadow-md"
          />

          <p className="mt-4 text-lg font-medium italic">
            "{testimonials[activeIndex].feedback}"
          </p>

          {/* Star Ratings */}
          {/* <div className="flex mt-3 text-yellow-500">
            {Array.from({ length: testimonials[activeIndex].rating }).map(
              (_, index) => (
                <FaStar key={index} />
              )
            )}
          </div> */}

          <div className="mt-4">
            <span className="text-lg font-semibold text-primary">
              {testimonials[activeIndex].name}
            </span>
            <p className="text-sm text-gray-500">
              {testimonials[activeIndex].company}
            </p>
          </div>
        </div>
      </div>

      {/* Avatar Buttons */}
      <div className="mt-8 flex gap-4 overflow-x-auto w-full h-fit items-center p-2 md:justify-center justify-start">
        {testimonials.map((testimonial, index) => (
          <button
            key={testimonial.id}
            className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 ${
              activeIndex === index
                ? "border-blue-500 ring-2 ring-blue-300 scale-110"
                : "border-gray-300 opacity-70 hover:opacity-100"
            } transition duration-300 flex-shrink-0`}
            onClick={() => setActiveIndex(index)}
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="rounded-full w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
