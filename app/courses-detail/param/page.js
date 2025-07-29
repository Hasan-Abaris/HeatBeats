import AccordionSection from "@/components/view/courses-detail/AccordionSection";
import CourseBenefits from "@/components/view/courses-detail/CourseBenefits";
import CourseIntro from "@/components/view/courses-detail/CourseIntro";
import CourseSchedule from "@/components/view/courses-detail/CourseSchedule";
import Faqcomp from "@/components/view/courses-detail/Faqcomp";
import PwcCourses from "@/components/view/courses-detail/PwcCourses";
import WhyChooseEdureka from "@/components/view/courses-detail/WhyChooseEdureka";


const courseSections = [
  {
    title: "Power BI Training Course Details",
    image: "/images/course-details.png",
    faqs: [
      {
        question: "What is the Power BI course by PwC Academy?",
        answer:
          "SLA Microsoft Power BI certification course introduces you to Power BI Desktop and how it is used with Power Pivot for Data Modelling. This course enables you to learn about Data Analysis Expressions (DAX) and Data Visualization with Power BI Desktop, Power View, and Power Map. This Power BI certification course will also introduce you to Power BI Q&A, which enables you to discover, explore, and visualize enterprise data using Natural Language. Enroll now to learn the best Power BI course online. This program is a unique offering from Edureka, which combines two business intelligence programs, resulting in dual certificates. The course includes the Microsoft Power BI for Beginners program, which prepares individuals for the PL-300 examination with practical hands-on sessions. The Microsoft Power BI Plus, Certified by the PwC Program, is an advanced program designed to enhance learners' career prospects by allowing them to work on simulated real-world scenarios."
      },
      {
        question: "About PwC Academy",
        answer: "PwC Academy provides a unique learning environment that prepares individuals for certification and career success through hands-on experience and mentorship."
      },
      {
        question: "Why learn Power BI?",
        answer: "Power BI is one of the most widely used business intelligence tools, enabling professionals to turn raw data into powerful insights through visualization and reporting."
      },
      {
        question: "What are the prerequisites for the Edureka Power BI courses?",
        answer: "There are no strict prerequisites, but a basic understanding of Excel and data analysis is helpful."
      },
      {
        question: "Who should go for this Microsoft Power BI training?",
        answer: "Business analysts, data professionals, and anyone looking to pursue a career in business intelligence or data visualization."
      }
    ]
  },
  {
    title: "Power BI Certification for PL 300 Exam",
    image: "/images/certification.png",
    faqs: [
      {
        question: "Who provides the Power BI certification, and how long is it valid?",
        answer: "To unlock the program completion certificate of the Microsoft Power BI certification course, you must ensure the following: Completely participate in this Microsoft Power BI Course. You must complete all modules along with the graded assessments."
      },
      {
        question: "What do I need to do to unlock my Edureka Power BI certificate?",
        answer: "You must complete all the required training modules and pass the final assessment to receive your certificate."
      },
      {
        question: "What are the BI skills measured in the Microsoft Power BI certification exam?",
        answer: "Skills such as data preparation, modeling, visualization, and analysis using Power BI are covered."
      },
      {
        question: "How much does the Microsoft Power BI certification cost for Exam PL-300?",
        answer: "The cost can vary by location but typically ranges from $165 to $250 USD."
      },
      {
        question: "What is the validity of Microsoft’s PL-300 Analyzing Data Power BI certification?",
        answer: "The certification is valid for one year and must be renewed annually."
      }
    ]
  },
  {
    title: "Power BI Course FAQs",
    image: "/images/faqs.png",
    faqs: [
      {
        question: "What is Power BI and its uses?",
        answer: "Power BI is a BI tool for analytics. This tool allows users to aggregate and share data with reports, visualizations, and other analytics tools. It helps you create reports and charts for business insights."
      },
      {
        question: "Is Power BI Easy to Learn?",
        answer: "Yes, Power BI has a user-friendly interface and is considered accessible even for beginners with no technical background."
      },
      {
        question: "Is the course material accessible to the students even after the Power BI course is over?",
        answer: "Yes, students have lifetime access to the course materials and recorded sessions."
      },
      {
        question: "Is Power Query covered in the Power BI Certification Course?",
        answer: "Yes, Power Query is part of the course content and is thoroughly covered."
      },
      {
        question: "Who is a Power BI Developer?",
        answer: "A Power BI Developer builds dashboards and data models to help companies analyze their business performance."
      }
    ]
  }
];
export async function generateStaticParams() {
  const ids = [1, 2, 3, 4, 5];

  return ids.map((id) => ({
    param: id.toString(),
  }));
}
export default function CourseDetailPage({ params }) {
  return (
    <>
      <div className="bg-gray-100 ">
        <section
          className="p-6 md:px-16 md:py-16 w-[1100px] mx-auto">
          <CourseIntro />
        </section >
      </div>
      <div className="">
        <section
          className=" w-[1100px] mx-auto">
          <CourseSchedule />
        </section >
      </div>
      <div className=" ">
        <section
          className=" w-[1100px] mx-auto  md:px-8 md:py-8">
          <CourseBenefits />
        </section >
      </div>
      <div className="bg-gray-100 ">
        <section
          className=" w-[1100px] mx-auto  md:px-8 md:py-8">
          <WhyChooseEdureka />
        </section >
      </div>
      <div>
        <section
          className=" w-[1100px] mx-auto  md:px-8 md:py-8">
          <Faqcomp />
        </section >
      </div>
      <div>
        <section
          className=" w-[1100px] mx-auto  md:px-8 md:py-8">
          <div className="max-w-5xl mx-auto px-4 py-10">
      {courseSections.map((section, idx) => (
        <AccordionSection key={idx} section={section} />
      ))}
    </div>
        </section >
      </div>
      <div className="bg-gray-100 ">
        <section
          className=" w-[1100px] mx-auto  md:px-8 md:py-8">
          <PwcCourses />
        </section >
      </div>
    </>
  );
}
