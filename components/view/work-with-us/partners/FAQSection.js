// components/FAQSection.tsx
import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "What is SLA’s Reseller Partner Program all about?",
      answer:
        "At SLA, we partner with like-minded organizations/ individuals to make learning easily available to everyone. Our intent is to make an impact in the ed-tech space together with our reseller partner program. Mutual growth is the underlying principle of our partnership.",
    },
    {
      question: "How SLA Reseller Partner Program will help me ?",
      answer:
        "SLA empowers its partners by providing pre-sales as well as continuous post-sales assistance.",
    },
    {
      question: "As a partner, which online training courses can I resell?",
      answer:
        "Our entire course catalogue of more than 150 courses ( IT and Non-IT) are available to you, and you can decide which online training courses best suit your needs. The major courses such as: DevOps, AWS, Selenium, Salesforce, Cyber Security, Power BI, Tableau, Python, Data Science, Digital Marketing, etc.",
    },
    {
      question:
        "What are the key features / additional benefits that I, as a reseller partner, will get?",
      answer:
        "Partners will be provided with a co-branded dashboard powered with real-time analytics, sales & marketing collateral, dedicated account managers and support ninjas, and the support required to set up and grow mutually.",
    },
    {
      question: "What is the margin that I will receive?",
      answer:
        "SLA provides exclusively high discounts to our partners in the industry.",
    },
    {
      question:
        "How much time will it take to get started with the e-learning courses reseller program?",
      answer:
        "As soon as we have mutual consent, we will draw up the MoU and get started immediately. The dashboard is set up within a day so that you can start your operations as soon as possible.",
    },
    {
      question: "Who can I contact if I have any more queries?",
      answer:
        "We will be glad to answer all your questions! You can reach out to us with your queries on an email to partnerships@SLA.co",
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
