import { getCourseDetails, getAllCourses } from "@/app/comman/FrontApi";
import { notFound } from "next/navigation";

// ✅ Pre-generate params for static export
export async function generateStaticParams() {
  try {
    const res = await getAllCourses();
    const courses = res?.data?.data || [];

    return courses.map((course) => ({
      id: course.id.toString(),
    }));
  } catch (error) {
    console.error("Failed to fetch courses for static params:", error.message);
    return [];
  }
}

export default async function CourseDetailsPage({ params }) {
  const { id } = params;

  console.log("CourseDetailsPage - Received id:", id);

  try {
    const res = await getCourseDetails(id);
    const course = res?.data?.data || null;

    if (!course) {
      console.error("No course data found for id:", id);
      notFound();
    }

    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold">{course.name}</h1>
        <p className="mt-2">{course.description}</p>

        <div className="mt-4">
          <h2 className="font-semibold">Category:</h2>
          <p>{course.category?.name || "N/A"}</p>
        </div>

        <div className="mt-4">
          <h2 className="font-semibold">Features:</h2>
          <ul className="list-disc ml-6">
            {course.course_features?.length > 0 ? (
              course.course_features.map((f) => (
                <li key={f.id}>{f.name}</li>
              ))
            ) : (
              <li>No features listed</li>
            )}
          </ul>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Failed to fetch course details:", error.message, error.response?.data);
    notFound();
  }
}
