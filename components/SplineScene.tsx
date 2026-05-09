'use client'

import { Suspense, lazy, useState, type ComponentType } from 'react'

const Spline = lazy(() => import('@splinetool/react-spline')) as unknown as ComponentType<{
  scene: string
  onError?: (e: unknown) => void
}>

interface SplineSceneProps {
  scene: string
  className?: string
}

export default function SplineScene({ scene, className = '' }: SplineSceneProps) {
  const [errored, setErrored] = useState(false)

  if (errored) return <SceneFallback />

  return (
    <div className={`w-full h-full ${className}`}>
      <Suspense fallback={<SceneFallback />}>
        <ErrorBoundary onError={() => setErrored(true)}>
          <Spline scene={scene} onError={() => setErrored(true)} />
        </ErrorBoundary>
      </Suspense>
    </div>
  )
}

function SceneFallback() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative">
        <div
          className="w-48 h-48 rounded-full"
          style={{
            background:
              'radial-gradient(circle at 30% 30%, #60A5FA 0%, #2563EB 50%, #1D4ED8 100%)',
            boxShadow: '0 30px 60px -10px rgba(37,99,235,0.5)',
            animation: 'float 6s ease-in-out infinite',
          }}
        />
      </div>
    </div>
  )
}

import { Component, type ReactNode } from 'react'

class ErrorBoundary extends Component<
  { children: ReactNode; onError: () => void },
  { hasError: boolean }
> {
  constructor(props: { children: ReactNode; onError: () => void }) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch() {
    this.props.onError()
  }

  render() {
    if (this.state.hasError) return null
    return this.props.children
  }
}
