'use client';
import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const faqs = [
  {
    question: 'Do I need to be an Edureka Customer to refer my Friends?',
    answer:
      "No, everyone is eligible to be a part of Edureka's referral program! However, you will be rewarded Edureka Cash when your friend enrolls. Terms and Conditions Apply.",
  },
  {
    question: 'How can I refer my friends?',
    answer:
      'You can refer them by sharing your unique referral link via email or social media platforms.',
  },
  {
    question: 'Do I get a rewarded every time a friend enrolls for a course?',
    answer:
      'Yes, for every successful enrollment using your referral, you will receive Edureka Cash.',
  },
  {
    question:
      'How can my friend sign-up using my referral? Is coupon code required?',
    answer:
      'No coupon is needed. They just need to use your referral link while signing up.',
  },
  {
    question: 'How do I track my Edureka Cash?',
    answer:
      'Log in to your account and navigate to the Wallet section to view your Edureka Cash balance.',
  },
  {
    question:
      'Will I get Edureka Cash, if my friend is already a part of Edureka’s user database?',
    answer:
      'Unfortunately, no. Rewards are only applicable for new sign-ups through your referral.',
  },
  {
    question: 'What is the conversion value for Edureka Cash?',
    answer: '1 Edureka Cash = ₹1. You can redeem it on any course purchase.',
  },
  {
    question: 'How do I redeem my credits?',
    answer: 'During checkout, apply the Edureka Cash to your total amount.',
  },
  {
    question: 'Can I use all my credits at once?',
    answer:
      'Yes, you can use the full available amount unless stated otherwise during checkout.',
  },
  {
    question: 'Terms and Conditions that I should know?',
    answer:
      'Make sure to review the official referral terms page for up-to-date policies and limitations.',
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(0); // First item open

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="max-w-5xl mx-auto px-4 py-16">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10 text-gray-800">
        Frequently Asked Questions
      </h2>

      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index}>
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-start justify-between text-left text-gray-800 text-base md:text-lg font-medium focus:outline-none transition-all"
            >
              <span className="flex-1">{faq.question}</span>
              <span className="ml-4 pt-1 text-gray-600">
                {activeIndex === index ? (
                  <FaMinus size={14} />
                ) : (
                  <FaPlus size={14} />
                )}
              </span>
            </button>
            <div
              className={`mt-2 pl-6 pr-2 text-gray-600 text-sm md:text-base transition-all duration-300 ease-in-out ${
                activeIndex === index
                  ? 'max-h-[200px] opacity-100'
                  : 'max-h-0 overflow-hidden opacity-0'
              }`}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
