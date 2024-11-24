import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {

    const testimonials = [
        {
            id: 1,
            name: "Harish G ",
            rating: 4,
            text: "“Aditya Kumar portfolio showcases strong technical skills and attention to detail. Their ability to create functional, responsive designs with ReactJS and TailwindCSS is impressive for a fresher.”",
            trainer: 'Reactjs Trainer'
        },
        {
            id: 2,
            name: "Shameer Chouragasti",
            rating: 5,
            text: "“The Spicy Bites webpage showcases an impressive understanding of front-end technologies. The responsive design and mobile optimization and the attention to detail, makes this project stand out.”",
            trainer: 'Web Development Trainer'
        },
        {
            id: 3,
            name: "Gaurav Yadav",
            rating: 4,
            text: "“The Netflix clone project demonstrates great attention to detail. I was impressed with the seamless integration and styling really showcases understanding of modern web development tools.”",
            trainer: 'Web Development Trainer'
        },
        {
            id: 4,
            name: "Harshita N",
            rating: 5,
            text: "“The OYO clone project demonstrates ability to replicate real-world application features with precision. This project clearly reflects skills in building scalable and intuitive applications.”",
            trainer: 'Frontend Trainer'
        },
        {
            id: 5,
            name: "Muthana Sreenivas",
            rating: 4,
            text: "“The Tesla webpage project reflects attention to detail in UI/UX design. From smooth animations to the strategic use of images, it’s clear that understands the importance of creating a seamless user experience.”",
            trainer: 'MERN Stack Developer'
        },
        {
            id: 6,
            name: "Shweta K",
            rating: 4,
            text: "“The Tic Tac Toe game project showcases solid grasp of JavaScript fundamentals. The code is clean and well-structured, and the gameplay and interactive elements using just HTML, CSS, and JavaScript.”",
            trainer: 'Frontend Developer'
        }
    ]

    return (
        <div id='testimonials' className='py-10 bg-gray-100 relative' >
            <h1 className='text-center text-2xl lg:text-4xl font-bold'>What My Mentors Say</h1>
            <div className='max-w-6xl mx-auto py-10 px-5'>
                <Swiper
                    style={{
                        "--swiper-pagination-color": "#EF4444",
                        "--swiper-pagination-bullet-inactive-color": "#999999",
                        "--swiper-pagination-bullet-inactive-opacity": "1",
                        "--swiper-pagination-bullet-size": "10px",
                        "--swiper-pagination-bullet-horizontal-gap": "6px",
                    }}
                    modules={[Pagination, Autoplay]}
                    loop={true}
                    speed={600}
                    autoplay={{ delay: 5000 }}
                    slidesPerView={3}
                    spaceBetween={30}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        480: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    pagination={{
                        el: ".swiper-pagination",
                        type: "bullets",
                        clickable: true,
                    }}
                    className="mySwiper"
                >
                    {testimonials.map((item) => {
                        return <SwiperSlide key={item.id}>
                            <div className='border border-gray-400 shadow-md shadow-red-500 rounded-lg flex flex-col p-4'>
                                {item.rating === 4 ? (
                                    <div className='flex'>
                                        <Star fill='true' />
                                        <Star fill='true' />
                                        <Star fill='true' />
                                        <Star fill='true' />
                                        <Star />
                                    </div>
                                ) : (
                                    <div className='flex'>
                                        <Star fill='true' />
                                        <Star fill='true' />
                                        <Star fill='true' />
                                        <Star fill='true' />
                                        <Star fill='true' />
                                    </div>
                                )}
                                <p className='py-3'>{item.text}</p>
                                <div className='flex justify-between items-center'>
                                    <div>
                                        <h3 className='font-semibold text-red-500 text-lg'>{item.name}</h3>
                                        <p className='text-sm mt-1'>{item.trainer}</p>
                                    </div>
                                    <Quote className='text-red-400' />
                                </div>
                            </div>
                        </SwiperSlide>
                    })}
                    <div className='swiper-pagination my-10 gap-1 relative'></div>

                </Swiper>
            </div>
        </div>
    )
}

export default Testimonials