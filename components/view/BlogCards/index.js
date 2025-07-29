'use client';

import { useState } from 'react';
import BlogSidebar from './BlogSidebar';
import BlogHeader from './BlogHeader';
import BlogContent from './BlogContent';

export default function BlogCards({ blog}) {
  // State to hold which section is open in the sidebar
  const [openIndex, setOpenIndex] = useState(null);

  // Active link example — you can customize this or get from props/state
  // const activeLink = blog?.sections?.[0]?.heading || '';

  return (
    <div className="max-w-7xl mx-auto w-full px-4 flex flex-col lg:flex-row gap-6 my-10">
      <div className="lg:w-[20vw] w-full">
        <BlogSidebar
          categories={blog?.categories}
          activeLink="AWS Fargate – A Compute Engine For ECS"
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
          imageUrl={blog?.imageUrl}
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
