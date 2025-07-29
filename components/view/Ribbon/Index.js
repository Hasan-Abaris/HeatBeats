'use client';

import React, { useEffect, useState } from 'react';
import HeroSection from './HeroSection';
import CourseCards from './CourseCards';
import CourseDescription from './CourseDescription';
import FAQ from './FAQ';
import LatestBlogPosts from './LatestBlogPosts';
import TopCategories from './TopCategories';
import allCourses from '@/data/allcourses';

export default function Ribbon({ topic }) {
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [filteredFAQs, setFilteredFAQs] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    if (topic) {
      const normalizedTopic = topic.toLowerCase().trim();

      // Filter courses by topic
      const matchedCourses = allCourses.courses.filter(
        (course) => course.topic?.toLowerCase().trim() === normalizedTopic
      );
      setFilteredCourses(matchedCourses);

      // Filter FAQs by topic
      const matchedFAQs = allCourses.faqs.filter(
        (faq) => faq.topic?.toLowerCase().trim() === normalizedTopic
      );
      setFilteredFAQs(matchedFAQs);

      // Filter blog posts by topic
      const matchedPosts = allCourses.posts.filter(
        (post) => post.topic?.toLowerCase().trim() === normalizedTopic
      );
      setFilteredPosts(matchedPosts);
    }
  }, [topic]);

  return (
    <div>
      <HeroSection courses={filteredCourses} topic={topic} />
      <CourseCards courses={filteredCourses} />
      <CourseDescription courses={filteredCourses} />
      <FAQ faqs={filteredFAQs} topic={topic} />
      <LatestBlogPosts posts={filteredPosts} topic={topic} />
      <TopCategories categories={allCourses.categories} />
    </div>
  );
}
