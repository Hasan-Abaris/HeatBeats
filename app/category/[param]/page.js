"use client"
import { useParams } from "next/navigation";
import { useState } from "react";
import { Menu } from "lucide-react";
import CommanComp from "@/components/view/category/CommanComp";

export default function Page({ params }) {
  const parem = useParams();
  const [selectedTab, setSelectedTab] = useState("BI and Visualization");
  const [showMore, setShowMore] = useState(false);

  const data = [
    "BI and Visualization",
    "Big Data",
    "Cloud Computing",
    "Cyber Security",
    "Data Science",
    "Data Analytics",
    "DevOps",
    "Programming & Frameworks",
    "Software Testing",
    "Others",
  ];

  const visibleTabs = data.slice(0, 7);
  const moreTabs = data.slice(5);

  const tabComponents = {
    "BI and Visualization": <CommanComp title='BI and Visualization Certification Courses' description='As a discipline, Business Intelligence is riding high on the current relevance of Big Data. Therefore, professionals with the ability to analyze data and make the results available to corporate decision makers can look forward to a rewarding career. Edureka offers certification courses in Tableau, Informatica, Power BI, MSBI and other popular BI and visualization tools to help you take advantage of career opportunities in Business Intelligence.
'/>,
    "Big Data": <CommanComp title='BIG DATA ANALYTICS CERTIFICATION COURSE' description='As a discipline, Business Intelligence is riding high on the current relevance of Big Data. Therefore, professionals with the ability to analyze data and make the results available to corporate decision makers can look forward to a rewarding career. Edureka offers certification courses in Tableau, Informatica, Power BI, MSBI and other popular BI and visualization tools to help you take advantage of career opportunities in Business Intelligence.
'/>,
    "Cloud Computing": <CommanComp title='Cloud Computing Certification Courses' description='As a discipline, Business Intelligence is riding high on the current relevance of Big Data. Therefore, professionals with the ability to analyze data and make the results available to corporate decision makers can look forward to a rewarding career. Edureka offers certification courses in Tableau, Informatica, Power BI, MSBI and other popular BI and visualization tools to help you take advantage of career opportunities in Business Intelligence.
'/>,
    "Cyber Security": <CommanComp title='Cyber Security Certification Courses' description='As a discipline, Business Intelligence is riding high on the current relevance of Big Data. Therefore, professionals with the ability to analyze data and make the results available to corporate decision makers can look forward to a rewarding career. Edureka offers certification courses in Tableau, Informatica, Power BI, MSBI and other popular BI and visualization tools to help you take advantage of career opportunities in Business Intelligence.
'/>,
    "Data Science": <CommanComp title='Data Science
' description='As a discipline, Business Intelligence is riding high on the current relevance of Big Data. Therefore, professionals with the ability to analyze data and make the results available to corporate decision makers can look forward to a rewarding career. Edureka offers certification courses in Tableau, Informatica, Power BI, MSBI and other popular BI and visualization tools to help you take advantage of career opportunities in Business Intelligence.
'/>,
    "Data Analytics": <CommanComp title='BIG DATA ANALYTICS CERTIFICATION COURSE' description='As a discipline, Business Intelligence is riding high on the current relevance of Big Data. Therefore, professionals with the ability to analyze data and make the results available to corporate decision makers can look forward to a rewarding career. Edureka offers certification courses in Tableau, Informatica, Power BI, MSBI and other popular BI and visualization tools to help you take advantage of career opportunities in Business Intelligence.
'/>,
    "DevOps": <CommanComp title='BIG DATA ANALYTICS CERTIFICATION COURSE' description='As a discipline, Business Intelligence is riding high on the current relevance of Big Data. Therefore, professionals with the ability to analyze data and make the results available to corporate decision makers can look forward to a rewarding career. Edureka offers certification courses in Tableau, Informatica, Power BI, MSBI and other popular BI and visualization tools to help you take advantage of career opportunities in Business Intelligence.
'/>,
    "Programming & Frameworks": <CommanComp title='BIG DATA ANALYTICS CERTIFICATION COURSE' description='As a discipline, Business Intelligence is riding high on the current relevance of Big Data. Therefore, professionals with the ability to analyze data and make the results available to corporate decision makers can look forward to a rewarding career. Edureka offers certification courses in Tableau, Informatica, Power BI, MSBI and other popular BI and visualization tools to help you take advantage of career opportunities in Business Intelligence.
'/>,
    "Software Testing": <CommanComp title='BIG DATA ANALYTICS CERTIFICATION COURSE' description='As a discipline, Business Intelligence is riding high on the current relevance of Big Data. Therefore, professionals with the ability to analyze data and make the results available to corporate decision makers can look forward to a rewarding career. Edureka offers certification courses in Tableau, Informatica, Power BI, MSBI and other popular BI and visualization tools to help you take advantage of career opportunities in Business Intelligence.
'/>,
    "Others": <CommanComp title='BIG DATA ANALYTICS CERTIFICATION COURSE' description='As a discipline, Business Intelligence is riding high on the current relevance of Big Data. Therefore, professionals with the ability to analyze data and make the results available to corporate decision makers can look forward to a rewarding career. Edureka offers certification courses in Tableau, Informatica, Power BI, MSBI and other popular BI and visualization tools to help you take advantage of career opportunities in Business Intelligence.
'/>,
  };

  return (
    <div>
      <div className="bg-gray-100">
        <section className="md:px-2 md:py-2 w-[1200px] mx-auto">
          <div className="text-center">
            <div className="inline-flex bg-white p-2 rounded-full relative">
              {visibleTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setSelectedTab(tab)}
                  className={`px-6 py-2 rounded-full font-medium ${selectedTab === tab
                    ? "bg-blue-600 text-white shadow"
                    : "text-gray-700 hover:bg-gray-200"
                    }`}
                >
                  {tab}
                </button>
              ))}

              <div className="relative">
                <button
                  onClick={() => setShowMore(!showMore)}
                  className="px-4 py-2 rounded-full text-gray-700 hover:bg-gray-200"
                >
                  <Menu size={20} />
                </button>

                {showMore && (
                  <div className="absolute top-full right-0 mt-2 w-48 bg-white border rounded shadow-md z-50">
                    {moreTabs.map((tab) => (
                      <button
                        key={tab}
                        onClick={() => {
                          setSelectedTab(tab);
                          setShowMore(false);
                        }}
                        className={`block w-full text-left px-4 py-2 hover:bg-gray-100 ${selectedTab === tab ? "bg-blue-100" : ""
                          }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>


        </section>
        <div className="mt-6">
          {tabComponents[selectedTab]}
        </div>
      </div>
    </div>

  );
}
