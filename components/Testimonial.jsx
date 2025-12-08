"use client";

// import swiper client components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay } from "swiper/modules";
// import swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { ImQuotesLeft } from 'react-icons/im'

// data
const testimonials = [
    {
        message: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        name: "John Doe"
    },
    {
        message: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        name: "John Doe"
    },
    {
        message: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        name: "John Doe"
    }
]

const Testimonial = () => {
    return (
        <Swiper
            modules={[Autoplay]}
            loop={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            className="w-full max-w-[310px] md:max-w-[520px] bg-secondary rounded-lg"
        >
            {testimonials.map((person, index) => {
                return <SwiperSlide key={index}>{person.message}</SwiperSlide>
            })}
        </Swiper>
    );
};

export default Testimonial;