import { Metadata } from "next";
import React from "react";
import Image from "next/image";
import { companiesCopyText } from "../constants";

export const metadata: Metadata = {
  title: "Projects",
};

const Page = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-4xl font-bold mb-8">Professional Experience</h1>
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
        {companiesCopyText.map((company, index) => (
          <div
            key={index}
            id={company.name.toLowerCase()}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 border rounded-lg shadow-md bg-white scroll-mt-24"
          >
            <div className="flex items-center justify-center p-8">
              <Image
                src={company.logo}
                alt={`${company.name} logo`}
                width={300}
                height={150}
                className="object-contain"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-2xl font-semibold mb-2">{company.name}</h2>
              <h3 className="text-xl text-gray-600 mb-2">{company.role}</h3>
              <p className="text-gray-500 mb-4">{company.period}</p>
              <div className="space-y-4">
                {company.description.map((desc, i) => (
                  <p key={i} className="text-gray-700">
                    {desc}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
