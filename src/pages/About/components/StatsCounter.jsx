"use client"

import { motion, useMotionValue, useTransform, animate } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useEffect } from "react"

const stats = [
  { value: 6500, suffix: "+", label: "Students Enrolled" },
  { value: 10, suffix: "+", label: "Courses Offered" },
  { value: 6500, suffix: "+", label: "People Certified" },
  { value: 15, suffix: "+", label: "Expert Instructors" },
]

function AnimatedCounter({ value, suffix }) {
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.round(latest).toLocaleString())
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, { duration: 2.5, ease: "easeOut" })
      return controls.stop
    }
  }, [isInView, value, count])

  return (
    <span ref={ref} className="font-display text-5xl md:text-6xl text-gold max-md:text-4xl">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  )
}

export default function StatsCounter() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      ref={ref}
      className="relative py-24 bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: "url('/courses/pro-basrista.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold font-medium tracking-[0.2em] uppercase text-sm">Our Impact</span>
          <h2 className="font-display text-4xl md:text-5xl text-white mt-4">
            Numbers That <span className="text-gold italic">Speak</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-8 border border-gold/20 bg-espresso/50 backdrop-blur-sm hover:border-gold/50 transition-colors"
            >
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <p className="text-white/70 mt-4 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
