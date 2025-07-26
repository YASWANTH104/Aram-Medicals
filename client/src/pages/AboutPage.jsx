import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const testimonials = [
  {
    name: 'Indirani',
    text: 'Doctor, we are very grateful for your service. Genuine concern for your patients is appreciated during this difficult phase in our life.',
    role: 'Patient - Underwent Stenting',
  },
  {
    name: 'Arumugam',
    text: 'I am very happy to have found such a wonderful doctor in my hometown. I have been under your follow up for 2 years now and I should say apart from the medications whenever I come and meet you in the hospital I get a sense of happiness and fulfilment. May you grow great heights and serve this community like this forever.',
    role: '',
  },
  {
    name: 'Ramathal',
    text: 'ஒவ்வொரு முறையும் நாம் கேட்கும் எல்லா சந்தேகங்களையும் பொறுமையாக தீர்த்து வைக்கும் மருத்துவரை நான் பார்த்ததே இல்லை. உங்களுக்கும் உங்கள் குடும்பத்தினருக்கும் நல்ல ஆரோக்கியத்தையும் மகிழ்ச்சியையும் வாழ்த்துகிறோம்.',
    role: '',
  },
];

const galleryImages = [
  'https://arammedicalfoundation.com/wp-content/uploads/2022/07/IMG_3243-2048x1365.jpg',
  'https://arammedicalfoundation.com/wp-content/uploads/2022/07/IMG_3247-2048x1365.jpg',
  'https://arammedicalfoundation.com/wp-content/uploads/2022/07/IMG_3293-2048x1365.jpg',
  'https://arammedicalfoundation.com/wp-content/uploads/2022/07/IMG_3242-2048x1365.jpg',
  'https://arammedicalfoundation.com/wp-content/uploads/2022/07/IMG_3295-2048x1366.jpg',
  'https://arammedicalfoundation.com/wp-content/uploads/2022/07/IMG_3292-2048x1365.jpg',
];

export default function AboutPage() {
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const total = testimonials.length;
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef();

  const prevTestimonial = () => setTestimonialIdx((testimonialIdx - 1 + total) % total);
  const nextTestimonial = () => setTestimonialIdx((testimonialIdx + 1) % total);

  useEffect(() => {
    if (!isHovered) {
      timerRef.current = setTimeout(() => {
        setTestimonialIdx((idx) => (idx + 1) % total);
      }, 4000);
    }
    return () => clearTimeout(timerRef.current);
  }, [testimonialIdx, isHovered, total]);

  return (
    <div className="pt-28 pb-16 px-4 md:px-8 bg-white min-h-[80vh]">
      {/* Hero Section */}
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 mb-16">
        <img
          src="https://arammedicalfoundation.com/wp-content/uploads/2022/06/WhatsApp-Image-2022-06-03-at-6.03.14-PM-150x150.jpeg"
          alt="Dr. Ranganathan R RM"
          className="w-40 h-40 rounded-full object-cover border-4 border-[#1aab3c] shadow-md mb-6 md:mb-0"
        />
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: '#0833a8' }}>Dr. Ranganathan R RM</h1>
          <div className="font-semibold mb-2" style={{ color: '#1aab3c' }}>MD (Gen Med), DM (Cardio)</div>
          <p className="text-lg text-gray-700 mb-4">
            Welcome to <span style={{ color: '#1aab3c', fontWeight: 600 }}>Aram Medical Foundation</span>, your trusted center for comprehensive cardiac care in Pollachi. Our mission is to provide ethical, patient-centric, and world-class healthcare to the community.
          </p>
          <div className="flex flex-col gap-2 text-base text-gray-700">
            <div>
              <span className="font-semibold" style={{ color: '#0833a8' }}>Address:</span> 91,91/1-91/4, New Scheme Road, Pollachi - 642 001
            </div>
            <div>
              <span className="font-semibold" style={{ color: '#0833a8' }}>Phone:</span> <a href="tel:966741147" style={{ color: '#1aab3c' }} className="hover:underline">96674 1147</a>
            </div>
            <div>
              <span className="font-semibold" style={{ color: '#0833a8' }}>Email:</span> <a href="mailto:info@arammedicalfoundation.com" style={{ color: '#1aab3c' }} className="hover:underline">info@arammedicalfoundation.com</a>
            </div>
          </div>
        </div>
      </div>

      {/* About/Foundation Section */}
      <div className="w-full mb-16 text-center px-4 md:px-8">
        <div className="rounded-2xl shadow-lg p-8 md:p-12 bg-gradient-to-r from-[#f8fafc] to-[#f3f4f6]">
          <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#0833a8' }}>Our Story & Mission</h2>
          <p className="text-lg text-gray-700 mb-4">
            <span style={{ color: '#1aab3c', fontWeight: 600 }}>Aram Medical Foundation</span> is dedicated to providing state-of-the-art cardiac care with a focus on prevention, diagnosis, and treatment. We believe in compassionate service, continuous improvement, and making a positive impact on every patient’s life.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 mt-6">
            <Link to="/contact" className="rounded-lg p-6 flex-1 min-w-[220px] bg-gradient-to-br from-[#e0ffe7] to-[#b2f5ea] hover:shadow-lg transition-shadow duration-200">
              <div className="font-semibold mb-2" style={{ color: '#0833a8' }}>Book an Appointment</div>
              <div className="block font-bold text-lg mb-1" style={{ color: '#1aab3c' }}>86674 11477</div>
              <div className="block" style={{ color: '#1aab3c' }}>info@arammedicalfoundation.com</div>
            </Link>
            <div className="rounded-lg p-6 flex-1 min-w-[220px] bg-gradient-to-br from-[#e3f0ff] to-[#c9e4ff]">
              <div className="font-semibold mb-2" style={{ color: '#0833a8' }}>Location</div>
              <div className="text-gray-700">91,91/1-91/4, New Scheme Road, Pollachi - 642 001</div>
              <a href="https://goo.gl/maps/8Qw8Qw8Qw8Qw8Qw8Q" target="_blank" rel="noopener noreferrer" className="block mt-1 hover:underline" style={{ color: '#1aab3c' }}>Get Directions</a>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Carousel */}
      <div className="w-full mb-16 px-4 md:px-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center" style={{ color: '#0833a8' }}>Testimonials</h2>
        <div className="relative flex flex-col items-center">
          <div className="w-full max-w-3xl"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="bg-gradient-to-r from-[#e0f7fa] to-[#f3e5f5] rounded-2xl shadow-lg p-12 flex flex-col items-center min-h-[340px] transition-all duration-300">
              <div className="mb-6 text-center text-2xl md:text-3xl font-medium" style={{ color: '#0833a8' }}>“{testimonials[testimonialIdx].text}”</div>
              <div className="font-bold text-xl md:text-2xl mt-2" style={{ color: '#1aab3c' }}>{testimonials[testimonialIdx].name}</div>
              {testimonials[testimonialIdx].role && <div className="text-lg text-gray-500 mt-1">{testimonials[testimonialIdx].role}</div>}
            </div>
          </div>
          {/* Carousel Controls */}
          <div className="flex items-center gap-4 mt-8">
            <button onClick={prevTestimonial} className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-[#1aab3c] hover:text-white text-[#0833a8] transition-colors text-xl">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
            </button>
            {/* Dots */}
            <div className="flex gap-3">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setTestimonialIdx(idx)}
                  className={`w-4 h-4 rounded-full ${testimonialIdx === idx ? 'bg-[#1aab3c]' : 'bg-gray-300'} transition-colors`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
            <button onClick={nextTestimonial} className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-[#1aab3c] hover:text-white text-[#0833a8] transition-colors text-xl">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="w-full mb-16 px-0">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center" style={{ color: '#0833a8' }}>Gallery</h2>
        <div className="relative overflow-hidden w-full">
          <div className="flex w-max animate-gallery-marquee gap-8">
            {galleryImages.concat(galleryImages).map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`Gallery ${idx + 1}`}
                className="w-80 h-80 sm:w-[32rem] sm:h-[32rem] object-cover rounded-2xl shadow flex-shrink-0"
              />
            ))}
          </div>
          <style>{`
            @keyframes gallery-marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-gallery-marquee {
              animation: gallery-marquee 30s linear infinite;
            }
          `}</style>
        </div>
      </div>

      {/* Book Appointment CTA */}
      <div className="max-w-2xl mx-auto text-center mt-16">
        <Link to="/contact">
          <button className="inline-block font-semibold px-8 py-3 rounded-lg text-lg shadow hover:bg-[#0833a8] hover:text-white transition-colors" style={{ backgroundColor: '#1aab3c', color: '#0833a8' }}>Book an Appointment</button>
        </Link>
      </div>
    </div>
  );
} 