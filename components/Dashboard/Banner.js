"use client"
import React, { useEffect, useRef } from 'react';
import { Chart, LineController, LineElement, PointElement, LinearScale, Title, CategoryScale } from 'chart.js';

Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale);

function Banner() {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], // example labels
        datasets: [
          {
            label: 'Visits',
            data: [12, 19, 14, 20, 18, 24, 22], // example data
            borderColor: '#3B82F6',
            backgroundColor: 'rgba(59, 130, 246, 0.2)',
            tension: 0.4,
            fill: true,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true,
          },
        },
      },
    });

    return () => {
      myChart.destroy();
    };
  }, []);

  return (
    <div className="p-6">
      <h3 className="text-2xl font-semibold mb-6 text-gray-800">Dashboard</h3>

      <div className="mt-6 p-6 bg-gray-50 rounded-lg shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <select
            id="stats-option"
            className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="week">Last 7 days</option>
            <option value="month">Last 30 days</option>
          </select>
          <h3 className="text-lg font-medium text-gray-700">Statistics</h3>
        </div>

        <div className="overflow-x-auto">
          <div className="relative h-64 w-full">
            <canvas ref={chartRef} className="block h-full w-full"></canvas>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
