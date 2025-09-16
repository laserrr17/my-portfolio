"use client"

import dynamic from 'next/dynamic'
import { Suspense } from 'react'

// Dynamically import Prism with no SSR to avoid hydration issues
const Prism = dynamic(() => import('./Prism'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-gradient-to-br from-purple-900/20 to-blue-900/20 animate-pulse" />
  )
})

interface PrismWrapperProps {
  height?: number
  baseWidth?: number
  animationType?: string
  glow?: number
  offset?: { x: number; y: number }
  noise?: number
  transparent?: boolean
  scale?: number
  hueShift?: number
  colorFrequency?: number
  hoverStrength?: number
  inertia?: number
  bloom?: number
  suspendWhenOffscreen?: boolean
  timeScale?: number
  className?: string
  style?: React.CSSProperties
}

export default function PrismWrapper(props: PrismWrapperProps) {
  return (
    <Suspense fallback={
      <div className="w-full h-full bg-gradient-to-br from-purple-900/20 to-blue-900/20 animate-pulse" />
    }>
      <Prism {...props} />
    </Suspense>
  )
}
