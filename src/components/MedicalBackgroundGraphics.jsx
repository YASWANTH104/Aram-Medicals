import React from 'react';

// The SVG component for the heart icon from your image
const ModernHeartIcon = ({ className, ...props }) => (
  <svg
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#3b82f6' }} /> {/* Blue */}
        <stop offset="100%" style={{ stopColor: '#10b981' }} /> {/* Green/Emerald */}
      </linearGradient>
    </defs>
    <circle cx="50" cy="50" r="50" fill="url(#icon-gradient)" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      fill="white"
      d="M50 22C35 10 15 25 25 45C35 65 50 78 50 78C50 78 65 65 75 45C85 25 65 10 50 22ZM33 51H41L45 46L50 56L55 46L59 51H67V49H60L55 44L50 54L45 44L40 49H33V51Z"
    />
  </svg>
);

const MedicalBackgroundGraphics = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-sky-50">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-cyan-50 to-blue-100 opacity-60" />

      {/* --- Animated Heart Icons of Various Sizes --- */}

      {/* Heart 1: Large */}
      <div
        className="absolute top-[15%] left-[10%] w-40 h-40"
        style={{ animation: 'float 8s ease-in-out infinite, pulse-beat 2.5s ease-in-out infinite' }}
      >
        <ModernHeartIcon />
      </div>

      {/* Heart 2: Medium */}
      <div
        className="absolute bottom-[10%] right-[15%] w-28 h-28"
        style={{ animation: 'float 12s ease-in-out infinite 1s, pulse-beat 2.5s ease-in-out infinite 1s' }}
      >
        <ModernHeartIcon />
      </div>

      {/* Heart 3: Small */}
      <div
        className="absolute top-[20%] right-[20%] w-16 h-16"
        style={{ animation: 'float 7s ease-in-out infinite 0.5s, pulse-beat 2.5s ease-in-out infinite 0.5s' }}
      >
        <ModernHeartIcon />
      </div>

      {/* Heart 4: Small */}
      <div
        className="absolute bottom-[25%] left-[25%] w-20 h-20"
        style={{ animation: 'float 9s ease-in-out infinite 1.5s, pulse-beat 2.5s ease-in-out infinite 1.5s' }}
      >
        <ModernHeartIcon />
      </div>
      
      {/* Heart 5: Very Large & Subtle Centerpiece */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 opacity-[0.03]"
        style={{ animation: 'float 15s ease-in-out infinite, pulse-beat 4s ease-in-out infinite' }}
      >
        <ModernHeartIcon />
      </div>

    </div>
  );
};

export default MedicalBackgroundGraphics;