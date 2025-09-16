"use client"

import dynamic from 'next/dynamic'
import { Suspense } from 'react'

// Dynamically import PixelBlast with no SSR to avoid hydration issues
const PixelBlast = dynamic(() => import('./PixelBlast'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-gradient-to-br from-purple-900/20 to-blue-900/20 animate-pulse" />
  )
})

interface PixelBlastWrapperProps {
  variant?: string
  pixelSize?: number
  color?: string
  patternScale?: number
  patternDensity?: number
  pixelSizeJitter?: number
  enableRipples?: boolean
  rippleSpeed?: number
  rippleThickness?: number
  rippleIntensityScale?: number
  liquid?: boolean
  liquidStrength?: number
  liquidRadius?: number
  liquidWobbleSpeed?: number
  speed?: number
  edgeFade?: number
  transparent?: boolean
  className?: string
  style?: React.CSSProperties
}

export default function PixelBlastWrapper(props: PixelBlastWrapperProps) {
  return (
    <Suspense fallback={
      <div className="w-full h-full bg-gradient-to-br from-purple-900/20 to-blue-900/20 animate-pulse" />
    }>
      <PixelBlast {...props} />
    </Suspense>
  )
}
