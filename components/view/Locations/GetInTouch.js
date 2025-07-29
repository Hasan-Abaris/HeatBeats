import Image from 'next/image';

const GetInTouch = () => {
  return (
    <section className="relative bg-gradient-to-r from-cyan-500 to-teal-500 text-white py-20 overflow-visible mb-28 bg-[url('/images/bg-pattern.svg')] bg-cover bg-center">
      {/* Centered content container */}
      <div className="w-[60vw] mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10 px-4 text-center md:text-left">
        {/* Text Section */}
        <div>
          <h2 className="text-5xl font-bold mb-4">Get in Touch</h2>
          <p className="text-2xl">
            And we would love to show you our Ridiculous Commitment to Learning.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex justify-center md:justify-end">
          <Image
            src="/images/contact-illustration.svg"
            width={300}
            height={300}
            alt="Get in Touch"
          />
        </div>
      </div>

      {/* Floating Support Card */}
      <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 w-[42rem] bg-white text-black shadow-lg rounded-md flex items-center gap-4 px-6 py-6">
        <div className="w-16 h-16">
          <Image
            src="/images/user-support.svg"
            width={64}
            height={64}
            alt="Support"
            className="rounded-full"
          />
        </div>
        <div>
          <h3 className="font-bold text-lg">
            SLA LEARNERS, NEED SOME HELP? REACH US AT:
          </h3>
          <p>
            Phone (India):{' '}
            <a href="tel:+9100000000" className="text-blue-600">
              +91 00000 00000
            </a>
          </p>
          <p>
            Phone (US & ROW):{' '}
            <a href="tel:+0000000000" className="text-blue-600">
              +1 000 000 0000
            </a>{' '}
            (Toll Free)
          </p>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
