"use client";

import React, { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { 
  OrbitControls, 
  AccumulativeShadows, 
  RandomizedLight 
} from "@react-three/drei";

// ----------------------------
// LAPTOP COMPONENT
// ----------------------------
function Laptop() {
  const group = useRef<any>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (group.current) group.current.rotation.y = Math.sin(t / 4) * 0.06;
  });

  return (
    <group ref={group} position={[0, 0.28, 0]}>
      {/* Laptop Base */}
      <mesh position={[0, 0, 0]} castShadow>
        <boxGeometry args={[1.4, 0.06, 0.9]} />
        <meshStandardMaterial 
          metalness={0.6} 
          roughness={0.3} 
          color="#111827" 
        />
      </mesh>

      {/* Laptop Screen */}
      <group position={[0, 0.52, -0.15]} rotation={[-0.4, 0, 0]}>
        <mesh castShadow>
          <boxGeometry args={[1.4, 0.9, 0.04]} />
          <meshStandardMaterial 
            emissive="#0ea5e9" 
            emissiveIntensity={0.02} 
            color="#0f172a" 
          />
        </mesh>

        {/* Inner Display Panel */}
        <mesh position={[0, 0, 0.03]}>
          <planeGeometry args={[1.24, 0.74]} />
          <meshBasicMaterial toneMapped={false} color="#05263b" />
        </mesh>
      </group>
    </group>
  );
}

// ----------------------------
// DESK COMPONENT
// ----------------------------
function Desk() {
  return (
    <group>
      {/* Main Desk Surface */}
      <mesh position={[0, -0.02, 0]} receiveShadow>
        <boxGeometry args={[3.6, 0.08, 1.4]} />
        <meshStandardMaterial color="#0b1220" metalness={0.1} roughness={0.7} />
      </mesh>

      {/* Lamp */}
      <group position={[1.4, 0.4, -0.4]}>
        <mesh position={[0, 0.18, 0]}>
          <cylinderGeometry args={[0.03, 0.03, 0.36, 12]} />
          <meshStandardMaterial color="#cbd5e1" />
        </mesh>

        <mesh position={[0, 0.45, -0.08]} rotation={[0.3, 0, 0]}>
          <coneGeometry args={[0.15, 0.18, 20]} />
          <meshStandardMaterial 
            emissive="#f59e0b" 
            emissiveIntensity={0.8} 
            color="#fbbf24" 
          />
        </mesh>
      </group>

      {/* Coffee Mug */}
      <mesh position={[-1.1, 0.12, -0.35]} rotation={[0, 0.2, 0]}>
        <cylinderGeometry args={[0.12, 0.12, 0.18, 32]} />
        <meshStandardMaterial color="#ef4444" />
      </mesh>

      {/* Pen Holder */}
      <group position={[-0.6, 0.12, 0.45]}>
        <mesh>
          <cylinderGeometry args={[0.12, 0.12, 0.12, 20]} />
          <meshStandardMaterial color="#94a3b8" />
        </mesh>

        <mesh position={[0, 0.18, 0]}>
          <sphereGeometry args={[0.16, 16, 16]} />
          <meshStandardMaterial color="#10b981" />
        </mesh>
      </group>
    </group>
  );
}

// ----------------------------
// MAIN 3D SCENE
// ----------------------------
export default function DeskScene(): JSX.Element {
  return (
    <Canvas shadows camera={{ position: [0, 1.2, 2.8], fov: 50 }}>
      {/* LIGHTS */}
      <ambientLight intensity={0.5} />
      <directionalLight 
        position={[3, 5, 2]} 
        intensity={1} 
        castShadow 
      />
      <pointLight 
        position={[-2, 1.5, -1.5]} 
        intensity={0.6} 
      />

      {/* REALISTIC SHADOWS */}
      <AccumulativeShadows 
        position={[0, -0.05, 0]} 
        frames={120} 
        alphaTest={0.8} 
        scale={10}
        opacity={0.8}
      >
        <RandomizedLight 
          amount={8}
          radius={1.2}
          ambient={0.5}
          position={[3, 4, 2]}
          intensity={1}
        />
      </AccumulativeShadows>

      {/* 3D OBJECTS */}
      <Suspense fallback={null}>
        <group position={[0, -0.12, 0]}>
          <Desk />
          <Laptop />
        </group>
      </Suspense>

      {/* FLOOR */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.04, 0]} receiveShadow>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color="#06070a" />
      </mesh>

      {/* CONTROLS */}
      <OrbitControls 
        enablePan={false} 
        enableZoom={false} 
        enableRotate 
        maxPolarAngle={Math.PI / 2.2} 
        minPolarAngle={Math.PI / 3.2} 
      />
    </Canvas>
  );
}
