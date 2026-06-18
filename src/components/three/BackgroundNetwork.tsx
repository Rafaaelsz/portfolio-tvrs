"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Line } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function NetworkField() {
  const group = useRef<THREE.Group>(null);
  const nodes = useMemo(
    () =>
      Array.from({ length: 26 }, (_, index) => {
        const x = Math.sin(index * 1.7) * 7.5;
        const y = Math.cos(index * 0.93) * 4.4;
        const z = -5 - (index % 7) * 0.45;
        return new THREE.Vector3(x, y, z);
      }),
    [],
  );

  const links = useMemo(
    () =>
      nodes
        .map((node, index) => [node, nodes[(index + 5) % nodes.length]] as const)
        .filter((_, index) => index % 2 === 0),
    [nodes],
  );

  useFrame(({ clock }) => {
    if (!group.current) return;
    group.current.rotation.y = Math.sin(clock.elapsedTime * 0.08) * 0.08;
    group.current.position.y = Math.sin(clock.elapsedTime * 0.18) * 0.18;
  });

  return (
    <group ref={group}>
      {links.map(([start, end], index) => (
        <Line
          key={`${start.x}-${end.x}-${index}`}
          points={[start, end]}
          color={index % 3 === 0 ? "#22d3ee" : index % 3 === 1 ? "#34d399" : "#f59e0b"}
          opacity={0.11}
          transparent
          lineWidth={1}
        />
      ))}
      {nodes.map((node, index) => (
        <mesh key={index} position={node}>
          <sphereGeometry args={[0.018 + (index % 3) * 0.008, 10, 10]} />
          <meshBasicMaterial
            color={index % 4 === 0 ? "#f8fafc" : index % 4 === 1 ? "#22d3ee" : "#34d399"}
            transparent
            opacity={0.34}
          />
        </mesh>
      ))}
    </group>
  );
}

export function BackgroundNetwork() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 opacity-80" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        dpr={[1, 1.5]}
        fallback={<div className="h-full w-full bg-transparent" />}
      >
        <fog attach="fog" args={["#050507", 7, 15]} />
        <NetworkField />
      </Canvas>
    </div>
  );
}
