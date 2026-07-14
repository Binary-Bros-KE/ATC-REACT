"use client"

import { motion } from "framer-motion"
import { FiStar, FiClock, FiUsers, FiMonitor } from "react-icons/fi"
import { coursesData } from "../../data/courses"
import { Link } from "react-router-dom"
import CertifyingBodies from "../../components/CertifyingBodies"

export default function CoursesPage() {
  return (
    <main className="min-h-screen md:mt-30">
      {/* Hero Banner */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center bg-black overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/testimonials/background.jpg"
            alt="Courses"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 text-center px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-4">
              Our <span className="italic text-gold">Courses</span>
            </h1>
            <p className="text-white text-lg max-w-2xl mx-auto">
              Elevate your coffee expertise with our professional certification programs
            </p>
          </motion.div>
        </div>

        {/* Decorative corners */}
        <div className="absolute top-4 left-4 w-16 h-16 border-l-2 border-t-2 border-gold/50" />
        <div className="absolute top-4 right-4 w-16 h-16 border-r-2 border-t-2 border-gold/50" />
        <div className="absolute bottom-4 left-4 w-16 h-16 border-l-2 border-b-2 border-gold/50" />
        <div className="absolute bottom-4 right-4 w-16 h-16 border-r-2 border-b-2 border-gold/50" />
      </section>



      {/* Courses Grid */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coursesData.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-lg overflow-hidden shadow-lg group hover:shadow-2xl transition-all duration-300"
              >
                {/* Image */}
                <Link to={`/courses/${course.slug}`}>
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={course.coverImage || "/placeholder.svg"}
                      alt={course.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4 bg-gold text-espresso px-4 py-2 rounded-sm font-bold text-lg shadow-lg">
                      KES {course.price}
                    </div>
                    {course.online && (
                      <div className="absolute top-4 left-4 bg-green text-white px-3 py-1 rounded-sm text-sm font-semibold flex items-center gap-1">
                        <FiMonitor className="w-4 h-4" />
                        Online
                      </div>
                    )}
                  </div>
                </Link>

                {/* Content */}
                <div className="p-6">
                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex">
                      {[...Array(course.rating)].map((_, i) => (
                        <FiStar key={i} className="w-4 h-4 text-gold fill-current" />
                      ))}
                    </div>
                    <span className="text-coffee-light text-sm">({course.reviews})</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-medium text-espresso mb-3 group-hover:text-gold transition-colors">
                    <Link to={`/courses/${course.slug}`}>{course.fullTitle}</Link>
                  </h3>

                  {/* Description */}
                  <p className="text-coffee-light text-sm mb-4 line-clamp-2">{course.shortDescription}</p>

                  {/* Meta Info */}
                  <div className="flex items-center gap-4 mb-4 text-coffee-light text-sm">
                    <div className="flex items-center gap-1">
                      <FiClock className="w-4 h-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FiUsers className="w-4 h-4" />
                      <span>{course.students}</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex gap-2 ">
                  <Link
                    to={`/apply-now`}
                    className="block w-full bg-gold hover:bg-gold-dark text-espresso font-semibold py-3 rounded-sm text-center transition-colors duration-300"
                  >
                    Enroll Now
                  </Link>
                  <Link
                    to={`/courses/${course.slug}`}
                    className="block w-full bg-gold hover:bg-gold-dark text-espresso font-semibold py-3 rounded-sm text-center transition-colors duration-300"
                  >
                    More info
                  </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

            <CertifyingBodies
        title="Examined & Certified By"
        subtitle="Every graduate is examined and certified through our internationally recognized accrediting partners"
      />
    </main>
  )
}
