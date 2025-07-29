
import React from "react";

const Companies = () => {
  return (
    <section className="p-6 md:px-16 md:py-16">
      <div className="text-center">
        <h2 className="textBlueDark font-bold text-4xl mb-4">
          Top companies trust us
        </h2>
      </div>
      <div className="overflow-hidden mt-10">
        <marquee behavior="smooth" direction="left">
          <img
            src={"/images/top_companies.png"}
            width={5200}
            height={250}
            alt="top_companies"
            className="object-none"
          />
        </marquee>
      </div>
    </section>
  );
};

export default Companies;
