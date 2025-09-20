import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import FloatingHearts from '../components/FloatingHearts';
import ScrollAnimation from '../components/ScrollAnimation';
import Testimonials from '../components/Testimonials/Testimonials';
import Footer from '../components/Footer';
import AwardsSection from '../components/About/AwardsSection';

const galleryImages = [
  'https://arammedicalfoundation.com/wp-content/uploads/2022/07/IMG_3243-2048x1365.jpg',
  'https://arammedicalfoundation.com/wp-content/uploads/2022/07/IMG_3247-2048x1365.jpg',
  'https://arammedicalfoundation.com/wp-content/uploads/2022/07/IMG_3293-2048x1365.jpg',
  'https://arammedicalfoundation.com/wp-content/uploads/2022/07/IMG_3242-2048x1365.jpg',
  'https://arammedicalfoundation.com/wp-content/uploads/2022/07/IMG_3295-2048x1366.jpg',
  'https://arammedicalfoundation.com/wp-content/uploads/2022/07/IMG_3292-2048x1365.jpg',
];



export default function AboutPage() {
  return (
    <>
      
      <div className="pt-28 pb-16 px-4 md:px-8 bg-white/70 backdrop-blur-sm min-h-[80vh] relative overflow-hidden">
        {/* Floating Hearts Background Animation */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <FloatingHearts />
        </div>
        
        <div className="relative z-10">
          {/* Hero Section */}
          <ScrollAnimation direction="up" delay={0.1}>
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 mb-16">
              <img
                src="https://arammedicalfoundation.com/wp-content/uploads/2022/06/WhatsApp-Image-2022-06-03-at-6.03.14-PM-150x150.jpeg"
                alt="Dr. Ranganathan R RM"
                className="w-40 h-40 rounded-full object-cover border-4 border-[#1aab3c] shadow-md mb-6 md:mb-0"
              />
              <div className="flex-1">
                <h1 className="text-4xl md:text-5xl font-bold mb-3" style={{ color: '#212878' }}>Dr. Ranganathan R RM</h1>
                <div className="font-semibold mb-3 text-xl" style={{ color: '#1aab3c' }}>MD (Gen Med), DM (Cardio), FSCAI (USA)</div>
                <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                  Welcome to <span style={{ color: '#1aab3c', fontWeight: 600 }}>Aram Medical Foundation</span>, your trusted center for comprehensive cardiac care in Pollachi. Our mission is to provide ethical, patient-centric, and world-class healthcare to the community.
                </p>
                <div className="flex flex-col gap-3 text-lg text-gray-700">
                  <div>
                    <span className="font-semibold" style={{ color: '#212878' }}>Address:</span> 91,91/1-91/4, New Scheme Road, Pollachi - 642 001
                  </div>
                  <div>
                    <span className="font-semibold" style={{ color: '#212878' }}>Phone:</span> <a href="tel:966741147" style={{ color: '#1aab3c' }} className="hover:underline">96674 1147</a>
                  </div>
                                    <div>
                    <span className="font-semibold" style={{ color: '#212878' }}>Landline:</span> <a href="tel:04259356999" style={{ color: '#1aab3c' }} className="hover:underline">04259 356999</a>
                  </div>
                  <div>
                    <span className="font-semibold" style={{ color: '#212878' }}>Email:</span> <a href="mailto:info@arammedicalfoundation.com" style={{ color: '#1aab3c' }} className="hover:underline">info@arammedicalfoundation.com</a>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>

      {/* Doctor's Background Section */}
      <ScrollAnimation direction="up" delay={0.2}>
        <div className="w-full mb-16 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold" style={{ color: '#212878' }}>Meet Dr. Ranganathan R RM</h2>
                <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                  <p>
                    Dr. Ranganathan R RM is a distinguished cardiologist with over <strong>10+ years of experience</strong> in cardiac care. He completed his medical education with specialization in cardiology at PSG Institute Of Medical Science and Research and has been serving the Pollachi community with dedication and expertise.
                  </p>
                  <p>
                    As the <strong>Director & Cardiologist</strong> at Aram Medical Foundation, Dr. Ranganathan leads a team of healthcare professionals committed to providing world-class cardiac care with a personal touch.
                  </p>
                  {/* <div className="bg-gradient-to-r from-[#e0ffe7] to-[#b2f5ea] p-6 rounded-xl">
                    <h3 className="font-bold text-xl mb-3" style={{ color: '#212878' }}>Specializations:</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>Interventional Cardiology</li>
                      <li>Preventive Cardiology</li>
                      <li>Cardiac Diagnostics</li>
                      <li>Emergency Cardiac Care</li>
                      <li>Cardiac Rehabilitation</li>
                    </ul>
                  </div> */}
                </div>
              </div>
              <div className="bg-gradient-to-br from-[#f8fafc] to-[#e3f0ff] p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-6" style={{ color: '#212878' }}>Professional Achievements</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#1aab3c] rounded-full flex items-center justify-center text-white font-bold p-8">10+</div>
                    <div>
                      <div className="font-semibold text-lg">Years of Experience</div>
                      <div className="text-gray-600">Dedicated cardiac care</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#1aab3c] rounded-full flex items-center justify-center text-white font-bold p-8">15,000+</div>
                    <div>
                      <div className="font-semibold text-lg">Patients Treated</div>
                      <div className="text-gray-600">Successful procedures</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#1aab3c] rounded-full flex items-center justify-center text-white font-bold p-8">24/7</div>
                    <div>
                      <div className="font-semibold text-lg">Emergency Care</div>
                      <div className="text-gray-600">Always available</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimation>

      {/* Our Story & Mission Section */}
      <ScrollAnimation direction="up" delay={0.3}>
        <div className="w-full mb-16 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Hero Section with Dynamic Background */}
            <div className="relative mb-16">
              {/* <div className="absolute inset-0 bg-gradient-to-r from-[#212878]/10 to-[#1aab3c]/10 rounded-3xl transform rotate-1"></div> */}
              {/* <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-12 md:p-16 shadow-2xl"> */}
                <div className="text-center">
                  <div className="inline-flex items-center gap-3 mb-6">
                    <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#1aab3c]"></div>
                    <span className="text-[#1aab3c] font-semibold text-lg uppercase tracking-wider">Our Journey</span>
                    <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#1aab3c]"></div>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#212878] to-[#212878] bg-clip-text text-transparent">
                    Our Story & Mission
                  </h2>
                  <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                    <span className="font-semibold" style={{ color: '#1aab3c' }}>Aram Medical Foundation</span> was established with a vision to provide accessible, high-quality Health care to the people of Pollachi and surrounding regions.
                  </p>
                </div>
              {/* </div> */}
            </div>
            
            {/* Core Values with Enhanced Animations */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="group bg-white p-8 rounded-2xl shadow-lg text-center transform transition-all duration-500 hover:scale-105 hover:shadow-2xl border border-gray-100">
                <div className="w-20 h-20 bg-gradient-to-br from-[#1aab3c] to-[#7a9f35] rounded-full flex items-center justify-center mx-auto mb-6 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                  <svg className="w-10 h-10 text-white transform transition-all duration-500 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 transform transition-all duration-500 group-hover:scale-105" style={{ color: '#212878' }}>Compassionate Care</h3>
                <p className="text-gray-700 leading-relaxed">We believe in treating every patient with empathy, respect, and personalized attention, ensuring each individual feels valued and cared for.</p>
              </div>
              
              <div className="group bg-white p-8 rounded-2xl shadow-lg text-center transform transition-all duration-500 hover:scale-105 hover:shadow-2xl border border-gray-100">
                <div className="w-20 h-20 bg-gradient-to-br from-[#1aab3c] to-[#7a9f35] rounded-full flex items-center justify-center mx-auto mb-6 transform transition-all duration-500 group-hover:scale-110 group-hover:-rotate-12">
                  <svg className="w-10 h-10 text-white transform transition-all duration-500 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 transform transition-all duration-500 group-hover:scale-105" style={{ color: '#212878' }}>Excellence</h3>
                <p className="text-gray-700 leading-relaxed">Committed to maintaining the highest standards of medical care and patient safety, continuously striving for perfection in everything we do.</p>
              </div>
              
              <div className="group bg-white p-8 rounded-2xl shadow-lg text-center transform transition-all duration-500 hover:scale-105 hover:shadow-2xl border border-gray-100">
                <div className="w-20 h-20 bg-gradient-to-br from-[#1aab3c] to-[#7a9f35] rounded-full flex items-center justify-center mx-auto mb-6 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                  <svg className="w-10 h-10 text-white transform transition-all duration-500 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 transform transition-all duration-500 group-hover:scale-105" style={{ color: '#212878' }}>Innovation</h3>
                <p className="text-gray-700 leading-relaxed">Continuously adopting the latest medical technologies and treatment approaches to provide cutting-edge cardiac care.</p>
              </div>
            </div>

            {/* Mission & Vision with Dynamic Layout */}
            <div className="relative">
              {/* <div className="absolute inset-0 bg-gradient-to-r from-[#212878]/5 to-[#1aab3c]/5 rounded-3xl transform -rotate-1"></div> */}
              <div className="relative bg-[#212878] rounded-3xl p-12 md:p-16 shadow-xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div className="group">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#1aab3c] to-[#7a9f35] rounded-full flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="text-3xl font-bold transform transition-all duration-500 group-hover:scale-105" style={{ color: 'white' }}>Our Mission</h3>
                    </div>
                    <p className="text-lg md:text-xl text-white leading-relaxed transform transition-all duration-500 group-hover:translate-x-2">
                      To provide comprehensive, patient-centered Health care that improves the quality of life for our community. We strive to make advanced cardiac treatments accessible while maintaining the highest standards of medical excellence and compassionate care.
                    </p>
                  </div>
                  
                  <div className="group">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#1aab3c] to-[#7a9f35] rounded-full flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 group-hover:-rotate-12">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </div>
                      <h3 className="text-3xl font-bold transform transition-all duration-500 group-hover:scale-105" style={{ color: 'white' }}>Our Vision</h3>
                    </div>
                    <p className="text-lg md:text-xl text-white leading-relaxed transform transition-all duration-500 group-hover:translate-x-2">
                      To be the leading Health care center in the region, known for our compassionate care, medical expertise, and commitment to community health. We aim to create a healthier future for generations to come through innovation and excellence.
                    </p>
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-[#1aab3c]/20 rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-6 h-6 bg-[#212878]/20 rounded-full"></div>
                <div className="absolute top-1/2 left-4 w-4 h-4 bg-[#1aab3c]/30 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimation>

      {/* Services Overview Section */}
      <ScrollAnimation direction="up" delay={0.4}>
        <div className="w-full mb-16 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" style={{ color: '#212878' }}>Comprehensive Cardiac Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[#1aab3c]">
                <h3 className="text-xl font-bold mb-3" style={{ color: '#212878' }}>Cardiac Diagnostics</h3>
                <p className="text-gray-700">Advanced diagnostic procedures including ECG, Echo, Stress Test, and Holter monitoring.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[#1aab3c]">
                <h3 className="text-xl font-bold mb-3" style={{ color: '#212878' }}>Interventional Cardiology</h3>
                <p className="text-gray-700">Angioplasty, Stenting, and other minimally invasive cardiac procedures.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[#1aab3c]">
                <h3 className="text-xl font-bold mb-3" style={{ color: '#212878' }}>Emergency Care</h3>
                <p className="text-gray-700">24/7 emergency cardiac services for heart attacks and acute conditions.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[#1aab3c]">
                <h3 className="text-xl font-bold mb-3" style={{ color: '#212878' }}>Preventive Cardiology</h3>
                <p className="text-gray-700">Risk assessment, lifestyle counseling, and preventive care for heart health.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[#1aab3c]">
                <h3 className="text-xl font-bold mb-3" style={{ color: '#212878' }}>Cardiac Rehabilitation</h3>
                <p className="text-gray-700">Comprehensive rehabilitation programs for post-cardiac procedure recovery.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[#1aab3c]">
                <h3 className="text-xl font-bold mb-3" style={{ color: '#212878' }}>Patient Education</h3>
                <p className="text-gray-700">Educational programs to help patients understand and manage their heart health.</p>
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimation>
      

      <AwardsSection/>
      {/* Testimonials Carousel */}
      <Testimonials/>

      {/* Gallery Section */}
      <ScrollAnimation direction="up" delay={0.7}>
        <div className="w-full mb-16 px-0">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center" style={{ color: '#212878' }}>Gallery</h2>
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
      </ScrollAnimation>

      {/* Book Appointment CTA */}
      <ScrollAnimation direction="up" delay={0.8}>
        <div className="max-w-2xl mx-auto text-center mt-16">
          <Link to="/contact">
            <button className="bg-[#1aab3c] text-white inline-block font-semibold px-8 py-3 rounded-lg text-lg shadow hover:bg-[#212878] hover:text-white transition-colors">Book an Appointment</button>
          </Link>
        </div>
      </ScrollAnimation>
        </div>
      </div>
      <Footer/>
    </>
  );
} 