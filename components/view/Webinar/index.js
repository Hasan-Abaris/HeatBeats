'use client';

import React, { useRef, useEffect, useState } from 'react';
import WebinarTopics from '@/components/view/Webinar/WebinarTopics';
import WebinarCategorySelector from '@/components/view/Webinar/WebinarCategorySelector';
import UpcomingWebinars from './UpcomingWebinars';
import WebinarHero from './WebinarHero';
import { getAllWebinars, getWebinarsByCategory } from '@/app/comman/FrontApi';

// 🎮 Map category IDs to gaming topics
const categoryIdToTopic = {
  1: 'PUBG',
  2: 'Chess',
  3: 'Ludo',
  4: 'Carrom',
  5: 'Esports',
};

const Webinars = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [focusTarget, setFocusTarget] = useState(null);
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
      PUBG: 1,
      Chess: 2,
      Ludo: 3,
      Carrom: 4,
      Esports: 5,
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
      icon: `/images/games/${topic.toLowerCase()}.svg`, // 🎯 use game icons
      webinars,
    }));
  };

  // 🎯 When a “Register” button is clicked:
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

  // 🎮 Gaming Webinar Categories
  const categories = [
    { topic: 'All', icon: '/images/games/all.svg' },
    { topic: 'PUBG', icon: '/images/games/pubg.svg' },
    { topic: 'Chess', icon: '/images/games/chess.svg' },
    { topic: 'Ludo', icon: '/images/games/ludo.svg' },
    { topic: 'Carrom', icon: '/images/games/carrom.svg' },
    { topic: 'Esports', icon: '/images/games/esports.svg' },
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
      {/* 🎮 Hero Section */}
      <WebinarHero />

      {/* 🗓️ Upcoming Webinars */}
      <UpcomingWebinars webinars={allUpcomingWebinars} onRegisterClick={handleRegisterClick} />

      {/* 🎯 Category Selector */}
      <WebinarCategorySelector
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={(cat) => {
          setSelectedCategory(cat);
          fetchWebinars(cat);
        }}
      />

      {/* 🧠 Webinar Topics List */}
      <WebinarTopics ref={topicsRef} webinarData={filteredData} focusTarget={focusTarget} />
    </div>
  );
};

export default Webinars;
