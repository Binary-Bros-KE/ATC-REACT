"use client"

import {
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiYoutube,
  FiMapPin,
  FiPhone,
  FiMail,
  FiClock,
  FiArrowRight,
} from "react-icons/fi"
import { Link } from "react-router-dom"

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Courses", href: "/courses" },
  { name: "Gallery", href: "/gallery" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
]

const courses = [
  { name: "Professional Barista", href: "/courses/barista" },
  { name: "Professional Mixology", href: "/courses/mixology" },
  { name: "Coffee Roasting", href: "/courses/roasting" },
  { name: "Latte Art", href: "/courses/latte-art" },
  { name: "Green Coffee", href: "/courses/green-coffee" },
]

const socialLinks = [
  { icon: FiFacebook, href: "https://facebook.com/arobisca", label: "Facebook" },
  { icon: FiInstagram, href: "https://instagram.com/arobisca_coffee.ke", label: "Instagram" },
  { icon: FiTwitter, href: "#", label: "Twitter" },
  { icon: FiYoutube, href: "#", label: "YouTube" },
]

export default function Footer() {
  return (
<footer
  className="relative text-primary-foreground bg-[url('/blog/coffee-tour.jpg')] bg-cover bg-center"
>
    <div className="absolute inset-0 bg-black/90"></div>

      {/* Main Footer */}
     <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-15 h-15 bg-white rounded-full flex items-center justify-center">
                <img src="/primary-logo.png" alt="" />
              </div>
              <div>
                <h4 className="text-lg font-semibold tracking-wide">AROBISCA</h4>
                <p className="text-xs text-green tracking-widest uppercase">Training Centre</p>
              </div>
            </div>
            <p className="leading-relaxed mb-6">
              Arobisca Training Centre is a premier institution dedicated to honing the skills of aspiring baristas and
              coffee enthusiasts. Our curriculum delves into the science of coffee, offering insights into brewing,
              roasting, and flavor profiles.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-coffee/30 rounded-full flex items-center justify-center hover:bg-gold hover:text-espresso transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gold">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="hover:text-gold transition-colors duration-300 flex items-center gap-2"
                  >
                    <FiArrowRight className="w-3 h-3" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gold">Our Courses</h4>
            <ul className="space-y-3">
              {courses.map((course) => (
                <li key={course.name}>
                  <Link
                    to={course.href}
                    className="hover:text-gold transition-colors duration-300 flex items-center gap-2"
                  >
                    <FiArrowRight className="w-3 h-3" />
                    {course.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gold">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FiMapPin className="text-gold mt-1 flex-shrink-0" />
                <span className="">Muindi Mbigu Street, Nairobi CBD, Kenya</span>
              </li>
              <li className="flex items-center gap-3">
                <FiPhone className="text-gold flex-shrink-0" />
                <div className="">
                  <p>0781 726 674</p>
                  <p>0724 637 787</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <FiMail className="text-gold flex-shrink-0" />
                <span className="">info@arobiscatrainingcenter.co.ke</span>
              </li>
              <li className="flex items-start gap-3">
                <FiClock className="text-gold mt-1 flex-shrink-0" />
                <div className="">
                  <p>Mon - Fri: 9AM - 9PM</p>
                  <p>Saturday: 1PM - 8PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-coffee relative">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm">
            © {new Date().getFullYear()} Arobisca Training Centre. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/privacy" className="hover:text-gold transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-gold transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
