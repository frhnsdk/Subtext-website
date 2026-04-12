'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import * as THREE from 'three'

function Core() {
  const outerRef = useRef<THREE.Mesh>(null)
  const innerRef = useRef<THREE.Mesh>(null)
  const ring1Ref = useRef<THREE.Mesh>(null)
  const ring2Ref = useRef<THREE.Mesh>(null)
  const ring3Ref = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (outerRef.current) {
      outerRef.current.rotation.y = t * 0.35
      outerRef.current.rotation.x = Math.sin(t * 0.25) * 0.3
    }
    if (innerRef.current) {
      innerRef.current.rotation.y = -t * 0.55
      innerRef.current.rotation.z = t * 0.2
    }
    if (ring1Ref.current) {
      ring1Ref.current.rotation.z = t * 0.6
      ring1Ref.current.rotation.x = Math.PI / 3
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.z = -t * 0.4
      ring2Ref.current.rotation.y = Math.PI / 4
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.x = t * 0.25
      ring3Ref.current.rotation.z = t * 0.15
    }
  })

  return (
    <Float speed={1.0} floatIntensity={0.5} rotationIntensity={0.2}>
      {/* Outer wireframe — blueprint feel */}
      <mesh ref={outerRef}>
        <icosahedronGeometry args={[2.2, 1]} />
        <meshStandardMaterial
          color="#3B82F6"
          emissive="#1D4ED8"
          emissiveIntensity={0.6}
          roughness={0.1}
          metalness={0.5}
          transparent
          opacity={0.35}
          wireframe
        />
      </mesh>

      {/* Inner solid — glowing core */}
      <mesh ref={innerRef}>
        <icosahedronGeometry args={[1.1, 1]} />
        <meshStandardMaterial
          color="#60A5FA"
          emissive="#2563EB"
          emissiveIntensity={0.8}
          roughness={0.05}
          metalness={0.8}
          transparent
          opacity={0.95}
        />
      </mesh>

      {/* Green orbiting ring */}
      <mesh ref={ring1Ref}>
        <torusGeometry args={[2.8, 0.04, 8, 80]} />
        <meshStandardMaterial
          color="#10B981"
          emissive="#059669"
          emissiveIntensity={0.7}
          metalness={0.9}
          roughness={0.05}
          transparent
          opacity={0.7}
        />
      </mesh>

      {/* Blue orbiting ring */}
      <mesh ref={ring2Ref}>
        <torusGeometry args={[3.3, 0.025, 8, 80]} />
        <meshStandardMaterial
          color="#38BDF8"
          emissive="#0284C7"
          emissiveIntensity={0.5}
          metalness={0.9}
          roughness={0.05}
          transparent
          opacity={0.5}
        />
      </mesh>

      {/* Outer thin ring */}
      <mesh ref={ring3Ref}>
        <torusGeometry args={[3.9, 0.015, 8, 80]} />
        <meshStandardMaterial
          color="#6366F1"
          emissive="#4338CA"
          emissiveIntensity={0.4}
          metalness={0.9}
          roughness={0.05}
          transparent
          opacity={0.35}
        />
      </mesh>
    </Float>
  )
}

function FloatingDots() {
  const count = 80
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const r = 4 + Math.random() * 4
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      arr[i * 3 + 2] = r * Math.cos(phi)
    }
    return arr
  }, [])

  const dotsRef = useRef<THREE.Points>(null)
  useFrame((state) => {
    if (!dotsRef.current) return
    dotsRef.current.rotation.y = state.clock.elapsedTime * 0.04
    dotsRef.current.rotation.x = state.clock.elapsedTime * 0.02
  })

  return (
    <points ref={dotsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#38BDF8" size={0.05} sizeAttenuation transparent opacity={0.6} />
    </points>
  )
}

export default function PrivacyScene() {
  return (
    <div className="w-full h-full" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 9], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.8} />
        <pointLight position={[5, 5, 5]} intensity={4} color="#2563EB" />
        <pointLight position={[-5, -3, 3]} intensity={3} color="#10B981" />
        <pointLight position={[0, 0, 6]} intensity={2} color="#38BDF8" />
        <Core />
        <FloatingDots />
      </Canvas>
    </div>
  )
}
