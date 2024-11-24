import React from 'react'
import Hero from './Components/Hero'
import ParticleBackground from './Components/Particle'
import Projects from './Components/Projects'
import Testimonials from './Components/Testimonials'
import Footer from './Components/Footer'
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