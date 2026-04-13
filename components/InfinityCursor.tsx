'use client'

import { useEffect, useRef, useState } from 'react'

const INTERACTIVE_SELECTOR = 'a, button, [role="button"], input, textarea, select, label'

export default function InfinityCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const ringPosRef = useRef({ x: 0, y: 0 })
  const rafRef = useRef<number | null>(null)
  const initializedRef = useRef(false)

  const [enabled, setEnabled] = useState(false)
  const [visible, setVisible] = useState(false)
  const [hoveringInteractive, setHoveringInteractive] = useState(false)

  useEffect(() => {
    const pointerQuery = window.matchMedia('(any-pointer: fine)')
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updateEnabled = () => setEnabled(pointerQuery.matches && !motionQuery.matches)

    updateEnabled()

    if (typeof pointerQuery.addEventListener === 'function') {
      pointerQuery.addEventListener('change', updateEnabled)
      motionQuery.addEventListener('change', updateEnabled)
      return () => {
        pointerQuery.removeEventListener('change', updateEnabled)
        motionQuery.removeEventListener('change', updateEnabled)
      }
    }

    pointerQuery.addListener(updateEnabled)
    motionQuery.addListener(updateEnabled)
    return () => {
      pointerQuery.removeListener(updateEnabled)
      motionQuery.removeListener(updateEnabled)
    }
  }, [])

  useEffect(() => {
    if (!enabled) return

    document.documentElement.classList.add('is-cursor-enabled')
    document.body.classList.add('is-cursor-enabled')

    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event
      mouseRef.current = { x: clientX, y: clientY }

      if (!initializedRef.current) {
        ringPosRef.current = { x: clientX, y: clientY }
        initializedRef.current = true
      }

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`
      }

      const target = event.target as Element | null
      setHoveringInteractive(Boolean(target?.closest(INTERACTIVE_SELECTOR)))
      setVisible(true)
    }

    const handleMouseLeave = () => {
      setVisible(false)
      setHoveringInteractive(false)
    }

    const animateRing = () => {
      ringPosRef.current.x += (mouseRef.current.x - ringPosRef.current.x) * 0.18
      ringPosRef.current.y += (mouseRef.current.y - ringPosRef.current.y) * 0.18

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPosRef.current.x}px, ${ringPosRef.current.y}px, 0)`
      }

      rafRef.current = window.requestAnimationFrame(animateRing)
    }

    rafRef.current = window.requestAnimationFrame(animateRing)
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      if (rafRef.current) {
        window.cancelAnimationFrame(rafRef.current)
      }

      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
      document.documentElement.classList.remove('is-cursor-enabled')
      document.body.classList.remove('is-cursor-enabled')
    }
  }, [enabled])

  if (!enabled) return null

  return (
    <div
      className={`infinity-cursor-layer${visible ? ' is-visible' : ''}${hoveringInteractive ? ' is-hovering' : ''}`}
      aria-hidden="true"
    >
      <div ref={ringRef} className="infinity-cursor-ring" />
      <div ref={dotRef} className="infinity-cursor-dot" />
    </div>
  )
}
