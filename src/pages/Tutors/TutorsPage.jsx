"use client"

import { motion } from "framer-motion"
import { FiInstagram, FiTwitter, FiFacebook, FiChevronRight } from "react-icons/fi"
import { FaWhatsapp } from "react-icons/fa"
import { Link } from "react-router-dom"

const tutorsData = [
  {
    id: 1,
    name: "T. WANDIA",
    title: "Head Trainer",
    image: "/teachers/head__teacher.jpg",
    socials: {
      instagram: "#",
      twitter: "#",
      facebook: "#",
      whatsapp: "#",
    },
  },
  {
    id: 2,
    name: "JOAN",
    title: "Head Trainer",
    image: "/teachers/head__trainer.jpg",
    socials: {
      instagram: "#",
      twitter: "#",
      facebook: "#",
      whatsapp: "#",
    },
  },
  {
    id: 3,
    name: "CASEY.M",
    title: "Liquorer",
    image: "/teachers/liquorer.jpg",
    socials: {
      instagram: "#",
      twitter: "#",
      facebook: "#",
      whatsapp: "#",
    },
  },
  {
    id: 4,
    name: "DORAH",
    title: "Head of Production",
    image: "/teachers/head__production.jpg",
    socials: {
      instagram: "#",
      twitter: "#",
      facebook: "#",
      whatsapp: "#",
    },
  },
  {
    id: 5,
    name: "Y. WESLEY",
    title: "Skills Instructor",
    image: "/teachers/coffee_skill_instructor.jpg",
    socials: {
      instagram: "#",
      twitter: "#",
      facebook: "#",
      whatsapp: "#",
    },
  },
  {
    id: 6,
    name: "BRENDA",
    title: "Head Trainer",
    image: "/teachers/head__trainer_2.jpg",
    socials: {
      instagram: "#",
      twitter: "#",
      facebook: "#",
      whatsapp: "#",
    },
  },
]

export default function TutorsPage() {
  return (
    <main className="min-h-screen md:mt-30">

      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/about/about-1.jpg')",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/80" />

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
            Meet the professionals
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl md:text-7xl text-white mb-6"
          >
            Our Tutors
          </motion.h1>

          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center gap-2 text-cream/70"
          >
            <Link href="/" className="text-white hover:text-gold transition-colors">
              Home
            </Link>
            <FiChevronRight className="w-4 h-4 text-white" />
            <span className="text-gold">Tutors</span>
          </motion.nav>
        </div>

        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream to-transparent" />
      </section>

      {/* Tutors Grid */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-gold uppercase tracking-[0.3em] text-sm font-medium">Excellence in Teaching</span>
            <h2 className="text-4xl lg:text-5xl font-light text-espresso mt-4">
              Expert <span className="italic">Instructors</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {tutorsData.map((tutor, index) => (
              <motion.div
                key={tutor.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                  {/* Image Container */}
                  <div className="relative h-100 overflow-hidden">
                    <img
                      src={tutor.image || "/placeholder.svg?height=400&width=400"}
                      alt={tutor.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-espresso via-transparent to-transparent" />
                  </div>

                  {/* Social Links */}
                  <div className="bg-card p-4">
                    {/* Info Overlay */}
                    <div className="mb-4 text-center transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-2xl font-bold text-cream mb-1">{tutor.name}</h3>
                      <p className="text-gold text-sm uppercase tracking-wider">— {tutor.title} —</p>
                    </div>
                    <div className="flex items-center justify-center gap-4">
                      <a
                        href={tutor.socials.instagram}
                        className="w-10 h-10 rounded-full bg-cream hover:bg-gold flex items-center justify-center text-espresso transition-all duration-300 hover:scale-110"
                        aria-label="Instagram"
                      >
                        <FiInstagram className="w-5 h-5" />
                      </a>
                      <a
                        href={tutor.socials.twitter}
                        className="w-10 h-10 rounded-full bg-cream hover:bg-gold flex items-center justify-center text-espresso transition-all duration-300 hover:scale-110"
                        aria-label="Twitter"
                      >
                        <FiTwitter className="w-5 h-5" />
                      </a>
                      <a
                        href={tutor.socials.facebook}
                        className="w-10 h-10 rounded-full bg-cream hover:bg-gold flex items-center justify-center text-espresso transition-all duration-300 hover:scale-110"
                        aria-label="Facebook"
                      >
                        <FiFacebook className="w-5 h-5" />
                      </a>
                      <a
                        href={tutor.socials.whatsapp}
                        className="w-10 h-10 rounded-full bg-green hover:bg-green/80 flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
                        aria-label="WhatsApp"
                      >
                        <FaWhatsapp className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
