"use client";

import { Html, Line } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { ecosystemNodes } from "@/data/skills";

const layerColors: Record<string, string> = {
  frontend: "#22d3ee",
  api: "#34d399",
  data: "#f59e0b",
  infra: "#a78bfa",
  tools: "#fb7185",
};

function SkillSystem() {
  const group = useRef<THREE.Group>(null);
  const [active, setActive] = useState<string | null>(null);
  const nodes = useMemo(
    () =>
      ecosystemNodes.map((node, index) => {
        const angle = (index / ecosystemNodes.length) * Math.PI * 2;
        const radius = node.layer === "api" ? 1 : node.layer === "data" ? 1.6 : 2.18;
        return {
          ...node,
          position: new THREE.Vector3(Math.cos(angle) * radius, Math.sin(angle) * radius * 0.66, 0),
        };
      }),
    [],
  );

  useFrame(({ clock, pointer }) => {
    if (!group.current) return;
    group.current.rotation.z = Math.sin(clock.elapsedTime * 0.12) * 0.02;
    group.current.rotation.y = pointer.x * 0.08;
  });

  return (
    <group ref={group}>
      <ambientLight intensity={1.4} />
      <pointLight position={[0, 0, 4]} intensity={7} />

      {nodes.map((node, index) => {
        const next = nodes[(index + 1) % nodes.length];
        const bridge = nodes[(index + 3) % nodes.length];
        return (
          <group key={`${node.label}-lines`}>
            <Line
              points={[node.position, next.position]}
              color={layerColors[node.layer]}
              transparent
              opacity={active && active !== node.label && active !== next.label ? 0.08 : 0.32}
              lineWidth={1}
            />
            {index % 2 === 0 && (
              <Line
                points={[node.position, bridge.position]}
                color="#f8fafc"
                transparent
                opacity={0.08}
                lineWidth={1}
              />
            )}
          </group>
        );
      })}

      {nodes.map((node) => {
        const isActive = active === node.label;
        return (
          <group key={node.label} position={node.position}>
            <mesh
              onPointerOver={() => setActive(node.label)}
              onPointerOut={() => setActive(null)}
              scale={isActive ? 1.25 : 1}
            >
              <sphereGeometry args={[0.13, 24, 24]} />
              <meshStandardMaterial
                color={layerColors[node.layer]}
                emissive={layerColors[node.layer]}
                emissiveIntensity={isActive ? 0.55 : 0.25}
                roughness={0.38}
              />
            </mesh>
            <Html center distanceFactor={7.5} position={[0, 0.36, 0]}>
              <div className={`skill-label ${isActive ? "is-active" : ""}`}>{node.label}</div>
            </Html>
          </group>
        );
      })}
    </group>
  );
}

export function SkillsNetwork() {
  return (
    <div
      className="h-[420px] w-full sm:h-[500px]"
      aria-label="Interactive connected technology ecosystem"
    >
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        dpr={[1, 1.75]}
        fallback={<div className="h-full w-full rounded-3xl bg-white/[0.02]" />}
      >
        <color attach="background" args={["#070707"]} />
        <SkillSystem />
      </Canvas>
    </div>
  );
}
