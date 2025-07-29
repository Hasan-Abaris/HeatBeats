import { HiShare, HiBookmark } from 'react-icons/hi';

export default function BlogHeader({
  title,
  lastUpdated,
  views,
  authorName,
  authorImage,
}) {
  return (
    <div className="border border-gray-200 p-6 rounded-xl shadow-sm bg-white">
      <h1 className="text-3xl font-bold text-gray-800 mb-3 leading-snug">
        {title}
      </h1>
      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
        <span>
          Last updated on {lastUpdated} &bull; {views} Views
        </span>
        <div className="flex gap-4 items-center">
          <HiShare size={18} className="cursor-pointer hover:text-gray-700" />
          <HiBookmark
            size={18}
            className="cursor-pointer hover:text-gray-700"
          />
        </div>
      </div>
      <div className="flex items-center gap-3 text-sm">
        <img
          src={authorImage || 'https://via.placeholder.com/32'}
          alt="author"
          className="w-9 h-9 rounded-full border"
        />
        <span className="font-medium text-gray-800">
          {authorName || 'Author Name'}
        </span>
      </div>
    </div>
  );
}
