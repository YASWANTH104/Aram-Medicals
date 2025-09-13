import { FaArrowCircleRight } from "react-icons/fa";
import ScrollAnimation from "../ScrollAnimation";
import { Scroll } from "@react-three/drei";

export default function Specialists() {
  const items = [
    "24x7 Cardiac and Health Care",
    "24x7 Emergency Centre in Pollachi",
    "CCU / USG / ECHO / TMT",
    "Modular Operation Theatre",
  ];

  return (
    <div className="pt-24 pb-16 px-6 md:px-12 lg:px-20 bg-white">
      {/* Subheading */}
      <ScrollAnimation direction="up" delay={0.1}>
      <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
        Your Champions of Care
      </p>
      </ScrollAnimation>

      {/* Heading */}
      <ScrollAnimation direction="up" delay={0.2}>
      <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B3A4A] mb-10">
        Best <span className="text-[#1aab3c]">Specialists</span> & Equipment
      </h2>
      </ScrollAnimation>

      {/* Two-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Column - List */}
        <ul className="space-y-4 text-lg text-gray-800">
          {items.map((item, index) => (
            <ScrollAnimation direction="up" delay={0.3 + index * 0.1} key={index}>
            <li key={index} className="flex items-start space-x-3">
              <FaArrowCircleRight className="text-[#1aab3c] mt-1 flex-shrink-0" />
              <span>{item}</span>
            </li>
            </ScrollAnimation>
          ))}
        </ul>

        {/* Right Column - Video */}
        <ScrollAnimation direction="left" delay={0.5}>
        <div className="relative w-full h-64 md:h-80 lg:h-[400px] rounded-lg overflow-hidden shadow-lg">
          <iframe
            className="w-full h-full rounded-2xl"
            src="https://www.youtube.com/embed/iuBNpn0eDUU"
            title="OneHealth Specialists"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        </ScrollAnimation>
      </div>
    </div>
  );
}
