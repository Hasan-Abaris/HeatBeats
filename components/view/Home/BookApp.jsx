import InquiryPoup from "@/components/section/InquiryPopup";
import { BsCalendar4Week } from "react-icons/bs";

const BookApp = () => {
  return (
    <section className="p-6 md:px-16 md:py-16">
      <div className="rounded-xl text-gray-900 py-12 p-3 md:px-6" style={{backgroundImage: `url("/assets/bg-graph.png")`}}>
        <div className="px-6 text-center grid grid-cols-1 md:grid-cols-2 place-items-center">
          <div className="row-span-2 text-center md:text-left">
            {/* Centered Icon */}
          {/* <div className="flex justify-start mb-4">
            <BsCalendar4Week className="text-5xl text-white" />
          </div> */}

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Drop A Message For Any Query  
          </h2>

          {/* Description */}
          <p className="text-lg text-white max-w-2xl">
            Have any questions or need assistance? Feel free to reach out to us!
            Our team is here to help with any inquiries, support, or information
            you may need. Just drop a message, and we’ll get back to you as soon
            as possible.
          </p>
          </div>

          {/* Button */}
          <div className="mt-16 flex justify-center">
            <InquiryPoup>
              <button className="bg-[#0473b7] text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-[#070f4d] transition">
                Book a Schedule ➜
              </button>
            </InquiryPoup>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookApp;
