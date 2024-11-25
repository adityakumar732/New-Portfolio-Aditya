import React from 'react'
import hero from '../assets/Hero.png'
import GitHub from '../assets/GitHub.png'
import instagram from '../assets/instagram.png'
import linkedin from '../assets/linkedin.png'
import reactLogo from '../assets/React.png'
import reduxLogo from '../assets/Redux.png'
import tailwind from '../assets/Tailwind Css.png'
import { useState, useEffect, useRef } from 'react'

const Hero = () => {


  const [currentRole, setCurrentRole] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loop, setLoop] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);


  const roles = [
    'Web Developer',
    'Frontend Developer',
    'Backend Developer',
    'MERN Stack Developer',
    'Full Stack Developer',
  ];



  useEffect(() => {
    const current = roles[loop % roles.length];

    if (isDeleting) {
      setCurrentRole((prev) => prev.slice(0, prev.length - 1));
      setTypingSpeed(650); // Faster speed while deleting
    } else {
      setCurrentRole((prev) => current.slice(0, prev.length + 1));
      setTypingSpeed(650); // Normal speed while typing
    }

    if (!isDeleting && currentRole === current) {
      setTimeout(() => setIsDeleting(true), 7000); // Pause before deleting
    } else if (isDeleting && currentRole === '') {
      setIsDeleting(false);
      setLoop((prev) => prev + 1); // Move to the next role
    }

    const timer = setTimeout(() => { }, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentRole, isDeleting, roles, loop, typingSpeed]);



  return (
    <section className='relative'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col md:flex-row items-center lg:h-[90vh] justify-between' >
          <div className='md:w-1/2 mb-8 md:mb-0 flex flex-col space-y-4 px-6 lg:px-0 lg:mt-0 mt-1'>
            <h1 className='lg:text-7xl text-4xl font-bold lg:leading-snug'>Hi There, <br />I'm Aditya <span className='text-red-500'>Kumar</span></h1>
            <p className="lg:text-3xl font-bold text-3xl mb-4 text-red-500">
              {currentRole}
              <span className="blinking-cursor">|</span>
            </p>
            <p className='mb-4'>I'm a passionate Web Developer with expertise in React.js, Express.js, and modern web technologies. I love creating beautiful and functional website that solve real world problems.</p>
            <button className='bg-black text-white px-3 py-2 w-max rounded-md hover:bg-red-500 '><a href="https://drive.google.com/uc?export=download&id=1IR1i7pW9aOVkMjzpPEWDhFjHq8gSBbjK" download target='_blank'>Download CV</a></button>
          </div>
          <div className='md:w-1/2 relative flex justify-center items-end'>
            <img src={hero} alt="" className='lg:h-[90vh] h-96' />
            <img src={reactLogo} alt="" className='absolute w-10 top-36 left-10 rounded-full ' />
            <img src={reduxLogo} alt="" className='absolute w-10 top-15 left-5  ' />
            <img src={tailwind} alt="" className='absolute w-10 rounded-full right-40 bottom-36 ' />
          </div>
        </div>
      </div>
      <div className="lg:absolute flex h-12 gap-3 bottom-24  
  sm:fixed sm:left-4 sm:bottom-4
  md:fixed md:left-8 md:bottom-10 ">
  <a className="hover:scale-110 hover:opacity-80" href="https://www.instagram.com/suri_aditya122?igsh=MTRnNjc0Yzh4M3VseA==">
    <img
      src={instagram}
      alt="Instagram"
      className="w-12 h-12 sm:w-6 sm:h-6 md:w-16 md:h-16"
    />
  </a>
  <a className="hover:scale-110 hover:opacity-80" href="https://github.com/adityakumar732/">
    <img
      src={GitHub}
      alt="GitHub"
      className="w-12 h-12 sm:w-6 sm:h-6 md:w-12 md:h-12 "
    />
  </a>
  <a className="hover:scale-110 hover:opacity-80" href="https://www.linkedin.com/in/aditya-kumar-3b3449326">
    <img
      src={linkedin}
      alt="LinkedIn"
      className="w-12 h-16 sm:w-6 sm:h-6 md:w-16 md:h-16"
    />
  </a>
</div>
    </section>
  )
}

export default Hero
