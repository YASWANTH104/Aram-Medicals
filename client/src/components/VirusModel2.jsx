// VirusModel2.jsx
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";
import { useRef, useEffect } from "react";
import * as THREE from "three";

function Virus() {
  const { scene } = useGLTF("/virus.glb");
  const ref = useRef();

  // Clone scene so cache is not mutated
  const clonedScene = scene.clone(true);

  useEffect(() => {
    clonedScene.traverse((child) => {
      if (child.isMesh) {
        child.material = new THREE.MeshStandardMaterial({
          color: "#1aab3c",
          roughness: 0.5,
          metalness: 0.3,
        });
      }
    });
  }, [clonedScene]);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.003;
    }
  });

  return <primitive ref={ref} object={clonedScene} scale={2} />;
}

export default function VirusModel2({ width = 500, height = 400 }) {
  return (
    <div style={{ width, height }}>
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <spotLight position={[-5, -5, -5]} intensity={0.5} />
        <Environment preset="sunset" />
        <Virus />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}

// Preload ensures it stays available after reloads
useGLTF.preload("/virus.glb");
