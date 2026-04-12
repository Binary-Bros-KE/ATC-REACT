"use client"

import { motion } from "framer-motion"
import { FiCoffee, FiDroplet, FiEye, FiTool } from "react-icons/fi"

const highlights = [
  { icon: FiCoffee, label: "Espresso Mastery" },
  { icon: FiDroplet, label: "Precision Brewing" },
  { icon: FiEye, label: "Sensory Training" },
  { icon: FiTool, label: "Professional Equipment" },
]

export default function CoffeeLabSection() {
  return (
    <section className="relative py-10 bg-black text-white overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.15),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center w-full"
        >
          <span className="uppercase tracking-[0.35em] text-gold text-sm">
            Our Signature Space
          </span>
          <h2 className="text-4xl lg:text-5xl font-medium mt-4">
            The <span className="italic">Arobisca</span> Coffee Laboratory
          </h2>
          <p className="text-white/70 mt-6 leading-relaxed">
            A purpose-built training laboratory where baristas develop
            technical precision, sensory confidence, and real-world café skills
            using industry-grade equipment.
          </p>
        </motion.div>

        {/* Main Media */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden mb-12"
        >
          {/* VIDEO OR HERO IMAGE */}
          <video
            src="https://res.cloudinary.com/dxybhmfpe/video/upload/v1767196087/Video-4_i1dtze.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-[480px] object-cover"
          />
        </motion.div>

        {/* Media Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            "https://res.cloudinary.com/dxybhmfpe/image/upload/v1767195952/Arobisca-Laboratory-1_gajct0.jpg",
            "https://res.cloudinary.com/dxybhmfpe/image/upload/v1767195953/Arobisca-Laboratory-2_xvqk00.jpg",
            "https://res.cloudinary.com/dxybhmfpe/image/upload/v1767195954/Arobisca-Laboratory-3_bcwe5i.jpg",
          ].map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-xl overflow-hidden"
            >
              <img
                src={img}
                alt="Coffee Lab"
                className="w-full h-72 object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>

        {/* Highlights */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl p-5"
            >
              <item.icon className="w-6 h-6 text-gold" />
              <span className="font-medium">{item.label}</span>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 w-full flex items-center justify-center">
          <a href="/arobisca-lab" className="border-2 border-gold rounded py-2 px-4 text-gold hover:bg-gold hover:text-black transition">Read More</a>
        </div>
      </div>
    </section>
  )
}
