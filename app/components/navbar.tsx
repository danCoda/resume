"use client";

import { useState } from "react";
import Link from "next/link";
import { NavbarMobileMenu } from "./navbar-mobile-menu";
import { Hamburger } from "./hamburger";
import { NavbarDesktopMenu } from "./navbar-desktop-menu";
import { navTitle } from "../constants";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="sticky top-0 z-50 w-full bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold">
              {navTitle}
            </Link>
          </div>
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
