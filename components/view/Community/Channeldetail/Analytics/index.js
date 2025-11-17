'use client';

import React, { useState } from 'react';
import { Line, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';

// ✅ Register chart.js components
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  ArcElement
);

export default function Analyticsnwpage() {
  const [activeTab, setActiveTab] = useState('Overview');
  const tabs = ['Overview', 'Reach', 'Engagement', 'Audience'];

  // ✅ Chart data
  const overviewChart = {
    labels: ['0', '33', '66', '99', '132', '165', '198 days'],
    datasets: [
      {
        label: 'Views',
        data: [0, 4, 5, 5, 6, 8, 8],
        borderColor: '#3ea6ff',
        borderWidth: 2,
        tension: 0.4,
        fill: false,
      },
    ],
  };

  const reachChart = {
    labels: ['0', '33', '66', '99', '132', '165', '198 days'],
    datasets: [
      {
        label: 'Impressions',
        data: [0, 10, 15, 20, 30, 40, 45],
        borderColor: '#8b5cf6',
        borderWidth: 2,
        tension: 0.4,
        fill: false,
      },
    ],
  };

  // ✅ Added missing chart
  const audienceChart = {
    labels: ['0', '33', '66', '99', '132', '165', '198 days'],
    datasets: [
      {
        label: 'Unique viewers',
        data: [0, 2, 3, 4, 4, 5, 5],
        borderColor: '#10b981',
        borderWidth: 2,
        tension: 0.4,
        fill: false,
      },
    ],
  };

  const chartOptions = {
    plugins: { legend: { display: false } },
    scales: {
      x: { grid: { display: false } },
      y: { beginAtZero: true, grid: { color: '#f3f4f6' } },
    },
    maintainAspectRatio: false,
  };

  const doughnutData = {
    labels: ['Browse features', 'Suggested videos', 'Other'],
    datasets: [
      {
        data: [37.5, 42.5, 20],
        backgroundColor: ['#8b5cf6', '#60a5fa', '#a5b4fc'],
        borderWidth: 0,
      },
    ],
  };

  return (
    <div className="w-full bg-white rounded-lg shadow-sm border border-gray-200">
      {/* Header */}
      <div className="border-b px-6 py-4">
        <h1 className="text-lg font-semibold text-gray-900">Video analytics</h1>

        {/* Tabs */}
        <div className="flex space-x-6 mt-3 border-b">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 text-sm font-medium border-b-2 transition-all ${
                activeTab === tab
                  ? 'border-gray-900 text-gray-900'
                  : 'border-transparent text-gray-600 hover:text-gray-800'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="p-6">
        {/* ---------------- Overview Tab ---------------- */}
        {activeTab === 'Overview' && (
          <div>
            <h2 className="text-xl font-semibold mb-6">
              This video has had <span className="font-bold">8 views</span> since it was published
            </h2>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-gray-50 border rounded-lg p-4 text-center">
                <h3 className="text-2xl font-bold text-gray-900">8</h3>
                <p className="text-gray-600 text-sm mt-1">Views</p>
              </div>
              <div className="bg-gray-50 border rounded-lg p-4 text-center">
                <h3 className="text-2xl font-bold text-gray-900">0.0</h3>
                <p className="text-gray-600 text-sm mt-1">Watch time (hours)</p>
              </div>
              <div className="bg-gray-50 border rounded-lg p-4 text-center">
                <h3 className="text-2xl font-bold text-gray-900">—</h3>
                <p className="text-gray-600 text-sm mt-1">Subscribers</p>
              </div>
            </div>

            {/* Chart */}
            <div className="bg-white border rounded-lg p-4 mb-6">
              <div className="h-56">
                <Line data={overviewChart} options={chartOptions} />
              </div>
              <button className="mt-4 px-4 py-2 text-sm border rounded-full hover:bg-gray-100">
                See more
              </button>
            </div>

            {/* Audience Retention */}
            <div className="border rounded-lg p-4 bg-gray-50">
              <h3 className="text-md font-semibold mb-1">Audience retention</h3>
              <p className="text-gray-600 text-sm">Since uploaded (lifetime)</p>
            </div>
          </div>
        )}

        {/* ---------------- Reach Tab ---------------- */}
        {activeTab === 'Reach' && (
          <div>
            {/* Top Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-gray-50 border rounded-lg p-4 text-center">
                <h3 className="text-2xl font-bold text-gray-900">45</h3>
                <p className="text-gray-600 text-sm mt-1">Impressions</p>
              </div>
              <div className="bg-gray-50 border rounded-lg p-4 text-center">
                <h3 className="text-2xl font-bold text-gray-900">8.9%</h3>
                <p className="text-gray-600 text-sm mt-1">Click-through rate</p>
              </div>
              <div className="bg-gray-50 border rounded-lg p-4 text-center">
                <h3 className="text-2xl font-bold text-gray-900">8</h3>
                <p className="text-gray-600 text-sm mt-1">Views</p>
              </div>
              <div className="bg-gray-50 border rounded-lg p-4 text-center">
                <h3 className="text-2xl font-bold text-gray-900">—</h3>
                <p className="text-gray-600 text-sm mt-1">Unique viewers</p>
              </div>
            </div>

            {/* Line Chart */}
            <div className="bg-white border rounded-lg p-4 mb-6">
              <div className="h-56">
                <Line data={reachChart} options={chartOptions} />
              </div>
              <button className="mt-4 px-4 py-2 text-sm border rounded-full hover:bg-gray-100">
                See more
              </button>
            </div>

            {/* How Viewers Find This Video */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left: Doughnut Chart */}
              <div className="border rounded-lg p-4 bg-gray-50">
                <h3 className="text-md font-semibold mb-1">How viewers find this video</h3>
                <p className="text-gray-600 text-sm mb-4">Views • Since published</p>
                <div className="h-48 flex justify-center">
                  <Doughnut data={doughnutData} />
                </div>
              </div>

              {/* Right: Funnel Info */}
              <div className="border rounded-lg p-4 bg-gray-50">
                <h3 className="text-md font-semibold mb-1">
                  Impressions and how they led to watch time
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Data available 14 Apr – 25 Oct 2025 (195 days)
                </p>
                <div className="bg-white rounded-lg border p-4">
                  <p className="text-sm text-gray-600 mb-1">Impressions</p>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">45</h2>
                  <div className="text-sm text-gray-500">
                    17.8% from YouTube recommending your content
                  </div>
                  <div className="mt-3 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-purple-500 w-[18%]" />
                  </div>
                  <p className="mt-3 text-sm text-gray-700">8.9% click-through rate</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ---------------- Engagement Tab ---------------- */}
        {activeTab === 'Engagement' && (
          <div>
            {/* Watch Time & Duration */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 border rounded-lg p-4 text-center">
                <h3 className="text-2xl font-bold text-gray-900">0.0</h3>
                <p className="text-gray-600 text-sm mt-1">Watch time (hours)</p>
              </div>
              <div className="bg-gray-50 border rounded-lg p-4 text-center">
                <h3 className="text-2xl font-bold text-gray-900">0:19</h3>
                <p className="text-gray-600 text-sm mt-1">Average view duration</p>
              </div>
            </div>

            {/* Line Chart */}
            <div className="bg-white border rounded-lg p-4 mb-6">
              <div className="h-56">
                <Line
                  data={{
                    labels: ['0', '33', '66', '99', '132', '165', '198 days'],
                    datasets: [
                      {
                        label: 'Watch time (hours)',
                        data: [0, 0.05, 0.06, 0.07, 0.09, 0.1, 0.1],
                        borderColor: '#ec4899',
                        borderWidth: 2,
                        tension: 0.4,
                        fill: false,
                      },
                    ],
                  }}
                  options={chartOptions}
                />
              </div>
              <button className="mt-4 px-4 py-2 text-sm border rounded-full hover:bg-gray-100">
                See more
              </button>
            </div>

            {/* Hype and Likes Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Hype */}
              <div className="border rounded-lg p-4 bg-gray-50 text-center">
                <h3 className="text-md font-semibold mb-2">Hype</h3>
                <p className="text-gray-600 text-sm mb-4">First 7 days</p>
                <div className="flex justify-center space-x-8">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">0</h2>
                    <p className="text-gray-600 text-sm">Hype points</p>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">0</h2>
                    <p className="text-gray-600 text-sm">Hypes</p>
                  </div>
                </div>
                <button className="mt-4 px-4 py-2 text-sm border rounded-full hover:bg-gray-100">
                  See more
                </button>
              </div>

              {/* Likes vs Dislikes */}
              <div className="border rounded-lg p-4 bg-gray-50">
                <h3 className="text-md font-semibold mb-2">Likes (vs dislikes)</h3>
                <p className="text-gray-600 text-sm mb-4">Since published</p>
                <div className="mb-2 text-sm font-medium text-gray-800">
                  Elvish Yadav Controversy! 😶‍🌫️ | Why The Internet is ...
                </div>
                <div className="flex items-center mb-2">
                  <div className="flex-1 bg-gray-200 h-2 rounded-full overflow-hidden">
                    <div className="bg-pink-500 h-full w-[100%]" />
                  </div>
                  <span className="ml-2 text-sm text-gray-700">100%</span>
                </div>
                <div className="flex items-center">
                  <div className="flex-1 bg-gray-200 h-2 rounded-full overflow-hidden">
                    <div className="bg-gray-400 h-full w-[97%]" />
                  </div>
                  <span className="ml-2 text-sm text-gray-700">97%</span>
                </div>
                <p className="mt-2 text-xs text-gray-500">Channel average</p>
                <button className="mt-4 px-4 py-2 text-sm border rounded-full hover:bg-gray-100">
                  See more
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ---------------- Audience Tab ---------------- */}
        {activeTab === 'Audience' && (
          <div>
            <div className="bg-white border rounded-lg p-4 mb-6">
              <h3 className="text-md font-semibold mb-2 text-left">Unique viewers</h3>
              <div className="h-56">
                <Line data={audienceChart} options={chartOptions} />
              </div>
              <button className="mt-4 px-4 py-2 text-sm border rounded-full hover:bg-gray-100">
                See more
              </button>
            </div>

            {/* Info Boxes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-4 bg-gray-50">
                <h3 className="text-md font-semibold">Audience by watch behaviour</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Unique viewers · Since uploaded (lifetime)
                </p>
                <p className="text-gray-500 text-sm mb-4">
                  Not enough viewer data to show this report
                </p>
                <button className="px-4 py-2 text-sm border rounded-full hover:bg-gray-100">
                  See more
                </button>
              </div>

              <div className="border rounded-lg p-4 bg-gray-50">
                <h3 className="text-md font-semibold">Viewers also watch</h3>
                <p className="text-gray-600 text-sm mb-4">Last 90 days</p>
                <p className="text-gray-500 text-sm mb-4">
                  Not enough eligible audience data to show this report.
                </p>
                <button className="px-4 py-2 text-sm border rounded-full hover:bg-gray-100">
                  See more
                </button>
              </div>

              <div className="border rounded-lg p-4 bg-gray-50 md:col-span-2">
                <h3 className="text-md font-semibold">Watch time from subscribers</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Watch time · Since uploaded (lifetime)
                </p>
                <p className="text-gray-500 text-sm mb-4">
                  Not enough viewer data to show this report
                </p>
                <button className="px-4 py-2 text-sm border rounded-full hover:bg-gray-100">
                  See more
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
