import Image from "next/image";
import Link from "next/link";

// export default function Home() {
//   return (
//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//       <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
//         Hi there
//       </main>
//       <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );
// }

const Page = () => {
  return (
    <main className="flex flex-col space-y-10 max-w-3xl mx-auto px-4 py-8">
      <header>
        <h1 className="text-4xl font-bold">Hi there! I'm Dan.</h1>
      </header>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold sr-only">About Me</h2>
        <p>I&apos;m a web developer in Sydney.</p>
        <p>I can make your websites and web applications.</p>
        <p>Why yes, I am indeed an Australian citizen.</p>
        <p>I'm more experienced on the front-end, and can do full-stack as well.</p>
      </section>

      <section className="flex items-center">
        <h2 className="sr-only">Experience</h2>
        <Link
          href="/experience"
          className="text-blue-600 hover:text-blue-800 underline text-lg font-medium"
        >
          Check out my experiences
        </Link>
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

/* const Page = () => {
  return (
    <main className="flex flex-col space-y-12 max-w-3xl mx-auto px-6 py-12">
      <header className="text-center sm:text-left">
        <h1 className="text-5xl font-bold text-gray-800">Hi there! I'm Dan.</h1>
        <p className="mt-4 text-xl text-gray-600">Web Developer based in Sydney</p>
      </header>

      <section className="space-y-4 bg-gray-50 p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold text-gray-800">About Me</h2>
        <p className="text-gray-700">I specialize in creating responsive websites and web applications that provide excellent user experiences.</p>
        <p className="text-gray-700">With strong front-end expertise and full-stack capabilities, I build solutions that look great and perform well.</p>
        <p className="text-gray-700">As an Australian citizen, I'm available for local projects and on-site collaboration in Sydney.</p>
      </section>

      <section className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-6 bg-gray-50 p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold text-gray-800">My Work</h2>
        <div className="flex gap-4">
          <Link
            href="/experience"
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium group"
          >
            <span>View experience</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
          <Link
            href="/projects"
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium group"
          >
            <span>Browse projects</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </section>

      <section className="bg-blue-50 p-8 rounded-lg text-center shadow-sm border border-blue-100">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Ready to work together?
        </h2>
        <p className="text-gray-700 mb-6 max-w-lg mx-auto">
          I'm currently available for new projects and would love to discuss how I can help bring your ideas to life.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition-colors text-lg shadow-sm"
        >
          Let's Connect
        </Link>
      </section>
    </main>
  );
}; */