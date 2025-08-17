import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaHeartbeat, FaUserMd, FaLungs, FaBrain, FaStethoscope, FaHospitalAlt, FaChevronRight, FaStar, FaClock, FaUserShield, FaTimes, FaCross } from 'react-icons/fa';
import ScrollAnimation from '../components/ScrollAnimation';
import FloatingHearts from '../components/FloatingHearts';
import MedicalBackgroundGraphics from '../components/MedicalBackgroundGraphics';

// Medical Background Graphics Component



const services = [
  {
    name: 'Cardic Care',
    icon: <FaHeartbeat className="text-4xl text-[#98C341]" />,
    desc: 'Comprehensive heart health diagnostics, treatment, and rehabilitation by expert cardiologists.',
    details: 'Our Cardiac Care department offers advanced diagnostics, interventional procedures, and rehabilitation for a wide range of heart conditions. Our team is led by experienced cardiologists and supported by state-of-the-art technology.'
  },
  {
    name: 'General Medicine',
    icon: <FaStethoscope className="text-4xl text-[#98C341]" />,
    desc: 'Primary care, preventive medicine, and management of chronic diseases for all ages.',
    details: 'Our General Medicine team provides comprehensive care for acute and chronic illnesses, preventive health checkups, and ongoing management for all age groups.'
  },
  {
    name: 'Pulmonology',
    icon: <FaLungs className="text-4xl text-[#98C341]" />,
    desc: 'Advanced care for respiratory and lung conditions, including asthma, COPD, and more.',
    details: 'Our Pulmonology department specializes in the diagnosis and treatment of respiratory diseases, including asthma, COPD, sleep disorders, and more.'
  },
  {
    name: 'Psychiatry',
    icon: <FaBrain className="text-4xl text-[#98C341]" />,
    desc: 'Mental health support, counseling, and treatment for a range of psychiatric conditions.',
    details: 'Our Psychiatry team offers compassionate care for mental health, including counseling, therapy, and medication management for a variety of psychiatric conditions.'
  },
  {
    name: 'General Surgery',
    icon: <FaHospitalAlt className="text-4xl text-[#98C341]" />,
    desc: 'Expert surgical care for a variety of conditions, with a focus on safety and recovery.',
    details: 'Our General Surgery department provides a wide range of surgical procedures, focusing on patient safety, minimally invasive techniques, and rapid recovery.'
  },
  {
    name: 'Specialist Consultations',
    icon: <FaUserMd className="text-4xl text-[#98C341]" />,
    desc: 'Access to a wide range of medical specialists for personalized, expert advice.',
    details: 'We offer consultations with specialists across various fields, ensuring you receive expert advice and personalized care for your health needs.'
  },
];

const features = [
  { icon: <FaStar className="text-2xl text-[#98C341]" />, label: 'Expert Doctors' },
  { icon: <FaClock className="text-2xl text-[#98C341]" />, label: '24x7 Emergency Care' },
  { icon: <FaUserShield className="text-2xl text-[#98C341]" />, label: 'Patient-Centric Approach' },
  { icon: <FaHospitalAlt className="text-2xl text-[#98C341]" />, label: 'Modern Facilities' },
];

export default function ServicesPage() {
  const [modalIdx, setModalIdx] = useState(null);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
  const [sectionCenter, setSectionCenter] = useState({ top: 0, left: 0 });
  const [isModalAnimating, setIsModalAnimating] = useState(false);
  const servicesSectionRef = useRef(null);

  // Trigger animation after modal position is set
  useEffect(() => {
    if (modalIdx !== null) {
      // Calculate section center
      if (servicesSectionRef.current) {
        const rect = servicesSectionRef.current.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        setSectionCenter({
          top: rect.top + scrollTop + rect.height / 2,
          left: rect.left + rect.width / 2
        });
      }
      // Small delay to ensure position is set before animation starts
      setTimeout(() => setIsModalAnimating(true), 50);
    } else {
      setIsModalAnimating(false);
    }
  }, [modalIdx]);

  return (
    <>
      <div className="pt-28 pb-8 bg-white/70 backdrop-blur-sm min-h-[80vh] w-full relative overflow-hidden">
        {/* Floating Hearts Background Animation */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <FloatingHearts />
        </div>
        
        <div className="relative z-10">
          {/* Hero Section */}
      <ScrollAnimation direction="up" delay={0.1}>
        <div className="w-full text-center mb-16 px-4 md:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-[#212878] bg-clip-text text-transparent">Our Services</h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">Experience world-class healthcare with a compassionate touch. Our multidisciplinary team offers a full spectrum of medical and surgical services, tailored to your needs.</p>
        </div>
      </ScrollAnimation>

      {/* Services Grid */}
      <div ref={servicesSectionRef} className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4 md:px-8 mb-20">
        {services.map((service, idx) => (
          <ScrollAnimation key={service.name} direction="up" delay={0.15 + idx * 0.1}>
            <div
              className="group bg-gradient-to-br from-[#f8fafc] to-[#e3f0ff] rounded-2xl shadow-xl p-8 flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl relative overflow-hidden"
            >
              <div className="mb-6 z-10">{service.icon}</div>
              <h3 className="text-3xl font-bold mb-4" style={{ color: '#212878' }}>{service.name}</h3>
              <p className="text-gray-700 mb-6 z-10 text-lg leading-relaxed">{service.desc}</p>
              <div className="flex gap-3 mt-auto z-10">
                <Link to="/contact">
                  <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#98C341] text-white font-semibold shadow hover:bg-[#7a9f35] transition-colors text-lg">
                    Book Now <FaChevronRight />
                  </button>
                </Link>
                <button className="flex items-center gap-2 px-6 py-3 rounded-full border border-[#98C341] text-[#98C341] font-semibold shadow hover:bg-[#7a9f35] hover:text-white transition-colors text-lg" onClick={(e) => {
                  const rect = e.currentTarget.closest('.group').getBoundingClientRect();
                  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                  setModalPosition({
                    top: rect.top + scrollTop + rect.height / 2,
                    left: rect.left + rect.width / 2
                  });
                  setModalIdx(idx);
                }}>
                  Learn More
                </button>
              </div>
              {/* Animated Gradient Overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-[#1aab3c]/10 to-[#212878]/10 pointer-events-none" />
            </div>
          </ScrollAnimation>
        ))}
      </div>

      {/* Modal for Service Details */}
      {modalIdx !== null && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50">
          <div 
            className="bg-white rounded-2xl shadow-2xl p-8 max-w-lg w-full relative mx-4"
            style={{
              position: 'absolute',
              top: isModalAnimating ? `${sectionCenter.top}px` : `${modalPosition.top}px`,
              left: isModalAnimating ? `${sectionCenter.left}px` : `${modalPosition.left}px`,
              transform: 'translate(-50%, -50%)',
              maxHeight: '80vh',
              overflowY: 'auto',
              transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
              opacity: isModalAnimating ? 1 : 0,
              scale: isModalAnimating ? 1 : 0.8
            }}
          >
            <button className="absolute top-4 right-4 text-2xl text-gray-400 hover:text-[#1aab3c]" onClick={() => setModalIdx(null)}><FaTimes /></button>
            <div className="flex flex-col items-center text-center">
              <div className="mb-6">{services[modalIdx].icon}</div>
              <h3 className="text-4xl font-bold mb-4" style={{ color: '#212878' }}>{services[modalIdx].name}</h3>
              <p className="text-gray-700 text-lg leading-relaxed">{services[modalIdx].details}</p>
              <Link to="/contact">
                <button className="inline-block font-semibold px-8 py-3 rounded-lg text-lg shadow hover:bg-[#7a9f35] hover:text-white transition-colors" style={{ backgroundColor: '#98C341', color: 'white' }}>Book Appointment</button>
              </Link>
            </div>
          </div>
          <style>{`
            .animate-fade-in { animation: fadeIn 0.2s ease; }
            @keyframes fadeIn { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }
          `}</style>
        </div>
      )}

      {/* Why Choose Us Section */}
      <ScrollAnimation direction="up" delay={0.2}>
        <div className="w-full text-center mb-20 px-4 md:px-8 py-16 rounded-2xl">
          <h2 className="text-2xl md:text-4xl font-bold mb-6" style={{ color: '#212878' }}>Why Choose Aram Medical Foundation?</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {features.map((f, idx) => (
              <div key={idx} className="flex flex-col items-center bg-white rounded-xl shadow-lg p-6 min-w-[180px] hover:shadow-xl transition-shadow duration-300">
                {f.icon}
                <span className="mt-3 font-semibold text-lg text-[#212878]">{f.label}</span>
              </div>
            ))}
          </div>
        </div>
      </ScrollAnimation>
      
      {/* Cardiac Care Services Section */}
      <ScrollAnimation direction="up" delay={0.3}>
        <div className="w-full px-4 md:px-8 mb-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#212878' }}>
              Cardiac Care Services
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Comprehensive heart health diagnostics, treatment, and rehabilitation under the expert guidance of Dr. Ranganathan R RM
            </p>
          </div>

          {/* Cardiac Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-[#1aab3c]">
              <FaHeartbeat className="text-3xl text-[#1aab3c] mb-4" />
              <h4 className="text-xl font-bold mb-2" style={{ color: '#212878' }}>Cardiac Diagnostics</h4>
              <p className="text-gray-700 text-sm">
                Advanced diagnostic procedures including ECG, Echo, Stress Test, and Holter monitoring
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-[#1aab3c]">
              <FaStethoscope className="text-3xl text-[#1aab3c] mb-4" />
              <h4 className="text-xl font-bold mb-2" style={{ color: '#212878' }}>Interventional Cardiology</h4>
              <p className="text-gray-700 text-sm">
                Angioplasty, Stenting, and other minimally invasive cardiac procedures
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-[#1aab3c]">
              <FaHospitalAlt className="text-3xl text-[#1aab3c] mb-4" />
              <h4 className="text-xl font-bold mb-2" style={{ color: '#212878' }}>Emergency Cardiac Care</h4>
              <p className="text-gray-700 text-sm">
                24/7 emergency cardiac services for heart attacks and acute cardiac conditions
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-[#1aab3c]">
              <FaUserMd className="text-3xl text-[#1aab3c] mb-4" />
              <h4 className="text-xl font-bold mb-2" style={{ color: '#212878' }}>Preventive Cardiology</h4>
              <p className="text-gray-700 text-sm">
                Risk assessment, lifestyle counseling, and preventive care for heart health
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-[#1aab3c]">
              <FaHeartbeat className="text-3xl text-[#1aab3c] mb-4" />
              <h4 className="text-xl font-bold mb-2" style={{ color: '#212878' }}>Cardiac Rehabilitation</h4>
              <p className="text-gray-700 text-sm">
                Comprehensive rehabilitation programs for post-cardiac procedure recovery
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-[#1aab3c]">
              <FaUserShield className="text-3xl text-[#1aab3c] mb-4" />
              <h4 className="text-xl font-bold mb-2" style={{ color: '#212878' }}>Patient-Centric Care</h4>
              <p className="text-gray-700 text-sm">
                Personalized treatment plans with compassionate care and ongoing support
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-[#212878] text-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2">Contact Us for Cardiac Care</h3>
              <p className="text-lg opacity-90">Get expert cardiac care at Aram Medical Foundation</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <FaHospitalAlt className="text-xl" />
                </div>
                <h4 className="font-semibold mb-2">Address</h4>
                <p className="text-sm opacity-90">
                  91, 91/1-91/4, New Scheme Road<br />
                  Pollachi - 642 001
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <FaClock className="text-xl" />
                </div>
                <h4 className="font-semibold mb-2">Phone</h4>
                <p className="text-sm opacity-90">
                  <a href="tel:+918667411477" className="hover:underline">+91 86674 11477</a>
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <FaUserMd className="text-xl" />
                </div>
                <h4 className="font-semibold mb-2">Email</h4>
                <p className="text-sm opacity-90">
                  <a href="mailto:info@arammedicalfoundation.com" className="hover:underline">
                    info@arammedicalfoundation.com
                  </a>
                </p>
              </div>
            </div>
            
            <div className="text-center mt-6">
              <Link to="/contact">
                <button className="bg-[#98C341] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#7a9f35] transition-colors">
                  Book Cardiac Consultation
                </button>
              </Link>
            </div>
          </div>
        </div>
      </ScrollAnimation>
        </div>
      </div>
    </>
  );
} 