import Link from "next/link";

function Cards({ data }) {
  // fallback data if API didn’t provide
  const fallback = {
    id: data?.id || "demo-course",
    name: data?.name || "Sample Course",
    reviews: data?.reviews || 120,
    rating: data?.rating || 4.5,
    nextBatch: data?.nextBatch || "15th Sept 2025",
  };

  return (
    <div className="relative group bg-white rounded-xl shadow-md h-full overflow-hidden border border-gray-100 my-3 transition-transform duration-300 hover:scale-[1.02]">
      {/* Header Title */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-400 text-white text-sm font-bold p-4 uppercase leading-tight">
        <div className="flex items-center gap-2">
          {!data?.name && (
            <span className="w-6 h-6 bg-white/30 rounded-full flex items-center justify-center text-white font-semibold">
              ∞
            </span>
          )}
          <span>{fallback.name}</span>
        </div>
      </div>

      {/* Body Content */}
      <div className="p-4">
        <Link
          href={`/courses-detail/${fallback.id}`}
          className="text-sm font-semibold text-gray-800 mb-2 block"
        >
          {fallback.name}
        </Link>

        <p className="text-xs text-gray-400 mb-2">Reviews</p>

        <div className="flex items-center space-x-2">
          <div className="flex text-orange-400 text-sm">
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span className={fallback.rating >= 4 ? "text-orange-400" : "text-gray-300"}>★</span>
            <span className="text-gray-300">★</span>
          </div>
          <div className="text-sm text-gray-700 font-semibold">
            {fallback.rating}{" "}
            <span className="text-gray-400 text-xs">
              ({fallback.reviews})
            </span>
          </div>
        </div>
      </div>

      {/* 🔥 Hover Overlay */}
      <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-6 text-center">
        {/* Next Batch Date */}
        <p className="text-sm mb-3">
          <span className="font-semibold">Next Batch:</span> {fallback.nextBatch}
        </p>

        {/* Highlights */}
        <ul className="text-xs space-y-1 mb-4 text-left">
          <li className="before:content-['✔'] before:mr-2 before:text-green-400">
            Hands-on Labs
          </li>
          <li className="before:content-['✔'] before:mr-2 before:text-green-400">
            AI-Powered DevOps Tools
          </li>
          <li className="before:content-['✔'] before:mr-2 before:text-green-400">
            Certification Guidance
          </li>
        </ul>

        {/* CTA Button */}
        <Link
          href={`/courses-detail/${fallback.id}`}
          className="bg-pink-500 hover:bg-pink-600 text-white text-sm font-semibold px-4 py-2 rounded-lg shadow-md transition"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

export default Cards;
