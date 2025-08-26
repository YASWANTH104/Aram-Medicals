// VirusModel2.jsx
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";
import { useRef, useState, useEffect } from "react";

function Stethoscope({ scale, position }) {
  const { scene } = useGLTF("/doctors_stethoscope.glb");
  const ref = useRef();

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.07; // smooth rotation
    }
  });

  return <primitive ref={ref} object={scene} scale={scale} position={position} />;
}

export default function VirusModel2() {
  const [scale, setScale] = useState(1.0);
  const [position, setPosition] = useState([0, -0.3, 0]);
  const [dimensions, setDimensions] = useState({
    width: 500,
    height: 400,
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        // ✅ Large screens (desktop)
        setScale(0.9);               // decreased from 1.2 → fits better
        setPosition([0.3, -0.3, 0]); // slight shift right & down for alignment
        setDimensions({ width: 700, height: 500 });
      } else {
        // ✅ Mobile / tablet (unchanged)
        setScale(0.9);
        setPosition([0, -0.3, 0]);
        setDimensions({ width: 500, height: 400 });
      }
    };

    handleResize(); // run once
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={{ width: dimensions.width, height: dimensions.height, margin: "0 auto" }}>
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} />
        <spotLight position={[-5, -5, -5]} intensity={0.7} />

        <Environment preset="sunset" />
        <Stethoscope scale={scale} position={position} />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}

useGLTF.preload("/doctors_stethoscope.glb");
