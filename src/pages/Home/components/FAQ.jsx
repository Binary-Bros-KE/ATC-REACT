"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FiPlus, FiMinus, FiArrowRight } from "react-icons/fi"
import { Link } from "react-router-dom"

const faqs = [
  {
    question: "What courses does Arobisca Training Centre offer?",
    answer:
      "Arobisca Training Centre offers a range of comprehensive courses for coffee enthusiasts. These courses cover everything from espresso basics to advanced techniques like latte art, coffee chemistry, and business insights for coffee shop management.",
  },
  {
    question: "How experienced are the instructors at Arobisca Training Centre?",
    answer:
      "The instructors at Arobisca Training Centre are seasoned experts in the field of coffee. They bring years of hands-on experience, industry recognition, and a passion for coffee to every class. With their guidance, students can expect to elevate their skills from novice to proficient baristas.",
  },
  {
    question: "Is Certification Provided Upon Completion of Courses?",
    answer:
      "Yes, upon graduation, you will receive certification from Arobisca Training Centre, making you a certified barista ready to excel in the coffee industry. Our certification is recognized for producing top-notch baristas.",
  },
  {
    question: "What are the class schedules and duration?",
    answer:
      "Our courses run on weekdays from 9AM to 9PM and Saturdays from 1PM to 8PM. Course duration varies from 5 days for basic courses to 6 weeks for professional certifications.",
  },
]

const images = [
  "/FAQs/1.jpg",
  "/FAQs/2.jpg",
  "/FAQs/3.jpg",
  "/FAQs/4.jpg",
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* FAQ Content */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="text-green uppercase tracking-[0.3em] text-sm font-bold">Have Questions?</span>
            <h2 className="text-4xl lg:text-5xl font-medium text-espresso mt-4 mb-8">
              Frequently Asked <span className="italic">Questions</span>
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="border border-border rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                    className="w-full flex items-center justify-between p-5 text-left bg-card hover:bg-secondary transition-colors"
                  >
                    <span className="font-bold text-espresso pr-4">{faq.question}</span>
                    {openIndex === index ? (
                      <FiMinus className="w-5 h-5 text-gold flex-shrink-0" />
                    ) : (
                      <FiPlus className="w-5 h-5 text-gold flex-shrink-0" />
                    )}
                  </button>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="p-5 pt-0 text-coffee-light leading-relaxed">{faq.answer}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

            <Link
              to="/apply-now"
              className="inline-flex items-center gap-2 bg-espresso hover:bg-coffee text-white px-8 py-4 rounded-sm font-medium uppercase tracking-wider transition-all duration-300 mt-8"
            >
              Career With Us <FiArrowRight />
            </Link>
          </motion.div>

          {/* Images Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="aspect-square rounded-lg overflow-hidden"
              >
                <img
                  src={image || "/placeholder.svg"}
                  alt={`Arobisca Training ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
