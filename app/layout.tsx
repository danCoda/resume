import type { Metadata } from "next";
import { Merriweather } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";

const merriweather = Merriweather({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Welcome to my personal portfolio website",
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
        <main>{children}</main>
      </body>
    </html>
  );
}
