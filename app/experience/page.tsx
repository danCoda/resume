import { Metadata } from "next";
import React from "react";
import Image from "next/image";
import { companiesCopyText } from "../constants";
import Link from "next/link";
import { ExperienceDescription } from "../components/experience-description";

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
            className="grid grid-cols-1 md:grid-cols-3 gap-8 p-6 border rounded-lg shadow-md bg-white scroll-mt-24"
          >
            <div className={`flex items-center p-4 justify-center`}>
              <Link href={company.link}>
                <Image
                  src={company.logo}
                  alt={`${company.name} logo`}
                  width={200}
                  height={100}
                  className="rounded-lg transition-all duration-300 
                hover:scale-105"
                />
              </Link>
            </div>
            <div className="col-span-2 space-y-3">
              <ExperienceDescription company={company} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
