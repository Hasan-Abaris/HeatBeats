
import Footers from "./Footer";
// import { FaLinkedin, FaYoutube, FaFacebook } from "react-icons/fa";

export default function Footer() {
  const services = [
    "Web Design",
    "Graphic Design",
    "Job-Portal, Inernshipss",
    "Plugin Development",
    "App Development",
    "Web Development",
    "Job-Portal, Inernships Development",
    "Magento",
    "CMS Development",
    "API Development",
  ];

  const menuItems = [
    "Home",
    "Service",
    "About Us",
    "Testimonial",
    "Blog",
    "Contact",
    "FAQ",
    "Feedback",
    "Privacy Policy",
    "Terms & Conditions",
  ];

  return (
    <>
      <Footers />
    </>
    // <footer className="bg-[#51525d] text-gray-200 py-12 px-16">
    //   <div className=" mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
    //     {/* Company Info */}
    //     <div className=" ">
    //       <Image
    //         src="/images/logo.png"
    //         alt="img"
    //         width={200}
    //         height={200}
    //         className="w-64 mb-4"
    //       />
    //       <p className="text-lg">
    //         We are an award-winning multinational company, setting the global
    //         benchmark for quality and excellence. With innovation at our core,
    //         we deliver world-class solutions that redefine industry standards.
    //       </p>

    //       {/* <div className="flex space-x-4 mt-4">
    //         <FaLinkedin className="text-blue-600 text-2xl cursor-pointer hover:text-blue-800" />
    //         <FaYoutube className="text-red-600 text-2xl cursor-pointer hover:text-red-800" />
    //         <FaFacebook className="text-blue-500 text-2xl cursor-pointer hover:text-blue-700" />
    //       </div> */}
    //     </div>

    //     {/* Key Services */}
    //     <div>
    //       <h3 className="text-lg font-bold border-b-2 border-blue-500 pb-2 mb-4">
    //         Services
    //       </h3>
    //       <ul className="space-y-3 ">
    //         {services?.map((item, index) => (
    //           <li
    //             key={index}
    //             className="relative cursor-pointer transition-colors duration-500 hover:text-primary after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
    //           >
    //             ➤ {item}
    //           </li>
    //         ))}
    //       </ul>
    //     </div>

    //     {/* Latest Offerings */}
    //     <div>
    //       <h3 className="text-lg font-bold border-b-2 border-green-500 pb-2 mb-4">
    //         Quick Links
    //       </h3>
    //       <ul className="space-y-3 ">
    //         {menuItems?.map((item, index) => (
    //           <li
    //             key={index}
    //             className="relative cursor-pointer transition-colors duration-500 hover:text-primary after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
    //           >
    //             ➤ {item}
    //           </li>
    //         ))}
    //       </ul>
    //     </div>

    //     {/* Careers */}
    //     <div>
    //       <h3 className="text-lg font-bold border-b-2 border-purple-500 pb-2 mb-4">
    //         Contact Us
    //       </h3>
    //       <ul className="space-y-3 ">
    //         <li>➤ <a href="tel:+91-8851746286">+91-8851746286</a></li>
    //         <li>➤ <a href="tel:+91-9045206022">+91-9045206022 ,</a></li>
    //         <li>➤ <a href="mailto:info@s3infotech.in">info@s3infotech.in</a></li>
    //         <li>➤ <a href="mailto:seoabaris@gmail.com">seoabaris@gmail.com</a> </li>
    //         <li className="leading">
    //           ➤ 98B, 2nd Floor, Namberdar Estate, Taimoor Nagar, New Friends
    //           Colony, New Delhi-110025
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </footer>
  );
}
