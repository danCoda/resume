"use client";

import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="text-xl font-bold">
              My Portfolio
            </a>
          </div>
          <div className="hidden md:flex space-x-4">
            <a href="/" className="hover:text-gray-300">
              Home
            </a>
            <a href="/about" className="hover:text-gray-300">
              About
            </a>
            <a href="/resume" className="hover:text-gray-300">
              Resume
            </a>
            <a href="/projects" className="hover:text-gray-300">
              Projects
            </a>
            <a href="/contact" className="hover:text-gray-300">
              Contact
            </a>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <svg
                className={`h-6 w-6 transform transition-transform duration-300 ${
                  isMenuOpen ? "rotate-45" : "rotate-0"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="/" className="block hover:bg-gray-700 px-3 py-2 rounded">
            Home
          </a>
          <a href="/about" className="block hover:bg-gray-700 px-3 py-2 rounded">
            About
          </a>
          <a href="/resume" className="block hover:bg-gray-700 px-3 py-2 rounded">
            Resume
          </a>
          <a href="/projects" className="block hover:bg-gray-700 px-3 py-2 rounded">
            Projects
          </a>
          <a href="/contact" className="block hover:bg-gray-700 px-3 py-2 rounded">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}