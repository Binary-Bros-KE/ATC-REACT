import { motion } from "framer-motion"
import { FiHome, FiPhone, FiMail, FiSend, FiCheckCircle, FiChevronRight, FiLoader } from "react-icons/fi"
import { useState } from "react"
import { courses } from "../../data/courses"
import { Link } from "react-router-dom"
import CertifyingBodies from "../../components/CertifyingBodies"

const API_URL = import.meta.env.VITE_API_URL;

export default function ApplyNowPage() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        course: "",
        gender: "",
        religion: "",
        nationality: "",
        phone: "",
        idPassport: "",
        email: "",
        marketingConsent: false,
        emergencyContact: {
            firstName: "",
            lastName: "",
            relation: "",
            phone: ""
        },
        preferredStartDate: "",
        additionalInfo: "",
        preferredClassTime: "",
    })

    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState("")

    const handleChange = (e) => {
        const { name, value } = e.target

        if (name.includes('emergencyContact')) {
            const field = name.split('.')[1]
            setFormData({
                ...formData,
                emergencyContact: {
                    ...formData.emergencyContact,
                    [field]: value
                }
            })
        } else {
            setFormData({ ...formData, [name]: value })
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError("")

        try {
            // API endpoint - adjust this based on your actual Node.js server route
            const response = await fetch(`${API_URL}/applications`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            })

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.message || 'Submission failed')
            }

            // Show success modal
            setSuccess(true)

            // Reset form
            setFormData({
                firstName: "",
                lastName: "",
                dateOfBirth: "",
                course: "",
                gender: "",
                religion: "",
                nationality: "",
                phone: "",
                idPassport: "",
                email: "",
                marketingConsent: false,
                emergencyContact: {
                    firstName: "",
                    lastName: "",
                    relation: "",
                    phone: ""
                },
                preferredStartDate: "",
                additionalInfo: "",
                preferredClassTime: "",
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
                            <h3 className="text-2xl font-semibold text-espresso mb-2">Application Submitted!</h3>
                            <p className="text-coffee-light mb-6">
                                Thank you for your application. We'll review your information and contact you shortly.
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

            {/* Page Banner - Keep as is */}
            <section className="relative h-[50vh] min-h-[300px] flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: "url('/contact/latte-art.jpg')",
                    }}
                />
                <div className="absolute inset-0 bg-black/60" />
                <div className="absolute left-0 w-64 h-64 border-l-2 border-t-2 border-gold/80 m-8" />
                <div className="absolute bottom-0 right-0 w-64 h-64 border-r-2 border-b-2 border-gold/80 m-8" />
                <div className="relative z-10 text-center px-4">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-block text-gold font-medium tracking-[0.3em] uppercase text-sm mb-4"
                    >
                        Begin Your Journey
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="font-display text-5xl md:text-7xl text-white mb-6"
                    >
                        Enrollment
                    </motion.h1>
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
                        <span className="text-gold">Apply Now</span>
                    </motion.nav>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream to-transparent" />
            </section>

            {/* Application Section */}
            <section className="py-20 lg:py-32 bg-cream-light">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-5 gap-12">
                        {/* Application Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="lg:col-span-3"
                        >
                            <div className="bg-white rounded-lg shadow-sm p-8 lg:p-12">
                                <div className="mb-8">
                                    <span className="text-gold uppercase tracking-[0.3em] text-sm font-medium">Fill in Your Details</span>
                                    <h2 className="text-3xl lg:text-4xl font-light text-espresso mt-2">
                                        New Student <span className="italic">Application</span>
                                    </h2>
                                </div>

                                {error && (
                                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                                        <p className="text-red-600">{error}</p>
                                    </div>
                                )}

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Personal Information */}
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="firstName" className="block text-sm font-medium text-espresso mb-2">
                                                First Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="firstName"
                                                name="firstName"
                                                value={formData.firstName}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 rounded-lg border border-cream focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                                                placeholder="John"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="lastName" className="block text-sm font-medium text-espresso mb-2">
                                                Last Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="lastName"
                                                name="lastName"
                                                value={formData.lastName}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 rounded-lg border border-cream focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                                                placeholder="Doe"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-3 gap-6">
                                        <div>
                                            <label htmlFor="dateOfBirth" className="block text-sm font-medium text-espresso mb-2">
                                                Date of Birth *
                                            </label>
                                            <input
                                                type="date"
                                                id="dateOfBirth"
                                                name="dateOfBirth"
                                                value={formData.dateOfBirth}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 rounded-lg border border-cream focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="gender" className="block text-sm font-medium text-espresso mb-2">
                                                Gender *
                                            </label>
                                            <select
                                                id="gender"
                                                name="gender"
                                                value={formData.gender}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 rounded-lg border border-cream focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                                            >
                                                <option value="">Select Gender</option>
                                                <option value="Male">Male</option>
                                                <option value="Female">Female</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label htmlFor="nationality" className="block text-sm font-medium text-espresso mb-2">
                                                Nationality *
                                            </label>
                                            <input
                                                type="text"
                                                id="nationality"
                                                name="nationality"
                                                value={formData.nationality}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 rounded-lg border border-cream focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                                                placeholder="e.g., Kenyan"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="religion" className="block text-sm font-medium text-espresso mb-2">
                                                Religion
                                            </label>
                                            <input
                                                type="text"
                                                id="religion"
                                                name="religion"
                                                value={formData.religion}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-lg border border-cream focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                                                placeholder="e.g., Christian, Muslim, etc."
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="idPassport" className="block text-sm font-medium text-espresso mb-2">
                                                ID/Passport Number *
                                            </label>
                                            <input
                                                type="text"
                                                id="idPassport"
                                                name="idPassport"
                                                value={formData.idPassport}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 rounded-lg border border-cream focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                                                placeholder="ID or Passport Number"
                                            />
                                        </div>
                                    </div>

                                    {/* Contact Information */}
                                    <div className="grid md:grid-cols-2 gap-6">
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

                                    {/* Course Selection */}
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="course" className="block text-sm font-medium text-espresso mb-2">
                                                Select Course *
                                            </label>
                                            <select
                                                id="course"
                                                name="course"
                                                value={formData.course}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 rounded-lg border border-cream focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                                            >
                                                <option value="">Choose a course...</option>
                                                {courses.map((course) => (
                                                    <option key={course.slug} value={course.fullTitle}>
                                                        {course.fullTitle}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    {/* Add this after the Course Selection section */}
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="preferredClassTime" className="block text-sm font-medium text-espresso mb-2">
                                                Preferred Class Time *
                                            </label>
                                            <select
                                                id="preferredClassTime"
                                                name="preferredClassTime"
                                                value={formData.preferredClassTime}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 rounded-lg border border-cream focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                                            >
                                                <option value="">Select preferred time</option>
                                                <option value="Morning Classes">Morning Classes (10:00 AM - 02:00 PM)</option>
                                                <option value="Afternoon Classes">Afternoon Classes (02:00 PM - 06:00 PM)</option>
                                                <option value="Evening Classes">Evening Classes (06:00 PM - 08:30 PM)</option>
                                            </select>
                                        </div>

                                        {/* Keep the preferredStartDate field here */}
                                        <div>
                                            <label htmlFor="preferredStartDate" className="block text-sm font-medium text-espresso mb-2">
                                                Preferred Start Date *
                                            </label>
                                            <input
                                                type="date"
                                                id="preferredStartDate"
                                                name="preferredStartDate"
                                                value={formData.preferredStartDate}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 rounded-lg border border-cream focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                                                min={new Date().toISOString().split('T')[0]}
                                            />
                                        </div>
                                    </div>

                                    {/* Emergency Contact Section */}
                                    <div className="border-t border-cream pt-6">
                                        <h3 className="text-lg font-medium text-espresso mb-4">Emergency Contact Information</h3>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <label htmlFor="emergencyContact.firstName" className="block text-sm font-medium text-espresso mb-2">
                                                    First Name *
                                                </label>
                                                <input
                                                    type="text"
                                                    id="emergencyContact.firstName"
                                                    name="emergencyContact.firstName"
                                                    value={formData.emergencyContact.firstName}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full px-4 py-3 rounded-lg border border-cream focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                                                    placeholder="Emergency contact first name"
                                                />
                                            </div>

                                            <div>
                                                <label htmlFor="emergencyContact.lastName" className="block text-sm font-medium text-espresso mb-2">
                                                    Last Name *
                                                </label>
                                                <input
                                                    type="text"
                                                    id="emergencyContact.lastName"
                                                    name="emergencyContact.lastName"
                                                    value={formData.emergencyContact.lastName}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full px-4 py-3 rounded-lg border border-cream focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                                                    placeholder="Emergency contact last name"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-6 mt-6">
                                            <div>
                                                <label htmlFor="emergencyContact.relation" className="block text-sm font-medium text-espresso mb-2">
                                                    Relationship *
                                                </label>
                                                <input
                                                    type="text"
                                                    id="emergencyContact.relation"
                                                    name="emergencyContact.relation"
                                                    value={formData.emergencyContact.relation}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full px-4 py-3 rounded-lg border border-cream focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                                                    placeholder="e.g., Parent, Spouse, Sibling"
                                                />
                                            </div>

                                            <div>
                                                <label htmlFor="emergencyContact.phone" className="block text-sm font-medium text-espresso mb-2">
                                                    Phone Number *
                                                </label>
                                                <input
                                                    type="tel"
                                                    id="emergencyContact.phone"
                                                    name="emergencyContact.phone"
                                                    value={formData.emergencyContact.phone}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full px-4 py-3 rounded-lg border border-cream focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                                                    placeholder="+254 700 000 000"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Additional Information */}
                                    <div>
                                        <label htmlFor="additionalInfo" className="block text-sm font-medium text-espresso mb-2">
                                            Additional Information
                                        </label>
                                        <textarea
                                            id="additionalInfo"
                                            name="additionalInfo"
                                            value={formData.additionalInfo}
                                            onChange={handleChange}
                                            rows={4}
                                            className="w-full px-4 py-3 rounded-lg border border-cream focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all resize-none"
                                            placeholder="Any additional information you'd like to share..."
                                        ></textarea>
                                    </div>

                                    {/* Consent Section */}
                                    <div className="border-t border-cream pt-6 mt-6">
                                        <div className="bg-cream/20 p-6 rounded-lg">
                                            <div className="flex items-start gap-4">
                                                <div className="flex-shrink-0 mt-1">
                                                    <input
                                                        type="checkbox"
                                                        id="marketingConsent"
                                                        name="marketingConsent"
                                                        checked={formData.marketingConsent}
                                                        onChange={(e) => setFormData({ ...formData, marketingConsent: e.target.checked })}
                                                        className="w-5 h-5 rounded border-cream text-gold focus:ring-gold focus:ring-2 focus:ring-offset-0"
                                                    />
                                                </div>
                                                <div>
                                                    <label htmlFor="marketingConsent" className="block text-sm font-medium text-espresso mb-2 cursor-pointer">
                                                        Marketing & Media Consent *
                                                    </label>
                                                    <p className="text-coffee-light text-sm leading-relaxed mb-2">
                                                        I understand and agree that during my time at Arobisca Training Center,
                                                        photos, videos, or other media may be taken during classes, events, or
                                                        training sessions for marketing and promotional purposes.
                                                    </p>
                                                    <div className="text-xs text-coffee-light/80 space-y-1">
                                                        <p>✓ This consent covers digital and print marketing materials</p>
                                                        <p>✓ Media may be used on our website, social media, brochures, and advertisements</p>
                                                        <p>✓ You may withdraw this consent at any time by contacting us</p>
                                                        <p className="text-red-600 font-medium mt-2">
                                                            * This consent is required during enrollment.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold hover:bg-gold-dark text-espresso font-medium rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed min-w-[200px] cursor-pointer"
                                    >
                                        {loading ? (
                                            <>
                                                <FiLoader className="animate-spin" />
                                                Submitting...
                                            </>
                                        ) : (
                                            <>
                                                <FiSend />
                                                Submit Application
                                            </>
                                        )}
                                    </button>
                                </form>

                                {error && (
                                    <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                                        <p className="text-red-600">{error}</p>
                                    </div>
                                )}
                            </div>
                        </motion.div>

                        {/* Info Sidebar - Keep as is */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="lg:col-span-2 space-y-8"
                        >
                            {/* Quick Info */}
                            <div className="bg-green/5 border-2 border-green rounded-lg p-6">
                                <h3 className="text-lg font-medium text-green mb-4 flex items-center gap-2">
                                    <FiCheckCircle /> Fast Response Guarantee
                                </h3>
                                <p className="text-coffee-light text-sm leading-relaxed mb-4">
                                    Use this form for speedy responses! All inquiries will be worked on as soon as they are received.
                                </p>
                                <p className="text-coffee-light text-sm font-bold leading-relaxed mb-4">
                                    Classes Begin Every Monday, please select your Preferred Class Time Via the form
                                </p>
                                <p className="text-coffee-light text-sm font-bold leading-relaxed mb-4">
                                    Note: Applications are only approved after payment
                                </p>
                                <p className="text-coffee-light text-sm leading-relaxed">
                                    If you have any further questions, please don't hesitate to contact us.
                                </p>
                            </div>

                            {/* Fee Payment Info Widget */}
                            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                <div className="p-6">
                                    <h2 className="text-xl font-semibold mb-4">How to Pay Fees</h2>
                                    <div className="space-y-4">
                                        <div className="p-4 bg-gray-50 rounded-lg">
                                            <div className="flex items-center gap-2 mb-2">
                                                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                                    />
                                                </svg>
                                                <span className="font-medium">Bank Details</span>
                                            </div>
                                            <div className="space-y-2 text-sm">
                                                <p>
                                                    <span className="text-gray-500">Bank:</span> KCB BANK KENYA
                                                </p>
                                                <p>
                                                    <span className="text-gray-500">Account No:</span> 1287498361
                                                </p>
                                                <p>
                                                    <span className="text-gray-500">Account Name:</span> AROBISCA GROUP LTD
                                                </p>
                                            </div>
                                        </div>
                                        <div className="text-sm text-gray-500">
                                            Please include your admission number as the reference when making payments.
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Details */}
                            <div className="bg-espresso-dark rounded-lg p-8 text-cream">
                                <h3 className="text-xl font-medium text-gold mb-6">Our Contacts</h3>
                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                                            <FiHome className="text-gold text-xl" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-cream mb-1">Location</h4>
                                            <p className="text-cream/80 text-sm leading-relaxed">
                                                Muindi Mbigu Street, Nairobi
                                                <br />
                                                Eco Bank Towers, 5th floor
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
                        </motion.div>
                    </div>
                </div>
            </section>

            <CertifyingBodies
                title="Your Certificate Is Recognized"
                subtitle="Graduate with confidence — your training is examined and certified by internationally recognized bodies"
            />
        </div>
    )
}