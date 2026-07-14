"use client"

import { motion } from "framer-motion"

const examiningBodies = [
  {
    name: "IACU",
    fullName: "International Association of Colleges & Universities",
    logo: "/examiners/IACU.png",
  },
  {
    name: "Kenya Barista Organization",
    fullName: "The Kenya Barista Organization",
    logo: "/examiners/barista-org.jpeg",
  },
]

export default function CertifyingBodies({
  variant = "light",
  title = "Certified & Examined By",
  subtitle = "Our programs are recognized and examined by internationally respected accrediting bodies",
}) {
  const isDark = variant === "dark"

  return (
    <section className={`py-16 ${isDark ? "bg-espresso" : "bg-cream"}`}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-gold uppercase tracking-[0.3em] text-sm font-medium">
            Recognition
          </span>
          <h2 className={`text-3xl lg:text-4xl font-medium mt-4 ${isDark ? "text-white" : "text-espresso"}`}>
            {title}
          </h2>
          <p className={`mt-4 max-w-2xl mx-auto ${isDark ? "text-gray-300" : "text-coffee-light"}`}>
            {subtitle}
          </p>
        </motion.div>

        <div className="flex flex-wrap items-stretch justify-center gap-8">
          {examiningBodies.map((body, index) => (
            <motion.div
              key={body.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`flex items-center gap-5 px-8 py-6 rounded-xl w-full sm:w-auto sm:min-w-[380px] border ${
                isDark
                  ? "bg-white/5 border-gold/20 hover:border-gold/50"
                  : "bg-white border-border hover:border-gold/50 shadow-sm hover:shadow-md"
              } transition-all duration-300`}
            >
              <div className="flex-shrink-0 w-20 h-20 rounded-full bg-white flex items-center justify-center overflow-hidden shadow-md">
                <img
                  src={body.logo || "/placeholder.svg"}
                  alt={`${body.fullName} logo`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className={`text-lg font-semibold ${isDark ? "text-white" : "text-espresso"}`}>
                  {body.name}
                </h3>
                <p className={`text-sm mt-1 ${isDark ? "text-gray-400" : "text-coffee-light"}`}>
                  {body.fullName}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
