"use client";

import { useState } from "react";
import Link from "next/link";
import { NavbarMobileMenu } from "@/app/components/navbar-mobile-menu";
import { Hamburger } from "@/app/components/hamburger";
import { NavbarDesktopMenu } from "@/app/components/navbar-desktop-menu";
import { navTitle } from "@/app/constants";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`fixed top-0 w-full bg-gray-800 text-white z-10`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold">
            {navTitle}
          </Link>
          <NavbarDesktopMenu className="hidden md:flex" />
          <Hamburger
            isMenuOpen={isMenuOpen}
            toggleMenu={toggleMenu}
            className="md:hidden"
          />
        </div>
        <NavbarMobileMenu isMenuOpen={isMenuOpen} className="md:hidden" />
      </div>
    </div>
  );
}
