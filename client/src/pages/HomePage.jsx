import React from 'react';
import { Link } from 'react-router-dom';
import CardiacCareServices from './CardiacCareServices';
import ScrollAnimation from '../components/ScrollAnimation';

export default function HomePage() {
  return (
    <>
      <div className="relative min-h-[80vh] bg-white flex flex-col md:flex-row items-center justify-between px-6 md:px-20 pt-32 pb-16 overflow-hidden">
        {/* Decorative background lines (optional, can be improved with SVG) */}
        <div className="absolute inset-0 pointer-events-none z-0">
          {/* You can use a background SVG or pattern here for the wavy lines */}
        </div>
        {/* Left: Button, Heading and Description */}
        <div className="relative z-10 flex-1 max-w-xl mb-12 md:mb-0">
          <ScrollAnimation direction="up" delay={0.1}>
            <Link to="/about">
              <button className="group border-2 border-[#222] text-[#222] px-6 py-2 rounded-full text-base font-semibold flex items-center gap-2 transition-colors duration-200 hover:bg-[#222] hover:text-white focus:outline-none mb-8">
                About Aram Medicals
                <span className="inline-block transition-transform duration-200 group-hover:translate-x-2">
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </button>
            </Link>
          </ScrollAnimation>
          <ScrollAnimation direction="up" delay={0.2}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-8">
              <span className="inline-block bg-[#2B2B4B] px-4 py-2 mb-2 w-fit">ARAM MEDICAL</span><br />
              <span className="inline-block bg-[#2B2B4B] px-4 py-2 mb-2 w-fit">FOUNDATION &</span><br />
              <span className="inline-block bg-[#2B2B4B] px-4 py-2 mb-2 w-fit">COMPREHENSIVE</span><br />
              <span className="inline-block bg-[#2B2B4B] px-4 py-2 mb-2 w-fit">CARDIAC CARE</span><br />
              <span className="inline-block bg-[#2B2B4B] px-4 py-2 w-fit">CENTER</span>
            </h1>
          </ScrollAnimation>
          <ScrollAnimation direction="up" delay={0.3}>
            <p className="text-lg md:text-xl text-black font-medium">
              We provide comprehensive Diagnostic and Therapeutic cardiac care facilities all under one roof. Our team of committed and well-trained health care personnel work round the clock under the guidance of our director and cardiologist <span className="font-bold">Dr Ranganathan R RM.</span>
            </p>
          </ScrollAnimation>
        </div>
        {/* Right: Vision and Mission Polygons */}
        <ScrollAnimation direction="right" delay={0.4}>
          <div className="relative z-10 flex flex-col md:flex-row gap-6 md:gap-8 flex-1 justify-end w-full md:w-auto">
            {/* Vision Polygon */}
            <div className="bg-[#A3C86D] text-[#2B2B4B] shadow-lg px-6 py-6 md:py-8 md:px-8 w-full md:w-80 clip-polygon-green mb-4 md:mb-0">
              <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                <span className="inline-block w-4 h-4 bg-[#2B2B4B] rounded-full mr-2" />
                Our Vision
              </h3>
              <p className="text-base">
                Aram Medical Foundation focusses on Comprehensive Heart Health Care with state-of-the-art non invasive Cardiac Diagnostic Equipment. Our values center around an ethical and patient-centric approach. We also have a vision for the future with special emphasis on preventive and rehabilitative Cardiac care.
              </p>
            </div>
            {/* Mission Polygon */}
            <div className="bg-white text-[#2B2B4B] shadow-lg px-6 py-6 md:py-8 md:px-8 w-full md:w-80 clip-polygon-white border border-gray-200">
              <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                <span className="inline-block w-4 h-4 bg-[#2B2B4B] rounded-full mr-2" />
                Our Mission
              </h3>
              <p className="text-base">
                "To provide consistent, compre hensive and affordable world class healthcare, engaging state-of-the-art technology with dedicated and skilled medical fraternity to the spectrum of the population. We look forward to providing you with the best of healthcare, because, <span className="font-bold">\"Every heart-beat counts\"</span>"
              </p>
            </div>
          </div>
        </ScrollAnimation>
        {/* Custom polygon clip-paths for the cards */}
        <style>{`
          .clip-polygon-green {
            clip-path: polygon(20% 0%, 100% 0%, 100% 90%, 80% 100%, 0% 100%, 0% 10%);
          }
          .clip-polygon-white {
            clip-path: polygon(10% 0%, 100% 0%, 100% 90%, 90% 100%, 0% 100%, 0% 10%);
          }
        `}</style>
      </div>
      <ScrollAnimation direction="up" delay={0.5}>
        <CardiacCareServices />
      </ScrollAnimation>
    </>
  );
} 