import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import AccordionSection from '@/components/view/courses-detail/AccordionSection';
import CourseBenefits from '@/components/view/courses-detail/CourseBenefits';
import CourseIntro from '@/components/view/courses-detail/CourseIntro';
import CourseSchedule from '@/components/view/courses-detail/CourseSchedule';
import Faqcomp from '@/components/view/courses-detail/Faqcomp';
import PwcCourses from '@/components/view/courses-detail/PwcCourses';
import WhyChooseEdureka from '@/components/view/courses-detail/WhyChooseEdureka';
import { getAllCourses, getCourseDetails } from '@/app/comman/FrontApi';

export const revalidate = 3600;

export async function generateMetadata({ params }) {
  const { param } = params;
  try {
    const res = await getCourseDetails(param);
    const courseData = res?.data?.data;
    return {
      title: courseData?.name || 'Course Details',
      description: courseData?.description || 'Learn more about this course.',
      openGraph: {
        title: courseData?.name,
        description: courseData?.description,
        images: [courseData?.image || '/images/default-course.png'],
      },
    };
  } catch (error) {
    return {
      title: 'Course Not Found',
      description: 'The requested course could not be found.',
    };
  }
}

export async function generateStaticParams() {
  try {
    const res = await getAllCourses();
    const courses = res?.data?.data || [];
    return courses.map((course) => ({
      param: String(course.id),
    }));
  } catch (err) {
    console.error('Error fetching course list:', err);
    return [];
  }
}

export default async function CourseDetailPage({ params }) {
  const { param } = params;
  let initialCourseData = null;

  try {
    const res = await getCourseDetails(param);
    const courseData = res?.data?.data;

    if (!courseData) {
      notFound();
    }

    initialCourseData = {
      id: courseData.id,
      name: courseData.name || 'Unnamed Course',
      description: courseData.description || 'No description available.',
      image: courseData.image || '/images/default-course.png',
      batches: courseData.batches || [],
      benefits: courseData.course_features?.map((f) => f.name) || ['No benefits listed'],
      faqs: courseData.faqs || [{ question: 'No FAQs available', answer: 'Check back later.' }],
      price: {
        original: courseData.price?.original || 'N/A',
        discounted: courseData.price?.discounted || 'N/A',
        discount: courseData.price?.discount || 'N/A',
        emi: courseData.price?.emi || 'N/A',
        amount: courseData.price?.amount || 'N/A',
      },
    };
  } catch (error) {
    console.error('Failed to fetch course details:', error);
    notFound();
  }

  return (
    <Suspense fallback={<div className="w-full max-w-[1100px] mx-auto p-6">Loading course details...</div>}>
      <div className="min-h-screen">
        {/* Course Intro */}
        <div className="bg-gray-100">
          <section className="w-full max-w-[1100px] mx-auto p-4 sm:p-6 md:px-16 md:py-16">
            <h2 className="text-2xl font-bold mb-4">Course Overview</h2>
            <CourseIntro course={initialCourseData} />
          </section>
        </div>

        {/* Schedule */}
        <div className="bg-white">
          <section className="w-full max-w-[1100px] mx-auto p-4 sm:p-6 md:px-8 md-py-8">
            <h2 className="text-2xl font-bold mb-4">Course Schedule</h2>
            <CourseSchedule initialCourseData={initialCourseData} />
          </section>
        </div>

        {/* Benefits */}
        <div className="bg-gray-100">
          <section className="w-full max-w-[1100px] mx-auto p-4 sm:p-6 md:px-8 md-py-8">
            <h2 className="text-2xl font-bold mb-4">Course Benefits</h2>
            <CourseBenefits benefits={initialCourseData.benefits} />
          </section>
        </div>

        {/* Why Choose Edureka */}
        <div className="bg-white">
          <section className="w-full max-w-[1100px] mx-auto p-4 sm:p-6 md:px-8 md-py-8">
            <h2 className="text-2xl font-bold mb-4">Why Choose Us</h2>
            <WhyChooseEdureka />
          </section>
        </div>

        {/* FAQs */}
        <div className="bg-gray-100">
          <section className="w-full max-w-[1100px] mx-auto p-4 sm:p-6 md:px-8 md-py-8">
            <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
            <Faqcomp faqs={initialCourseData.faqs} />
          </section>
        </div>

        {/* Related Courses */}
        <div className="bg-white">
          <section className="w-full max-w-[1100px] mx-auto p-4 sm:p-6 md:px-8 md-py-8">
            <h2 className="text-2xl font-bold mb-4">Related Courses</h2>
            <PwcCourses />
          </section>
        </div>
      </div>
    </Suspense>
  );
}