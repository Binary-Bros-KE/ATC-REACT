"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FiMenu, FiX, FiPhone, FiMail, FiMapPin, FiChevronDown } from "react-icons/fi"
import { Link } from "react-router-dom"
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Courses",
    href: "/courses",
    submenu: [
      { name: "All Courses", href: "/courses" },
      { name: "Our Instructors", href: "/tutors" },
    ],
  },
  { name: "Blog", href: "/blog" },
  {
    name: "Our Shop",
    href: "https://arobiscagroup.com/",
    target: "_blank",
    submenu: [
      { name: "Buy Coffee", href: "https://arobiscagroup.com/" },
      { name: "Fruit Purees", href: "https://arobiscagroup.com/" },
      { name: "Syrups", href: "https://arobiscagroup.com/" },
      { name: "Sauces", href: "https://arobiscagroup.com/" },
      { name: "Accessories", href: "https://arobiscagroup.com/" },
      { name: "Coffee Machines", href: "https://arobiscagroup.com/" },
      { name: "B2B Deals", href: "https://arobiscagroup.com/" },
    ],
  },
  {
    name: "Contact",
    href: "/contact",
    submenu: [
      { name: "Contact Us", href: "/contact" },
      { name: "Apply Now", href: "/apply-now" },
    ],
  },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top bar */}
      <div
        className={`hidden lg:block transition-all duration-300 ${scrolled ? "h-0 overflow-hidden opacity-0" : "h-auto opacity-100"}`}
      >
        <div className="bg-purple-100 flex items-center h-10 gap-5">
          <div className="flex bg-purple-400 h-full flex items-center px-4 gap-4 text-white pl-18 pr-10">
            <a href="" target="_blank">
              <AiFillInstagram size={20} />
            </a>
            <a href="https://web.facebook.com/p/Arobisca-Training-Center-100092376466676/?_rdc=1&_rdr#" target="_blank">
              <FaFacebookSquare size={20} />
            </a>
            <a href="https://www.instagram.com/arobisca_training_center/?hl=en" target="_blank">
              <AiFillTikTok size={20} />
            </a>
            <a href="https://www.tiktok.com/@arobiscatraining" target="_blank">
              <FaXTwitter size={20} />
            </a>
          </div>
          <div className="flex justify-between w-full pr-18">
            <div className="flex items-center gap-6 text-sm ">
              <span className="flex items-center gap-2">
                <FiMapPin className="" />
                Muindi Mbigu Street, Nairobi
              </span>
              <span className="flex items-center gap-2">
                <FiMail className="" />
                info@arobiscatrainingcenter.co.ke
              </span>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <a href="https://arobiscatrainingsms.com/" target="_blank">Portal</a>
              <a href="https://arobiscagroup.com/" target="_blank">Buy Coffee</a> |
              <a href="/testimonials">Alumni</a>
            </div>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <motion.nav
        className={`transition-all duration-300 ${scrolled ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-white backdrop-blur-sm"
          }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full flex items-center justify-center">
                <img src="/primary-logo.png" alt="" />
              </div>
              <div className="block">
                <h1 className="text-xl font-bold text-espresso tracking-wide">AROBISCA</h1>
                <p className="text-xs text-green tracking-widest uppercase font-bold">Training Centre</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => link.submenu && setActiveSubmenu(link.name)}
                  onMouseLeave={() => setActiveSubmenu(null)}
                >
                  <Link
                    to={link.href}
                    target={link.target ? link.target : "_self"}
                    className="flex items-center gap-1 text-coffee hover:text-gold transition-colors duration-300 text-sm uppercase tracking-wider font-medium"
                  >
                    {link.name}
                    {link.submenu && <FiChevronDown className="w-3 h-3" />}
                  </Link>

                  {/* Submenu */}
                  <AnimatePresence>
                    {link.submenu && activeSubmenu === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-10 left-0 mt-2 bg-card shadow-xl overflow-hidden min-w-48 border border-border"
                      >
                        {link.submenu.map((sublink) => (
                          <Link
                            key={sublink.name}
                            to={sublink.href}
                            target={link.target ? link.target : "_self"}
                            className="block px-5 py-3 text-sm text-coffee hover:bg-secondary hover:text-gold transition-colors duration-200"
                          >
                            {sublink.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* CTA & Contact */}
            <div className="hidden lg:flex items-center gap-6">
              <a href="tel:0781726674" className="flex items-center gap-2 text-coffee">
                <FiPhone className="text-green" />
                <span className="text-sm">0781 726 674</span>
              </a>
              <Link
                to="/apply-now"
                className="bg-green hover:bg-green-light text-white text-bold px-6 py-2.5 rounded-sm font-medium text-sm uppercase tracking-wider transition-all duration-300 hover:shadow-lg"
              >
                Apply Now
              </Link>
            </div>

            {/* Mobile menu button */}
            <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 text-espresso">
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-card border-t border-border"
            >
              <div className="px-6 py-4 space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                     target={link.target ? link.target : "_self"}
                    className="block text-coffee hover:text-gold transition-colors py-2 text-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-4 border-t border-border">
                  <Link
                    to="/apply-now"
                    className="block w-full bg-gold text-espresso text-center py-3 rounded-sm font-medium uppercase tracking-wider"
                    onClick={() => setIsOpen(false)}
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  )
}
