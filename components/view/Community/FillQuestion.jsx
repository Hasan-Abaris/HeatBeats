import React from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa6'

function FillQuestion({ filteredQuestions }) {
    return (
        <div className=" mt-2">
            {filteredQuestions.length > 0 ? (
                <div className="space-y-6">
                    {filteredQuestions.map((question, index) => (
                        <div className='flex pb-6 border md:p-6 border-gray-200 last:pb-0' key={index}>
                            <div className="">
                                <h3 className="text-lg md:text-xl  text-blue-800 mb-2 font-bold hover:underline">
                                    {question.title}
                                </h3>
                                <p className="text-gray-600 mb-3 font-semibold">{question.excerpt}</p>
                                <div className="flex flex-wrap items-center text-xs md:text-sm text-gray-500 gap-2">
                                    <span>{question.date}</span>
                                    <span>•</span>
                                    <span className="text-gray-700 font-medium">{question.tags.join(', ')}</span>
                                    <span>•</span>
                                    <span>by {question.author}</span>
                                    <span>•</span>
                                    <span>{question.views} views</span>

                                </div>

                            </div>

                            <div className="flex gap-2 ml-auto justify-stretch">
                                <div className="bg-white px-2 py-1 rounded flex items-center justify-center gap-4 border">
                                    <div className=''>
                                        <button className='block p-2 text-white text-sm font-extrabold shadow mb-2 bg-blue-300'><FaChevronUp /></button>
                                        <button className='block p-2 text-white text-sm font-extrabold shadow bt-2 bg-orange'><FaChevronDown /></button>
                                    </div>
                                    <div className='text-center'>
                                        <h3 className='text-2xl font-bold textBlueDark'>+ {question.votes}</h3>
                                        <p>votes</p>
                                    </div>
                                </div>
                                <div className="bg-white px-2 py-1  rounded text-center border flex items-center">
                                    <div className="  self-center">
                                        <span className='text-2xl font-extrabold '>{question.answers}</span>
                                        <p>answers</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center py-10 text-gray-500">
                    No questions found in this category
                </div>
            )}
        </div>
    )
}

export default FillQuestion
