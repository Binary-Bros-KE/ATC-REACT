"use client"

import { motion } from "framer-motion"
import { FiCalendar, FiUser, FiArrowRight } from "react-icons/fi"
import { blogs } from "../../../data/blogs"
import { Link } from "react-router-dom"

export default function BlogSection() {
  const featuredPost = blogs[1] // Coffee Factory Tour
  const recentPosts = blogs.slice(0, 3) // First 3 posts

  return (
    <section className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="text-gold uppercase tracking-[0.3em] text-sm font-medium">Latest News</span>
          <div className="flex flex-wrap items-end justify-between gap-4 mt-4">
            <h2 className="text-4xl lg:text-5xl font-light text-espresso">
              Our <span className="italic">Blog</span>
            </h2>
            <Link
              to="/blog"
              className="text-gold hover:text-gold-dark font-medium flex items-center gap-2 transition-colors"
            >
              View All Posts <FiArrowRight />
            </Link>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Featured Post */}
          <motion.article
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group"
          >
            <Link to={`/blog/${featuredPost.slug}`} className="block">
              <div className="relative h-72 rounded-lg overflow-hidden mb-6">
                <img
                  src={featuredPost.coverImage || "/placeholder.svg?height=400&width=600"}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center gap-4 text-sm text-coffee-light mb-3">
                <span className="flex items-center gap-1">
                  <FiCalendar className="text-gold" />
                  {featuredPost.date}
                </span>
                <span className="flex items-center gap-1">
                  <FiUser className="text-gold" />
                  By {featuredPost.author}
                </span>
              </div>
              <h3 className="text-2xl font-medium text-espresso mb-3 group-hover:text-gold transition-colors">
                {featuredPost.title}
              </h3>
              <p className="text-coffee-light leading-relaxed mb-4">{featuredPost.excerpt}</p>
              <span className="inline-flex items-center gap-2 text-gold font-medium">
                Read More <FiArrowRight />
              </span>
            </Link>
          </motion.article>

          {/* Post List */}
          <div className="space-y-6">
            {recentPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Link to={`/blog/${post.slug}`} className="flex gap-6">
                  <div className="flex-shrink-0 w-32 h-32 rounded-lg overflow-hidden">
                    <img
                      src={post.coverImage || "/placeholder.svg?height=150&width=150"}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 text-xs text-coffee-light mb-2">
                      <span className="flex items-center gap-1">
                        <FiCalendar className="text-gold" />
                        {post.date}
                      </span>
                    </div>
                    <h4 className="text-lg font-medium text-espresso mb-2 group-hover:text-gold transition-colors line-clamp-2">
                      {post.title}
                    </h4>
                    <p className="text-coffee-light text-sm leading-relaxed line-clamp-2">{post.excerpt}</p>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
