import React, { useState } from "react";

function AllCategories({ questionsData, onCategoryClick }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="bg-black rounded-lg shadow-sm border border-gray-200">
      <h4 className="font-bold text-2xl text-white p-4">All Categories</h4>
      <ul className="divide-y divide-white">
        {questionsData?.categories.map((category, index) => (
          <li
            key={index}
            onClick={() => onCategoryClick && onCategoryClick(category)}
            className={`flex items-center justify-between p-2 cursor-pointer transition-colors duration-200 text-white
                            ${
                              category.isSelected
                                ? "bg-blue-50 text-gray-400 font-semibold"
                                : "hover:bg-green-700"
                            }
                        `}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="flex items-center space-x-2 relative">
              <img
                src={category?.icon || "/images/empty-state.png"}
                alt={category.name}
                className="w-6 h-6 rounded-full"
              />
              <span className="truncate">{category?.name}</span>

              {/* Tooltip on hover */}
              {hoveredIndex === index && (
                <div className="absolute z-10 w-32 p-2 left-20 mt-2 text-sm text-white bg-gray-800 rounded-md shadow-lg">
                  <p className="font-semibold truncate text-center">
                    {category.name}
                  </p>
                  <div className="absolute -top-1 left-4 w-3 h-3 bg-black rotate-45"></div>
                </div>
              )}
            </div>

            {/* Count badge */}
            {category.count && (
              <span className="bg-green-700 text-white text-xs px-3 py-1 rounded-full hover:bg-black hover:text-orange transition-colors">
                {category.count}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllCategories;
