import React from 'react';

function PopTag({ questionsData, onTagClick }) {
    return (
        <div className="bg-black p-4 rounded-lg shadow-sm border border-gray-200">
            <h4 className="font-bold text-lg mb-3 text-white">Most Popular Tags</h4>
            <div className="flex flex-wrap gap-2">
                {questionsData.popularTags.map((tag) => (
                    <button
                        key={tag}
                        onClick={() => onTagClick && onTagClick(tag)}
                        className="bg-green-700 text-white text-xs px-3 py-1 rounded-full hover:bg-white hover:text-black border border-transparent hover:border-green-700 transition-all duration-200"
                    >
                        {tag}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default PopTag;
