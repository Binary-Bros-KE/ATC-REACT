// pages/AlumniTestimonials/AlumniTestimonials.js
"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FiPlay, FiMessageCircle, FiX, FiVolume2, FiVolumeX, FiSearch, FiFilter, FiCalendar } from "react-icons/fi"
import { FaPlay, FaPause, FaStar } from "react-icons/fa"
import { testimonials, categories } from "../../data/testimonials"

export default function AlumniTestimonials() {
    const [selectedVideo, setSelectedVideo] = useState(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const [isMuted, setIsMuted] = useState(false)
    const [activeCategory, setActiveCategory] = useState("All")
    const [searchQuery, setSearchQuery] = useState("")
    const [testimonialsToShow, setTestimonialsToShow] = useState(12)
    const videoRef = useRef(null)

    // Filter testimonials
    const filteredTestimonials = testimonials.filter(testimonial => {
        const matchesCategory = activeCategory === "All" ||
            testimonial.category.includes(activeCategory)

        const matchesSearch = searchQuery === "" ||
            testimonial.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            testimonial.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
            testimonial.quote.toLowerCase().includes(searchQuery.toLowerCase())

        return matchesCategory && matchesSearch
    })

    const videoTestimonials = filteredTestimonials.filter(t => t.type === 'video')
    const textTestimonials = filteredTestimonials.filter(t => t.type === 'text')

    const handleVideoSelect = (id) => {
        setSelectedVideo(id)
        setIsPlaying(true)
    }

    const handleCloseVideo = () => {
        setSelectedVideo(null)
        setIsPlaying(false)
    }

    const togglePlayPause = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause()
            } else {
                videoRef.current.play()
            }
            setIsPlaying(!isPlaying)
        }
    }

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted
            setIsMuted(!isMuted)
        }
    }

    const loadMore = () => {
        setTestimonialsToShow(prev => prev + 12)
    }

    const currentVideo = testimonials.find(t => t.id === selectedVideo)

    return (
        <>
            {/* Video Modal */}
            <AnimatePresence>
                {selectedVideo && currentVideo?.videoUrl && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[999] bg-black/90 flex items-center justify-center p-4"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative w-full max-w-sm aspect-[9/16] bg-black rounded-2xl overflow-hidden"
                        >
                            {/* Close Button */}
                            <button
                                onClick={handleCloseVideo}
                                className="absolute top-4 right-4 z-20 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full transition-colors"
                            >
                                <FiX className="w-6 h-6" />
                            </button>

                            {/* Video */}
                            <video
                                ref={videoRef}
                                src={currentVideo.videoUrl}
                                className="absolute inset-0 w-full h-full object-cover"
                                autoPlay
                                muted={isMuted}
                                onEnded={() => setIsPlaying(false)}
                            />

                            {/* Bottom Controls & Info */}
                            <div className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-black/80 to-transparent p-4">
                                <div className="flex items-end justify-between gap-4">
                                    {/* Controls */}
                                    <div className="flex items-center gap-4">
                                        <button
                                            onClick={togglePlayPause}
                                            className="text-white hover:text-gold transition-colors"
                                        >
                                            {isPlaying ? (
                                                <FaPause className="w-6 h-6" />
                                            ) : (
                                                <FaPlay className="w-6 h-6" />
                                            )}
                                        </button>

                                        <button
                                            onClick={toggleMute}
                                            className="text-white hover:text-gold transition-colors"
                                        >
                                            {isMuted ? (
                                                <FiVolumeX className="w-6 h-6" />
                                            ) : (
                                                <FiVolume2 className="w-6 h-6" />
                                            )}
                                        </button>

                                        <span className="text-white text-sm">
                                            {currentVideo.duration}
                                        </span>
                                    </div>

                                    {/* Video Info */}
                                    <div className="text-right text-white">
                                        <h3 className="font-medium leading-tight">
                                            {currentVideo.name}
                                        </h3>
                                        <p className="text-sm text-gold">
                                            {currentVideo.role}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <main className="min-h-screen bg-white md:mt-30">
                {/* Hero Section */}
                <section className="relative py-10 bg-[url('https://res.cloudinary.com/dxybhmfpe/image/upload/v1765999380/about-3_r2r8wj.jpg')] bg-cover bg-center">
                    <div className="absolute inset-0 bg-black/70"></div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-md:pt-20">
                        <div className="text-center">
                            <h1 className="text-5xl lg:text-6xl font-medium text-white mb-6">
                                Alumni <span className="italic text-gold">Testimonials</span>
                            </h1>
                            <p className="text-xl text-white max-w-3xl mx-auto">
                                Hear directly from our graduates about their transformative journey at Arobisca Training Centre
                            </p>
                        </div>

                    </div>
                </section>

                {/* Testimonials Grid */}
                <section className="py-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                        {/* Videos Grid */}
                        {videoTestimonials.length > 0 && (
                            <div className="mb-16">
                                <h3 className="text-xl font-medium text-coffee mb-6 flex items-center gap-2">
                                    <FiPlay className="text-gold" />
                                    Video Testimonials ({videoTestimonials.length})
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                    {videoTestimonials.map((testimonial) => (
                                        <motion.div
                                            key={testimonial.id}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="group cursor-pointer"
                                            onClick={() => handleVideoSelect(testimonial.id)}
                                        >
                                            <div className="aspect-[2/3] bg-white rounded-2xl overflow-hidden border border-coffee-light/20 group-hover:border-gold transition-all duration-300 shadow-sm group-hover:shadow-md">
                                                {/* Thumbnail */}
                                                <div className="relative h-full overflow-hidden">
                                                    <img
                                                        src={testimonial.thumbnail}
                                                        alt={testimonial.name}
                                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                    />
                                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />

                                                    {/* Play Button */}
                                                    <div className="absolute inset-0 flex items-center justify-center">
                                                        <div className="w-14 h-14 rounded-full bg-gold/90 flex items-center justify-center transform group-hover:scale-110 transition-transform">
                                                            <FiPlay className="w-6 h-6 text-white ml-1" />
                                                        </div>
                                                    </div>

                                                    {/* Duration */}
                                                    <div className="absolute top-4 right-4 bg-black/80 text-white text-xs px-2 py-1 rounded">
                                                        {testimonial.duration}
                                                    </div>

                                                    {/* Rating */}
                                                    <div className="absolute top-4 left-4 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded">
                                                        <FaStar className="w-3 h-3 text-gold" />
                                                        <span className="text-xs font-medium">{testimonial.rating}.0</span>
                                                    </div>


                                                    {/* Content */}
                                                    <div className="p-5 absolute bottom-0 bg-gradient-to-t from-black via-black/50 to-transparent w-full">
                                                        <div className="flex items-center gap-3 mb-3">
                                                            <div>
                                                                <h4 className="font-medium text-white text-sm">{testimonial.name}</h4>
                                                                <p className="text-gold text-xs">{testimonial.role}</p>
                                                            </div>
                                                        </div>

                                                        <div className="flex items-center justify-between text-xs text-white">
                                                            <div className="flex items-center gap-1">
                                                                <FiCalendar className="w-3 h-3" />
                                                                {new Date(testimonial.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                                                            </div>
                                                            <div className="flex flex-wrap gap-1">
                                                                {testimonial.category.slice(0, 2).map(cat => (
                                                                    <span key={cat} className="px-2 py-1 bg-coffee-light/10 rounded text-xs">
                                                                        {cat}
                                                                    </span>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Text Testimonials */}
                        {textTestimonials.length > 0 && (
                            <div>
                                <h3 className="text-xl font-medium text-coffee mb-6 flex items-center gap-2">
                                    <FiMessageCircle className="text-gold" />
                                    Written Testimonials ({textTestimonials.length})
                                </h3>
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                    {textTestimonials.map((testimonial) => (
                                        <motion.div
                                            key={testimonial.id}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="bg-white rounded-2xl p-6 border border-coffee-light/20 hover:border-gold/30 transition-all duration-300 shadow-sm hover:shadow-md"
                                        >
                                            <div className="flex items-start gap-4">
                                                <img
                                                    src={testimonial.image}
                                                    alt={testimonial.name}
                                                    className="w-14 h-14 rounded-full object-cover border-2 border-gold flex-shrink-0"
                                                />
                                                <div className="flex-grow">
                                                    <div className="flex items-center justify-between mb-2">
                                                        <div>
                                                            <h4 className="font-medium text-coffee">{testimonial.name}</h4>
                                                            <p className="text-gold text-sm">{testimonial.role}</p>
                                                        </div>
                                                        <div className="flex items-center gap-1">
                                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                                <FaStar key={i} className="w-4 h-4 text-gold" />
                                                            ))}
                                                        </div>
                                                    </div>

                                                    <p className="text-coffee/80 leading-relaxed mb-4">
                                                        "{testimonial.quote}"
                                                    </p>

                                                    <div className="flex items-center justify-between">
                                                        <div className="flex items-center gap-2 text-sm text-coffee/50">
                                                            <FiCalendar className="w-4 h-4" />
                                                            {new Date(testimonial.date).toLocaleDateString('en-US', {
                                                                month: 'long',
                                                                day: 'numeric',
                                                                year: 'numeric'
                                                            })}
                                                        </div>
                                                        <div className="flex flex-wrap gap-2">
                                                            {testimonial.category.map(cat => (
                                                                <span
                                                                    key={cat}
                                                                    className="px-3 py-1 bg-coffee-light/10 text-coffee text-xs rounded-full"
                                                                >
                                                                    {cat}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 bg-gradient-to-r from-coffee-light/5 to-gold/5">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl lg:text-4xl font-medium text-coffee mb-6">
                            Ready to Start Your Journey?
                        </h2>
                        <p className="text-coffee/70 text-lg mb-8">
                            Join hundreds of successful alumni who transformed their passion into a career
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <button className="px-8 py-3 bg-gold text-white font-medium rounded-full hover:bg-gold/90 transition-colors">
                                Apply Now
                            </button>
                            <button className="px-8 py-3 bg-white text-coffee font-medium rounded-full border border-coffee-light hover:bg-coffee-light/10 transition-colors">
                                View Courses
                            </button>
                        </div>
                    </div>
                </section>
            </main>

        </>
    )
}