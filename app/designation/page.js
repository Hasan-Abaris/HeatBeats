'use client';
import React, { useEffect, useState } from 'react';
import { getAllDesignations } from '@/app/comman/FrontApi';

const DesignationPage = () => {
  const [designations, setDesignations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDesignations = async () => {
      try {
        const res = await getAllDesignations();
        setDesignations(res.data.data);
      } catch (error) {
        console.error('Error fetching designations:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDesignations();
  }, []);

  return (
    <div className="p-6 max-w-full overflow-x-auto">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">Designations</h2>

      {loading ? (
        <div className="flex justify-center items-center h-40">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-blue-500" />
          <span className="ml-2 text-blue-600 font-medium">Loading...</span>
        </div>
      ) : designations.length === 0 ? (
        <p className="text-gray-500 text-center">No designations found.</p>
      ) : (
        <div className="rounded-lg border shadow-sm">
          <table className="w-full text-sm text-left text-gray-700">
            <thead className="bg-blue-50 text-gray-700 uppercase tracking-wider">
              <tr>
                <th className="px-4 py-3">ID</th>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Min Salary</th>
                <th className="px-4 py-3">Avg Salary</th>
                <th className="px-4 py-3">Max Salary</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Description</th>
                <th className="px-4 py-3">Created</th>
                <th className="px-4 py-3">Updated</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {designations.map((item, index) => (
                <tr key={item.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-4 py-2">{item.id}</td>
                  <td className="px-4 py-2 font-medium text-gray-800">{item.name}</td>
                  <td className="px-4 py-2 text-green-600">₹{item.min_annual_salary}</td>
                  <td className="px-4 py-2 text-blue-600">₹{item.average_annual_salary}</td>
                  <td className="px-4 py-2 text-red-600">₹{item.max_annual_salary}</td>
                  <td className="px-4 py-2">
                    <span
                      className={`inline-block px-2 py-1 text-xs font-semibold rounded ${
                        item.status === 'Active'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td className="px-4 py-2 truncate max-w-xs" title={item.description}>
                    {item.description || '—'}
                  </td>
                  <td className="px-4 py-2 text-gray-500">
                    {new Date(item.created_at).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-2 text-gray-500">
                    {new Date(item.updated_at).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default DesignationPage;
