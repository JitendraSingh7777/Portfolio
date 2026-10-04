"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+91) 750 523 7069",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "jitendrasinghpanwar002@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Rishikesh, Uttarakhand",
  },
];

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision. Feel free to reach out
                using the form below or contact me directly.
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  placeholder="Firstname"
                  className="border-white/10 focus:border-accent font-light bg-primary placeholder:text-white/60"
                />
                <Input
                  type="text"
                  placeholder="Lastname"
                  className="border-white/10 focus:border-accent font-light bg-primary placeholder:text-white/60"
                />
                <Input
                  type="email"
                  placeholder="Email address"
                  className="border-white/10 focus:border-accent font-light bg-primary placeholder:text-white/60"
                />
                <Input
                  type="tel"
                  placeholder="Phone number"
                  className="border-white/10 focus:border-accent font-light bg-primary placeholder:text-white/60"
                />
              </div>
              {/* select */}
              <Select>
                <SelectTrigger className="w-full border-white/10 focus:border-accent font-light bg-primary text-white/65">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent
                  position="popper"
                  className="w-[--radix-select-trigger-width] bg-[#27272c] text-white border-white/10"
                >
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="web">Web Development</SelectItem>
                    <SelectItem value="ui">UI/UX Design</SelectItem>
                    <SelectItem value="logo">Logo Design</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* textarea */}
              <Textarea
                className="h-[200px] border-white/10 focus:border-accent font-light bg-primary placeholder:text-white/60"
                placeholder="Type your message here."
              />
              {/* button */}
              <Button size="default" className="max-w-xs">
                Send message
              </Button>
            </form>
          </div>

          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-xl flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl text-white">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
