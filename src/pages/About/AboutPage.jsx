"use client"

import { motion } from "framer-motion"
import AboutHero from "./components/AboutHero"
import AboutIntro from "./components/AboutIntro"
import WhyChooseUs from "./components/WhyChooseUs"
import StatsCounter from "./components/StatsCounter"
import AuxiliaryServices from "./components/AuxiliaryServices"
import AboutTestimonials from "./components/AboutTestimonials"
import GalleryComponent from "../../components/GalleryComponents"
import TestimonialsSection from "../Home/components/Testimonials"

export default function AboutPage() {
  return (
    <main className="overflow-hidden md:mt-15">
      <AboutHero />
      <AboutIntro />
      <GalleryComponent images={[
        "https://res.cloudinary.com/dxybhmfpe/image/upload/v1766853249/74_g27svf.jpg",
        "https://res.cloudinary.com/dxybhmfpe/image/upload/v1766853250/82_mcleek.jpg",
        "https://res.cloudinary.com/dxybhmfpe/image/upload/v1766853251/99_w5lwfb.jpg",
        "https://res.cloudinary.com/dxybhmfpe/image/upload/v1766853251/83_s3fqef.jpg",
        "https://res.cloudinary.com/dxybhmfpe/image/upload/v1766853252/108_gxjdxb.jpg",
        "https://res.cloudinary.com/dxybhmfpe/image/upload/v1766853253/110_fpuia0.jpg",
        "https://res.cloudinary.com/dxybhmfpe/image/upload/v1766853254/112_hewnss.jpg",
        "https://res.cloudinary.com/dxybhmfpe/image/upload/v1766853255/114_xslvkb.jpg",
        "https://res.cloudinary.com/dxybhmfpe/image/upload/v1766853256/115_sgmnej.jpg",
        "https://res.cloudinary.com/dxybhmfpe/image/upload/v1766853257/117_ngy65c.jpg",
      ]} />
      <WhyChooseUs />
      <StatsCounter />
      <AuxiliaryServices />
      <TestimonialsSection />
    </main>
  )
}
