import React from 'react'
import Portfolio from '../assets/Portfolio.png'
import SpicyBites from '../assets/SpicyBites.png'
import Netflix from '../assets/Netflix.png'
import OYO from '../assets/OYO.jpeg'
import Tesla from '../assets/Tesla.jpeg'
import Game from '../assets/Game.jpeg'
import Cards from './Cards'


const Projects = () => {

    const projectJson = [
        {
          title: 'Portfolio',
          desc: 'Webelite Builders did an amazing job on our website. Their professionalism and dedication to our project were outstanding.',
          image: Portfolio,
          live: "https://adityakumar732.github.io/New-Portfolio/",
          github: "https://adityakumar732.github.io/New-Portfolio/"
        },
        {
          title: 'Spicy Bites',
          desc: 'The team at Webelite Builders exceeded our expectations with their digital marketing expertise. Highly recommend!',
          image: SpicyBites,
          live: "https://spicybites.netlify.app/",
          github: "https://github.com/rohitsingh93300/YtSpicyBites"
        },
        {
          title: 'Netflix Clone',
          desc: 'It is a streaming web page that offers TV shows, movies, anime, and more on thousands of Web series.',
          image: Netflix,
          live: "https://youtube-clone-93300.netlify.app/",
          github: "https://github.com/rohitsingh93300/YouTube-clone"
        },
        {
          title: 'OYO Clone',
          desc: 'It is an online platform that enables users to find, and book the best hotels. Hotel offering a comfortable stay.',
          image: OYO,
          live: "https://www.webelitebuilders.com/",
          github: "#"
        },
        {
          title: 'Tesla Car',
          desc: 'The menu and homepage highlight core offerings, especially the cars, rather than delving into corporate details.',
          image: Tesla,
          live: "https://supercar123.netlify.app/",
          github: "https://github.com/rohitsingh93300/supercars"
        },
        {
          title: 'Tic Tac Toe Game',
          desc: ' It is a game in which the objective is to mark the correct spaces in a 3x3. Align three symbols horizontally, vertically, or diagonally to win.',
          image: Game,
          live: "https://supercar123.netlify.app/",
          github: "https://github.com/rohitsingh93300/supercars"
        },
      ];

  return (
    <section id='projects' className='relative bg-gray-700 py-10 px-4'>
      <div className='mb-16 max-w-7xl mx-auto'>
        <h2 className='text-3xl font-bold mb-8 text-white border-b border-red-500 w-max pb-4'>My Projects</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10'>
            {projectJson.map((items)=> {
                return <Cards item={items}/>
            })}
        </div>
      </div>
    </section>
  )
}

export default Projects
