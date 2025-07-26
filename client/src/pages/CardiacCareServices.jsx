import React from 'react';
import ScrollAnimation from '../components/ScrollAnimation';

export default function CardiacCareServices() {
  return (
    <section className="relative w-full py-20 bg-white overflow-x-hidden">
      {/* Section Title */}
      <ScrollAnimation direction="up" delay={0.1}>
        <h2 className="text-2xl md:text-3xl font-bold text-[#222] text-center mb-10">Some cancers and diseases caused by HPV</h2>
      </ScrollAnimation>
      {/* Horizontal List of Services */}
      <ScrollAnimation direction="up" delay={0.2}>
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 mb-12">
          {[
            'Cervical Cancer',
            'Anal Cancer',
            'Vaginal Cancer',
            'Vulvar Cancer',
            'Genital Warts',
          ].map((name) => (
            <div key={name} className="flex flex-col items-center min-w-[120px]">
              <div className="w-8 h-8 mb-2">
                {/* Placeholder for green virus icon */}
                <div className="w-8 h-8 rounded-full bg-[#1CA39E] flex items-center justify-center">
                  <span className="text-white font-bold text-lg">•</span>
                </div>
              </div>
              <span className="text-base font-medium text-[#222] text-center whitespace-nowrap">{name}</span>
            </div>
          ))}
        </div>
      </ScrollAnimation>
      {/* Main Content Row */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-x-32 max-w-6xl mx-auto mb-12">
        {/* Left: Info Rows */}
        <div className="flex-1 flex flex-col gap-8">
          <ScrollAnimation direction="left" delay={0.3}>
            {/* Info Row 1 */}
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 flex-shrink-0">
                {/* Placeholder for icon */}
                <div className="w-16 h-16 rounded-full bg-[#1CA39E] flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">🛡️</span>
                </div>
              </div>
              <div>
                <span className="text-[#1CA39E] font-bold text-lg">Chest Pain Clinic</span>
                <p className="text-[#222] text-base mt-1">HPV vaccination can act as the body's frontline defence, shielding it from HPV infection and other associated diseases and cancers.</p>
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation direction="left" delay={0.4}>
            {/* Info Row 2 */}
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-[#1CA39E] text-2xl font-bold">🧪</span>
                </div>
              </div>
              <div>
                <span className="text-[#1CA39E] font-bold text-lg">Equip</span>
                <p className="text-[#222] text-base mt-1">As per studies, vaccination before HPV exposure, i.e., the first sexual contact, can help provide a high protection rate of more than 90%.</p>
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation direction="left" delay={0.5}>
            {/* Info Row 3 */}
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-[#1CA39E] flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">🦠</span>
                </div>
              </div>
              <div>
                <span className="text-[#1CA39E] font-bold text-lg">Guard Against</span>
                <p className="text-[#222] text-base mt-1">HPV vaccination has been demonstrated to help reduce the risk of genital warts and certain HPV-related cancers by up to 80%-90%.</p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
        {/* Right: Heart SVG */}
        <ScrollAnimation direction="right" delay={0.6}>
          <div className="flex-1 flex justify-center items-center">
            <div className="w-64 h-64 md:w-80 md:h-80 bg-gray-100 rounded-full flex items-center justify-center">
              {/* 2D Heart SVG */}
              <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M80 140s-44-32-56-54C12 66 32 40 56 48c12 4 24 20 24 20s12-16 24-20c24-8 44 18 32 38-12 22-56 54-56 54z" fill="#F87171" stroke="#DC2626" strokeWidth="4"/>
              </svg>
            </div>
          </div>
        </ScrollAnimation>
      </div>
      {/* Call to Action */}
      <ScrollAnimation direction="up" delay={0.7}>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8">
          <button className='group border-2 border-[#1CA39E] text-[#1CA39E] px-6 py-2 rounded-md text-base font-semibold my-10 flex items-center gap-2 transition-colors duration-200 hover:bg-[#1CA39E] hover:text-white'>
            About Aram Medicals
            <span className='inline-block transition-transform duration-200 group-hover:translate-x-1'>
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </button>
          <span className="text-[#1CA39E] text-lg font-semibold ml-2">And find a Doctor near you</span>
        </div>
      </ScrollAnimation>
    </section>
  );
} 