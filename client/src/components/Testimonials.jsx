import { useRef } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from "react-icons/fa";
import FloatingHearts from "./FloatingHearts"; // Assuming you have this component

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
      const cardWidth = scrollRef.current.firstChild.offsetWidth + 32;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -cardWidth : cardWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#f9fafb] relative">
               <div className="absolute inset-0 pointer-events-none z-0">
            <FloatingHearts />
          </div>
      <div className="w-full max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#212878]">
          Hear From Our <span className="text-[#98C341]">Patients</span>
        </h2>

        {/* Scroll Buttons - hidden on mobile */}
        <div className="hidden md:block">
          <button
            onClick={() => scroll("left")}
            className="absolute left-6 top-1/2 -translate-y-1/2 z-20 p-5 bg-[#212878] text-white rounded-full shadow-lg hover:scale-110 transition"
          >
            <FaChevronLeft size={22} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-6 top-1/2 -translate-y-1/2 z-20 p-5 bg-[#98C341] text-white rounded-full shadow-lg hover:scale-110 transition"
          >
            <FaChevronRight size={22} />
          </button>
        </div>

        {/* Cards */}
        <div
          ref={scrollRef}
          className="flex gap-10 overflow-x-scroll snap-x snap-mandatory no-scrollbar px-4"
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="
                flex-shrink-0 snap-center
                w-[90%] sm:w-[70%] md:w-[45%] lg:w-[30%]
                bg-white/80 backdrop-blur-md border border-gray-200 
                shadow-lg hover:shadow-2xl rounded-2xl p-10 
                hover:-translate-y-3 transition-all relative
              "
            >
              {/* Quote Icon Watermark */}
              <FaQuoteLeft className="absolute top-6 left-6 text-[#98C341] text-5xl opacity-10" />

              {/* Avatar + Info */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#98C341] to-[#6ca729] flex items-center justify-center text-white text-xl font-bold shadow-md">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-[#212878]">{t.name}</h3>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>

              {/* Feedback */}
              <p className="text-gray-700 text-base leading-relaxed italic">
                “{t.feedback}”
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
