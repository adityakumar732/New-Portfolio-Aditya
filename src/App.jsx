import React from 'react'
import Hero from './components/Hero'
import ParticleBackground from './components/Particle'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import About from './Components/About'
import Contact from './Components/Contact'
import Navbar from './Components/Navbar'

const App = () => {
  return (
    <>
      <ParticleBackground />
      <Navbar />
      <Hero />
      <About/>
      <Projects/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App