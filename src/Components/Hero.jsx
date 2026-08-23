import React from 'react'
import hero from '../assets/Hero.png'
import GitHub from '../assets/GitHub.png'
import instagram from '../assets/instagram.png'
import linkedin from '../assets/linkedin.png'
import reactLogo from '../assets/React.png'
import reduxLogo from '../assets/Redux.png'
import Resume from '../assets/Aditya_Kumar_UI_Engineer.pdf'
import tailwind from '../assets/Tailwind Css.png'
import { useState, useEffect, useRef } from 'react'
import FadeIn from './FadeIn'

const Hero = () => {

const roles = [
  "UI Engineer",
  "Frontend Developer",
  "Backend Developer",
  "MERN Stack Developer",
  "Full Stack Developer",
];

const [currentRole, setCurrentRole] = useState("");
const [roleIndex, setRoleIndex] = useState(0);
const [isDeleting, setIsDeleting] = useState(false);

useEffect(() => {
  const currentText = roles[roleIndex];

  let delay;

  if (!isDeleting) {
    // Typing
    delay = currentRole.length === currentText.length ? 5000 : 200;
  } else {
    // Deleting
    delay = 120;
  }

  const timer = setTimeout(() => {
    if (!isDeleting) {
      setCurrentRole(
        currentText.substring(0, currentRole.length + 1)
      );

      if (currentRole.length + 1 === currentText.length) {
        setIsDeleting(true);
      }
    } else {
      setCurrentRole(
        currentText.substring(0, currentRole.length - 1)
      );

      if (currentRole.length === 1) {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }
  }, delay);

  return () => clearTimeout(timer);
}, [currentRole, isDeleting, roleIndex]);
  return (
    <section className='relative'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col md:flex-row items-center lg:h-[90vh] justify-between' >
         <div className='md:w-1/2 mb-8 md:mb-0 flex flex-col space-y-4 px-6 lg:px-0 lg:mt-0 mt-1'>

  <FadeIn>
    <h1 className='lg:text-7xl text-4xl font-bold lg:leading-snug'>
      Hi There, <br />I'm Aditya <span className='text-red-500'>Kumar</span>
    </h1>
  </FadeIn>

  <FadeIn delay={100}>
    <p className="lg:text-3xl text-3xl font-bold mb-4 text-red-500">
      {currentRole}
      <span className="blinking-cursor">|</span>
    </p>
  </FadeIn>

  <FadeIn delay={200}>
    <p className='mb-4'>
       I'm a UI Engineer with 1.5+ years of professional experience building
      responsive and user-focused web interfaces using React.js and modern
      frontend technologies. I work with Figma designs, client requirements,
      frontend optimization, and accessibility to deliver clean and
      high-quality web experiences.
    </p>
  </FadeIn>

  <FadeIn delay={300}>
    <button className='bg-black text-white px-3 py-2 w-max rounded-md hover:bg-red-500'>
     <a
        href={Resume}
        target="_blank"
      >
        Download CV
      </a>
    </button>
  </FadeIn>
  <FadeIn delay={400}>
    <div className="relative flex items-center gap-3 ">

        <a
          className="w-12 h-12 flex items-center justify-center hover:scale-110 hover:opacity-80"
          href="https://www.instagram.com/suri_aditya122?igsh=MTRnNjc0Yzh4M3VseA=="
        >
          <img
            src={instagram}
            alt="Instagram"
            className="w-12 h-12 object-contain"
          />
        </a>

        <a
          className="w-12 h-12 flex items-center justify-center hover:scale-110 hover:opacity-80"
          href="https://github.com/adityakumar732/"
        >
          <img
            src={GitHub}
            alt="GitHub"
            className="w-10 h-10 object-contain"
          />
        </a>

        <a
          className="w-12 h-12 flex items-center justify-center hover:scale-110 hover:opacity-80"
          href="https://www.linkedin.com/in/aditya-kumar-3b3449326"
        >
          <img
            src={linkedin}
            alt="LinkedIn"
            className="w-10 h-10 object-contain"
          />
        </a>

      </div>
  </FadeIn>

</div>
          <div className='md:w-1/2 relative flex justify-center items-end'>
            <img src={hero} alt="" className='lg:h-[90vh] h-96' />
            <img src={reactLogo} alt="React Logo" className='absolute w-10 top-36 left-10 rounded-full ' />
            <img src={reduxLogo} alt="Redux Logo" className='absolute w-10 top-[15px] left-5' />
            <img src={tailwind} alt="Tailwind CSS Logo" className='absolute w-10 rounded-full right-40 bottom-36 ' />
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default Hero
