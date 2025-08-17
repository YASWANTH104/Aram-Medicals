import React from 'react';
import { FaHeartbeat, FaUserMd, FaCross } from 'react-icons/fa';
import ScrollAnimation from '../components/ScrollAnimation';
import FloatingHearts from '../components/FloatingHearts';

// Medical Background Graphics Component
const MedicalBackgroundGraphics = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Medical Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-200 via-white to-green-200 opacity-60" />
      
      {/* Floating Medical Icons */}
      <div className="absolute top-16 left-16 w-12 h-12">
        <FaCross className="w-full h-full text-blue-600 animate-pulse opacity-80" />
      </div>
      <div className="absolute top-32 right-24 w-10 h-10">
        <FaHeartbeat className="w-full h-full text-red-600 animate-pulse opacity-80" style={{animationDelay: '1s'}} />
      </div>
              <div className="absolute top-48 left-1/3 w-8 h-8">
          <FaUserMd className="w-full h-full text-[#98C341] animate-pulse opacity-80" style={{animationDelay: '2s'}} />
        </div>
      <div className="absolute bottom-32 right-1/4 w-10 h-10">
        <FaCross className="w-full h-full text-purple-600 animate-pulse opacity-80" style={{animationDelay: '0.5s'}} />
      </div>
      <div className="absolute bottom-48 left-24 w-8 h-8">
        <FaHeartbeat className="w-full h-full text-pink-600 animate-pulse opacity-80" style={{animationDelay: '1.5s'}} />
      </div>
      
      {/* Medical Lines */}
      <div className="absolute top-1/3 left-0 w-40 h-2 bg-blue-500 opacity-80" />
      <div className="absolute top-2/3 right-0 w-32 h-2 bg-[#98C341] opacity-80" />
      <div className="absolute bottom-1/3 left-0 w-28 h-2 bg-purple-500 opacity-80" />
      
      {/* Pulse Rings */}
      <div className="absolute top-1/4 left-1/4 w-24 h-24 border-4 border-blue-600 rounded-full animate-ping opacity-70" />
      <div className="absolute bottom-1/4 right-1/4 w-20 h-20 border-4 border-[#98C341] rounded-full animate-ping opacity-70" style={{animationDelay: '1s'}} />
      
      {/* DNA Pattern */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 opacity-60">
        <div className="absolute top-0 left-1/2 w-2 h-12 bg-blue-500 transform -translate-x-1/2" />
        <div className="absolute top-6 left-1/2 w-2 h-12 bg-[#98C341] transform -translate-x-1/2" />
        <div className="absolute top-12 left-1/2 w-2 h-12 bg-purple-500 transform -translate-x-1/2" />
        <div className="absolute top-18 left-1/2 w-2 h-12 bg-pink-500 transform -translate-x-1/2" />
        <div className="absolute top-24 left-1/2 w-2 h-12 bg-cyan-500 transform -translate-x-1/2" />
        <div className="absolute top-30 left-1/2 w-2 h-12 bg-blue-500 transform -translate-x-1/2" />
        <div className="absolute top-36 left-1/2 w-2 h-12 bg-[#98C341] transform -translate-x-1/2" />
        <div className="absolute top-42 left-1/2 w-2 h-12 bg-purple-500 transform -translate-x-1/2" />
      </div>
      
      {/* ECG Wave */}
      <div className="absolute top-1/3 right-1/4 w-40 h-16 opacity-70">
        <svg viewBox="0 0 100 30" className="w-full h-full">
          <path d="M0,15 L10,15 L15,5 L25,25 L35,15 L45,15 L55,10 L65,20 L75,15 L85,15 L95,15 L100,15" 
                stroke="blue" strokeWidth="2" fill="none" />
        </svg>
      </div>
      
      {/* Medical Elements */}
      <div className="absolute top-1/6 left-1/6 w-10 h-10 opacity-70">
        <FaCross className="w-full h-full text-blue-500" />
      </div>
      <div className="absolute top-5/6 right-1/6 w-8 h-8 opacity-70">
        <FaCross className="w-full h-full text-[#98C341]" />
      </div>
      <div className="absolute bottom-1/6 left-1/3 w-6 h-6 opacity-70">
        <FaCross className="w-full h-full text-purple-500" />
      </div>
    </div>
  );
};

export default function CardiacCareServices() {
  return (
    <>
      
      <section className="relative w-full py-20 bg-white/70 backdrop-blur-sm overflow-x-hidden">
        {/* Floating Hearts Background Animation */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <FloatingHearts />
        </div>
        
        <div className="relative z-10">
          {/* Section Title */}
          <ScrollAnimation direction="up" delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-bold text-[#222] text-center mb-12">Some cancers and diseases caused by HPV</h2>
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
                                    <div className="w-8 h-8 rounded-full bg-[#98C341] flex items-center justify-center">
                  <span className="text-white font-bold text-lg">•</span>
                </div>
                  </div>
                  <span className="text-lg font-medium text-[#222] text-center whitespace-nowrap">{name}</span>
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
                                    <div className="w-16 h-16 rounded-full bg-[#98C341] flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">🛡️</span>
                </div>
                  </div>
                  <div>
                    <span className="text-[#98C341] font-bold text-xl">Chest Pain Clinic</span>
                    <p className="text-[#222] text-lg mt-2 leading-relaxed">HPV vaccination can act as the body's frontline defence, shielding it from HPV infection and other associated diseases and cancers.</p>
                  </div>
                </div>
              </ScrollAnimation>
              <ScrollAnimation direction="left" delay={0.4}>
                {/* Info Row 2 */}
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
                      <span className="text-[#98C341] text-2xl font-bold">🧪</span>
                    </div>
                  </div>
                  <div>
                    <span className="text-[#98C341] font-bold text-xl">Equip</span>
                    <p className="text-[#222] text-lg mt-2 leading-relaxed">As per studies, vaccination before HPV exposure, i.e., the first sexual contact, can help provide a high protection rate of more than 90%.</p>
                  </div>
                </div>
              </ScrollAnimation>
              <ScrollAnimation direction="left" delay={0.5}>
                {/* Info Row 3 */}
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 flex-shrink-0">
                                    <div className="w-16 h-16 rounded-full bg-[#98C341] flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">🦠</span>
                </div>
                  </div>
                  <div>
                    <span className="text-[#98C341] font-bold text-xl">Guard Against</span>
                    <p className="text-[#222] text-lg mt-2 leading-relaxed">HPV vaccination has been demonstrated to help reduce the risk of genital warts and certain HPV-related cancers by up to 80%-90%.</p>
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
              <button className='group border-2 border-[#98C341] text-[#98C341] px-8 py-3 rounded-md text-lg font-semibold my-10 flex items-center gap-2 transition-colors duration-200 hover:bg-[#98C341] hover:text-white'>
                About Aram Medicals
                <span className='inline-block transition-transform duration-200 group-hover:translate-x-1'>
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </button>
              <span className="text-[#98C341] text-xl font-semibold ml-2">And find a Doctor near you</span>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </>
  );
} 