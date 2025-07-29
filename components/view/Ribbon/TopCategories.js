import React from 'react';

export default function TopCategories({ categories }) {
  return (
    <section className="p-8 w-[60vw] mx-auto text-center">
      <h2 className="text-xl font-semibold mb-6">Discover Top Categories</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {categories.map((cat, i) => (
          <button
            key={i}
            className="px-4 py-2 border border-gray-400 rounded text-sm whitespace-nowrap"
          >
            {cat}
          </button>
        ))}
      </div>
    </section>
  );
}
