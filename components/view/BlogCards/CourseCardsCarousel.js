import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'react-feather';
import { cardDataByCategory } from '@/data/blogcards'; // adjust path as needed

const courseMeta = {
  'CI/CD Pipelines (25 Blogs)': {
    gradient: 'from-purple-500 to-pink-400',
    reviews: 120,
  },
  'Containerization with Docker (40 Blogs)': {
    gradient: 'from-purple-500 to-pink-300',
    reviews: 5300,
  },
  'Kubernetes Basics (35 Blogs)': {
    gradient: 'from-blue-700 to-purple-500',
    reviews: 2100,
  },
  'Infrastructure as Code (30 Blogs)': {
    gradient: 'from-green-400 to-blue-500',
    reviews: 750,
  },
};

export default function CourseCardsCarousel() {
  const category = cardDataByCategory['DevOps'];
  const topicsPerPage = 3;
  const [page, setPage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const maxPage = Math.ceil(category.topics.length / topicsPerPage) - 1;

  // Get topics for current page slice
  const visibleTopics = category.topics.slice(
    page * topicsPerPage,
    page * topicsPerPage + topicsPerPage
  );

  const handlePrev = () => {
    if (page > 0) {
      setIsTransitioning(true);
      setTimeout(() => {
        setPage((prev) => prev - 1);
        setIsTransitioning(false);
      }, 300);
    }
  };

  const handleNext = () => {
    if (page < maxPage) {
      setIsTransitioning(true);
      setTimeout(() => {
        setPage((prev) => prev + 1);
        setIsTransitioning(false);
      }, 300);
    }
  };

  return (
    <div className="relative flex items-center justify-center w-full max-w-6xl mx-auto px-6 md:px-8">
      <button
        aria-label="Previous"
        onClick={handlePrev}
        disabled={page === 0}
        className={`absolute left-0 bg-white border rounded-full shadow p-2 z-10 transition
          ${
            page === 0 ? 'opacity-40 cursor-not-allowed' : 'hover:bg-gray-100'
          }`}
      >
        <ChevronLeft size={24} />
      </button>

      <div
        className={`grid grid-cols-1 md:grid-cols-3 gap-8 w-full transition-opacity duration-300 ${
          isTransitioning ? 'opacity-0' : 'opacity-100'
        }`}
      >
        {visibleTopics.map((topic, index) => {
          const meta = courseMeta[topic] || {
            gradient: 'from-gray-400 to-gray-600',
            reviews: 0,
          };

          return (
            <div
              key={index}
              className="border rounded-lg shadow-md bg-white overflow-hidden max-w-[300px] mx-auto
                transform transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div
                className={`p-5 text-white uppercase text-xs font-extrabold tracking-wide bg-gradient-to-r ${meta.gradient}`}
              >
                {topic.toUpperCase()}
              </div>
              <div className="p-6 text-gray-800 space-y-3">
                <p className="font-semibold text-lg">{topic}</p>
                <p className="italic text-xs text-gray-500">Reviews</p>
                <div className="flex items-center space-x-2 text-yellow-500 text-sm font-semibold">
                  <span>{'★'.repeat(5)}</span>
                  <span className="text-gray-700 font-normal">
                    5 ({meta.reviews})
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <button
        aria-label="Next"
        onClick={handleNext}
        disabled={page === maxPage}
        className={`absolute right-0 bg-white border rounded-full shadow p-2 z-10 transition
          ${
            page === maxPage
              ? 'opacity-40 cursor-not-allowed'
              : 'hover:bg-gray-100'
          }`}
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}
