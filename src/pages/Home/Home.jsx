"use client"
import HeroSection from './components/Hero'
import CoffeeTypesSection from './components/Coffeetypes'
import AboutSection from './components/About'
import CertificationSection from './components/Certification'
import CoursesSection from './components/Courses'
import FAQSection from './components/FAQ'
import TestimonialsSection from './components/Testimonials'
import BlogSection from './components/Blog'
import GalleryComponent from '../../components/GalleryComponents'
import CoffeeLabSection from './components/Facilities'

export default function Home() {
    return (
        <main className='overflow-hidden'>
            <HeroSection />
            <CoffeeTypesSection />
            <CertificationSection />
            <AboutSection />
            <CoursesSection />
            <CoffeeLabSection />
            <FAQSection />
            <TestimonialsSection />
            <BlogSection />
            <GalleryComponent images={[
                "https://res.cloudinary.com/dxybhmfpe/image/upload/v1766853008/116_kx7hzc.jpg",
                "https://res.cloudinary.com/dxybhmfpe/image/upload/v1766853008/79_x6zbwo.jpg",
                "https://res.cloudinary.com/dxybhmfpe/image/upload/v1766853008/3_kf7fzu.jpg",
                "https://res.cloudinary.com/dxybhmfpe/image/upload/v1766853008/8_jkxq9j.jpg",
                "https://res.cloudinary.com/dxybhmfpe/image/upload/v1766853007/89_wwtywq.jpg",
                "https://res.cloudinary.com/dxybhmfpe/image/upload/v1766853006/4_w4lbsw.jpg",
                "https://res.cloudinary.com/dxybhmfpe/image/upload/v1766853007/7_ezjt5y.jpg",
                "https://res.cloudinary.com/dxybhmfpe/image/upload/v1766853007/5_kagkph.jpg",
                "https://res.cloudinary.com/dxybhmfpe/image/upload/v1766853006/2_qrt2r4.jpg",
                "https://res.cloudinary.com/dxybhmfpe/image/upload/v1766853006/1_hg6167.jpg",
            ]} />
        </main>
    )
}
