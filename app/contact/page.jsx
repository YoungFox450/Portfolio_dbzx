"use client";
import { motion } from "framer-motion";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from "@/components/ui/select";

import { HiOutlineMapPin, HiOutlineArrowLongRight } from "react-icons/hi2";
import { HiOutlinePhone, HiOutlineMail } from "react-icons/hi";

const Contact = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}
            className="h-screen flex items-center py-24 xl:py-0"
        >
            <div className="container mx-auto w-full h-full flex flex-col items-center xl:justify-center xl:overflow-hidden scrollbar scrollbar-thumb-accent scrollbar-track-accent/5 overflow-y-scroll xl:overflow-y-visible">
                <div className="w-full">
                    <div className="flex flex-col xl:flex-row gap-6">
                        { /* info text */}
                        <div>info text</div>
                        {/* from */}
                        <div className="flex-1">
                            <form className="flex flex-col gap-6 items-start">
                                { /* first and last name */}
                                <div className="flex flex-col xl:flex-row gap-6 w-full">
                                    <div className="w-full">
                                        <Label htmlfor="name">
                                            Nom <span className="text-accent">*</span>
                                        </Label>
                                        <Input
                                            id="nom"
                                            name="nom"
                                            placeholder="Nom"
                                            required
                                        />
                                    </div>
                                    <div className="w-full">
                                        <Label htmlfor="name">
                                            Postnom <span className="text-accent">*</span>
                                        </Label>
                                        <Input
                                            id="postnom"
                                            name="postnom"
                                            placeholder="Postnom"
                                            required
                                        />
                                    </div>
                                </div>
                                {/* email */}
                                <div className="w-full">
                                    <Label htmlfor="name">
                                        Email <span className="text-accent">*</span>
                                    </Label>
                                    <Input
                                        id="email"
                                        name="email"
                                        placeholder="votremail@gmail.com"
                                        required
                                    />
                                </div>
                                {/* select */}
                                <div className="w-full">
                                    <Label htmlfor="name">
                                        Je suis interessée par <span className="text-accent">*</span>
                                    </Label>
                                    <Select name="service" required>
                                        <SelectTrigger
                                            id="service"
                                            className="w-full !h-12 bg-white/5 border-white/10 px-4"
                                        >
                                            <SelectValue placeholder="Choisir" />
                                        </SelectTrigger>
                                        <SelectContent className="bg-black border-white/20">
                                            <SelectItem value="webdev">Développement Web</SelectItem>
                                            <SelectItem value="uiux">UI & UX Design</SelectItem>
                                            <SelectItem value="logo">Design Logo</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                {/* textarea */}
                                <div className="w-full">
                                    <Label htmlfor="name">
                                        Message <span className="text-accent">*</span>
                                    </Label>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        placeholder="Ecrivez votre message ici..."
                                        className="min-h-[160px] bg-white/5 border-white/10 focus-visible:border-accent focus-visible:ring-accent focus-visible:ring-[1px] resize-none p-4 selection:bg-accent placeholder:text-white/50"
                                    />
                                </div>
                                {/* btn */}

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Contact;