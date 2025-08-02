import React from 'react';
import { FaHeartbeat } from 'react-icons/fa';

const FloatingHearts = ({ className = "", heartColor1 = "#1aab3c", heartColor2 = "#0833a8" }) => {
  return (
    <>
      {/* Floating Hearts Background Animation */}
      <div className={`absolute inset-0 pointer-events-none z-0 ${className}`}>
        <div className="floating-heart heart-1">
          <FaHeartbeat className={`text-[${heartColor1}] opacity-20`} />
        </div>
        <div className="floating-heart heart-2">
          <FaHeartbeat className={`text-[${heartColor2}] opacity-15`} />
        </div>
        <div className="floating-heart heart-3">
          <FaHeartbeat className={`text-[${heartColor1}] opacity-25`} />
        </div>
        <div className="floating-heart heart-4">
          <FaHeartbeat className={`text-[${heartColor2}] opacity-10`} />
        </div>
        <div className="floating-heart heart-5">
          <FaHeartbeat className={`text-[${heartColor1}] opacity-20`} />
        </div>
        <div className="floating-heart heart-6">
          <FaHeartbeat className={`text-[${heartColor2}] opacity-15`} />
        </div>
        <div className="floating-heart heart-7">
          <FaHeartbeat className={`text-[${heartColor1}] opacity-18`} />
        </div>
        <div className="floating-heart heart-8">
          <FaHeartbeat className={`text-[${heartColor2}] opacity-12`} />
        </div>
        <div className="floating-heart heart-9">
          <FaHeartbeat className={`text-[${heartColor1}] opacity-22`} />
        </div>
        <div className="floating-heart heart-10">
          <FaHeartbeat className={`text-[${heartColor2}] opacity-16`} />
        </div>
        <div className="floating-heart heart-11">
          <FaHeartbeat className={`text-[${heartColor1}] opacity-14`} />
        </div>
        <div className="floating-heart heart-12">
          <FaHeartbeat className={`text-[${heartColor2}] opacity-19`} />
        </div>
        <div className="floating-heart heart-13">
          <FaHeartbeat className={`text-[${heartColor1}] opacity-17`} />
        </div>
        <div className="floating-heart heart-14">
          <FaHeartbeat className={`text-[${heartColor2}] opacity-13`} />
        </div>
        <div className="floating-heart heart-15">
          <FaHeartbeat className={`text-[${heartColor1}] opacity-21`} />
        </div>
        <div className="floating-heart heart-16">
          <FaHeartbeat className={`text-[${heartColor2}] opacity-11`} />
        </div>
        <div className="floating-heart heart-17">
          <FaHeartbeat className={`text-[${heartColor1}] opacity-19`} />
        </div>
        <div className="floating-heart heart-18">
          <FaHeartbeat className={`text-[${heartColor2}] opacity-18`} />
        </div>
        <div className="floating-heart heart-19">
          <FaHeartbeat className={`text-[${heartColor1}] opacity-16`} />
        </div>
        <div className="floating-heart heart-20">
          <FaHeartbeat className={`text-[${heartColor2}] opacity-20`} />
        </div>
      </div>

      {/* Floating Hearts CSS Animations */}
      <style>{`
        .floating-heart {
          position: absolute;
          font-size: 1.5rem;
          animation: float 15s infinite linear;
        }
        
        .heart-1 {
          top: 10%;
          left: 10%;
          animation-delay: 0s;
          animation-duration: 20s;
        }
        
        .heart-2 {
          top: 20%;
          right: 15%;
          animation-delay: -5s;
          animation-duration: 25s;
        }
        
        .heart-3 {
          top: 60%;
          left: 5%;
          animation-delay: -10s;
          animation-duration: 18s;
        }
        
        .heart-4 {
          top: 30%;
          right: 5%;
          animation-delay: -15s;
          animation-duration: 22s;
        }
        
        .heart-5 {
          top: 70%;
          right: 10%;
          animation-delay: -8s;
          animation-duration: 30s;
        }
        
        .heart-6 {
          top: 80%;
          left: 20%;
          animation-delay: -12s;
          animation-duration: 16s;
        }
        
        .heart-7 {
          top: 15%;
          left: 60%;
          animation-delay: -3s;
          animation-duration: 28s;
        }
        
        .heart-8 {
          top: 45%;
          right: 25%;
          animation-delay: -7s;
          animation-duration: 19s;
        }
        
        .heart-9 {
          top: 75%;
          left: 40%;
          animation-delay: -14s;
          animation-duration: 24s;
        }
        
        .heart-10 {
          top: 25%;
          left: 80%;
          animation-delay: -9s;
          animation-duration: 21s;
        }
        
        .heart-11 {
          top: 55%;
          right: 35%;
          animation-delay: -6s;
          animation-duration: 26s;
        }
        
        .heart-12 {
          top: 85%;
          right: 20%;
          animation-delay: -11s;
          animation-duration: 17s;
        }
        
        .heart-13 {
          top: 40%;
          left: 30%;
          animation-delay: -13s;
          animation-duration: 23s;
        }
        .heart-14 {
          top: 65%;
          right: 30%;
          animation-delay: -16s;
          animation-duration: 20s;
        }
        .heart-15 {
          top: 35%;
          left: 75%;
          animation-delay: -18s;
          animation-duration: 27s;
        }
        .heart-16 {
          top: 60%;
          right: 60%;
          animation-delay: -19s;
          animation-duration: 22s;
        }
        .heart-17 {
          top: 50%;
          left: 55%;
          animation-delay: -15s;
          animation-duration: 29s;
        }
        .heart-18 {
          top: 80%;
          right: 40%;
          animation-delay: -17s;
          animation-duration: 18s;
        }
        .heart-19 {
          top: 20%;
          left: 90%;
          animation-delay: -20s;
          animation-duration: 25s;
        }
        .heart-20 {
          top: 90%;
          right: 10%;
          animation-delay: -21s;
          animation-duration: 24s;
        }
        
        @keyframes float {
          0% {
            transform: translate(0, 0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translate(100px, -100px) rotate(360deg);
            opacity: 0;
          }
        }
        
        /* Parallax effect on scroll */
        .floating-heart {
          will-change: transform;
        }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
          .floating-heart {
            font-size: 1rem;
          }
        }
      `}</style>
    </>
  );
};

export default FloatingHearts; 