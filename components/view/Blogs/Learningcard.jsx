import React from 'react'
import { FaRobot, FaAws, FaDatabase, FaShieldAlt, FaCloud, FaBriefcase, FaCode, FaBullhorn, FaUserFriends, FaMobileAlt, FaClipboardList, FaSearch, FaVial, FaTruck, FaNetworkWired, FaProjectDiagram, FaChessKing, FaBuilding, FaTasks, FaCodeBranch, FaBitcoin, FaQuestionCircle, FaDesktop, FaWarehouse, FaChartPie, FaCogs } from 'react-icons/fa';
import { AiOutlineLineChart } from 'react-icons/ai';

const intrestedLearninData = [
  { "title": "Artificial Intelligence", "icon": <FaRobot /> },
  { "title": "AWS", "icon": <FaAws /> },
  { "title": "BI and Visualization", "icon": <AiOutlineLineChart /> },
  { "title": "Big Data", "icon": <FaDatabase /> },
  { "title": "Blockchain", "icon": <FaBitcoin /> },

  { "title": "Business Management", "icon": <FaBriefcase /> },
  { "title": "Cloud Computing", "icon": <FaCloud /> },
  { "title": "Cyber Security", "icon": <FaShieldAlt /> },
  { "title": "Data Science", "icon": <FaChartPie /> },
  { "title": "Data Warehousing and ETL", "icon": <FaWarehouse /> },

  { "title": "Databases", "icon": <FaDatabase /> },
  { "title": "DevOps", "icon": <FaCogs /> },
  { "title": "Digital Marketing", "icon": <FaBullhorn /> },
  { "title": "Enterprise", "icon": <FaBuilding /> },
  { "title": "Front End Web Development", "icon": <FaCode /> },

  { "title": "Human Resource Management", "icon": <FaUserFriends /> },
  { "title": "Interview Questions", "icon": <FaQuestionCircle /> },
  { "title": "Mobile Development", "icon": <FaMobileAlt /> },
  { "title": "Operating Systems", "icon": <FaDesktop /> },
  { "title": "Operations Management", "icon": <FaProjectDiagram /> },

  { "title": "Product Management", "icon": <FaTasks /> },
  { "title": "Programming & Frameworks", "icon": <FaCodeBranch /> },

  { "title": "Robotic Process Automation", "icon": <FaRobot /> },
  { "title": "seo interview question", "icon": <FaSearch /> },

  { "title": "Software Testing", "icon": <FaVial /> },
  { "title": "Strategy and Leadership", "icon": <FaChessKing /> },
  { "title": "Supply Chain Management", "icon": <FaTruck /> },
  { "title": "Systems & Architecture", "icon": <FaNetworkWired /> },
  { "title": "Management and Methodologies", "icon": <FaClipboardList /> },
]
function LearningCard() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-5   gap-8 mb-10">
                {intrestedLearninData.slice(0,10).map((item, i) => {
                  return <div className="relative group transition-all duration-700 ease-in-out hover:-translate-y-2 " key={i}>
                    <div className="w-full lg:py-8 md:py-6 bg-white border border-gray-200 shadow-xl shadow-gray-300  items-center flex justify-center p-2 rounded-sm">
                      <div className="icon text-center">
                        <span className="inline-block text-center text-bluelight text-sm">{item?.icon}</span>
                        <h4 className="text-center mt-2 text-gray-700 mb-3 text-sm">{item?.title}</h4>
                      </div>
                    </div>
                  </div>
                })}
              </div>
  )
}

export default LearningCard