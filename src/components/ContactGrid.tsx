"use client";
import { Crown, Mail, Phone } from "lucide-react";
import Link from "next/link";

export default function Stacks({ title, description }: GridItem) {
  return (
    <article className="relative z-20 mb-4 flex flex-col items-center justify-center gap-2 transition duration-200">
      <div className="rounded-full bg-slate-400/50 p-2.5">
        <Crown className="text-sky-400" fill="#38bdf8" />
      </div>
      <h1 className="b mb-2 mt-2 flex items-center justify-center gap-2 text-xl font-semibold">
        {title}
      </h1>
      <p className="text-center text-sm font-normal text-neutral-300">
        {description}
      </p>
      <Link
        href="#Contact"
        className="mt-4 flex w-full items-center justify-center gap-3 rounded-xl bg-slate-700/50 p-4 transition-all duration-300 hover:scale-95 hover:bg-slate-500/60"
      >
        <Mail className="h-6 w-6 text-sky-500" />
        Email Me
      </Link>
      <Link
        href="https://wa.me/919385806752?text=hello"
        className="flex w-full items-center justify-center gap-3 rounded-xl bg-slate-700/50 p-4 transition-all duration-300 hover:scale-95 hover:bg-slate-500/60"
      >
        <Phone className="h-5 w-5 text-sky-500" fill="#38bdf8" />
        WhatsApp Me
      </Link>
    </article>
  );
}
