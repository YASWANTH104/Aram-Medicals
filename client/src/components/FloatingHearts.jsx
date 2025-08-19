import React, { useMemo, useEffect, useRef } from "react";

const FloatingHearts = ({
  count = 40,
  className = "",
  colors = ["#1aab3c55", "#21287855", "#ffffff33"],
}) => {
  const containerRef = useRef(null);

  const particles = useMemo(
    () =>
      Array.from({ length: count }).map(() => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 5 + Math.random() * 20,
        duration: 20 + Math.random() * 25,
        delay: -Math.random() * 20,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: 0.1 + Math.random() * 0.4,
      })),
    [count, colors]
  );

  // Mouse parallax only on desktop
  useEffect(() => {
    if (window.innerWidth < 768) return; // disable on mobile
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 20;
      const y = (e.clientY / innerHeight - 0.5) * 20;
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

      {/* Floating Particles */}
      {particles.map((p, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: p.color,
            opacity: p.opacity,
            animation: `floatPremium ${p.duration}s ease-in-out infinite`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}

      <style>{`
        .particle {
          position: absolute;
          border-radius: 50%;
          filter: blur(3px);
          transform: translate(var(--mouse-x), var(--mouse-y));
        }

        /* Gradient blobs */
        .blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(120px);
          opacity: 0.6;
          animation: blobMove 30s ease-in-out infinite alternate, blobColor 20s ease-in-out infinite alternate;
        }

        .blob-1 { width: 400px; height: 400px; top: 10%; left: 5%; background: radial-gradient(circle, #1aab3c88, #1aab3c22); }
        .blob-2 { width: 500px; height: 500px; top: 50%; left: 40%; background: radial-gradient(circle, #21287888, #21287822); }
        .blob-3 { width: 300px; height: 300px; top: 70%; left: 70%; background: radial-gradient(circle, #ffffff55, #ffffff11); }

        @keyframes blobMove {
          0% { transform: translate(0px, 0px) scale(1); }
          25% { transform: translate(40px, -20px) scale(1.1); }
          50% { transform: translate(-30px, 30px) scale(1.05); }
          75% { transform: translate(20px, -10px) scale(0.95); }
          100% { transform: translate(-10px, 40px) scale(1); }
        }

        @keyframes blobColor {
          0% { background: radial-gradient(circle, #1aab3c88, #1aab3c22); }
          33% { background: radial-gradient(circle, #21287888, #21287822); }
          66% { background: radial-gradient(circle, #ffffff55, #ffffff11); }
          100% { background: radial-gradient(circle, #1aab3c88, #1aab3c22); }
        }

        @keyframes floatPremium {
          0% { transform: translateY(0px) scale(1); opacity: 0; }
          10% { opacity: 1; }
          50% { transform: translateY(-60px) scale(1.2); }
          100% { transform: translateY(-120px) scale(1); opacity: 0; }
        }

        /* Mobile adjustments */
        @media (max-width: 768px) {
          .blob { width: 200px; height: 200px; filter: blur(80px); }
          .particle { width: 4px !important; height: 4px !important; transform: none !important; }
        }
      `}</style>
    </div>
  );
};

export default FloatingHearts;
