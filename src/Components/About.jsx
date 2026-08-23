import React from 'react'
import FadeIn from './FadeIn'

import MernStack from '../assets/mernstack.png'
import Html from '../assets/Html.png'
import Css from '../assets/CSS.png'
import Javascript from '../assets/JS.png'
import ReactLogo from '../assets/React.png'
import ReduxLogo from '../assets/Redux.png'
import Tailwind from '../assets/Tailwind Css.png'
import Bootstrap from '../assets/Bootstrap.png'
import NodeLogo from '../assets/NodeLogo.png'
import Mongodb from '../assets/mongodb.svg'
import Express from '../assets/Express.png'
import NextJs from '../assets/NextJs.png'

const About = () => {
  return (
    <div className='relative' id='about'>
      <div className='bg-gray-100 py-12'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          
          {/* About Header */}
          <div className='text-center'>
            <FadeIn>
              <h2 className='text-base text-red-600 font-bold tracking-wide uppercase'>
                About Me
              </h2>
            </FadeIn>

            <FadeIn delay={100}>
              <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
                Hi, I'm Aditya Kumar
              </p>
            </FadeIn>

            <FadeIn delay={200}>
              <p className='mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto'>
                A UI Engineer with 1.5+ years of professional experience building
                responsive, user-focused web interfaces using React.js and modern
                frontend technologies.
              </p>
            </FadeIn>
          </div>

          {/* Journey and Skills */}
          <div className='mt-10'>
            <div className='grid grid-cols-1 gap-12 lg:grid-cols-2'>
              
              {/* My Journey */}
              <div>
                <FadeIn>
                  <h3 className='text-2xl font-semibold text-gray-900'>
                    My Journey
                  </h3>
                </FadeIn>

                <FadeIn delay={100}>
                    <p className='mt-4 text-lg text-gray-600'>
                        Outside of my professional work, I enjoy building and experimenting with
                        personal projects to expand my technical skills. I work on full-stack MERN
                        applications, including projects like e-commerce platforms and admin
                        dashboards, where I gain hands-on experience with both frontend and backend
                        development. I also explore new AI tools, modern development workflows, and
                        emerging technologies to understand how they can improve productivity and
                        create better user experiences. I enjoy continuously learning, experimenting
                        with new ideas, and staying updated with the latest trends in web development.
                    </p>
                </FadeIn>

                <FadeIn delay={200}>
                  <img
                    src={MernStack}
                    alt="MERN Stack"
                    className='p-2 rounded-lg w-52 mt-4'
                  />
                </FadeIn>
              </div>

              {/* Skills */}
              <div className='border border-red-200 rounded-lg md:p-7 py-7 flex flex-col gap-8 items-center shadow-lg shadow-red-300'>
                
                <FadeIn>
                  <h3 className='text-2xl font-semibold text-red-600'>
                    Skills
                  </h3>
                </FadeIn>

                <FadeIn delay={100}>
                  <div className='flex items-center justify-center flex-wrap gap-3'>
                    
                    <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                      <img src={Html} alt="HTML" className='w-10' />
                      <span className='font-semibold'>HTML</span>
                    </div>

                    <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                      <img src={Css} alt="CSS" className='w-8' />
                      <span className='font-semibold'>CSS</span>
                    </div>

                    <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                      <img src={Javascript} alt="JavaScript" className='w-10' />
                      <span className='font-semibold'>JavaScript</span>
                    </div>

                    <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                      <img src={ReactLogo} alt="React" className='w-8 rounded-full' />
                      <span className='font-semibold'>React</span>
                    </div>

                    <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                      <img src={ReduxLogo} alt="Redux" className='w-8' />
                      <span className='font-semibold'>Redux</span>
                    </div>

                    <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                      <img src={Tailwind} alt="Tailwind CSS" className='w-8 rounded-full' />
                      <span className='font-semibold'>Tailwind CSS</span>
                    </div>

                    <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                      <img src={Bootstrap} alt="Bootstrap" className='w-10' />
                      <span className='font-semibold'>Bootstrap</span>
                    </div>

                    <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                      <img src={NodeLogo} alt="Node.js" className='w-10' />
                      <span className='font-semibold'>Node.js</span>
                    </div>

                    <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                      <img src={Mongodb} alt="MongoDB" className='w-10' />
                      <span className='font-semibold'>MongoDB</span>
                    </div>

                    <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                      <img src={Express} alt="Express.js" className='w-10' />
                      <span className='font-semibold'>Express.js</span>
                    </div>

                    <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                      <img src={NextJs} alt="Next.js" className='w-9' />
                      <span className='font-semibold'>Next.js</span>
                    </div>

                  </div>
                </FadeIn>

              </div>
            </div>
          </div>

          {/* More About Me */}
          <div className='mt-12'>
            <FadeIn>
              <h3 className='text-2xl font-semibold text-gray-900'>
                More About Me
              </h3>
            </FadeIn>

            <FadeIn delay={100}>
              <p className='mt-4 text-lg text-gray-600'>
                Apart from my professional work, I enjoy building hands-on projects
                and continuously improving my knowledge of React.js, JavaScript,
                frontend architecture, and the MERN stack. I am passionate about
                writing clean, maintainable code and creating modern, responsive,
                and accessible web experiences while continuing to grow as a
                frontend developer.
              </p>
            </FadeIn>
          </div>

        </div>
      </div>
    </div>
  )
}

export default About