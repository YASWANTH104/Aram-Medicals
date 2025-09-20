// VirusModel.jsx
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";
import { useRef, useEffect } from "react";
import * as THREE from "three";

function Virus() {
  const { scene } = useGLTF("/virus.glb"); // virus.glb inside public/
  const ref = useRef();

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.material = new THREE.MeshStandardMaterial({
          color: "#f6f7f2", // dark red
          roughness: 0.5,
          metalness: 0.3,
        });
      }
    });
  }, [scene]);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.003; // slow spin
    }
  });

  return <primitive ref={ref} object={scene} scale={2} />;
}

export default function VirusModel({ width = 320, height = 320 }) {
  return (
    <div style={{ width, height }}>
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        {/* Lights */}
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <spotLight position={[-5, -5, -5]} intensity={0.5} />

        {/* Environment */}
        <Environment preset="sunset" />

        {/* Virus */}
        <Virus />

        {/* Controls */}
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
