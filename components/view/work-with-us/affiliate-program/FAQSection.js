// components/FAQSection.tsx
import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "How does Affiliate marketing work?",
      answer:
        "Affiliate marketing involves a merchant paying a commission to other online entities, known as affiliates, for referring new business to the merchant's website. Affiliate marketing is performance-based, which means affiliates only get paid when their promotional efforts result in a transaction.",
    },
    {
      question: "What is SLA's affiliate program?",
      answer:
        "After you join our affiliate program, you will be given a unique referral link to embed on your web pages. You’ll be paid for every course or Specialization purchase that a learner makes within 30 days of clicking on a qualified link.",
    },
    {
      question: "What are the benefits of joining SLA's affiliate program?",
      answer: (
        <div>
          As a SLA affiliate, you’ll receive:
          <ul className="list-disc list-inside mt-2">
            <li>
              Baseline commission of up to 15% on any eligible purchases your users make within 30 days of clicking a qualified link, with bonuses for strong performance.
            </li>
            <li>
              Professionally-designed SLA banners and text links to add to your site and access to our product merchandiser feed, updated daily.
            </li>
          </ul>
        </div>
      ),
    },
    {
      question: "How long does it take to get started?",
      answer:
        "You can get started as an affiliate in as little as a day from the time you submit your application. Most applications are reviewed within 1-3 business days.",
    },
    {
      question: "Do I have to pay to join the program?",
      answer: "It does not cost you a thing, signup is absolutely FREE.",
    },
    {
      question: "How do I join your affiliate program?",
      answer:
        "To become a SLA Affiliate, all you need to do is click on Become an Affiliate and fill out a form. Once we approve your request, you will get a confirmation email, which will contain your unique username and password.",
    },
    {
      question: "What should I do to make the affiliate program work for me?",
      answer:
        "You can use various promotional methods to earn easy commissions including placing customized banners and links on your website or blog through which we will track sales. When any customer, referred by you, makes a purchase, you get paid.",
    },
    {
      question:
        "How much can I make? Is there a limit on the total commission I can earn?",
      answer:
        "No limits! The more purchases you drive, the more you earn.",
    },
    {
      question:
        "What type of promotional resources are provided to your affiliates?",
      answer:
        "We provide banners and text links in addition to complete email assistance with regard to your promotions. All our banners are tested for conversion and are available in many sizes.",
    },
    {
      question:
        "Where should I place affiliate links on my blogs and websites?",
      answer:
        "You can place the banner links on those places on your blog/website where visitors are more likely to pay attention. Typically it's the left/ right sidebar, above or below the top navigation bar or below each blog post snippet.",
    },
    {
      question: "What are the modes of payment? When will I be paid?",
      answer:
        "We make the payment to our affiliates through Rakuten.com on a monthly basis. Cheques will be issued for a minimum of $25. For commission total below $25, we will carry over your commission total until you reach $25 at the relevant monthly payout date.",
    },
  ];
  

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold text-center mb-10">Frequently Asked Questions</h2>
      {faqData.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className="border border-gray-200 mb-4 pb-4 transition-all duration-300 p-2"
          >
            <button
              className="w-full flex justify-between items-center py-3 text-left font-semibold text-gray-800 hover:text-blue-600"
              onClick={() => setOpenIndex(isOpen ? null : idx)}
            >
              <span>{faq.question}</span>
              {isOpen ? (
                <ChevronUpIcon className="w-5 h-5 text-blue-500" />
              ) : (
                <ChevronDownIcon className="w-5 h-5 text-gray-400" />
              )}
            </button>
            {isOpen && (
              <div className="mt-2 text-sm text-gray-600">{faq.answer}</div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default FAQSection;
