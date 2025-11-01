'use client';
import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaHeart, FaComment, FaShare } from 'react-icons/fa';
import { useRouter } from 'next/navigation'; // ✅ import router

function FillQuestion({ filteredQuestions }) {
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
    if (!filteredQuestions[questionIndex]) return;
    if (type === 'up') filteredQuestions[questionIndex].votes += 1;
    if (type === 'down') filteredQuestions[questionIndex].votes -= 1;
    setCommentsData({ ...commentsData }); // force re-render
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
  const router = useRouter(); // ✅ initialize router

  return (
    <div className="border rounded-lg p-4 sm:p-5 md:p-6 bg-white shadow-sm transition hover:shadow-md">
      {/* Author Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
        <div
          className="flex items-center gap-3 cursor-pointer" // ✅ make clickable
          onClick={() => router.push(`/Contestdetails/`)} // ✅ route to ContentDetails page
        >
          <img
            src={`https://ui-avatars.com/api/?name=${encodeURIComponent(question.author)}`}
            alt={question.author}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h4 className="font-semibold text-black text-sm sm:text-base">{question.author}</h4>
            <p className="text-xs text-gray-500">{question.date}</p>
          </div>
        </div>
        <button className="px-3 py-1 text-sm bg-green-700 text-white rounded-md hover:bg-green-700 transition">
          Follow
        </button>
      </div>

      {/* Question Content */}
      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 hover:underline">
        {question.title}
      </h3>
      <p className="text-gray-600 text-sm sm:text-base mb-3">{question.excerpt}</p>

      <div className="flex flex-wrap items-center text-xs sm:text-sm text-green-700 gap-2 mb-4">
        <span className="font-medium">{question.tags.join(', ')}</span>
        <span>•</span>
        <span>{question.views} views</span>
        <span>•</span>
        <span>{question.answers} answers</span>
      </div>

      {/* Voting & Social Actions */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 mb-4">
        <div className="flex items-center gap-3 text-sm sm:text-base">
          <button
            onClick={() => handleVote(qIndex, 'up')}
            className="flex items-center gap-1 text-gray-600 hover:text-blue-600"
          >
            <FaChevronUp /> Upvote
          </button>
          <span className="font-medium">{question.votes}</span>
          <button
            onClick={() => handleVote(qIndex, 'down')}
            className="flex items-center gap-1 text-gray-600 hover:text-red-600"
          >
            <FaChevronDown /> Downvote
          </button>
        </div>

        <div className="flex items-center flex-wrap gap-4 text-sm sm:text-base">
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
        <div className="flex flex-col sm:flex-row gap-2 mt-3">
          <input
            type="text"
            className="flex-1 border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            className="px-3 py-2 bg-green-700 text-white rounded-md hover:bg-green-700 text-sm transition"
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
