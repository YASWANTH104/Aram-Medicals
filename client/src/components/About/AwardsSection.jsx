// AwardsRecognition.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import img1 from "../../assets/img1.jpg"

function ThreeDCard({ title, description, img }) {
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
        <p className="text-gray-600 mt-3">{description}</p>
      </div>
    </motion.div>
  );
}

export default function AwardsRecognition() {
  const awards = [
    { title: "Best Hospital 2024", description: "Recognized nationally", img: img1 },
    { title: "Excellence in Service", description: "For outstanding care", img: img1 },
    { title: "Innovation Award", description: "For advanced technology", img: img1 }
    ];
  const team = [
    { title: "Dr. A Kumar", description: "Cardiologist", img: img1 },
    { title: "Dr. Priya N", description: "Pediatrician", img: img1 },
    { title: "Dr. V Rao", description: "Neurologist", img: img1 },
  ];



  return (
    <div className="overflow-hidden">
      {/* Awards Section */}
      <section className="py-20">
        <h2 className="text-5xl font-bold text-center mb-12 text-[#212878]">
          Our Awards
        </h2>
        <div className="flex flex-wrap justify-center gap-10">
          {awards.map((award, i) => (
            <ThreeDCard key={i} {...award} />
          ))}
        </div>
      </section>

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
