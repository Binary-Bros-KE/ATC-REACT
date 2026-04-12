"use client"

import { motion } from "framer-motion"
import { FiHome, FiPhone, FiMail, FiSend, FiChevronRight, FiLoader, FiCheckCircle } from "react-icons/fi"
import { useState } from "react"
import { Link } from "react-router-dom"

const API_URL = import.meta.env.VITE_API_URL;

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        phone: "",
        message: "",
    })

    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState("")

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError("")

        try {
            // API endpoint for inquiries
            const response = await fetch(`${API_URL}/inquiries`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    subject: formData.subject,
                    phone: formData.phone,
                    message: formData.message
                })
            })

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.message || 'Submission failed')
            }

            // Show success modal
            setSuccess(true)
            
            // Reset form
            setFormData({
                name: "",
                email: "",
                subject: "",
                phone: "",
                message: "",
            })

        } catch (err) {
            setError(err.message || 'An error occurred. Please try again.')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen md:mt-30">
            {/* Success Modal */}
            {success && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-white rounded-lg p-8 max-w-md w-full"
                    >
                        <div className="text-center">
                            <div className="w-16 h-16 bg-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FiCheckCircle className="text-green text-3xl" />
                            </div>
                            <h3 className="text-2xl font-semibold text-espresso mb-2">Message Sent!</h3>
                            <p className="text-coffee-light mb-6">
                                Thank you for contacting us. We'll get back to you as soon as possible.
                            </p>
                            <button
                                onClick={() => setSuccess(false)}
                                className="px-6 py-3 bg-gold text-espresso font-medium rounded-lg hover:bg-gold-dark transition-colors"
                            >
                                Close
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}

            {/* Page Banner */}
            <section className="relative h-[50vh] min-h-[300px] flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: "url('/contact/contact.png')",
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
                        Contact Us
                    </motion.span>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="font-display text-5xl md:text-7xl text-white mb-6"
                    >
                         Get in Touch
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
                        <span className="text-gold">Contact Us</span>
                    </motion.nav>
                </div>

                {/* Bottom Fade */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream to-transparent" />
            </section>


            {/* Contact Section */}
            <section className="py-15 bg-cream-light">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-5 gap-12">
                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="lg:col-span-3"
                        >
                            <div className="bg-white rounded-lg shadow-sm p-8 lg:p-12">
                                <div className="mb-8">
                                    <span className="text-gold uppercase tracking-[0.3em] text-sm font-medium">Contact Us</span>
                                    <h2 className="text-3xl lg:text-4xl font-light text-espresso mt-2">
                                        Keep in <span className="italic">Touch</span>
                                    </h2>
                                </div>

                                {error && (
                                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                                        <p className="text-red-600">{error}</p>
                                    </div>
                                )}

                                <form
                                    onSubmit={handleSubmit}
                                    className="space-y-6"
                                >
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-espresso mb-2">
                                                Your Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 rounded-lg border border-cream focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                                                placeholder="John Doe"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-espresso mb-2">
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 rounded-lg border border-cream focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="subject" className="block text-sm font-medium text-espresso mb-2">
                                                Subject *
                                            </label>
                                            <input
                                                type="text"
                                                id="subject"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 rounded-lg border border-cream focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                                                placeholder="Course Inquiry"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-medium text-espresso mb-2">
                                                Phone Number *
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 rounded-lg border border-cream focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                                                placeholder="+254 700 000 000"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-espresso mb-2">
                                            Your Message *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={6}
                                            className="w-full px-4 py-3 rounded-lg border border-cream focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all resize-none"
                                            placeholder="Tell us about your inquiry..."
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold hover:bg-gold-dark text-espresso font-medium rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed min-w-[200px]"
                                    >
                                        {loading ? (
                                            <>
                                                <FiLoader className="animate-spin" />
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                <FiSend />
                                                Send Message
                                            </>
                                        )}
                                    </button>
                                </form>
                            </div>
                        </motion.div>

                        {/* Contact Info & Map */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="lg:col-span-2 space-y-8"
                        >
                            {/* Contact Details */}
                            <div className="bg-espresso-dark rounded-lg p-8 text-cream">
                                <h3 className="text-xl font-medium text-gold mb-6">Contact Information</h3>

                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                                            <FiHome className="text-gold text-xl" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-cream mb-1">Location</h4>
                                            <p className="text-cream/80 text-sm leading-relaxed">
                                                Muindi Mbigu Street
                                                <br />
                                                Eco Bank Towers, 5th floor
                                                <br />
                                                Nairobi, Kenya
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                                            <FiPhone className="text-gold text-xl" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-cream mb-1">Phone</h4>
                                            <p className="text-cream/80 text-sm">
                                                +254 781 726 674
                                                <br />
                                                +254 724 637 787
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                                            <FiMail className="text-gold text-xl" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-cream mb-1">Email</h4>
                                            <a
                                                href="mailto:info@arobiscatrainingcenter.co.ke"
                                                className="text-cream/80 text-sm hover:text-gold transition-colors"
                                            >
                                                info@arobiscatrainingcenter.co.ke
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Google Map */}
                            <div className="rounded-lg overflow-hidden shadow-sm h-80">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1994.4078420807357!2d36.83226526066588!3d-1.2845229018758229!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d718d1d3b1%3A0xe27807f3912640b1!2sEcobank%20Towers%20Branch!5e0!3m2!1sen!2ske!4v1698750916404!5m2!1sen!2ske"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    )
}