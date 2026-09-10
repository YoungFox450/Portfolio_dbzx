"use client"
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { MdArrowOutward } from "react-icons/md";
import { HiOutlinePhone, HiOutlineMail } from "react-icons/hi";

//components
import Blob from "@/components/Blob";
import Image from "next/image";
import avatarImg from "@/public/assets/avatar1.png";
import Socials from "@/components/Socials";
import Pattern from "@/components/Pattern";

const Home = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-screen flex items-center py-24 xl:py-0"
    >
      {/*pattern*/}
      <Pattern />
      <div className="flex flex-col xl:flex-row items-center justify-between gap-10 xl:gap-8 w-full">
        {/*text*/}
        <div className="w-full max-w-[550px] flex flex-col items-center xl:items-start text-center xl:text-left mx-auto xl:mx-0">
          <h1 className="h1 mb-7">
            Hey! c'est Odrey, <br />
            <TypeAnimation
              sequence={["Web Developer Junior", 2000, "Web Designer", 2000]}
              wrapper="span"
              speed={40}
              className="text-accent"
              repeat={Infinity}
              cursor={false}
            />
          </h1>
          <p className="max-w-[500px] mb-11 text-sm sm:text-base">
            je crée des sites web et des applications web visuellement captivants
            et conviviaux qui transforment vos idées en expériences
            numériques fluides et engageantes.
          </p>
          <a href="/contact" className="btn btn-lg btn-accent mb-16">
            <div className="flex items-center gap-3">
              <span>Parlons.</span>
              <MdArrowOutward className="text-xl" />
            </div>
          </a>
          {/*contact info*/}
          <div className="flex flex-col md:flex-row xl:items-center gap-4 xl:gap-8 mb-12 xl:mb-0 w-full md:w-auto">
            {/*contact info*/}
            <div className="flex items-center justify-center md:justify-start gap-4 tel">
              <span className="text-accent">
                <HiOutlinePhone className="text-xl" />
              </span>
              <span>+243 987 139 590</span>
            </div>
            {/*mail*/}
            <div className="flex items-center justify-center md:justify-start gap-4 tel">
              <span className="text-accent">
                <HiOutlineMail className="text-xl" />
              </span>
              <span>odreymvula05@gmail.com</span>
            </div>
          </div>
          {/*socials*/}
          <Socials containerStyles="flex 2xl:flex-col gap-6 xl:hidden 2xl:flex 2xl:absolute 2xl:top-1/2 2xl:right-2 2xl:transform 2xl:-translate-x-1/2 2xl:-translate-y-1/2"
            incoStyles="bg-accent text-white hover:bg-accent-hover transition w-[48px] h-[48px] text-[22px] flex items-center justify-center rounded-full cursor-pointer"
          />
        </div>

        {/*blob & image*/}
        <div className="hidden xl:block flex-1 relative z-20">
          {/*blob*/}
          <Blob containerStyles="w-[560px] h-[560px]" />
          {/*avatar img*/}
          <Image
            src={avatarImg}
            alt="Portrait de Odrey"
            width={440}
            height={600}
            quality={100}
            className="absolute -top-16 left-30"
          />
          {/*overlay gradient*/}
          <div className="w-full h-41 absolute bottom-0 left-0 right-0 bg-linear-to-t from-primary via-primary/90 to-primary/9"></div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;