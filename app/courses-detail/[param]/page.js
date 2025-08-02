// app/courses-detail/[param]/page.js
import AccordionSection from "@/components/view/courses-detail/AccordionSection";
import CourseBenefits from "@/components/view/courses-detail/CourseBenefits";
import CourseIntro from "@/components/view/courses-detail/CourseIntro";
import CourseSchedule from "@/components/view/courses-detail/CourseSchedule";
import Faqcomp from "@/components/view/courses-detail/Faqcomp";
import PwcCourses from "@/components/view/courses-detail/PwcCourses";
import WhyChooseEdureka from "@/components/view/courses-detail/WhyChooseEdureka";
import { getCourseDetails } from "@/app/comman/FrontApi";

const courseSections = [
  {
    title: "Power BI Training Course Details",
    image: "/images/course-details.png",
    faqs: [
      {
        question: "What is the Power BI course by PwC Academy?",
        answer:
          "SLA Microsoft Power BI certification course introduces you to Power BI Desktop and how it is used with Power Pivot for Data Modelling. This course enables you to learn about Data Analysis Expressions (DAX) and Data Visualization with Power BI Desktop, Power View, and Power Map. This Power BI certification course will also introduce you to Power BI Q&A, which enables you to discover, explore, and visualize enterprise data using Natural Language. Enroll now to learn the best Power BI course online. This program is a unique offering from Edureka, which combines two business intelligence programs, resulting in dual certificates. The course includes the Microsoft Power BI for Beginners program, which prepares individuals for the PL-300 examination with practical hands-on sessions. The Microsoft Power BI Plus, Certified by the PwC Program, is an advanced program designed to enhance learners' career prospects by allowing them to work on simulated real-world scenarios.",
      },
      // ... (rest of faqs remain the same)
    ],
  },
  // ... (other sections remain the same)
];

export async function generateStaticParams() {
  const ids = [1, 2, 3, 4, 5,6,7,8,9,10];
  console.log('Generating static params for courses-detail:', ids);
  return ids.map((id) => ({
    param: id.toString(),
  }));
}

export default async function CourseDetailPage({ params }) {
  const { param } = await params; // Await params to access param correctly

  console.log('CourseDetailPage - Received param:', param);

  let initialCourseData = {};
  try {
    const paramToIdMap = { '1': '11', '2': '20', '3': '19', '4': '18', '5': '17' }; // Match with idToParamMap
    const id = paramToIdMap[param] || param;
    const res = await getCourseDetails(id);
    console.log('getCourseDetails Response in courses-detail:', JSON.stringify(res.data, null, 2));
    const courseData = res?.data?.data || {};
    initialCourseData = {
      id: courseData.id,
      name: courseData.name || 'Power BI',
      batches: courseData.batches || [
        { date: 'May 05th', label: 'MON - FRI (21 Days)', time: '08:30 PM to 10:30 PM (IST)', status: 'SOLD OUT', disabled: true },
        { date: 'May 17th', label: 'SAT & SUN (7 Weeks)', time: '08:30 PM to 11:30 PM (IST)', status: 'Filling Fast', disabled: false },
        { date: 'May 31st', label: 'SAT & SUN (7 Weeks)', time: '07:00 AM to 10:00 AM (IST)', status: '', disabled: false },
        { date: 'Jun 09th', label: 'MON - FRI (21 Days)', time: '07:00 AM to 09:00 AM (IST)', status: '', disabled: false },
      ],
      price: {
        original: courseData.originalPrice || '17999',
        discounted: courseData.discountedPrice || '16199',
        discount: courseData.discount || '10% OFF, Save ₹1800',
        emi: courseData.emi || '5400',
        amount: courseData.amount || '1619900',
      },
    };
  } catch (error) {
    console.error("Failed to fetch course details in courses-detail:", error);
  }

  return (
    <>
      <div className="bg-gray-100">
        <section className="p-6 md:px-16 md:py-16 w-[1100px] mx-auto">
          <CourseIntro />
        </section>
      </div>
      <div className="">
        <section className="w-[1100px] mx-auto">
          <CourseSchedule initialCourseData={initialCourseData} />
        </section>
      </div>
      <div className="">
        <section className="w-[1100px] mx-auto md:px-8 md:py-8">
          <CourseBenefits />
        </section>
      </div>
      <div className="bg-gray-100">
        <section className="w-[1100px] mx-auto md:px-8 md:py-8">
          <WhyChooseEdureka />
        </section>
      </div>
      <div>
        <section className="w-[1100px] mx-auto md:px-8 md:py-8">
          <Faqcomp />
        </section>
      </div>
      <div>
        <section className="w-[1100px] mx-auto md:px-8 md:py-8">
          <div className="max-w-5xl mx-auto px-4 py-10">
            {courseSections.map((section, idx) => (
              <AccordionSection key={idx} section={section} />
            ))}
          </div>
        </section>
      </div>
      <div className="bg-gray-100">
        <section className="w-[1100px] mx-auto md:px-8 md:py-8">
          <PwcCourses />
        </section>
      </div>
    </>
  );
}