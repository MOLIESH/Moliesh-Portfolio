"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
  type,
}: {
  items: {
    id: string | number;
    name?: string;
    className?: string;
    description?: string;
    icon?: string | undefined;
    stackLogo?: string | undefined;
    logo?: string | undefined;
  }[];
  type?: "stack" | "service";
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  useEffect(() => {
    addAnimation();
  }, []);

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards",
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse",
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-6xl overflow-hidden [mask-image:linear-gradient(to_left,transparent,white_20%,white_80%,transparent)]",
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap items-center justify-center gap-6",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {type === "stack" && (
          <>
            {items.map((item) => (
              <li
                className="relative flex-shrink-0 overflow-hidden rounded-lg bg-gradient-to-l from-[#5251513a] to-[#55545442]"
                key={item.id}
              >
                <div
                  className={cn(
                    "flex h-12 items-center justify-center gap-2 rounded-md px-4",
                    item.className,
                  )}
                >
                  <Image
                    width={100}
                    height={100}
                    src={
                      item.stackLogo || "stack image used for moliesh portfolio"
                    }
                    className="h-5 w-5"
                    alt={`${item.name} - stack image used for moliesh portfolio`}
                  />
                  {item.name}
                </div>
              </li>
            ))}
          </>
        )}

        {type === "service" && (
          <>
            {items.map((item) => (
              <div
                key={item.id}
                className="relative overflow-hidden rounded-lg border bg-gradient-to-l from-[#5251513a] to-[#55545442] p-2"
              >
                <div className="flex h-auto w-[340px] flex-col justify-between gap-2 rounded-md p-6">
                  <Image
                    width={48}
                    height={48}
                    src={
                      item.logo ||
                      "unknown services logo image used for moliesh portfolio"
                    }
                    alt={`${item.logo}- services logo image used for moliesh portfolio`}
                    className="lucide lucide-palette text-sky-500"
                  />
                  <div className="space-y-2">
                    <h3 className="font-bold">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </ul>
    </div>
  );
};
