"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"

const testimonials = [
  {
    name: "Laura Assumpta",
    role: "Alumni",
    image: "/professional-african-woman-portrait-smiling.jpg",
    quote:
      "Attending Arobisca Training Centre was a game changer for me. The comprehensive courses and hands-on experience were invaluable. I can now confidently create amazing coffee art!",
  },
  {
    name: "Nyongesa Evans",
    role: "Alumni",
    image: "/professional-african-man-portrait-smiling.jpg",
    quote:
      "Arobisca Training Centre exceeded my expectations. The instructors are passionate and knowledgeable. I now have a deep understanding of coffee chemistry and brewing techniques.",
  },
  {
    name: "Kelvin Igeria",
    role: "Alumni",
    image: "/young-african-man-professional-portrait.jpg",
    quote:
      "Enrolling at Arobisca Training Centre was a fantastic decision. The instructors' expertise is unmatched, and the hands-on practice in a real cafe setting was invaluable.",
  },
]

export default function AboutTestimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeIndex, setActiveIndex] = useState(0)

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section
      ref={ref}
      className="relative py-15 bg-cover bg-center"
      style={{
        backgroundImage: "url('/coffee-shop-cozy-interior-dark-moody.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-espresso/90" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold font-medium tracking-[0.2em] uppercase text-sm">Testimonials</span>

            <h2 className="font-display text-4xl md:text-5xl text-white mt-4 mb-8">
              What Our Alumni
              <span className="block text-gold italic">Say About Us</span>
            </h2>

            {/* Navigation */}
            <div className="flex items-center gap-4">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-espresso transition-all"
              >
                <FiChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-espresso transition-all"
              >
                <FiChevronRight className="w-5 h-5" />
              </button>

              <span className="text-cream/50 ml-4">
                <span className="text-gold font-display text-2xl">{String(activeIndex + 1).padStart(2, "0")}</span>
                <span className="mx-2 text-white">/</span>
                <span className="text-white">{String(testimonials.length).padStart(2, "0")}</span>
              </span>
            </div>
          </motion.div>

          {/* Right Testimonial Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-cream p-8 md:p-12 relative">
              {/* Quote Icon */}
              <div className="absolute -top-6 left-8 w-12 h-12 bg-gold flex items-center justify-center">
                <svg className="w-6 h-6 text-espresso" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Testimonial Content */}
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-gray-300 text-lg leading-relaxed mb-8">"{testimonials[activeIndex].quote}"</p>

                <div className="flex items-center gap-4">
                  <img
                    src={"/testimonials/profile.png"}
                    alt={testimonials[activeIndex].name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-gold"
                  />
                  <div>
                    <h4 className="font-display text-xl text-white">{testimonials[activeIndex].name}</h4>
                    <p className="text-gold text-sm">{testimonials[activeIndex].role}</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-gold/30 -z-10 max-md:-right-0" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
