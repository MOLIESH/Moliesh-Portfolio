import { container, listItem } from "@/constants/animation";
import { logoListItem } from "@/constants/data/generalData";
import { motion } from "framer-motion";
import { ArrowUpRight, Dot, Download } from "lucide-react";
import Link from "next/link";

export default function AboutGrid({
  title,
  description,
  spanText,
}: AboutGridProps) {
  return (
    <article className="relative z-20 transition duration-200">
      <div className="relative mb-2 mt-2 flex flex-col items-start justify-start gap-2">
        <div className="flex w-full flex-wrap justify-between gap-x-2 gap-y-4">
          <div className="flex gap-2">
            <p className="flex cursor-pointer items-center justify-start rounded-full bg-gradient-to-l from-[#5251513a] to-[#55545442] p-1.5 pr-4 text-xs transition-all duration-300 hover:scale-105">
              <Dot className="ml-0 scale-150 text-teal-400" /> Available To Work
            </p>
            <Link
              href="https://github.com/MOLIESH"
              className="flex items-center justify-start gap-2 rounded-full bg-gradient-to-l from-[#5251513a] to-[#55545442] p-1.5 pr-4 text-xs transition-all duration-300 hover:scale-105"
            >
              <ArrowUpRight className="w-4 text-teal-400" /> GitHub
            </Link>
          </div>
          <Link
            className="flex cursor-pointer items-center justify-center gap-1.5 rounded-lg bg-slate-400/30 p-1.5 pl-3 text-sm shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all duration-300 hover:scale-105"
            href="/MOLIESH(RESUME).pdf"
            target="_blank"
            download
          >
            Resume
            <Download className="h-6 w-8 p-1" />
          </Link>
        </div>

        <h1 className="mt-2 bg-transparent bg-gradient-to-br from-neutral-400 to-neutral-200 bg-clip-text text-5xl font-bold tracking-wide text-transparent">
          {title}
        </h1>
        <p className="my-2 text-center text-sm font-semibold text-neutral-300">
          {description} <span className="text-sky-500">{spanText}</span>
        </p>
        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-3 flex w-full max-w-xl flex-wrap gap-x-6 gap-y-4 rounded-2xl bg-slate-500/30 px-2 py-2 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
        >
          {logoListItem.map((list: any, index: number) => (
            <motion.li
              variants={listItem}
              key={index}
              className="flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-gradient-to-l from-[#52515185] to-[#5554548a] p-2 pr-4 text-sm tracking-wide shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
            >
              {list.logo} {list.name}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </article>
  );
}
