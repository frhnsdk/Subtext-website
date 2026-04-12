'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Sphere, MeshDistortMaterial, Stars } from '@react-three/drei'
import * as THREE from 'three'

function FloatingOrb({ position, color, speed = 1, distort = 0.4 }: {
  position: [number, number, number]
  color: string
  speed?: number
  distort?: number
}) {
  const meshRef = useRef<THREE.Mesh>(null)
  useFrame((state) => {
    if (!meshRef.current) return
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * speed * 0.4) * 0.3
    meshRef.current.rotation.y += 0.005 * speed
  })

  return (
    <Float speed={speed} rotationIntensity={0.4} floatIntensity={0.8}>
      <Sphere ref={meshRef} args={[1, 64, 64]} position={position}>
        <MeshDistortMaterial
          color={color}
          distort={distort}
          speed={2}
          roughness={0.1}
          metalness={0.4}
          transparent
          opacity={0.85}
        />
      </Sphere>
    </Float>
  )
}

function GeometricRing({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null)
  useFrame((state) => {
    if (!meshRef.current) return
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.3
    meshRef.current.rotation.z = state.clock.elapsedTime * 0.2
  })
  return (
    <mesh ref={meshRef} position={position}>
      <torusGeometry args={[1.4, 0.06, 16, 80]} />
      <meshStandardMaterial color="#10B981" metalness={0.8} roughness={0.1} transparent opacity={0.6} />
    </mesh>
  )
}

function Particles() {
  const count = 120
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 20
      arr[i * 3 + 1] = (Math.random() - 0.5) * 20
      arr[i * 3 + 2] = (Math.random() - 0.5) * 10
    }
    return arr
  }, [])

  const pointsRef = useRef<THREE.Points>(null)
  useFrame((state) => {
    if (!pointsRef.current) return
    pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial color="#3B82F6" size={0.06} sizeAttenuation transparent opacity={0.7} />
    </points>
  )
}

function SceneContent() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={2} color="#2563EB" />
      <pointLight position={[-5, -3, 2]} intensity={1.5} color="#10B981" />
      <Stars radius={40} depth={20} count={300} factor={2} fade />
      <FloatingOrb position={[1.8, 0.4, 0]} color="#2563EB" speed={1} distort={0.5} />
      <FloatingOrb position={[-2, -0.6, -1]} color="#1D4ED8" speed={0.7} distort={0.3} />
      <GeometricRing position={[0, 0, 0]} />
      <Particles />
    </>
  )
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 w-full h-full" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
      >
        <SceneContent />
      </Canvas>
    </div>
  )
}
