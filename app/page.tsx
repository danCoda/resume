import Image from "next/image";
import Link from "next/link";
import { companiesCopyText, homepageCopyText } from "./constants";
import { DanDescription } from "./components/dan-description";

const CompaniesList = () => {
  return (
    <>
      <h2 className="text-2xl font-semibold">
        {homepageCopyText.experienceTitle}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {companiesCopyText.map((company, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center gap-4 p-4 border rounded-lg shadow-sm"
          >
            <div className="w-40 h-24 relative">
              <Image
                src={company.logo}
                alt={`${company.name} logo`}
                fill
                className="object-contain rounded-xl"
              />
            </div>
            <div className="text-center md:text-left">
              <Link
                href={`/experience#${company.name.toLowerCase()}`}
                className="hover:text-blue-600"
              >
                <h3 className="font-semibold text-lg text-center">
                  {company.name}
                </h3>
              </Link>
              <p className="text-gray-600 text-sm text-center">
                {company.info}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

const Page = () => {
  return (
    <main className="flex flex-col space-y-10 max-w-3xl mx-auto py-8">
      <header>
        <h1 className="text-4xl font-bold">{homepageCopyText.title}</h1>
      </header>
      {homepageCopyText.subtitle && (
        <h2 className="text-2xl">{homepageCopyText.subtitle}</h2>
      )}
      <DanDescription />
      <section className="space-y-6">
        <CompaniesList />
      </section>

      <section className="border-t pt-6">
        <h2 className="text-2xl font-semibold mb-3">
          {homepageCopyText.callToDeveloper.title}
        </h2>
        <Link
          href={homepageCopyText.callToDeveloper.cta.link}
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors"
        >
          {homepageCopyText.callToDeveloper.cta.title}
        </Link>
      </section>
    </main>
  );
};

export default Page;
