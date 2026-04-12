"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { FiArrowUpRight } from "react-icons/fi"

const services = [
  {
    title: "Supply Services",
    image: "/coffee/coffee.jpg",
    items: ["B2B Roasted Coffee", "Green Coffee", "Equipment for hotels, restaurants, and coffee shops"],
  },
  {
    title: "Beverage Ingredients",
    image: "/coffee/puree.jpg",
    items: ["Premium Syrups", "Fruit Purees", "Specialty Sauces"],
  },
  {
    title: "Consultation Services",
    image: "/coffee/consultations.jpg",
    items: ["Expert consultation services in the coffee industry", "Business planning & strategy", "Menu development"],
  },
  {
    title: "On-Site Training",
    image: "/coffee/on-site-training.jpg",
    items: ["Training sessions conducted on-site", "Team skill development", "Quality assurance programs"],
  },
]

export default function AuxiliaryServices() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mb-16"
        >
          <span className="text-gold font-medium tracking-[0.2em] uppercase text-sm">Beyond Training</span>
          <h2 className="font-display text-4xl md:text-5xl text-espresso mt-4 mb-6">
            Auxiliary <span className="text-gold italic">Services</span>
          </h2>
          <p className="text-espresso-light leading-relaxed">
            Beyond our world-class training programs, we offer a comprehensive range of services to support your coffee
            business journey.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer rounded-lg"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden mb-4 rounded-lg">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/20 to-transparent" />

                {/* Arrow Icon */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-gold flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <FiArrowUpRight className="w-5 h-5 text-espresso" />
                </div>
              </div>

              {/* Content */}
              <h3 className="font-display text-xl text-espresso mb-3 group-hover:text-gold transition-colors">
                {service.title}
              </h3>

              <ul className="space-y-2">
                {service.items.map((item, i) => (
                  <li key={i} className="text-espresso-light text-sm flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full mt-1.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-10">
          Visit Our Arobisca E-commerce to Purchase Coffee and Supplies:{" "}
          <div className="h-5"></div>
          <a
            href="https://arobiscagroup.com/"
            className="bg-gold py-2 px-4 rounded-md text-espresso font-medium hover:bg-gold/80 transition-colors"
            target="_blank"
            rel="noopener noreferrer">
            https://arobiscagroup.com/
          </a>
        </div>
      </div>
    </section>
  )
}
