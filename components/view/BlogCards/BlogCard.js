export default function BlogCard({ blog }) {
  return (
    <div className="w-72 bg-white shadow-md rounded border border-gray-200 overflow-hidden">
      <img
        src={blog.img}
        alt={blog.title}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h3 className="text-sm font-medium text-gray-800 mb-2">{blog.title}</h3>
        <button className="text-blue-600 text-sm font-medium border border-blue-600 px-3 py-1 rounded hover:bg-blue-50 transition">
          Read Article
        </button>
      </div>
    </div>
  );
}
