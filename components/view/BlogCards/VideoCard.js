export default function VideoCard({ video }) {
  return (
    <div className="w-72 bg-white shadow-md rounded border border-gray-200 overflow-hidden">
      <div className="relative w-full h-40">
        <iframe
          src={video.src}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
      <div className="p-4">
        <h3 className="text-sm font-medium text-gray-800 mb-2">
          {video.title}
        </h3>
        <button className="text-blue-600 text-sm font-medium border border-blue-600 px-3 py-1 rounded hover:bg-blue-50 transition">
          Watch Now
        </button>
      </div>
    </div>
  );
}
