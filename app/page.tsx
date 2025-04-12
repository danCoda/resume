import Image from "next/image";
import Link from "next/link";
import { companiesCopyText } from "./constants";

const Page = () => {
  return (
    <main className="flex flex-col space-y-10 max-w-3xl mx-auto px-4 py-8">
      <header>
        <h1 className="text-4xl font-bold">Hi there! I&apos;m Dan.</h1>
      </header>
      
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold sr-only">About Me</h2>
        <p>I&apos;m a web developer in Sydney.</p>
        <p>I can make your websites and web applications.</p>
        <p>Why yes, I am indeed an Australian citizen.</p>
        <p>
          I&apos;m more experienced on the front-end, and can do full-stack as well.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Companies I&apos;ve Worked With</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {companiesCopyText.map((company, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center gap-4 p-4 border rounded-lg shadow-sm">
              <div className="w-40 h-24 relative">
                <Image
                  src={company.logo}
                  alt={`${company.name} logo`}
                  fill
                  className="object-contain rounded-xl"
                />
              </div>
              <div className="text-center md:text-left">
                <Link href={`/projects#${company.name.toLowerCase()}`} className="hover:text-blue-600">
                  <h3 className="font-semibold text-lg">{company.name}</h3>
                </Link>
                <p className="text-gray-600 text-sm">{company.info}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t pt-6">
        <h2 className="text-2xl font-semibold mb-3">
          Looking for a developer?
        </h2>
        <Link
          href="/contact"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors"
        >
          Contact me
        </Link>
      </section>
    </main>
  );
};

export default Page;
