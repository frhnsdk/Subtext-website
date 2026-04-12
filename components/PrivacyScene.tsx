'use client'

import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import * as THREE from 'three'

function Shield() {
  const outerRef = useRef<THREE.Mesh>(null)
  const innerRef = useRef<THREE.Mesh>(null)
  const ring1Ref = useRef<THREE.Mesh>(null)
  const ring2Ref = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (outerRef.current) {
      outerRef.current.rotation.y = t * 0.4
      outerRef.current.rotation.x = Math.sin(t * 0.3) * 0.2
    }
    if (innerRef.current) {
      innerRef.current.rotation.y = -t * 0.6
    }
    if (ring1Ref.current) {
      ring1Ref.current.rotation.z = t * 0.5
      ring1Ref.current.rotation.x = Math.PI / 4
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.z = -t * 0.35
      ring2Ref.current.rotation.y = Math.PI / 3
    }
  })

  return (
    <Float speed={1.2} floatIntensity={0.6}>
      {/* Outer wireframe icosahedron */}
      <mesh ref={outerRef}>
        <icosahedronGeometry args={[1.8, 1]} />
        <meshStandardMaterial
          color="#2563EB"
          roughness={0.05}
          metalness={0.6}
          transparent
          opacity={0.5}
          wireframe
        />
      </mesh>

      {/* Inner solid icosahedron */}
      <mesh ref={innerRef}>
        <icosahedronGeometry args={[1.1, 0]} />
        <meshStandardMaterial
          color="#1D4ED8"
          roughness={0.1}
          metalness={0.7}
          transparent
          opacity={0.9}
        />
      </mesh>

      {/* Orbiting ring 1 */}
      <mesh ref={ring1Ref}>
        <torusGeometry args={[2.4, 0.03, 8, 60]} />
        <meshStandardMaterial color="#10B981" metalness={0.9} roughness={0.05} transparent opacity={0.5} />
      </mesh>

      {/* Orbiting ring 2 */}
      <mesh ref={ring2Ref}>
        <torusGeometry args={[2.8, 0.02, 8, 60]} />
        <meshStandardMaterial color="#3B82F6" metalness={0.9} roughness={0.05} transparent opacity={0.35} />
      </mesh>
    </Float>
  )
}

export default function PrivacyScene() {
  return (
    <div className="w-full h-full" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.2} />
        <pointLight position={[4, 4, 4]} intensity={3} color="#2563EB" />
        <pointLight position={[-4, -2, 3]} intensity={2} color="#10B981" />
        <pointLight position={[0, -5, 0]} intensity={1} color="#1E40AF" />
        <Shield />
      </Canvas>
    </div>
  )
}
