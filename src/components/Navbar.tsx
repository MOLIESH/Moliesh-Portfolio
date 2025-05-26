"use client";
import { cn } from "@/lib/utils";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { Dot } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { buttonVariants } from "./ui/button";

export default function Navbar() {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      const direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });
  return (
    <AnimatePresence mode="wait">
      <motion.header
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className="fixed inset-x-0 top-10 z-[5000] mx-auto flex max-w-fit items-center justify-center space-x-4 rounded-full border border-white/[0.2] bg-gradient-to-tr from-[#0917299f] to-[#0c75ffab] p-4 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
      >
        <Link
          href="#About"
          className={cn(
            "!p-0 !text-xs",
            buttonVariants({ variant: "linkHover2", size: "xs" }),
          )}
        >
          About
        </Link>
        <Link
          href="#Projects"
          className={cn(
            "!px-0 !text-xs",
            buttonVariants({ variant: "linkHover2", size: "xs" }),
          )}
        >
          Projects
        </Link>
        <Link
          className="relative px-4 text-xs font-semibold drop-shadow-xl"
          href="/"
        >
          <Dot className="absolute -left-1 -top-1" />
          MOLIESH B
          <Dot className="absolute -right-1 -top-1" />
        </Link>
        <Link
          href="#Services"
          className={cn(
            "!p-0 !text-xs",
            buttonVariants({ variant: "linkHover2", size: "xs" }),
          )}
        >
          Services
        </Link>
        <Link
          href="#Contact"
          className={cn(
            "!p-0 !text-xs",
            buttonVariants({ variant: "linkHover2", size: "xs" }),
          )}
        >
          Contact
        </Link>
      </motion.header>
    </AnimatePresence>
  );
}
