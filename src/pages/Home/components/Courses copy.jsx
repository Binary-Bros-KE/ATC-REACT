"use client"

import { motion } from "framer-motion"
import { FiStar, FiClock, FiArrowRight } from "react-icons/fi"
import { Link } from "react-router-dom"

const courses = [
  {
    title: "Professional Barista",
    price: "56,000",
    duration: "6 Weeks",
    reviews: 256,
    rating: 5,
    online: true,
    image: "/courses/pro-basrista.jpg",
    href: "/courses/barista",
  },
  {
    title: "Professional Mixology",
    price: "49,000",
    duration: "5 Weeks",
    reviews: 342,
    rating: 5,
    online: true,
    image: "/courses/pro-mixology.jpg",
    href: "/courses/mixology",
  },
  {
    title: "Professional Roasting",
    price: "72,000",
    duration: "4 Weeks",
    reviews: 634,
    rating: 5,
    online: false,
    image: "/courses/pro-roasting.jpg",
    href: "/courses/roasting",
  },
  {
    title: "Green Coffee",
    price: "45,000",
    duration: "5 Days",
    reviews: 352,
    rating: 5,
    online: true,
    image: "/courses/customer-service.png",
    href: "/courses/green-coffee",
  },
  {
    title: "Basic Barista",
    price: "25,000",
    duration: "5 Days",
    reviews: 132,
    rating: 5,
    online: true,
    image: "/courses/basic-basrista.jpg",
    href: "/courses/basic-barista",
  },
  {
    title: "Manual Brewing",
    price: "40,000",
    duration: "5 Days",
    reviews: 320,
    rating: 5,
    online: true,
    image: "/courses/manual-brewing.jpg",
    href: "/courses/manual-brewing",
  },
]

export default function CoursesSection() {
  return (
    <section className="py-15 bg-secondary">
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
            <h2 className="text-4xl lg:text-5xl font-medium text-espresso">
              Popular <span className="italic">Courses</span>
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
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-lg overflow-hidden shadow-lg group hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={course.image || "/placeholder.svg"}
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
                  <Link to={course.href}>Certification in {course.title}</Link>
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
                  <Link
                    to={course.href}
                    className="text-gold hover:text-gold-dark font-medium text-sm flex items-center gap-1 transition-colors"
                  >
                    Details <FiArrowRight />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
