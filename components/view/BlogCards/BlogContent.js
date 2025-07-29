'use client';

import { recommendedVideos, recommendedBlogs } from '@/data/blogcards';
import CommentsSection from './CommentsSection';
import RelatedPostSection from './RelatedPostSection';
import CourseCardsCarousel from './CourseCardsCarousel';
import RecommendedSection from './RecommendedSection';

export default function BlogContent({
  videoUrl,
  sections,
  schedule,
  cta,
  comments,
}) {
  return (
    <div>
      {/* Main Video */}
      {videoUrl && (
        <div className="mb-6">
          <iframe
            className="w-full h-64 rounded-lg"
            src={videoUrl}
            frameBorder="0"
            allowFullScreen
            title="Blog Video"
          />
        </div>
      )}

      {/* Blog Sections */}
      {sections?.map((sec, index) => (
        <div key={index} className="mb-6">
          <h2 className="text-xl font-semibold mb-2">{sec.heading}</h2>
          <p className="text-gray-700">{sec.content}</p>
        </div>
      ))}

      {/* Training Schedule */}
      {schedule && (
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4">Training Schedule</h3>
          <table className="w-full table-auto border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border px-4 py-2">Module</th>
                <th className="border px-4 py-2">Topic</th>
                <th className="border px-4 py-2">Duration</th>
              </tr>
            </thead>
            <tbody>
              {schedule.map((row, idx) => (
                <tr key={idx}>
                  <td className="border px-4 py-2">{row.module}</td>
                  <td className="border px-4 py-2">{row.topic}</td>
                  <td className="border px-4 py-2">{row.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* CTA */}
      {cta && (
        <div className="p-6 bg-blue-50 border border-blue-200 rounded-xl shadow-sm mb-12">
          <h4 className="text-2xl font-bold mb-2">{cta.title}</h4>
          <p className="mb-4">{cta.description}</p>
          <a
            href={cta.buttonLink}
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            {cta.buttonLabel}
          </a>
        </div>
      )}

      <RecommendedSection
        recommendedVideos={recommendedVideos || []}
        recommendedBlogs={recommendedBlogs || []}
      />
      <RelatedPostSection />
      <CourseCardsCarousel />
      <CommentsSection comments={comments} />
    </div>
  );
}
