"use client"

import { motion, useAnimationFrame } from "framer-motion"
import { useRef, useState, useEffect } from "react"

const coffeeTypes = [
  { name: "Mocha", image: "/art/1-mocha.png" },
  { name: "Mixology", image: "https://res.cloudinary.com/dxybhmfpe/image/upload/v1766338851/7_facwwo.jpg" },
  { name: "Cortado", image: "/art/2-cortado.jpg" },
  { name: "Mixology", image: "https://res.cloudinary.com/dxybhmfpe/image/upload/v1766338845/4_oolviz.jpg" },
  { name: "Flat White", image: "/art/3-flat-white.jpg" },
  { name: "Espresso", image: "/art/4-espresso.jpg" },
  { name: "Mixology", image: "https://res.cloudinary.com/dxybhmfpe/image/upload/v1766338846/9_oa4zrm.jpg" },
  { name: "Latte", image: "/art/5-latte.jpg" },
  { name: "Cappuccino", image: "https://res.cloudinary.com/dxybhmfpe/image/upload/v1766338841/2_z28fgd.jpg" },
  { name: "Macchiato", image: "/art/7-macchiato.jpg" },
]

export default function CoffeeTypesSection() {
  const [carouselWidth, setCarouselWidth] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const carouselRef = useRef(null)
  const innerRef = useRef(null)
  const xRef = useRef(0)
  const baseVelocity = -0.5 // pixels per frame - slow smooth scroll

  // Duplicate items for seamless loop
  const duplicatedItems = [...coffeeTypes, ...coffeeTypes, ...coffeeTypes]

  useEffect(() => {
    if (innerRef.current && carouselRef.current) {
      const singleSetWidth = coffeeTypes.length * (176 + 16) // card width + gap
      setCarouselWidth(singleSetWidth)
    }
  }, [])

  useAnimationFrame(() => {
    if (isDragging || !carouselWidth) return

    xRef.current += baseVelocity

    // Reset position for seamless loop
    if (Math.abs(xRef.current) >= carouselWidth) {
      xRef.current = 0
    }

    if (innerRef.current) {
      innerRef.current.style.transform = `translateX(${xRef.current}px)`
    }
  })

  const handleDragStart = () => {
    setIsDragging(true)
  }

  const handleDragEnd = (_, info) => {
    setIsDragging(false)
    xRef.current += info.offset.x

    // Keep within bounds
    if (xRef.current > 0) xRef.current = 0
    if (Math.abs(xRef.current) >= carouselWidth * 2) {
      xRef.current = -carouselWidth
    }
  }

  return (
    <section className="py-15 bg-secondary overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gold uppercase tracking-[0.3em] text-sm font-medium">What You Will Learn</span>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-medium text-espresso mt-4 leading-tight">
              Best Place to Learn <span className="text-gold italic">Coffee Art</span>
            </h2>
            <p className="text-coffee-light mt-6 text-lg leading-relaxed">
              Master the craft of creating exceptional coffee beverages. From classic espressos to intricate latte art,
              our comprehensive training covers every aspect of coffee preparation.
            </p>
          </motion.div>

          {/* Infinite Carousel */}
          <div ref={carouselRef} className="relative overflow-hidden cursor-grab active:cursor-grabbing">
            {/* Gradient overlays for fade effect */}

            <motion.div
              ref={innerRef}
              drag="x"
              dragConstraints={{ left: -carouselWidth * 2, right: 0 }}
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
              className="flex gap-4 py-4"
            >
              {duplicatedItems.map((coffee, index) => (
                <div key={`${coffee.name}-${index}`} className="flex-shrink-0">
                  <div className="relative w-44 h-60 rounded-xl overflow-hidden group">
                    <img
                      src={coffee.image || "/placeholder.svg"}
                      alt={coffee.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      draggable="false"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-espresso/90 via-espresso/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-white font-medium text-lg">{coffee.name}</h3>
                    </div>
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold transition-colors duration-300 rounded-xl" />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
