import { FaArrowCircleRight } from "react-icons/fa";

export default function Specialists() {
  const items = [
    "24x7 Cardiac and Neuro Care",
    "24x7 Trauma and Critical Care",
    "24x7 Emergency Centre in Guduvancheri",
    "CCU / CT Scan / USG / ECHO / TMT",
    "Advanced Cath Lab",
    "Modular Operation Theatre",
    "Advanced Joint Replacement",
    "Mitral Valve, Angio and Bypass",
    "Endovascular Laser Procedures",
    "65 Bed Super Speciality Hospital in Vandalur",
  ];

  return (
    <div className="pt-24 pb-16 px-6 md:px-12 lg:px-20 bg-white">
      {/* Subheading */}
      <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
        Your Champions of Care
      </p>

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B3A4A] mb-10">
        Best <span className="text-[#1aab3c]">Specialists</span> & Equipment
      </h2>

      {/* Two-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Column - List */}
        <ul className="space-y-4 text-lg text-gray-800">
          {items.map((item, index) => (
            <li key={index} className="flex items-start space-x-3">
              <FaArrowCircleRight className="text-[#1aab3c] mt-1 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* Right Column - Video */}
        <div className="relative w-full h-64 md:h-80 lg:h-[400px] rounded-lg overflow-hidden shadow-lg">
          <iframe
            className="w-full h-full rounded-2xl"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="OneHealth Specialists"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
