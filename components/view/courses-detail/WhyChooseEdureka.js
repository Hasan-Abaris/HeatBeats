import {
    FaChalkboardTeacher,
    FaInfinity,
    FaHeadset,
    FaProjectDiagram,
    FaCertificate,
} from "react-icons/fa";
import { MdWorkspacePremium } from "react-icons/md";

export default function WhyChooseEdureka() {
    const features = [
        {
            title: "Live Interactive Learning",
            points: ["World-Class Instructors", "Expert-Led Mentoring", "Master Class by PwC Academy"],
            icon: <FaChalkboardTeacher className="text-3xl text-blue-600 mb-2" />,
        },
        {
            title: "Lifetime Access",
            points: ["Course Access Never Expires", "Free Updates", "Unlimited Content Access"],
            icon: <FaInfinity className="text-3xl text-green-600 mb-2" />,
        },
        {
            title: "24x7 Support",
            points: ["One-on-One Assistance", "Help Desk", "Real-time Doubts Resolution"],
            icon: <FaHeadset className="text-3xl text-purple-600 mb-2" />,
        },
        {
            title: "Hands-on Project-based Learning",
            points: ["Industry-Relevant Use Cases", "Demo Dataset & Files", "Assignments"],
            icon: <FaProjectDiagram className="text-3xl text-orange-600 mb-2" />,
        },
        {
            title: "Industry-Recognised Certification",
            points: ["Joint Certification", "Performance Certificate", "Completion Certificate"],
            icon: <FaCertificate className="text-3xl text-yellow-500 mb-2" />,
        },
        {
            title: "Career-Focused Curriculum",
            points: ["Job Ready Skills", "Real Industry Projects", "Interview Preparation"],
            icon: <MdWorkspacePremium className="text-3xl text-pink-500 mb-2" />,
        },
    ];

    return (
        <div className="bg-white p-6 rounded-lg shadow-md my-6">
            <h2 className="text-xl font-bold mb-4 text-center">Why Microsoft Power BI Certification Course from edureka</h2>
            <div className="grid md:grid-cols-3 gap-6">
                {features.map((item, index) => (
                    <div key={index} className="border p-4 rounded-lg hover:shadow-md text-center">
                        <div className="flex  items-center">
                            <div className="flex justify-center mr-4">{item.icon}</div>
                            <h3 className="font-semibold mb-2 mt-2">{item.title}</h3>
                        </div>
                        <hr className="mb-2" />
                        <ul className="list-disc list-inside text-sm text-gray-700 text-left">
                            {item.points.map((point, idx) => (
                                <li key={idx}>{point}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}
