"use client"

import { motion } from "framer-motion"

export default function RotatingCircularText({
  text = "Certified Graduates • 500+ Alumni • ",
  size = 180,
  fontSize = 14,
  duration = 20,
  logoText = "A",
  className = "",
}) {
  // Duplicate text to fill the circle
  const displayText = text.repeat(2)
  const characters = displayText.split("")
  const radius = size / 2 - 20

  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      {/* Rotating text */}
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{
          duration: duration,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      >
        <svg viewBox={`0 0 ${size} ${size}`} className="w-full h-full">
          <defs>
            <path
              id="circlePath"
              d={`
                M ${size / 2}, ${size / 2}
                m -${radius}, 0
                a ${radius},${radius} 0 1,1 ${radius * 2},0
                a ${radius},${radius} 0 1,1 -${radius * 2},0
              `}
              fill="none"
            />
          </defs>
          <text className="fill-espresso/70 uppercase tracking-[0.25em]" style={{ fontSize: `${fontSize}px` }}>
            <textPath href="#circlePath" startOffset="0%">
              {displayText}
            </textPath>
          </text>
        </svg>
      </motion.div>

      {/* Center logo */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-18 h-18 rounded-xl flex items-center justify-center">
          <img src="/primary-logo.png" alt="" />
        </div>
      </div>
    </div>
  )
}
