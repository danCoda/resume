import type { Metadata } from "next";
import { Merriweather } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/navbar";
import { metadataCopyText } from "@/app/constants";
import { Analytics } from "@vercel/analytics/react";

const merriweather = Merriweather({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  ...metadataCopyText.rootLayout,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const mainContentBackgroundClasses = `bg-gradient-to-b from-white via-80% via-white to-transparent to-95%`;

  return (
    <html lang="en">
      <body
        className={`${merriweather.className} antialiased bg-gradient-to-b from-slate-300 to-sky-900 h-full`}
      >
        <Analytics />
        <Navbar />
        <div
          className={`max-w-5xl mx-auto min-h-screen ${mainContentBackgroundClasses}`}
        >
          <main className="pt-20 px-4 sm:px-6 lg:px-8">{children}</main>
        </div>
      </body>
    </html>
  );
}
