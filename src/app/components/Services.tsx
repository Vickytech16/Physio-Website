// src/components/Services.tsx
"use client";
import React from "react";
import { Activity, HeartPulse, Dumbbell, Accessibility } from "lucide-react";

const services = [
  {
    title: "Pain Management",
    description: "Effective physiotherapy sessions designed to reduce chronic and acute pain naturally.",
    icon: <HeartPulse size={32} />,
  },
  {
    title: "Post-Surgery Rehab",
    description: "Customized rehabilitation programs to help you regain mobility after surgery.",
    icon: <Accessibility size={32} />,
  },
  {
    title: "Sports Injury Care",
    description: "Specialized treatments and recovery plans for athletes and active individuals.",
    icon: <Dumbbell size={32} />,
  },
  {
    title: "Posture Correction",
    description: "Personalized posture and spine alignment sessions for long-term health.",
    icon: <Activity size={32} />,
  },
];

const Services: React.FC = () => {
  return (
    <section
      id="services"
      className="relative w-full py-20 bg-gradient-to-br from-[#0f172a] to-[#1e3a8a] text-white"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gold">
          Our Services
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl bg-white/10 backdrop-blur-lg shadow-lg 
                         border border-white/20 hover:scale-105 hover:shadow-2xl transition transform duration-300"
            >
              <div className="flex justify-center items-center w-16 h-16 mx-auto rounded-full 
                              bg-gradient-to-r from-[#2563eb] to-[#38bdf8] text-white shadow-md mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">{service.title}</h3>
              <p className="text-gray-200 text-center leading-relaxed">{service.description}</p>

              {/* Subtle glowing effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-400/20 
                              opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
