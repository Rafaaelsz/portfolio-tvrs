"use client";

import { Html, Line, OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { DataPacket } from "./DataPacket";

const layerConfig = [
  {
    position: [-1.55, 1.45, 0.1] as const,
    color: "#22d3ee",
  },
  {
    position: [-0.35, 0.35, 0.25] as const,
    color: "#34d399",
  },
  {
    position: [0.65, -0.35, 0] as const,
    color: "#f59e0b",
  },
  {
    position: [1.85, -1.1, 0.18] as const,
    color: "#fb7185",
  },
  {
    position: [1.9, 1.0, -0.6] as const,
    color: "#a78bfa",
  },
];

type ArchitectureLabel = {
  title: string;
  tech: string;
};

type ArchitectureSceneProps = {
  labels: ArchitectureLabel[];
};

function ArchitectureGraph({ labels }: ArchitectureSceneProps) {
  const group = useRef<THREE.Group>(null);
  const layers = useMemo(
    () =>
      layerConfig.map((layer, index) => ({
        ...layer,
        ...labels[index],
      })),
    [labels],
  );

  const curves = useMemo(() => {
    const vectors = layers.map((layer) => new THREE.Vector3(...layer.position));
    return [
      new THREE.CatmullRomCurve3([vectors[0], new THREE.Vector3(-0.95, 0.85, 0.45), vectors[1]]),
      new THREE.CatmullRomCurve3([vectors[1], new THREE.Vector3(0, 0.0, 0.5), vectors[2]]),
      new THREE.CatmullRomCurve3([vectors[2], new THREE.Vector3(1.8, -0.95, 0.4), vectors[3]]),
      new THREE.CatmullRomCurve3([vectors[1], new THREE.Vector3(0.9, 0.95, -0.2), vectors[4]]),
      new THREE.CatmullRomCurve3([vectors[4], new THREE.Vector3(2.0, -0.08, -0.25), vectors[3]]),
    ];
  }, [layers]);

  useFrame(({ clock, pointer }) => {
    if (!group.current) return;
    group.current.rotation.y = Math.sin(clock.elapsedTime * 0.18) * 0.14 + pointer.x * 0.08;
    group.current.rotation.x = Math.sin(clock.elapsedTime * 0.14) * 0.04 - pointer.y * 0.04;
  });

  return (
    <group ref={group}>
      <ambientLight intensity={0.9} />
      <pointLight position={[0, 2.5, 4]} intensity={9} color="#ffffff" />
      <pointLight position={[-4, 0, 1]} intensity={5} color="#22d3ee" />

      {curves.map((curve, index) => (
        <group key={index}>
          <Line
            points={curve.getPoints(80)}
            color={index % 2 === 0 ? "#67e8f9" : "#86efac"}
            lineWidth={1.4}
            transparent
            opacity={0.45}
          />
          <DataPacket
            curve={curve}
            color={index % 2 === 0 ? "#22d3ee" : "#34d399"}
            speed={0.07 + index * 0.012}
            offset={index * 0.18}
          />
        </group>
      ))}

      {layers.map((layer, index) => (
        <group key={layer.title} position={layer.position}>
          <mesh>
            <sphereGeometry args={[0.22, 32, 32]} />
            <meshStandardMaterial
              color={layer.color}
              emissive={layer.color}
              emissiveIntensity={0.32}
              roughness={0.38}
              metalness={0.12}
            />
          </mesh>
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <ringGeometry args={[0.34, 0.36, 48]} />
            <meshBasicMaterial color={layer.color} transparent opacity={0.28} />
          </mesh>
          <Html center distanceFactor={6.2} position={[0, index % 2 === 0 ? 0.55 : -0.55, 0]}>
            <div className="architecture-label">
              <strong>{layer.title}</strong>
              <span>{layer.tech}</span>
            </div>
          </Html>
        </group>
      ))}
    </group>
  );
}

export function ArchitectureScene({ labels }: ArchitectureSceneProps) {
  return (
    <div
      className="h-[420px] w-full sm:h-[520px] lg:h-[620px]"
      aria-label="Interactive software architecture diagram"
    >
      <Canvas
        camera={{ position: [0, 0.2, 6.3], fov: 47 }}
        dpr={[1, 1.75]}
        fallback={<div className="h-full w-full rounded-3xl bg-white/[0.02]" />}
      >
        <color attach="background" args={["#050507"]} />
        <fog attach="fog" args={["#050507", 5, 10]} />
        <ArchitectureGraph labels={labels} />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          rotateSpeed={0.35}
          autoRotate
          autoRotateSpeed={0.25}
          maxPolarAngle={Math.PI / 1.8}
          minPolarAngle={Math.PI / 2.7}
        />
      </Canvas>
    </div>
  );
}
