// AwardsRecognition.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import img1 from "../../assets/img1.jpg";

function ThreeDCard({ title, qualification, description, img }) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { offsetWidth, offsetHeight } = e.currentTarget;
    const x = (e.nativeEvent.offsetX / offsetWidth - 0.5) * 30;
    const y = (e.nativeEvent.offsetY / offsetHeight - 0.5) * -30;
    setRotate({ x, y });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative w-80 h-96 bg-white/20 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/40 cursor-pointer"
      style={{
        transform: `perspective(1000px) rotateX(${rotate.y}deg) rotateY(${rotate.x}deg)`,
        transition: "transform 0.15s ease-out",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="h-1/2 overflow-hidden rounded-t-2xl">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-6 text-center">
        <h3 className="text-2xl font-bold text-[#212878]">{title}</h3>

        {/* ✅ Show qualification if available */}
        {qualification && (
          <h4 className="text-sm text-[#1aab3c] mt-1">{qualification}</h4>
        )}

        <p className="text-gray-600 mt-3">{description}</p>
      </div>
    </motion.div>
  );
}

export default function AwardsRecognition() {
  const awards = [
    {
      title: "Best Hospital 2024",
      description: "Recognized nationally",
      img: img1,
    },
    {
      title: "Excellence in Service",
      description: "For outstanding care",
      img: img1,
    },
    {
      title: "Innovation Award",
      description: "For advanced technology",
      img: img1,
    },
  ];

  const team = [
    {
      title: "Dr.Pratheeb kumar", 
      qualification: "MBBS MD (RESPIRATORY MEDICINE)",
      description: "Consultant Pulmonologist",
      img: "doc1.jpeg",
    },
    {
      title: "Dr.Rathinam",
      qualification: "MBBS, MD (Internal Medicine)",
      description: "Consultant Physician",
      img: "doc2.jpeg",
    },
    {
      title: "Dr.Aishwarya Muthubalaji",
      qualification: "MBBS, MEM, FICM",
      description: "Emergency Physician",
      img: "doc4.jpeg",
    },
        {
      title: "Dr.Sukhesh P", 
      qualification: "MBBS, MD(Psychiatry)",
      description: "Psychiatrist",
      img: "doc3.jpeg",
    },
    {
      title: "Dr.Murugananth",
      qualification: "MD (General Medicine), DM(Nephrology)",
      description: "Consultant Nephrologist, Renal transplant Physician",
      img: img1,
    },
    {
      title: "Dr.K.Karthikeyan",
      qualification: "MS. , Mch.",
      description: "Consultant Urologist & Andrologist",
      img: "doc5.jpeg",
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Awards Section */}
      {/* <section className="py-20">
        <h2 className="text-5xl font-bold text-center mb-12 text-[#212878]">
          Our Awards
        </h2>
        <div className="flex flex-wrap justify-center gap-10">
          {awards.map((award, i) => (
            <ThreeDCard key={i} {...award} />
          ))}
        </div>
      </section> */}

      {/* Team Section */}
      <section className="py-20">
        <h2 className="text-5xl font-bold text-center mb-12 text-[#212878]">
          Meet Our Experts
        </h2>
        <div className="flex flex-wrap justify-center gap-10">
          {team.map((member, i) => (
            <ThreeDCard key={i} {...member} />
          ))}
        </div>
      </section>
    </div>
  );
}
