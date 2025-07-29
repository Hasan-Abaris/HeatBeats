import { Star } from "lucide-react";

export default function CourseCard({ course }) {
  return (
    <div className="relative bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden group">
      <div className="relative">
        <img src={course.image} alt={course.title} className="w-full h-40 object-contain bg-gray-100" />
        {course.tag && (
          <span className="absolute top-2 right-2 bg-yellow-400 text-xs px-2 py-1 rounded font-semibold">
            {course.tag}
          </span>
        )}
      </div>
      {course.hover && (
        <div className="absolute inset-0 bg-black bg-opacity-80 text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <p className="text-sm font-medium">{course.hover.completionRate} - Course completion rate</p>
          <p className="mt-2 text-sm">
            <strong>Next batch</strong>
            <br />
            {course.hover.nextBatch}
          </p>
          <p className="mt-4 text-sm font-semibold">What will I learn?</p>
          <ul className="text-sm list-disc list-inside">
            {course.hover.learn.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <button className="mt-4 bg-white text-black py-1 px-3 rounded text-sm font-semibold">
            VIEW DETAILS
          </button>
        </div>
      )}
      <div className="p-4 space-y-2">
        <h3 className="text-sm font-semibold leading-snug">{course.title}</h3>
        <ul className="text-xs text-gray-600 space-y-1">
          <li>👥 {course.enrolled}</li>
          <li>🗓️ {course.format}</li>
          <li>🧑‍💻 {course.selfPaced && "Selfpaced"}</li>
        </ul>
        <div className="flex items-center gap-1 text-sm text-gray-700 mt-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={14}
              fill={i < Math.round(course.rating) ? "gold" : "none"}
              strokeWidth={1}
              className="text-yellow-500"
            />
          ))}
          <span className="ml-1">{course.rating}({course.reviews})</span>
        </div>
      </div>
    </div>
  );
}
