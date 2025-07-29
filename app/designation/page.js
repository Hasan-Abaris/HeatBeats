'use client';
import React, { useEffect, useState } from 'react';
import { getAllDesignations } from '@/app/comman/FrontApi'; // Adjust path as needed

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
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">All Designations</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className="list-disc pl-5 space-y-1">
          {designations.map((item) => (
            <li key={item.id}>{item.designation}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DesignationPage;
