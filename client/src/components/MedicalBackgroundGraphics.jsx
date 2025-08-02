import { FaCross, FaHeartbeat, FaUserMd } from 'react-icons/fa';

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

export default MedicalBackgroundGraphics;