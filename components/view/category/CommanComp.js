'use client"'

import BICourses from "./BICourses";
import BiVisualizationSection from "./BiVisualizationSection";
import CourseCard from "./CourseCard";

export const courses = [
    {
        id: 1,
        title: "Best Power BI Training Courses by PwC A...",
        image: "/images/power-bi.png",
        enrolled: "103k Enrolled Learners",
        format: "Weekend/Weekday",
        selfPaced: true,
        rating: 4.2,
        reviews: 33100,
        tag: "BEST SELLER",
        hover: {
            completionRate: "89%",
            nextBatch: "In 2 days - 17th May",
            learn: [
                "Data Preparation using Tableau Prep",
                "Data Connection with Tableau Desktop",
                "Basic Visual Analytics",
            ],
        },
    },
    {
        id: 2,
        title: "Tableau Training Course",
        image: "/images/power.png",
        enrolled: "60k Enrolled Learners",
        format: "Weekend/Weekday",
        selfPaced: true,
        rating: 4.1,
        reviews: 53050,
        hover: {
            completionRate: "89%",
            nextBatch: "In 2 days - 17th May",
            learn: [
                "Data Preparation using Tableau Prep",
                "Data Connection with Tableau Desktop",
                "Basic Visual Analytics",
            ],
        },
    },
    {
        id: 3,
        title: "Applied Business Intelligence for Decis...",
        image: "/images/tablwau.png",
        enrolled: "4k Enrolled Learners",
        format: "Weekend/Weekday",
        selfPaced: true,
        rating: 4.2,
        reviews: 700,
        hover: {
            completionRate: "89%",
            nextBatch: "In 2 days - 17th May",
            learn: [
                "Data Preparation using Tableau Prep",
                "Data Connection with Tableau Desktop",
                "Basic Visual Analytics",
            ],
        },
    },
    {
        id: 4,
        title: "Business Intelligence Internship Progra...",
        image: "/images/pwc.png",
        enrolled: "2k Enrolled Learners",
        format: "Weekend/Weekday",
        selfPaced: true,
        rating: 4.1,
        reviews: 5,
        hover: {
            completionRate: "89%",
            nextBatch: "In 2 days - 17th May",
            learn: [
                "Data Preparation using Tableau Prep",
                "Data Connection with Tableau Desktop",
                "Basic Visual Analytics",
            ],
        },
    },
];

function CommanComp({ title, description }) {


    return (
        <div>
            <div style={{ backgroundImage: "url('/images/BigData.jpg')", height: "200px", backgroundSize: "cover", backgroundPosition: "center" }}>
                <div className="w-[1000px] m-auto flex">
                    <h1 className=" text-3xl font-bold text-white pt-10 w-[400px]">{title}</h1>
                    {/* <p className=" text-white pt-2"> {description}</p> */}
                    <h6 className=" text-white pt-2 w-[400px] flex-1 text-lg">{description}</h6>
                </div>
            </div>
            <div className=" px-6 py-12 bg-gray-50 w-[1200px] mx-auto">
                <h1 className="text-2xl font-bold mb-6">BI and Visualization Bestseller Courses</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {courses.map(course => (
                        <CourseCard key={course.id} course={course} />
                    ))}
                </div>
            </div>
            <div className=" px-6 py-12 bg-gray-50 w-[1200px] mx-auto">
                <BICourses />
            </div>
            <div className=" px-6 py-12 bg-gray-50 w-[1200px] mx-auto">
                <BiVisualizationSection />
            </div>
        </div>
    )
}
export default CommanComp;