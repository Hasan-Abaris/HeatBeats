'use client';

import React, { useRef, useEffect, useState } from 'react';
import WebinarTopics from '@/components/view/Webinar/WebinarTopics';
import WebinarCategorySelector from '@/components/view/Webinar/WebinarCategorySelector';
import UpcomingWebinars from './UpcomingWebinars';
import WebinarHero from './WebinarHero';
import { getAllWebinars, getWebinarsByCategory } from '@/app/comman/FrontApi';

const categoryIdToTopic = {
  1: 'Python',
  2: 'Java',
  3: 'JavaScript',
  4: 'C++',
  5: 'Go',
};

const Webinars = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [focusTarget, setFocusTarget] = useState(null); // { topic, name }
  const [webinarData, setWebinarData] = useState([]);
  const topicsRef = useRef(null);

  useEffect(() => {
    fetchWebinars();
  }, []);

  const fetchWebinars = async (category = 'All') => {
    try {
      const res =
        category === 'All'
          ? await getAllWebinars()
          : await getWebinarsByCategory(getCategoryId(category));

      const grouped = groupByTopic(res?.data?.data || []);
      setWebinarData(grouped);
    } catch (err) {
      console.error('Error fetching webinars:', err);
    }
  };

  const getCategoryId = (topic) => {
    const map = {
      Python: 1,
      Java: 2,
      JavaScript: 3,
      'C++': 4,
      Go: 5,
    };
    return map[topic] || 0;
  };

  const groupByTopic = (webinars) => {
    const groups = {};
    webinars.forEach((w) => {
      const topic = categoryIdToTopic[w.category_id] || 'Other';
      if (!groups[topic]) {
        groups[topic] = [];
      }
      groups[topic].push(w);
    });
    return Object.entries(groups).map(([topic, webinars]) => ({
      topic,
      icon: '/images/fallback.svg', // You can map icons here per topic if you want
      webinars,
    }));
  };

  // When an Upcoming “Register” is clicked:
  const handleRegisterClick = (webinar) => {
    setSelectedCategory(categoryIdToTopic[webinar.category_id] || 'Other');
    setFocusTarget({ topic: categoryIdToTopic[webinar.category_id] || 'Other', name: webinar.name });
  };

  useEffect(() => {
    if (focusTarget) {
      const t = setTimeout(() => setFocusTarget(null), 500);
      return () => clearTimeout(t);
    }
  }, [focusTarget]);

  const categories = [
    { topic: 'All', icon: '/images/fallback.svg' },
    { topic: 'Python', icon: '/images/python.svg' },
    { topic: 'Java', icon: '/images/java.svg' },
    { topic: 'JavaScript', icon: '/images/javascript.svg' },
    { topic: 'C++', icon: '/images/fallback.svg' },
    { topic: 'Go', icon: '/images/fallback.svg' },
  ];

  const filteredData =
    selectedCategory === 'All'
      ? webinarData
      : webinarData.filter((item) => item.topic === selectedCategory);

  const allUpcomingWebinars = webinarData.flatMap((item) =>
    item.webinars.map((webinar) => ({
      ...webinar,
      topic: item.topic,
      icon: item.icon,
    }))
  );

  return (
    <div className="w-full px-0">

      <WebinarHero />
      <UpcomingWebinars webinars={allUpcomingWebinars} onRegisterClick={handleRegisterClick} />
      <WebinarCategorySelector
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={(cat) => {
          setSelectedCategory(cat);
          fetchWebinars(cat);
        }}
      />
      <WebinarTopics ref={topicsRef} webinarData={filteredData} focusTarget={focusTarget} />
    </div>
  );
};

export default Webinars;
