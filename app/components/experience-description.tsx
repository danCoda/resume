import Link from "next/link";
import { Company } from "@/app/types";

export const ExperienceDescription = ({ company }: { company: Company }) => {
  return (
    <>
      <h2 className="text-2xl font-semibold">
        <Link {...company.cta}>
          <span className="duration-300 hover:bg-blue-200 hover:rounded-xl inline-block px-2">
            {company.name}🔗
          </span>
        </Link>
      </h2>
      <h3 className="text-xl text-gray-600">{company.role}</h3>
      <p className="text-gray-500 mb-4">{company.period}</p>
      <ul className="list-disc space-y-2">
        {company.description.map((desc, i) => (
          <li key={i} className="text-gray-700">
            {desc}
          </li>
        ))}
      </ul>
    </>
  );
};
