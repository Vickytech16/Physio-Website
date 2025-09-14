"use client";
import React, { useState } from "react";
import Image from "next/image";

const tabs = ["Home", "About Us", "Services", "Contact"];

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <header className="w-full relative z-50">
      {/* Navbar */}
      <div className="w-full bg-gradient-to-r from-[#154c79] to-[#063970] p-4 md:p-6 flex items-center justify-between relative z-50">
        {/* Logo + Text */}
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 relative">
            <Image src="/logo.jpeg" alt="Logo" fill className="object-contain" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-2xl md:text-3xl font-bold text-gold">ELA'S</h1>
            <span className="text-lg md:text-xl font-semibold text-gold">Physio Care</span>
            <span className="text-sm md:text-base text-gold">Healing in Every Step</span>
          </div>
        </div>

        {/* Desktop Tabs */}
        <nav className="hidden md:flex space-x-12">
          {tabs.map((tab) => (
            <a
              key={tab}
              href={`#${tab.replace(/\s+/g, "").toLowerCase()}`}
              className="text-white font-semibold text-lg relative group px-2 py-1"
            >
              {tab}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gold transition-all group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden relative">
          <button
            onClick={toggleMenu}
            className="flex flex-col justify-center items-center space-y-1.5 p-2 rounded-md hover:bg-white/20 transition z-50"
          >
            <span className="block w-6 h-0.5 bg-gold"></span>
            <span className="block w-6 h-0.5 bg-gold"></span>
            <span className="block w-6 h-0.5 bg-gold"></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#2b5a9e] shadow-md z-40">
          <div className="max-w-7xl mx-auto py-4 flex flex-col items-center md:hidden space-y-4">
            {tabs.map((tab) => (
              <a
                key={tab}
                href={`#${tab.replace(/\s+/g, "").toLowerCase()}`}
                className="text-white font-semibold text-lg hover:text-gold transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {tab}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
