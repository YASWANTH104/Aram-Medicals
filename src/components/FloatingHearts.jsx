import React, { useEffect, useRef } from "react";

const FloatingHearts = ({ className = "" }) => {
  const containerRef = useRef(null);

  // Mouse parallax (desktop only)
  useEffect(() => {
    if (window.innerWidth < 768) return;
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 15;
      const y = (e.clientY / innerHeight - 0.5) * 15;
      if (containerRef.current) {
        containerRef.current.style.setProperty("--mouse-x", `${x}px`);
        containerRef.current.style.setProperty("--mouse-y", `${y}px`);
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      style={{ "--mouse-x": "0px", "--mouse-y": "0px" }}
    >
      {/* Gradient Blobs */}
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />

      {/* Subtle Grid Lines */}
      <div className="grid-lines" />

      {/* Floating Dots */}
      {Array.from({ length: 25 }).map((_, i) => (
        <span key={i} className="dot" />
      ))}

      <style>{`
        /* Blobs */
        .blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(120px);
          opacity: 0.5;
          animation: blobMove 25s ease-in-out infinite alternate;
        }
        .blob-1 { width: 500px; height: 500px; top: 10%; left: 5%; background: radial-gradient(circle, #1aab3c66, transparent); }
        .blob-2 { width: 600px; height: 600px; top: 40%; left: 50%; background: radial-gradient(circle, #21287866, transparent); }
        .blob-3 { width: 350px; height: 350px; top: 70%; left: 70%; background: radial-gradient(circle, #ffffff44, transparent); }

        @keyframes blobMove {
          0% { transform: translate(0,0) scale(1); }
          50% { transform: translate(40px, -30px) scale(1.1); }
          100% { transform: translate(-20px, 30px) scale(1); }
        }

        /* Subtle Grid Overlay */
        .grid-lines {
          position: absolute;
          inset: 0;
          background-image: linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px);
          background-size: 40px 40px;
          transform: translate(var(--mouse-x), var(--mouse-y));
        }

        /* Floating Dots */
        .dot {
          position: absolute;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: rgba(255,255,255,0.4);
          top: ${Math.random() * 100}%;
          left: ${Math.random() * 100}%;
          animation: floatDot ${10 + Math.random() * 20}s ease-in-out infinite;
        }

        @keyframes floatDot {
          0% { transform: translateY(0px); opacity: 0; }
          20% { opacity: 1; }
          50% { transform: translateY(-40px); }
          100% { transform: translateY(-80px); opacity: 0; }
        }

        /* Mobile */
        @media (max-width: 768px) {
          .blob { width: 200px; height: 200px; filter: blur(80px); }
          .grid-lines { background-size: 25px 25px; }
          .dot { width: 3px; height: 3px; }
        }
      `}</style>
    </div>
  );
};

export default FloatingHearts;
