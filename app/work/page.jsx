"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "project 1",
    description:
      "An e-commerce web application built using modern web standards.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "JavaScript" }],
    image: "/Thumb1.png",
    live: "https://jitendrasingh7777.github.io/E-Commerce-website/",
    github: "https://github.com/JitendraSingh7777/E-Commerce-website",
  },
  {
    num: "02",
    category: "frontend",
    title: "project 2",
    description:
      "A fully responsive layout template for a modern gym and fitness website.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "JavaScript" }],
    image: "/Thumb2.png",
    live: "https://jitendrasingh7777.github.io/Template-of-Gym-website/",
    github: "https://github.com/JitendraSingh7777/Template-of-Gym-website",
  },
  {
    num: "03",
    category: "frontend",
    title: "project 3",
    description:
      "A dynamic real-time weather application fetching live forecast data.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "JavaScript" }],
    image: "/Thumb3.png",
    live: "https://jitendrasingh7777.github.io/Weather-App/",
    github: "https://github.com/JitendraSingh7777/Weather-App",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    // Fixed: using the array 'projects' instead of the singular 'project' state variable
    if (projects[currentIndex]) {
      setProject(projects[currentIndex]);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        {/* Main Flex container: Left Column (Text) & Right Column (Slider) */}
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          {/* Left Side: Project Information & Buttons */}
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px]">
              {/* Outline Number */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>

              {/* Project Category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>

              {/* Project Description */}
              <p className="text-white/60">{project.description}</p>

              {/* Tech Stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>

              {/* Border Divider */}
              <div className="border border-white/20"></div>

              {/* Action Buttons */}
              <div className="flex items-center gap-4">
                {/* Live Project Button */}
                <Link
                  href={project.live || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                {/* Github Repository Button */}
                <Link
                  href={project.github || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Side: Image Slider */}
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((item, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* Image Overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>

                      {/* Slide Image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={item.image}
                          fill
                          className="object-cover"
                          alt={item.title}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-88 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full jsutify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-priamry text-[22px] w-[44px]    h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
