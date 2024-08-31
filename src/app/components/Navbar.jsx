'use client';

import Image from 'next/image';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi'; // Importing icons for the menu button

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Function to toggle the drawer menu
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-black/30 backdrop-blur  z-50">
      <nav className="flex items-center justify-between px-6 py-4 md:px-20">
        {/* Mobile Menu Button */}
        <button
          className="text-2xl  md:hidden" // Mobile menu button visible on smaller screens
          onClick={toggleDrawer}
          aria-label="Toggle Menu"
        >
          {isDrawerOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Left Side Menu */}
        <ul className="hidden md:flex gap-8 ">
          <li>
            <a href="#" className="hover:text-orange-400">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-orange-400">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-orange-400">
              Services
            </a>
          </li>
        </ul>

        {/* Logo in the center */}
        <div className="flex-grow flex justify-center  pr-7 ">
          <a href="#" className="text-xl font-bold ">
           <Image src="/images/logo.svg" alt='logo' width={100} height={100}/>
          </a>
        </div>

        {/* Right Side Menu */}
        <ul className="hidden md:flex gap-8 ">
          <li>
            <a href="#" className="hover:text-orange-400">
              Gallery
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-orange-400">
              FAQ
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-orange-400">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Drawer Menu */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 text-black z-40 md:hidden" // Background overlay for drawer menu
          onClick={toggleDrawer}
        >
          <div
            className="absolute top-0 left-0 w-3/4 max-w-xs bg-white h-full p-6 shadow-lg" // Drawer styling
            onClick={(e) => e.stopPropagation()} // Prevent closing drawer on inside click
          >
            <ul className="space-y-6 ">
              <li>
                <a href="#" className="block py-2 text-lg" onClick={toggleDrawer}>
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 text-lg" onClick={toggleDrawer}>
                  About
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 text-lg" onClick={toggleDrawer}>
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 text-lg" onClick={toggleDrawer}>
                  Gallery
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 text-lg" onClick={toggleDrawer}>
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 text-lg" onClick={toggleDrawer}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
