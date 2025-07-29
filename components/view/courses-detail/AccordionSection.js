
'use client';
import { useState } from 'react';
export default function AccordionSection({ section }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-center mb-6">{section.title}</h2>
      {/* <img
        src={section.image}
        alt={section.title}
        className="w-full max-w-3xl mx-auto mb-6 rounded-xl shadow-md"
      /> */}

      {section.faqs.map((faq, index) => (
        <div key={index} className="border-b border-gray-300">
          <button
            onClick={() => toggle(index)}
            className="w-full text-left py-4 px-6 font-medium flex justify-between items-center hover:bg-gray-100"
          >
            {faq.question}
            <span className="text-xl">{openIndex === index ? '−' : '+'}</span>
          </button>
          {openIndex === index && (
            <div className="px-6 pb-4 text-gray-700 whitespace-pre-line">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
