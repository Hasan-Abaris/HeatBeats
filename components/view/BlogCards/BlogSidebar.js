import { useState } from 'react';
import { ChevronDown } from 'react-feather';
import { blogs, sidebarData, cardDataByCategory } from '@/data/blogcards';

export default function BlogSidebar({ categories = [], activeLink = '' }) {
  const [openIndex, setOpenIndex] = useState(null);

  // Use first category or fallback
  const mainCategory = categories[0] || 'Cloud Computing';
  const cardData =
    cardDataByCategory[mainCategory] || cardDataByCategory['Cloud Computing'];

  return (
    <aside className="w-full lg:w-[20vw] bg-white shadow-md px-4 py-6 text-sm text-gray-900 font-medium border border-gray-200 flex flex-col h-screen overflow-y-auto">
      {sidebarData.map((section, index) => (
        <div key={index} className="border-b border-gray-200 py-4">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="flex justify-between items-center w-full font-semibold text-gray-800 hover:text-blue-600 transition"
          >
            <span className="truncate text-left">{section.title}</span>
            <ChevronDown
              size={16}
              className={`transition-transform duration-200 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>

          {openIndex === index && section.links.length > 0 && (
            <ul className="mt-4 pl-4 space-y-2">
              {section.links.map((link, i) => (
                <li
                  key={i}
                  className={`leading-tight text-gray-800 hover:text-blue-600 transition cursor-pointer rounded-md px-2 py-1.5 ${
                    link === activeLink
                      ? 'bg-blue-50 text-blue-700 font-semibold shadow-sm'
                      : 'hover:bg-gray-100'
                  }`}
                >
                  {link}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}

      {/* Dynamic Category Card */}
      <div className="mt-auto bg-white shadow-lg border border-gray-200 p-4 rounded-lg mb-6 flex-shrink-0">
        <h3 className="text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-2 mb-3 rounded-lg">
          {cardData.title}
        </h3>
        <div className="text-xs text-gray-800">
          <p className="font-medium mb-2">Topics Covered</p>
          <ul className="list-disc pl-5 space-y-2">
            {cardData.topics.map((topic, idx) => (
              <li key={idx}>{topic}</li>
            ))}
          </ul>
          <a
            href={cardData.link}
            className="inline-flex items-center text-blue-600 font-semibold mt-3 hover:underline"
          >
            SEE MORE →
          </a>
        </div>
      </div>
    </aside>
  );
}
