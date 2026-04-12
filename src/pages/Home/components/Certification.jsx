"use client"

import { motion } from "framer-motion"
import { FiAward, FiUsers, FiArrowRight, FiCheck } from "react-icons/fi"
import RotatingCircularText from "../ui/RotatingCircularText"
import { Link } from "react-router-dom"
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

export default function CertificationSection() {
  return (
    <section className="py-15 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image Composition */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative z-10">
              <img
                src="https://res.cloudinary.com/dxybhmfpe/image/upload/v1765999380/about-3_r2r8wj.jpg"
                alt="Professional barista creating latte art"
                className="w-full h-150 max-w-md rounded-2xl shadow-2xl object-cover"
              />
              {/* Gold accent frame */}
            </div>

            {/* Secondary Image - Overlapping */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-8 -right-8 lg:right-12 z-20 max-md:-right-3"
            >
              <img
                src="https://res.cloudinary.com/dxybhmfpe/image/upload/v1765999381/about-1_tqjrkg.jpg"
                alt="Barista certification"
                className="w-48 lg:w-56 rounded-xl shadow-xl border-4 border-white"
              />
            </motion.div>

            {/* Stats Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute top-4 -right-6 lg:right-0 z-20 bg-white rounded-full p-2 shadow-xl max-md:top-20 max-md:-right-8"
            >
              <RotatingCircularText
                text="500+ Certified Graduates • Excellence in Training • "
                size={160}
                fontSize={11}
                duration={25}
                logoText="A"
              />
            </motion.div>

            {/* Decorative elements */}
            <div className="absolute -left-10 top-1/2 w-32 h-32 bg-green-sage/20 rounded-full blur-2xl" />
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold uppercase tracking-[0.3em] text-sm font-medium">Why Choose Us</span>
            <h2 className="text-4xl lg:text-5xl font-medium text-espresso mt-4 leading-tight">
              Earn Your <span className="text-gold italic">Professional</span> Certification
            </h2>

            {/* Feature Cards */}
            <div className="mt-5 space-y-6">
              {/* Certification Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex gap-5 p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 group"
              >
                <div className="flex-shrink-0 w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300">
                  <FiAward className="w-7 h-7 text-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-espresso">Industry Certification</h3>
                  <p className="text-coffee-light mt-1">
                    Internationally recognized credentials that open doors to premium coffee establishments worldwide.
                  </p>
                </div>
              </motion.div>

              {/* Instructors Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex gap-5 p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 group"
              >
                <div className="flex-shrink-0 w-14 h-14 bg-green-sage/20 rounded-xl flex items-center justify-center group-hover:bg-green-sage/30 transition-colors duration-300">
                  <FiUsers className="w-7 h-7 text-green-sage" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-espresso">Expert Instructors</h3>
                  <p className="text-coffee-light mt-1">
                    Learn from seasoned professionals with years of hands-on experience in world-class coffee
                    establishments.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Benefits List */}
            <div className="mt-8 grid grid-cols-2 max-md:grid-cols-1 gap-3">
              {["Internationally aligned curriculum", "Hands-on commercial machines & brewing labs", "Domestic & Global job placement support", "Experienced & certified trainers", "Strong alumni network in Africa ,UAE, Qatar, Saudi Arabia,Oman, Kuwait , Bahrain ,Europe ,Asia ,USA", "Flexible schedules & short courses"].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-2 text-coffee"
                >
                  <IoMdCheckmarkCircleOutline className="w-5 h-5 text-green flex-shrink-0" />
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-10"
            >
              <Link
                to="/apply-now"
                className="inline-flex items-center gap-3 bg-espresso hover:bg-coffee text-white px-8 py-4 rounded-lg font-medium uppercase tracking-wider transition-all duration-300 group"
              >
                Start Your Journey
                <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
