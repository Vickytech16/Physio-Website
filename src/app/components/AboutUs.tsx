// src/components/AboutUs.tsx
"use client";
import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    name: "Arun K.",
    text: "Dr. Padmasri is very kind and professional. She helped me recover from my shoulder injury quickly!",
    rating: 4.8,
  },
  {
    name: "Meera S.",
    text: "The clinic atmosphere is welcoming, and the treatment was highly effective. Highly recommend!",
    rating: 4.5,
  },
  {
    name: "Vikram R.",
    text: "Excellent physiotherapy care. I felt improvement after just a few sessions!",
    rating: 4.3,
  },
];

// ⭐ Function to render stars (with half-star support)
const renderStars = (rating: number) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.25 && rating - fullStars <= 0.75;

  for (let i = 0; i < 5; i++) {
    if (i < fullStars) {
      stars.push(<Star key={i} size={18} className="fill-current text-gold" />);
    } else if (i === fullStars && hasHalfStar) {
      stars.push(
        <div key={i} className="relative">
          <Star size={18} className="text-gray-300" />
          <Star
            size={18}
            className="absolute top-0 left-0 text-gold"
            style={{ clipPath: "inset(0 50% 0 0)" }}
          />
        </div>
      );
    } else {
      stars.push(<Star key={i} size={18} className="text-gray-300" />);
    }
  }
  return stars;
};

const AboutUs: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="aboutus" className="relative w-full py-16 bg-white text-gray-800">
      {/* Doctor info section */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center md:space-x-12">
        {/* Image First on Mobile */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <img
            src="/background.jpg"
            alt="Physiotherapy session"
            className="rounded-xl shadow-lg object-cover w-full h-80"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-darkBlue">About Us</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            At <span className="text-gold font-semibold">ELA&apos;S Physio Care</span>, we believe in healing through personalized physiotherapy treatments.  
            Our mission is to provide compassionate care and proven therapies that help you recover, strengthen, and regain confidence in every step.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Whether you&apos;re recovering from an injury, managing chronic pain, or improving mobility, our expert physiotherapists are here to guide you on your journey to better health.
          </p>

          {/* Doctor Section */}
          <div className="mt-8 p-6 border-l-4 border-gold bg-gray-50 rounded-md shadow">
            <h3 className="text-xl font-bold text-darkBlue">Dr. Padmasri Elangovan</h3>
            <p className="text-gray-600 font-medium">PT, MIAP</p>
            <p className="mt-2 text-gray-600">
              With years of expertise in physiotherapy and rehabilitation, Dr. Padmasri Elangovan is dedicated to providing personalized care 
              that ensures every patient regains mobility and confidence in their daily life.
            </p>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-16 bg-gradient-to-r from-[#154c79] to-[#063970] py-10">
        <h3 className="text-2xl font-bold text-center text-gold mb-8">What Our Patients Say</h3>

        {/* Desktop view: grid */}
        <div className="hidden md:flex flex-wrap justify-center gap-6 px-6 md:px-12 max-w-5xl mx-auto">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="w-72 bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between text-center"
            >
              <p className="text-gray-700 italic">&quot;{review.text}&quot;</p>
              <div className="mt-4 flex items-center justify-center space-x-1 text-gold">
                {renderStars(review.rating)}
                <span className="ml-2 text-sm font-medium text-gray-600">
                  {review.rating.toFixed(1)}
                </span>
              </div>
              <span className="mt-4 text-darkBlue font-semibold">- {review.name}</span>
            </div>
          ))}
        </div>

{/* Mobile view: carousel with stylish box */}
<div className="md:hidden flex flex-col items-center px-6">
  <div className="w-80 bg-white rounded-2xl shadow-lg p-6 text-center relative overflow-hidden">
    <p className="text-gray-700 italic">&quot;{reviews[currentIndex].text}&quot;</p>
    
    {/* Star Rating */}
    <div className="mt-4 flex items-center justify-center space-x-1 text-gold">
      {renderStars(reviews[currentIndex].rating)}
      <span className="ml-2 text-sm font-medium text-gray-600">
        {reviews[currentIndex].rating.toFixed(1)}
      </span>
    </div>

    <span className="mt-4 block text-darkBlue font-semibold">- {reviews[currentIndex].name}</span>

    {/* Arrows inside box */}
    <div className="flex justify-between items-center absolute bottom-4 left-0 right-0 px-6">
      <button
        onClick={handlePrev}
        className="p-2 bg-gray-100 rounded-full shadow hover:bg-gray-200 transition"
      >
        <ChevronLeft className="text-darkBlue" size={20} />
      </button>
      <button
        onClick={handleNext}
        className="p-2 bg-gray-100 rounded-full shadow hover:bg-gray-200 transition"
      >
        <ChevronRight className="text-darkBlue" size={20} />
      </button>
    </div>
  </div>
</div>
</div>

    </section>
  );
};

export default AboutUs;
