"use client"

import { motion } from "framer-motion"
import { FiCalendar, FiClock, FiMapPin, FiArrowRight } from "react-icons/fi"
import { Link } from "react-router-dom"

const intakes = [
  { title: "Professional Barista", duration: "6 weeks", schedule: "Weekdays 9AM - 9PM", weekend: "Saturday 1PM - 8PM" },
  {
    title: "Professional Mixology",
    duration: "5 weeks",
    schedule: "Weekdays 9AM - 9PM",
    weekend: "Saturday 1PM - 8PM",
  },
  {
    title: "Professional Roasting",
    duration: "4 weeks",
    schedule: "Weekdays 9AM - 9PM",
    weekend: "Saturday 1PM - 8PM",
  },
]

export default function AboutSection() {
  return (
    <section className="py-15 relative overflow-hidden">
      {/* Background decorative image */}
      <div className="absolute right-0 bottom-0 w-1/3 h-2/3 opacity-40">
        <img src="/about/coffee-beans-scattered-artistic.jpg" alt="" className="w-full h-full object-cover" aria-hidden="true" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gold uppercase tracking-[0.3em] text-sm font-medium">About Us</span>
            <h2 className="text-4xl lg:text-5xl font-medium text-espresso mt-4 leading-tight">
              Welcome to <span className="italic">Arobisca Training</span>
            </h2>
            <p className="text-coffee-light mt-6 text-lg leading-relaxed">
              Arobisca Training Center was founded to bridge the gap between local talent and global hospitality opportunities. Today, we are a trusted skills institution shaping world-class baristas, beverage artists, and café entrepreneurs.
            </p>
            <p className="text-coffee-light mt-4 text-lg leading-relaxed">
              <span className="font-bold ">Our Training Philosophy : </span>
              We teach by doing—every session is hands-on, skill-based, and aligned with international coffee standards. We prepare you not just to work, but to lead in any café or hotel worldwide.
            </p>
            <Link
              to="/apply-now"
              className="inline-flex items-center gap-2 bg-espresso hover:bg-coffee text-white px-8 py-4 rounded-sm font-medium uppercase tracking-wider transition-all duration-300 mt-8 hover:shadow-lg"
            >
              Enroll Today <FiArrowRight />
            </Link>
          </motion.div>

          {/* Ongoing Intakes */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card rounded-lg shadow-xl p-8 border border-border"
          >
            <div className="space-y-6">
              <h2 className="text-lg font-bold">Our Mission</h2>
              <p>To empower learners with practical, modern hospitality skills that open global doors.</p>
              <h2 className="text-lg font-bold">Our Vision</h2>
              <p>To be Africa’s leading center of excellence for coffee and hospitality training.</p>
              <h2 className="text-lg font-bold">Our Core Values</h2>
              <div>
                <ul className="list-disc ml-10 grid grid-cols-2 gap-2">
                  <li>Excellence</li>
                  <li>Professionalism</li>
                  <li>Creativity</li>
                  <li>Community</li>
                  <li>Integrity</li>
                </ul>
              </div>
            </div>
            <Link
              to="/courses"
              className="inline-flex items-center gap-2 text-gold hover:text-gold-dark font-medium mt-6 transition-colors border-2 px-4 py-1 rounded-sm border-gold hover:border-gold-dark"
            >
              View All Courses <FiArrowRight />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
