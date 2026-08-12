"use client";
import { motion } from "framer-motion";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Link from "next/link";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

// data
const projects = [
    {
        id: 1,
        category: "frontend",
        title: "Page Evenement",
        description: "React + Tailwind landing page",
        image: "/assets/work/thum1.png",
        link: "",
        github: "",
        tech: ["React", "TailwindCSS", "Shadcn UI"]
    },
    {
        id: 2,
        category: "frontend",
        title: "Nextfolio Portefolio",
        description: "Next.js portfolio site",
        image: "/assets/work/thum2.png",
        link: "",
        github: "",
        tech: ["Next.js", "TailwindCSS", "Shadcn UI"]
    },
    {
        id: 3,
        category: "frontend",
        title: "Nextfolio Portefolio",
        description: "Next.js portfolio page",
        image: "/assets/work/thum3.png",
        link: "",
        github: "",
        tech: ["Next.js", "TailwindCSS", "Shadcn UI"]
    },
    {
        id: 4,
        category: "frontend",
        title: "Nextfolio Portefolio",
        description: "Next.js portfolio page",
        image: "/assets/work/thum4.png",
        link: "",
        github: "",
        tech: ["Next.js", "TailwindCSS", "Shadcn UI"]
    },
    {
        id: 5,
        category: "frontend",
        title: "Page Evenement",
        description: "React + Tailwind landing page",
        image: "/assets/work/thum5.png",
        link: "",
        github: "",
        tech: ["React", "TailwindCSS", "Shadcn UI"]
    },
    {
        id: 6,
        category: "frontend",
        title: "Nextfolio Portefolio",
        description: "Next.js portfolio site",
        image: "/assets/work/thum.png",
        link: "",
        github: "",
        tech: ["Next.js", "TailwindCSS", "Shadcn UI"]
    },
    {
        id: 7,
        category: "frontend",
        title: "Nextfolio Portefolio",
        description: "Next.js portfolio page",
        image: "/assets/work/thum3.png",
        link: "",
        github: "",
        tech: ["Next.js", "TailwindCSS", "Shadcn UI"]
    },
    {
        id: 8,
        category: "frontend",
        title: "Nextfolio Portefolio",
        description: "Next.js portfolio page",
        image: "/assets/work/thum4.png",
        link: "",
        github: "",
        tech: ["Next.js", "TailwindCSS", "Shadcn UI"]
    },
    {
        id: 9,
        category: "frontend",
        title: "Nextfolio Portefolio",
        description: "Next.js portfolio page",
        image: "/assets/work/thum3.png",
        link: "",
        github: "",
        tech: ["Next.js", "TailwindCSS", "Shadcn UI"]
    },
    {
        id: 10,
        category: "design",
        title: "Designe portfolio figma",
        description: "Design de portfolio avec figma",
        image: "/assets/work/thum4.png",
        link: "",
        github: "",
        tech: ["figma", "Pinterest"]
    }
];

const categories = ["frontend", "design", "uiux", "branding"];

const Work = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}
            className="min-h-screen flex items-center py-24 xl:py-0"
        >
            <div className="container mx-auto w-full h-full flex flex-col justify-center">
                {/* heading */}
                <h2 className="h2 mb-6 xl:mb-12 max-w-[600px]">
                    Mes Dernier <span className="text-accent">Projets</span>
                </h2>
                {/* tabs */}
                <Tabs defaultValue="frontend" className="w-full flex flex-col gap-6 xl:gap-12"
                >
                    <TabsList className="flex flex-wrap justify-center items-center gap-4 h-full mb-4 xl:mb-0">
                        {categories.map((category) => {
                            return (
                                <TabsTrigger key={category} value={category} className="capitalize border border-white/10 data-[state=active]:bg-accent data-[state=active]:border-accent h-[40px] px-6 rounded-full cursor-pointer">
                                    {category === "uiux" ? "UI UX Design" : category}
                                </TabsTrigger>
                            );
                        })}
                    </TabsList>

                    {/* tabs content */}
                    <div className="h-[400px] scrollbar scrollbar-thumb-accent scrollbar-track-accent/5 overflow-y-scroll xl:overflow-y-visible">
                        {categories.map((category) => {
                            return (
                                <TabsContent key={category} value={category}>
                                    <Swiper
                                        modules={[Pagination]}
                                        pagination={{ clickable: true, dynamicBullets: true }}
                                        className="h-max xl:h-[460px]"
                                    >
                                        {projects
                                            .filter((project) => project.category === category)
                                            .map((project) => {
                                                return (
                                                    <SwiperSlide key={project.id} className="h-full">
                                                        <div className="flex flex-col xl:flex-row gap-8 xl:gap-12">
                                                            {/* project info */}
                                                            <div className="w-full max-w-[300px] flex flex-col gap-6 xl:gap-8 xl:pt-6 order-2 xl:order-none">
                                                                { /* title */}
                                                                <h3 className="h3">{project.title}</h3>
                                                                {/* tech */}
                                                                <div className="xl:mb-4 max-w-[300px] min-h-[130px]">
                                                                    <p className="mb-4">Technologies Utuliser</p>
                                                                    <ul className="flex flex-wrap gap-4">
                                                                        {project.tech.map((item, index) => {
                                                                            return (
                                                                                <li key={index} className="flex item-center gap-4 bg-[#a883ff]/13 h-[28px] px-[14px] rounded-full">
                                                                                    {item}
                                                                                </li>
                                                                            );
                                                                        })}
                                                                    </ul>
                                                                </div>
                                                                {/* btns */}
                                                                <div className="flex flex-col sm:flex-row gap-2 items-start">
                                                                    <Link href={project.link}>
                                                                        <button className="btn btn-sm btn-accent flex gap-2">
                                                                            <MdArrowOutward className="text-xl" />
                                                                            <span>Voir le projet</span>
                                                                        </button>
                                                                    </Link>
                                                                    <Link href={project.github}>
                                                                        <button className="btn btn-sm btn-white flex gap-2">
                                                                            <FaGithub className="text-xl" />
                                                                            <span>Depo Github</span>
                                                                        </button>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                            {/* project img */}
                                                            <div className="w-full h-[200px] md:h-[300px] xl:h-[400px] relative bg-pink-50/10 order-1 xl:order-none rounded-lg overflow-hidden">
                                                                <Image
                                                                    src={project.image}
                                                                    alt={project.image}
                                                                    fill
                                                                    className="object-cover"
                                                                />
                                                            </div>
                                                        </div>
                                                    </SwiperSlide>
                                                );
                                            })}
                                    </Swiper>
                                </TabsContent>
                            );
                        })}
                    </div>
                </Tabs>
            </div>
        </motion.section>
    );
};

export default Work;