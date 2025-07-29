
import React from "react";
const data = {
  aboutData: [
    {
      id: 1,
      title: "Trainings",
      description:
        "Learn new-age skills on the go with our short-term online trainings",
      linkText: "Explore more",
    },
    {
      id: 2,
      title: "Placement Guarantee Courses",
      description:
        "Specialize in industry-oriented programs that get you ready for a career in your dream profile",
      linkText: "Explore more",
    },
    {
      id: 3,
      title: "Fresher Jobs",
      description:
        "Get premium fresher jobs with a minimum CTC of 2LPA on your fingertips",
      linkText: "Explore more",
    },
    {
      id: 4,
      title: "Internships",
      description:
        "Find 10,000+ internships from great companies to give a kickstart to your career",
      linkText: "Explore more",
    },
  ],
  milestone: [
    {
      id: 1,
      url: "/images/milestone_1-r575.svg",
      year: 2010,
      title: "How it all started",
      description:
        "Sarvesh, our founder & CEO, started Internshala as a blog with a mission to bring a culture of meaningful internships in India. And for the first two years, he hired only virtual interns.",
    },
    {
      id: 2,
      url: "/images/milestone_2-r575.svg",
      year: 2013,
      title: "The website launch",
      description:
        "After building a small team, we then launched our website with just one goal - to equip every student in India with their dream internship. And we did it all for free.",
    },
    {
      id: 3,
      url: "/images/milestone_3-r575.svg",
      year: 2015,
      title: "Internshala app launch",
      description:
        "The next big step could not have been anything other than launching our very own Android app, bringing Internshala in the ‘hands’ of the students.",
    },
    {
      id: 4,
      url: "/images/milestone_4-r575.svg",
      year: 2016,
      title: "The beginning of Internshala Trainings",
      description:
        "After many successful years as an internship platform, our motivation to upskill the students only increased, and that’s when we kickstarted a new journey with Internshala Trainings.",
    },
    {
      id: 5,
      url: "/images/milestone_5-r575.svg",
      year: 2020,
      title: "When we launched Fresher Jobs",
      description:
        "With Fresher jobs, we embarked on a journey filled with newer challenges, which allowed us to provide bigger & better opportunities to graduates with 0-2 years of experience.",
    },
    {
      id: 6,
      url: "/images/milestone_6-r575.svg",
      year: 2021,
      title: "The launch of Placement Guarantee courses",
      description:
        "With an insight that more than 90% of the graduates in India start their careers with a job that pays less than 3LPA, we came up with Placement Guarantee courses to help the students start their careers in their dream profiles.",
    },
  ],
};

const Aboutus = () => {
  return (
    <>
      <div className="px-6 md:px-16 py-20 bgAntiquewhite">
        <div className="space-y-5 text-center md:text-start">
          <p className="text-gray-500 font-medium  font-stretch">About Us</p>
          <h2 className="text-3xl font-narrow md:text-4xl font-bold font- uppercase textBlueDark  ">
            We Are Helping People to Reach Their employees Since 2006
          </h2>
          <p className="font-stretch text-gray-600 text-justify">
            Job-Portal, Inernships is a dot com business with the heart of dot
            org.
          </p>
          <p className="font-stretch text-gray-600">
            We are a technology company on a mission to equip students with
            relevant skills & practical exposure to help them get the best
            possible start to their careers. Imagine a world full of freedom and
            possibilities. A world where you can discover your passion and turn
            it into your career. A world where you graduate fully assured,
            confident, and prepared to stake a claim on your place in the world.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 mt-6 gap-4">
          {data.aboutData.map((item) => {
            return (
              <div
                key={item.id}
                className="bg-white  p-6 rounded shadow-sm text-center md:text-start"
              >
                <h4 className="text-2xl font-narrow font-bold  mb-5 textBlueDark  ">
                  {item.title}
                </h4>
                <p className="font-stretch textBlueDark">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="px-6 md:px-16 py-20 grayBackground">
        <div className="space-y-5">
          <h2 className="text-3xl font-narrow md:text-4xl font-bold text-center uppercase textBlueDark">
            Our milestones
          </h2>
        </div>
        <div className="w-full md:w-3/4 mx-auto mt-10">
          {data.milestone.map((item) => {
            return (
              <div
                key={item.id}
                className="text-center md:text-start grid grid-cols-1 md:grid-cols-3 mt-6 gap-4 md:border border-dashed"
              >
                <div className="flex justify-center">
                  <img
                    src={item.url}
                    width={100}
                    height={100}
                    alt="milestone_1-r575"
                  />
                </div>
                <div className="col-span-2 md:border-l border-dashed md:px-10 md:py-10">
                  <h4 className="text-2xl font-narrow font-bold  mb-5 textBlueDark  ">
                    {item.title}
                  </h4>
                  <p className="font-stretch textBlueDark">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Aboutus;
