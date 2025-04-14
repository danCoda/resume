import { Metadata } from "next";
import React from "react";
import Image from "next/image";
import { companiesCopyText, experienceCopyText } from "../constants";
import Link from "next/link";
import { ExperienceDescription } from "../components/experience-description";

export const metadata: Metadata = {
  title: "Projects",
};

const Page = () => {
  return (
    <div className="max-w-7xl mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8">{experienceCopyText.title}</h1>
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
        {companiesCopyText.map((company, index) => (
          <div
            key={index}
            id={company.name.toLowerCase()}
            className="hover:scale-102 hover:shadow-lg/20 transition grid grid-cols-1 md:grid-cols-3 md:gap-8 p-6 border rounded-lg shadow-md bg-white scroll-mt-24"
          >
            <div className={`flex items-center p-4 justify-center`}>
              <Link {...company.cta} tabIndex={-1}>
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
