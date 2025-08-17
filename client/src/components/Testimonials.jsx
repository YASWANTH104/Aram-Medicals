import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Indirani",
    role: "Patient - Underwent Stenting",
    feedback:
      "Doctor, we are very grateful for your service. Genuine concern for your patients is appreciated during this difficult phase in our life.",
  },
  {
    name: "Arumugam",
    role: "Patient",
    feedback:
      "I am very happy to have found such a wonderful doctor in my hometown. I have been under your follow up for 2 years now and I should say apart from the medications whenever I come and meet you in the hospital I get a sense of happiness and fulfilment. May you grow great heights and serve this community like this forever.",
  },
  {
    name: "Ramathal",
    role: "Patient",
    feedback:
      "ஒவ்வொரு முறையும் நாம் கேட்கும் எல்லா சந்தேகங்களையும் பொறுமையாக தீர்த்து வைக்கும் மருத்துவரை நான் பார்த்ததே இல்லை. உங்களுக்கும் உங்கள் குடும்பத்தினருக்கும் நல்ல ஆரோக்கியத்தையும் மகிழ்ச்சியையும் வாழ்த்துகிறோம்.",
  },
  {
    name: "Lakshmi",
    role: "Patient",
    feedback:
      "The care and compassion shown throughout my treatment was beyond my expectations. I feel healthier and more confident now.",
  },
  {
    name: "Ravi Kumar",
    role: "Patient - Angioplasty",
    feedback:
      "Thanks to the doctor’s timely diagnosis and treatment, I am able to get back to my normal routine much faster than expected.",
  },
];

export default function Testimonials() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.firstChild.offsetWidth + 32; // card + gap
      scrollRef.current.scrollBy({
        left: direction === "left" ? -cardWidth : cardWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-16 bg-white w-full">
      <div className="w-full px-6">
        <h2 className="text-6xl font-bold text-center mb-10 text-[#212878]">
          Hear From Our <span className="text-[#98C341]">Patients</span>
        </h2>

        {/* Slider Controls */}
        <div className="flex justify-end mb-6 gap-4">
          <button
            onClick={() => scroll("left")}
            className="p-4 rounded-full bg-[#98C341] hover:bg-gray-300"
          >
            <FaChevronLeft size={20} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-4 rounded-full bg-[#98C341] text-white hover:bg-teal-700"
          >
            <FaChevronRight size={20} />
          </button>
        </div>

        {/* Cards Row */}
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-scroll scroll-smooth no-scrollbar px-6"
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[85%] md:w-[48%] lg:w-[48%] bg-gray-100 shadow-lg rounded-2xl p-8 hover:shadow-2xl transition min-h-[300px] lg:min-h-[380px]"
            >
              <div className="flex items-center gap-5 mb-6">
                {/* Initial Avatar */}
                <div className="w-16 h-16 rounded-full bg-[#98C341] flex items-center justify-center text-white text-2xl font-bold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-semibold text-xl">{t.name}</h3>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                {t.feedback}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
