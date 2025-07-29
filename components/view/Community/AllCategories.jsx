import React, { useState } from 'react';

function AllCategories({ questionsData }) {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                <h4 className="font-bold text-2xl textBlueDark p-4">All Categories</h4>
                <ul className="">
                    {questionsData?.categories.map((category, index) => (
                        <li
                            key={index}
                            className={`flex items-center justify-between p-2 cursor-pointer hover:bg-gray-50 border-t border-gray-200 ${
                                category.isSelected ? 'bg-blue-50 text-blue-600' : ''
                            }`}
                        >
                            <div className="flex items-center space-x-2 relative">
                                <img
                                    src={category?.icon || "/images/empty-state.png"}
                                    alt="icon"
                                    className="w-6 h-6"
                                />
                                <span className="truncate hover:text-orange cursor-pointer" onMouseEnter={() => setHoveredIndex(index)}
                                        onMouseLeave={() => setHoveredIndex(null)}>{category?.name}</span>
                                {hoveredIndex === index && (
                                        <div className="absolute z-10  w-24 p-1 left-24 mt-16 text-sm text-white bg-gray-800 rounded-md shadow-lg">
                                            <div className="text-center">
                                                <p className="font-semibold truncate">{category.name}</p>
                                            </div>
                                            <div className="absolute -top-1 right-12  w-3 h-3 bg-gray-800 transform rotate-45"></div>
                                        </div>
                                    )}
                            </div>
                            {category.count && (
                                <div className="">
                                    <span 
                                        className="bgOrange text-white text-xs px-3 py-1 rounded-full hover:bg-gray-100 hover:text-orange cursor-pointer"
                                        
                                    >
                                        ({category.count})
                                    </span>
                                    
                                </div>
                            )}
                        </li>                      
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default AllCategories;