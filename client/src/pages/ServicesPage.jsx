import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHeartbeat, FaUserMd, FaLungs, FaBrain, FaStethoscope, FaHospitalAlt, FaChevronRight, FaStar, FaClock, FaUserShield, FaTimes } from 'react-icons/fa';
import ScrollAnimation from '../components/ScrollAnimation';

const services = [
  {
    name: 'Cardic Care',
    icon: <FaHeartbeat className="text-4xl text-[#1aab3c]" />,
    desc: 'Comprehensive heart health diagnostics, treatment, and rehabilitation by expert cardiologists.',
    details: 'Our Cardiac Care department offers advanced diagnostics, interventional procedures, and rehabilitation for a wide range of heart conditions. Our team is led by experienced cardiologists and supported by state-of-the-art technology.'
  },
  {
    name: 'General Medicine',
    icon: <FaStethoscope className="text-4xl text-[#1aab3c]" />,
    desc: 'Primary care, preventive medicine, and management of chronic diseases for all ages.',
    details: 'Our General Medicine team provides comprehensive care for acute and chronic illnesses, preventive health checkups, and ongoing management for all age groups.'
  },
  {
    name: 'Pulmonology',
    icon: <FaLungs className="text-4xl text-[#1aab3c]" />,
    desc: 'Advanced care for respiratory and lung conditions, including asthma, COPD, and more.',
    details: 'Our Pulmonology department specializes in the diagnosis and treatment of respiratory diseases, including asthma, COPD, sleep disorders, and more.'
  },
  {
    name: 'Psychiatry',
    icon: <FaBrain className="text-4xl text-[#1aab3c]" />,
    desc: 'Mental health support, counseling, and treatment for a range of psychiatric conditions.',
    details: 'Our Psychiatry team offers compassionate care for mental health, including counseling, therapy, and medication management for a variety of psychiatric conditions.'
  },
  {
    name: 'General Surgery',
    icon: <FaHospitalAlt className="text-4xl text-[#1aab3c]" />,
    desc: 'Expert surgical care for a variety of conditions, with a focus on safety and recovery.',
    details: 'Our General Surgery department provides a wide range of surgical procedures, focusing on patient safety, minimally invasive techniques, and rapid recovery.'
  },
  {
    name: 'Specialist Consultations',
    icon: <FaUserMd className="text-4xl text-[#1aab3c]" />,
    desc: 'Access to a wide range of medical specialists for personalized, expert advice.',
    details: 'We offer consultations with specialists across various fields, ensuring you receive expert advice and personalized care for your health needs.'
  },
];

const features = [
  { icon: <FaStar className="text-2xl text-[#1aab3c]" />, label: 'Expert Doctors' },
  { icon: <FaClock className="text-2xl text-[#1aab3c]" />, label: '24x7 Emergency Care' },
  { icon: <FaUserShield className="text-2xl text-[#1aab3c]" />, label: 'Patient-Centric Approach' },
  { icon: <FaHospitalAlt className="text-2xl text-[#1aab3c]" />, label: 'Modern Facilities' },
];

export default function ServicesPage() {
  const [modalIdx, setModalIdx] = useState(null);

  return (
    <div className="pt-28 pb-16 bg-white min-h-[80vh] w-full">
      {/* Hero Section */}
      <ScrollAnimation direction="up" delay={0.1}>
        <div className="w-full text-center mb-16 px-4 md:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-[#1aab3c] to-[#0833a8] bg-clip-text text-transparent">Our Services</h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">Experience world-class healthcare with a compassionate touch. Our multidisciplinary team offers a full spectrum of medical and surgical services, tailored to your needs.</p>
        </div>
      </ScrollAnimation>

      {/* Services Grid */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4 md:px-8 mb-20">
        {services.map((service, idx) => (
          <ScrollAnimation key={service.name} direction="up" delay={0.15 + idx * 0.1}>
            <div
              className="group bg-gradient-to-br from-[#f8fafc] to-[#e3f0ff] rounded-2xl shadow-xl p-8 flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl relative overflow-hidden"
            >
              <div className="mb-4 z-10">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-2" style={{ color: '#0833a8' }}>{service.name}</h3>
              <p className="text-gray-700 mb-4 z-10">{service.desc}</p>
              <div className="flex gap-2 mt-auto z-10">
                <Link to="/contact">
                  <button className="flex items-center gap-2 px-5 py-2 rounded-full bg-[#1aab3c] text-white font-semibold shadow hover:bg-[#0833a8] transition-colors">
                    Book Now <FaChevronRight />
                  </button>
                </Link>
                <button className="flex items-center gap-2 px-5 py-2 rounded-full border border-[#1aab3c] text-[#1aab3c] font-semibold shadow hover:bg-[#0833a8] hover:text-white transition-colors" onClick={() => setModalIdx(idx)}>
                  Learn More
                </button>
              </div>
              {/* Animated Gradient Overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-[#1aab3c]/10 to-[#0833a8]/10 pointer-events-none" />
            </div>
          </ScrollAnimation>
        ))}
      </div>

      {/* Modal for Service Details */}
      {modalIdx !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-lg w-full relative animate-fade-in">
            <button className="absolute top-4 right-4 text-2xl text-gray-400 hover:text-[#1aab3c]" onClick={() => setModalIdx(null)}><FaTimes /></button>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4">{services[modalIdx].icon}</div>
              <h3 className="text-3xl font-bold mb-2" style={{ color: '#0833a8' }}>{services[modalIdx].name}</h3>
              <p className="text-gray-700 mb-4 text-lg">{services[modalIdx].details}</p>
              <Link to="/contact">
                <button className="inline-block font-semibold px-8 py-3 rounded-lg text-lg shadow hover:bg-[#0833a8] hover:text-white transition-colors" style={{ backgroundColor: '#1aab3c', color: '#0833a8' }}>Book Appointment</button>
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
        <div className="w-full text-center mb-20 px-4 md:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: '#0833a8' }}>Why Choose Aram Medical Foundation?</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {features.map((f, idx) => (
              <div key={idx} className="flex flex-col items-center bg-gradient-to-br from-[#f8fafc] to-[#e3f0ff] rounded-xl shadow p-6 min-w-[180px]">
                {f.icon}
                <span className="mt-3 font-semibold text-lg text-[#0833a8]">{f.label}</span>
              </div>
            ))}
          </div>
        </div>
      </ScrollAnimation>

      {/* Book Appointment CTA */}
      <ScrollAnimation direction="up" delay={0.3}>
        <div className="w-full text-center mt-16 px-4 md:px-8">
          <Link to="/contact">
            <button className="inline-block font-semibold px-8 py-3 rounded-lg text-lg shadow hover:bg-[#0833a8] hover:text-white transition-colors" style={{ backgroundColor: '#1aab3c', color: '#0833a8' }}>Book an Appointment</button>
          </Link>
        </div>
      </ScrollAnimation>
    </div>
  );
} 