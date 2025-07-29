import React from 'react';

// utils/getIconPath.js or inside your component
export function getIconPath(topic) {
  const slug = topic.toLowerCase().replace(/\s+/g, '-');

  const knownIcons = [
    'react',
    'python',
    'ai',
    'cloud-computing',
    'devops',
    'data-science',
    // add more topic slugs as needed
  ];

  if (knownIcons.includes(slug)) {
    return `/icons/${slug}.svg`;
  }

  return '/images/fallback.svg'; // fallback if icon not found
}

export default GetIconPath;
