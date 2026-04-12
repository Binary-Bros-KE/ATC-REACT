// components/TestimonialsSection.js (Home page version)
"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FiPlay, FiMessageCircle, FiX, FiVolume2, FiVolumeX, FiChevronRight, FiCalendar } from "react-icons/fi"
import { FaPlay, FaPause, FaStar } from "react-icons/fa"
import { testimonials } from "../../../data/testimonials"
import { Link } from "react-router-dom"

export default function TestimonialsSection() {
  const [selectedVideo, setSelectedVideo] = useState(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const videoRef = useRef(null)

  // Show only 6 testimonials on home page (4 videos, 2 text)
  const displayedTestimonials = [
    ...testimonials.filter(t => t.type === 'video').slice(0, 8),
    ...testimonials.filter(t => t.type === 'text').slice(0, 2)
  ]

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




      {/* Testimonials Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/testimonials/background.jpg"
            alt=""
            className="w-full h-full object-cover"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-black/90" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-gold uppercase tracking-[0.3em] text-sm font-medium">
              Testimonials
            </span>
            <h2 className="text-4xl lg:text-5xl font-medium text-white mt-4">
              Hear From Our <span className="italic">Alumni</span>
            </h2>
            <p className="text-white/70 mt-4 max-w-2xl mx-auto">
              See how our training transformed their careers
            </p>
          </motion.div>

          {/* Testimonials Grid - Vertical cards for videos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {displayedTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`
                  ${testimonial.type === 'video'
                    ? 'aspect-[3/4]'
                    : 'h-full'
                  }
                  relative group
                `}
              >
                {testimonial.type === 'video' && (
                  // Vertical Video Card
                  <div onClick={() => handleVideoSelect(testimonial.id)} className="aspect-[2/3] bg-white rounded-2xl overflow-hidden border border-coffee-light/20 group-hover:border-gold transition-all duration-300 shadow-sm group-hover:shadow-md">
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
                )}
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Link
              to="/testimonials"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gold text-coffee font-medium rounded-full hover:bg-gold/90 transition-colors"
            >
              View All Testimonials
              <FiChevronRight className="w-5 h-5" />
            </Link>
            <p className="text-white/60 text-sm mt-4">
              Explore {testimonials.length} stories from our alumni
            </p>
          </div>
        </div>
      </section>
    </>
  )
}