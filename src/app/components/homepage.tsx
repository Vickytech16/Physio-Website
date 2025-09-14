"use client";
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="relative w-full h-[90vh] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/background2.jpg')" }}
    >
      {/* Overlay (lighter so image is visible) */}
      <div className="absolute inset-0 bg-darkBlue/50"></div>

      {/* Content */}
      <div className="relative text-center text-white px-6 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          ELA&apos;S Physio Care
        </h1>
        <p className="text-lg md:text-2xl mb-6">
          Healing in every step — professional physiotherapy tailored to you.
        </p>
        <a
          href="#contact"
          className="bg-gold text-darkBlue px-6 py-3 font-semibold rounded-md hover:opacity-90 transition"
        >
          Book Appointment
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
