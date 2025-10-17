'use client';
import React, { useState } from 'react';
import Communityfaq from '../../view/Community'; // Home tab content
import ForumTab from '../../view/Community/ForumTab';       // Forum page
import SupportTab from '../../view/Community/SupportTab';   // Support page
import MoreTab from '../../view/Community/OtherTab';         // More page

export default function CommPage() {
  const [activeTab, setActiveTab] = useState('home'); // which tab is active

  const renderTabContent = () => {
    switch (activeTab) {
      case 'home':
        return <Communityfaq />;  // Home content
      case 'forum':
        return <ForumTab />;      // Forum content
      case 'support':
        return <SupportTab />;    // Support content
      case 'more':
        return <MoreTab />;       // More content
      default:
        return <Communityfaq />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 🌐 Tabs Navbar */}
      <div className="flex justify-center gap-6 border-b bg-white shadow-sm sticky top-0 z-50">
        {[
          { key: 'home', label: 'Home' },
          { key: 'forum', label: 'Forum' },
          { key: 'support', label: 'Support' },
          { key: 'more', label: 'More' },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`py-4 px-5 text-lg font-medium border-b-2 transition-colors ${
              activeTab === tab.key
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-blue-500'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* 🧩 Tab Content */}
      <div className="max-w-7xl mx-auto p-6">{renderTabContent()}</div>
    </div>
  );
}
