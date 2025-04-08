import type { Metadata } from "next";
import { Merriweather } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import { metadataCopyText } from "./constants";

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
