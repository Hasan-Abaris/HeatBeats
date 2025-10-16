import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaHeart, FaComment, FaShare } from 'react-icons/fa';

function FillQuestion({ filteredQuestions }) {
    // Keep comments separate from questions data
    const [commentsData, setCommentsData] = useState({});

    const handleAddComment = (questionIndex, text) => {
        if (!text) return;
        setCommentsData((prev) => {
            const questionComments = prev[questionIndex] || [];
            return {
                ...prev,
                [questionIndex]: [
                    ...questionComments,
                    { author: 'CurrentUser', text, date: new Date().toLocaleDateString() },
                ],
            };
        });
    };

    const handleVote = (questionIndex, type) => {
        // Update vote count directly in filteredQuestions
        if (!filteredQuestions[questionIndex]) return;
        if (type === 'up') filteredQuestions[questionIndex].votes += 1;
        if (type === 'down') filteredQuestions[questionIndex].votes -= 1;

        // Force a re-render by updating commentsData (hack to re-render)
        setCommentsData({ ...commentsData });
    };

    return (
        <div className="mt-4 space-y-6">
            {filteredQuestions.length > 0 ? (
                filteredQuestions.map((question, qIndex) => (
                    <QuestionCard
                        key={qIndex}
                        question={question}
                        qIndex={qIndex}
                        handleVote={handleVote}
                        questionComments={commentsData[qIndex] || []}
                        handleAddComment={handleAddComment}
                    />
                ))
            ) : (
                <div className="text-center py-10 text-gray-500">
                    No questions found in this category
                </div>
            )}
        </div>
    );
}

function QuestionCard({ question, qIndex, handleVote, questionComments, handleAddComment }) {
    const [commentText, setCommentText] = useState('');

    return (
        <div className="border rounded-md p-4 md:p-6 bg-white shadow-sm">
            {/* Question Header */}
            <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                    <img
                        src={`https://ui-avatars.com/api/?name=${encodeURIComponent(question.author)}`}
                        alt={question.author}
                        className="w-10 h-10 rounded-full"
                    />
                    <div>
                        <h4 className="font-semibold text-blue-800">{question.author}</h4>
                        <p className="text-xs text-gray-500">{question.date}</p>
                    </div>
                </div>
                <button className="px-3 py-1 text-sm text-white bg-blue-600 rounded hover:bg-blue-700">
                    Follow
                </button>
            </div>

            {/* Question Content */}
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 hover:underline">
                {question.title}
            </h3>
            <p className="text-gray-600 mb-3">{question.excerpt}</p>
            <div className="flex flex-wrap text-xs md:text-sm text-gray-500 gap-2 mb-4">
                <span className="font-medium">{question.tags.join(', ')}</span>
                <span>•</span>
                <span>{question.views} views</span>
                <span>•</span>
                <span>{question.answers} answers</span>
            </div>

            {/* Voting & Social Actions */}
            <div className="flex items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => handleVote(qIndex, 'up')}
                        className="flex items-center gap-1 text-gray-600 hover:text-blue-600"
                    >
                        <FaChevronUp /> Upvote
                    </button>
                    <span>{question.votes}</span>
                    <button
                        onClick={() => handleVote(qIndex, 'down')}
                        className="flex items-center gap-1 text-gray-600 hover:text-red-600"
                    >
                        <FaChevronDown /> Downvote
                    </button>
                </div>
                <div className="flex items-center gap-4">
                    <button className="flex items-center gap-1 text-gray-600 hover:text-pink-600">
                        <FaHeart /> Like
                    </button>
                    <button className="flex items-center gap-1 text-gray-600 hover:text-blue-600">
                        <FaComment /> Comment
                    </button>
                    <button className="flex items-center gap-1 text-gray-600 hover:text-green-600">
                        <FaShare /> Share
                    </button>
                </div>
            </div>

            {/* Comments Section */}
            <div className="border-t border-gray-200 pt-3 space-y-3">
                {questionComments.map((comment, cIndex) => (
                    <div key={cIndex} className="flex gap-2 items-start">
                        <img
                            src={`https://ui-avatars.com/api/?name=${encodeURIComponent(comment.author)}`}
                            alt={comment.author}
                            className="w-8 h-8 rounded-full"
                        />
                        <div className="bg-gray-100 p-2 rounded-md flex-1">
                            <p className="text-sm font-semibold text-blue-800">{comment.author}</p>
                            <p className="text-gray-700 text-sm">{comment.text}</p>
                            <span className="text-xs text-gray-500">{comment.date}</span>
                        </div>
                    </div>
                ))}

                {/* Add Comment Input */}
                <div className="flex gap-2 items-center mt-2">
                    <input
                        type="text"
                        className="flex-1 border border-gray-300 rounded-md p-2 text-sm"
                        placeholder="Write a comment..."
                        value={commentText}
                        onChange={(e) => setCommentText(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                handleAddComment(qIndex, commentText);
                                setCommentText('');
                            }
                        }}
                    />
                    <button
                        className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
                        onClick={() => {
                            handleAddComment(qIndex, commentText);
                            setCommentText('');
                        }}
                    >
                        Post
                    </button>
                </div>
            </div>
        </div>
    );
}

export default FillQuestion;
