import Link from "next/link";
import { Company } from "../types";

export const ExperienceDescription = ({ company }: { company: Company }) => {
  return (
    <>
      <h2 className="text-2xl font-semibold">
        <Link href={company?.link}>
          <span className="duration-300 hover:bg-red-200 hover:rounded-xl inline-block px-2">
            {company.name}
          </span>
        </Link>
      </h2>
      <h3 className="text-xl text-gray-600">{company.role}</h3>
      <p className="text-gray-500 mb-4">{company.period}</p>
      <div className="space-y-2">
        {company.description.map((desc, i) => (
          <p key={i} className="text-gray-700">
            {desc}
          </p>
        ))}
      </div>
    </>
  );
};
