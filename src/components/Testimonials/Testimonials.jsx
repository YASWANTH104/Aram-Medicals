"use client";
import FloatingHearts from "../FloatingHearts";
import React from "react";
import "./Testimonials.css";
import TestimonialContainer from "../TestimonialContainer/TestimonialContainer";

const testimonials = [
  {
    name: "Indirani",
    position: "Patient - Underwent Stenting",
    text:
      "Doctor, we are very grateful for your service. Genuine concern for your patients is appreciated during this difficult phase in our life.",
    image:''
  },
  {
    name: "Arumugam",
    position: "Patient",
    text:
      "I am very happy to have found such a wonderful doctor in my hometown.Whenever I come and meet you in the hospital I get a sense of happiness and fulfilment. May you grow great heights and serve this community like this forever.",
    image:''
  },
  {
    name: "Ramathal",
    position: "Patient",
    text:
      "ஒவ்வொரு முறையும் நாம் கேட்கும் எல்லா சந்தேகங்களையும் பொறுமையாக தீர்த்து வைக்கும் மருத்துவரை நான் பார்த்ததே இல்லை. உங்களுக்கும் உங்கள் குடும்பத்தினருக்கும் நல்ல ஆரோக்கியத்தையும் மகிழ்ச்சியையும் வாழ்த்துகிறோம்.",
    image:''
  },
  {
    name: "Lakshmi",
    position: "Patient",
    text:
      "The care and compassion shown throughout my treatment was beyond my expectations. I feel healthier and more confident now.",
    image:''
  },
  {
    name: "Ravi Kumar",
    position: "Patient - Angioplasty",
    text:
      "Thanks to the doctor’s timely diagnosis and treatment, I am able to get back to my normal routine much faster than expected.",
    image:''
  },
];

const Testimonials = () => {
  return (
    <div className="testimonials-container" id="testimonials">
                <div className="absolute inset-0 pointer-events-none z-0">
            <FloatingHearts />
          </div>
      <div className="testimonials-heading-main">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#212878]">
          Hear From Our <span className="text-[#98C341]">Patients</span>
        </h2>
      </div>

      <div className="testimonials-section-content">
        <TestimonialContainer testimonials={testimonials} />
      </div>
    </div>
  );
};

export default Testimonials;
