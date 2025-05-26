import { stack1, stack2 } from "@/constants/details";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export default function Stacks({ icon, title, description }: GridItem) {
  return (
    <article className="relative z-10 transition duration-200">
      <header>
        <div className="mb-2 mt-2 flex items-center justify-center gap-2 bg-transparent bg-gradient-to-br from-neutral-200 to-neutral-600 bg-clip-text font-bold text-transparent">
          {icon}
          {title}
        </div>
        <div className="text-center text-sm font-normal text-neutral-300">
          {description}
        </div>
      </header>
      <div className="relative flex h-52 w-full flex-col items-center justify-center gap-4 overflow-hidden antialiased">
        <InfiniteMovingCards
          items={stack1}
          speed="normal"
          direction="right"
          type="stack"
        />
        <InfiniteMovingCards
          items={stack2}
          speed="normal"
          direction="left"
          type="stack"
        />
      </div>
    </article>
  );
}
