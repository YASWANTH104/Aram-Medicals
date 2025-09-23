// InternationalPatientsCentre.jsx
import { FiPlus, FiArrowRight } from "react-icons/fi";
import ScrollAnimation from "../ScrollAnimation";

export default function InternationalPatientsCentre() {
  const services = [
    "Comprehensive and coordinated care throughout your hospital stay",
    "A dedicated patient liaison to assist with appointment scheduling, laboratory tests, and the registration and billing processes",
    "Support with travel arrangements, accommodation, and airport pick-up for patients, family members or caregivers",
    "Coordination of all care services during your stay at our hospital",
    "Assistance with follow-up appointments with your personal referring physician",
  ];

  return (
    <section className="bg-white pt-28 pb-20">
      <div className="mx-auto max-w-8xl px-6 md:px-10">
        <ScrollAnimation direction="up" delay={0.4}>
        {/* Heading + CTA */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <h2 className="leading-[1.05] font-bold text-5xl md:text-7xl text-[#212878]">
            {/* Outlined line */}
              Comprehensive

            {/* Solid line */}
            <span className="block text-3xl md:text-4xl text-[#1aab3c]">
              Patients Centre
            </span>
          </h2>

          {/* CTA button */}
          <button
            type="button"
            className="group inline-flex items-center gap-3 self-start rounded-full bg-gradient-to-r from-[#1aab3c] to-[#212878] px-7 py-4 text-lg text-white font-semibold shadow-lg transition-colors hover:from-[#212878] hover:to-[#1aab3c]"
          >
            <span>Learn More</span>
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#0B3A4A] group-hover:text-[#159a34] shadow-sm">
              <FiArrowRight className="text-xl" />
            </span>
          </button>
        </div>
        </ScrollAnimation>

        {/* Intro paragraph */}
        <ScrollAnimation direction="up" delay={0.6}>
        <p className="mt-6 max-w-3xl text-lg md:text-xl text-gray-600 leading-relaxed">
          At Aram Medicals, we are committed to fostering an environment
          that encourages healing while providing the comfort and warmth of home.
        </p>
        </ScrollAnimation>

        {/* Content grid */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: services list */}
          <div>
            <ScrollAnimation direction="up" delay={0.5}>
            <h3 className="mb-8 text-xl md:text-2xl font-bold text-[#1aab3c]">
              Our gratuitous services include
            </h3>
            </ScrollAnimation>

            <ul className="space-y-6 text-lg md:text-xl text-gray-800">
              {services.map((item, idx) => (
                <ScrollAnimation direction="up" delay={0.7 + idx * 0.1} key={idx}>
                <li key={idx} className="flex items-start gap-4 leading-relaxed">
                  <span className="mt-1 inline-flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full ring-1 ring-gray-300 bg-white">
                    <FiPlus className="text-[#1aab3c] text-lg" />
                  </span>
                  <span>{item}</span>
                </li>
                </ScrollAnimation>
              ))}
            </ul>
          </div>

          {/* Right: image */}
          <ScrollAnimation direction="left" delay={0.6}>
          <div className="rounded-3xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.08)] ring-1 ring-gray-100 w-11/12">
            <img
              src="https://www.onehealthhospitals.com/wp-content/uploads/2024/11/international-patient-service.jpg"
              alt="International patients care"
              className="h-[380px] md:h-[460px] w-full object-cover"
              loading="lazy"
            />
          </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
