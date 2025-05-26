"use client";
import { fadeInAnimation } from "@/constants/animation";
import { cardArr } from "@/constants/details";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Services() {
  return (
    <section
      id="Services"
      className="mx-auto scroll-mt-20 space-y-6 py-12 md:py-12 lg:py-24"
    >
      <header className="mx-auto mb-10 flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h1 className="font-heading bg-gradient-to-b from-neutral-100 to-neutral-500 bg-clip-text text-4xl font-bold leading-[1.1] text-transparent sm:text-4xl md:text-6xl">
          What I Do
        </h1>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          I create custom websites and web apps that combine beautiful design
          with seamless functionality.
        </p>
      </header>
      <div className="mx-auto grid justify-center gap-4 border border-transparent px-2.5 sm:grid-cols-2 md:max-w-7xl md:grid-cols-2 md:px-10 lg:grid-cols-3">
        {cardArr.map((item, index) => (
          <motion.div
            variants={fadeInAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
            key={item.id}
            className="group relative cursor-pointer overflow-hidden rounded-lg border border-transparent bg-transparent bg-gradient-to-tr from-[#09172938] to-[#0c75ff4f] hover:shadow-[rgba(12,117,255,0.31)_0px_3px_8px]"
          >
            <div className="flex h-[200px] flex-col justify-between rounded-md p-6">
              <Image
                width={48}
                height={48}
                src={item.logo || "/unknown"}
                alt={`${item.logo} MOLIESH portfolio image`}
                className="lucide lucide-palette"
              />
              <div className="space-y-2">
                <h3 className="font-bold">{item.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
