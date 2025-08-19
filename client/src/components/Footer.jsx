import {FaUserMd,FaHospitalAlt,FaClock,} from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className="bg-[#212878] text-white shadow-xl p-8 w-full">
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
        <button className="bg-[#1aab3c] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#7a9f35] transition-colors">
          Book Cardiac Consultation
        </button>
      </Link>
    </div>
  </div>
  );
}