import React from 'react'

function RecQues({ questionsData, onQuestionClick }) {
    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <h4 className="font-bold text-2xl mb-3 textBlueDark underline p-4">Recent Questions</h4>
            <ul className="space-y-2">
                {questionsData?.recentQuestions.map((question, index) => (
                    <li
                        key={index}
                        onClick={() => onQuestionClick && onQuestionClick(question)}
                        className="flex items-center justify-between px-4 py-2 text-md text-gray-800 hover:text-blue-800 hover:underline cursor-pointer border-b last:border-b-0 transition-colors duration-200"
                    >
                        <span className="mr-2 font-semibold">{index + 1}.</span>
                        <span>{question}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default RecQues
