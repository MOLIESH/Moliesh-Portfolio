"use client";
import { Layers3, LayoutGrid } from "lucide-react";
import AboutGrid from "./AboutGrid";
import Stacks from "./Stacks";
import { BentoGrid, BentoGridItem } from "./ui/bentoGrid";
import ContactGrid from "./ContactGrid";
import ServicesGrid from "./ServicesGrid";

export const GridITems: GridItem[] = [
  {
    customGrid: (
      <AboutGrid
        title="MOLIESH B"
        description="I’m a Fullstack "
        spanText="Web Developer"
      />
    ),
    className: "md:col-span-2  md:row-span-1 md:col-start-1   md:row-start-1 ",
  },
  {
    customGrid: (
      <Stacks
        title="My Stacks"
        description="Tech Arsenal"
        icon=<Layers3 className="h-6 w-6 rounded-full stroke-sky-500 text-sky-500" />
      />
    ),
    className: " md:col-span-2  md:row-start-1  ",
  },
  {
    customGrid: (
      <ContactGrid
        title="Let's Work Together"
        description="Turn Visions into Reality"
      />
    ),
    className: "md:col-span-1  md:row-start-2",
    icon: (
      <Layers3 className="h-8 w-8 rounded-full stroke-sky-500 text-sky-500" />
    ),
  },
  {
    customGrid: (
      <ServicesGrid
        title="Services"
        description="Solutions Suite"
        icon={<LayoutGrid className="h-6 w-6 text-sky-500" />}
      />
    ),
    className: "md:col-span-3 md:row-span-1  row-start-3 ",
  },
];
export default function About() {
  return (
    <section
      id="About"
      aria-labelledby="about-section"
      className="mx-auto w-full max-w-7xl scroll-mt-16"
    >
      <BentoGrid className="scroll-mt-10 md:auto-rows-[20rem]">
        {GridITems.map((item, i) => (
          <BentoGridItem
            customGrid={item.customGrid}
            key={i}
            title={item.title}
            description={item.description}
            className={item.className}
            icon={item.icon}
          />
        ))}
      </BentoGrid>
    </section>
  );
}
