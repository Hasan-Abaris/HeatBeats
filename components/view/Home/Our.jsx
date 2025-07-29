
import {
  FaCode,
  FaMobileAlt,
  FaGlobe,
  FaShoppingCart,
  FaCloud,
  FaLaptopCode,
} from "react-icons/fa";

const services = [
  {
    title: "Web Development",
    description:
      "We create responsive, user-friendly, and high-performance websites tailored to your business needs.",
    icon: <FaGlobe className="text-5xl text-[#0473b7]" />,
    image: "/images/web-dev.jpg",
  },
  {
    title: "Job-Portal, Inernships Development",
    description:
      "Build feature-rich and scalable Job-Portal, Inernshipslications for both Android and iOS platforms.",
    icon: <FaMobileAlt className="text-5xl text-[#0473b7]" />,

    image: "/images/web-dev.jpg",
  },
  {
    title: "E-commerce Solutions",
    description:
      "Develop secure and scalable e-commerce platforms that enhance customer experience and drive sales.",
    icon: <FaShoppingCart className="text-5xl text-[#0473b7]" />,
    image: "/images/web-dev.jpg",
  },
  {
    title: "Cloud Solutions",
    description:
      "Optimize your infrastructure with cloud computing solutions that improve scalability, security, and efficiency.",
    icon: <FaCloud className="text-5xl text-[#0473b7]" />,
    image: "/images/web-dev.jpg",
  },
  {
    title: "UI/UX Design",
    description:
      "Crafting visually appealing, intuitive, and user-friendly interfaces that enhance user engagement.",
    icon: <FaLaptopCode className="text-5xl text-[#0473b7]" />,
    image: "/images/web-dev.jpg",
  },
  {
    title: "Custom Software Development",
    description:
      "Develop tailored software solutions to meet your business needs and improve operational efficiency.",
    icon: <FaCode className="text-5xl text-[#0473b7]" />,
    image: "/images/web-dev.jpg",
  },
];

const Our = () => {
  return (
    <section className=" bg-white text-gray-900 py-12 px-6">
      <div className="max-w-screen-xl mx-auto px-6">
        <h2 className="text-center text-4xl font-bold mb-4 text-black">
          Our Services
        </h2>
        <p className="text-center text-lg text-gray-700 mb-8">
          We provide cutting-edge digital solutions to help businesses grow and
          succeed in the modern era.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-2xl flex flex-col h-full shadow-lg"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h2 className="text-2xl font-bold text-center textBlueDark">
                {service.title}
              </h2>
              <p className="text-gray-800 text-center flex-grow mt-2">
                {service.description}
              </p>

              {/* Hover Effect Applied Here */}
              <div className="relative group h-48 w-full mt-4 cursor-pointer overflow-hidden rounded-2xl">
                {/* Image with Zoom & Rotate Effect */}
                <img
                  width={500}
                  height={500}
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                />
                {/* Dark Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                {/* "See More" Button on Hover */}
                <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                  <button className="rounded-full bg-neutral-900 py-2 px-3.5 text-sm text-white shadow shadow-black/60">
                    See More
                  </button>
                </div>
              </div>
              {/* Hover Effect Ends Here */}
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <button className="bg-[#0473b7] text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-[#070f4d] transition">
            Show More ➜
          </button>
        </div>
      </div>
    </section>
  );
};

export default Our;
