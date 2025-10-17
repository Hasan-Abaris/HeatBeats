'use client';
import React, { useState } from 'react';
import Communityfaq from '../../view/Community';
import ForumTab from '../../view/Community/ForumTab';
import SupportTab from '../../view/Community/SupportTab';
import MoreTab from '../../view/Community/OtherTab';

export default function Page() {
  const [activeTab, setActiveTab] = useState('home');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'home':
        return <Communityfaq />;
      case 'forum':
        return <ForumTab />;
      case 'support':
        return <SupportTab />;
      case 'more':
        return <MoreTab />;
      default:
        return <Communityfaq />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Tabs Navbar */}
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

      {/* Tab Content */}
      <div className="max-w-7xl mx-auto p-6">{renderTabContent()}</div>
    </div>
  );
}
