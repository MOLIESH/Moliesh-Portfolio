"use client";
import { opacityAnimation } from "@/constants/animation";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import Link from "next/link";
import { TextGenerateEffect } from "./ui/text-generate-effect";

export default function HeroSection() {
  return (
    <section className="py-36">
      <div className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center bg-grid-white/[0.05]">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[#020223]/100 [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)]"></div>
        {/* <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[#020223]/100 [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)]" /> */}
      </div>
      <div className="my-20 flex w-full flex-col items-center justify-center gap-2">
        <TextGenerateEffect
          className="bg-gradient-to-tr"
          duration={1}
          filter={false}
          words="Hello👋,I'm MOLIESH B and I'm a"
        />
        <motion.h1
          variants={opacityAnimation}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="relative z-20 bg-transparent bg-gradient-to-br from-neutral-200 to-neutral-600 bg-clip-text py-1 text-center text-5xl font-bold tracking-wider text-transparent md:text-6xl"
        >
          FullStack
          <span className="relative ml-1 bg-transparent bg-gradient-to-b from-[#006effbb] to-[#3c91ff9f] bg-clip-text">
            Web Developer
          </span>
        </motion.h1>
        <TextGenerateEffect
          className="text-xs"
          duration={0.5}
          filter={false}
          words="Passionate about crafting beautiful, high-performance websites and web apps with a sharp focus on design and flawless user experiences."
        />
        <motion.div
          variants={opacityAnimation}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="my-8 flex items-center justify-center gap-6"
        >
          <Link
            href="#Projects"
            className="z-20 rounded-xl bg-gradient-to-tr from-[#091729bb] to-[#0c75ff9f] p-4 text-sm text-secondary-foreground transition-all duration-500 hover:scale-95 hover:bg-gradient-to-tr hover:from-[#09172938] hover:to-[#0c75ff4f]"
          >
            🚀 Check My Projects
          </Link>
          <Link
            href="#Contact"
            className="z-20 flex items-center justify-center gap-4 rounded-xl bg-gradient-to-tr from-[#091729bb] to-[#0c75ff9f] p-4 text-sm text-secondary-foreground transition-all duration-500 hover:scale-95 hover:bg-gradient-to-tr hover:from-[#09172938] hover:to-[#0c75ff4f]"
          >
            <Mail /> Email Me
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
