'use client';
import Image from 'next/image';

export default function ReferralSteps() {
  return (
    <section className="bg-gradient-to-b from-white to-[#f7f7f7] py-12 px-6 md:px-16 text-center text-[#333]">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-semibold mb-12">
        How to Earn & Learn with Friends
      </h2>

      {/* Steps */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Step 1 */}
        <div className="flex flex-col items-center">
          <div className="w-[100px] h-[100px] relative mb-4 shadow-md rounded-lg overflow-hidden">
            <Image
              src="/images/refer/refermessage.png"
              alt="Invite friends"
              fill
              sizes="100px"
              className="object-contain"
            />
          </div>
          <p className="max-w-xs text-base md:text-lg text-gray-700 text-center">
            List your friends emails on invite or use <br />
            Facebook, Linkedin, Google+
          </p>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col items-center">
          <div className="w-[100px] h-[100px] relative mb-4 shadow-md rounded-lg overflow-hidden">
            <Image
              src="/images/refer/referwallet.png"
              alt="Earn cash"
              fill
              sizes="100px"
              className="object-contain"
            />
          </div>
          <p className="max-w-xs text-base md:text-lg text-gray-700 text-center">
            You will get 3000 Edureka Cash for <br />
            every friend who enrols in a Course
          </p>
        </div>
      </div>
 
      {/* Footer Text */}
      <p className="text-sm text-gray-600 mt-16">
        *Go through the Referral program{' '}
        <span className="font-semibold text-black">Terms & Conditions</span>
      </p>
    </section>
  );
}
