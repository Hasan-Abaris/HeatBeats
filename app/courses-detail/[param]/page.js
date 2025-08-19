import AccordionSection from "@/components/view/courses-detail/AccordionSection";
import CourseBenefits from "@/components/view/courses-detail/CourseBenefits";
import CourseIntro from "@/components/view/courses-detail/CourseIntro";
import CourseSchedule from "@/components/view/courses-detail/CourseSchedule";
import Faqcomp from "@/components/view/courses-detail/Faqcomp";
import PwcCourses from "@/components/view/courses-detail/PwcCourses";
import WhyChooseEdureka from "@/components/view/courses-detail/WhyChooseEdureka";
import { getAllCourses, getCourseDetails } from "@/app/comman/FrontApi";

export async function generateStaticParams() {
  try {
    const res = await getAllCourses();
    const courses = res?.data?.data || [];
    return courses.map(course => ({
      param: String(course.id)  
    }));
  } catch (err) {
    console.error("Error fetching course list:", err);
    return [];
  }
}

export default async function CourseDetailPage({ params }) {
  const { param } = params;

  let initialCourseData = null;
  try {
    const res = await getCourseDetails(param);
    const courseData = res?.data?.data;
    if (courseData) {
      initialCourseData = {
        id: courseData.id,
        name: courseData.name || "",
        description: courseData.description || "",
        image: courseData.image || "/images/default-course.png",
        batches: courseData.batches || [],
        benefits: courseData.benefits || [],
        faqs: courseData.faqs || [],
        price: {
          original: courseData.originalPrice || "",
          discounted: courseData.discountedPrice || "",
          discount: courseData.discount || "",
          emi: courseData.emi || "",
          amount: courseData.amount || "",
        },
      };
    }
  } catch (error) {
    console.error("Failed to fetch course details:", error);
  }

  if (!initialCourseData) {
    return (
      <div className="w-[1100px] mx-auto p-6">
        <h2 className="text-xl font-bold">Course not found</h2>
        <p>Please check the course ID and try again.</p>
      </div>
    );
  }

  return (
    <>
      <div className="bg-gray-100">
        <section className="p-6 md:px-16 md:py-16 w-[1100px] mx-auto">
          <CourseIntro course={initialCourseData} />
        </section>
      </div>
      <section className="w-[1100px] mx-auto">
        <CourseSchedule initialCourseData={initialCourseData} />
      </section>
      <section className="w-[1100px] mx-auto md:px-8 md:py-8">
        <CourseBenefits benefits={initialCourseData.benefits} />
      </section>
      <div className="bg-gray-100">
        <section className="w-[1100px] mx-auto md:px-8 md:py-8">
          <WhyChooseEdureka />
        </section>
      </div>
      <section className="w-[1100px] mx-auto md:px-8 md:py-8">
        <Faqcomp faqs={initialCourseData.faqs} />
      </section>
      <div className="bg-gray-100">
        <section className="w-[1100px] mx-auto md:px-8 md:py-8">
          <PwcCourses />
        </section>
      </div>
    </>
  );
}
