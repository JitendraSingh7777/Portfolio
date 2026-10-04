"use client";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { motion } from "framer-motion";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const about = {
  title: "About me",
  description:
    "I'm Jitendra Panwar, a Frontend Developer from Uttarakhand, India, currently completing my B.Tech in Computer Science and Engineering (expected 2026), after earlier finishing a Diploma in Electrical Engineering in 2023. I specialize in building responsive, accessible web interfaces using React.js, Next.js, and Tailwind CSS, and I've built projects like an AI-powered code review tool, an e-commerce storefront, and a web-based text editor with a Node.js/Express backend. I'm also MERN Stack certified. Hindi is my native language and I'm fully fluent in it, while English is my working language for technical and professional communication, developed through my education and project work. My key skills include React, JavaScript, REST API integration, Git/GitHub, and Figma, along with some hands-on experience integrating AI APIs like Gemini into web applications.",
  info: [
    { fieldname: "Name", fieldValue: "Jitendra Panwar" },
    { fieldname: "Phone", fieldValue: "(+91) 7505237069" },
    { fieldname: "Email", fieldValue: "jitendrasinghpanwar002@gmail.com" },
    { fieldname: "Nationality", fieldValue: "Indian" },
    { fieldname: "Github", fieldValue: "https://github.com/JitendraSingh7777" },
  ],
};

const certification = {
  title: "My certifications",
  description:
    "A foundational learning experience that introduces core generative AI concepts, foundation models, and responsible AI practices. It provides practical insight into how organizations leverage managed cloud services—specifically Amazon Bedrock—to build, prompt, and deploy secure generative AI applications without requiring deep prior machine learning expertise.",
  items: [
    {
      company: "Codsoft",
      position: "C++ Programming",
      duration: "August 2026",
    },
    {
      company: "Forage",
      position: "Introduction to Software Engineering Job Simulation",
      duration: "24 July 2026",
    },
    {
      company: "AWS Training and Certification",
      position: "Fundamentals in Generative AI",
      duration: "12 August 2026",
    },
  ],
};

const education = {
  title: "My Education",
  description:
    "Academic background spanning electrical engineering to computer science, building a strong foundation in problem-solving and software development.",
  items: [
    {
      institution: "Foothills Academy",
      position: "12th",
      duration: "2019-2020",
    },
    {
      institution: "Govt Polytechnic Garhi Shyampur",
      position: "Diploma in Electrical Engineering",
      duration: "2020-2023",
    },
    {
      institution: "Uttarakhand Technical University",
      position: "B.Tech in Computer Science Engineering",
      duration: "2023-2026",
    },
  ],
};

const skills = {
  title: "My Skills",
  description:
    "Technologies and tools I use to build responsive, accessible web interfaces.",
  skillList: [
    { icon: <FaHtml5 />, name: "html 5" },
    { icon: <FaCss3Alt />, name: "css 3" },
    { icon: <FaJs />, name: "javascript" },
    { icon: <FaReact />, name: "react.js" },
    { icon: <SiNextdotjs />, name: "next.js" },
    { icon: <SiTailwindcss />, name: "tailwind.css" },
    { icon: <FaNodeJs />, name: "node.js" },
    { icon: <FaFigma />, name: "figma" },
  ],
};
const triggerClass =
  "justify-center bg-[#27272c] w-full text-white rounded-3xl p-3 text-base hover:bg-[#32323a] hover:text-white data-active:bg-accent data-active:text-primary data-active:font-bold data-active:shadow-sm dark:data-active:bg-accent dark:data-active:text-primary dark:data-active:border-transparent";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="certification"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col h-auto group-data-horizontal/tabs:h-auto w-full max-w-[300px] mx-auto xl:mx-0 gap-13 bg-transparent">
            <TabsTrigger className={triggerClass} value="certification">
              Certification
            </TabsTrigger>
            <TabsTrigger className={triggerClass} value="education">
              Education
            </TabsTrigger>
            <TabsTrigger className={triggerClass} value="skills">
              Skills
            </TabsTrigger>
            <TabsTrigger className={triggerClass} value="about">
              About me
            </TabsTrigger>
          </TabsList>

          {/* Content */}
          <div className="min-h-[70vh] w-full">
            {/* Certification */}
            <TabsContent value="certification" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{certification.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {certification.description}
                </p>
                <ScrollArea className="h-[320px] ">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {certification.items.map((item) => (
                      <li
                        key={`${item.company}-${item.position}`}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-3">
                          {/* Dot */}
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[320px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item) => (
                      <li
                        key={`${item.institution}-${item.position}`}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-3">
                          {/* Dot  */}
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Skills */}
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill) => (
                    <li key={skill.name}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                              {skill.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            {/* About */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item) => (
                    <li
                      key={item.fieldname}
                      className="flex items-center justify-center xl:justify-start gap-4"
                    >
                      <span className="text-white/60">{item.fieldname}</span>
                      <span className="text-lg break-all">
                        {item.fieldValue}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
