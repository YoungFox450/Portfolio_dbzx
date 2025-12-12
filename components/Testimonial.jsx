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
        message: "J'ai été époustouflé par le service rendu par Nox, je le recommande vivement.",
        name: "Mark Nangu"
    },
    {
        message: "J'ai eu à solliciter les services de Nox et je n'ai pas été déçu(e). Merci beaucoup.",
        name: "Michel Mukeba"
    },
    {
        message: "L'expérience et le professionnalisme de Nox m'ont mise en confiance. Je recommande ses services.",
        name: "Naomie Mananga"
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