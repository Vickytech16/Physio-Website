// src/components/Footer.tsx
"use client";
import React from "react";
import { Linkedin } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#063970] text-white py-6">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Left - Copyright */}
        <p className="text-sm text-gray-300">
          © {new Date().getFullYear()} ELA&apos;S Physio Care. All rights reserved.
        </p>

        {/* Right - Developer Credit */}
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <span className="text-sm text-gray-300">Developed by Vignesh</span>
          <a
            href="https://www.linkedin.com/in/vignesh-muruga-m-92762b229"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white/10 rounded-full hover:bg-gold/20 transition"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
