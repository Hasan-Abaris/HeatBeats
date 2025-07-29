'use client';
import React, { useState } from 'react';

export default function FAQ({ faqs, topic }) {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  // Filter FAQs based on the selected topic
  const filteredFAQs = faqs.filter(
    (faq) => faq.topic?.toLowerCase() === topic.toLowerCase()
  );

  return (
    <section className="p-8 w-[60vw] mx-auto">
      <h2 className="text-xl font-semibold mb-6">{topic} FAQs</h2>
      {filteredFAQs.length > 0 ? (
        filteredFAQs.map((f, i) => (
          <div key={i} className="border rounded mb-2 overflow-hidden">
            <button
              onClick={() => toggle(i)}
              className="w-full flex justify-between items-center p-4 bg-white hover:bg-gray-50"
            >
              <span className="text-sm md:text-base text-gray-800">
                {f.question}
              </span>
              <svg
                className={`w-5 h-5 transform transition-transform ${
                  openIndex === i ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {openIndex === i && (
              <div className="p-4 bg-white text-sm text-gray-700">
                {f.answer}
              </div>
            )}
          </div>
        ))
      ) : (
        <p>No FAQs available for this topic.</p>
      )}
    </section>
  );
}
