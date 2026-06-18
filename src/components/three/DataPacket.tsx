"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

type DataPacketProps = {
  curve: THREE.CatmullRomCurve3;
  color: string;
  speed?: number;
  offset?: number;
};

export function DataPacket({ curve, color, speed = 0.08, offset = 0 }: DataPacketProps) {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!mesh.current) return;
    const t = (clock.elapsedTime * speed + offset) % 1;
    const point = curve.getPointAt(t);
    mesh.current.position.copy(point);
    mesh.current.scale.setScalar(0.75 + Math.sin(clock.elapsedTime * 4 + offset * 10) * 0.12);
  });

  return (
    <mesh ref={mesh}>
      <sphereGeometry args={[0.055, 18, 18]} />
      <meshBasicMaterial color={color} transparent opacity={0.92} />
    </mesh>
  );
}
