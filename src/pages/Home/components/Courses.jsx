"use client"

import { motion } from "framer-motion"
import { FiStar, FiClock, FiArrowRight } from "react-icons/fi"
import { coursesData } from "../../../data/courses"
import { Link } from "react-router-dom"

export default function CoursesSection() {
  return (
    <section className="py-20 lg:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="text-gold uppercase tracking-[0.3em] text-sm font-medium">Our Courses</span>
          <div className="flex flex-wrap items-end justify-between gap-4 mt-4">
            <h2 className="text-4xl lg:text-5xl font-light text-espresso">
              Featured <span className="italic">Courses</span>
            </h2>
            <Link
              to="/courses"
              className="text-gold hover:text-gold-dark font-medium flex items-center gap-2 transition-colors"
            >
              View All Courses <FiArrowRight />
            </Link>
          </div>
        </motion.div>

        {/* Course Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coursesData.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-lg overflow-hidden shadow-lg group hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={course.coverImage || "/placeholder.svg"}
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-gold text-espresso px-3 py-1 rounded-sm font-semibold">
                  KES {course.price}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex">
                    {[...Array(course.rating)].map((_, i) => (
                      <FiStar key={i} className="w-4 h-4 text-gold fill-current" />
                    ))}
                  </div>
                  <span className="text-coffee-light text-sm">({course.reviews} Reviews)</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-medium text-espresso mb-2 group-hover:text-gold transition-colors">
                  <Link to={`/courses/${course.slug}`}>Certification in {course.title}</Link>
                </h3>

                {/* Online Badge */}
                {course.online && (
                  <span className="inline-block text-green text-sm font-medium mb-4">Online Classes Available</span>
                )}

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-2 text-coffee-light text-sm">
                    <FiClock />
                    <span>Duration: {course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                     <Link to={`/apply-now`} 
                     className="bg-gold text-white px-4 py-2 rounded-sm font-medium hover:bg-gold-dark transition-colors"
                     >
                     Enroll
                     </Link>
                    <Link
                      to={`/courses/${course.slug}`}
                      className="text-gold hover:text-gold-dark font-medium text-sm flex items-center gap-1 transition-colors"
                    >
                      Details <FiArrowRight />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
