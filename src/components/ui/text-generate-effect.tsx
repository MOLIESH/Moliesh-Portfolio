"use client";
import { cn } from "@/lib/utils";
import { motion, stagger, useAnimate } from "framer-motion";
import { useEffect } from "react";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ?? 1,
        delay: stagger(0.2),
      },
    );
  }, [animate, duration, filter]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="relative z-20 max-w-sm whitespace-pre-line bg-gradient-to-b from-neutral-200 to-neutral-400 bg-clip-text text-center font-bold text-transparent opacity-0 md:max-w-lg"
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("z-20 font-bold", className)}>
      <div className="z-20 mt-4">
        <div className="relative z-20 max-w-sm whitespace-pre-line bg-gradient-to-b from-neutral-200 to-neutral-400 bg-clip-text text-center font-bold text-transparent md:max-w-lg">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
