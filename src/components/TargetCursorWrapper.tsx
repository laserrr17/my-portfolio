"use client"

import dynamic from 'next/dynamic'
import { Suspense } from 'react'

// Dynamically import TargetCursor with no SSR to avoid hydration issues
const TargetCursor = dynamic(() => import('./TargetCursor'), {
  ssr: false,
  loading: () => null // No loading state needed for cursor
})

interface TargetCursorWrapperProps {
  targetSelector?: string
  spinDuration?: number
  hideDefaultCursor?: boolean
}

export default function TargetCursorWrapper(props: TargetCursorWrapperProps) {
  return (
    <Suspense fallback={null}>
      <TargetCursor {...props} />
    </Suspense>
  )
}
