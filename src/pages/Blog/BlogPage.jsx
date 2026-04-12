"use client"

import { motion } from "framer-motion"
import { FiCalendar, FiUser, FiArrowRight, FiTag, FiChevronRight } from "react-icons/fi"
import { blogs } from "../../data/blogs"
import { Link } from "react-router-dom"

export default function BlogPage() {
  return (
    <div className="min-h-screen md:mt-30">

      <section className="relative h-[50vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/blog/blog-banner.jpg')",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Decorative Elements */}
        <div className="absolute left-0 w-64 h-64 border-l-2 border-t-2 border-gold/80 m-8" />
        <div className="absolute bottom-0 right-0 w-64 h-64 border-r-2 border-b-2 border-gold/80 m-8" />

        {/* Content */}
        <div className="relative z-10 text-center px-4">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block text-gold font-medium tracking-[0.3em] uppercase text-sm mb-4"
          >
            Our Blog
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl md:text-7xl text-white mb-6"
          >
            Articles to Read
          </motion.h1>

          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center gap-2 text-cream/70"
          >
            <Link href="/" className="text-white hover:text-gold transition-colors">
              Blog
            </Link>
            <FiChevronRight className="w-4 h-4 text-white" />
            <span className="text-gold">Contact Us</span>
          </motion.nav>
        </div>

        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream to-transparent" />
      </section>

      {/* Blog Grid */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <motion.article
                key={blog.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow"
              >
                <Link to={`/blog/${blog.slug}`}>
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={blog.coverImage || "/placeholder.svg?height=300&width=400"}
                      alt={blog.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-gold text-espresso text-xs font-medium rounded-full">
                        <FiTag className="text-xs" />
                        {blog.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-4 text-xs text-coffee-light mb-3">
                      <span className="flex items-center gap-1">
                        <FiCalendar className="text-gold" />
                        {blog.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <FiUser className="text-gold" />
                        By {blog.author}
                      </span>
                    </div>

                    <h3 className="text-xl font-medium text-espresso mb-3 group-hover:text-gold transition-colors line-clamp-2">
                      {blog.title}
                    </h3>

                    <p className="text-coffee-light text-sm leading-relaxed mb-4 line-clamp-3">{blog.excerpt}</p>

                    <span className="inline-flex items-center gap-2 text-gold font-medium text-sm">
                      Read More <FiArrowRight />
                    </span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
