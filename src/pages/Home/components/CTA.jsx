"use client"

import { motion } from "framer-motion"
import { FiArrowRight, FiPhone } from "react-icons/fi"
import { Link } from "react-router-dom"

export default function CTASection() {
  return (
    <section className="py-15 relative overflow-hidden">
      {/* Decorative elements */}
      <img
        className="absolute inset-0 blur-3xl bg-black/50"
        src="/blog/coffee-tour.jp"
        alt=""
      />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center max-w-3xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-purple-400 uppercase tracking-[0.3em] text-sm font-medium"
          >
            Start Your Journey
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl xl:text-6xl font-light text-white mt-4 mb-6"
          >
            Ready to Become a <span className="italic">Master Barista?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-200 text-lg mb-10 leading-relaxed"
          >
            Join hundreds of successful graduates who have transformed their passion for coffee into rewarding careers.
            Enroll today and take the first step towards mastering the art of coffee.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link
              to="/contact"
              className="bg-green text-white px-10 py-4 rounded-sm font-medium uppercase tracking-wider transition-all duration-300 flex items-center gap-2 hover:shadow-lg"
            >
              Enroll Now <FiArrowRight />
            </Link>
            <a
              href="tel:0781726674"
              className="border-2 border-white text-white px-10 py-4 rounded-sm font-medium uppercase tracking-wider transition-all duration-300 flex items-center gap-2"
            >
              <FiPhone /> Call Us
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
