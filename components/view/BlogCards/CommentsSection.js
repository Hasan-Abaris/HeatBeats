import React from 'react';

const CommentsSection = ({ comments }) => {
  if (!comments || comments.length === 0) return null;

  return (
    <section className="bg-white shadow-md rounded p-6 mt-12">
      {/* Comments Header */}
      <div className="border-b pb-2 mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-800 border-b-4 border-yellow-400 inline-block pb-1">
          Comments
        </h3>
        <span className="text-gray-600 text-sm">
          {comments.length} Comment{comments.length !== 1 ? 's' : ''}
        </span>
      </div>

      {/* Render Each Comment */}
      {comments.map((comment, idx) => (
        <div key={idx} className="mb-6">
          <div className="flex items-start space-x-3">
            <img
              src={comment.avatar || '/images/avatar.png'}
              alt="User Avatar"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="text-sm font-semibold text-gray-800">
                {comment.name}{' '}
                <span className="text-gray-500 font-normal">says:</span>
              </p>
              <p className="text-xs text-blue-700 mb-2">{comment.date}</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                {comment.message}
              </p>
              <button className="mt-2 text-sm text-blue-600 font-semibold hover:underline">
                Reply
              </button>
            </div>
          </div>
        </div>
      ))}

      <hr className="mb-6" />

      {/* Join the Discussion */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800 border-b-4 border-yellow-400 inline-block pb-1 mb-4">
          Join the discussion
        </h3>
        <div className="border border-gray-300 rounded overflow-hidden">
          <textarea
            placeholder="Write a comment..."
            className="w-full h-24 p-3 text-sm text-gray-700 border-0 resize-none focus:outline-none"
          />
          <div className="p-2 flex justify-end">
            <button
              disabled
              className="bg-gray-200 text-gray-500 px-4 py-1.5 text-sm rounded cursor-not-allowed"
            >
              Comment
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommentsSection;
