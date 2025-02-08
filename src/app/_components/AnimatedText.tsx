"use client"

import { useEffect, useState } from "react"

interface AnimatedTextProps {
  text: string
  className?: string
  delay?: number
  speed?: number
}

export default function AnimatedText({ text, className = "", delay = 0, speed = 30 }: AnimatedTextProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => {
      let currentIndex = 0
      const intervalId = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayedText(text.slice(0, currentIndex))
          currentIndex++
        } else {
          clearInterval(intervalId)
          // Hide cursor after text is complete
          setShowCursor(false)
        }
      }, speed)

      return () => clearInterval(intervalId)
    }, delay)

    return () => clearTimeout(timeout)
  }, [text, speed, delay])

  return (
    <span className={className}>
      {displayedText}
      {showCursor && <span className="animate-blink">|</span>}
    </span>
  )
}

