// src/components/ContactUs.tsx
"use client";
import React from "react";
import { Phone, Mail, MapPin, Instagram, Youtube, MessageCircle } from "lucide-react";

const ContactUs: React.FC = () => {
  return (
    <section
      id="contact"
      className="relative w-full py-20 bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] text-white"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Contact Info */}
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gold">
            Get in Touch
          </h2>
          <p className="text-gray-300 leading-relaxed">
            We are always here to assist you with your physiotherapy needs.
            Call us today to book your appointment!
          </p>

          <div className="space-y-4">
            <div className="flex items-center space-x-4 bg-white/10 p-4 rounded-xl backdrop-blur-md">
              <Phone className="text-gold" />
              <div>
                <p className="font-semibold">+91 8220457467</p>
                <p className="font-semibold">+91 7010173306</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 bg-white/10 p-4 rounded-xl backdrop-blur-md">
              <Mail className="text-gold" />
              <p className="font-semibold">elasphysiocare@gmail.com</p>
            </div>
            <div className="flex items-center space-x-4 bg-white/10 p-4 rounded-xl backdrop-blur-md">
              <MapPin className="text-gold" />
              <p className="font-semibold">
                No: 2/316, Mudichur Main Road, Mudichur,
                <br />
                Chennai - 600 048
              </p>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex space-x-6 pt-4">
            <a
              href="#"
              className="p-3 bg-white/10 rounded-full hover:bg-gold/20 transition"
            >
              <Instagram size={22} />
            </a>
            <a
              href="#"
              className="p-3 bg-white/10 rounded-full hover:bg-gold/20 transition"
            >
              <MessageCircle size={22} />
            </a>
            <a
              href="#"
              className="p-3 bg-white/10 rounded-full hover:bg-gold/20 transition"
            >
              <Youtube size={22} />
            </a>
          </div>
        </div>

        {/* Google Map */}
        <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-xl border-4 border-white/10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9460351078874!2d80.08189067581932!3d12.97527901444909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5260d79f29d891%3A0xf9dd4ea344a4f735!2sELA%E2%80%99S%20Physio%20Care!5e0!3m2!1sen!2sin!4v1726284137880!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
