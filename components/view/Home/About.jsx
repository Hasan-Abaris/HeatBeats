
import Link from "next/link";
import { FaLaptopCode } from "react-icons/fa";

const About = () => {
  return (
    <section className="bg-white md:py-16">
      <div className="max-w-screen-xl mx-auto p-5 md:px-10">
        {/* Upper Section (Image + Text) */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Image */}
          <div className="flex flex-col gap-10">
            <img
              className="rounded-lg object-cover h-[48%]"
              src="/images/web-dev.jpg"
              width={700}
              height={700}
              alt=""
            />
            <img
              className="rounded-lg object-cover h-[48%]"
              src="/images/common-image.jpg"
              width={700}
              height={700}
              alt=""
            />
          </div>

          {/* Text Content */}
          <div className=" p-5 md:p-5 rounded-2xl flex flex-col justify-center text-center md:text-start
          ">
            <h2 className="text-3xl font-bold mb-4 textBlueDark">
              Helping Businesses Grow Since 2006
            </h2>
            <p className="text-gray-700 text-lg">
              SLA Consultants India, a sister company of S3 Infotech Pvt Ltd, has been
              pioneering in web and Job-Portal, Inernshipslication development. With over 8+
              years of excellence, we have earned ISO 9001:2015 certification
              and received various startup recognitions. Our goal is to help
              businesses and startups achieve success through cutting-edge
              digital solutions.
            </p>

            {/* Buttons */}
            <div className="mt-6 flex justify-center md:justify-start">
              <Link
                href="/about"
                className="bg-[#0473b7] text-white px-5 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-[#070f4d] transition"
              >
                Know More ➜
              </Link>
            </div>

            {/* Service Features */}
            <div className="mt-8 grid md:grid-cols-2 gap-4">
              <div className="bg-gray-200 p-6 rounded-2xl text-center md:text-left shadow">
                <div className="text-4xl text-[#0473b7] mb-4 inline-block">
                  <FaLaptopCode />
                </div>
                <h3 className="text-2xl font-bold">
                  Custom Software Development
                </h3>
                <p className="text-gray-800">
                  We specialize in building tailored solutions to meet your
                  business needs, ensuring seamless performance and scalability.
                </p>
              </div>
              <div className="bg-gray-200 p-6 rounded-2xl text-center md:text-left shadow">
                <div className="text-4xl text-[#0473b7] mb-4 inline-block">
                  <FaLaptopCode />
                </div>
                <h3 className="text-2xl font-bold">E-commerce Solutions</h3>
                <p className="text-gray-800">
                  Our team develops feature-rich e-commerce platforms, enhancing
                  customer experience and boosting online sales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
