'use client';

import { useState } from 'react';
import BlogSidebar from './BlogSidebar';
import BlogHeader from './BlogHeader';
import BlogContent from './BlogContent';

export default function BlogCards({ blog }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="max-w-7xl mx-auto w-full px-4 flex flex-col lg:flex-row gap-6 my-10">
      <div className="lg:w-[20vw] w-full">
        <BlogSidebar
          categories={blog?.categories}
          activeLink={blog?.sections?.[0]?.heading || ''}
          openIndex={openIndex}
          setOpenIndex={setOpenIndex}
        />
      </div>

      <div className="lg:w-[80vw] w-full">
        <BlogHeader
          title={blog?.title}
          subtitle={blog?.subtitle}
          author={blog?.author}
          date={blog?.date}
          readTime={blog?.readTime}
          imageUrl={blog?.imageUrl || '/images/default-blog.jpg'} // ✅ fallback added
        />
        <BlogContent
          videoUrl={blog?.videoUrl}
          sections={blog?.sections}
          schedule={blog?.schedule}
          cta={blog?.cta}
          comments={blog?.comments}
        />
      </div>
    </div>
  );
}
