import React from "react";
const data = [
  {
    id: 34,
    metric: "Real Time Doubt Resolution",
    value: "with Live Instructors",
  },
  {
    id: 35,
    metric: "Unlimited Access",
    value: "to Online Learning Repository",
  },
  {
    id: 36,
    metric: "Learning Assistants",
    value: "to Guide When You Are Stuck",
  },
  {
    id: 37,
    metric: "Track Your",
    value: "Career Growth+",
  },
];

const Overall = () => {
  return (
    <section className="p-6 md:px-16 md:py-16">
      <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {data.map((item, i) => {
          return (
            <div key={i} className="text-center outline-3 outline-offset-2 outline-double py-5">
              <span className="text-5xl textBlueDark font-light mb-5 inline-block">0{i+1}</span>
              <h5 className="text-xl md:text-2xl font-semibold textBlueDark mb-4">
                {item.metric}
              </h5>
              <p className="text-sm px-2 py-1 rounded font-medium bgOrange text-white inline">
                {item.value}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Overall;
