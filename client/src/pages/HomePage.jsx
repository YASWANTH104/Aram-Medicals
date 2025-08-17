import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaHeartbeat, FaUserMd, FaAward, FaUsers, FaClock, FaStar, FaCross } from 'react-icons/fa';
import ScrollAnimation from '../components/ScrollAnimation';
import FloatingHearts from '../components/FloatingHearts';
import MedicalBackgroundGraphics from '../components/MedicalBackgroundGraphics';
import Testimonials from '../components/Testimonials';

// Medical Background Graphics Component


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

const faqData = [
  {
    question: "Is the vaccine safe to take?",
    answer: "As per clinical studies, the vaccine is generally well tolerated without risk of major adverse/side effects. Talk to your gynaecologist for further information on the right course for you."
  },
  {
    question: "Can HPV vaccination cause infertility?",
    answer: "No, HPV vaccination does not cause infertility. Extensive clinical studies have shown that the vaccine is safe and does not affect fertility. In fact, it helps prevent cervical cancer which can impact reproductive health."
  },
  {
    question: "What is the recommended age for HPV vaccination?",
    answer: "The HPV vaccine is recommended for girls and women aged 9-26 years. The ideal age is 11-12 years, but it can be given as early as age 9. Vaccination is most effective when given before exposure to HPV."
  },
  {
    question: "How many doses are required for HPV vaccination?",
    answer: "The number of doses depends on age: 2 doses for those aged 9-14 years (given 6-12 months apart), and 3 doses for those aged 15-26 years (given at 0, 1-2, and 6 months). Your doctor will determine the appropriate schedule."
  }
];

export default function HomePage() {
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const total = testimonials.length;
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef();
  
  // FAQ state management
  const [openFAQ, setOpenFAQ] = useState(0); // 0 = first FAQ open by default with minus sign
  
  // Ensure first FAQ is open on component mount
  useEffect(() => {
    setOpenFAQ(0);
  }, []);

  const prevTestimonial = () => {
    if (testimonialIdx > 0) {
      setTestimonialIdx(testimonialIdx - 1);
    }
  };
  const nextTestimonial = () => {
    if (testimonialIdx < 1) { // Only 2 positions: 0 and 1
      setTestimonialIdx(testimonialIdx + 1);
    }
  };

  useEffect(() => {
    if (!isHovered && testimonialIdx < 1) { // Only auto-advance if not at last position
      timerRef.current = setTimeout(() => {
        setTestimonialIdx((idx) => idx + 1);
      }, 4000);
    }
    return () => clearTimeout(timerRef.current);
  }, [testimonialIdx, isHovered]);

  return (
    <>
      
      <div className="relative min-h-[80vh] bg-white/70 backdrop-blur-sm flex flex-col md:flex-row items-center justify-between px-6 md:px-20 pt-32 pb-16 overflow-hidden z-10">
        {/* Floating Hearts Background Animation */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <FloatingHearts />
        </div>
        {/* Decorative background lines (optional, can be improved with SVG) */}
        <div className="absolute inset-0 pointer-events-none z-0">
          {/* You can use a background SVG or pattern here for the wavy lines */}
        </div>
        {/* Left: Button, Heading and Description */}
        <div className="relative z-10 flex-1 max-w-xl mb-12 md:mb-0">
          <ScrollAnimation direction="up" delay={0.1}>
            <Link to="/about">
              <button className="group border-2 border-[#222] text-[#222] px-8 py-3 rounded-full text-lg font-semibold flex items-center gap-2 transition-colors duration-200 hover:bg-[#222] hover:text-white focus:outline-none mb-8">
                About Aram Medicals
                <span className="inline-block transition-transform duration-200 group-hover:translate-x-2">
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </button>
            </Link>
          </ScrollAnimation>
          <ScrollAnimation direction="up" delay={0.2}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
              <span className="inline-block bg-[#2B2B4B] px-6 py-3 mb-3 w-fit">ARAM MEDICAL</span><br />
              <span className="inline-block bg-[#2B2B4B] px-6 py-3 mb-3 w-fit">FOUNDATION &</span><br />
              <span className="inline-block bg-[#2B2B4B] px-6 py-3 mb-3 w-fit">COMPREHENSIVE</span><br />
              <span className="inline-block bg-[#2B2B4B] px-6 py-3 mb-3 w-fit">CARDIAC CARE</span><br />
              <span className="inline-block bg-[#2B2B4B] px-6 py-3 w-fit">CENTER</span>
            </h1>
          </ScrollAnimation>
          <ScrollAnimation direction="up" delay={0.3}>
            <p className="text-xl md:text-2xl text-black font-medium leading-relaxed">
              We provide comprehensive Diagnostic and Therapeutic cardiac care facilities all under one roof. Our team of committed and well-trained health care personnel work round the clock under the guidance of our director and cardiologist <span className="font-bold">Dr Ranganathan R RM.</span>
            </p>
          </ScrollAnimation>
        </div>
        {/* Right: Vision and Mission Polygons */}
        <ScrollAnimation direction="right" delay={0.4}>
          <div className="relative z-10 flex flex-col md:flex-row gap-6 md:gap-8 flex-1 justify-end w-full md:w-auto">
            {/* Vision Polygon */}
            <div className="bg-[#A3C86D] text-[#2B2B4B] shadow-lg px-6 py-6 md:py-8 md:px-8 w-full md:w-80 clip-polygon-green mb-4 md:mb-0">
              <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
                <span className="inline-block w-5 h-5 bg-[#2B2B4B] rounded-full mr-3" />
                Our Vision
              </h3>
              <p className="text-lg leading-relaxed">
                Aram Medical Foundation focusses on Comprehensive Heart Health Care with state-of-the-art non invasive Cardiac Diagnostic Equipment. Our values center around an ethical and patient-centric approach. We also have a vision for the future with special emphasis on preventive and rehabilitative Cardiac care.
              </p>
            </div>
            {/* Mission Polygon */}
            <div className="bg-white text-[#2B2B4B] shadow-lg px-6 py-6 md:py-8 md:px-8 w-full md:w-80 clip-polygon-white border border-gray-200">
              <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
                <span className="inline-block w-5 h-5 bg-[#2B2B4B] rounded-full mr-3" />
                Our Mission
              </h3>
              <p className="text-lg leading-relaxed">
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
        {/* Cardiac Prevention & Care Section */}
        <div className="w-full px-4 md:px-8 py-16 bg-white/75 backdrop-blur-sm relative overflow-hidden">
          {/* Floating Hearts Background Animation */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <FloatingHearts />
          </div>

          <div className="max-w-6xl mx-auto relative z-10">
            {/* Main Title */}
            <ScrollAnimation direction="up" delay={0.1}>
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-8" style={{ color: '#212878' }}>
                  Some cardiac conditions and diseases we treat
                </h2>
                <ScrollAnimation direction="up" delay={0.2}>
                  <div className="flex flex-wrap justify-center gap-8 mb-12">
                    <div className="flex items-center gap-3">
                      <FaHeartbeat className="w-5 h-5 text-[#98C341]" />
                      <span className="font-medium text-gray-800 text-lg">Heart Failure</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <FaHeartbeat className="w-5 h-5 text-[#98C341]" />
                      <span className="font-medium text-gray-800 text-lg">Cardiac Arrest</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <FaHeartbeat className="w-5 h-5 text-[#98C341]" />
                      <span className="font-medium text-gray-800 text-lg">Stroke</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <FaHeartbeat className="w-5 h-5 text-[#98C341]" />
                      <span className="font-medium text-gray-800 text-lg">Kidney Disease</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <FaHeartbeat className="w-5 h-5 text-[#98C341]" />
                      <span className="font-medium text-gray-800 text-lg">Peripheral Artery Disease</span>
                    </div>
                  </div>
                </ScrollAnimation>
              </div>
            </ScrollAnimation>

            {/* Content Layout - Left Side Info, Right Side Visual */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Three Informational Sections */}
              <div className="space-y-8">
                {/* Protect */}
                <ScrollAnimation direction="left" delay={0.3}>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#98C341] rounded-full flex items-center justify-center flex-shrink-0">
                      <FaHeartbeat className="text-xl text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-4" style={{ color: '#98C341' }}>Protect</h3>
                      <p className="text-gray-700 leading-relaxed text-lg">
                        Cardiac care can act as the body's frontline defence, shielding it from heart disease and other associated conditions through early detection and preventive measures.
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>

                {/* Equip */}
                <ScrollAnimation direction="left" delay={0.4}>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#98C341] rounded-full flex items-center justify-center flex-shrink-0">
                      <FaUserMd className="text-xl text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-4" style={{ color: '#98C341' }}>Equip</h3>
                      <p className="text-gray-700 leading-relaxed text-lg">
                        As per studies, early cardiac screening and preventive care before the onset of heart disease can help provide a high protection rate of more than 90% against serious cardiac events.
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>

                {/* Guard Against */}
                <ScrollAnimation direction="left" delay={0.5}>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#98C341] rounded-full flex items-center justify-center flex-shrink-0">
                      <FaStar className="text-xl text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-4" style={{ color: '#98C341' }}>Guard Against</h3>
                      <p className="text-gray-700 leading-relaxed text-lg">
                        Cardiac care and lifestyle modifications have been demonstrated to help reduce the risk of heart attacks, strokes, and other cardiovascular diseases by up to 80%-90% when implemented early.
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>
              </div>

              {/* Right Side - Visual Element */}
              <ScrollAnimation direction="right" delay={0.6}>
                <div className="flex justify-center lg:justify-end">
                  <div className="relative">
                    <div className="w-64 h-64 bg-gradient-to-br from-[#1aab3c] to-[#212878] rounded-full flex items-center justify-center shadow-2xl">
                      <FaHeartbeat className="text-8xl text-white opacity-80" />
                    </div>
                    <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-[#1aab3c] to-[#212878] rounded-full flex items-center justify-center shadow-lg opacity-60">
                      <FaHeartbeat className="text-4xl text-white" />
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            </div>

            {/* Call to Action */}
            <ScrollAnimation direction="up" delay={0.7}>
              <div className="text-center mt-16">
                <h3 className="text-3xl font-bold mb-6" style={{ color: '#212878' }}>
                  Ask your cardiologist for comprehensive heart care.
                </h3>
                <Link to="/contact">
                  <button className="bg-[#98C341] text-white px-10 py-4 rounded-lg font-semibold text-xl shadow-lg hover:bg-[#7a9f35] transition-colors flex items-center gap-2 mx-auto">
                    Book Consultation
                    <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </Link>
                <p className="text-base text-gray-600 mt-4">
                  And find expert cardiac care near you
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </ScrollAnimation>
      
      <Testimonials/>

      {/* Achievements Section */}
      <ScrollAnimation direction="up" delay={0.7}>
        <div className="w-full px-4 md:px-8 py-16 bg-white/75 backdrop-blur-sm relative overflow-hidden">
          {/* Floating Hearts Background Animation */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <FloatingHearts />
          </div>
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#212878' }}>
                Our Achievements & Milestones
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Celebrating our journey of excellence in cardiac care and patient service
              </p>
            </div>

            {/* Statistics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <ScrollAnimation direction="up" delay={0.1} styleType="scale">
                <div className="text-center p-6 bg-[#212878] rounded-xl shadow-lg">
                  <div className="w-16 h-16 bg-[#98C341] rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaUsers className="text-2xl text-white" />
                  </div>
                  <div className="text-3xl font-bold mb-2 text-white">5000+</div>
                  <div className="text-sm font-medium text-white">Happy Patients</div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation direction="up" delay={0.2} styleType="scale">
                <div className="text-center p-6 bg-[#212878] rounded-xl shadow-lg">
                  <div className="w-16 h-16 bg-[#98C341] rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaHeartbeat className="text-2xl text-white" />
                  </div>
                  <div className="text-3xl font-bold mb-2 text-white">1000+</div>
                  <div className="text-sm font-medium text-white">Cardiac Procedures</div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation direction="up" delay={0.3} styleType="scale">
                <div className="text-center p-6 bg-[#212878] rounded-xl shadow-lg">
                  <div className="w-16 h-16 bg-[#98C341] rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaClock className="text-2xl text-white" />
                  </div>
                  <div className="text-3xl font-bold mb-2" style={{ color: 'white' }}>10+</div>
                  <div className="text-sm font-medium text-white">Years of Service</div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation direction="up" delay={0.4} styleType="scale">
                <div className="text-center p-6 bg-[#212878] rounded-xl shadow-lg">
                  <div className="w-16 h-16 bg-[#98C341] rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaStar className="text-2xl text-white" />
                  </div>
                  <div className="text-3xl font-bold mb-2 text-white">98%</div>
                  <div className="text-sm font-medium text-white">Patient Satisfaction</div>
                </div>
              </ScrollAnimation>
            </div>

            {/* Key Achievements */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <ScrollAnimation direction="left" delay={0.12} styleType="scale">
                <div className="bg-[#212878] rounded-2xl p-8 shadow-lg">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-[#98C341] rounded-full flex items-center justify-center">
                      <FaAward className="text-xl text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Excellence in Cardiac Care</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-white">
                    Recognized for outstanding cardiac care services with state-of-the-art diagnostic equipment and expert medical team. Our commitment to patient safety and quality care has earned us the trust of the community.
                  </p>
                </div>
              </ScrollAnimation>
              <ScrollAnimation direction="right" delay={0.22} styleType="rotate">
                <div className="bg-[#212878] rounded-2xl p-8 shadow-lg">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-[#98C341] rounded-full flex items-center justify-center">
                      <FaUserMd className="text-xl text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Expert Medical Team</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-white">
                    Led by Dr. Ranganathan R RM, our team of experienced cardiologists and healthcare professionals provide comprehensive cardiac care with a patient-centric approach, ensuring the best outcomes for every patient.
                  </p>
                </div>
              </ScrollAnimation>
            </div>

            {/* Milestones Timeline */}
            <div className="bg-[#212878] rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-center mb-8" style={{ color: '#212878' }}>Our Journey</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <ScrollAnimation direction="up" delay={0.13} styleType="scale">
                  <div className="text-center">
                                    <div className="w-16 h-16 bg-[#98C341] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-white">2014</span>
                </div>
                    <h4 className="font-bold mb-2 text-white">Foundation Established</h4>
                    <p className="text-sm text-white">Aram Medical Foundation was established with a vision to provide comprehensive cardiac care</p>
                  </div>
                </ScrollAnimation>
                <ScrollAnimation direction="down" delay={0.19} styleType="rotate">
                  <div className="text-center">
                                    <div className="w-16 h-16 bg-[#98C341] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-white">2018</span>
                </div>
                    <h4 className="font-bold mb-2 text-white">Advanced Equipment</h4>
                    <p className="text-sm text-white">Upgraded to state-of-the-art cardiac diagnostic and interventional equipment</p>
                  </div>
                </ScrollAnimation>
                <ScrollAnimation direction="left" delay={0.27} styleType="scale">
                  <div className="text-center">
                                    <div className="w-16 h-16 bg-[#98C341] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-white">2024</span>
                </div>
                    <h4 className="font-bold mb-2 text-white">Community Trust</h4>
                    <p className="text-sm text-white">Became the trusted cardiac care center serving thousands of patients in Pollachi</p>
                  </div>
                </ScrollAnimation>
              </div>
            </div>

            {/* Doctor's Achievements & Awards */}
            <ScrollAnimation direction="up" delay={0.6}>
              <div className="mt-12">
                <div>
                  <ScrollAnimation direction="left" delay={0.1}>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
                      <div className="flex-shrink-0">
                        <img
                          src="https://arammedicalfoundation.com/wp-content/uploads/2022/06/WhatsApp-Image-2022-06-03-at-6.03.14-PM-150x150.jpeg"
                          alt="Dr. Ranganathan R RM"
                          className="w-32 h-32 rounded-full object-cover border-4 border-[#98C341] shadow-md"
                        />
                      </div>
                      <div className="text-center md:text-left">
                        <h3 className="text-2xl font-bold mb-2" style={{ color: '#212878' }}>
                          Dr. Ranganathan R RM
                        </h3>
                        <p className="text-lg font-semibold text-[#98C341] mb-2">
                          MD (Gen Med), DM (Cardiology)
                        </p>
                        <p className="text-gray-700">
                          Director & Cardiologist at Aram Medical Foundation
                        </p>
                      </div>
                    </div>
                  </ScrollAnimation>

                  <ScrollAnimation direction="up" delay={0.2}>
                    <div className="text-center mb-8">
                      <h4 className="text-3xl md:text-4xl font-bold mb-4">
                        {/* <span className="text-gray-800">DR. RANGANATHAN</span><br /> */}
                        <span style={{ color: '#212878' }}>ACHIEVEMENTS</span>
                      </h4>
                      <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                        Talk to our expert cardiologist about your heart health today. His credentials and achievements are well-documented:
                      </p>
                    </div>
                  </ScrollAnimation>

                  {/* Three Column Layout */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Column 1: Academic Excellence */}
                    <ScrollAnimation direction="left" delay={0.3} styleType="scale">
                      <div className="relative">
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#1aab3c] rounded-full"></div>
                        <div className="pl-6">
                          <h5 className="text-xl font-bold mb-4" style={{ color: '#98C341' }}>Academic Excellence</h5>
                          <div className="space-y-3 text-gray-700">
                            <p className="text-sm leading-relaxed">
                              <strong>Gold Medallist Ophthalmology</strong> - Secured highest marks in ophthalmology during medical studies
                            </p>
                            <p className="text-sm leading-relaxed">
                              <strong>The Chellamal Saravana Mudaliar Prize</strong> - Securing Highest Mark in Final MBBS Exam
                            </p>
                          </div>
                        </div>
                      </div>
                    </ScrollAnimation>

                    {/* Column 2: Cardiology Expertise */}
                    <ScrollAnimation direction="up" delay={0.4} styleType="scale">
                      <div className="relative">
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#1aab3c] rounded-full"></div>
                        <div className="pl-6">
                          <h5 className="text-xl font-bold mb-4" style={{ color: '#98C341' }}>Cardiology Expertise</h5>
                          <div className="space-y-3 text-gray-700">
                            <p className="text-sm leading-relaxed">
                              <strong>Shri. B. Nagi Reddi Memorial Gold Medical</strong> - D.M Cardiology excellence award
                            </p>
                            <p className="text-sm leading-relaxed">
                              <strong>Alathoor Narendra Memorial Endowment Gold Medal</strong> - D.M Cardiology achievement
                            </p>
                          </div>
                        </div>
                      </div>
                    </ScrollAnimation>

                    {/* Column 3: Research & Innovation */}
                    <ScrollAnimation direction="right" delay={0.5} styleType="scale">
                      <div className="relative">
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#1aab3c] rounded-full"></div>
                        <div className="pl-6">
                          <h5 className="text-xl font-bold mb-4" style={{ color: '#98C341' }}>Research & Innovation</h5>
                          <div className="space-y-3 text-gray-700">
                            <p className="text-sm leading-relaxed">
                              <strong>Dr Muthulakshmi Reddy Grant Award</strong> - Best Research Activity for Role of Plasma 11-6
                            </p>
                            <p className="text-sm leading-relaxed">
                              <strong>10+ Years Experience</strong> - Comprehensive cardiac care and patient management
                            </p>
                          </div>
                        </div>
                      </div>
                    </ScrollAnimation>
                  </div>

                  {/* CTA Section */}
                  <ScrollAnimation direction="up" delay={0.6}>
                    <div className="text-center mt-12">
                                        <Link to="/contact">
                    <button className="bg-[#98C341] text-white px-8 py-3 rounded-lg font-semibold text-lg shadow-lg hover:bg-[#7a9f35] transition-colors">
                      Book Cardiac Consultation
                    </button>
                  </Link>
                    </div>
                  </ScrollAnimation>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </ScrollAnimation>

      {/* HPV Prevention Section - Content Only */}
      <ScrollAnimation direction="up" delay={0.8}>
        <div className="w-full bg-white/75 backdrop-blur-sm py-16 relative overflow-hidden">
          {/* Floating Hearts Background Animation */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <FloatingHearts />
          </div>
          <div className="w-full px-4 md:px-8 lg:px-16 xl:px-24 relative z-10">
            {/* Main Content */}
            <div className="w-full">
              {/* Main Heading */}
              <ScrollAnimation direction="up" delay={0.1}>
                <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 leading-tight w-3/4">
                  Major global and Indian medical bodies recommend HPV vaccination for girls aged 9+
                </h2>
              </ScrollAnimation>



              {/* Medical Bodies List */}
              <ScrollAnimation direction="up" delay={0.2}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 w-full">
                  {/* Column 1 */}
                  <ScrollAnimation direction="left" delay={0.3}>
                    <div className="space-y-6">
                      <div className="flex items-start gap-3 h-12 px-6 py-3">
                        <div className="w-5 h-5 bg-[#1aab3c] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-xl text-gray-800 leading-tight flex-1">Indian Academy of Pediatrics (IAP)</span>
                      </div>
                      <div className="flex items-start gap-3 h-12 px-6 py-3">
                        <div className="w-5 h-5 bg-[#1aab3c] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-xl text-gray-800 leading-tight flex-1">Centers for Disease Control and Prevention (CDC)</span>
                      </div>
                    </div>
                  </ScrollAnimation>

                  {/* Column 2 */}
                  <ScrollAnimation direction="up" delay={0.4}>
                    <div className="space-y-6">
                      <div className="flex items-start gap-3 h-12 px-6 py-3">
                        <div className="w-5 h-5 bg-[#1aab3c] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-xl text-gray-800 leading-tight flex-1">Federation of Obstetric and Gynecological Societies of India (FOGSI)</span>
                      </div>
                      <div className="flex items-start gap-3 h-12 px-6 py-3">
                        <div className="w-5 h-5 bg-[#1aab3c] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-xl text-gray-800 leading-tight flex-1">American College of Obstetricians and Gynecologists (ACOG)</span>
                      </div>
                    </div>
                  </ScrollAnimation>

                  {/* Column 3 */}
                  <ScrollAnimation direction="right" delay={0.5}>
                    <div className="space-y-6">
                      <div className="flex items-start gap-3 h-12 px-6 py-3">
                        <div className="w-5 h-5 bg-[#1aab3c] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-xl text-gray-800 leading-tight flex-1">World Health Organization (WHO)</span>
                      </div>
                    </div>
                  </ScrollAnimation>
                </div>
              </ScrollAnimation>

              {/* Vaccine Section */}
              <ScrollAnimation direction="up" delay={0.6}>
                <div className="w-full mt-24">
                  <ScrollAnimation direction="up" delay={0.1}>
                    <h3 className="text-5xl font-bold my-8 text-gray-900">
                      Which HPV vaccines are available in India?
                    </h3>
                  </ScrollAnimation>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <ScrollAnimation direction="left" delay={0.2} styleType="scale">
                      <div className="relative">
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#1aab3c] rounded-full"></div>
                        <div className="pl-6">
                          <h4 className="text-2xl font-bold mb-2 text-gray-900">
                            Nine-valent HPV Vaccine
                          </h4>
                          <p className="text-xl text-gray-700 leading-relaxed">
                            Nonavalent vaccine is expected to help prevent ~98% of cervical cancers.
                          </p>
                        </div>
                      </div>
                    </ScrollAnimation>

                    <ScrollAnimation direction="right" delay={0.3} styleType="scale">
                      <div className="relative">
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#1aab3c] rounded-full"></div>
                        <div className="pl-6">
                          <h4 className="text-2xl font-bold mb-2 text-gray-900">
                            Quadrivalent HPV Vaccine
                          </h4>
                          <p className="text-xl text-gray-700 leading-relaxed">
                            Quadrivalent HPV is expected to help prevent ~83% of cervical cancers.
                          </p>
                        </div>
                      </div>
                    </ScrollAnimation>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </ScrollAnimation>

      {/* HPV Prevention & FAQs Section */}
      <ScrollAnimation direction="up" delay={0.9}>
        <div className="w-full bg-white/75 backdrop-blur-sm py-16 relative overflow-hidden">
          {/* Floating Hearts Background Animation */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <FloatingHearts />
          </div>
          <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left: Safeguard Section */}
              <ScrollAnimation direction="left" delay={0.1}>
                <div className="relative">
                  {/* Decorative virus/cell graphics */}
                  <div className="absolute -top-8 -left-8 w-32 h-32 opacity-20">
                    <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 rounded-full transform rotate-12"></div>
                  </div>
                  <div className="absolute -bottom-12 -right-12 w-24 h-24 opacity-15">
                    <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 rounded-full transform -rotate-6"></div>
                  </div>
                  
                  <div className="relative z-10">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                      Safeguard yourself against certain HPV-related cancers
                    </h2>
                    <p className="text-xl text-gray-700 leading-relaxed mb-8">
                      Early intervention can lead to better HPV prevention. Talk to your gynaecologist about HPV vaccination and screening today.
                    </p>
                    <Link to="/contact">
                      <button className="bg-[#1aab3c] text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:bg-[#212878] transition-colors flex items-center gap-3">
                        Chat to book a free tele-consultation
                        <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </Link>
                  </div>
                </div>
              </ScrollAnimation>

              {/* Right: Professional Colorful Heart Graphic */}
              <ScrollAnimation direction="right" delay={0.2} styleType="scale">
                <div className="flex justify-center lg:justify-end">
                  <div className="relative">
                    {/* Main Heart Container */}
                    <div className="w-80 h-80 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-full flex items-center justify-center shadow-2xl border-4 border-gradient-to-r from-blue-200 via-purple-200 to-pink-200">
                      {/* Central Heart */}
                      <div className="relative flex items-center justify-center">
                        <FaHeartbeat className="text-9xl text-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-pulse" />
                        
                        {/* Colorful Pulse Rings - Perfectly Centered */}
                        <div className="absolute w-40 h-40 border-4 border-blue-400 rounded-full animate-ping opacity-30"></div>
                        <div className="absolute w-40 h-40 border-4 border-purple-400 rounded-full animate-ping opacity-25" style={{animationDelay: '0.3s'}}></div>
                        <div className="absolute w-40 h-40 border-4 border-pink-400 rounded-full animate-ping opacity-20" style={{animationDelay: '0.6s'}}></div>
                      </div>
                      
                      {/* Medical Cross */}
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl border-4 border-gradient-to-r from-blue-500 to-purple-500">
                        <div className="w-10 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                        <div className="absolute w-1 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                      </div>
                      
                      {/* Floating Medical Elements */}
                      <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                        <FaHeartbeat className="text-white text-lg" />
                      </div>
                      <div className="absolute -bottom-6 -left-6 w-14 h-14 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                        <FaUserMd className="text-white text-base" />
                      </div>
                      <div className="absolute top-1/2 -left-10 w-12 h-12 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center shadow-lg">
                        <FaStar className="text-white text-sm" />
                      </div>
                      <div className="absolute top-1/2 -right-10 w-12 h-12 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                        <FaAward className="text-white text-sm" />
                      </div>
                    </div>
                    
                    {/* Background Decorative Elements */}
                    <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-cyan-300 to-cyan-500 rounded-full opacity-60"></div>
                    <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-gradient-to-br from-violet-300 to-violet-500 rounded-full opacity-60"></div>
                    <div className="absolute top-1/4 -right-8 w-4 h-4 bg-gradient-to-br from-rose-300 to-rose-500 rounded-full opacity-60"></div>
                  </div>
                </div>
              </ScrollAnimation>
            </div>

            {/* FAQs Section */}
            <ScrollAnimation direction="up" delay={0.3}>
              <div className="mt-20">
                <div className="max-w-4xl mx-auto">
                  <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
                    Frequently Asked Questions
                  </h3>
                  
                  <div className="space-y-0">
                    {faqData.map((faq, index) => (
                      <ScrollAnimation key={index} direction="up" delay={0.4 + index * 0.1}>
                        <div className="relative">
                          <div 
                            className="py-6 cursor-pointer"
                            onClick={() => setOpenFAQ(openFAQ === index ? -1 : index)}
                          >
                            <div className="flex items-center justify-between">
                              <h4 className="text-xl font-bold text-[#1aab3c] pr-4">
                                {faq.question}
                              </h4>
                              <div className="w-6 h-6 flex items-center justify-center transition-transform duration-300">
                                {openFAQ === index ? (
                                  <svg className="w-4 h-4 text-[#1aab3c]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
                                  </svg>
                                ) : (
                                  <svg className="w-4 h-4 text-[#1aab3c]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                  </svg>
                                )}
                              </div>
                            </div>
                            
                            {/* Smooth Expand/Collapse Animation */}
                            <div 
                              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                openFAQ === index ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
                              }`}
                            >
                              <p className="text-gray-700 leading-relaxed pb-2">
                                {faq.answer}
                              </p>
                            </div>
                          </div>
                          {/* Horizontal line separator */}
                          {index < faqData.length - 1 && (
                            <div className="h-px bg-gray-300 w-full"></div>
                          )}
                        </div>
                      </ScrollAnimation>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <ScrollAnimation direction="up" delay={0.8}>
                    <div className="text-center mt-12">
                      <Link to="/contact">
                        <button className="bg-[#1aab3c] text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:bg-[#212878] transition-colors flex items-center gap-3 mx-auto">
                          Go to FAQs
                          <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </Link>
                    </div>
                  </ScrollAnimation>
                  
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </ScrollAnimation>
      
    </>
  );
} 