import React from 'react'

function RecQues({questionsData}) {
    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <h4 className="font-bold text-2xl mb-3 textBlueDark underline p-4">Recent Questions</h4>
            <ul className="space-y-3">
                {questionsData?.recentQuestions.map((question, index) => (
                    <li
                        key={index}
                        className="text-md text-black px-4 py-1 hover:text-blue-800 hover:underline cursor-pointer  border-y border-gray-200"
                    >
                        {question}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default RecQues
