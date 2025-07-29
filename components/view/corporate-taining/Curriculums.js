"use client";
import { useState } from "react";
const coursesData = [
    {
        title: "Artificial Intelligence",
        children: [
            "ChatGPT Training Course: Beginners to Advanced",
            "Artificial Intelligence Certification Course",
            "Human-Computer Interaction (HCI) for AI Systems Design",
            "Prompt Engineering with Generative AI",
            "Generative AI in Business: University of Cambridge Online",
            "Introduction to Generative AI",
        ],
    },
    {
        title: "BI and Visualization",
        children: [
            "Power BI Essentials",
            "Tableau for Beginners",
            "Advanced Data Visualization with D3.js",
        ],
    },
    {
        title: "Cloud Computing",
        children: [
            "AWS Cloud Practitioner",
            "Azure Fundamentals",
            "Google Cloud Platform Essentials",
        ],
    },
    {
        title: "DevOps",
        children: [
            "CI/CD Pipelines with Jenkins",
            "Docker and Kubernetes Essentials",
            "Terraform Infrastructure as Code",
        ],
    },
    {
        title: "Data Science",
        children: [
            "Data Science with Python",
            "Statistics for Data Science",
            "Pandas and NumPy Deep Dive",
        ],
    },
    {
        title: "Cyber Security",
        children: [
            "Cybersecurity Fundamentals",
            "Ethical Hacking Essentials",
            "Network Security Basics",
        ],
    },
    {
        title: "Programming & Frameworks",
        children: [
            "React for Beginners",
            "Advanced Next.js",
            "Node.js API Development",
        ],
    },
    {
        title: "Project Management and Methodologies",
        children: [
            "Agile Project Management",
            "Scrum Master Certification",
            "PMP Prep Course",
        ],
    },
    {
        title: "PG Programs",
        children: [
            "Postgraduate Program in AI",
            "PG Program in Cloud Computing",
            "PG in Data Analytics",
        ],
    },
    {
        title: "Software Testing",
        children: [
            "Manual Testing Fundamentals",
            "Selenium WebDriver Course",
            "Automation with Cypress",
        ],
    },
    {
        title: "Mobile Development",
        children: [
            "Flutter App Development",
            "Kotlin for Android",
            "Swift iOS Development",
        ],
    },
    {
        title: "Game Development",
        children: [
            "Unity Game Development",
            "Unreal Engine Basics",
            "Game Design Principles",
        ],
    },
    {
        title: "Machine Learning",
        children: [
            "Machine Learning A-Z",
            "Hands-On Scikit-Learn",
            "Deep Learning with TensorFlow",
        ],
    },
    {
        title: "Web Development",
        children: [
            "HTML, CSS, and JavaScript",
            "Full-Stack with MERN",
            "Web Accessibility Guidelines",
        ],
    },
    {
        title: "Database & SQL",
        children: [
            "SQL for Data Analysis",
            "MySQL and PostgreSQL Essentials",
            "NoSQL Databases Overview",
        ],
    },
];


export default function Curriculums() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState(null);

    return (
        <main className="bg-blue-300 p-8 text-white">
            <h1 className="text-2xl font-semibold mb-6 text-center">
                Curriculums, curated by industry leaders for industry professionals
            </h1>

            <div className="bg-blue-400 flex overflow-auto h-[500px]">
                <aside className="w-1/4 bg-blue-600 overflow-y-auto">
                    {coursesData.map((category, index) => (
                        <button
                            key={category.title}
                            onClick={() => setSelectedIndex(index)}
                            className={`w-full text-left px-4 py-3 hover:bg-blue-500 ${selectedIndex === index ? "bg-blue-500" : ""
                                }`}
                        >
                            {category.title}
                        </button>
                    ))}
                </aside>

                <section className="w-3/4 bg-blue-500 p-6 overflow-auto h-[500px]">
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                        {coursesData[selectedIndex].children.map((course, idx) => (
                            <div
                                key={idx}
                                onClick={() => {
                                    setSelectedCourse(course);
                                    setShowModal(true);
                                }}
                                className="cursor-pointer bg-white text-black rounded-lg p-4 shadow-md hover:bg-blue-100"
                            >
                                {course}
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ">
                    <div className="bg-white p-6 rounded-lg shadow-lg  w-[700px]">
                        <h2 className="text-xl font-semibold mb-4 text-black">{selectedCourse}</h2>
                        <p className="text-gray-700">
                            Details or description about <strong>{selectedCourse}</strong> go here.
                        </p>
                        
                        <form className="space-y-6">
                            <div>
                                <label className="block text-gray-700 font-medium mb-1">
                                    Name<span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="w-full border border-gray-300 rounded px-4 py-2"
                                />
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-gray-700 font-medium mb-1">
                                        Company Name<span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter Company Name"
                                        className="w-full border border-gray-300 rounded px-4 py-2"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-medium mb-1">
                                        Training Need<span className="text-red-500">*</span>
                                    </label>
                                    <select className="w-full border border-gray-300 rounded px-4 py-2 text-black">
                                        <option  className="text-black">Select an Option</option>
                                        <option className="text-black">Technical</option>
                                        <option className="text-black">Management</option>
                                    </select>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-gray-700 font-medium mb-1">
                                        Email ID<span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="Email ID"
                                        className="w-full border border-gray-300 rounded px-4 py-2"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-medium mb-1">
                                        Phone Number<span className="text-red-500">*</span>
                                    </label>
                                    <div className="flex border border-gray-300 rounded overflow-hidden">
                                        <span className="flex items-center px-3 bg-gray-100 border-r border-gray-300">
                                            <img
                                                src="https://flagcdn.com/in.svg"
                                                alt="India"
                                                className="w-5 h-5 mr-1"
                                            />
                                            +91
                                        </span>
                                        <input
                                            type="tel"
                                            placeholder="Phone Number"
                                            className="w-full px-4 py-2 outline-none"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label className="block text-gray-700 font-medium mb-1">Query</label>
                                <textarea
                                    placeholder="Enter your Query"
                                    rows="3"
                                    className="w-full border border-gray-300 rounded px-4 py-2"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="bg-orange-500 text-white font-semibold px-6 py-2 rounded hover:bg-orange-600 transition"
                            >
                                SUBMIT
                            </button>
                        </form>
                        <div className="mt-4 text-right">
                            <button
                                onClick={() => setShowModal(false)}
                                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}