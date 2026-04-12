import { useParams, useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { FiHome, FiChevronRight, FiClock, FiUsers, FiAward, FiCheckCircle, FiMonitor } from "react-icons/fi"
import { getCourseBySlug } from "../../data/courses"
import { Link } from "react-router-dom"

export default function CourseDetailPage() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const course = getCourseBySlug(slug)

  if (!course) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-light text-espresso mb-4">Course Not Found</h1>
          <Link to="/courses" className="text-gold hover:text-gold-dark">
            Back to Courses
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-secondary md:mt-10">
      {/* Hero Banner with Breadcrumb */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center bg-black overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={course.coverImage}
            alt={course.fullTitle}
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center justify-center gap-2 text-cream/70 text-sm mb-6"
          >
            <Link href="/" className="text-white hover:text-gold transition-colors">
              <FiHome className="w-4 h-4" />
            </Link>
            <FiChevronRight className="w-4 h-4 text-white" />
            <Link href="/courses" className="text-white hover:text-gold transition-colors">
              Courses
            </Link>
            <FiChevronRight className="w-4 h-4 text-white" />
            <span className="text-gold">{course.title}</span>
          </motion.nav>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-medium text-gray-300 mb-4"
          >
            {course.fullTitle}
          </motion.h1>

          {/* Quick Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-6 text-cream/80"
          >
            {course.online && (
              <div className="flex items-center gap-2 text-white">
                <FiMonitor className="w-5 h-5 text-green" />
                <span>Online Classes Available</span>
              </div>
            )}
            <div className="flex items-center gap-2">
              <span className="text-gold font-semibold">Enrollment:</span>
              <span className="text-green font-semibold">{course.enrollment}</span>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2">
            <img 
            src={course.coverImage}
            alt={course.fullTitle}
            className="rounded-lg mb-10"
            />

            {/* Course Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-light text-espresso mb-4">Course Summary</h2>
              <p className="text-coffee-light leading-relaxed">{course.summary}</p>
            </motion.div>

            {/* Requirements */}
            {course.requirements && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-3xl font-light text-espresso mb-4">Requirements</h2>
                <p className="text-coffee-light leading-relaxed">{course.requirements}</p>
              </motion.div>
            )}

            {/* Curriculum */}
            {course.curriculum && course.curriculum.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-3xl font-light text-espresso mb-6">Course Curriculum</h2>
                <div className="space-y-4">
                  {course.curriculum.map((item, index) => (
                    <div
                      key={index}
                      className="bg-card border border-border rounded-lg p-6 hover:border-gold transition-colors"
                    >
                      <div className="flex items-start gap-4">
                        <div className="bg-gold text-espresso w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                          {item.module}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-medium text-espresso mb-2">{item.title}</h3>
                          <p className="text-coffee-light">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Fee Information */}
            {course.admissionIncludes && course.admissionIncludes.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-cream border border-gold/20 rounded-lg p-8"
              >
                <h2 className="text-2xl font-light text-espresso mb-4">
                  Course Fee: <span className="text-gold font-semibold">KES {course.price}</span>
                </h2>
                <p className="text-coffee-light mb-4">This covers:</p>
                <ul className="space-y-2 mb-6">
                  {course.admissionIncludes.map((item, index) => (
                    <li key={index} className="flex items-center gap-2 text-coffee-light">
                      <FiCheckCircle className="w-5 h-5 text-green flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                {course.paymentNote && (
                  <div className="bg-green/10 border border-green/20 rounded-lg p-4">
                    <p className="text-espresso font-medium mb-2">Payment Note:</p>
                    <p className="text-coffee-light">{course.paymentNote}</p>
                  </div>
                )}
              </motion.div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="sticky top-24 bg-card rounded-lg p-8 shadow-lg"
            >
              <h3 className="text-2xl font-light text-espresso mb-6">Course Features</h3>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center justify-between pb-4 border-b border-border">
                  <div className="flex items-center gap-3 text-coffee-light">
                    <FiClock className="w-5 h-5 text-gold" />
                    <span>Duration</span>
                  </div>
                  <span className="font-semibold text-espresso">{course.duration}</span>
                </li>
                <li className="flex items-center justify-between pb-4 border-b border-border">
                  <div className="flex items-center gap-3 text-coffee-light">
                    <FiAward className="w-5 h-5 text-gold" />
                    <span>Lectures</span>
                  </div>
                  <span className="font-semibold text-espresso">{course.lectures}</span>
                </li>
                <li className="flex items-center justify-between pb-4 border-b border-border">
                  <div className="flex items-center gap-3 text-coffee-light">
                    <FiAward className="w-5 h-5 text-gold" />
                    <span>Quizzes</span>
                  </div>
                  <span className="font-semibold text-espresso">{course.quizzes}</span>
                </li>
                <li className="flex items-center justify-between pb-4 border-b border-border">
                  <div className="flex items-center gap-3 text-coffee-light">
                    <FiUsers className="w-5 h-5 text-gold" />
                    <span>Students</span>
                  </div>
                  <span className="font-semibold text-espresso">{course.students}</span>
                </li>
              </ul>

              <div className="bg-gold/10 rounded-lg p-6 mb-6">
                <p className="text-coffee-light text-sm mb-2">Course Fee:</p>
                <p className="text-4xl font-bold text-espresso mb-1">KES {course.price}</p>
              </div>

              <button className="w-full bg-gold hover:bg-gold-dark text-espresso font-bold py-4 rounded-sm transition-colors duration-300 mb-4">
                Enroll Now
              </button>

              <a
                href={`https://wa.me/254700000000?text=I'm interested in the ${course.fullTitle}`}
                className="block w-full bg-green hover:bg-green/90 text-white font-semibold py-4 rounded-sm text-center transition-colors duration-300"
              >
                WhatsApp Us
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  )
}
