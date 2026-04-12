import { useParams, useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { FiCalendar, FiUser, FiTag, FiArrowLeft, FiChevronRight } from "react-icons/fi"
import { Link } from "react-router-dom"
import { getBlogBySlug } from "../../data/blogs"

export default function BlogDetailPage() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const blog = getBlogBySlug(slug)

  if (!blog) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-light text-espresso mb-4">Blog Post Not Found</h1>
          <Link to="/blog" className="text-gold hover:text-gold-dark">
            Back to Blog
          </Link>
        </div>
      </main>
    )
  }

  return (
    <div className="min-h-screen md:mt-30">
      {/* Page Banner */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-espresso-black/60"></div>
        <img
          src={blog.bannerImage || blog.coverImage}
          alt={blog.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-1 bg-gold text-white text-sm font-medium rounded-full mb-4">
              {blog.category}
            </span>
            <h1 className="text-3xl lg:text-5xl text-white mb-6 leading-tight">{blog.title}</h1>
            <div className="flex items-center justify-center gap-4 text-cream/90 text-sm flex-wrap">
              <Link href="/" className="text-white hover:text-gold transition-colors">
                Home
              </Link>
              <span className="text-white">/</span>
              <Link href="/blog" className="text-white hover:text-gold transition-colors">
                Blog
              </Link>
              <span className="text-white">/</span>
              <span className="text-gold line-clamp-1">{blog.title}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-20 bg-cream-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-12 flex-col lg:flex-row">
            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex-1"
            >
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-gold hover:text-gold-dark mb-8 font-medium"
              >
                <FiArrowLeft /> Back to Blog
              </Link>

              <div className="bg-white rounded-lg shadow-sm p-8 lg:p-12">
                {/* Featured Image */}
                <div className="relative h-96 rounded-lg overflow-hidden mb-8">
                  <img
                    src={blog.coverImage || "/placeholder.svg"}
                    alt={blog.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-coffee-light mb-6 pb-6 border-b border-cream">
                  <span className="flex items-center gap-2">
                    <FiCalendar className="text-gold" />
                    {blog.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <FiUser className="text-gold" />
                    By {blog.author}
                  </span>
                  <span className="flex items-center gap-2">
                    <FiTag className="text-gold" />
                    {blog.category}
                  </span>
                </div>

                {/* Content */}
                <div className="prose prose-lg max-w-none">
                  <p className="text-coffee-light leading-relaxed mb-6">{blog.content.intro}</p>

                  {blog.content.body.map((paragraph, index) => (
                    <p key={index} className="text-coffee-light leading-relaxed mb-6">
                      {paragraph.text}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Sidebar */}
            {blog.sidebarImages && blog.sidebarImages.length > 0 && (
              <motion.aside
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="lg:w-80"
              >
                <div className="sticky top-24 space-y-4">
                  {blog.sidebarImages.map((image, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="rounded-lg overflow-hidden shadow-sm"
                    >
                      <img
                        src={image || "/placeholder.svg"}
                        alt={`Gallery ${index + 1}`}
                        className="w-full h-auto object-cover"
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.aside>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
