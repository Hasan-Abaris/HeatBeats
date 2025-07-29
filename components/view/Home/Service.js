import { whatWeDoMenu } from "@/components/common/Header/navigationData";
import Card from "@/components/section/Card";
import React from "react";

const Service = () => {
  return (
    <div className="p-5 py-10 md:p-16 bg-white text-center leading-tight space-y-5">
      <h2 className="text-4xl font-bold font- uppercase text-bluedark font-narrow  ">
        Our Service
      </h2>
      <h2 className="text-lg md:text-2xl font-stretch font-bold font- uppercase text-bluedark  ">
        A Leading Solution Provider For Web And IT Services
      </h2>
      <div className="grid md:grid-cols-3 gap-10 pt-10">
        {whatWeDoMenu?.map((item, index) => (
          <Card key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Service;
