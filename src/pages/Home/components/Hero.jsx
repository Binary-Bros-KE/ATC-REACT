"use client"

import { motion } from "framer-motion"
import { FiArrowRight } from "react-icons/fi"
import { Link } from "react-router-dom"

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden">
      <div className="absolute inset-0">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="https://res.cloudinary.com/dxybhmfpe/video/upload/v1765641476/hero-v3_zivp1q.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-espresso/95 via-espresso/80 to-espresso/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 via-transparent to-transparent" />
      </div>

      <div className="relative h-full max-w-7xl mx-auto px-6 flex items-center">
        <div className="max-w-2xl pt-20">
          {/* Subtitle */}
          <motion.span
            className="inline-block text-gold uppercase tracking-[0.3em] text-sm font-medium mb-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Kenya's Leading Barista institution
          </motion.span>

          {/* Title */}
          <motion.h1
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-white leading-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Training World-Class <span className="text-gold italic">Baristas</span> & Hospitality Professionals
          </motion.h1>

          {/* Short tagline instead of long description */}
          <motion.p
            className="text-xl text-gray-300 mb-10 leading-relaxed max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
           Your journey to global coffee excellence starts here.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <Link
              to="/apply-now"
              className="bg-gold hover:bg-gold-dark text-espresso px-8 py-4 rounded-sm font-medium uppercase tracking-wider transition-all duration-300 flex items-center gap-2 hover:shadow-lg hover:shadow-gold/20"
            >
             Enroll Now <FiArrowRight />
            </Link>
            <Link
              to="/courses"
              className="border-2 border-white/30 hover:border-gold text-white hover:text-gold px-8 py-4 rounded-sm font-medium uppercase tracking-wider transition-all duration-300"
            >
              Explore Courses
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1.2, duration: 0.6 },
          y: { repeat: Number.POSITIVE_INFINITY, duration: 2, delay: 1.5 },
        }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-1.5 bg-gold rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
          />
        </div>
        <span className="text-xs uppercase tracking-widest">Scroll</span>
      </motion.div>
    </section>
  )
}
