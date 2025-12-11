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
        category: "frontend",
        title: "Nextfolio Portefolio",
        description: "Next.js portfolio page",
        image: "/assets/work/thum4.png",
        link: "",
        github: "",
        tech: ["Next.js", "TailwindCSS", "Shadcn UI"]
    }
];

const categories = ["Frontend", "design", "uiux", "branding"];

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
                                <TabsTrigger key={category} value={category} className="capitalize border border-with/10 data-[state=active]:bg-accent data-[state=active]:border-accent h-[40px] px-6 rounded-full cursor-pointer">
                                    {category === "uiux" ? "UI UX Design" : category}
                                </TabsTrigger>
                            );
                        })}
                    </TabsList>
                </Tabs>
            </div>
        </motion.section>
    );
};

export default Work;