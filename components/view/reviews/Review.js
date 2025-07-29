'use client';

import { useEffect, useState } from 'react';
import { getReviewList } from '@/app/comman/FrontApi';
import Loadar from '@/app/comman/Loader';

const courseCategories = [
  'Artificial Intelligence',
  'BI and Visualization',
  'Cloud Computing',
  'DevOps',
  'Data Science',
  'Cyber Security',
  'Programming & Frameworks',
  'Project Management and Methodologies',
  'PG Programs',
  'Software Testing',
  'Big Data',
  'Frontend Development',
  'Databases',
];

const testimonialsPerPage = 5;

const Review = () => {
  const [loading, setLoading] = useState(true);
  const [reviews, setReviews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(reviews.length / testimonialsPerPage);
  const startIndex = (currentPage - 1) * testimonialsPerPage;
  const currentTestimonials = reviews.slice(startIndex, startIndex + testimonialsPerPage);

  const getData = async () => {
    setLoading(true);
    try {
      const res = await getReviewList();
      if (res.status === 200) {
        setReviews(res.data.data || []);
      }
    } catch (error) {
      console.error('Error fetching reviews:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="bg-gray-50 py-10">
      <div className="w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        {loading && <Loadar />}
        <div className="md:col-span-3 space-y-6">
          {!loading && currentTestimonials.length === 0 && (
            <p className="text-center text-gray-500">No reviews found.</p>
          )}

          {currentTestimonials.map((item) => (
            <div key={item.id} className="bg-white p-6 rounded-lg shadow-md flex gap-4">
              <div
                className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center font-bold text-lg text-white"
                style={{ backgroundColor: '#6366f1' }}
              >
                {item.name?.[0] || '?'}
              </div>
              <div className="flex-1">
                <div className="flex justify-between">
                  <h3 className="font-bold text-gray-800">{item.name}</h3>
                  <span className="text-sm text-gray-400">{item.date}</span>
                </div>
                <p className="text-sm text-gray-500 mb-1">{item.role}</p>
                <div className="flex items-center text-yellow-400 mb-2">
                  {'★'.repeat(item.rating)}{'☆'.repeat(5 - item.rating)}
                </div>
                <p className="text-gray-700 text-sm">{item.review}</p>
              </div>
            </div>
          ))}

          {/* Frontend Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-4">
              <button
                onClick={handlePrev}
                disabled={currentPage === 1}
                className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
              >
                Prev
              </button>
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToPage(i + 1)}
                  className={`px-3 py-1 rounded ${currentPage === i + 1 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
                >
                  {i + 1}
                </button>
              ))}
              <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
              >
                Next
              </button>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="bg-white p-4 rounded shadow">
            <div className="flex items-center justify-between mb-2">
              <img src="https://d1jnx9ba8s6j9r.cloudfront.net/imgver.1746607673/img/google_icon.png" alt="Google" className="w-5 h-5" />
              <span className="text-sm text-gray-700">4.5 / 5 (5000+)</span>
            </div>
            <div className="flex items-center justify-between mb-2">
              <img src="https://d1jnx9ba8s6j9r.cloudfront.net/imgver.1746607673/img/G2_icon.png" alt="G2" className="w-5 h-5" />
              <span className="text-sm text-gray-700">4.6 / 5 (1200+)</span>
            </div>
            <div className="flex items-center justify-between">
              <img src="https://d1jnx9ba8s6j9r.cloudfront.net/imgver.1746607673/img/course_report_icon.png" alt="CourseReport" className="w-5 h-5" />
              <span className="text-sm text-gray-700">4.7 / 5 (1000+)</span>
            </div>
          </div>

          <div className="bg-white p-4 rounded shadow">
            <h4 className="font-semibold text-gray-800 mb-3">Course Categories</h4>
            <ul className="space-y-2">
              {courseCategories.map((category, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 text-sm text-blue-700 hover:underline cursor-pointer"
                >
                  <span className="w-2 h-2 bg-blue-500 rounded-full" />
                  {category}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
