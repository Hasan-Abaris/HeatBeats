// ./app/all-courses/[id]/page.js
import { getAllCourses, getCourseDetails } from "@/app/comman/FrontApi";
import { redirect } from "next/navigation";

export async function generateStaticParams() {
  try {
    const res = await getAllCourses();
    const courses = res?.data?.data || [];
    console.log('Generated static params from getAllCourses:', courses.map(c => c.id));
    return courses.map((course) => ({
      id: course.id.toString(),
    }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}

export default async function CourseDetailsPage({ params }) {
  const { id } = await params; // Await params to access id correctly

  console.log('CourseDetailsPage - Received id:', id);

  try {
    const res = await getCourseDetails(id);
    console.log('getCourseDetails Response:', JSON.stringify(res.data, null, 2));
    const course = res?.data?.data || null;

    if (!course) {
      console.error('No course data found for id:', id);
      redirect("/not-found");
    }

    // Map id to param (e.g., 11 -> 1, 20 -> 2, 19 -> 3, 18 -> 4, 17 -> 5)
    const idToParamMap = {
      '11': '1',
      '20': '2',
      '19': '3',
      '18': '4',
      '17': '5',
      '16': '1', // Cycle through 1-5 for additional ids
      '15': '2',
      '14': '3',
      '13': '4',
      '12': '5',
      '1': '1',
      '10': '2',
      '9': '3',
      '8': '4',
      '7': '5',
      '6': '1',
      '5': '2',
      '4': '3',
      '3': '4',
      '2': '5',
    }; // Extend as needed based on getAllCourses ids
    const param = idToParamMap[id] || id; // Fallback to id if no mapping
    console.log('Mapped param:', param);

    // Validate param against expected values from courses-detail/[param]/page.js
    if (!['1', '2', '3', '4', '5'].includes(param)) {
      console.error('Invalid param value:', param, 'does not match expected params:', ['1', '2', '3', '4', '5']);
      redirect("/not-found");
    }

    // Redirect to the detailed page
    console.log('Redirecting to /courses-detail/', param);
    redirect(`/courses-detail/${param}`);
  } catch (error) {
    console.error("Failed to fetch course details for id:", id, 'Error:', error.message, error.response?.data);
    redirect("/not-found");
  }

  return null; // This won't render due to redirect
}