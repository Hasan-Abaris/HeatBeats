import React from 'react'

function PopTag({questionsData}) {
    return (
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <h4 className="font-bold text-lg mb-3 textBlueDark">Most Popular Tags</h4>
            <div className="flex flex-wrap gap-2">
                {questionsData.popularTags.map((tag) => (
                    <span
                        key={tag}
                        className="bgOrange text-white text-xs px-3 py-1 rounded-full hover:bg-gray-100 hover:text-orange cursor-pointer"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    )
}

export default PopTag
