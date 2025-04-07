import type { Metadata } from "next";
import { Merriweather } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";

const merriweather = Merriweather({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | DS Resume",
    default: "DS Resume",
  },
  description: "Full-stack web developer in Sydney",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${merriweather.className} antialiased`}>
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <main className="mt-16 px-4 sm:px-6 lg:px-8">{children}</main>
        </div>
      </body>
    </html>
  );
}
