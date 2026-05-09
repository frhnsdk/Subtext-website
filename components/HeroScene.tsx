'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import * as THREE from 'three'

// ── Central padlock ──────────────────────────────────────────────────
function Padlock() {
  const groupRef = useRef<THREE.Group>(null)
  const bodyRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (!groupRef.current || !bodyRef.current) return
    const t = state.clock.elapsedTime
    groupRef.current.rotation.y = t * 0.35
    // Subtle pulse
    const pulse = 1 + Math.sin(t * 1.5) * 0.04
    bodyRef.current.scale.set(pulse, pulse, pulse)
  })

  return (
    <Float speed={1.2} floatIntensity={0.4} rotationIntensity={0}>
      <group ref={groupRef}>
        {/* Lock body */}
        <mesh ref={bodyRef} position={[0, -0.2, 0]} castShadow>
          <boxGeometry args={[1.4, 1.2, 0.55]} />
          <meshStandardMaterial
            color="#2563EB"
            metalness={0.7}
            roughness={0.2}
            emissive="#1D4ED8"
            emissiveIntensity={0.35}
          />
        </mesh>

        {/* Keyhole */}
        <mesh position={[0, -0.15, 0.28]}>
          <cylinderGeometry args={[0.13, 0.13, 0.05, 32]} />
          <meshStandardMaterial color="#0B1220" metalness={0.9} roughness={0.3} />
        </mesh>
        <mesh position={[0, -0.32, 0.28]}>
          <boxGeometry args={[0.08, 0.22, 0.05]} />
          <meshStandardMaterial color="#0B1220" metalness={0.9} roughness={0.3} />
        </mesh>

        {/* Shackle (top arch) */}
        <mesh position={[0, 0.7, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.45, 0.11, 16, 32, Math.PI]} />
          <meshStandardMaterial
            color="#93C5FD"
            metalness={0.9}
            roughness={0.15}
            emissive="#3B82F6"
            emissiveIntensity={0.25}
          />
        </mesh>

        {/* Glow ring around lock */}
        <mesh position={[0, -0.2, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.3, 0.02, 8, 64]} />
          <meshStandardMaterial
            color="#60A5FA"
            emissive="#60A5FA"
            emissiveIntensity={1.2}
            transparent
            opacity={0.55}
          />
        </mesh>
      </group>
    </Float>
  )
}

// ── Person nodes (orbiting around the lock) ──────────────────────────
type NodePos = [number, number, number]

function PersonNode({
  position,
  color = '#3B82F6',
}: {
  position: NodePos
  color?: string
}) {
  const meshRef = useRef<THREE.Mesh>(null)
  const glowRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (glowRef.current) {
      const pulse = 1 + Math.sin(t * 2 + position[0]) * 0.15
      glowRef.current.scale.set(pulse, pulse, pulse)
    }
  })

  return (
    <group position={position}>
      {/* Outer glow */}
      <mesh ref={glowRef}>
        <sphereGeometry args={[0.28, 24, 24]} />
        <meshBasicMaterial color={color} transparent opacity={0.18} />
      </mesh>
      {/* Core */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[0.16, 32, 32]} />
        <meshStandardMaterial
          color="#FFFFFF"
          emissive={color}
          emissiveIntensity={1.4}
          roughness={0.2}
          metalness={0.4}
        />
      </mesh>
    </group>
  )
}

// ── Encrypted connection line with traveling pulse ──────────────────
function Connection({
  from,
  to,
  speed = 1,
  offset = 0,
  color = '#60A5FA',
}: {
  from: NodePos
  to: NodePos
  speed?: number
  offset?: number
  color?: string
}) {
  const pulseRef = useRef<THREE.Mesh>(null)

  // Static line geometry
  const linePoints = useMemo(() => {
    return [new THREE.Vector3(...from), new THREE.Vector3(...to)]
  }, [from, to])

  const lineGeo = useMemo(() => {
    const g = new THREE.BufferGeometry().setFromPoints(linePoints)
    return g
  }, [linePoints])

  useFrame((state) => {
    if (!pulseRef.current) return
    const t = ((state.clock.elapsedTime * speed + offset) % 2) / 2
    // Bounce: 0→1→0
    const progress = t < 0.5 ? t * 2 : (1 - t) * 2
    pulseRef.current.position.set(
      from[0] + (to[0] - from[0]) * progress,
      from[1] + (to[1] - from[1]) * progress,
      from[2] + (to[2] - from[2]) * progress,
    )
  })

  return (
    <>
      <line>
        <primitive object={lineGeo} attach="geometry" />
        <lineBasicMaterial color={color} transparent opacity={0.35} />
      </line>
      {/* Traveling pulse */}
      <mesh ref={pulseRef}>
        <sphereGeometry args={[0.07, 16, 16]} />
        <meshBasicMaterial color={color} />
      </mesh>
    </>
  )
}

// ── Whole network (lock + nodes + connections) ──────────────────────
function Network() {
  const groupRef = useRef<THREE.Group>(null)

  // Position nodes evenly around the lock
  const nodes: { pos: NodePos; color: string }[] = useMemo(() => {
    const radius = 2.6
    const count = 6
    return Array.from({ length: count }).map((_, i) => {
      const angle = (i / count) * Math.PI * 2
      const yOffset = Math.sin(angle * 1.5) * 0.6
      return {
        pos: [
          Math.cos(angle) * radius,
          yOffset,
          Math.sin(angle) * radius,
        ] as NodePos,
        color: ['#3B82F6', '#60A5FA', '#93C5FD'][i % 3],
      }
    })
  }, [])

  useFrame((state) => {
    if (!groupRef.current) return
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.08
  })

  const center: NodePos = [0, 0, 0]

  return (
    <group ref={groupRef}>
      {/* Connections from each node to center lock */}
      {nodes.map((n, i) => (
        <Connection
          key={`c-${i}`}
          from={n.pos}
          to={center}
          speed={0.6 + i * 0.08}
          offset={i * 0.4}
          color={n.color}
        />
      ))}

      {/* Person nodes */}
      {nodes.map((n, i) => (
        <PersonNode key={`n-${i}`} position={n.pos} color={n.color} />
      ))}

      {/* Central lock */}
      <Padlock />
    </group>
  )
}

// ── Mouse-driven camera parallax ─────────────────────────────────────
function CameraRig() {
  const { camera, mouse } = useThree()
  useFrame(() => {
    camera.position.x += (mouse.x * 0.6 - camera.position.x) * 0.04
    camera.position.y += (-mouse.y * 0.4 + 0.3 - camera.position.y) * 0.04
    camera.lookAt(0, 0, 0)
  })
  return null
}

function SceneContent() {
  return (
    <>
      <ambientLight intensity={0.65} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} color="#FFFFFF" />
      <pointLight position={[-3, 2, 4]} intensity={2.5} color="#3B82F6" />
      <pointLight position={[3, -1, 3]} intensity={1.5} color="#60A5FA" />
      <pointLight position={[0, 0, 0]} intensity={1.8} color="#93C5FD" distance={4} />

      <Network />
      <CameraRig />
    </>
  )
}

export default function HeroScene() {
  return (
    <div className="w-full h-full" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0.3, 7], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
      >
        <SceneContent />
      </Canvas>
    </div>
  )
}
