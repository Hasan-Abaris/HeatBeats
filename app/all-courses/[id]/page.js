import { getAllCourses, getCourseDetails, getCoursesByCourseCategory } from "@/app/comman/FrontApi";
import { notFound } from "next/navigation";

// ✅ Generate static params for SSG
export async function generateStaticParams() {
  try {
    const res = await getAllCourses();
    const courses = res?.data?.data || [];

    return courses.map((course) => ({
      id: course.id.toString(),
    }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}

// ✅ Course Details Page
const CourseDetailsPage = async ({ params }) => {
  const { id } = params;

  let course = null;
  let relatedCourses = [];

  try {
    const res = await getCourseDetails(id);
    course = res?.data?.data || null;

    if (!course) return notFound();

    // ✅ Fetch related courses from same course_category
    if (course?.course_category_id) {
      const related = await getCoursesByCourseCategory(course.course_category_id);
      relatedCourses = (related?.data || []).filter((c) => c.id !== course.id);
    }

  } catch (error) {
    console.error("Failed to fetch course details:", error);
    return notFound();
  }

  return (
    <div className="p-8 md:p-16">
      <h1 className="text-3xl font-bold text-blue-900 mb-4">{course.name}</h1>
      <p className="mb-4 text-gray-700">{course.description || "No description provided."}</p>

      <ul className="space-y-2 text-sm text-gray-800">
        <li><strong>Certificate:</strong> {course.certificate || "N/A"}</li>
        <li><strong>Duration:</strong> {course.duration || "N/A"}</li>
        <li><strong>Mode:</strong> {course.mode || "N/A"}</li>
        <li><strong>Start Date:</strong> {course.startDate || "Flexible"}</li>
        <li><strong>Category:</strong> {course.category?.name || "N/A"}</li>
        <li><strong>Course Category:</strong> {course.course_category?.name || "N/A"}</li>
      </ul>

      {/* ✅ More Courses from Same Category */}
      {relatedCourses.length > 0 && (
        <div className="mt-10">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">More courses from this category</h2>
          <ul className="grid gap-4 md:grid-cols-2">
            {relatedCourses.map((c) => (
              <li key={c.id} className="border p-4 rounded shadow hover:shadow-md transition">
                <h3 className="text-lg font-bold text-blue-700">{c.name}</h3>
                <p className="text-gray-600">{c.description?.slice(0, 100) || "No description"}...</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CourseDetailsPage;
