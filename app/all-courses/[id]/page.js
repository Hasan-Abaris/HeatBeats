// ./app/all-courses/[id]/page.js
import { getCourseDetails } from "@/app/comman/FrontApi";
import { notFound } from "next/navigation";

export default async function CourseDetailsPage({ params }) {
  const { id } = params; // ✅ no await

  console.log("CourseDetailsPage - Received id:", id);

  try {
    const res = await getCourseDetails(id);
    console.log("getCourseDetails Response:", res.data);

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
          <p>{course.category?.name}</p>
        </div>

        <div className="mt-4">
          <h2 className="font-semibold">Features:</h2>
          <ul className="list-disc ml-6">
            {course.course_features?.map((f) => (
              <li key={f.id}>{f.name}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Failed to fetch course details:", error.message, error.response?.data);
    notFound();
  }
}
