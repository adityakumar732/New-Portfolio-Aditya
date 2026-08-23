import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import { Quote, Rocket, Zap, Users, Layers, Eye } from 'lucide-react';

const Testimonials = () => {

    const points = [
        {
            id: 1,
            icon: Rocket,
            title: 'Ships Production Code',
            text: "I build and maintain a live hotel room booking platform at INNsight — not practice projects, real features used by real users."
        },
        {
            id: 2,
            icon: Zap,
            title: 'Fast Learner, Faster Shipper',
            text: "From JSpiders training to shipping production features at INNsight in a short span — I pick up new tools quickly and put them to work immediately."
        },
        {
            id: 3,
            icon: Users,
            title: 'Client-Facing Ownership',
            text: "I handle daily UI updates against real client requirements inside Agile sprints — not just writing code, but owning outcomes end to end."
        },
        {
            id: 4,
            icon: Layers,
            title: 'Full-Stack Capable',
            text: "Beyond UI, I've built complete MERN applications like SwiftShop — JWT authentication, admin dashboards, and REST APIs included."
        },
        {
            id: 5,
            icon: Eye,
            title: 'Detail-Oriented by Habit',
            text: "From WAVE accessibility audits to cross-device testing, I catch the small things that make an interface actually work for everyone."
        },
    ]

    return (
        <div id='testimonials' className='py-10 bg-gray-100 relative' >
            <h1 className='text-center text-2xl lg:text-4xl font-bold'>Why Work With Me</h1>
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
                    className="mySwiper !items-stretch"
                >
                    {points.map((item) => {
                        const Icon = item.icon
                        return <SwiperSlide key={item.id} className='!h-auto'>
                            <div className='border border-gray-400 shadow-md shadow-red-500 rounded-lg flex flex-col p-4 h-full'>
                                <div className='flex'>
                                    <Icon className='text-red-500' />
                                </div>
                                <h3 className='font-semibold text-red-500 text-lg py-3'>{item.title}</h3>
                                <p className='flex-grow'>{item.text}</p>
                                <div className='flex justify-end items-center mt-3'>
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