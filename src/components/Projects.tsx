import { projects } from "@/constants/details";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Avatars } from "./ui/avatar-alignment";

export default function Projects() {
  return (
    <section
      id="Projects"
      className="flex scroll-mt-20 flex-col items-center justify-center py-10"
    >
      <header className="mx-auto mb-10 flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h1 className="font-heading bg-gradient-to-b from-neutral-100 to-neutral-500 bg-clip-text text-4xl font-bold leading-[1.1] text-transparent sm:text-4xl md:text-6xl">
          My Projects
        </h1>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          A collection of my best work, where design meets functionality to
          solve real-world challenges.
        </p>
      </header>
      <div
        role="grid"
        aria-label="Grid"
        className="grid max-w-7xl justify-center gap-4 px-2.5 sm:grid-cols-2 md:grid-cols-2 md:px-8 lg:grid-cols-3"
      >
        {projects.map((item) => (
          <article
            role="gridcell"
            aria-label="Bento Grid Item"
            key={item.id}
            className="group relative overflow-hidden rounded-xl border border-transparent shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all duration-300"
          >
            <Link href={item.href}>
              <Image
                src={item.img}
                width={500}
                height={300}
                className="h-80 rounded-xl object-contain transition-all duration-300 group-hover:opacity-65 group-hover:shadow-[rgba(12,117,255,0.31)_0px_3px_8px] md:h-[240px]"
                alt={`MOLIESH portfoio project image ${item.img}`}
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-b from-[#0c75ff4f] via-transparent to-black p-4 transition-all duration-500 group-hover:opacity-100 sm:opacity-0">
                <h1 className="flex items-center justify-start text-lg font-bold text-white">
                  {item.title}
                  <ArrowUpRight className="h-10 w-10 rotate-12 p-3" />
                </h1>
                <p className="max-w-sm text-xs text-gray-200">
                  {item.subTitle}
                </p>
              </div>
              <div className="absolute left-0 top-2 my-2 ml-2 flex w-full flex-row items-center justify-start gap-1 transition-all duration-300 group-hover:translate-x-0 sm:-translate-x-44">
                <Avatars items={item.logos} />
              </div>

              <div className="absolute right-4 top-3 -translate-y-20 rounded-full border bg-card text-card-foreground transition-all duration-200 ease-linear group-hover:flex group-hover:translate-y-0">
                <ArrowUpRight className="h-10 w-10 rotate-12 p-3" />
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
