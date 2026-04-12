import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home/Home';
import AboutPage from './pages/About/AboutPage';
import CoursesPage from './pages/Courses/CoursesPage';
import CourseDetailPage from './pages/Courses/CourseDetailPage';
import BlogPage from './pages/Blog/BlogPage';
import BlogDetailPage from './pages/Blog/BlogDetailPage';
import ContactPage from './pages/Contact/ContactPage';
import ApplyNowPage from './pages/Contact/ApplyNowPage';
import TutorsPage from './pages/Tutors/TutorsPage';
import AlumniTestimonials from './pages/Alumni/AlumniTestimonials';
import CoffeeLabPage from './pages/About/CoffeeLabPage';

export default function HomePage() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/courses' element={<CoursesPage />} />
        <Route path='/courses/:slug' element={<CourseDetailPage />} />
        <Route path='/blog' element={<BlogPage />} />
        <Route path='/blog/:slug' element={<BlogDetailPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/apply-now' element={<ApplyNowPage />} />
        <Route path='/tutors' element={<TutorsPage />} />
        <Route path='/testimonials' element={<AlumniTestimonials />} />
        <Route path='/arobisca-lab' element={<CoffeeLabPage />} />
      </Routes>
      <Footer />
    </Router>
  )
}
