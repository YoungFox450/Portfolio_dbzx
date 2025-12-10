"use client";

// import swiper client components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay } from "swiper/modules";
// import swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { ImQuotesLeft } from "react-icons/im";

// data
const testimonial = [
    {
        message: "Lorem ipsum dolor sit amet consectetur adipisicing consectetur elit.",
        name: "John Doe"
    },
    {
        message: "Lorem ipsum dolor sit amet consectetur adipisicing consectetur elit.",
        name: "John Doe"
    },
    {
        message: "Lorem ipsum dolor sit amet consectetur adipisicing consectetur elit.",
        name: "John Doe"
    }
]

const Testimonial = () => {
    return (
        <Swiper
            //modules={[Autoplay]}
            loop={false}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            className="w-full max-w-[310px] md:max-w-[520px] bg-secondary rounded-lg"
        >
            {testimonial.map((person, index) => {
                return <SwiperSlide key={index}>
                    <div className="flex px-8 py-6 gap-8">
                        <ImQuotesLeft className="hidden xl:flex text-8xl text-accent" />
                        <div className="flex flex-col gap-2">
                            <div>{person.message}</div>
                            <div className="self-end text-accent font-semibold">{person.name}</div>
                        </div>
                    </div>
                </SwiperSlide>
            })}
        </Swiper>
    );
};

export default Testimonial;