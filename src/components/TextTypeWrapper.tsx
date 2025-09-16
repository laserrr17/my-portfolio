"use client"

import dynamic from 'next/dynamic'
import { Suspense } from 'react'

// Dynamically import TextType with no SSR to avoid hydration issues
const TextType = dynamic(() => import('./TextType'), {
  ssr: false,
  loading: () => <div className="h-6" /> // Placeholder height for typing effect
})

interface TextTypeWrapperProps {
  text: string[]
  as?: string
  typingSpeed?: number
  initialDelay?: number
  pauseDuration?: number
  deletingSpeed?: number
  loop?: boolean
  className?: string
  showCursor?: boolean
  hideCursorWhileTyping?: boolean
  cursorCharacter?: string
  cursorClassName?: string
  cursorBlinkDuration?: number
  textColors?: string[]
  variableSpeed?: any
  onSentenceComplete?: () => void
  startOnVisible?: boolean
  reverseMode?: boolean
}

export default function TextTypeWrapper(props: TextTypeWrapperProps) {
  return (
    <Suspense fallback={<div className="h-6" />}>
      <TextType {...props} />
    </Suspense>
  )
}
