"use client"

import { motion } from "framer-motion"
import { FiChevronRight } from "react-icons/fi"
import { Link } from "react-router-dom"

export default function AboutHero() {
  return (
    <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/about/about-cover.jpg')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80" />

      {/* Decorative Elements */}
      <div className="absolute left-0 w-64 h-64 border-l-2 border-t-2 border-gold/80 m-8" />
      <div className="absolute bottom-0 right-0 w-64 h-64 border-r-2 border-b-2 border-gold/80 m-8" />

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block text-gold font-medium tracking-[0.3em] uppercase text-sm mb-4"
        >
          Discover Our Story
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-5xl md:text-7xl text-white mb-6"
        >
          About Us
        </motion.h1>

        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center gap-2 text-cream/70"
        >
          <Link href="/" className="text-white hover:text-gold transition-colors">
            Home
          </Link>
          <FiChevronRight className="w-4 h-4 text-white" />
          <span className="text-gold">About Us</span>
        </motion.nav>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream to-transparent" />
    </section>
  )
}
