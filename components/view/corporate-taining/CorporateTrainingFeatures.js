import { FaHeadset, FaFlask, FaCertificate, FaProjectDiagram, FaChartBar, FaPencilRuler } from "react-icons/fa";

const features = [
  {
    icon: <FaPencilRuler className="text-blue-500 text-3xl" />,
    title: "Course Customization",
    description: "Flexible Engagement Model Tailor-Made for Your Needs",
  },
  {
    icon: <FaHeadset className="text-blue-500 text-3xl" />,
    title: "24x7 Support",
    description: "Round-the-Clock Support by In-House Subject-Matter Experts",
  },
  {
    icon: <FaChartBar className="text-blue-500 text-3xl" />,
    title: "Learning Analytics",
    description: "Customized Dashboard to Visualize Training Progress",
  },
  {
    icon: <FaCertificate className="text-blue-500 text-3xl" />,
    title: "Certifications",
    description: "Industry Recognized Certification to Add Value to Your Workforce",
  },
  {
    icon: <FaFlask className="text-blue-500 text-3xl" />,
    title: "Cloud Labs",
    description: "Hands-On Experience on Edureka Cloud Lab, Pre-Configured to Get Started Immediately",
  },
  {
    icon: <FaProjectDiagram className="text-blue-500 text-3xl" />,
    title: "Projects",
    description: "Right Mix of Theoretical and Practical Training for Real World Industry Problems",
  },
];

export default function CorporateTrainingFeatures() {
  return (
    <div className="py-16 bg-white text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-12">SLA Consultants Training Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {features.map((feature, idx) => (
          <div key={idx} className="bg-white shadow-md rounded-xl p-6 text-left flex items-start gap-4">
            <div>{feature.icon}</div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
