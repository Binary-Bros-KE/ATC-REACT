"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { FiArrowRight } from "react-icons/fi"
import { Link } from "react-router-dom"

export default function AboutIntro() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold font-medium tracking-[0.2em] uppercase text-sm">Welcome to Arobisca</span>

            <h2 className="font-display text-4xl md:text-5xl text-espresso mt-4 mb-6">
              Where Passion Meets
              <span className="block text-gold italic">Craftsmanship</span>
            </h2>

            <div className="w-20 h-0.5 bg-gold mb-8" />

            <p className="text-espresso-light leading-relaxed mb-6">
              A place where coffee enthusiasts transform into master baristas. Our mission is to unlock your barista
              potential and provide you with comprehensive courses, ranging from espresso basics to the art of latte
              creation.
            </p>

            <p className="text-espresso-light leading-relaxed mb-8">
              Delve into the science of coffee with our Coffee Chemistry course, where you'll gain insights into brewing
              techniques, roasting processes, and flavor profiles. Additionally, our Business Insights module covers
              coffee shop management, customer service, and menu creation.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-espresso text-white px-8 py-4 font-medium hover:bg-gold hover:text-espresso transition-all duration-300 group"
            >
              <span>Enroll Today</span>
              <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Right Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              {/* Main Large Image */}
              <div className="col-span-2 relative h-72 overflow-hidden">
                <img src="/about/about-1.jpg" alt="Barista Training" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/40 to-transparent" />
              </div>

              {/* Two Smaller Images */}
              <div className="relative h-48 overflow-hidden">
                <img src="/about/about-2.jpg" alt="Latte Art" className="w-full h-full object-cover" />
              </div>

              <div className="relative h-48 overflow-hidden">
                <img src="/about/about-3.jpg" alt="Coffee Roasting" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Decorative Frame */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-gold -z-10" />

            {/* Experience Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -left-8 bottom-40 bg-gold text-espresso p-6 shadow-xl max-md:-left-1"
            >
              <span className="block font-display text-4xl">10+</span>
              <span className="text-sm font-medium">Years of Excellence</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
